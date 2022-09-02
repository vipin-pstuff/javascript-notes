# Prototypes

- now we'll use prototypes & prototype inheritance & event delegation 
- `how does prototypes & prototype inheritance & event delegation work ✅` :
    - first , each & every function in JS automatically has a property called prototype (which includes Constructor functions)
    - now every object that's created by a certain constructor function will get access to all the methods & properties <br>
        that we define on the constructors prototype property 💡💡💡 <br>

## Example - prototypes & prototype inheritance 

- Eg 1 : of `prototype` property
    ```js
    const Person = function(firstName, birthYear) {
        this.firsName = firstName
        this.birthYear = birthYear

        this.calcAge = function() {
            console.log(2037 - this.birthAge)
        }
    }

    const jonas = new Person('Jonas', 1991)
    const matilda = new Person('Matilda', 2017)
    const jack = new Person('Jack', 1975)

    // Prototypes
    Person.prototype
    ```
    - `Note of prototype property ✅` : 
        - means all the objects (which are created through that constructor function) will inherit to 
            all the methods & properties that're defined on that Constructor `prototype` property i.e `Person.prototype` 💡💡💡
    - `prototype` property 
        - is also a object which can be used for defining methods to that constructor function <br>
            instead of directly defining inside that constructor function
        - because imagine , we were gonna create a 100 of Person objects using this constructor function <br>
            then each of those objects would carry around that method (which is created inside the Constructor function)
        - which means at the end , we created a 100 copies of that method & create bad impact on performance of our code
        - so to solve this problem we're gonna use prototypes & prototype inheritance 💡💡💡
        
    - Eg 1.1 : adding a method on that Constructor function through `prototype` property of that constructor function ✅
        ```js
        const Person = function(firstName, birthYear) {
            this.firsName = firstName
            this.birthYear = birthYear
        }

        const jonas = new Person('Jonas', 1991)
        const matilda = new Person('Matilda', 2017)
        const jack = new Person('Jack', 1975)

        console.log(Person.prototype) // checking prototype property before adding anything else
            // output : we'll get calcAge() function inside that constructor function i.e Person 💡💡💡 

        // Prototypes
        Person.prototype.calcAge = function() {
            console.log(2037 - this.birthAge)
        }
        ```
        - remember each objects/instances which are created by that `Person` constructor function <br>
            will now get access to all the methods of that `prototype` property of that `Person` constructor function 💡💡💡 

    - Eg 1.2 : now accessing calcAge() method through objects (prototypal inheritance example)
        ```js
        const Person = function(firstName, birthYear) {
            this.firsName = firstName
            this.birthYear = birthYear
        }

        const jonas = new Person('Jonas', 1991)
        const matilda = new Person('Matilda', 2017)
        const jack = new Person('Jack', 1975)

        // Prototypes
        console.log(Person.prototype) 

        Person.prototype.calcAge = function() {
            console.log(2037 - this.birthAge)
        }

        // accessing calcAge() method through object
        jonas.calcAge() // output : 46
        console.log(jonas) 
            // output : we'll get object of jonas but inside of it , it doesn't contain that method 💡💡💡
            // we can access that method directly through the object 
                // even though that method it's not really on that object 
                // because of prototypal inheritance 💡💡💡
        ```
        - `how prototypal inheritance works` :
            - `Person.prototype.calcAge = function() { console.log(2037 - this.birthAge)}` means <br>
                now only one copy exist of that function & now any object (which are created through constructor function) <br>
                can reuse that method i.e calcAge()
            - & `this` keyword always set to the object (i.e calling the method) like here jonas 💡💡💡
            - so this is how we implement very basic prototypal inheritance <br>
                means all the objects are somehow connected to that constructor function <br>
                that's why all the objects can have access to that method which is inside <br>
                `prototype` property of the constructor function i.e `Person` 💡💡💡

