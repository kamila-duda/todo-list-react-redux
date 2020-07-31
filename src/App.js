import React, { useState, useEffect } from 'react'
import Form from './Form'
import Tasks from './Tasks'
import Buttons from './Buttons'
import Section from './Section'
import Container from './Container'
import './fontello/css/fontello.css'

function App () {
  const [hideDone, setHideDone] = useState(
    String(localStorage.getItem("hideDone")) === "false" ? false : Boolean(localStorage.getItem("hideDone"))
  )
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) === null
      ? []
      : JSON.parse(localStorage.getItem('tasks'))
  )

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  }
 
  useEffect(() => {
    localStorage.setItem("hideDone", hideDone);
  }, [hideDone]);

  const removeTask = id => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  }

  const toggleTaskDone = id => {
    setTasks(tasks =>
      tasks.map(task => {
        if (task.id === id) {
          return { ...task, done: !task.done }
        }
        return task
      })
    )
  }
  const setAllDone = () => {
    setTasks(tasks =>
      tasks.map(task => ({
        ...task,
        done: true
      }))
    )
  }
  const addNewTask = taskContent => {
    setTasks(tasks => [
      ...tasks,
      {
        content: taskContent,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1
      }
    ])
  }
  return (
    <Container>
      <h1 className='header'>Lista zadań</h1>
      <Section
        title='Dodaj nowe zadanie'
        body={<Form addNewTask={addNewTask} tasks={tasks} />}
      />
      <Section
        title='Lista zadań'
        extraContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
            setTasks={setTasks}
          />
        }
      />
    </Container>
  )
}

export default App
