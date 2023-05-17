// Create a car object and add the model, weight, color properties and the go() method to it,
// which prints the string 'go and model' to the console.

let car = {
    model: 'kia',
    weight: 1300,
    color: 'blue',
    go() {
        console.log('go ' + this.model)
    }
}

// Create a ford object, add a year property. Print the object to the console.

let ford = {
    year: 2009,
}
console.log('ford obj', ford);

// Set the prototype of the ford object to the car object. Print the ford object to the console.

Object.setPrototypeOf(ford, car);
console.log('ford obj', ford);

// Display properties ford.model, ford.weight, ford.color. Run the ford.go() method.

console.log('ford.model, ford.weight, ford.color: ', ford.model, ford.weight, ford.color);
ford.go();

// Add a new mileage property to car. Check if ford has a similar property?

car.mileage = 210000;
console.log('ford mileage: ', ford.mileage);

// Create a go() method for ford that prints the year of manufacture and color to the console.

ford.go = function() {
    console.log(this.year + ' ' + this.color);
}

// Call the prototype's go method on ford.

ford.__proto__.go()
ford.go()

// Create a chevrolet object, specify a ford object as a prototype. Check Availability
// chevrolet has model, color, mileage properties and go() method.

let chevrolet = {}

chevrolet.__proto__ = ford;
console.log(chevrolet.model, chevrolet.color, chevrolet.mileage);
chevrolet.go();

// Set up your go method for chevrolet.

chevrolet.go = function () {
    console.log('chevrolet go ' + this.model + ' ' + this.color);
}

chevrolet.go();

// Add two properties for chevrolet body_style, drive_type.

chevrolet.body_style = 'redline';
chevrolet.drive_type = 'automatic';

console.log(chevrolet);

// Loop through and loop through all the properties of the chevrolet object.

for (let key in chevrolet) {
    console.log(key + ': ' + chevrolet[key]);
}