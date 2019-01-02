// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const dataPokemon = POKEMON.pokemon;
console.log(dataPokemon);
/*
const namesPokemon = (dataPokemon) => {
  let names = [];
  for (let i = 0; i < dataPokemon.length; i++) {
    names.push(dataPokemon[i].name)
  }
  return names;
}
*/
//guarda el numero de los pokemons
const numsPokemon = dataPokemon.map(({num}) => [`${num}`]);

//guarda el nombre de los pokemones
const namesPokemon = dataPokemon.map(({name}) => [`${name}`]);
console.log(namesPokemon)
window.namesPokemon = namesPokemon;

//guarda la imagen de los pokemons
const imgsPokemon = dataPokemon.map(({img}) => [`${img}`]);

//guarda el tipo de los pokemones
const typesPokemon = dataPokemon.map(({type}) => [`${type}`])


window.imgsPokemon = imgsPokemon;

//prueba filter
const filterPokemonName = dataPokemon.filter(dataPokemon => (dataPokemon.name === 'Bulbasour'));

window.filterPokemonName = filterPokemonName;



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
