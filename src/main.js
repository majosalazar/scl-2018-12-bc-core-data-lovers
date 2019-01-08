window.onload = (() => {
  //funcion del splash
   setTimeout(() => {
    splash.style.display = 'none';
    sectionNav.style.display = 'block';
    sectionSelect.style.display = 'block';
    sectionList.style.display = 'block';
    sectionMain.style.display = 'block';
    sectionTypes.style.display = 'block';
    root.style.display = 'block';
  }, 4000);  
});

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
dataPokemon.forEach((element) => {
  document.getElementById(`${element.id}`).onclick = () => {
    //permite mostrar los tipos de pokemon de forma invidividual
    const typesPokemon = element.type
    let typesPrint = '';
    typesPokemon.forEach((type) => {
      typesPrint += `<button class="btn ${type.toLowerCase()}">${type}</button>`
    });
    //permite mostrar las debilidades de un pokemon de forma invidividual
    const weaknessesPokemon = element.weaknesses
    let weaknessesPrint = '';
    weaknessesPokemon.forEach((weaknesses) => {
      weaknessesPrint += `<button class="btn ${weaknesses.toLowerCase()}">${weaknesses}</button>`
    });

    /*
    //permite mostrar las pre evoluciones de un pokemon
    const prev_evolutionPokemon = element.prev_evolution
    let prev_evolutionPrint = '';   
    prev_evolutionPokemon.map(({num, name}) => {
      prev_evolutionPrint += `<p>${num}</p>
      <span>${name}</span>`
    
    });
    
    //permite mostrar las siguientes evoluciones de un pokemon
    const next_evolutionPokemon = element.next_evolution
    let next_evolutionPrint = '';   
    next_evolutionPokemon.map(({num, name}) => {
      next_evolutionPrint += `<p>${num}</p>
      <p>${name}</p>`
    });
    */
    

    //imprime en la pantalla la tarjeta de un pokemon
    document.getElementById('main').innerHTML += `
    <div class="card" style="width: 15rem;">
      <div class="w-100">
        <img class="card-img-top" src=${element.img}>
      </div>
      <div class="card-body">
        <p>${element.num}</p>
        <p>${element.name}</p>
        <span>Tipo: ${typesPrint}</span>
        <p>Altura: ${element.height}</p>
        <p>Peso: ${element.weight}</p>
        <span>${weaknessesPrint}</span>
        <p>Rango de aparición: ${element.spawn_chance}</p>
      </div>
    </div>
    `
  };
});

/*
//entrar a carta principal de un pokemon
dataPokemon.map(({id, num, name, img, type, height, weight, weaknesses, prev_evolution, next_evolution, spawn_chance}) => 

document.getElementById(`${id}`).onclick = () => {
  document.getElementById('main').innerHTML += `
  <div class="card" style="width: 15rem;">
    <div class="w-100">
      <img class="card-img-top" src=${img}>
    </div>
    <div class="card-body">
      <p>${num}</p>
      <p>${name}</p>
      <button class="${typePokemon}">${typePokemon}</button>
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

*/


//Boton tipo Grass
document.getElementById("grass").onclick = () => {
 document.getElementById("root").innerHTML = "";
  for (let i = 0; i < typeGrass.length; i++) {
  document.getElementById("root").innerHTML += '<img src="' + typeGrass[i] + '">';
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

