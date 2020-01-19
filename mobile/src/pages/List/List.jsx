import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, AsyncStorage, SafeAreaView, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import socketio from "socket.io-client";
import SpotList from "../../components/SpotList";
import styles from "./styles";
import logo from "../../../assets/logo.png";

function List() {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem("user_id").then(user_id => {
            const socket = socketio("http://192.168.15.126:3333", {
                query: { user_id }
            });

            socket.on("booking_response", booking => {
                Alert.alert(`Sua reserva em ${booking.spot.company} em ${booking.date} foi ${booking.approved ? "APROVADA" : "REJEITADA"}`);
            })
        })
    }, []);

    useEffect(() => {
        AsyncStorage.getItem("techs").then(storedTechs => {
            const techsArray = storedTechs.split(",").map(tech => tech.trim());
            setTechs(techsArray); 
        });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <ScrollView>
                {techs.map((tech, index) => {
                    return <SpotList key={index} tech={tech} />
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

export default List;