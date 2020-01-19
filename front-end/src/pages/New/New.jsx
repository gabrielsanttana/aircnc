import React, { useState, useMemo } from "react";
import camera from "../../assets/camera.svg"
import "./new.css";
import api from "../../services/api";

function New({ history }) {
    const [thumbnail, setThumbnail] = useState("");
    const [company, setCompany] = useState("");
    const [techs, setTechs] = useState("");
    const [price, setPrice] = useState("");

    const previewImage = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail]);

    async function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData();
        const user_id = localStorage.getItem("user");

        data.append("thumbnail", thumbnail);
        data.append("company", company);
        data.append("price", price);
        data.append("techs", techs);

        await api.post("/spots", data, {headers: {user_id}});

        history.push("/dashboard");
    }

    return (
    <>  
        <form onSubmit={handleSubmit}>
            <label
                id="thumbnail"
                style={{backgroundImage: `url(${previewImage})`}}
                className={thumbnail ? "has-thumbnail" : null}
            >
                <input type="file" onChange={(event) => {setThumbnail(event.target.files[0])}}/>
                <img src={camera} alt="camera"/>
            </label>
            <label htmlFor="company">EMPRESA * </label>
            <input  
                id="company"
                placeholder="Sua empresa incrível"
                onChange={(event) => {setCompany(event.target.value)}}
                value={company}
            />
            <label htmlFor="techs">TECNOLOGIAS * <span>(separadas por vírgula)</span></label>
            <input  
                id="techs"
                placeholder="Tecnologias utilizadas"
                onChange={(event) => {setTechs(event.target.value)}}
                value={techs}
            />
            <label htmlFor="price">PREÇO * <span>(em branco se gratuito)</span></label>
            <input  
                id="price"
                placeholder="Preço por dia"
                onChange={(event) => {setPrice(event.target.value)}}
                value={price}
            />
            <button type="submit">Cadastrar</button>
        </form>
    </> 
    )
}

export default New;