# Let's Fix Some Bad Code - Part 2

- here we'll focus on 3 big areas of functional JS 
    - `1` : immutability
    - `2` : side effects & pure functions
    - `3` : data transformations by using pure functions like map() , filter() & reduce() array methods

- for final code of this lecture check 14 lecture - 17 module inside notes-pics folder 

## fixing bad code - part2

- `STEP 1` : now let's start with immutability by using a data structure to make an original array or an object immutable 💡💡💡
    ```js
    const budget = [
        { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
        { value: -45, description: 'Groceries 🥑', user: 'jonas' },
        { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
        { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
        { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
        { value: -20, description: 'Candy 🍭', user: 'matilda' },
        { value: -125, description: 'Toys 🚂', user: 'matilda' },
        { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
    ];

    const spendingLimits = Object.freeze({
        jonas: 1500,
        matilda: 100,
    })
    // checking whether Object.freeze() method work or not 
    spendingLimits.jay = 200
    console.log(spendingLimits) // output : { jonas: 1500, matilda: 100, }
        // here we can see that Object.freeze() method didn't allow any mutations inside spendingLimits object 💡💡💡
      
    const getLimit = user => {
        return spendingLimits?.[user] ?? 0 
    }

    const addExpenses = function (value, description, user) { 
        user = user.toLowerCase();

        if (value <= getLimit(user)) {
            budget.push({ value: -value, description: description, user: user });
        }
    };
    addExpenses(10, 'Pizza 🍕');
    addExpenses(100, 'Going to movies 🍿', 'Matilda');
    addExpenses(200, 'Stuff', 'Jay');
    console.log(budget);

    const checkExpenses = function () {
        for (const entry of budget) {
            if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
        }
    };
    checkExpenses();
      
    console.log(budget);

    const logBigExpenses = function (bigLimit) { 
        let output = '';

        for (const entry of budget) {
            output += entry.value  <= -bigLimit ? `${entry.description.slice(-2)} / ` : ''
        }
        output = output.slice(0, -2); 
        console.log(output);
    };

    logBigExpenses(100)
    ```
    - but if we try to freeze the `budget` object then we'll get an error <br>
        because at the bottom we're doing changes inside this object
    - so Object.freeze() method just freeze only one level deep but it can't deep freeze 💡💡💡

- `STEP 2` : freezing & then mutating the budget object
    ```js
    const budget = Object.freeze([
        { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
        { value: -45, description: 'Groceries 🥑', user: 'jonas' },
        { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
        { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
        { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
        { value: -20, description: 'Candy 🍭', user: 'matilda' },
        { value: -125, description: 'Toys 🚂', user: 'matilda' },
        { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
    ])

    budget[0].value = 10000 // output : we updated the value of the first nested object
    // but we can't do changes in one level deep like this
    budget[9] = "jonas"

    const spendingLimits = Object.freeze({
        jonas: 1500,
        matilda: 100,
    })
      
    const getLimit = user => {
        return spendingLimits?.[user] ?? 0 
    }

    const addExpenses = function (value, description, user) { 
        user = user.toLowerCase();

        if (value <= getLimit(user)) {
            budget.push({ value: -value, description: description, user: user });
        }
    };
    addExpenses(10, 'Pizza 🍕');
    addExpenses(100, 'Going to movies 🍿', 'Matilda');
    addExpenses(200, 'Stuff', 'Jay');
    console.log(budget);

    const checkExpenses = function () {
        for (const entry of budget) {
            if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
        }
    };
    checkExpenses();
      
    console.log(budget);

    const logBigExpenses = function (bigLimit) { 
        let output = '';

        for (const entry of budget) {
            output += entry.value  <= -bigLimit ? `${entry.description.slice(-2)} / ` : ''
        }
        output = output.slice(0, -2); 
        console.log(output);
    };

    logBigExpenses(100)
    ```
    - now inside the `addExpenses` function is modifying the `budget` object which is outside this function <br>
        means the function has a side effect
    - `side effect` : means that something outside of a function is manipulated 
        - or that the function does something other than simply returning a value
        - so a function that has or produces side effects is called `impure function` 💡💡💡
    - so here `addExpenses` is a impure function because it manipulate <br>
        & mutate the `budget` object which is outside of it 💡💡💡

