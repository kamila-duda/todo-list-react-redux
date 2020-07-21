import React from "react";
import "./style.css";

const Tasks = ({tasks, hideDone, removeTask}) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
            key={task.id}
            className={`tasks__item${task.done && hideDone ? "  tasks__item--hide" : ""} `}>
                <button className="tasks__checkButton"><i className= {task.done ? "icon-ok" : ""} ></i></button><span className={`tasks__text ${task.done ? "tasks__text--lineThrough" : ""}`}>{task.content}</span><button onClick={() => removeTask(task.id)} className="tasks__deleteButton"><i className="icon-trash-empty"></i></button>
            </li>
        ))}
    </ul>
);

export default Tasks;