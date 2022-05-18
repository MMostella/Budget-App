import { Component } from "react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";
import Validate from '../utility/FormValidation';
import styled from "styled-components";

const StyledRegister = styled.div`
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
        height: 350px;
        background-color: white;
    }
    input {
        margin: 2%;
        width: 60%;
        height: 10%;
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
        height: 400px;
        width: 70%;
        padding: 5% 0;
    }
    input {
        margin: 5%;
        width: 70%;
    }
    .text {
        height: 10%;
    }
}
`

class Register extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        errors: {
            cognito: null,
            blankfield: false,
            passwordmatch: false
        }
    };

    clearErrorState = () => {
        this.setState({
            errors: {
                cognito: null,
                blankfield: false,
                passwordmatch: false
            }
        })
    }

    handleSubmit = async event => {
        event.preventDefault();

        this.clearErrorState();
        const error = Validate(event, this.state);
        if (error) {
            this.setState({
              errors: { ...this.state.errors, ...error }
            });
          }

        const { username, email, password } = this.state;
        try {
            const signUpResponse = await Auth.signUp({
                username,
                password, 
                attributes: {
                    email: email
                }
            })
            console.log(signUpResponse)
            
        } catch(error) {
            let err = null;
            !error.message ? err = { "message": error } : err = error;
            this.setState({
                errors: {
                    ...this.state.errors,
                    cognito: err
                }
            })
            console.log(this.props)
        }
    }

    onInputChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render() {
        return (
            <StyledRegister>
                <form onSubmit={this.handleSubmit}>
                    <input className="text" id="username" type="text" value={this.state.username} onChange={this.onInputChange} placeholder="Username"/>
                    <input className="text" id="email" type="email" value={this.state.email} onChange={this.onInputChange} placeholder="Email"/>
                    <input className="text" id="password" type="password" value={this.state.password} onChange={this.onInputChange} placeholder="Password"/>
                    <input className="text" id="confirmPassword" type="password" value={this.state.confirmPassword} onChange={this.onInputChange} placeholder="Confirm Password"/>
                    <input type="submit" id="submit" value="Register"/>
                    <p>Already have an account? <Link to="/login">SIGN IN!</Link></p>
                </form>
            </StyledRegister>
        )
    }
}

export default Register;