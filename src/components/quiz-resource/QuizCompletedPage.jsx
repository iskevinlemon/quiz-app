export default function QuizCompletedPage({ quizScore, quizLength }) {
  return (
    <div className="text-center mt-5 card quiz-completed-card">
      <div className="card-body">
        <h1>
          <i className="text-success far fa-circle-check"></i>
        </h1>
        <h4>You have completed the quiz !</h4>
        <small className="text-secondary">Score:</small>
        <h3>
          {quizScore}/{quizLength}
        </h3>
        <a className="btn btn-primary btn-lg mt-3" href="/">
          Restart
        </a>
      </div>
    </div>
  );
}
