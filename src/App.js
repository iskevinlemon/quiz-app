import WorkArea from './components/question/WorkArea';
import Navbar from './components/shared/Navbar';
import ScreenUnsupported from './components/shared/ScreenUnsupported';
import './style/style.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ScreenUnsupported/>
      <WorkArea/>
    </div>
  );
}

export default App;
