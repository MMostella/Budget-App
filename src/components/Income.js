import { Component } from "react";
import styled from 'styled-components';

const StyledIncome = styled.div`
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type=number] {
        -moz-appearance: textfield;
    }
`

class Income extends Component {
    state = {
        title: "",
        planned: 0,
        received: 0
    } 

    onInputChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    onInputSubmit = event => {
        
    }

    render() {
        return (
            <StyledIncome className="group">
                <header className="title">
                    <div className="left-element">Income</div>
                    <div className="middle-element">Planned</div>
                    <div className="right-element">Received</div>
                </header>
                <div className="data">
                    <div className="left-element">
                        <input type="text" id="title" value={this.state.title} onChange={this.onInputChange}  placeholder="Paycheck"/>
                    </div>
                    <div className="middle-element">
                        <input type="number" className="number" id="planned" value={this.state.planned} onChange={this.onInputChange}/>
                    </div>
                    <div className="right-element">
                        <input type="number" className="number" id="received" value={this.state.received} onChange={this.onInputChange}/>
                    </div>
                </div>
                <footer>
                    <button className="left-element" onClick={() => console.log("CLICKED")}>Add Income</button>
                    <div className="middle-element">{this.state.planned}</div>
                    <div className="right-element">{this.state.received}</div>
                </footer>
            </StyledIncome>
        )
    }
}

export default Income;