
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
//Boton tipo Poison
document.getElementById("poison").onclick = () => {
  document.getElementById("root").innerHTML = "";
   for (let i = 0; i < typePoison.length; i++) {
    document.getElementById("root").innerHTML += '<img src="' + typePoison[i] + '">';
   }
  }
  //Boton tipo Fire
document.getElementById("fire").onclick = () => {
  document.getElementById("root").innerHTML = "";
   for (let i = 0; i < typeFire.length; i++) {
    document.getElementById("root").innerHTML += '<img src="' + typeFire[i] + '">';
   }
  }
  //Boton tipo Ice
document.getElementById("ice").onclick = () => {
  document.getElementById("root").innerHTML = "";
   for (let i = 0; i < typeIce.length; i++) {
    document.getElementById("root").innerHTML += '<img src="' + typeIce[i] + '">';
   }
  }
  //Boton tipo Flying
document.getElementById("flying").onclick = () => {
  document.getElementById("root").innerHTML = "";
   for (let i = 0; i < typeFlying.length; i++) {
    document.getElementById("root").innerHTML += '<img src="' + typeFlying[i] + '">';
   }
  }
  //Boton tipo Psychic
document.getElementById("psychic").onclick = () => {
  document.getElementById("root").innerHTML = "";
   for (let i = 0; i < typePsychic.length; i++) {
    document.getElementById("root").innerHTML += '<img src="' + typePsychic[i] + '">';
   }
  }
  //Boton tipo Water
document.getElementById("water").onclick = () => {
  document.getElementById("root").innerHTML = "";
   for (let i = 0; i < typeWater.length; i++) {
    document.getElementById("root").innerHTML += '<img src="' + typeWater[i] + '">';
   }
  }
  //Boton tipo Ground
document.getElementById("ground").onclick = () => {
  document.getElementById("root").innerHTML = "";
   for (let i = 0; i < typeGround.length; i++) {
    document.getElementById("root").innerHTML += '<img src="' + typeGround[i] + '">';
   }
  }
  //Boton tipo Rock
document.getElementById("rock").onclick = () => {
  document.getElementById("root").innerHTML = "";
   for (let i = 0; i < typeRock.length; i++) {
    document.getElementById("root").innerHTML += '<img src="' + typeRock[i] + '">';
   }
  }
  //Boton tipo Electric
document.getElementById("electric").onclick = () => {
  document.getElementById("root").innerHTML = "";
   for (let i = 0; i < typeElectric.length; i++) {
    document.getElementById("root").innerHTML += '<img src="' + typeElectric[i] + '">';
   }
  }
  //Boton tipo Bug
document.getElementById("bug").onclick = () => {
  document.getElementById("root").innerHTML = "";
   for (let i = 0; i < typeBug.length; i++) {
    document.getElementById("root").innerHTML += '<img src="' + typeBug[i] + '">';
   }
  }
  //Boton tipo Normal
document.getElementById("normal").onclick = () => {
  document.getElementById("root").innerHTML = "";
   for (let i = 0; i < typeNormal.length; i++) {
    document.getElementById("root").innerHTML += '<img src="' + typeNormal[i] + '">';
   }
  }
  //Boton tipo Fighting
document.getElementById("fighting").onclick = () => {
  document.getElementById("root").innerHTML = "";
   for (let i = 0; i < typeFighting.length; i++) {
    document.getElementById("root").innerHTML += '<img src="' + typeFighting[i] + '">';
   }
  }
  //Boton tipo Fairy
document.getElementById("fairy").onclick = () => {
  document.getElementById("root").innerHTML = "";
   for (let i = 0; i < typeFairy.length; i++) {
    document.getElementById("root").innerHTML += '<img src="' + typeFairy[i] + '">';
   }
  }
   //Boton tipo Ghost
document.getElementById("ghost").onclick = () => {
  document.getElementById("root").innerHTML = "";
   for (let i = 0; i < typeGhost.length; i++) {
    document.getElementById("root").innerHTML += '<img src="' + typeGhost[i] + '">';
   }
  }
   //Boton tipo Dark
document.getElementById("dark").onclick = () => {
  document.getElementById("root").innerHTML = "";
   for (let i = 0; i < typeDark.length; i++) {
    document.getElementById("root").innerHTML += '<img src="' + typeDark[i] + '">';
   }
  }
   //Boton tipo Steel
document.getElementById("steel").onclick = () => {
  document.getElementById("root").innerHTML = "";
   for (let i = 0; i < typeSteel.length; i++) {
    document.getElementById("root").innerHTML += '<img src="' + typeSteel[i] + '">';
   }
  }
  //Boton tipo Dragon
document.getElementById("dragon").onclick = () => {
  document.getElementById("root").innerHTML = "";
   for (let i = 0; i < typeDragon.length; i++) {
    document.getElementById("root").innerHTML += '<img src="' + typeDragon[i] + '">';
   }
  }
  