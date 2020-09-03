import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { List, Item, CheckButton, DeleteButton, Content } from './styled'
import { selectTasks, toggleTaskDone, removeTask } from '../tasksSlice'

const TasksList = () => {
  const { tasks, hideDone } = useSelector(selectTasks)
  const dispatch = useDispatch()
  return (
    <List>
      {tasks.map(task => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <CheckButton onClick={() => dispatch(toggleTaskDone(task.id))}>
            <i className={task.done ? 'icon-ok' : ''}></i>
          </CheckButton>
          <Content taskDone={task.done}>{task.content}</Content>
          <DeleteButton onClick={() => dispatch(removeTask(task.id))}>
            <i className='icon-trash-empty'></i>
          </DeleteButton>
        </Item>
      ))}
    </List>
  )
}

export default TasksList
