import logo from './logo.svg';
import { Outlet, Link } from "react-router-dom";
import './App.css';
import Profile from './pages/Profile';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >3
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
