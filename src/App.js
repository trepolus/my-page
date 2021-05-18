import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Let's <code>vaccinate</code> Köln!
        </p>
        <a
          className="App-link"
          href="https://termin.corona-impfung.nrw/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          register
        </a>
      </header>
    </div>
  );
}

export default App;
