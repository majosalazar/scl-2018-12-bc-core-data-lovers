const dataPokemon = POKEMON.pokemon;

//Clasifico por tipo y  Calculo Promedio "Oportunidad de captura de un Pókemon por tipo"
// con los average hago una grafica y muestro esta estadistica 

//Filtrar tipos fuego
const typeFire = dataPokemon.filter((types) => {return types.type.indexOf ("Fire") >=0});
const counterFire=typeFire.length;
const totalFire = typeFire.reduce(function(sumaFire, spawn){
  return sumaFire + spawn.spawn_chance;
  }, 0);
  const averageFire=(totalFire/counterFire);


//Filtrar tipos Hielo
const typeIce = dataPokemon.filter((types) =>{return types.type.indexOf("Ice") >=0});
const counterIce=typeIce.length;
const totalIce = typeIce.reduce(function(sumaIce, spawn){
  return sumaIce + spawn.spawn_chance;
  }, 0);
  const averageIce=(totalIce/counterIce);


//Filtrar tipos Flying
const typeFlying = dataPokemon.filter((types) => {return types.type.indexOf("Flying") >=0});
const counterFlying=typeFlying.length;
const totalFlying = typeFlying.reduce(function(sumaFlying, spawn){
  return sumaFlying + spawn.spawn_chance;
  }, 0);
  const averageFlying=(totalFlying/counterFlying);
  console.log(averageFlying);


//Filter Psychic
const typePsychic = dataPokemon.filter((types) => {return types.type.indexOf("Psychic") >=0});
const counterPsychic=typePsychic.length;
const totalPsychic= typePsychic.reduce(function(sumaPsychic, spawn){
  return sumaPsychic + spawn.spawn_chance;
  }, 0);
  const averagePsychic=(totalPsychic/counterPsychic);

//Filter Grass
const typeGrass = dataPokemon.filter((types) => {return types.type.indexOf("Grass") >=0});
const counterGrass=typeGrass.length;

//Filter Poison
const typePoison = dataPokemon.filter((types) => {return types.type.indexOf("Poison") >=0});
const counterPoison=typePoison.length;

//Filter Water
const typeWater = dataPokemon.filter((types) => {return types.type.indexOf("Water") >=0});
const counterWater=typeWater.length;

//Filter Ground
const typeGround = dataPokemon.filter((types) => {return types.type.indexOf("Ground") >=0});
const counterGround=typeGround.length;

//Filter Rock
const typeRock = dataPokemon.filter((types) => {return types.type.indexOf("Rock") >=0});
const counterRock=typeRock.length;

//Filter Electric
const typeElectric = dataPokemon.filter((types) => {return types.type.indexOf("Electric") >=0});
const counterElectric=typeElectric.length;

//Filter Bug
const typeBug = dataPokemon.filter((types) => {return types.type.indexOf("Bug") >=0});
const counterBug=typeBug.length;

//Filter Normal
const typeNormal = dataPokemon.filter((types) => {return types.type.indexOf("Normal") >=0});
const counterNormal=typeNormal.length;

//Filter Fighting
const typeFighting = dataPokemon.filter((types) => {return types.type.indexOf("Fighting") >=0});
const counterFighting=typeFighting.length;

//Filter Fairy
const typeFairy = dataPokemon.filter((types) => {return types.type.indexOf("Fairy") >=0});
const counterFairy=typeFairy.length;

//Filter Dark
const typeDark = dataPokemon.filter((types) => {return types.type.indexOf("Dark") >=0});
const counterDark=typeDark.length;

//Filter Ghost
const typeGhost = dataPokemon.filter((types) => {return types.type.indexOf("Ghost") >=0});
const counterGhost=typeGhost.length;
 const totalGhost = dataPokemon.reduce(function(sumaGhost, spawn){
  return sumaGhost + spawn.spawn_chance;
  }, 0);
  const averageGhost=(totalGhost/counterGhost);



//Filter Steel
const typeSteel = dataPokemon.filter((types) => {return types.type.indexOf("Steel") >=0});
const counterSteel=typeSteel.length;

//Filter Dragon
const typeDragon = dataPokemon.filter((types) => {return types.type.indexOf("Dragon") >=0});
const counterDragon=typeDragon.length;
const totalDragon = typeDragon.reduce(function(sumaDragon, spawn){
  return sumaDragon + spawn.spawn_chance;
  }, 0);
  const averageDragon=(totalDragon/counterDragon);
  console.log(averageDragon);


window.typesPokemon;
window.dataPokemon;


window.data = {
  filterData: (dataPokemon, searchPokemon) => {
    const filterPokemonName = dataPokemon.filter(dataPokemon => (dataPokemon.name === searchPokemon));
    console.log(filterPokemonName);

  },

  sortData: (dataPokemon, sortBy, sortOrder) => {

  },

  computeStats: (dataPokemon) => {
    

  }
}

// Graficos
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Fuego',     counterFire],
  ['Hielo',      counterIce],
  ['Volador',  counterFlying],
  ['Psíquico', counterPsychic],
  ['Hierba ',    counterGrass],
  ['Veneno ',    counterPoison],
  ['Agua ',    counterWater],
  ['Tierra ',    counterGround],
  ['Roca ',    counterRock],
  ['Eléctrico ',    counterElectric],
  ['Insecto ',    counterBug],
  ['Normal ',    counterNormal],
  ['Lucha ',    counterFighting],
  ['Hada ',    counterFairy],
  ['Oscuridad ',    counterDark],
  ['Fantasma ',    counterGhost],
  ['Acero ',    counterSteel],
  ['Dragon ',    counterDragon]
]);

var options = {
  title: 'Cantidad de Pókemon por Tipo',
  pieHole: 0.5,
  width: 1000,
  height: 800,
};

var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
chart.draw(data, options);
}

/*
//filtrar por nombre, busca lo que se le ingresa en el input y lo compara con la info en dataPokemon
const filterName = (dataPokemon, condition) => {
  const filteredName = dataPokemon.filter(element => {
    return element.name === condition
  })
  return filteredName;
};
*/