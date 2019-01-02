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

const namesPokemon = dataPokemon.map(({num, name, img, type,
}) => [`${num} ${name} ${img} ${type}`]);

window.namesPokemon = namesPokemon;

const imgsPokemon = (dataPokemon) => {
  let imgs = [];
  for (let i = 0; i < dataPokemon.length; i++) {
    imgs.push(dataPokemon[i].img)
  }
  return imgs;
}

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
