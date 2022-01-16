
import './App.css';

function App() {

  const turnON = ()=> {
    fetch('http://localhost:3000/on').then((res) => res.json()).then(data => console.log(data))
  }

  const turnOFF = ()=> {
    fetch('http://localhost:3000/off').then((res) => res.json()).then(data => console.log(data))
  }

  return (
    <div className="App">
      <button onClick={turnON}>
        Turn ON
      </button>

      <button onClick={turnOFF}>
        Turn OFF
      </button>
    </div>
  );
}

export default App;
