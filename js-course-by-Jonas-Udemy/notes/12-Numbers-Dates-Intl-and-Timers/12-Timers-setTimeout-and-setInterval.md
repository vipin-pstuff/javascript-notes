# Timers : setTimeout and setInterval

- `2 kind of timers in JS ✅` 
    - `1` : setTimeout() function : which runs just one time after a defined time
    - `2` : setInternal() function : which keeps running forever in a loop , until we stop it 

- both takes two argument
    - `1` : a callback function (required)
    - `2` : timer in milliseconds  (required)
    - `3` : custom arguments (optional)

## setTimeout() function

- we can use setTimeout() function to execute some code at some point in the future
    - Eg : ordering a pizza , so when we order a pizza then it doesn't arrive immediately , <br>
        so it's take some time & we can simulate that 

- Eg 1 : of setTimeout() function
    ```js
    setTimeout(() => {
        console.log('Here is your Pizza 🍕')
    }, 3000) // 3 * 1000 means 3 seconds
    ```
    - `Note ✅` : we don't call this callback function argument by ourselves
        - we just pass this callback function as first argument to setTimeout() function
        - & setTimeout() function will call the callback function in the future 💡💡💡
    - output : when 3seconds over then setTimeout() function will execute that callback function & we'll get our pizza 💡💡💡

- Eg 2 : of setTimeout() function
    ```js
    setTimeout(() => {
        console.log('Here is your Pizza 🍕')
    }, 3000)

    console.log('Waiting...')

    // output : Waiting...
    //          Here is your Pizza 🍕
    ```
    - `Important Note 🔥` : when JS see this line `setTimeout(() => {console.log('Here is your Pizza 🍕')}, 3000)`
        - then JS will say to this setTimeout() that you keep counting the time in the background <br>
            & register this callback function i.e `() => {console.log('Here is your Pizza 🍕')` for execution <br>
            when time is over/elapsed & then immediately JS will move on to the next line
        - & this mechanism is called Asynchronous JS 

- Eg 3 : how to pass arguments in setTimeout() function ✅
    - so after second argument of setTimeout() function i.e timer , we define our arguments  
    ```js
    setTimeout((ing1, ing2) => {
        console.log(`Here is your Pizza with ${ing1} ${ing2} 🍕`)
    }, 3000 , 'Olives', 'spinach') 
        // Note : here first custom argument is for 1st parameter & same other custom arguments 💡💡💡

    console.log('Waiting...')
    ```

- Eg 4 : how to clear setTimeout() function ✅
    - `clearTimeout()` function used to clear the setTimeout() function 💡💡💡
    - use it based on condition outside the setTimeout() function 💡💡💡 
    ```js
    const ingredients = ['olives', 'spinach']

    const pizzaTimer = setTimeout((ing1, ing2) => {
        console.log(`Here is your Pizza with ${ing1} ${ing2} 🍕`)
    }, 3000 , ...ingredients) 
        // Note ✅ : we didn't use ingredients[0] or ingredients[1] 
            // so we used spread operator & behind the scene , those each element we'll be separated by comma 💡💡💡

    console.log('Waiting...')

    // so if the ingredients includes spinach which is many people don't like then clear the setTimeout()  
    if (ingredients.includes('spinach')) clearTimeout(pizzaTimer)
    ```
    - so we store the result (of setTimeout() function) inside `pizzaTimer` variable & that result is timer itself
    - right now ingredients contain 'spinach' that's why we'll not see that message <br>  
        but if we have ingredients like this `['olives', '']` then we'll get that message
    
- now go back to our application & implement the timer to simulate the approval of a loan 

## Starter code 

