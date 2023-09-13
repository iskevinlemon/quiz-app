import { useState } from "react";
import StartPage from "../quiz-resource/StartPage";
import Video from "./Video";
import DoNotRefresh from "../shared/DoNotRefresh";
import quizData from "../quiz-resource/quizData";
import QuizCompletedPage from "../quiz-resource/QuizCompletedPage";

export default function WorkArea() {
  const [startPageVisibility, setStartPageVisibility] = useState(true);
  const [videoPageVisibility, setVideoPageVisibility] = useState(false);
  const [questionAreaVisibility, setQuestionAreaVisibility] = useState(false);

  function startQuizApp() {
    setStartPageVisibility(false);
    setVideoPageVisibility(true);
  }

  function continueToQuiz() {
    setVideoPageVisibility(false);
    setQuestionAreaVisibility(true);
  }

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [showSubmitButton, setShowSubmitButton] = useState(true);
  const [quizIsCompleted, setQuizIsCompleted] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    const correctAnswer = quizData[currentQuestion].correctAnswer;
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }
    setIsAnswered(true);
    setShowSubmitButton(false);
    // handleNext();
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption("");
      setIsAnswered(false);
      setShowSubmitButton(true);
    } else {
      // alert(`Quiz completed! Your score is ${score}`);
      setQuestionAreaVisibility(false);
      setQuizIsCompleted(true);
    }
  };

  const questionData = quizData[currentQuestion];

  return (
    <div className="workarea container mt-5">
      <DoNotRefresh />

      {startPageVisibility && (
        <>
          <StartPage />
          <div>
            <button
              className="btn btn-success btn-lg mt-3 centered"
              onClick={startQuizApp}
            >
              <i className="far fa-circle-play mx-2"></i>
              Let's begin
            </button>
          </div>
        </>
      )}

      {videoPageVisibility && (
        <>
          <Video />
          <button
            className="btn btn-primary btn-lg mt-3 centered"
            onClick={continueToQuiz}
          >
            Continue to quiz
          </button>
        </>
      )}

      {questionAreaVisibility && (
        <div className="question-card card">
          {/* <div className="float-right">Score: {score}</div> */}

          <div className="card-body">
            <p className="text-secondary text-center">
              Question {currentQuestion + 1}/{quizData.length}
            </p>

            <h5 className="text-dark mb-4">{questionData.question}</h5>
            <hr></hr>
            <form>
              {questionData.options.map((option, index) => (
                <div key={index}>
                  <div className="form-check">
                    <input
                      className="form-check-input mt-1"
                      type="radio"
                      id={option}
                      name="option"
                      value={option}
                      checked={selectedOption === option}
                      onChange={handleOptionChange}
                      disabled={isAnswered}
                    />
                    <label className="form-check-label" htmlFor={option}>
                      {option}
                    </label>
                  </div>
                </div>
              ))}
            </form>

            {showSubmitButton && (
              <button
                className="btn btn-primary float-right btn-lg mt-4 mb-4"
                onClick={handleSubmit}
                disabled={isAnswered}
              >
                Submit
              </button>
            )}
            {!showSubmitButton && (
              <button
                className="btn btn-secondary float-right btn-lg mt-4 mb-4"
                onClick={handleNext}
                disabled={!isAnswered}
              >
                <i className="fas fa-angle-right mx-2"></i>
                Next question
              </button>
            )}
          </div>
        </div>
      )}

      {quizIsCompleted && (
        <QuizCompletedPage 
            quizScore={score} 
            quizLength={quizData.length} 
        />
      )}
    </div>
  );
}
