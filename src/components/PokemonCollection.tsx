import { Pokemon, Pokemons } from '../interface';
import PokemonCard from './PokemonCard';
import './pokemon.css'

interface Props {
    pokemons: Pokemon[]
}

const PokemonCollection:React.FC<Props> = (props) => {
    const {pokemons} = props
    return ( 
        <> 
            <section className='pokemon-container'>
                {
                    pokemons.map((pokemon) => {
                        return (
                                <PokemonCard
                                key={pokemon.id}
                                name={pokemon.name}
                                id={pokemon.id}
                                image={pokemon.sprites.front_default}
                                />
                        )
                    })
                }
            </section>
        </>
     );
}
 
export default PokemonCollection;