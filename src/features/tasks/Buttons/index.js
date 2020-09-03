import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ButtonsContainer, Button } from './styled'
import { selectTasks, toggleHideDone } from '../tasksSlice'

const Buttons = ({ setAllDone }) => {
  // if (tasks.length === 0) {
  //   return null
  // }
  const { tasks, hideDone } = useSelector(selectTasks)
  const dispatch = useDispatch()
  return (
    <ButtonsContainer>
      {tasks.length > 0 && (
        <>
          <Button
           // disabled={tasks.every(({ done }) => !done)}
            onClick={() => dispatch(toggleHideDone())}
          >
            {hideDone ? 'Pokaż' : 'Ukryj'} ukończone
          </Button>
          <Button
            onClick={setAllDone}
            disabled={tasks.every(({ done }) => done)}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </ButtonsContainer>
  )
}
export default Buttons