- Eg 2 : of `__proto__` property of the object (of that constructor function)
    - `why & how does that object able to access method which is defined in prototype property` :
        - because any object always has access to the methods & properties from it's prototype <br>
            & here prototype of jonas is `Person.prototype`
        - & we can actually check whether `Person.prototype` is a prototype of jonas or not <br>
            through `__proto__` property of the object 💡💡💡
    - Eg : of `__proto__` property
        ```js
        console.log(jonas.__proto__) 
            // output : we'll get an object & inside of it , 
                // calcAge() function & the constructor function is defined

        console.log(jonas.__proto__ === Person.prototype) // output : true
            // so the `__proto__` or we can prototype of jonas object is same as 
                // the `prototype` property of the constructor function 💡💡💡 
            // Note ✅ : so Person.prototype is not the prototype of Person 
                // means Person.prototype completed is used as the prototype of all the objects
                    // that're created with the Person constructor function 💡💡💡 
        ```
        - & due to this , if we create a method or a property on that particular object through __proto__ of that object <br>
            then we can access that property or a method through another object even without using `__proto__` property <br>
            on that another object because that property or a method is actually created <br>
            inside the constructor function itself 💡💡💡 like this
            ```js
            const Person = function(firstName, birthYear) {
                this.firsName = firstName
                this.birthYear = birthYear
            }

            const jonas = new User('Jonas' , 1999)
            const teen = new User('Teen' , 2000)

            User.prototype.calcAge = function() {
              console.log(2022 - this.birthYear);
            }

            jonas.__proto__.amount = 120000

            console.log(teen.amount); // accessing amount property directly on another object
                // output : 120000
            ```
    - Eg : of `isPrototype()` method of `prototype` property
        - `isPrototype()` method check whether that constructor function is the prototype of that object or not 💡💡💡
        ```js
        console.log(Person.prototype.isPrototype(jonas)) // output : true 
        console.log(Person.prototype.isPrototype(Person)) // output : false 
            // so Person.prototype is the prototype of jonas object
                // but Person.prototype is not the prototype of Person itself 💡💡💡 
        ```
    - `from where that __proto__ property of object comes ✅` : 
        - we know in STEP 3 of `new` keyword operator links that empty object (of the constructor function) to the prototype
        - so `new` keyword operator sets that `__proto__` property with it's value <br>
            inside `prototype` object/property of that constructor function which is called 💡💡💡
        - Eg : checking inside jonas object that we have `__proto__` property
            ```js
            console.log(jonas)
            /* output : Person { firsName: 'Jonas' 
                                    birthYear: 1991 
                                    __proto__ : Object or we'll see [[Prototype]]: object 
                                }
            */
            // so when we open that __proto__ then 
                // we'll see calcAge() function & the constructor function itself 💡💡💡
            ```

- Eg 3 : defining/creating properties also on `prototype` property ✅
    ```js
    Person.prototype.species = "Homo Sapiens"
    console.log(jonas)
    /* output : Person { firsName: 'Jonas' 
                            birthYear: 1991 
                            __proto__ : Object or we'll see [[Prototype]]: object 
                        }
    */
    // when we open that __proto__ object , then we'll see 'species' property
        // so we access these properties directly through the objects 
            // then each objects (of that constructor function) will 
            // inherit/get access that property from the prototype 💡💡💡
    console.log(jonas.species) // output : Homo Sapiens
    console.log(matilda.species) // output : Homo Sapiens
    ```
    - but that property it's not directly defined inside as their own property <br>
        own property means properties are only the ones that're declared directly on the object itself <br>
        means not the inherited properties
    - Eg 3.1 : of `hasOwnProperty()` method of the object
        - `hasOwnProperty()` method 
            - it's used to check whether that property is the direct property defined inside <br>
                the object or constructor function itself or not 💡💡💡 
            - & based on that return true or false 
            - it takes property name in string form as a argument 
        ```js
        console.log(jonas.hasOwnProperty('firstName')) // output : true
        console.log(jonas.hasOwnProperty('species')) // output : false
            // because jonas object inherit this 'species' property from the prototype property of Person 💡💡💡
        ```
