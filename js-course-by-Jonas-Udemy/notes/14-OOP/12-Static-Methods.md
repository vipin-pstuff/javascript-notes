# Static Methods

- it's a feature of classes 

## What is static methods in classes

- `Examples to to understand what is static methods in classes ✅` :
    - let's look at the built-in of the constructor function 
    - Eg 1 : `Array.from()` method , means this `from()` method is attached to the Array() constructor function ,<br> 
        - so we can call from() method directly on array like this `[1, 2, 3].from()` so output : we'll get error because <br>
            `from()` method is actually attached to Array() constructor function & not to the `prototype` property <br>
            of the constructor function 💡💡💡
        - that's why all the square bracket notation arrays don't inherit from() method because that method is not <br>
            on their prototype , that method is actually attached to the constructor function itself 💡💡💡
        - & this is like that because so that programmers able to know that it's a method of the constructor function <br>
            & for easier understanding
    - Eg 2 : `Number.parseFloat()` method
        - so here parseFloat() is another static method & it's static on the number constructor
        - means this method can't be used directly on numbers , but only on that `Number()` constructor function

## Examples - of static methods in classes

- `Note ✅` : when we create static methods inside the class
    - then those static methods can't be access by the object of that class because that static method is <br>
        created/defined actually inside the class itself , not inside the it's `prototype` property , <br>
        so that static method will be accessible by that class itself
    - so objects (of that class) can access only those methods which are not static method <br>
        which is called instance methods 💡💡💡

- `1st way` : of creating static methods outside the class
    - whenever we create a static method outside the class then we don't use `static` keyword <br>
        to make method as static method of that class
    - Eg : of creating static methods outside the class
        ```js
        class PersonCl {
            constructor(fullName , birthYear) {
                this.fullName = fullName
                this.birthYear = birthYear
            }

            // here whatever we created the methods are instance methods 
                // because all these methods will be added to the prototype -> property 
                // that's why all the instances/objects can access all these methods 💡💡💡
                calcAge() {
                    console.log(2037 - this.birthYear)
                }

                get age() {
                    return 2037 - this.birthYear
                }

                set fullName (name) {
                    if (name.includes(' ')) this._fullName = name
                    else alert(`${name} is not a full name!`)
                }

                get fullName() {
                    return this._fullName
                }
        }

        const jonas = new PersonC('jonas Davis' , 1996)

        Person.hey = function() {
            console.log('hey there')
            console.log(this)
        }

        Person.hey() 
            /* output : hey there
                    & the class itself will be printed because this -> keyword is pointing to it's current object
            */

        // but if we try to access this hey() function through the object
        jonas.hey() // output : error come
            // because this hey() method is actually inside the Person class , not inside it's prototype
            // that's why all the objects (of Person class) can't access this hey() method 💡💡💡 
        ```

- `2nd way` : of creating static methods inside the class
    - if you want to create static methods inside the class then use `static` keyword 💡💡💡  
    - Eg : of creating static methods inside the class
        ```js
        class PersonCl {
            constructor(fullName , birthYear) {
                this.fullName = fullName
                this.birthYear = birthYear
            }

            calcAge() {
                console.log(2037 - this.birthYear)
            }

            static hey() {
                console.log("hey there")
            }
        }

        const jonas = new PersonC('jonas Davis' , 1996)

        Person.hey() // output : hey there
        ```

- `use case of static methods only inside the class ✅` : 
    - these sometimes are useful to implement some kind-of helper function for a class or for a constructor function
