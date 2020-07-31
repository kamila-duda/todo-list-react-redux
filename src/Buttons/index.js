import React from 'react'
import './style.css'
const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
  if (tasks.length === 0) {
    return null
  };
 
  return (
    <div className='buttons'>
      {tasks.length > 0 && (
        <>
          <button
            disabled={tasks.every(({ done }) => !done)}
            onClick={toggleHideDone}
            className='buttons__button toggleHideDoneTasks'
          >
            {hideDone ? 'Pokaż' : 'Ukryj'} ukończone
          </button>
          <button
            onClick={setAllDone}
            className='buttons__button markAllDone'
            disabled={tasks.every(({ done }) => done)}
          >
            Ukończ wszystkie
          </button>
        </>
      )}
    </div>
  )
}
export default Buttons
