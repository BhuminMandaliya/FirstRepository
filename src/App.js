import logo from './logo.svg';
import './App.css';
import NewExa from './components/NewExa';
import FormDemo from './components/FormDemo';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NewExa/>
      <FormDemo/>
      <Router/>
    </div>
  );
}

export default App;
