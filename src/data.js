// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const dataPokemon = POKEMON.pokemon;
console.log(dataPokemon);

const namesPokemon = (dataPokemon) => {
  let names = [];
  for (let i = 0; i < dataPokemon.length; i++) {
    names.push(dataPokemon[i].name)
  }
  return names;
}

window.namesPokemon = namesPokemon;

const imgsPokemon = (dataPokemon) => {
  let imgs = [];
  for (let i = 0; i < dataPokemon.length; i++) {
    imgs.push(dataPokemon[i].img)
  }
  return imgs;
}

window.imgsPokemon = imgsPokemon;

