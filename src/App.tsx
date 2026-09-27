import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import PokemonCollection from './components/PokemonCollection';
import { Pokemon, Pokemons } from './interface';
import PokemonList from './components/PokemonCard';


const App = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [nextUrl, setNextUrl] = useState<string>()
  useEffect(()=>{
    const getPokemon = async()=>{
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20")
      res.data.results.forEach(async(pokemon:Pokemons)=>{
        const pkm = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        setPokemons((p) => [...p, pkm.data])
        console.log(pokemons)
      })
    }
    getPokemon()
  }, [])
  return ( 
    <>
      <div className="app">
        <div className="container">
          <header className="pokemon-header"> Pokemon</header>
          <PokemonCollection pokemons={pokemons}/>
        </div>
      </div>
    </>
   );
}
 
export default App;