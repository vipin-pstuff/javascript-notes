# Another ES6 classes Example

- we'll use bank account which we used in bankist application

## Example - of Another ES6 classes 

- testing code :
    ```js
    class Account {
        constructor(owner, currency, pin) {
            this.owner = owner 
            this.currency = currency 
            this.pin = pin 
        }
    } 

    const acc1 = new Account('Jonas', "EUR", 1111)
    ```
    - but what about movements array & local account , so we'll use empty array for movements <br>
        & for local account , we'll use `navigator.language`
    
- `STEP 1` : passing an empty array as a argument for movements parameter
    ```js
    class Account {
        constructor(owner, currency, pin, movements) {
            this.owner = owner 
            this.currency = currency 
            this.pin = pin 
            this.movements = movements
        }
    } 

    const acc1 = new Account('Jonas', "EUR", 1111, [])
    console.log(acc1) // output : Account {owner: 'Jonas', currency: 'EUR', pin: 1111, movements: Array(0)}
    ```
    - so here we can see , we got the movement with empty array. However , it doesn't make much sense <br> 
        to pass an empty array into all the new accounts that we want to create <br>
        so we don't need `movements` as parameter & `[]` empty array as argument & can do this 💡💡💡
        ```js
        class Account {
            constructor(owner, currency, pin) {
                this.owner = owner 
                this.currency = currency 
                this.pin = pin 
                this.movements = []
                // we can create move properties on any instance & properties 
                    // which are not dependent/based on any inputs 💡💡💡
                this.locale = navigator.language
            }
        } 

        const acc1 = new Account('Jonas', "EUR", 1111)
        console.log(acc1) 
        // output : Account {owner: 'Jonas', currency: 'EUR', pin: 1111, movements: Array(0), locale: 'en-US'}
        ```
    - `STEP 1.1` : even inside the constructor() function of Account class , we can execute any code we want ✅
        ```js
        class Account {
            constructor(owner, currency, pin) {
                this.owner = owner 
                this.currency = currency 
                this.pin = pin 
                this.movements = []
                this.locale = navigator.language

                // inside the constructor() function , we can execute any code whatever we want 
                console.log(`Thanks for opening an account, ${owner}`)
            }
        } 

        const acc1 = new Account('Jonas', "EUR", 1111)
        console.log(acc1) 
        /* output : Thanks for opening an account, Jonas
               Account {owner: 'Jonas', currency: 'EUR', pin: 1111, movements: Array(0), locale: 'en-US'}
        */
        ```
    - `STEP 1.2` : now what about the deposits & withdrawals means what about the movements
        ```js
        class Account {
            constructor(owner, currency, pin) {
                this.owner = owner 
                this.currency = currency 
                this.pin = pin 
                this.movements = []
                this.locale = navigator.language

                console.log(`Thanks for opening an account, ${owner}`)
            }
        } 

        const acc1 = new Account('Jonas', "EUR", 1111)

        acc1.movements.push(250) // deposit amount
        acc1.movements.push(-140) // withdrawal amount
        console.log(acc1) // output : we'll get deposit & withdrawal in the movements array
        ```
        - but instead of creating property like movements , better to create methods for these kind of actions <br>
            which will avoid bugs in the future , as you application grows & make code more readable & clean 💡💡💡   

    - `STEP 1.3` : creating methods for deposit & withdrawal instead of using movement property
        ```js
        class Account {
            constructor(owner, currency, pin) {
                this.owner = owner 
                this.currency = currency 
                this.pin = pin 
                this.movements = []
                this.locale = navigator.language

                console.log(`Thanks for opening an account, ${owner}`)
            }

            deposit(val) {
                this.movements.push(val)
            }

            withdraw(val) {
                // to access other methods inside a method of a class then use this -> keyword 💡💡💡
                this.deposit(-val) 
            }
        } 

        const acc1 = new Account('Jonas', "EUR", 1111)

        acc1.deposit(250)
        acc1.withdraw(140)

        console.log(acc1) // output : inside Jonas account object , we'll get value of movements i.e [250, -140]
        ```
        - but now we're actually using these public interface i.e deposit() & withdraw() functions , means deposit() & <br>
            withdraw() methods are the public interface of our objects/instances or we can say them as API 💡💡💡 <br>
            means these deposit() & withdraw() methods are publicly accessible by those objects/instances of a class 💡💡💡
        - so this approach is lot easier instead of manually manipulate those `movements` property outside of the class <br>
            & that `withdraw` method abstracts something i.e negative movement 💡💡💡 , so here `acc1.movements.push(-140)` <br>
            we manually set the minus sign but `acc1.withdraw(140)` is more natural way to withdrawal <br>
            & that minus sign something that the user of the object shouldn't be caring about 💡💡💡

- `privacy issue problem in this code` : 
    - still there's nothing stopping someone on our team from interacting <br> 
        with the movements array directly & potentially making mistakes & introducing bugs
    - but `acc1.deposit(250)` & `acc1.withdraw(140)` doesn't making impossible <br>
        to still do this `acc1.movements.push(250)` & `acc1.movements.push(-140)`
    - & same with `pin` means we can access `pin` property from outside the Account class <br>
        but `pin` is important for privacy reason & it shouldn't be accessible from outside the class <br>
        because any one can manipulate/change that pin of that user & same thing for methods 💡💡💡 
- `STEP 2` : let's say we have `requestLoan()` method
    ```js
    class Account {
        constructor(owner, currency, pin) {
            this.owner = owner 
            this.currency = currency 
            this.pin = pin 
            this.movements = []
            this.locale = navigator.language

            console.log(`Thanks for opening an account, ${owner}`)
        }

        deposit(val) {
            this.movements.push(val)
        }

        withdraw(val) {
            this.deposit(-val) 
        }

        approveLoan(val) {
            return true
        }

        requestLoan(val) {
            if (this.approveLoan(val)) {
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

    // Note 🔥 : now , in the public interface , we only want 
        // this requestLoan() method should be accessible outside the Account class 💡💡💡
        // but we don't want to allow the user to access approveLoan() method outside the class
            // so we want that inside the class only , internally requestLoan() method 
                // should be able to use/access approveLoan() method 💡💡💡 
                // because we need data encapsulation & data privacy 💡💡💡
    ```

- so in next lecture , we'll implement data privacy & data encapsulation
