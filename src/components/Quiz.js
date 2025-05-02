import React, { useState } from "react";

function Quiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  if (showScore) {
    const percentage = (score / questions.length) * 100;
    return (
      <div className="score-container">
        <h2>Quiz Complete!</h2>
        <p>
          Correct Answers: {score} out of {questions.length}
        </p>
        <p>Score: {percentage.toFixed(2)}%</p>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="question">{questions[currentQuestion].questionText}</div>
      <div className="options">
        {questions[currentQuestion].options.map((option, index) => (
          <div
            key={index}
            className={`option ${selectedAnswer === index ? "selected" : ""}`}
            onClick={() => handleAnswerSelect(index)}>
            {option}
          </div>
        ))}
      </div>
      <button
        className="next-button"
        disabled={selectedAnswer === null}
        onClick={handleNextQuestion}>
        {currentQuestion + 1 === questions.length ? "Finish" : "Next"}
      </button>
    </div>
  );
}

export default Quiz;
