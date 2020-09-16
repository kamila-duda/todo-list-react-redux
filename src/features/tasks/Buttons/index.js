import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ButtonsContainer, Button } from "./styled";
import {
  toggleHideDone,
  setAllDone,
  fetchExampleTasks,
  selectIsEveryTaskDone,
  selectAreTasksEmpty,
  selectHideDone,
} from "../tasksSlice";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();
  return (
    <ButtonsContainer>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </ButtonsContainer>
  );
};
export default Buttons;
