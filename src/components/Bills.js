
const Bills = (prop) => {
    return (
        <div className="group">
            <header className="title">
                <div className="left-element">{prop.name}</div>
                <div className="middle-element">Planned</div>
                <div className="right-element">Remaining</div>
            </header>
            <div className="data">
                <div className="left-element">
                    <input type="text" value="Bill" onChange={(e) => e.target.value}/>
                </div>
                <div className="middle-element">
                    <input type="number" value="0" onChange={(e) => e.target.value}/>
                </div>
                <div className="right-element">$0.00</div>
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