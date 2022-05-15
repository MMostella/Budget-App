import { useState } from "react";
import styled from "styled-components";

const StyledLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #63D471;

@media (max-width: 1000px) {

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid grey;
        border-radius: 10px;
        width: 60%;
        height: 50%;
        background-color: white;
    }
    input {
        margin: 2%;
        width: 50%;
        height: 10%;
        border: 1px solid grey;
    }
    .text {
        background-color: #F3F3F3;
    }
    #submit {
        background-color: #00AC11;
    }

}

@media (max-width: 500px) {
    input {
        margin: 5%;
        width: 80%;
    }
    .text {
        height: 15%;
    }
}
`

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${username} with this password: ${password}`)
    }

    return (
        <StyledLogin>
            <form onSubmit={handleSubmit}>
                <input className="text" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
                <input className="text" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                <input type="submit" id="submit" value="Login"/>
                <p>No account yet? Click HERE</p>
            </form>
        </StyledLogin>
    )
}

export default Login;