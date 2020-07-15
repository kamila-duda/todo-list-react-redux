import React from "react";
import "./style.css";
//import "./fontello.css";
//import "./fontello.svg";

const Tasks = (props) => (
    <ul className="tasks">
        {props.tasks.map(task => (
            <li
            className={`tasks__item${task.done && props.hideShowButtonFlag ? "  tasks__item--hide" : ""} `}>
                <button className="tasks__checkButton"> {task.done ? "&#x2713" : ""} </button><span className={`tasks__text ${task.done ? "style=\"text-decoration: line-through\"" : ""}`}>{task.content}</span><button className="tasks__deleteButton"><i className="icon-trash"></i></button>
            </li>
        ))}
    </ul>
);

export default Tasks;