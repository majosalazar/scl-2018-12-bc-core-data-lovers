const dataPokemon = POKEMON.pokemon;

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


//Clasifico por tipo

//Filtrar tipos fuego
const typeFire = dataPokemon.filter((types) => {return types.type.indexOf ("Fire") >=0});

//Filtrar tipos Hielo
const typeIce = dataPokemon.filter((types) =>{return types.type.indexOf("Ice") >=0});

//Filtrar tipos Flying
const typeFlying = dataPokemon.filter((types) => {return types.type.indexOf("Flying") >=0});

//Filter Psychic
const typePsychic = dataPokemon.filter((types) => {return types.type.indexOf("Psychic") >=0});

//Filter Grass
const typeGrass = dataPokemon.filter((types) => {return types.type.indexOf("Grass") >=0});


window.typesPokemon;


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

