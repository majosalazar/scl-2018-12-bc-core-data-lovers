const dataPokemon = POKEMON.pokemon;

//Clasifico por tipo

//Filtrar tipos fuego
const typeFire = dataPokemon.filter((types) => {return types.type.indexOf ("Fire") >=0});
const counterFire=typeFire.length;

//Filtrar tipos Hielo
const typeIce = dataPokemon.filter((types) =>{return types.type.indexOf("Ice") >=0});
const counterIce=typeIce.length;

//Filtrar tipos Flying
const typeFlying = dataPokemon.filter((types) => {return types.type.indexOf("Flying") >=0});
const counterFlying=typeFlying.length;

//Filter Psychic
const typePsychic = dataPokemon.filter((types) => {return types.type.indexOf("Psychic") >=0});
const counterPsychic=typePsychic.length;

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

//Filter Steel
const typeSteel = dataPokemon.filter((types) => {return types.type.indexOf("Steel") >=0});
const counterSteel=typeSteel.length;

//Filter Dragon
const typeDragon = dataPokemon.filter((types) => {return types.type.indexOf("Dragon") >=0});
const counterDragon=typeDragon.length;

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
  ['Hierba ',    counterGrass],
  ['Agua ',    counterWater],
  ['Tierra ',    counterGround],
  ['Roca ',    counterRock],
  ['Eléctrico ',    counterElectric],
  ['Insecto ',    counterBug],
  ['Normal ',    counterNormal],
  ['Lucha ',    counterFighting],
  ['Hada ',    counterFire],
  ['Oscuridad ',    counterDark],
  ['Fantasma ',    counterGhost],
  ['Acero ',    counterSteel],
  ['Dragon ',    counterDragon]
  
]);

var options = {
  title: 'My Daily Activities',
  pieHole: 0.4,
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