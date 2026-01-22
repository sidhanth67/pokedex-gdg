import { useState, useEffect } from 'react';

function Mainpart() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemonList, setPokemonList] = useState([]);

  // 1. Fetch the initial list of 20
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((res) => res.json())
      .then(async (data) => {
        const detailedPromises = data.results.map((p) => 
          fetch(p.url).then((res) => res.json())
        );
        const allPokemonData = await Promise.all(detailedPromises);
        setPokemonList(allPokemonData);
      })
      .catch((err) => console.log("Error fetching initial list", err));
  }, []);

  // 2. Search Function
  const handleSearch = () => {
    if (!searchTerm) return;
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => {
        setPokemonList([data]);
      })
      .catch((err) => alert("Pokemon not found!"));
  };

  // 3. Back / Refresh Function
  const handleBack = () => {
    window.location.reload(); // This tells the browser to refresh the page
  };

  // 4. Sound Player Function
  const playSound = (soundUrl) => {
    if (!soundUrl) return;
    const audio = new Audio(soundUrl);
    audio.play();
  };

  return (
    <div className="mainpart-container">
      <div className="box-search">
        <input 
          type="text" 
          placeholder="Search for pokemon..." 
          className="pokemon-search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="Button" onClick={handleSearch}>Search</button>

        {/* Back Button: Shows up if pokemonList doesn't have exactly 20 items */}
        {pokemonList.length !== 20 && (
          <button 
            className="Button" 
            onClick={handleBack} 
            style={{ marginLeft: '10px', backgroundColor: '#666' }}
          >
            Back
          </button>
        )}
      </div>

      <div className="pokemon-grid" style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '20px',
        padding: '20px' 
      }}>
        {pokemonList.map((pokemon) => (
          <div key={pokemon.id} className="pokemon-card">
            <h2>{pokemon.name.toUpperCase()}</h2>
            <a href={`https://pokemondb.net/pokedex/${pokemon.name.toLowerCase()}`} target="_blank" rel="noreferrer">
              <img 
                src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default} 
                alt={pokemon.name} 
              />
            </a>
            
            <div className="types-container">
              {pokemon.types.map((t) => (
                <span key={t.type.name} className={`type-badge ${t.type.name}`}>
                  {t.type.name}
                </span>
              ))}
            </div>

            <button 
              className="sound-button"
              onClick={() => playSound(pokemon.cries?.latest)}
              style={{
                marginTop: '10px',
                padding: '5px 10px',
                cursor: 'pointer',
                borderRadius: '5px',
                border: '1px solid #ccc'
              }}
            >
              🔊 Play Cry
            </button>

            <p>Weight: {pokemon.weight}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mainpart;