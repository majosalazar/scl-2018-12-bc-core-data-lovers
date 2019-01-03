const dataPokemon = POKEMON.pokemon;
console.log(dataPokemon);

//guarda el numero de los pokemons
const numsPokemon = dataPokemon.map(({num}) => [`${num}`]);

//guarda el nombre de los pokemones
const namesPokemon = dataPokemon.map(({name}) => [`${name}`]);

//guarda la imagen de los pokemons
const imgsPokemon = dataPokemon.map(({img}) => [`${img}`]);

//guarda el tipo de los pokemones
const typesPokemon = dataPokemon.map(({type}) => [`${type}`])

//guarda el id de los pokemones
const idPokemon = dataPokemon.map(({id}) => [`${id}`])

//prueba filter
const filterPokemonName = dataPokemon.filter(dataPokemon => (dataPokemon.name === 'Bulbasour'));

window.filterPokemonName = filterPokemonName;


/*
window.data = {
  filterData: (dataPokemon, searchPokemon) => {
    const filterPokemonName = dataPokemon.filter(dataPokemon => (dataPokemon.name === searchPokemon));
    console.log(filterPokemonName);

  },

  sortData: (dataPokemon, sortBy, sortOrder) => {

  },

  computeStats: (dataPokemon) => {

  }
}
*/
