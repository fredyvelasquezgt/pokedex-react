import './App.css';
import Pokecard from './Pokecard'

function App() {
  return (
    <div className="App">
      <Pokecard
        id={4}
        name="Charmander"
        type="fire"
        base_experience={2} />
    </div>
  );
}

export default App;
