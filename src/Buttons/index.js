import React from "react";
import "./style.css";
const Buttons = ({tasks, hideShowButtonFlag}) => {
    if(tasks.length === 0) {
        return null;
    }
    return (
        <div className="buttons">
            <button className="buttons__button toggleHideDoneTasks">
        {hideShowButtonFlag ? "Pokaż" : "Ukryj"} ukończone</button>
        <button className="buttons__button markAllDone"
        disabled={tasks.every(({done}) => done) }>
        Ukończ wszystkie</button>
        </div>
    )
};
export default Buttons;