import './App.css';
import { PokemonProvider } from './context/pokemonContext';

function App() {
  return (
    <div className="App">
      <div>
        <PokemonProvider>

        </PokemonProvider>
      </div>
    </div>
  );
}

export default App;
