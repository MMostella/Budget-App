import { useState } from "react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";
import styled from "styled-components";

const StyledRegister = styled.div`
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

const Register = () => {
    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        errors: {
            cognito: null,
            blankfield: false,
            passwordmatch: false
        }
    });

    const handleSubmit = event => {
        event.preventDefault();
    
    }

    const { username, email, password } = state;
    try {
    //     const signUpResponse = Auth.signUp({
    //         username,
    //         password, 
    //         attributes: {
    //             email: email
    //         }
    //     })
    //     console.log(signUpResponse)
    //     this.props.history.push("/welcome")
    } catch(error) {
    //     let err = null;
    //     !error.message ? err = { "message": error } : err = error;
    //     setState({
    //         errors: {
    //             ...state.errors,
    //             cognito: error
    //         }
    //     })
    }

    const onInputChange = event => {
        setState({
            [event.target.id]: event.target.value
        })
    }

    return (
        <StyledRegister>
            <div><h1>Works</h1></div>
            {/* <form onSubmit={handleSubmit}>
                <input className="text" id="username" type="text" value={state.username} onChange={onInputChange} placeholder="Username"/>
                <input className="text" id="email" type="email" value={state.email} onChange={onInputChange} placeholder="Email"/>
                <input className="text" id="password" type="password" value={state.password} onChange={onInputChange} placeholder="Password"/>
                <input className="text" id="confirmPassword" type="password" value={state.confirmPassword} onChange={onInputChange} placeholder="Confirm Password"/>
                <input type="submit" id="submit" value="Register"/>
                <p>Already have an account? <Link to="/login">SIGN IN!</Link></p>
            </form> */}
        </StyledRegister>
    )
}

export default Register;