```js
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
      '2019-11-18T21:31:17.178Z',
      '2019-12-23T07:42:02.383Z',
      '2020-01-28T09:15:04.904Z',
      '2020-04-01T10:17:24.185Z',
      '2020-05-08T14:11:59.604Z',
      '2020-07-26T17:01:17.194Z', 
      '2020-07-28T23:36:17.929Z', 
      '2020-08-01T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
      '2019-11-01T13:15:33.035Z',
      '2019-11-30T09:48:16.867Z',
      '2019-12-25T06:04:23.907Z',
      '2020-01-25T14:18:46.235Z',
      '2020-02-05T16:33:06.386Z',
      '2020-04-10T14:43:26.374Z',
      '2020-06-25T18:49:59.371Z',
      '2020-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
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

const formatMovementDate = function(date, locale) {
    const calcDaysPassed = (date1, date2) => {
        return Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)))
    }

    const daysPassed = calcDaysPassed(new Date(), date)
    console.log(datePassed)

    if (daysPassed === 0) return 'Today' 
    if (daysPassed === 1) return 'Yesterday'
    if (daysPassed <= 7) return `${daysPassed} days ago`

    return new Intl.DateTimeFormat(locale).format(date)
}

const formatCur = function(value, locale, currency) {
    return new Intl.NumberFormat(locale , { 
        style: 'currency', 
        currency: currency
    }).format(value)
}

const displayMovements = function(acc, sort = false) {
    containerMovements.innerHTML = ""

    const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements

    movs.forEach(function(mov, i) => {
        const type = mov > 0 ? 'deposit' : 'withdrawal'

        const date = new Date(acc.movementsDates[i]) 
        const displayDate = formatMovementDate(date, acc.locale)

        const formattedMov = formatCur(mov, acc.locale, acc.currency)

        const html = `
            <div class="movements__row">
              <div class="movements__date">${displayDate}</div>
              <div class="movements__type movements__type--${formattedMov}</div>
              <div class="movements__value">${mov}€</div>
            </div>
        `

        containerMovements.insertAdjacentHTML('afterbegin', html)
    })
}

const calcDisplayBalance = function(acc) {
    acc.balance = acc.reduce((acc , mov) => acc + mov, 0) 
    labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency)
}

const calcDisplaySummary = function(acc) {
    const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0)
    labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency)

    const out = acc.movements.filter(mov => mov < 0).reduce((acc , mov) => acc + mov, 0)
    labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency)

    const interest = acc.movements.filter(mov => mov > 0).map(deposit => {
        return (deposit * acc.interestRate)/100
      }).filter((int, i, arr) => {
          return int >= 1
      }).reduce((acc, int) => acc + int, 0)

    labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency)
}

const createUsernames = function(accs) {
    accs.forEach(function(acc) {
        acc.username = acc.owner.toLowerCase().split(" ").map(name => name[0]).join('')
    })
}
createUsernames(accounts)

const updateUI = function(acc) {
    // display movements
    displayMovements(acc)
    // display balance
    calcDisplayBalance(acc) 
    // display summary
    calcDisplaySummary(acc)
}

let currentAccount ;

// Fake always logged in
currentAccount = account1 
updateUI(currentAccount)
containerApp.style.opacity = 100

btnLogin.addEventListener('click', e => {
    e.preventDefault() 

    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
    console.log(currentAccount)

    if (currentAccount?.pin === +inputLoginPin.value) {
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`
        containerApp.style.opacity = 100

        // Experiment of internationalization API
        const now = new Date()  
        const options = { 
            hour : 'numeric', 
            minute: 'numeric',
            day: 'numeric', 
            month: 'numeric', 
            year: 'numeric', 
        }
        labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now)

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
            // add transfer date
            currentAccount.movementsDates.push(new Date().toISOString())
            receiverAccount.movementsDates.push(new Date().toISOString())
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
        // Add loan date
        currentAccount.movementsDates.push(new Date().toISOString())
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

## Steps - to implement the timer to simulate/change the approval of a loan

- so in real life , when we request for a loan from a bank then bank takes time to approve the loan <br>
    like some days or some weeks to approve that loan

- `STEP 1` : implementing the timer for the approval of a loan
    ```js
    btnLoan.addEventListener('submit', function(e) => {
        e.preventDefault()

        const amount = +inputLoanAmount.value

        if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
            setTimeout(function() {
                // add movement
                currentAccount.movements.push(amount)
                // Add loan date
                currentAccount.movementsDates.push(new Date().toISOString())
                // update UI
                updateUI(currentAccount)
            }, 2500)
        }

        inputLoanAmount.value = ""
    })
    ```
    - checking output : login as jonas 
        - when we request for a loan like `500` then this loan will be approved after 25seconds
        - & that loan is added in current balance 

## setInterval() function

- what if we want to run a function over & over again like every 5seconds , etc , so we use setInterval() function 💡💡💡

- Eg 1 : using setInterval() function to create a clock
    ```js
    setInterval(function() {
        const now = new Date()
        console.log(now)
    }, 1000)
    // output : after every 1 second , we'll get current time 
    ```
    - so here this callback function argument is executing after every 1 second <br>
        `new Date()` means every time new date is created & printed

- Eg 2 : removing/clearing setInterval() function
    - `clearInterval()` function : use it based on condition inside setInterval() function <br> 
        otherwise you'll not understand the use case of it & if we define clearInterval() without condition <br>
        then it immediately clear the setInterval() & same with setTimeout() function 💡💡💡
    ```js
    const time = 2000
    const timeStuff = setInterval(function() {
        const now = new Date()
        console.log(now)
        --time 

        if (time === 1000) {
            clearInterval(timeStuff) // output : only one time it'll executed & the removed
        }
    }, time)
    ```
    - `Note ✅` : don't use clearInterval() function outside the setInterval() function 
        - because clearInterval() function won't work
 
- `challenge time` : create a real clock which only print hours , minutes & seconds 
    - Ans : clock
        ```js
        const clock = {
          now: new Date(),

          details() {
            console.log(
              `${this.now.getHours()}:${this.now.getMinutes()}:${this.now.getSeconds()}`
            );
          }
        };

        clock.details()
        ```
