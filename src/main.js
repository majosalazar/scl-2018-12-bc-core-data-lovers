const resultNames = namesPokemon(dataPokemon);

document.getElementById('btn').onclick = () => {
  console.log('hola');
  document.getElementById('root').innerHTML = '';
  for (let i = 0; i < resultNames.length; i++) {
    document.getElementById('root').innerHTML += '<p>' + resultNames[i] + '</p>';
  }
}