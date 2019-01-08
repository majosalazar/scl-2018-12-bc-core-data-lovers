const dataPokemon = POKEMON.pokemon;

//Clasifico por tipo

let i=0;
let grass = [];
const typeGrass = dataPokemon.filter((types) => types.type[i] === "Grass")
const prueba = typeGrass.forEach((element) => {
  grass.push(element.name, element.img)
});

//.map((types => types.img + types.name));
//console.log(grass);

const ent = typeGrass.forEach((element) => {
  //console.log(Object.entries(element))
});


//.map((types)=>{return types.name;}); 
//.map((types)=>{return types.name && types.img;}); 
//window.typeGrass = typeGrass;



const typePoison = dataPokemon.filter((types) => types.type[i] === "Poison")
.map((types)=>{return types.img;});

const typeFire = dataPokemon.filter((types) => types.type[i]==="Fire")
.map((types)=>{return types.img;});

const typeIce = dataPokemon.filter((types) => types.type[i]==="Ice")
.map((types)=>{return types.img;});

const typeFlyin = dataPokemon.filter((types) => types.type[i]==="Flying")
.map((types)=>{return types.img;});

const typePsychic = dataPokemon.filter((types) => types.type[i]==="Psychic")
.map((types)=>{return types.img;});

const typeWater= dataPokemon.filter((types) => types.type[i]==="Water")
.map((types)=>{return types.img;});

const typeGround = dataPokemon.filter((types) => types.type[i]==="Ground")
.map((types)=>{return types.img;});

const typeRock = dataPokemon.filter((types) => types.type[i]==="Rock")
.map((types)=>{return types.img;});

const typeElectric= dataPokemon.filter((types) => types.type[i]==="Electric")
.map((types)=>{return types.img;});

const typeBug = dataPokemon.filter((types) => types.type[i]==="Bug")
.map((types)=>{return types.img;});

const typeNormal = dataPokemon.filter((types) => types.type[i]==="Normal")
.map((types)=>{return types.img;});

const typeFighting = dataPokemon.filter((types) => types.type[i]==="Fighting")
.map((types)=>{return types.img;});

const typeFairy = dataPokemon.filter((types) => types.type[i]==="Fairy")
.map((types)=>{return types.img;});

const typeGhost= dataPokemon.filter((types) => types.type[i]==="Ghost")
.map((types)=>{return types.img;});

const typeDark = dataPokemon.filter((types) => types.type[i]==="Dark")
.map((types)=>{return types.img;});

const typeSteel = dataPokemon.filter((types) => types.type[i]==="Steel")
.map((types)=>{return types.img;});

const typeDragon= dataPokemon.filter((types) => types.type[i]==="Dragon")
.map((types)=>{return types.img;});

window.typesPokemon;


/*
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
*/

