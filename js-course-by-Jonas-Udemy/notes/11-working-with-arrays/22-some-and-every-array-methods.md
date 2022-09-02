# some() & every() array methods

- `about some() & every() array methods ✅`
    - both methods takes callback function as other array methods like map()
    - both works based on a condition & return true or false based on that condition
    - `some()` : 
        - it will return true if at-least any 1 element inside an array is true based on that condition
        - otherwise we'll get false
    - `every()` : 
        - it will return true if all the elements inside an array are true based on that condition
        - but even if at-least one element is true then we'll get false

## why we need some() & every() array methods

- Eg : of includes() array method
    ```js
    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

    console.log(movements.includes(-130))
    // output : true
    ```
    - so include() array method check whether that element exist inside the array or not 
        & if it's exist then return true & if not then return false 

- `reason why we need some() & every() array methods ✅` : 
    - so include() array method is good of testing for equality 
    - but what if we wanted to test for a condition so here comes some() & every() array methods 💡💡💡

## Examples - of some() array methods

- Eg 1 : of some() array methods
    - we want to know that is there any positive movement in that array means any positive number above than 0
    ```js
    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

    const anyDeposits = movements.some(mov => mov > 0)
    console.log(anyDeposits) // output : true
    ```

- Eg : difference b/w includes() & some() array methods ✅
    ```js
    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

    console.log(movements.includes(-130)) // output : true
    // OR we can use some() array method to check whether -130 exist or not 
    console.log(movements.some(mov => mov === -130)) // output : true
    ```
    - but for checking that whether that element exist or not though some() array method based on `===` operator <br>
        doesn't make any sense & we can simply use includes() array method 💡💡💡
    - but apart from `===` operator , if we want to check a condition based on different operators <br>
        then some() array method is perfect 💡💡💡

## Starter code to implement request loan - by using some() array method

- `html code for implementing request loan` :
    ```html
    <!-- OPERATION: LOAN -->
    <div class="operation operation--loan">
      <h2>Request loan</h2>
      <form class="form form--loan">
        <input type="number" class="form__input form__input--loan-amount" />
        <button class="form__btn form__btn--loan">&rarr;</button>
        <label class="form__label form__label--loan">Amount</label>
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
    ```

## Steps - of request loan from bankist application 

- some() array method is useful for this loan feature because our bank has a rule <br>
    which says that it only grants a loan if there at least one deposit with at least 10% of the requested loan amount

- `STEP 1` : creating request loan feature b/w transfer money & close account
    ```js
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

        if (amount > 0) {

        }
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
    ```

- now see the flow chart , user requests loan
    - when a user logged-in through his/her credentials
    - [ ] then that user get a loan if there's any deposit which is greater or equal 10% of the requested amount of loan 

- `STEP 2` : working on condition for request loan & update the UI
    ```js
    // put code from STEP 1 before it 
    btnLoan.addEventListener('submit', function(e) => {
        e.preventDefault()

        const amount = Number(inputLoanAmount.value)

        // (mov >= amount)/10 or mov >= amount * 0.1 --> both are same
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
    ```
    - checking output : let's say we login as jonas 
        - & then we request the loan for `50000` & then click on `->` button
        - then inside left section , that request loan will be added as loan like this 

## Examples - of every() array methods

- Eg 1 : of every() array methods
    ```js
    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

    console.log(movements.every(mov => mov > 0)) // output : false
    ```

- Eg 2 : we have one account which has all the positive movements i.e account4
    ```js
    const account4 = {
      owner: 'Sarah Smith',
      movements: [430, 1000, 700, 50, 90],
      interestRate: 1,
      pin: 4444,
    };

    console.log(account4..movements.every(mov => mov > 0)) // output : true
    ```

- Eg 3 : passing callback function as argument inside every() array method ✅
    ```js
    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

    const deposit = mov => mov > 0
    console.log(movements.some(deposit))
    console.log(movements.every(deposit))
    console.log(movements.filter(deposit))
    ```
    - so here we can use a callback function as argument to reuse the function <br>
        which is which is best practice of DRY principle 💡💡💡
 