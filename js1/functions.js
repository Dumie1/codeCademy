/* -------Function Declarations---------

function getReminder() {
  console.log('Water the plants.');
}
function greetInSpanish() {
  console.log('Buenas Tardes.');
}

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
Calling a Function

function sayThanks() {
  console.log('Thank you for your purchase! We appreciate your business.');
}
sayThanks();
sayThanks();
sayThanks();*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
Parameters and Arguments

function sayThanks(name) {
  console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}
sayThanks('Cole');*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
Default Parameters

function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!
*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
----Return----

function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}

--------------------------------------------

function monitorCount(rows, columns) {
  return rows * columns;
}
const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
---------Helper Functions-------

function multiplyByNineFifths(number) {
  return number * (9/5);
};
function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};
getFahrenheit(15); // Returns 59

---------------------------------------------
function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors(rows, columns) {
 return monitorCount(rows, columns)  * 200;
}
const totalCost = costOfMonitors(5, 4);
console.log(totalCost);*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
------Function Expressions-----

const plantNeedsWater = function(day){
  if(day === 'Wednesday'){
    return true;
  }else{
    return false;
  }
}
plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'));*/

/* 7&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
-------Arrow Functions-----

const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
console.log(plantNeedsWater());

--------------------------------------------

const plantNeedsWater = (day) => {
  return (day === 'Wednesday') ? true : false ;
};
console.log(plantNeedsWater());*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
-----Concise Body Arrow Functions-----
const plantNeedsWater = day => day === 'Wednesday' ? true : false;
console.log(plantNeedsWater('Wednesday'));*/
