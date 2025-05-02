import React from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import { quizQuestions } from "./components/Questions";

function App() {
  return (
    <div className="App">
      <h1>React Quiz</h1>
      <Quiz questions={quizQuestions} />
    </div>
  );
}

export default App;
