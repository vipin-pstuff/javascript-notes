# ES6 Classes

- we learned prototypal inheritance with constructor function & then manually setting methods <br>
    on the constructor functions through `prototype` property
- but let's see the ES6 classes , which is better way & more modern syntax <br>
    instead of using constructor function & adding methods on that constructor function via `prototype` property ✔️✔️✔️

## About ES6 classes

- ES6 classes in JS don't work like traditional classes of other languages like Java , C++ <br>
    means in JS , ES6 classes are just synthetic sugar means ES6 classes is not the actual OOP <br>   
    but it's kind-of a feature like OOP which we have in other programming ✔️✔️✔️

- we have two ways to define ES6 classes
    - `1` : class expression 
        ```js
        const PersonCl = class {
            
        }
        ``` 
    - `2` : class declaration 
        ```js
        class PersonCl { 

        }
        ```

- `how to use ES6 classes`
    - `STEP 1` : class declaration
        ```js
        class PersonCl { // here class -> is a keyword
            
        }
        ```
    - `STEP 2` : adding a constructor method & constructor() -> is itself is a method
        - & constructor() method will the method of that class only , not of other classes
        - & whenever we create a new object of that class through new -> keyword 
            - then that constructor() of that class will be called
            - & those four steps will be done by new -> keyword which we already know ✔️✔️💡
        ```js
        class PersonCl {
            constructor(firstName , birthYear) {

            }
        }
        ```
    - `STEP 3` : adding properties inside the constructor() method
        ```js
        class PersonCl {
            constructor(firstName , birthYear) {
                this.firstName = firstName
                this.birthYear = birthYear
            }
        }

        // creating objects
        const jonas = new PersonCl('jonas' , 1996)
        console.log(jonas)
        ```
    - `STEP 4` : to create/add methods then we don't use prototype property
        - we directly create methods just below the constructor() method inside that class itself <br>
            but not inside that constructor() method itself 💡💡💡
        ```js
        class PersonCl {
            constructor(firstName , birthYear) {
                this.firstName = firstName
                this.birthYear = birthYear
            }

            // methods 
            calcAge() {
                console.log(2037 - this.birthYear)
            }
            // Note ✅ : 
                // all these methods that we write inside the class but outside the constructor() method
                // behind the scene , these methods will be on the prototype of the object 
                    // & not on the objects themselves just like prototypal inheritance 💡💡💡
                // even we can look that when print that jonas object then inside of it 
                    // there is __proto__: Object then inside this prototype , we'll see calcAge() function 💡💡💡 
        }

        // creating objects
        const jonas = new PersonCl('jonas' , 1996)
        console.log(jonas)
        console.log(jonas.__proto__ === PersonCl.prototype) // output : true
        ```
        - so here we didn't manually used `prototype` property & this syntax looks nice <br>
            but behind the scene that prototype scenario will come i.e prototype inheritance is happening 
        - like here inside the class but outside the constructor() method , we created the methods <br>
            & that method will automatically be added to the `prototype` property of that class 💡💡💡

- `about classes ✅` : 
    - `1` : classes can't do hoisting even if classes are define as class declaration
    - `2` : just like function , classes are also first class citizens
        - means we can pass/put those classes inside functions & also return them from functions 💡💡💡
        - because behind the scenes , classes are really just a special kind of function 
    - `3` : classes are always executed in strict mode

- `should we use constructor function or classes ✅` : 
    - so constructor function is not deprecated syntax , so it's 100% fine to use 
    - don't use classes syntax directly because it hides the prototype concept , <br>
        so first learn about prototype & prototypal inheritance through the constructor function then use classes
    - but classes syntax are better because we put all the properties & behavior/methods inside one block of code <br>
        but in constructor function , we write properties inside of it & methods are created outside the constructor function <br> 
        through `prototype` property which is a big mess
    - so it's all about personal preference 
