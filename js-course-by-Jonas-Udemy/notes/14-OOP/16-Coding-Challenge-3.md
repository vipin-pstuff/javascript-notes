# Coding Challenge 3

- problem :
    - `1` : Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. 
        Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
    - `2` : Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
    - `3` : Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. 
        Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
    - `4` : Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). 
        Notice what happens when you 'accelerate'! HINT: Review the definition of polymorphism 😉
    - DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

## Solution

- `STEP 1` : creating starting code structure 
    ```js
    const Car = function (make, speed) {
      this.make = make;
      this.speed = speed;
    };

    Car.prototype.accelerate = function () {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed}km/h`);
    };

    Car.prototype.brake = function () {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed}km/h`);
    };

    const EV = function (make, speed, charge) {
      Car.call(this, make, speed);
      this.charge = charge;
    };

    const tesla = new EV("Tesla", 120, 23);
    // output : tesla
      // EV {make: "Tesla", speed: 120, charge: 23}
    ```

- `STEP 2` : now tricky party comes i.e link the prototypes 
  - `Note ✅` : 
      ```
      - now we want that prototype of EV constructor function inherit to the prototype of Car constructor function
      - STEP 1 : EV.prototype = Object.create() --> this will create a new object 
        - so Object.create() method will set EV.prototype to the new object 
          - which has as a prototype Car.prototype 💡💡💡
      ```
  - linking the prototypes of those constructor function b/w each other
    ```js
    const Car = function (make, speed) {
      this.make = make;
      this.speed = speed;
    };

    Car.prototype.accelerate = function () {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed}km/h`);
    };

    Car.prototype.brake = function () {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed}km/h`);
    };

    const EV = function (make, speed, charge) {
      Car.call(this, make, speed);
      this.charge = charge;
    };

    // Link the prototypes
    EV.prototype = Object.create(Car.prototype)

    const tesla = new EV("Tesla", 120, 23);
    ```

- `STEP 3` : now let's add some methods to the prototype of EV constructor function
  ```js
  const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
  };

  Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  };

  Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  };

  const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
  };

  // Link the prototypes
  EV.prototype = Object.create(Car.prototype)

  // add some methods to the prototype of EV constructor function
  EV.prototype.chargeBatter = function(chargeTo) {
    this.chargeTo = chargeTo
  }

  const tesla = new EV("Tesla", 120, 23);

  // testing code
  tesla.chargeBattery(90)
  console.log(tesla)
  // output : EV {make: "Tesla", speed: 120, charge: 90}
    // let's look for prototype chain , so inside this EV object , inside __proto__: Car
      // inside __proto__: Car , we'll see chargeBattery: f (chargeTo)
      // now inside __proto__: Object , contain accelerate() & brake() functions of Car constructor function 💡💡💡

  // now we can directly use brake() method on tesla object 
    // because prototype chain is working fine 
  tesla.brake() // output : Tesla is going at 115 km/h
  ```

- `STEP 4` : 3 : Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. 
    - Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
    ```js
    const Car = function (make, speed) {
      this.make = make;
      this.speed = speed;
    };

    Car.prototype.accelerate = function () {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed}km/h`);
    };

    Car.prototype.brake = function () {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed}km/h`);
    };

    const EV = function (make, speed, charge) {
      Car.call(this, make, speed);
      this.charge = charge;
    };

    EV.prototype = Object.create(Car.prototype)

    EV.prototype.chargeBattery = function(chargeTo) {
      this.chargeTo = chargeTo
    }

    // solving problem - 3rd
    EV.prototype.accelerate = function () {
      this.speed += 20;
      this.charge--
      console.log(`${this.make} is going at ${this.speed}km/h, with a charge of ${this.charge}`) ;
    }

    const tesla = new EV("Tesla", 120, 23);

    tesla.chargeBattery(90) 
    console.log(tesla) // output : EV {make: "Tesla", speed: 120, charge: 90}
    tesla.brake() // output : Tesla is going at 115 km/h
    tesla.accelerate() // output : Tesla is going at 135 km/h , with a charge of 89
    ```

- `Note of prototype chain ✅` : here important thing to notice that both `Car` & `EV` also has a accelerate() method
    - but here JS will use accelerate() method of Car.prototype , not the prototype of `Object (means Car)` itself <br>
      because in prototype chain accelerate() method of Car.prototype is coming first 
    - so when there're two same name methods or same name properties in a prototype chain <br>
      then the first one which appears in the prototype chain that will be used & same thing for the scope chain 💡💡💡
    - so here child class can overwrite/override a method which is inherited from the parent class 💡💡💡 <br>
      Eg : if we don't create accelerate() method in `EV.prototype` then still this `tesla.accelerate()` will work <br>
      because `tesla` object will inherit the `accelerate()` method of the Car constructor function 💡💡💡
    - & overriding/overwriting the same name methods or same name properties is a definition of polymorphism 💡💡💡

## conclusion

- we learned about how we can have one class inherit from another class using constructor functions <br>
    & also the Object.create() method because without it , prototypal inheritance is impossible 💡💡💡
