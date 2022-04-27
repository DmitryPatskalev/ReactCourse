import React from "react";
import "./App.css";
import Todolist from "./Todolist";

const task1 = [
  { id: 1, title: "HTML&CSS", isDone: true },
  { id: 2, title: "JS", isDone: true },
  { id: 3, title: "REACT", isDone: false },
];
const task2 = [
  { id: 1, title: "HelloWorld", isDone: true },
  { id: 2, title: "I am happy", isDone: false },
  { id: 3, title: "Dude", isDone: false },
];

function App() {
  return (
    <div className="App">
      <Todolist title="What I Learn" tasks={task1} />
      <Todolist title="Hello!" tasks={task2} />
      <Todolist title="Good day!" tasks={task2} />
    </div>
  );
}

export default App;
