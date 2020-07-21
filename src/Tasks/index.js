import React from "react";
import "./style.css";

const Tasks = (props) => (
    <ul className="tasks">
        {props.tasks.map(task => (
            <li
            key={task.id}
            className={`tasks__item${task.done && props.hideDone ? "  tasks__item--hide" : ""} `}>
                <button className="tasks__checkButton"><i className= {task.done ? "icon-ok" : ""} ></i></button><span className={`tasks__text ${task.done ? "tasks__text--lineThrough" : ""}`}>{task.content}</span><button className="tasks__deleteButton"><i className="icon-trash-empty"></i></button>
            </li>
        ))}
    </ul>
);

export default Tasks;