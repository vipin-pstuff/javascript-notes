# Implementing Login 

- when we open the application then we can't any anything except login <br>
    & when we the user login through his username & pin , & & press Enter key or `->` arrow <br>
    if these two information is correct then he logged in

- `html code for implementing login` :
    ```html
    <nav>
      <p class="welcome">Log in to get started</p>
      <img src="logo.png" alt="Logo" class="logo" />
      <form class="login">
        <input
          type="text"
          placeholder="user"
          class="login__input login__input--user"
        />
        <!-- In practice, use type="password" -->
        <input
          type="text"
          placeholder="PIN"
          maxlength="4"
          class="login__input login__input--pin"
        />
        <button class="login__btn">&rarr;</button>
      </form>
    </nav>
    ```

- `what we need to do` : 
    - so here inside this `form` element , there's a login button on which we'll attach even listener method
    - then as for the inputs , the username is gonna come from `login__input--user` input <br>
        & pin will come from `login__input--pin` input

- code till yet
    ```js
    const account1 = {
      owner: 'Jonas Schmedtmann',
      movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
      interestRate: 1.2, // %
      pin: 1111,
    };

    const account2 = {
      owner: 'Jessica Davis',
      movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
      interestRate: 1.5,
      pin: 2222,
    };

    const account3 = {
      owner: 'Steven Thomas Williams',
      movements: [200, -200, 340, -300, -20, 50, 400, -460],
      interestRate: 0.7,
      pin: 3333,
    };

    const account4 = {
      owner: 'Sarah Smith',
      movements: [430, 1000, 700, 50, 90],
      interestRate: 1,
      pin: 4444,
    };

    const accounts = [account1, account2, account3, account4];

    // Elements
    const labelWelcome = document.querySelector('.welcome');
    const labelDate = document.querySelector('.date');
    const labelBalance = document.querySelector('.balance__value');
    const labelSumIn = document.querySelector('.summary__value--in');
    const labelSumOut = document.querySelector('.summary__value--out');
    const labelSumInterest = document.querySelector('.summary__value--interest');
    const labelTimer = document.querySelector('.timer');

    const containerApp = document.querySelector('.app');
    const containerMovements = document.querySelector('.movements');

    const btnLogin = document.querySelector('.login__btn');
    const btnTransfer = document.querySelector('.form__btn--transfer');
    const btnLoan = document.querySelector('.form__btn--loan');
    const btnClose = document.querySelector('.form__btn--close');
    const btnSort = document.querySelector('.btn--sort');

    const inputLoginUsername = document.querySelector('.login__input--user');
    const inputLoginPin = document.querySelector('.login__input--pin');
    const inputTransferTo = document.querySelector('.form__input--to');
    const inputTransferAmount = document.querySelector('.form__input--amount');
    const inputLoanAmount = document.querySelector('.form__input--loan-amount');
    const inputCloseUsername = document.querySelector('.form__input--user');
    const inputClosePin = document.querySelector('.form__input--pin');
    
    const currencies = new Map([
      ['USD', 'United States dollar'],
      ['EUR', 'Euro'],
      ['GBP', 'Pound sterling'],
    ]);

    const displayMovements = function(movements) {
        containerMovements.innerHTML = ""

        movements.forEach(function(mov, i) => {
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

    displayMovements(account1.movements)

    const calcDisplayBalance = function(movements) {
        const balance = movements.reduce((acc , mov) => acc + mov, 0)
        labelBalance.textContent = `${balance}€`
    }

    calcDisplayBalance(account1.movements)

    const calcDisplaySummary = function(movements) {
        const incomes = movements.filter(mov => mov > 0).reduce((acc, mov) => {
            return acc + mov
        }, 0)
        labelSumIn.textContent = `${incomes}€`

        const out = movements.filter(mov => mov < 0).reduce((acc , mov) => acc + mov, 0)
        labelSumOut.textContent = `${Math.abs(out)}€`

        const interest = movements.filter(mov => mov > 0).map(deposit => (deposit * 1.2)/100).filter((int, i, arr) => {
            return int >= 1
        }).reduce((acc, int) => acc + int, 0)
        labelSumInterest.textContent = `${interest}€`
    }

    calcDisplaySummary(account1.movements)

    const createUsernames = function(accs) {
        accs.forEach(function(acc) {
            acc.username = acc.owner.toLowerCase().split(" ").map(name => name[0]).join('')
        })
    }
    createUsernames(accounts)
    ```

