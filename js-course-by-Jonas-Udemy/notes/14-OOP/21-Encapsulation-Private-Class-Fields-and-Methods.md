# Encapsulation - Private Class Fields and Methods

- we're implement truly private fields/properties & private methods by using class fields <br>
    which will fix the problem of protected properties & protected methods 💡💡💡 

- class fields are called fields because in traditional OOP like Java, C++ , properties are usually called fields
    - so JS is moving away from the idea that classes which is just syntactic sugar over constructor functions
    - because through this new class features classes actually start to have abilities <br>
        that we didn't previously have with constructor functions ✔️✔️✔️

## 4 different proposal of a class ✅

- so in class fields proposal , there are actually major 4 different kinds of properties/fields & methods <br>
    but there're total 8 but we'll focus on those 4 💡💡💡
    - `1` : public properties 
    - `2` : private properties 
    - `3` : public methods 
    - `4` : private methods 
    
## Examples - of 4 different proposal of a class

- Eg : of public fields in a class
    - `rules of creating public properties/fields` 
        - `1st rule` : public properties must be created before & outside the constructor() function inside the class
        - `2nd rule` : those each public properties are created without any `let` or `const` 
            - & each of them should ends with semi colon 💡💡💡
    - public properties are accessible inside the class as well as outside the class i.e through the object of that class 💡💡💡
    ```js
    class Account {
        // Public properties or Public instance properties
        locale = navigator.language;
        _movements = [];
            // these public properties are accessible to all the object
            // & these Public properties are not inside the prototype 💡💡💡
                // but these below methods i.e deposit() , withdraw() methods will be 
                    // added to the prototype of that class 💡💡💡
                // but these public properties are only on the instances , not prototype 
                    // that's why , we can access these properties through this -> keyword 💡💡💡

        constructor(owner, currency, pin) {
            this.owner = owner 
            this.currency = currency 
            // Protected Property
            this._pin = pin 

            console.log(`Thanks for opening an account, ${owner}`)
        }

        getMovements() {
            return this._movements
        }

        deposit(val) {
            this._movements.push(val)
        }

        withdraw(val) {
            this.deposit(-val) 
        }

        _approveLoan(val) {
            return true
        }

        requestLoan(val) {
            if (this._approveLoan(val)) {
                this.deposit(val)
                console.log(`Loan approved`)
            }
        }
    } 

    const acc1 = new Account('Jonas', "EUR", 1111)

    acc1.deposit(250)
    acc1.withdraw(140)
    acc1.requestLoan(1000)
    acc1.approveLoan(100)
    console.log(acc1.getMovements())
    ```

- Eg : of private Properties
    - `rules of creating private properties/fields` 
        - `1st rule` : private properties must be created before the constructor() function inside the class
        - `2nd rule` : to make private properties , put `#` sign before that property 
        - `3nd rule` : those each private properties are created without any `let` or `const` 
            - & each of them should ends with semi colon 💡💡💡
    - private properties are only accessible inside the class , we can't access them through object of that class 💡💡💡
    ```js
    class Account {
        // Public properties or Public instance properties
        locale = navigator.language;

        // private properties
            // now we can make properties as private which is actually private 
                // & not accessible outside of the class 💡💡💡
            // but using -> # (hash sign) , we made that property as private  
        #movements = [];

        constructor(owner, currency, pin) {
            this.owner = owner 
            this.currency = currency 
            // Protected Property
            this._pin = pin 

            console.log(`Thanks for opening an account, ${owner}`)
        }

        getMovements() {
            return this.#movements
        }

        deposit(val) {
            this.#movements.push(val) 
        }

        withdraw(val) {
            this.deposit(-val) 
        }

        _approveLoan(val) {
            return true
        }

        requestLoan(val) {
            if (this._approveLoan(val)) {
                this.deposit(val)
                console.log(`Loan approved`)
            }
        }
    } 

    const acc1 = new Account('Jonas', "EUR", 1111)


    acc1.deposit(250)
    acc1.withdraw(140)
    acc1.requestLoan(1000)
    acc1.approveLoan(100)
    console.log(acc1.getMovements())
    console.log(acc1) // output : inside Account object , we can see #movements private property
    
    // but if we try to access that movements private property
    console.log(acc1.#movements) // output : we'll get error
        // but through getMovements() method , we are able to access that movements array private property
    ```
    - Eg 1 : now let's set the `pin` property ✅
        - however , this `pin` property is dependent on the input inside the constructor function
        - but we can't define public or private properties inside the constructor function 
        - so we can define `pin` property without any input outside the constructor function <br>
            & then inside the constructor function we can define it for it's input 💡💡💡
        ```js   
        class Account {
            // Public properties or Public instance properties
            locale = navigator.language;

            // private properties 
            #movements = [];
            #pin; // these private properties are just like Public properties 
                // which we can define within the class , not outside the class 💡💡💡

            constructor(owner, currency, pin) {
                this.owner = owner 
                this.currency = currency 
                this.#pin = pin 

                console.log(`Thanks for opening an account, ${owner}`)
            }

            getMovements() {
                return this.#movements
            }

            deposit(val) {
                this.#movements.push(val) 
            }

            withdraw(val) {
                this.deposit(-val) 
            }

            _approveLoan(val) {
                return true
            }

            requestLoan(val) {
                if (this._approveLoan(val)) {
                    this.deposit(val)
                    console.log(`Loan approved`)
                }
            }
        } 

        const acc1 = new Account('Jonas', "EUR", 1111)


        acc1.deposit(250)
        acc1.withdraw(140)
        acc1.requestLoan(1000)
        acc1.approveLoan(100)
        console.log(acc1.getMovements())
        console.log(acc1) // output : inside Account object , we can see #movements & #pin private properties
        ```
        - those private properties are available on the instances/objects themselves , means not on the prototype 💡💡💡

