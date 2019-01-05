//muestra todos los pokemones en cartas individuales en la pagina inicial (es de )
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
  typeFire.map(({num,name,img}) => document.getElementById('root').innerHTML += `
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
//Boton tipo Ice
document.getElementById("ice").onclick = () => {
  document.getElementById("root").innerHTML = "";
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
  document.getElementById('root').innerHTML += "Existe: typeGrass.length";
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
//Boton tipo Water
document.getElementById("water").onclick = () => {
  document.getElementById("root").innerHTML = "";
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

//Boton tipo Water
document.getElementById("water").onclick = () => {
  document.getElementById("root").innerHTML = "";
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
