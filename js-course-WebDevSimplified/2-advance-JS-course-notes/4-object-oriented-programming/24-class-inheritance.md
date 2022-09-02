## class inheritance

- here we'll see how to do inheritance with classes (which is one of the core concepts of OOPs)

## Example 

```js
class Animal {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`I am ${this.name}`)
    }
}

const animal = new Animal("Brad")
animal.speak()
// output : I am Brad
```

- now let's say we have different animals like dog , cat , etc & individual animal create their own voice 
    - that's where inheritance comes

## Example - of inheritance

- so we use `extends` keyword to inherit that main class 💡💡💡

- so we'll be creating individual classes related to that individual animal

- Eg 1 : of inheritance
    ```js
    class Animal {
        constructor(name) {
            this.name = name
        }

        speak() {
            console.log(`I am ${this.name}`)
        }
    }

    class Dog extends Animal {}

    const dog = new Dog("Teen")
    console.log(dog) // output : Dog {name : "Teen" } & inside of it first prototype will be "Animal" main class
    console.log(dog.name) // output : Teen
    console.log(dog.speak()) // output : I am Teen
    ```
    - `Note : class Dog extends Animal ✅` : 
        - means we want the prototype of that dog to be our Animal
        - means prototype of `Dog` sub class will be `Animal` main class
        - so `Dog` sub class can inherit all the properties & methods of `Animal` main class 💡💡💡

- `Note` : if we define properties inside constructor of `Dog` sub class directly like this ✅
    ```js
    class Animal {
        constructor(name) {
            this.name = name
        }

        speak() {
            console.log(`I am ${this.name}`)
        }
    }

    class Dog extends Animal {
        constructor(name , owner) {
            this.name = name
            this.owner = owner
        }
    }

    const dog = new Dog("Fluffy" , "Teen")
    console.log(dog)
    ```
    - output : we'll get an error i.e 
        - must call super constructor in derived class before accessing 'this' or returning from a derived constructor
    
    - means we need to call the constructor of `Animal` main class before defining properties inside the subclass i.e `Dog` 
        - so we need to use `super()` function inside the constructor function of `Dog` sub class 💡💡💡

- Eg 2 : using `super()` function inside the constructor function of subclass
    ```js
    class Animal {
        constructor(name) {
            this.name = name
        }

        speak() {
            console.log(`I am ${this.name}`)
        }
    }

    class Dog extends Animal {
        constructor(name , owner) {
            super(name) 
            this.owner = owner
        }
    }

    const dog = new Dog("Fluffy" , "Teen")
    console.log(dog) 
    /* output : Dog {name: "Fluffy" , owner: "Teen"} 
                - & inside of it , first prototype contain `Animal` main class
                - & inside first prototype , second prototype contain speak() function
    ```
    - so `super()` function calls the constructor of that main class that we extend
        - means we're extending `Animal` main class 
        - so `super()` function calls that constructor function of main class i.e Animal 💡💡💡
    - & we don't even need to define `this.name = name` inside the constructor function of `Dog` subclass
        - because we passed the `name` property of `Dog` sub class inside `super()` function
        - & by calling `super()` function means we're calling that constructor function of that class (which is extended) 💡💡💡

- now we know that `Dog` will bark , so let's override that `speak()` function 💡💡💡
- Eg 3 : overriding that `speak()` function inside `Dog` subclass
    ```js
    class Animal {
        constructor(name) {
            this.name = name
        }

        speak() {
            console.log(`I am ${this.name}`)
        }
    }

    class Dog extends Animal {
        constructor(name , owner) {
            super(name) 
            this.owner = owner
        }

        speak() {
            console.log("Bark")
        }
    }

    const dog = new Dog("Fluffy" , "Teen")
    console.log(dog.speak()) // output : bark
    console.log(dog)
    ```
    - output : of `console.log(dog)` <br>
        ![output of `console.log(dog)`](../../all-chats-pics-of-lectures/3-notes-pics/2-advance-js-course-notes-pics/24-class-inheritance/lecture-24-0.jpg)
        - so here we can see that we redefine or override the speak() function of `Animal` main class
        - so in prototype chain , speak() method of `Dog` subclass comes first
        - so we're calling the `speak()` method of `Dog` subclass before calling the `speak()` method of `Animal` main class 💡💡💡

    - & we always call the super() function inside the constructor function of subclass 💡💡💡

## challenge time 1

- `Ques` : create a new subclass of Cat & that Cat class only take name property inside the constructor function
    - & redefine the speak() function & log out `meow`
    
- `Ans` : 
    ```js
    class Animal {
      constructor(name) {
        this.name = name;
      }

      speak() {
        console.log(`I am ${this.name}`);
      }
    }

    class Dog extends Animal {
      constructor(name, owner) {
        super(name);
        this.owner = owner;
      }

      speak() {
        console.log("Bark");
      }
    }

    class Cat extends Animal {
      speak() {
        console.log("Meow");
      }
    }

    const dog = new Dog("Fluffy", "Teen");
    const cat = new Cat("Kitty")
    console.log(dog);
    console.log(cat.speak())
    ```
    - `Note` : 
        - we didn't define constructor function inside `Cat` subclass like this
            ```js
            constructor(name) {
                super(name);
            }
            ```
        - because parameter inside constructor function of `Cat` subclass is same as of `Animal` main class 
        - that's why we don't need to add it inside `Cat` subclass 💡💡💡
        - so `Cat` subclass will use the constructor function of `Animal` subclass

## challenge time 2

- `Ques` : create a `Person` class which will contain only `name` property
    - & then create a `Janitor` subclass which inherits or extends the `Person` main class 
    - & that `Janitor` subclass will take second property i.e number of mops 
        - & also contain `clean` function which prints out the janitor cleaned with number of mops that they're using

- `Ans` : 
    ```js
    class Person {
        constructor(name) {
            this.name = name 
        }
    }

    class Janitor extends Person {
        constructor(name , numberOfMops) {
            super(name)
            this.numberOfMops = numberOfMops 
        }

        clean() {
            console.log(`Cleaned with ${this.numberOfMops} mops`)
        }
    }

    const janitor = new Janitor("Jerry" , 5)
    console.log(janitor) // output : janitor {name: "Jerry" , numberOfMops: 5}
    console.log(janitor.clean()) // output : Cleaned with 5 mops
    ```

## said by kyle

- inheritance is widely used inside OOPs , so make sure we have a strong grasp