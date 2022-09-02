# Chaining Methods of a class

- we saw that we chained array methods one after the other , so we actually implement the same ability <br>
    of chaining methods in the methods of a class
- `how to implement chaining methods of a class`
    - `STEP 1` : so to do chaining method of a class , first we have to return the object itself <br>
        - Note : without returning the object , we can't do chaining 
    - `STEP 2` : & then at the end of that method , chain the another method of a class which we want to chain 💡💡💡

- checking code :
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

    acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000) // output : error
        // because this acc1.deposit(300) is not returning any thing 
        // so we need to call this acc1.deposit(300) on an account , we have to return the object itself 
            // as a result of this acc1.deposit(300) then we can do further chaining on that object itself 💡💡💡
    ```

## Example - of chaining methods of a class

- `STEP 1` : first , return `this` keyword (which is the object itself of that class) from those methods of a class 
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

            return this;  // returning this -> keyword
        }

        withdraw(val) {
            this.deposit(-val) 
            return this; // returning this -> keyword
        }

        requestLoan(val) {
            if (this.#approveLoan(val)) {
                this.deposit(val)
                console.log(`Loan approved`)
                return this;  // returning this -> keyword
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

    // chaining methods of a class
    acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000) 
    console.log(acc1.getMovements()) 
        // output : we'll get an error which contain all our deposit , withdraw , requestLoan  
    ```
