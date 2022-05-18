import { Component } from 'react';
import styled from 'styled-components';

const StyledOverview = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #63D471;
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid grey;
        background-color: white;
        width: 50%;
        height: 350px;
    }
    .child-con {
        width: 50%;
        border: 1px solid red;
    }
    h2 {
        margin: 5% 0;
        font-size: larger;
        text-decoration: underline;
    }
    p {
        margin: 2% 0;
    }
`
    
class Overview extends Component {
    render() {
        return (
            <StyledOverview>
                <div className='container'>
                    <div className='child-con'>
                        <h2>Income</h2>
                        <p>Planned</p>
                        <p>Received</p>
                        <h2>Expenses</h2>
                        <p>Givings</p>
                        <p>Savings</p>
                        <p>Bills</p>
                        <p>Subscriptions</p>
                        <p>Spending</p>
                        <p>Debt</p>
                    </div>
                </div>
            </StyledOverview>
        )
    }
}

export default Overview;