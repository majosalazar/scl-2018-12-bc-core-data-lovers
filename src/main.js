//muestra todos los pokemones en cartas individuales en la pagina inicial
dataPokemon.map(({num,name,img,id}) =>
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
dataPokemon.map(({id,num,name,img,type, height,weight,weaknesses,prev_evolution,next_evolution,spawn_chance}) =>
  document.getElementById(`${id}`).onclick = () => {
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

//Filtrar por tipo de Pokemon

//Boton tipo Fire
document.getElementById("fire").onclick = () => {
 document.getElementById("root").innerHTML = "";
  typeFire.map(({num,name,img,height,weight,type,weaknesses}) => document.getElementById('root').innerHTML += `
<div class="wrap"> 
  <div class="tarjeta-wrap">
    <div class="tarjeta">
        <img class="card-img-top" src=${img}> 
         <p2>${name}</p2>
          <div class="atras"><p></p>
            <p>Num: ${num}</p>
            <p>Altura: ${height}</p>
            <p>Peso: ${weight}</p>
            <p>Tipo: ${type}</p>
            <p>Debilidad con Pókemon tipo: ${weaknesses}</p>
          </div>
    </div>
  </div>
</div>
`);
document.getElementById("root").innerHTML += "Existen: " + counterFire + "   Pokemones tipo Fuego";
}

//Boton tipo Ice
document.getElementById("ice").onclick = () => {
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML += "Existen: " + counterIce + "   Pokemones tipo Hielo";
  typeIce.map(({num,name,img}) => document.getElementById('root').innerHTML += `
<div class="col-4">
    <div class="card w-100" style="width: 15rem;">
    <img class="card-img-top" src=${img}>
    <div class="card-body">
    <p>${num}</p>
    <p>${name}</p>
    </div>
  </div>
</div>
`);
}
//Boton tipo Volador
document.getElementById("flying").onclick = () => {
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML += "Existen: " + counterFlying + "   Pokemones tipo Volador";
  typeFlying.map(({num,name,img}) => document.getElementById('root').innerHTML += `
<div class="col-4">
    <div class="card w-100" style="width: 15rem;">
    <img class="card-img-top" src=${img}>
    <div class="card-body">
    <p>${num}</p>
    <p>${name}</p>
    </div>
  </div>
</div>
`);
}

//Boton tipo Psychic
document.getElementById("psychic").onclick = () => {
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML += "Existen: " + counterPsychic + "   Pokemones tipo Psíquico";
  typePsychic.map(({num,name,img}) => document.getElementById('root').innerHTML += `
<div class="col-4">
    <div class="card w-100" style="width: 15rem;">
    <img class="card-img-top" src=${img}>
    <div class="card-body">
    <p>${num}</p>
    <p>${name}</p>
    </div>
  </div>
</div>
`);
}
//Boton tipo Hierba
document.getElementById("grass").onclick = () => {
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML += "Existen: " + counterGrass + "   Pokemones tipo Hierba";
  typeGrass.map(({num,name,img}) =>
    document.getElementById('root').innerHTML += `
<div class="col-4">
    <div class="card w-100" style="width: 15rem;">
    <img class="card-img-top" src=${img}>
    <div class="card-body">
    <p>${num}</p>
    <p>${name}</p>
    </div>
  </div>
</div>
`);
}
//Boton tipo Poison
document.getElementById("poison").onclick = () => {
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML += "Existen: " + counterPoison + "   Pokemones tipo Veneno";
  typePoison.map(({num,name,img}) =>
    document.getElementById('root').innerHTML += `
<div class="col-4">
    <div class="card w-100" style="width: 15rem;">
    <img class="card-img-top" src=${img}>
    <div class="card-body">
    <p>${num}</p>
    <p>${name}</p>
    </div>
  </div>
</div>
`);
}

//Boton tipo Water
document.getElementById("water").onclick = () => {
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML += "Existen: " + counterWater + "   Pokemones tipo Agua";
  typeWater.map(({num,name,img}) =>
    document.getElementById('root').innerHTML += `
<div class="col-4">
    <div class="card w-100" style="width: 15rem;">
    <img class="card-img-top" src=${img}>
    <div class="card-body">
    <p>${num}</p>
    <p>${name}</p>
    </div>
  </div>
</div>
`);
}
//Boton tipo Ground
document.getElementById("ground").onclick = () => {
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML += "Existen: " + counterGround + "   Pokemones tipo Tierra";
  typeGround.map(({num,name,img}) =>
    document.getElementById('root').innerHTML += `
<div class="col-4">
    <div class="card w-100" style="width: 15rem;">
    <img class="card-img-top" src=${img}>
    <div class="card-body">
    <p>${num}</p>
    <p>${name}</p>
    </div>
  </div>
</div>
`);
}
//Boton tipo Rock
document.getElementById("rock").onclick = () => {
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML += "Existen: " + counterRock + "   Pokemones tipo Roca";
  typeRock.map(({num,name,img}) =>
    document.getElementById('root').innerHTML += `
<div class="col-4">
    <div class="card w-100" style="width: 15rem;">
    <img class="card-img-top" src=${img}>
    <div class="card-body">
    <p>${num}</p>
    <p>${name}</p>
    </div>
  </div>
</div>
`);
}

//Boton tipo Electric
document.getElementById("electric").onclick = () => {
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML += "Existen: " + counterElectric + "   Pokemones tipo Eléctrico";
  typeElectric.map(({num,name,img}) =>
    document.getElementById('root').innerHTML += `
<div class="col-4">
    <div class="card w-100" style="width: 15rem;">
    <img class="card-img-top" src=${img}>
    <div class="card-body">
    <p>${num}</p>
    <p>${name}</p>
    </div>
  </div>
</div>
`);
}

//Boton tipo Bug
document.getElementById("bug").onclick = () => {
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML += "Existen: " + counterBug + "   Pokemones tipo Insecto";
  typeBug.map(({num,name,img}) =>
    document.getElementById('root').innerHTML += `
<div class="col-4">
    <div class="card w-100" style="width: 15rem;">
    <img class="card-img-top" src=${img}>
    <div class="card-body">
    <p>${num}</p>
    <p>${name}</p>
    </div>
  </div>
</div>
`);
}

//Boton tipo Normal
document.getElementById("normal").onclick = () => {
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML += "Existen: " + counterNormal + "   Pokemones tipo Normal";
  typeNormal.map(({num,name,img}) =>
    document.getElementById('root').innerHTML += `
<div class="col-4">
    <div class="card w-100" style="width: 15rem;">
    <img class="card-img-top" src=${img}>
    <div class="card-body">
    <p>${num}</p>
    <p>${name}</p>
    </div>
  </div>
</div>
`);
}

//Boton tipo Fighting
document.getElementById("fighting").onclick = () => {
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML += "Existen: " + counterFighting + "   Pokemones tipo Lucha";
  typeFighting.map(({num,name,img}) =>
    document.getElementById('root').innerHTML += `
<div class="col-4">
    <div class="card w-100" style="width: 15rem;">
    <img class="card-img-top" src=${img}>
    <div class="card-body">
    <p>${num}</p>
    <p>${name}</p>
    </div>
  </div>
</div>
`);
}

//Boton tipo Fairy
document.getElementById("fairy").onclick = () => {
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML += "Existen: " + counterFairy + "   Pokemones tipo Hada";
  typeFairy.map(({num,name,img}) =>
    document.getElementById('root').innerHTML += `
<div class="col-4">
    <div class="card w-100" style="width: 15rem;">
    <img class="card-img-top" src=${img}>
    <div class="card-body">
    <p>${num}</p>
    <p>${name}</p>
    </div>
  </div>
</div>
`);
}
//Boton tipo Dark
document.getElementById("dark").onclick = () => {
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML += "Existen: " + counterDark + "   Pokemones tipo Oscuridad";
  typeDark.map(({num,name,img}) =>
    document.getElementById('root').innerHTML += `
<div class="col-4">
    <div class="card w-100" style="width: 15rem;">
    <img class="card-img-top" src=${img}>
    <div class="card-body">
    <p>${num}</p>
    <p>${name}</p>
    </div>
  </div>
</div>
`);
}
//Boton tipo Ghost
document.getElementById("ghost").onclick = () => {
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML += "Existen: " + counterGhost + "   Pokemones tipo Fantasma";
  typeGhost.map(({num,name,img}) =>
    document.getElementById('root').innerHTML += `
<div class="col-4">
    <div class="card w-100" style="width: 15rem;">
    <img class="card-img-top" src=${img}>
    <div class="card-body">
    <p>${num}</p>
    <p>${name}</p>
    </div>
  </div>
</div>
`);
}
//Boton tipo Steel
document.getElementById("steel").onclick = () => {
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML += "Existen: " + counterSteel + "   Pokemones tipo Acero";
  typeSteel.map(({num,name,img}) =>
    document.getElementById('root').innerHTML += `
<div class="col-4">
    <div class="card w-100" style="width: 15rem;">
    <img class="card-img-top" src=${img}>
    <div class="card-body">
    <p>${num}</p>
    <p>${name}</p>
    </div>
  </div>
</div>
`);
}
//Boton tipo Dragon
document.getElementById("dragon").onclick = () => {
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML += "Existen: " + counterDragon + "   Pokemones tipo Dragon";
  typeDragon.map(({num,name,img,height,weight,type,weaknesses}) =>
  document.getElementById('root').innerHTML += `
<div class="wrap">
  <div class="tarjeta-wrap">
    <div class="tarjeta">
        <img class="card-img-top" src=${img}> 
         <p2>${name}</p2>
          <div class="atras"><p></p>
            <p>Num: ${num}</p>
            <p>Altura: ${height}</p>
            <p>Peso: ${weight}</p>
            <p>Tipo: ${type}</p>
            <p>Debilidad con Pokemon tipo: ${weaknesses}</p>
          </div>
  </div>
</div>
`);
}
/*
dataPokemon.forEach(function(element){
  console.log(element);
})
*/


//filtrar por nombre, busca lo que se le ingresa en el input y lo compara con la info en dataPokemon
document.getElementById('btnSearch').onclick = () => {
  document.getElementById('listPokemon').innerHTML = '';
  let searchPokemon = document.getElementById('searchForName').value;
  const filterPokemonName = dataPokemon.filter(dataPokemon => (dataPokemon.name === searchPokemon));
  document.getElementById('listPokemon').innerHTML = filterPokemonName;
  console.log(filterPokemonName);
};
