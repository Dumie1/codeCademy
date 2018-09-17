/* Blocks and Scope

const city = 'New York City';
function logCitySkyline(){
  let skyscraper = 'The Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline())*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
Global Scope

let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';

function callMyNightSky(){
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky());*/

/*  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
Block Scope

function logVisibleLightWaves(){
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
}
logVisibleLightWaves();*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
Scope Pollution

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
Practice Good Scoping

const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic'){
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
};
logVisibleLightWaves();*/

/*
Let's review the following terms:

* Scope is the idea in programming that some variables are accessible/inaccessible from other parts of the program.
* Blocks are statements that exist within curly braces {}.
* Global scope refers to the context within which variables are accessible to every part of the program.
* Global variables are variables that exist within global scope.
* Block scope refers to the context within which variables that are accessible only within the block they are defined.
* Local variables are variables that exist within block scope.
* Global namespace is the space in our code that contains globally scoped information.
* Scope pollution is when too many variables exist in a namespace or variable names are reused.
*/

