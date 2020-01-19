import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import socketio from "socket.io-client";
import "./dashboard.css";
import api from "../../services/api";

function Dashboard() {
    const [spots, setSpots] = useState([]);
    const [requests, setRequests] = useState([]);

    const user_id = localStorage.getItem("user");

    const socket = useMemo(() => socketio("http://localhost:3333", {
        query: {
            user_id
        }
    }), [user_id]);

    useEffect(() => {
        socket.on("booking_request", request => {
            setRequests([...requests, request]);
        });
    }, [requests, socket]);

    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem("user");

            const response = await api.get("/dashboard", { headers: {user_id} });

            setSpots(response.data);
        }

        loadSpots();
    }, []);

    async function handleAccept(booking_id) {
        await api.post(`/bookings/${booking_id}/approvals`);

        setRequests(requests.filter(request => request._id !== booking_id));
    }

    async function handleReject(booking_id) {
        await api.post(`/bookings/${booking_id}/rejections`);

        setRequests(requests.filter(request => request._id !== booking_id));
    }

    return (
        <>
        <ul className="notifications">
            {requests.map(request => (
                <li key={request._id}>
                    <p><strong>{request.user.email}</strong> está solicitando uma reserva em <strong>{request.spot.company}</strong> em <strong>{request.date}</strong></p>
                    <button onClick={() => {handleAccept(request._id)}} className="acceptButton">ACEITAR</button>
                    <button onClick={() => {handleReject(request._id)}} className="rejectButton">REJEITAR</button>
                </li>
            ))}
        </ul>

        <ul className="spot-list">
            {spots.map(spot => (
                <li key={spot._id}>
                    <header style={{ backgroundImage: `url(${spot.thumbnail_url})`}} />
                    <strong>{spot.company}</strong>
                    <span>{spot.price ? `R$${spot.price}/dia` : "GRATUITO"}</span>
                </li>
            ))}
        </ul>
        <Link to="/new">
            <button className="button">Cadastrar novo spot</button>
        </Link>
        </>
    )
}

export default Dashboard;