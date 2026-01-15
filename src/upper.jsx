import pokemonLogo from './images/pokemonlogo.png'
import rightLogo from './images/pikachu.png'
function Upper()
{
    return(
        <div className="header-container">
            
            <a href="https://www.pokemon.com/" target="_blank" rel="noreferrer">
            <img src={pokemonLogo} alt="Pokemon logo" style={{width:'100px'}} /></a>
            <h1>Pokedex</h1>
            <a href="https://en.wikipedia.org/wiki/Pok%C3%A9mon" target="_blank" rel="noreferrer">
            <img src={rightLogo} alt="Pikachu logo" style={{width:'100px'}} /></a>
           
        </div>
    );
}
export default Upper