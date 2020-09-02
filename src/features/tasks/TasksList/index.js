import React from 'react'
import {List, Item, CheckButton, DeleteButton, Content} from "./styled"

const TasksList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => {
  if (!tasks.length) {
    return <p>brak zadań do wykonania</p>
  }
  return (
    <List>
      {tasks.map(task => (
        <Item
          key={task.id}
          hidden = {task.done && hideDone}
        >
          <CheckButton
            onClick={() => toggleTaskDone(task.id)}
          >
            <i className={task.done ? 'icon-ok' : ''}></i>
          </CheckButton>
          <Content
          taskDone = {task.done}
          >
            {task.content}
          </Content>
          <DeleteButton
            onClick={() => removeTask(task.id)}
          >
            <i className='icon-trash-empty'></i>
          </DeleteButton>
        </Item>
      ))}
    </List>
  )
}

export default TasksList
