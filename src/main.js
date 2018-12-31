
const resultImgs = imgsPokemon(dataPokemon); 

document.getElementById('btn-img').onclick = () => {
  document.getElementById('root').innerHTML = '';
  for (let i = 0; i < resultImgs.length; i++) {
    document.getElementById('root').innerHTML += '<img src="' + resultImgs[i] + '">';
  }
}
//Boton tipo Grass
  document.getElementById("grass").onclick = () => {
   document.getElementById("root").innerHTML = "";
    for (let i = 0; i < typeGrass.length; i++) {
     document.getElementById("root").innerHTML += '<img src="' + typeGrass[i] + '">';
     // document.getElementById("root").innerHTML +=  typeGrass[i].name;
}
}
