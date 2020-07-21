import React, {useState} from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";
import "./fontello/css/fontello.css";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    {id: 1, content: "przejśc na Reacta", done: false},
    {id: 2, content: "wyjść z psem", done: true},
  ]);
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  }
  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  }
  return (
    <Container>
        <h1 className="header">Lista zadań</h1>
        <Section 
        title="Dodaj nowe zadanie" body={<Form />} 
        />
        <Section 
        title="Lista zadań"  
        extraContent= { <Buttons 
          tasks={tasks} 
          hideDone={hideDone} 
          toggleHideDone ={toggleHideDone} 
          />
        }
        body={<Tasks tasks={tasks} hideDone={hideDone} removeTask = {removeTask}/>} 
        />
        
    </Container>
  );
}

export default App;