- `STEP 3` : how to fix that 
    - `Best practices ✅` : so first , we should always pass all the data that the function depends on into the function <br>
        - means it doesn't have to reach into the outer scope 
        - & the function shouldn't change any of these values
    ```js
    const budget = Object.freeze([
        { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
        { value: -45, description: 'Groceries 🥑', user: 'jonas' },
        { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
        { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
        { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
        { value: -20, description: 'Candy 🍭', user: 'matilda' },
        { value: -125, description: 'Toys 🚂', user: 'matilda' },
        { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
    ])

    budget[0].value = 10000 
    budget[9] = "jonas"

    const spendingLimits = Object.freeze({
        jonas: 1500,
        matilda: 100,
    })
      
    const getLimit = user => {
        return spendingLimits?.[user] ?? 0 
    }

    // here we passed two parameters 
        // 1 - state : which is the budget object itself
        // 2 - limits : is spending limits
    const addExpenses = function (state , limits , value, description, user = "jonas") { 
        // here we define more then 3 parameters inside the `addExpenses` function <br>
            // but sometimes it's not big problem
        // user = user.toLowerCase(); // here we're mutating the data of user parameter
            // so we need to avoid these data mutations whenever possible 💡💡💡
            // so let's just create a new variable
        const cleanUser = user.toLowerCase()
            // here cleanUser -> is a common terminology which we use 💡💡💡


        if (value <= getLimit(cleanUser)) {
            // budget.push({ value: -value, description: description, user: user });

            // now we need to copy the budget by using rest operator
            return [...state, { value: -value, description: description, user: user }]
            // due to this , we're not mutating the original object 
        }
    };
    const newBudget1 = addExpenses(budget, spendingLimits , 10, 'Pizza 🍕');
    console.log(newBudget1) // output : we'll see that 8th object will be added
        // but what if this condition -> value <= getLimit(cleanUser)
        // get failed like if we pass 10000 instead of 10 then we'll get undefined
            // which is not good
        // so we should return the original state i.e original budget 
            // & due to this , addExpenses() function will always return something 💡💡💡
            // means either returns the original budget or it returns the one with the new expenses added to it 💡💡💡
        // so for this , we'll use ternary operator 

    addExpenses(budget, spendingLimits , 100, 'Going to movies 🍿', 'Matilda');
    addExpenses(budget, spendingLimits , 200, 'Stuff', 'Jay');
    console.log(budget);

    const checkExpenses = function () {
        for (const entry of budget) {
            if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
        }
    };
    checkExpenses();
      
    console.log(budget);

    const logBigExpenses = function (bigLimit) { 
        let output = '';

        for (const entry of budget) {
            output += entry.value  <= -bigLimit ? `${entry.description.slice(-2)} / ` : ''
        }
        output = output.slice(0, -2); 
        console.log(output);
    };

    logBigExpenses(100)
    ```
    
- `STEP 4` : returning the original object from addExpenses() function , even the condition gets false
    ```js
    const budget = Object.freeze([
        { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
        { value: -45, description: 'Groceries 🥑', user: 'jonas' },
        { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
        { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
        { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
        { value: -20, description: 'Candy 🍭', user: 'matilda' },
        { value: -125, description: 'Toys 🚂', user: 'matilda' },
        { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
    ])

    budget[0].value = 10000 
    budget[9] = "jonas"

    const spendingLimits = Object.freeze({
        jonas: 1500,
        matilda: 100,
    })
      
    const getLimit = user => {
        return spendingLimits?.[user] ?? 0 
    }

    const addExpenses = function (state , limits , value, description, user = "jonas") { 
        const cleanUser = user.toLowerCase()

        // if (value <= getLimit(cleanUser)) {
        //     return [...state, { value: -value, description: description, user: user }]
        // }

        return value <= getLimit(cleanUser) ? [...state, { value: -value, description: description, user: user }] : state
    };
    const newBudget1 = addExpenses(budget, spendingLimits , 10, 'Pizza 🍕');
    console.log(newBudget1) 
    // Now the addExpenses() function doesn't do any side effects & it's now a pure function 💡💡💡

    // but now what about here
        // do you think we should still pass budget -> as again parameter
    addExpenses(budget, spendingLimits , 100, 'Going to movies 🍿', 'Matilda');
    addExpenses(budget, spendingLimits , 200, 'Stuff', 'Jay');
    console.log(budget);

    const checkExpenses = function () {
        for (const entry of budget) {
            if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
        }
    };
    checkExpenses();
      
    console.log(budget);

    const logBigExpenses = function (bigLimit) { 
        let output = '';

        for (const entry of budget) {
            output += entry.value  <= -bigLimit ? `${entry.description.slice(-2)} / ` : ''
        }
        output = output.slice(0, -2); 
        console.log(output);
    };

    logBigExpenses(100)
    ```
    - means if we do like this 
        ```js
        const addExpenses = function (state , limits , value, description, user = "jonas") { 
            const cleanUser = user.toLowerCase()

            return value <= getLimit(cleanUser) ? [...state, { value: -value, description: description, user: user }] : state
        };
        const newBudget1 = addExpenses(budget, spendingLimits , 10, 'Pizza 🍕');
        
        // here again we pass the budget object as argument
        const newBudget2 = addExpenses(budget, spendingLimits , 100, 'Going to movies 🍿', 'Matilda');
        addExpenses(budget, spendingLimits , 200, 'Stuff', 'Jay');
        console.log(newBudget1) // output : we'll get the pizza
        console.log(newBudget2) // output : we'll not get the pizza which we added 
            // but we'll get -> Going to movies 🍿
            // because the budget object we passed as argument is the original object 💡💡💡
            // that's why we need to pass previous object i.e newBudget1 as argument 

        console.log(budget);

        const checkExpenses = function () {
            for (const entry of budget) {
                if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
            }
        };
        checkExpenses();
        ```
    - `STEP 4.1` : passing new updated budget object
        ```js
        const addExpenses = function (state , limits , value, description, user = "jonas") { 
            const cleanUser = user.toLowerCase()

            return value <= getLimit(cleanUser) ? [...state, { value: -value, description: description, user: user }] : state
        };
        const newBudget1 = addExpenses(budget, spendingLimits , 10, 'Pizza 🍕');
        
        // here again we pass the new budget object as argument
        const newBudget2 = addExpenses(newBudget1, spendingLimits , 100, 'Going to movies 🍿', 'Matilda');
        console.log(newBudget1) // output : we'll get the pizza
        console.log(newBudget2) // output : we'll get that previous pizza object added 
            // & we'll also get Going to movies 🍿 -> object also

        const newBudget3 = addExpenses(newBudget2, spendingLimits , 200, 'Stuff', 'Jay');

        console.log(budget);

        const checkExpenses = function () {
            for (const entry of budget) {
                if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
            }
        };
        checkExpenses();
        ```
    - now fix the problem 
    - Now in real world , we use composing & the technique i.e currying to create the chain of operations 💡💡💡 <br>
        so in `STEP 4.1` , here we're creating new budget 3 times & we used previous one as new budget <br>
        so we use composing to create one function which will perform all of these operations at once 💡💡💡
    - these techniques are important for using frameworks like React, Redux which reply really <br>
        on such as immutability & pure functions 💡💡💡

