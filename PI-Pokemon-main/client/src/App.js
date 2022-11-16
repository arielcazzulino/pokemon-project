import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Landing} from './components/landing/landing'
import {Home} from './components/home/Home'
import {PokemonCreate} from './components/pokemonCreate/PokemonCreate'

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/pokemons" component={PokemonCreate}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
