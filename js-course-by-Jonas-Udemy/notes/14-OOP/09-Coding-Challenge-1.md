# Coding Challenge 1

- problem : 
    - `1` : Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
    - `2` : Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
    - `3` : Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
    - `4` : Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
    - DATA CAR 1: 'BMW' going at 120 km/h
    - DATA CAR 2: 'Mercedes' going at 95 km/h

## Solution

```js
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

Car.prototype.accelerate = function() {
    this.speed += 10 // we're doing this 
        // because we want new/updated speed every time when we call this accelerate() method ✔️✔️✔️
    console.log(`${this.make} is going at ${this.speed} km/h`) 
}

Car.prototype.brake = function() {
    this.speed -= 5
    console.log(`${this.make} is going at ${this.speed} km/h`) 
}

bmw.accelerate() // output : BMW is going at 130 km/h
bmw.accelerate() // output : BMW is going at 140 km/h
bmw.accelerate() // output : BMW is going at 150 km/h
```
- if we use brake() method 
    ```js
    bmw.accelerate() // output : BMW is going at 130 km/h
    bmw.accelerate() // output : BMW is going at 140 km/h
    bmw.brake() // output : BMW is going at 135 km/h
    bmw.accelerate() // output : BMW is going at 145 km/h
    ```

- so these different objects contains the state of th car i.e make & current speed & they also contains the functionality to <br>
    manipulate it's own data i.e accelerate() & brake() methods are used to manipulate the speed each time 
- this is actually small code that's why we can't see the advantage of prototype but when we deal with massive code base <br>
    then we'll see the advantages of it 
