// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const dataPokemon = POKEMON.pokemon;

const imgsPokemon = (dataPokemon) => {
  let imgs = [];
  for (let i = 0; i < dataPokemon.length; i++) {
    imgs.push(dataPokemon[i].img)
  }
  return imgs;
}

window.imgsPokemon = imgsPokemon;

//Clasifico por tipo
let i=0;
const typeGrass = dataPokemon.filter((types) => { return types.type[i]==="Grass";})
.map((types)=>{return types.img;}); 
//.map((types)=>{return types.name;}); 
//.map((types)=>{return types.name && types.img;}); 
//window.typeGrass = typeGrass;


const typePoison = dataPokemon.filter((types) => { return types.type[i]==="Poison";})
.map((types)=>{return types.name;});

const typeFire = dataPokemon.filter((types) => { return types.type[i]==="Fire";})
.map((types)=>{return types.name;});

const typeIce = dataPokemon.filter((types) => { return types.type[i]==="Ice";})
.map((types)=>{return types.name;});

const typeFlying = dataPokemon.filter((types) => { return types.type[i]==="Flying";})
.map((types)=>{return types.name;});

const typePsychic = dataPokemon.filter((types) => { return types.type[i]==="Psychic";})
.map((types)=>{return types.name;});

const typeWater= dataPokemon.filter((types) => { return types.type[i]==="Water";})
.map((types)=>{return types.name;});

const typeGround = dataPokemon.filter((types) => { return types.type[i]==="Ground";})
.map((types)=>{return types.name;});

const typeRock = dataPokemon.filter((types) => { return types.type[i]==="Rock";})
.map((types)=>{return types.name;});

const typeElectric= dataPokemon.filter((types) => { return types.type[i]==="Electric";})
.map((types)=>{return types.name;});

const typeBug = dataPokemon.filter((types) => { return types.type[i]==="Bug";})
.map((types)=>{return types.name;});

const typeNormal = dataPokemon.filter((types) => { return types.type[i]==="Normal";})
.map((types)=>{return types.name;});

const typeFighting = dataPokemon.filter((types) => { return types.type[i]==="Fighting";})
.map((types)=>{return types.name;});

const typeFairy = dataPokemon.filter((types) => { return types.type[i]==="Fairy";})
.map((types)=>{return types.name;});

const typeGhost= dataPokemon.filter((types) => { return types.type[i]==="Ghost";})
.map((types)=>{return types.name;});

const typeDark = dataPokemon.filter((types) => { return types.type[i]==="Dark";})
.map((types)=>{return types.name;});

const typeSteel = dataPokemon.filter((types) => { return types.type[i]==="Steel";})
.map((types)=>{return types.name;});

const typeDragon= dataPokemon.filter((types) => { return types.type[i]==="Dragon";})
.map((types)=>{return types.name;});




console.log(typeDragon);
console.log(typeDark);
console.log(typeGrass);
console.log(typePoison);

window.typesPokemon;
