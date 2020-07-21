import React, {useState} from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";
import "./fontello/css/fontello.css";
const tasks = [
  {id: 1, content: "przejśc na Reacta", done: false},
  {id: 2, content: "wyjść z psem", done: true},
];
const hideDone = false;

function App() {
  return (
    <Container>
        <h1 className="header">Lista zadań</h1>
        <Section 
        title="Dodaj nowe zadanie" body={<Form />} 
        />
        <Section 
        title="Lista zadań"  extraContent={<Buttons tasks={tasks} hideDone={hideDone} />}
        body={<Tasks tasks={tasks} hideDone={hideDone}/>} 
        />
        
    </Container>
  );
}

export default App;
