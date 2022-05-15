import Income from "./Income";
import Bills from "./Bills";

import styled from "styled-components";

const StyledLanding = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #63D471;
    .group {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid grey;
        border-radius: 10px;
        width: 75%;
        margin: 2% 0;
        background-color: white;
    }
    .left-element {
        margin-right: 20%;
        width: 30%;
        // border: 1px solid red;
    }
    .middle-element {
        display: flex;
        justify-content: right;
        // margin-left: 30%;
        width: 20%;
    }
    .middle-element input {
        text-align: right;
        width: 50%;
    }
    .right-element {
        display: flex;
        justify-content: right;
        width: 20%;
    }
    .right-element input {
        text-align: right;
        width: 50%;
    }
    header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 1%;
        width: 85%;
    }
    .data {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 1%;
        padding-bottom: 1%;
        width: 90%;
        border-bottom: 1px solid black;
    }
    footer {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 1% 0;
        width: 85%;
        // border: 1px solid red;
    }
    button {
        border: none;
        background-color: white;
    }
    .filled {
        border: none;
    }
`

const Landing = () => {
    return (
        <StyledLanding>
            <Income />
            <Bills />
        </StyledLanding>
    )
}

export default Landing;