import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ButtonsContainer, Button } from './styled'
import { selectTasks, toggleHideDone, setAllDone, fetchExampleTasks } from '../tasksSlice'

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks)
  const dispatch = useDispatch()
  return (
    <ButtonsContainer>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>
      {tasks.length > 0 && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? 'Pokaż' : 'Ukryj'} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
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
