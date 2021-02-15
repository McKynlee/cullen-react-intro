import logo from './logo.svg';
import './App.css';

// If this were node we'd:
// const HelloCullen = require('./HelloCullen');
// But client-side (React) we do this:
import HelloCullen from './HelloCullen';

// React is made up of components
// App is a component.
// Components are functions that return JSX
// You can nest components (see HelloCullen below)
function App() {
  return (
    <div className="App">
      <HelloCullen />
      <HelloCullen />
      <header className="App-header">
        <HelloCullen />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
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

// Moved to HelloCullen module
// function HelloCullen() {
//   return <h1>Hello, Cullen!!</h1>;
// }

export default App;
