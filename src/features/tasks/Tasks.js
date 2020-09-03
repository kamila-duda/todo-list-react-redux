import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Form from './Form'
import TasksList from './TasksList'
import Buttons from './Buttons'
import Section from '../../common/Section'
import Container from '../../common/Container'
import '../../fontello/css/fontello.css'
import { selectTasks } from './tasksSlice'

function Tasks () {
  const { tasks } = useSelector(selectTasks)

  return (
    <Container>
      <h1>Lista zadań</h1>
      <Section
        title='Dodaj nowe zadanie'
        body={<Form />}
      />
      <Section
        title='Lista zadań'
        extraContent={<Buttons />}
        body={<TasksList />}
      />
    </Container>
  )
}

export default Tasks
