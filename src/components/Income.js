import { useState } from "react";

const Income = () => {
    const handleClass = (element) => {
        element.className += "filled"
    }

    return (
        <div className="group">
        <header className="title">
            <div className="left-element">Name</div>
            <div className="middle-element">Planned</div>
            <div className="right-element">Received</div>
        </header>
        <div className="data">
            <div className="left-element">
                <input type="text" value="Paycheck 1"/>
            </div>
            <div className="middle-element">
                <input type="text" value="$0.00"/>
            </div>
            <div className="right-element">
                <input type="text" value="$0.00"/>
            </div>
        </div>
        <div className="data">
            <div className="left-element">
                <input type="text" value="Paycheck 1"/>
            </div>
            <div className="middle-element">
                <input type="text" value="$0.00"/>
            </div>
            <div className="right-element">
                <input type="text" value="$0.00"/>
            </div>
        </div>
        <footer>
            <button className="left-element" onClick={() => console.log("CLICKED")}>Add Income</button>
            <div className="middle-element">Total</div>
            <div className="right-element">Total</div>
        </footer>
    </div>
    )
}

export default Income;