import { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #63D471;
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid grey;
        border-radius: 10px;
        width: 20%;
        height: 250px;
        background-color: white;
    }
    input {
        margin: 2%;
        width: 60%;
        height: 15%;
        border: 1px solid grey;
    }
    .text {
        background-color: #F3F3F3;
    }
    #submit {
        background-color: #00AC11;
    }

@media (max-width: 1000px) {

    form {
        width: 40%;
    }
    input {
        width: 60%;
    }

}

@media (max-width: 500px) {
    form {
        height: 250px;
        width: 70%;
        padding: 5% 0;
    }
    input {
        margin: 5%;
        width: 70%;
    }
    .text {
        height: 15%;
    }
}
`

class Login extends Component {
    state = {
        username: "",
        password: "",
        errors: {
            cognito: null,
            blankfield: false,
            passwordmatch: false
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
    }

    onInputChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    render(){
        return (
            <StyledLogin>
                <form onSubmit={this.handleSubmit}>
                    <input className="text" type="text" value={this.state.username} onChange={this.onInputChange} placeholder="Username"/>
                    <input className="text" id="password" type="password" value={this.state.password} onChange={this.onInputChange} placeholder="Password"/>
                    <input type="submit" id="submit" value="Login"/>
                    <p>No account yet? Click <Link to="/register">HERE</Link></p>
                </form>
            </StyledLogin>
        )
    }
}

export default Login;