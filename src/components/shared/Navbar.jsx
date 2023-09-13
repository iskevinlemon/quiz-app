export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="/assets/imgs/quiz-icon.png" width={30} className="mx-2"/>
          Quiz App
        </a>
      </div>
    </nav>
  );
}
