# Constructor Functions and the new Operator

- we can use Constructor function to build an object 
- `about Constructor function` : 
    - a Constructor function is a completely normal function
    - `difference a regular function & a Constructor function ✅` : 
        - we call that Constructor function with the `new` keyword operator 💡💡💡  
        - but normal function always called without any operator 

## Example - Constructor function

- `Note for Constructor function ✅` : 
    - `1` : first letter of that Constructor function name starts with capital letter just like Class name
    - `2` : an arrow function not work as a function constructor because it doesn't have it's own `this` keyword <br>
        so only function declarations & function expression will work

- Eg 1 : of Constructor function
    - `STEP 1` : a Constructor function is created & called through `new` operator
        ```js
        const Person = function(firstName, birthYear) {

        }

        new Person('Jonas', 1991)
        ```
        - `what does here -> new Person('Jonas', 1991)` means 
            - `new` operator call this `Person` function but it also does more than just calling 
            - so `new -> operator does 4 steps ✅` :  
                - `STEP 1` : new {} is created 
                    - means a new `{}` empty object is created 
                - `STEP 2` : function is called , `this = {}`
                    - means that Constructor function is called 
                    - in this function call that `this` keyword will be set to that newly created object
                    - means `this` keyword will be equal to `{}` empty object so in the execution context <br>
                        of that `Person` function , `this` keyword will point that new object `new {}` which was created in STEP 1
                - all these STEPS happening because we're calling the function by using `new` operator
                - `STEP 3` : {} linked to prototype
                    - means now that new object is created & that newly created object is linked to a prototype 
                - `STEP 4` : function automatically return {}
                    - means that Constructor function automatically returns that empty object <br>
                        but the object doesn't needs to be empty (so this is the tricky to get the object with information) <br>
                        means behind the scene , `this` keyword will be returned from inside the constructor function <br>
                        & `this` keyword means that object with information 💡💡💡 
                    - now that the object which was created in the beginning that object automatically returned from the constructor function
    - `STEP 2` : using `this` keyword inside that Constructor function
        ```js
        const Person = function(firstName, birthYear) {
            console.log(this) // output : Person {}
                // here this -> keyword will be empty object because we're calling with new -> operator
                    // which is STEP 1 💡💡💡
        }

        new Person('Jonas', 1991)
        ```
    - `STEP 3` : using `this` keyword to insert/put the information inside that empty object
        ```js
        const Person = function(firstName, birthYear) {
            this.firsName = firstName
            this.birthYear = birthYear
            return this // we don't need to write this because behind the scene , 
                            // this -> keyword will be returned which means a object 💡💡💡
        }

        const jonas = new Person('Jonas', 1991)
        console.log(jonas)
        // output : Person {firstName: "Jonas", birthYear: 1991}
        ```

- Eg 2 : of constructor function 
    ```js
    const Person = function(firstName, birthYear) {
        this.firsName = firstName
        this.birthYear = birthYear
    }

    const jonas = new Person('Jonas', 1991)
    const matilda = new Person('Matilda', 2017)
    const jack = new Person('Jack', 1975)
    console.log(jonas, matilda, jack)
    /* output : Person { firstName: "Jonas", birthYear: 1991 }
                Person { firstName: "Matilda", birthYear: 2017 }
                Person { firstName: "Jack", birthYear: 1975 }
    */
    ```
    - in traditional OOP , JS doesn't have classes , so here kind-of , we can say like <br>
        jonas is a instance of Person constructor function (which is kind-of a class) 

- Eg 3 : checking whether the object is instance of that Constructor function or not
    - `instanceof` is a operator 
        - it's used to check whether that object is a instance of that Constructor function or not
        - & based on that return true or false
    ```js
    const Person = function(firstName, birthYear) {
        // instance properties
        this.firsName = firstName
        this.birthYear = birthYear

        this.calcAge = function() {
            console.log(2037 - this.birthAge)
        }
    }

    const jonas = new Person('Jonas', 1991)
    const matilda = new Person('Matilda', 2017)
    const jack = new Person('Jack', 1975)
    console.log(jonas, matilda, jack)

    const jay = 'Jay'
    console.log(jonas instanceof Person) // output : true
    console.log(jay instanceof Person) // output : false
    ```
    - so all those properties & methods (which are defined inside the Constructor function) will be available <br>
        in those objects/instances
    - `why we must not create any method inside the constructor function ✅` : 
        - never ever create a method inside the Constructor function <br>
            because imagine , we were gonna create a 100 of Person objects using this constructor function <br>
            then each of those objects would carry around that method (which is created inside the Constructor function)
        - which means at the end , we created a 100 copies of that method & create bad impact on performance of our code
        - so to solve this problem we're gonna use prototypes & prototype inheritance 💡💡💡

## Conclusion

- just understand those steps of what `new` keyword operator will do
 