- `STEP 5` : let's put our attention on data transformations
    ```js
    const checkExpenses = function () {
      // here checkExpenses function is a impure functions 💡💡💡
          // because it's also change the original object
        /*  for (const entry of budget) {
                if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
            }
        */

        // so use the newBudget3
            // but here we're still mutating the newBudget3 object
            // which means we're violating the newBudget3 object 💡💡💡
        /* for (const entry of newBudget3) {
                if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
            }
        */ 
    };
    checkExpenses();
      
    console.log(budget);

    const logBigExpenses = function (bigLimit) { 
        let output = '';

        for (const entry of budget) {
            output += entry.value  <= -bigLimit ? `${entry.description.slice(-2)} / ` : ''
        }
        output = output.slice(0, -2); 
        console.log(output);
    };

    logBigExpenses(100)
    ```
    - `STEP 5.1` : passing arguments inside the checkExpenses() function to make it as pure function
        ```js
        const getLimit = user => {
            return spendingLimits?.[user] ?? 0 
        }

        const addExpenses = function (state , limits , value, description, user = "jonas") { 
            const cleanUser = user.toLowerCase()

            return value <= getLimit(cleanUser) ? [...state, { value: -value, description: description, user: user }] : state
        };
        // here we passed the spendingLimits as argument but inside the function we never used it 
            // because inside getLimit() function we used the spendingLimits 
            // which means value spendingLimits will be taken from the outer scope
            // which we don't want 💡💡💡

        const newBudget1 = addExpenses(budget, spendingLimits , 10, 'Pizza 🍕');       
        const newBudget2 = addExpenses(newBudget1, spendingLimits , 100, 'Going to movies 🍿', 'Matilda');
        const newBudget3 = addExpenses(newBudget2, spendingLimits , 200, 'Stuff', 'Jay');
        console.log(newBudget1) 
        console.log(newBudget2) 

        const checkExpenses = function () {

        };
        checkExpenses(newBudget3, spendingLimits);
        console.log(budget);

        const logBigExpenses = function (bigLimit) { 
            let output = '';

            for (const entry of budget) {
                output += entry.value  <= -bigLimit ? `${entry.description.slice(-2)} / ` : ''
            }
            output = output.slice(0, -2); 
            console.log(output);
        };

        logBigExpenses(100)
        ```
    - `STEP 5.2` : passing arguments for spending limits inside getLimit() function & working on checkExpenses() function
        ```js
        const getLimit = (limits, user) => { 
            // now this function is no longer dependent on external variables 
            // means it can do it's own work without looking into scope chain 💡💡💡

            return spendingLimits?.[user] ?? 0 
        }

        const addExpenses = function (state , limits , value, description, user = "jonas") { 
            const cleanUser = user.toLowerCase()

            return value <= getLimit(limits , cleanUser) ? [...state, { value: -value, description: description, user: user }] : state
        };

        const newBudget1 = addExpenses(budget, spendingLimits , 10, 'Pizza 🍕');       
        const newBudget2 = addExpenses(newBudget1, spendingLimits , 100, 'Going to movies 🍿', 'Matilda');
        const newBudget3 = addExpenses(newBudget2, spendingLimits , 200, 'Stuff', 'Jay');
        console.log(newBudget1) 
        console.log(newBudget2) 

        const checkExpenses = function (state, limits) {
            // for (const entry of newBudget3) {
            //     if (entry.value < -getLimit(limits , entry.user)) entry.flag = 'limit';
            // }
            // now instead of looping directly over on newBudget3 object
                // let's loop over the state parameter

            // but we want to loop & return the array or object that's why we use map() array method
                // so we're not mutating the state but we're creating new state based on original state 💡💡💡
            return state.map(() => {
                return entry.value < -getLimit(limits , entry.user) ? {...entry, flag: "limit"} : entry
                // if condition is true then return original entry with flag property 
                // but if it's false , then just return original entry itself
            })
        };
        const finalBudget = checkExpenses(newBudget3, spendingLimits);
        console.log(finalBudget);

        const logBigExpenses = function (bigLimit) { 
            let output = '';

            for (const entry of budget) {
                output += entry.value  <= -bigLimit ? `${entry.description.slice(-2)} / ` : ''
            }
            output = output.slice(0, -2); 
            console.log(output);
        };

        logBigExpenses(100)
        ```
        - `Note ✅` : here the important thing is 
            - we transform the checkExpenses() function into a pure function which doesn't mutate anything
            - because inside checkExpenses() function , map() method return a brand new array <br>
                means we gave the original array to this function & we return a brand new array 💡💡💡
            - it's pure function & doesn't manipulate anything original one

