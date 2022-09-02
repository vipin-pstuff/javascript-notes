# Encapsulation - Protected Properties and Methods

- now implement the data encapsulation & data privacy which is important principle of OOP
- `Data encapsulation ✅` means 
    - to keep some properties & methods private inside the class 
    - so that they're not accessible from outside of the class except inside the class
    - & the rest of the methods & properties (which are not important) are accessible/exposed <br>
        as a public interface which is also called API 💡💡💡
    - so this is important thing to do in anything than a toy application

- `2 big reasons why we need encapsulation & data privacy ✅` : 
    - `1` : it's used to prevent code accessing from outside of a class to accidentally manipulate <br>
        or data inside the class
    - `2` : when we make code accessible/expose only a small interface/API
        - which is consisting only of a few public methods then we can change <br>
            all the other internal methods without any problem
        - because we can be sure that external code doesn't reply on those private methods <br>
            that's why our code will not break when we do internal changes 💡💡💡

- `Note ✅` : in JS , there's no real syntax/support for data privacy & data encapsulation
    - so we'll fake data encapsulation by using a convention i.e `_` underscore sign <br>
        before that property name or a method name 💡💡💡

## Implementing data encapsulation & data privacy

- `STEP 1` : using underscore sign convention to make a property or a method as protected 
    - but not actually as private 💡💡💡
    ```js
    class Account {
        constructor(owner, currency, pin) {
            this.owner = owner 
            this.currency = currency 
            this.pin = pin 
            this._movements = []
                // so we're faking data encapsulation by using a convention i.e underscore sign 
                    // before that property name or a method name 💡💡💡
                // so that no one can accidentally manipulate it 💡💡💡

            this.locale = navigator.language

            console.log(`Thanks for opening an account, ${owner}`)
        }

        deposit(val) {
            this._movements.push(val)
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
    ```
    - but that underscore sign convention doesn't make properties & methods truly private <br>
        because this underscore sign is just a convention. That's why , we called this underscore convention <br>
        as protected property or a protected method 💡💡💡 
    - because we can still access those properties & methods outside the class which has underscore sign convention like this
        ```js
        acc1._movements.push(250)
        acc1._movements.push(-140)
        ```
        - so still the protected data are accessible if we access those Protected data through `_` underscore sign 
        - but this is wrong 
        
    - `STEP 1.1` : if we still wanted to give access of movements array from the outside 
        - then we have to implement a public method 💡💡💡
        ```js
        class Account {
            constructor(owner, currency, pin) {
                this.owner = owner 
                this.currency = currency 
                this.locale = navigator.language
                // Protected Property
                this._pin = pin 
                this._movements = []

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

            // Protected method
            _approveLoan(val) {
                // so this method is only supposed to be internally by the bank
                    // & this method shouldn't be the part of public instances/API
                    
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
        console.log(acc1.getMovements()) // output : we'll still able to access movement
            // but this getMovements() method can't override/set the movements
            // unless we don't use underscore sign convention with movements 
                // means if we use underscore sign convention on that 'movements' property outside the class 
                // then we can override/set the value of it & same with pin -> property & approveLoan() method
            // but using underscore convention on that property is a wrong way to access 💡💡💡
        ```

- in the next lecture , we're implement truly private fields/properties & private methods which will fix this problem 
