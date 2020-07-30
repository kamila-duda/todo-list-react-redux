import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask, tasks }) => {
    const [taskContent, setNewTask] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (taskContent.trim()==="") {
            return;
        }; 
        addNewTask(taskContent.trim());
        setNewTask("");
    };
    return (
        (
            <form className="form" onSubmit={onFormSubmit}>
                <input value={taskContent}
                    onChange={({ target }) => setNewTask(target.value)}
                    type="text"
                    className="form__item"
                    placeholder="Co jest do zrobienia?" />
                <button className="form__button">Dodaj zadanie</button>
            </form>
        )
    )
}
export default Form;