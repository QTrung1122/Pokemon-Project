import './pokemon.css'

interface Props {
    name:string
    id:number
    image:string
}

const PokemonCard:React.FC<Props> = (props) => {
    const {name, id, image} = props
    return ( 
        <section className="pokemon-card">
            <p className="pokemon-name">{name}</p>
            <img src={image} alt="pokemon image" />
        </section>
     );
}
 
export default PokemonCard;