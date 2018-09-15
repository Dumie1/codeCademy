
/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
--------Accessing Elements----------

const famousSayings = 
['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];
console.log(famousSayings[2]);
console.log(famousSayings[3]);*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
---Update Elements------
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';
console.log(groceryList);*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
--------------Arrays with let and const--------------
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);
condiments = ['Mayo'];
utensils[3] = 'Spoon';
console.log(utensils);*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
-----The .length property---------

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
------------The .push() Method-----
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('paint', 'cut');
console.log(chores);*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
-------The .pop() Method-----------
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores);*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
------More Array Methods----------

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

console.log(groceryList);

groceryList.unshift('popcorn');

console.log(groceryList);

console.log(groceryList.slice(1, 4))

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
------Arrays and Functions----------

const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
  arr.push('lily');
}
addFlower(flowers);
console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']
*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
---------Nested Arrays------

const nestedArr = [[1], [2, 3]];
console.log(nestedArr[1]); // Output: [2, 3]

-------------------------------------------------------------

const numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];*/

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

*/