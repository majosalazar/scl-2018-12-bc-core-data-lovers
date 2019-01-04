//muestra todos los pokemones en cartas individuales en la pagina inicial
dataPokemon.map(({num, name, img, id}) => 
document.getElementById('listPokemon').innerHTML += `
<div class="col-4">
    <div class="card w-100" style="width: 15rem;">
    <img class="card-img-top" src=${img}>
    <div class="card-body">
    <p>${num}</p>
    <p>${name}</p>
    <button class="btn" id="${id}"><i class="fas fa-plus"></i></button>
    </div>
  </div>
</div>
`
);

//entrar a carta principal de un pokemon
dataPokemon.map(({id, num, name, img, type, height, weight, weaknesses, prev_evolution, next_evolution, spawn_chance}) => 
document.getElementById(`${id}`).onclick = () => {
  console.log(typesPokemon);
  document.getElementById('main').innerHTML += `
  <div class="card w-100" style="width: 15rem;">
    <img class="card-img-top" src=${img}>
    <div class="card-body">
      <p>${num}</p>
      <p>${name}</p>
      <button class="${type[0]}">${type[0]}</button>
      <button class="${type[1]}">${type[1]}</button>
      <button class="${type[2]}">${type[2]}</button>
      <button class="${type[3]}">typesPokemon</button>
      <p>${type[0]}</p>
      <p>${height}</p>
      <p>${weight}</p>
      <p>${weaknesses}</p>
      <p>${prev_evolution}</p>
      <p>${next_evolution}</p>
      <p>${spawn_chance}</p>
    </div>
  </div>
  `
});



/*
dataPokemon.forEach(function(element){
  console.log(element);
})
*/





//filtrar, busca lo que se le ingresa en el input y lo compara con la info en dataPokemon
document.getElementById('btnSearch').onclick = () => {
  document.getElementById('listPokemon').innerHTML = '';
  let searchPokemon = document.getElementById('searchForName').value;
  const filterPokemonName = dataPokemon.filter(dataPokemon => (dataPokemon.name === searchPokemon));
  document.getElementById('listPokemon').innerHTML = filterPokemonName;
  console.log(filterPokemonName);
};
