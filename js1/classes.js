/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
INTRO TO OBJECTS

Take, for example, an object representing a dog named halley. 
This dog's name (a key) is "Halley" (a value) and has an age (another key) of 
3 (another value). We create the halley object below:

let halley = {
  _name: 'Halley',
  _behavior: 0,
  get name() {
    return this._name;
  },
  get behavior() {
    return this._behavior;
  },
  incrementBehavior() {
    this._behavior++;
  }
}

-----------------------------------------------------------------

Instead of using the syntax above for every dog that joins the daycare,
we can create a Dog class that serves as a template for creating new Dog objects.
Classes are a great way to reduce duplicate code and debugging time.

class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior ++;
  }
}

const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
--------Constructor---------

class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}
----------------------------------------------

class Surgeon  {
  constructor(name, department){
    this.name = name;
    this.department = department;
  }
}
*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
------Instance-----
An instance is an object that contains the property names and methods of a class,
but with unique property values



*/

