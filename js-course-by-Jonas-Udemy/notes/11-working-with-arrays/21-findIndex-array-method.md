# findIndex() array method

- `about findIndex() array method` 
    - it is same as find() array method but it returns the index of the found element
    - it takes a callback function argument with same as find() array method

- `use case of findIndex() array method ✅` : 
    - in bankist application , there's a `close account` section <br>
        & `close account` section means just to delete that current logged-in account object from the `accounts` array
    - so to delete/remove an element from an array we used splice() array method <br>
        but for splice() array method , we need the index at which we want to delete <br>
        so we can get that index through findIndex() array method 💡💡💡

## Starter code to implement transfer money

- `html code for implementing close account` :
    ```html
    <!-- OPERATION: CLOSE -->
    <div class="operation operation--close">
      <h2>Close account</h2>
      <form class="form form--close">
        <input type="text" class="form__input form__input--user" />
        <input
          type="password"
          maxlength="6"
          class="form__input form__input--pin"
        />
        <button class="form__btn form__btn--close">&rarr;</button>
        <label class="form__label">Confirm user</label>
        <label class="form__label">Confirm PIN</label>
      </form>
    </div>
    ```

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
    ```

## Steps - of close an account from bankist application 

- `STEP 1` : working on `close account` section & use case of findIndex() array method
    ```js
    // put code before it 
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

    // here we can use either 'click' or 'submit' event but appropriate will be 'submit' 
        // because we're dealing with "form" html element  
    btnClose.addEventListener('submit', function(e) => {
        e.preventDefault()
    })
    ```

- now see the flow chart for `user closes account` 
    - so first thing we need to check if the credentials are correct

- `STEP 2` : checking if both username & pin is correct or not before deleting that account
    ```js
    // put code before it 
    btnClose.addEventListener('submit', function(e) => {
        e.preventDefault()

        if(inputCloseUsername.value === currentAccount.username 
            && Number(inputClosePin.value) === currentAccount.pin) {
            const index = accounts.findIndex(acc => acc.username === currentAccount.username)
            console.log(index) // checking output
        }
    })
    ```
    - checking output : let's say we logged-in as stw & 3333 in our bankist application
        - & then click on `->` button of `close account` section then nothing will happen
        - & even if we write wrong credentials then also nothing happen
        - but when we write `stw` as username & `3333` as password then we'll get index i.e `2` of <br>
            that current logged-in account from `accounts` array

    - `difference b/w findIndex() array method & indexOf() array method ✅` :
        - both returns the index number of the element of an array but 
        - `indexOf()` : we can only search for a value which is inside an array
            - Eg : if the array contains the `23` then it's true & if not then it's false
        - `findIndex()` : we can create a complex condition like this ` acc.username === currentAccount.username` 💡💡💡

- now see the flow chart 
    - so we did -> delete user from data
    - now we need to -> log user out (hide UI)

- `STEP 3` : using splice() array method to delete the current logged-in account
    ```js
    // put code before it 
    btnClose.addEventListener('submit', function(e) => {
        e.preventDefault()

        if(inputCloseUsername.value === currentAccount.username && 
            Number(inputClosePin.value) === currentAccount.pin) {
            const index = accounts.findIndex(acc => acc.username === currentAccount.username)

            // Delete account
                // here we're not saving the results of splice() array method
                    // because splice() array method will mutate the original array itself 💡💡💡
            accounts.splice(index, 1) 

            // Hide UI
            containerApp.style.opacity = 0
        }
    })
    ```
    - checking out : after deleting the current logged-in account & hide the UI <br>
        & then if we reload the page then again that account object will come back because we didn't save/persist the data  
    - `STEP 3.1` : clearing input fields of `close account` section
        ```js
        // put code before it 
        btnClose.addEventListener('submit', function(e) => {
            e.preventDefault()

            if(inputCloseUsername.value === currentAccount.username && 
                Number(inputClosePin.value) === currentAccount.pin) {
                const index = accounts.findIndex(acc => acc.username === currentAccount.username)

                // Delete account
                    // here we're not saving the results of splice() array method
                        // because splice() array method will mutate the original array itself 💡💡💡
                accounts.splice(index, 1) 

                // Hide UI
                containerApp.style.opacity = 0
            }

            inputCloseUsername.value = inputClosePin.value = ''
        })
        ```
    
- `said by jonas ✅`
    - `1` : both find() & findIndex() array methods get access to also the current index & the current entire array <br>
        but in practice , current index & the current array arguments are not useful 💡💡💡
    - `2` : both find() & findIndex() array methods ware added to JS in ES6
        - which means these both array methods will not work in super old browsers
        - so due to this , we'll see how we can make them support in all of those old browsers
