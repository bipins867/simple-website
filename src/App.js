import logo from './logo.svg';
import './App.css';

function App() {
  // Check for a specific environment variable, e.g., REACT_APP_TEST_VAR
  // Note: Create React App requires custom environment variables to start with REACT_APP_
  const testEnvVar = process.env.REACT_APP_TEST_VAR;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* Render the environment variable if it exists */}
        {testEnvVar && (
          <div style={{ marginTop: '20px', padding: '15px', border: '2px dashed #61dafb', borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.2)' }}>
            <h2>Production Config Test</h2>
            <p>REACT_APP_TEST_VAR is: <strong>{testEnvVar}</strong></p>
          </div>
        )}

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

export default App;
