import React, {useState} from "react";
import api from "../../services/api";

function Login({history}) {
    const [email, setEmail] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.post("/sessions", {email});

        const {_id: user_id} = response.data;

        localStorage.setItem("user", user_id);

        history.push("/dashboard");
    }

    return (
    <>
        <p>Ofereça <strong>spots</strong> para programadores e encontre novos <strong>talentos </strong> 
           para sua empresa
        </p>

        <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-MAIL *</label>
            <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                id="email" 
                autoFocus={true}
                onChange={(event) => {setEmail(event.target.value)}}
                value={email}
            />
            <button type="submit">Entrar</button>
        </form>
    </>
    )
}

export default Login;