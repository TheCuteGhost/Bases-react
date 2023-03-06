import logo from './logo.svg';
import './App.css';
import './MiComponente.js'
import MiComponente from './MiComponente.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master de react
        </p>
        {/*Primer componente */}
        
        <MiComponente/>
        </header>
    </div>
  );
}

export default App;
