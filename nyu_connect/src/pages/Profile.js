import logo from '../logo.svg';
import './Profile.css';

function Profile() {
  return (
    <div className="Profile">
      <header className="Profile-header">
        <img src={logo} className="Profile-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="Profile-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Profile;
