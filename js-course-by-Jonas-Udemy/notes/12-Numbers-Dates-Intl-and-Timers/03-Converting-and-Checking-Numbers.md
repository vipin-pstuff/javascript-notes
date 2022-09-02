# Converting and Checking Numbers

- we'll learn how numbers work in JS , how to convert values to number type <br>
    & how to check if certain values are numbers or not 

- Code till yet of bankist application with different DATA like : contains movement dates , currency & locale
    - here we just have two accounts 
    ```js
    const account1 = {
      owner: "Jonas Schmedtmann",
      movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
      interestRate: 1.2, // %
      pin: 1111,

      movementsDates: [
        "2019-11-18T21:31:17.178Z",
        "2019-12-23T07:42:02.383Z",
        "2020-01-28T09:15:04.904Z",
        "2020-04-01T10:17:24.185Z",
        "2020-05-08T14:11:59.604Z",
        "2020-07-26T17:01:17.194Z",
        "2020-07-28T23:36:17.929Z",
        "2020-08-01T10:51:36.790Z",
      ],
      currency: "EUR",
      locale: "pt-PT", // de-DE
    };

    const account2 = {
      owner: "Jessica Davis",
      movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
      interestRate: 1.5,
      pin: 2222,

      movementsDates: [
        "2019-11-01T13:15:33.035Z",
        "2019-11-30T09:48:16.867Z",
        "2019-12-25T06:04:23.907Z",
        "2020-01-25T14:18:46.235Z",
        "2020-02-05T16:33:06.386Z",
        "2020-04-10T14:43:26.374Z",
        "2020-06-25T18:49:59.371Z",
        "2020-07-26T12:01:20.894Z",
      ],
      currency: "USD",
      locale: "en-US",
    };

    const accounts = [account1, account2];

    // Elements
    const labelWelcome = document.querySelector(".welcome");
    const labelDate = document.querySelector(".date");
    const labelBalance = document.querySelector(".balance__value");
    const labelSumIn = document.querySelector(".summary__value--in");
    const labelSumOut = document.querySelector(".summary__value--out");
    const labelSumInterest = document.querySelector(".summary__value--interest");
    const labelTimer = document.querySelector(".timer");

    const containerApp = document.querySelector(".app");
    const containerMovements = document.querySelector(".movements");

    const btnLogin = document.querySelector(".login__btn");
    const btnTransfer = document.querySelector(".form__btn--transfer");
    const btnLoan = document.querySelector(".form__btn--loan");
    const btnClose = document.querySelector(".form__btn--close");
    const btnSort = document.querySelector(".btn--sort");

    const inputLoginUsername = document.querySelector(".login__input--user");
    const inputLoginPin = document.querySelector(".login__input--pin");
    const inputTransferTo = document.querySelector(".form__input--to");
    const inputTransferAmount = document.querySelector(".form__input--amount");
    const inputLoanAmount = document.querySelector(".form__input--loan-amount");
    const inputCloseUsername = document.querySelector(".form__input--user");
    const inputClosePin = document.querySelector(".form__input--pin");
    
    const currencies = new Map([
      ['USD', 'United States dollar'],
      ['EUR', 'Euro'],
      ['GBP', 'Pound sterling'],
    ]);

    const displayMovements = function(movements, sort = false) {
        containerMovements.innerHTML = ""

        const movs = sort ? movements.slice().sort((a, b) => a - b) : movements

        movs.forEach(function(mov, i) => {
            const type = mov > 0 ? 'deposit' : 'withdrawal'

            const html = `
                <div class="movements__row">
                  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
                  <div class="movements__value">${mov}€</div>
                </div>
            `

            containerMovements.insertAdjacentHTML('afterbegin', html)
        })
    }

    const calcDisplayBalance = function(acc) {
            acc.balance = acc.reduce((acc , mov) => acc + mov, 0) 
            labelBalance.textContent = `${acc.balance}€`
    }

    const calcDisplaySummary = function(acc) {
        const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0)
        labelSumIn.textContent = `${incomes}€`

        const out = acc.movements.filter(mov => mov < 0).reduce((acc , mov) => acc + mov, 0)
        labelSumOut.textContent = `${Math.abs(out)}€`

        const interest = acc.movements.filter(mov => mov > 0).map(deposit => {
            return (deposit * acc.interestRate)/100
          }).filter((int, i, arr) => {
              return int >= 1
          }).reduce((acc, int) => acc + int, 0)

        labelSumInterest.textContent = `${interest}€`
    }

    const createUsernames = function(accs) {
        accs.forEach(function(acc) {
            acc.username = acc.owner.toLowerCase().split(" ").map(name => name[0]).join('')
        })
    }
    createUsernames(accounts)

    const updateUI = function(acc) {
        // display movements
        displayMovements(acc.movements)
        // display balance
        calcDisplayBalance(acc) 
        // display summary
        calcDisplaySummary(acc)
    }

    let currentAccount ;

    btnLogin.addEventListener('click', e => {
        e.preventDefault() 

        currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
        console.log(currentAccount)

        if (currentAccount?.pin === Number(inputLoginPin.value)) {
            labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`
            containerApp.style.opacity = 100

            inputLoginUsername.value = inputLoginPin.value = "" 
            inputLoginPin.blur()

            // update UI 
            updateUI(currentAccount) 
        }
    })

    btnTransfer.addEventListener('submit', function(e) {
        e.preventDefault()
        const amount = Number(inputTransferAmount.value) 
        const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value)

        if (amount > 0 && 
            receiverAcc && 
            currentAmount.balance >= amount && 
            receiverAcc?.username !=== currentAccount.username) {
                // doing the transfer
                currentAccount.movements.push(-amount)
                receiverAcc.movements.push(amount)
                // updateUI
                updateUI(currentAccount)
        }
    })

    btnLoan.addEventListener('submit', function(e) => {
        e.preventDefault()

        const amount = Number(inputLoanAmount.value)

        if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
            // add movement
            currentAccount.movements.push(amount)
            // update UI
            updateUI(currentAccount)
        }
        inputLoanAmount.value = ""
    })

    btnClose.addEventListener('submit', function(e) => {
        e.preventDefault()

        if(inputCloseUsername.value === currentAccount.username && 
            Number(inputClosePin.value) === currentAccount.pin) {
            const index = accounts.findIndex(acc => acc.username === currentAccount.username)
            // Delete account
            accounts.splice(index, 1) 
            // Hide UI
            containerApp.style.opacity = 0
        }

        inputCloseUsername.value = inputClosePin.value = ''
    })

    let sorted = false
    btnSort.addEventListener('click', function(e) {
        e.preventDefault()
        displayMovements(currentAccount.movements, !sorted) 
        sorted = !sorted
    })
    ```

## how JS presents numbers 

- in JS , all numbers are presented internally as only floating/decimal point numbers , not number datatype 
    - no matter what if we actually write them like this `console.log(23 === 23.0)` // output : true
    - that's why we have one datatype for numbers 
- & numbers are formatted in a 64 base 2 format means numbers always stored in a binary format
- Now , in that binary format , it's very hard to represent some fractions that're very easy to represent <br>
    in the base 10 system that we are used to 
    - so in base 10 system , numbers are from 0 to 9 but in binary base 2 , numbers are only 0 & 1 ✔️✔️✔️
    - so there are certain numbers that're very difficult to represent in `base 2` like the fraction of 0.1 <br>
        means we'll get very weird results like this 
        ```js
        console.log(0.1 + 0.2) // output : 0.30000000000000004
        ```
        - we want result as 0.3
    - & JS doesn't have better way of representing this number `0.30000000000000004` <br>
        so in base 10 , if we do this `1/10` then we'll get 0.1 but if we do 3/10 then we'll get 3.33333 & 3 until infinity <br>
        so in base 10 , we got infinity fraction 💡💡💡
    - in some cases , JS does some rounding behind the scenes to hide these infinity fraction problem <br>
        but with some operations like this `0.1 + 0.2` can't avoid the infinity fraction 💡💡💡
- many of the languages like PHP , Ruby , etc follow this base 10 format for numbers <br>
    so we shouldn't blame to JS for this weird output because this is the way how JS work with numbers 💡💡💡 <br>
    because eventually , we'll run into a problem like weird output of numbers `0.1 + 0.2 === 0.3` we'll get false <br>
    of course our output is wrong because it's a error but this is how JS works with decimal values 💡💡💡

## working with numbers in JS 

- `3 ways to convert string number into number type ✅` 
    - `first` : parseInt() predefine function (which is called parsing)
    - `second` : Number() constructor 
    - `third` : using `+` unary operator (which is called conversion) 💡💡💡  
    ```js
    console.log(parseInt('23')) // OR console.log(Number.parseInt('23'))
    console.log(Number('23'))
    console.log(+'23') // output : 23 --> will be in number datatype
    ```
    - `console.log(+'23')` means 
        - in JS , `+` unary operator will do type coercion , so it's automatically convert all the operands to numbers 💡💡💡
        - & due to this , code becomes little bit cleaner
    - `parseInt()` function takes second argument i.e regex
        - `regex` is the base of the numeral system means `23` is a base 10 numbers (means numbers from 0 to 9)
        - & most of the time we use base 10 numbers
        - so we should always pass `10` as second argument like this 
            ```js
            console.log(parseInt('23px', 10)) // output : 23
            console.log(parseInt('e23', 10)) // output : NaN
            ```
            - due to this , it'll avoid some bugs in some situations
        - but if we're working with binary then we write `2` like this 
            ```js
            console.log(parseInt('23px', 2)) // output : NaN
            console.log(parseInt('e23', 2)) // output : NaN
            ```

- working on bankist project 
    - go to the project and simply remove Number() constructor & put over it i.e `+` unary operator
        ```js
        // put code before it  
        let currentAccount ;

        btnLogin.addEventListener('click', e => {
            e.preventDefault() 

            currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
            console.log(currentAccount)

            if (currentAccount?.pin === +inputLoginPin.value) {
                labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`
                containerApp.style.opacity = 100

                inputLoginUsername.value = inputLoginPin.value = "" 
                inputLoginPin.blur()

                // update UI 
                updateUI(currentAccount) 
            }
        })

        btnTransfer.addEventListener('submit', function(e) {
            e.preventDefault()
            const amount = +inputTransferAmount.value 
            const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value)

            if (amount > 0 && 
                receiverAcc && 
                currentAmount.balance >= amount && 
                receiverAcc?.username !=== currentAccount.username) {
                    // doing the transfer
                    currentAccount.movements.push(-amount)
                    receiverAcc.movements.push(amount)
                    // updateUI
                    updateUI(currentAccount)
            }
        })

        btnLoan.addEventListener('submit', function(e) => {
            e.preventDefault()

            const amount = +inputLoanAmount.value

            if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
                // add movement
                currentAccount.movements.push(amount)
                // update UI
                updateUI(currentAccount)
            }
            inputLoanAmount.value = ""
        })

        btnClose.addEventListener('submit', function(e) => {
            e.preventDefault()

            if(inputCloseUsername.value === currentAccount.username && +inputClosePin.value === currentAccount.pin) {
                const index = accounts.findIndex(acc => acc.username === currentAccount.username)
                // Delete account
                accounts.splice(index, 1) 
                // Hide UI
                containerApp.style.opacity = 0
            }

            inputCloseUsername.value = inputClosePin.value = ''
        })

        let sorted = false
        btnSort.addEventListener('click', function(e) {
            e.preventDefault()
            displayMovements(currentAccount.movements, !sorted) 
            sorted = !sorted
        })
        ```

- Eg : of `parseInt()` , `parseFloat()` parsing functions
    ```js
    console.log(parseInt('2.5')) // output : 2
    console.log(parseFloat('2.5')) // output : 2.5
    ```
    - `Best Practice ✅` : here we called these functions as globally but it's a traditional way 
        - in modern JS , we call them on `Number` constructor because code become easy to understand also 💡💡💡
        - so always use methods or properties of Number constructor on `Number` constructor same with `Math` constructor

- Eg : of isNaN() means not a number 
    - `isNaN()` function used to check whether that number is a number or not 
        - & if it's a number then return false & if it's not a number then return true 💡💡💡 
    ```js
    console.log(Number.isNaN(20)) // output : false
    console.log(Number.isNaN(+'20X')) // output : true because '+20X' is not a number 
    console.log(Number.isNaN(23 / 0)) // output : false because a number dividing by 0 gives 'Infinity' 💡💡💡
    ```
    - `isNaN()` is not a prefect way to checking whether that number is a number or infinity <br>
        that's why we have `isFinite()` 💡💡💡

- Eg : of isFinite()
    - `isFinite()` function is better way to check whether a number is actually a number or something else <br>
        & whether that number is infinity or not 💡💡💡
    - it's better than `isNaN()` function 
    - if the number is actually a number then return true otherwise false 💡💡💡
    ```js
    console.log(Number.isFinite(20)) // output : true
    console.log(Number.isFinite('20')) // output : true
    console.log(Number.isFinite(+'20X')) // output : false because +'20X' will be NaN
    console.log(Number.isFinite(23 / 0)) // output : false because 23 / 0 will be Infinity
    ```

- Eg : of isInteger()
    - `Number.isInteger()` method used to check that whether that number is integer or not <br>
        - if that number is floating point then return false but if that number is integer then return true
    ```js
    console.log(Number.isInteger(23)) // output : true
    console.log(Number.isInteger(23.0)) // output : true
    console.log(Number.isInteger(23/0)) // output : false
    console.log(Number.isInteger(23.1)) // output : false
    ``` 

## use case of all methods of Number constructor 🔥

- `Number.isFinite()` is a best method to check if any value is a actual number or not 
    - at-least when we're working with floating point numbers 💡💡💡
    - so in real work , most of the time we only use `Number.isFinite()` method <br>
        to check whether value is actually a number or not 
- but most of the time , practically , we don't use isNaN() , <br>
    so use `Number.isNaN()` method when we only want to check whether that number is NaN ✔️✔️✔️
- use `Number.parseInt()` & `Number.praseFloat()` when we want to read a value <br>
    from a string like coming from CSS like this 💡💡💡
    ```js
    // DEMO example 
    console.log(Number.parseInt("2.4rem"))
    console.log(Number.parseFloat("2.5rem"))
    ```
    - these `Number.parseInt()` & `Number.praseFloat()` methods a great to read a value from a string 💡💡💡

## Extra notes 

- `conversion VS coercion` means 
    - both are same because both convert values from one datatype to another datatype
    - `difference` : 
        - `type conversion` are two types implicit & explicit type conversion   
        - but `type coercion` is only implicit (which is done by a particular code)
