import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5% 0 10%;
    border: 1px solid black;
    background-color: white;
    height: 40px;
    .account {
        display: flex;
        justify-content: space-around;
        width: 15%;
    }

    @media (max-width: 1000px) {
        .account {
            width: 20%;
        }
    }

    @media (max-width: 500px) {
        .account {
            width: 50%;
        }
    }
`
const linkStyle = {
    padding: '3% 5%',
    border: '1px solid black',
    borderRadius: '5px',
    backgroundColor: '#00AC11',
    textDecoration: 'none',
    color: 'black'
}

const Header = () => {
    return (
        <StyledHeader>
            <div>Logo</div>
            <div className="account">
                <Link to="/register" style={linkStyle}>Register</Link>
                <Link to="/" style={linkStyle}>Login</Link>
            </div>
        </StyledHeader>
    )
}

export default Header;