- in bankist app , we should always pass all the data that we need for a certain function to work inside that function <br>
    so that , it doesn't depend on any outside data & due that , a function will become lot easier to understand 💡💡💡

- `STEP 6` : refactoring the code of logBigExpenses() function
    ```js
    const logBigExpenses = function (state, bigLimit) { 
        // immutability is not just for objects & arrays but it's also goes for more regular variables 💡💡💡
        // & in this code we're manually looping over budget object
        // let output = '';
        // for (const entry of budget) {
        //     output += entry.value  <= -bigLimit ? `${entry.description.slice(-2)} / ` : ''
        // }
        // output = output.slice(0, -2); 
        // console.log(output);

        // const bigExpenses = state.filter(entry => entry.value <= -bigLimit).map(entry => {
        //     return entry.description.slice(-2)
        // }).join(' / ')
        // OR we can use reduce() array method
        const bigExpenses = state.filter(entry => entry.value <= -bigLimit).reduce((str, cur) => {
            return `${str} / ${cur.description.slice(-2)}`
        }, '')

        console.log(bigExpenses)
    };

    logBigExpenses(finalBudget , 100)
    // here logBigExpenses() function is Impure function
        // because inside of it , we did console.log()
        // which means this function create input & output
    // & any program needs to have some side-effects because otherwise we won't able to know that the program 
        // whether it's running properly or not 
    // so we need some side-effects but in functional programming 
        // we try to push these side-effects as far as the edge
        // so as far to the end of our program as possible 💡💡💡
        // without having them all over the place , polluting our application
    ```

- for things you can add in this mini project i.e creating function for adding the income 
    - or you can also create functions for calculating the total expenses & incomes , the overall budget 
    - how much the expenses are in percentage of the income & etc ...

- & these are just guidelines or suggestions to follow , not really hard rules 
    - because large applications , they're very hard to make 100% functional which is not a big problem ✔️✔️✔️
 
## Extra notes

- impure vs impure functions in JS : 
    - https://www.becomebetterprogrammer.com/javascript-pure-and-impure-functions/
    - https://www.freecodecamp.org/news/pure-function-vs-impure-function/
    - https://jsfunctions.io/pure-versus-impure-functions

- currying & composing function techniques in JS :
    - https://blog.logrocket.com/understanding-javascript-currying/
    - https://www.freecodecamp.org/news/how-to-use-currying-and-composition-in-javascript/
    - https://medium.com/swlh/currying-and-function-composition-in-javascript-356041d8e2b4
    - https://www.javatpoint.com/currying-in-javascript
