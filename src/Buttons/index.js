import React from 'react'
import {ButtonsContainer, Button} from "./styled"
const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
  if (tasks.length === 0) {
    return null
  };
 
  return (
    <ButtonsContainer>
      {tasks.length > 0 && (
        <>
          <Button
            disabled={tasks.every(({ done }) => !done)}
            onClick={toggleHideDone}
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
