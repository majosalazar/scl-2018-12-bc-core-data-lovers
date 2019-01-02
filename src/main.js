//mostrar nombre
document.getElementById('btn').onclick = () => {
  document.getElementById('root').innerHTML = '';
  for (let i = 0; i < namesPokemon.length; i++) {
    document.getElementById('root').innerHTML += '<div>' + namesPokemon[i] + '</div>';
  }
}

//imprime en la pantalla todas las imagenes 
document.getElementById('btn-img').onclick = () => {
  document.getElementById('root').innerHTML = '';
  for (let h = 0; h < imgsPokemon.length; h++) {
    document.getElementById('root').innerHTML += '<img src="' + imgsPokemon[h] + '">';
  }
}

//filtrar, busca lo que se le ingresa en el input y lo compara con la info en dataPokemon
document.getElementById('search').onclick = () => {
  document.getElementById('root').innerHTML = '';
  let searchPokemon = document.getElementById('searchFor').value;
  const filterPokemonName = dataPokemon.filter(dataPokemon => (dataPokemon.name === searchPokemon));
  document.getElementById('root').innerHTML = filterPokemonName;
  console.log(filterPokemonName);
};
