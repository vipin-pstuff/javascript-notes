# Computing Usernames

- we'll see the `practical use case of map() & forEach() array methods` <br>
    to compute usernames for each account owner in our application 💡💡💡

- `imp Note 🔥` : 
    - which method return what as a output we must know other wise we'll not able to think to solve that problem 💡💡💡

- `testing code of bankist application` : 
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
                  <div class="movements__value">${mov}</div>
                </div>
            `

            containerMovements.insertAdjacentHTML('afterbegin', html)
        })
    }

    displayMovements(account1.movements)

    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
    ```

- here username will be initial name of full name

## solution - computing the username

- `STEP 1` : inside bankist application code 
    ```js
    // put code from above 
    displayMovements(account1.movements)

    // here w're doing outside of a function , just to see how it works , 
    // later on we'll create a function for this work 💡💡💡
        // so let's say we grab this username
    const user = Steven Thomas Williams' 
    ```
    - now we want to compute this username as `stw` (which are initials of each name)

- `STEP 2` : getting initials of each name of that username 
    ```js
    // put code from above 
    displayMovements(account1.movements)

    const user = 'Steven Thomas Williams' 
    // here we're using split() method to split each word into an array 
        // which is a very common use case in real world 💡💡💡
    const username = user.toLowerCase().split(" ")
    console.log(username) // output : ["steven", "thomas", "williams"]
    ```
    - now we want first letter of each word , so we can loop over each word & then take the first letter in each iteration <br>
        & then add them into a new array & at the end we'll join that array & then we'll get a string 'stw'

- `STEP 3` : looping over that array & taking the first letter & putting it into a new array
    - so we'll use map() array method 
    - `Note` : we can use map() array method on that split() method because split() method return an array ✔️✔️✔️
    ```js
    // put code from above 
    displayMovements(account1.movements)

    const user = 'Steven Thomas Williams' 

    const username = user.toLowerCase().split(" ").map(function(name) {
        // now in each iteration we want to return the first letter 💡💡💡
        return name[0]
    })

    console.log(username) // output : ["s", "t", "w"]
    ```

- `STEP 4` : now joining each of them to make a string 
    ```js
    // put code from above 
    displayMovements(account1.movements)

    const user = 'Steven Thomas Williams' 

    const username = user.toLowerCase().split(" ").map(function(name) {
        return name[0]
    }).join('')

    console.log(username) // output : stw
    ```
    - `STEP 4.1` : now simplify that callback function of map() array method
        ```js
        // put code from above 
        displayMovements(account1.movements)

        const user = 'Steven Thomas Williams' 

        const username = user.toLowerCase().split(" ").map(name => name[0]).join('')

        console.log(username) // output : stw
        ```
        - `Note` : map() array method return a value that's why we get the updated stuff in new array 💡💡💡

- `STEP 5` : now let's create a function for this work
    ```js
    // put code from above 
    displayMovements(account1.movements)

    const createUsernames = function(user) {
        const username = user.toLowerCase().split(" ").map(name => name[0]).join('')
        return username
    }

    console.log(createUsernames("Steven Thomas Williams"))
    ```

- `STEP 6` : getting all the account of each user ✅
    - now let's compute for all the username of all account owners 
        - now think about for this work , should we use forEach() or map() array method <br>
            but we don't want to create a new array in this situation 
        - so we want to do is to modify the object which already exist inside `accounts` array <br>
            i.e `const accounts = [account1, account2, account3, account4];`
        - so we just want to loop over on this `accounts` array & then do something , so we'll use forEach() array method 💡💡💡
        - & instead of receiving only one user, we want to do is to receive all the accounts
    ```js
    const accounts = [account1, account2, account3, account4];
    // put code from above 
    displayMovements(account1.movements)

    const createUsernames = function(accs) {
        const username = user.toLowerCase().split(" ").map(name => name[0]).join('')
        return username
    }

    /* Imp Note ✅ : each function should actually receive the data that it should work with 
        - instead of using a global variable 
            - so we used a global variable inside displayMovements() function i.e account1.movements
        - so here in createUsernames() function , which receives that data & can then work with that data
            - or with any other data that we choose to pass into it 
        - so we don't want to reply on "accounts" global variable that's why we passed it as argument 
            - instead of directly using it inside this function 💡💡💡
    */
    console.log(createUsernames(accounts))
    ```
    - `STEP 6.1` : inside createUsernames() function , using forEach() array method to modify the original array 🔥
        - `Imp Note 🔥` : because we don't want to create a new array, 
        - we just want to modify the original array that we get as an input 💡💡💡
        - so here we'll talk about the side effects , so here `side effects` will be to change <br>
            to mutate the original accounts array 💡💡💡
        ```js
        const accounts = [account1, account2, account3, account4];
        // put code from above 
        displayMovements(account1.movements)

        const createUsernames = function(accs) {
            // here we have a argument name as acc means one current account instead of accs 
                // just for more understandable manner 💡💡💡
            accs.forEach(function(acc) {
                // creating a new property on each of the account object 💡💡💡
                acc.username = acc.owner.toLowerCase().split(" ").map(name => name[0]).join('')
            })
        }

        createUsernames(accounts)
        console.log(accounts)
        /* output : we added a new property i.e username which contain initial username value of each user
                - inside each account which contain by "accounts" array variable
        */
        ```
        - `reason why we're not returning anything from createUsernames() function 🔥`  
            - because again , we're just producing a side effect
            - means we're doing side effect or doing something on that `acc` object 
            - that's why , there's no need to return anything because we're just doing some work <br>
                we're not creating a new value to return 💡💡💡

- `use case of map() & forEach() array methods 🔥` : 
    - `use case of map() array method ✅` 
        - when we want a new array instead of modifying the original array
        - Eg : like we did in `STEP 6.1` at above
            - we loop through each word & get the initial/starting letter of each word
            - & return them all in a brand new array 
    - `use case forEach() array method ✅` 
        - i's great to produce some so called side effects 
        - `side effects` means do some work without returning anything 💡💡💡
        - Eg : like we did in `STEP 6.1` at above
            - we loop through owner of each account & get the initial/starting letter of each word
            - & then we putted each of starting letter of each word of that account name <br>
                inside that new `username` property for each user account  