## Step - implementing login

- `STEP 1` : adding event listener method on that login button 
    - & preventing the default action of submit event of `form` element
    ```js
    // put code after it
    createUsernames(accounts)

    btnLogin.addEventListener('submit', e => {
        // preventDefault() method of submit event (which is inside form element)
            // so in HTML , the default behavior when we click on the submit button is for the page to reload
            // so we need to stop that default behavior of submit event of form element 💡💡💡
            // so this method will stop the form from submitting 💡💡💡
        e.preventDefault() 
    })
    ```
    - `Note default action feature of "form" element` : 
        - whatever input field with submit button inside `form` element  
        - then `form` element give one more feature that by-default it gives <br>
            that when we click on any input & hit `enter` key then the click or submit event will fire/executed <br>
            even without setup for `Enter` key ✔️✔️✔️

- `STEP 2` : before login , we need to find the account from the `accounts` array
    - with the username that the user inputted , so for this we'll use find() method
    ```js
    // put code after it
    createUsernames(accounts)

    btnLogin.addEventListener('click', e => {
        e.preventDefault() 

        accounts.find(acc => acc.owner === inputLoginUsername.value)
    })
    ```
    - now we need to save this `accounts.find(acc => acc.owner === inputLoginUsername.value)` inside a variable <br>
        & that variable should be outside this addEventListener() method 
    - because later on , we need that variable/information about the current account inside other functions <br>
        like when we transfer money then we need to know from which account that money should actually go <br>
        so for this we need current account 💡💡💡
    - `STEP 2.1` : defining information outside the `btnLogin.addEventListener()` for the current account
        ```js
        // put code after it
        createUsernames(accounts)

        let currentAccount ;

        btnLogin.addEventListener('click', e => {
            e.preventDefault() 

            currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
            
            // checking output : when we type "js" inside username input field 
                // then we'll get the complete object of that username 
            console.log(currentAccount)
        })
        ```
    - `STEP 2.2` : checking for correct PIN of that user account 
        ```js
        let currentAccount ;

        btnLogin.addEventListener('click', e => {
            e.preventDefault() 

            currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
            console.log(currentAccount)

            if (currentAccount.pin === Number(inputLoginPin.value)) {
                console.log("LOGIN")
            }
        })
        ```
        - `what happen if find() array method didn't get any element which is true based on a condition`
            - output : if we give `qww` as username which doesn't exist & hit `enter` key 
            - then that find() array method will return `undefined` because no element matches based on that condition i.e <br>
                `accounts.find(acc => acc.username === inputLoginUsername.value)` 💡💡💡
    - `STEP 2.3` : we need to check that both username & pin should be correct , not any one of them
        ```js
        let currentAccount ;

        btnLogin.addEventListener('click', e => {
            e.preventDefault() 

            currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
            console.log(currentAccount)

            if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
                console.log("LOGIN")
            }
        })
        ```
        - but instead of using `&&` to check both stuff , we could use optional chaining i.e `?.`
        ```js
        let currentAccount ;

        btnLogin.addEventListener('click', e => {
            e.preventDefault() 

            currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
            console.log(currentAccount)

            if (currentAccount?.pin === Number(inputLoginPin.value)) {
                console.log("LOGIN")
            }
        })
        ```

- `todo for next thing we need to do` 
    - now we're done with checking username & pin of that user account , let's see the flow chart , what's next 
        - [x] correct credentials : is already done
        - so if credentials is correct then we need to display the UI with welcome message
        - [x] & then after login , we need to display balance & display summary & display movements of the user account

