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
}*/