- Eg : of public & private methods 
    - public & private methods are same in concept & usage just like public & private properties
    - private methods are really useful to hide/abstract the information from accessing to the outside 
    ```js
    class Account {
        // Public properties or Public instance properties
            locale = navigator.language;

        // private properties 
            #movements = [];
            #pin; 

        constructor(owner, currency, pin) {
            this.owner = owner 
            this.currency = currency 
            this.#pin = pin 

            console.log(`Thanks for opening an account, ${owner}`)
        }

        // Public methods
            getMovements() {
                return this.#movements
            }

            deposit(val) {
                this.#movements.push(val) 
            }

            withdraw(val) {
                this.deposit(-val) 
            }

            requestLoan(val) {
                if (this.#approveLoan(val)) {
                    this.deposit(val)
                    console.log(`Loan approved`)
                }
            }

        // private methods 
            #approveLoan(val) {
                return true
            }
    } 

    const acc1 = new Account('Jonas', "EUR", 1111)


    acc1.deposit(250)
    acc1.withdraw(140)
    acc1.requestLoan(1000)
    acc1.approveLoan(100)
    console.log(acc1.getMovements())

    console.log(acc1) // output : inside Account of Jonas owner , we can see all the private properties & methods
        // & these private properties & methods didn't exists in prototype
    ```

- `about 4 other static proposal of those 4 proposal of a class` 
    - static properties & methods , static 
    - besides those 4 different proposal of a class , we have 4 static proposal of a class <br>
        so usually we use static methods as a helper function because these static methods will not be available <br>
        on all the instances/objects means we can't access those static methods through a object of a class <br> 
        but we can access those static methods outside through the class itself 💡💡💡
    - Eg : of static methods of a class
        ```js
        class Account {
            // Public properties or Public instance properties
                locale = navigator.language;

            // private properties 
                #movements = [];
                #pin; 

            constructor(owner, currency, pin) {
                this.owner = owner 
                this.currency = currency 
                this.#pin = pin 

                console.log(`Thanks for opening an account, ${owner}`)
            }

            // Public methods
                getMovements() {
                    return this.#movements
                }

                deposit(val) {
                    this.#movements.push(val) 
                }

                withdraw(val) {
                    this.deposit(-val) 
                }

                requestLoan(val) {
                    if (this.#approveLoan(val)) {
                        this.deposit(val)
                        console.log(`Loan approved`)
                    }
                }

            // private methods 
                #approveLoan(val) {
                    return true
                }

            static helper() {
                console.log("helper")
            }
        } 

        const acc1 = new Account('Jonas', "EUR", 1111)


        acc1.deposit(250)
        acc1.withdraw(140)
        acc1.requestLoan(1000)
        acc1.approveLoan(100)
        console.log(acc1.getMovements())

        console.log(acc1.helper()) // output : helper
        ```
    - but we'll not see about these 4 static proposal of a class because these are less important 💡💡💡
