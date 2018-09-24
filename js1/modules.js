/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
--------modules.exports--------

const Airplane = {};
Airplane.myAirplane = "StarJet";
module.exports = Airplane;
*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
------require()------
To make use of the exported module and the behavior we define within it,
we import the module. A common way to do this is with the require() function

const Menu = require('./menu.js');

function placeOrder() {
  console.log('My order is: ' + Menu.specialty);
}
placeOrder();

*/