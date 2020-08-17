import React, { useState, useRef } from 'react'
import { FormContainer, FormInput, Button } from './styled'

const Form = ({ addNewTask }) => {
  const [taskContent, setNewTask] = useState('')
  const inputRef = useRef(null)
  const onFormSubmit = event => {
    event.preventDefault()
    inputRef.current.focus()
    if (taskContent.trim() === '') {
      return
    }
    addNewTask(taskContent.trim())
    setNewTask('')
  }
  
  return (
    <FormContainer onSubmit={onFormSubmit}>
      <FormInput
        ref={inputRef}
        value={taskContent}
        onChange={({ target }) => setNewTask(target.value)}
        type='text'
        placeholder='Co jest do zrobienia?'
      />
      <Button>Dodaj zadanie</Button>
    </FormContainer>
  )
}
export default Form
