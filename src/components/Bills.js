import { useState } from "react";

const Bills = () => {
    return (
        <div className="group">
            <header className="title">
                <div className="left-element">Name</div>
                <div className="middle-element">Planned</div>
                <div className="right-element">Remaining</div>
            </header>
            <div className="data">
                <div className="left-element">
                    <input type="text" value="Bill"/>
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
                    <input type="text" value="Bill"/>
                </div>
                <div className="middle-element">
                    <input type="text" value="$0.00"/>
                </div>
                <div className="right-element">
                    <input type="text" value="$0.00"/>
                </div>
            </div>
            <footer>
                <button className="left-element" onClick={() => console.log("CLICKED")}>Add Item</button>
                <div className="middle-element"></div>
                <div className="right-element"></div>
            </footer>
        </div>
    )
}

export default Bills;