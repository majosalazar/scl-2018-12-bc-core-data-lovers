const resultNames = namesPokemon(dataPokemon);
const resultImgs = imgsPokemon(dataPokemon);
console.log(resultNames)

document.getElementById('btn').onclick = () => {
  document.getElementById('root').innerHTML = '';
  for (let i = 0; i < resultNames.length; i++) {
    document.getElementById('root').innerHTML += '<div>' + resultNames[i] + '</div>';
  }
}

document.getElementById('btn-img').onclick = () => {
  document.getElementById('root').innerHTML = '';
  for (let h = 0; h < resultImgs.length; h++) {
    document.getElementById('root').innerHTML += '<img src="' + resultImgs[h] + '">';
  }
}

document.getElementById('prueba').onclick = () => {
 
}
