import React, { useState, useEffect } from 'react'
import Form from './Form'
import TasksList from './TasksList'
import Buttons from './Buttons'
import Section from '../../common/Section'
import Container from '../../common/Container'
import '../../fontello/css/fontello.css'
import useTasks from '../../useTasks'

function Tasks () {
  const [hideDone, setHideDone] = useState(
    localStorage.getItem('hideDone') === 'false'
      ? false
      : JSON.parse(localStorage.getItem('hideDone'))
  )

  useEffect(() => {
    localStorage.setItem('hideDone', JSON.stringify(hideDone))
  }, [hideDone])

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  }

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask
  } = useTasks()

  return (
    <Container>
      <h1>Lista zadań</h1>
      <Section
        title='Dodaj nowe zadanie'
        body={<Form addNewTask={addNewTask} />}
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
          <TasksList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
      />
    </Container>
  )
}

export default Tasks
