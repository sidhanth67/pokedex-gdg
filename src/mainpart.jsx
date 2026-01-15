import { useState, useEffect } from 'react';

function Mainpart() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemon, setPokemon] = useState(null);

  // This fetches Mewtwo automatically when the page first loads
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/mewtwo')
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.log("Error fetching initial pokemon", err));
  }, []);
  // This function runs when you click the Search button
  const handleSearch = () => {
    if (!searchTerm) return;
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
      .then((res) => {
        if (!res.ok) throw new Error("Pokemon not found");
        return res.json();
      })
      .then((data) => setPokemon(data))
      .catch((err) => alert("Pokemon not found! Try checking the spelling."));
  };

  return (
    <div className="mainpart-container">
      {/* Search Section */}
      <div className="box-search">
        <input 
          type="text" 
          placeholder="Search for pokemon..." 
          className="pokemon-search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="Button" onClick={handleSearch}>Search</button>
      </div>

      {/* Pokemon Display Section */}
      {pokemon && (
        <div className="pokemon-card">
          <h2>{pokemon.name.toUpperCase()}</h2>
          <a href={`https://pokemondb.net/pokedex/${searchTerm.toLowerCase()}`} target="_blank" rel="noreferrer">
          <img 
            src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default} 
            alt={pokemon.name} 
          /></a>
          
          <div className="types-container">
            {pokemon.types.map((t) => (
              <span key={t.type.name} className={`type-badge ${t.type.name}`}>
                {t.type.name}
              </span>
            ))}
          </div>

          <p>Weight: {pokemon.weight}</p>
        </div>
      )}
    </div>
  );
}

export default Mainpart;