- `STEP 3` : working onto display UI & message & display balance , summary , movements of the user account who is login
    ```js
    let currentAccount ;

    btnLogin.addEventListener('click', e => {
        e.preventDefault() 

        currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
        console.log(currentAccount)

        if (currentAccount?.pin === Number(inputLoginPin.value)) {
            // display UI & welcome message
                // here we need only first word that's why we used split() method
                // STEP : uncomment the opacity : 0 of .app class in style.css file
            labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`
            containerApp.style.opacity = 100
        }
    })
    ```
    - output : when we type `js` as username & `1111` as pin & hit enter then we'll get i.e 
        - `1` : welcome back message with first name of owner of that account
        - `2` : all UI related things
    - output : when we type `jd` as username & `2222` as pin & hit enter then we'll get i.e 
        - `1` : welcome back message with first name of owner of that account
        - `2` : all UI related things
        - but summary , current balance & movements will be hard coded those will not change 

- `STEP 4` : working in summary , current balance & movements which are in hard coded 
    - so we'll not call these functions i.e calcDisplaySummary() , calcDisplayBalance() , <br>
        displayMovements() as globally when our script loads , 
    - we'll call these functions inside login function i.e `btnLogin.addEventListener()` <br>
        because we want to call calcDisplaySummary() , calcDisplayBalance() , displayMovements() when the user logged in
    - `STEP 4.1` : removing those function from globally 
        - & putting/call them from inside login function as soon as we get login data  
        ```js
        // put code before it 
        const displayMovements = function(movements) {
            containerMovements.innerHTML = ""

            movements.forEach(function(mov, i) => {
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

        const calcDisplayBalance = function(movements) {
            const balance = movements.reduce((acc , mov) => acc + mov, 0)
            labelBalance.textContent = `${balance}€`
        }

        const calcDisplaySummary = function(movements) {
            const incomes = movements.filter(mov => mov > 0).reduce((acc, mov) => {
                return acc + mov
            }, 0)
            labelSumIn.textContent = `${incomes}€`

            const out = movements.filter(mov => mov < 0).reduce((acc , mov) => acc + mov, 0)
            labelSumOut.textContent = `${Math.abs(out)}€`

            const interest = movements.filter(mov => mov > 0).map(deposit => {
                return (deposit * 1.2)/100
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

        let currentAccount ;

        btnLogin.addEventListener('click', e => {
            e.preventDefault() 

            currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
            console.log(currentAccount)

            if (currentAccount?.pin === Number(inputLoginPin.value)) {
                labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`
                containerApp.style.opacity = 100

                // display movements
                displayMovements(currentAccount.movements)
                // display balance
                calcDisplayBalance(currentAccount.movements)
                // display summary
                calcDisplaySummary(currentAccount.movements)
            }
        })
        ```
        - output : now when we login from one account to another account 
            - then these information i.e movements , balance , summary will change based on that account 

- `STEP 5` : now after login , then remove the credentials from both input field
    ```js
    // put code before it 
    createUsernames(accounts)

    let currentAccount ;

    btnLogin.addEventListener('click', e => {
        e.preventDefault() 

        currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
        console.log(currentAccount)

        if (currentAccount?.pin === Number(inputLoginPin.value)) {
            labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`
            containerApp.style.opacity = 100

            // clear input fields
                // this will work because assignment operator works from right to left 💡💡💡
            inputLoginUsername.value = inputLoginPin.value = "" 
            // OR we can do this 
                // inputLoginUsername.value = ""
                // inputLoginPin.value = ""

            // display movements
            displayMovements(currentAccount.movements)
            // display balance
            calcDisplayBalance(currentAccount.movements)
            // display summary
            calcDisplaySummary(currentAccount.movements)
        }
    })
    ```
    - output : after login then credentials will be removed from those input fields
        - but inside any input field , when we put cursor then that input field has focus 
    - `STEP 5.1` : removing the focus from those input fields of login form
        - so we can use `blur()` method to remove the focus from those input fields 💡💡💡 
        ```js
        // put code before it 
        createUsernames(accounts)

        let currentAccount ;

        btnLogin.addEventListener('click', e => {
            e.preventDefault() 

            currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
            console.log(currentAccount)

            if (currentAccount?.pin === Number(inputLoginPin.value)) {
                labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`
                containerApp.style.opacity = 100

                // clear input fields
                inputLoginUsername.value = inputLoginPin.value = "" 
                inputLoginPin.blur()

                // display movements
                displayMovements(currentAccount.movements)
                // display balance
                calcDisplayBalance(currentAccount.movements)
                // display summary
                calcDisplaySummary(currentAccount.movements)
            }
        })
        ```
    - now inside calcDisplaySummary() function , we calculated the interest as `1.2` <br>
        but in each account , the interest rate is different
    - so we need to use interest rate dynamically depends on current user

- `STEP 6` : working on calcDisplaySummary() function , to handle different interest rate of each account
    ```js
    // put code before it 
    const calcDisplayBalance = function(movements) {
        const balance = movements.reduce((acc , mov) => acc + mov, 0)
        labelBalance.textContent = `${balance}€`
    }

    // here we need to pass the complete object of that account , not just movements array
        // then we'll able to take the movements which we need to calculate those three statistics
        // & then the interest rate ✔️
    const calcDisplaySummary = function(acc) {
        const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0)
        labelSumIn.textContent = `${incomes}€`

        const out = acc.movements.filter(mov => mov < 0).reduce((acc , mov) => acc + mov, 0)
        labelSumOut.textContent = `${Math.abs(out)}€`

        const interest = acc.movements.filter(mov => mov > 0).map(deposit => {
            // here accessing interestRate property of that particular account object based on login information ✔️
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

    let currentAccount ;

    btnLogin.addEventListener('click', e => {
        e.preventDefault() 

        currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
        console.log(currentAccount)

        if (currentAccount?.pin === Number(inputLoginPin.value)) {
            labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`
            containerApp.style.opacity = 100

            // clear input fields
            inputLoginUsername.value = inputLoginPin.value = "" 
            inputLoginPin.blur()

            // display movements
            displayMovements(currentAccount.movements)
            // display balance
            calcDisplayBalance(currentAccount.movements)
            // display summary
            calcDisplaySummary(currentAccount.movements)
        }
    })
    ```
    - now we'll get an error because we're calling `calcDisplaySummary()` inside login function <br>
        but we're passing argument as movements array of that particular login account <br> 
        so we need to pass that current account as it is
    - `STEP 6.1` : passing that current account as argument inside `calcDisplaySummary()` inside login function
        ```js
        // put above code of STEP 6 before this one 
        btnLogin.addEventListener('click', e => {
            e.preventDefault() 

            currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
            console.log(currentAccount)

            if (currentAccount?.pin === Number(inputLoginPin.value)) {
                labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`
                containerApp.style.opacity = 100

                // clear input fields
                inputLoginUsername.value = inputLoginPin.value = "" 
                inputLoginPin.blur()

                // display movements
                displayMovements(currentAccount.movements)
                // display balance
                calcDisplayBalance(currentAccount.movements)
                // display summary
                calcDisplaySummary(currentAccount)
            }
        })
        ```

## Conclusion

- so made all those data dynamically which can interact with our application , 
    - so depending on which user is actually logging in
    - now when we login in with different credentials which doesn't exist in our database <br>
        then nothing will happen but of course , we could hide the UI & display an error message <br>
        but we want to keep the application simple & don't want mess
    - so important thing which is matter that whatever the thing we want to achieve we did it 

- [x] important thing we need to focus on that how login form is working & that find() array method <br>
    to analyze based that user exist in our database or not 
