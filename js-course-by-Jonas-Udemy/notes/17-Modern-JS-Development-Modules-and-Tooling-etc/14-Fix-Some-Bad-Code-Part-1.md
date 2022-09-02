# Let's Fix Some Bad Code - Part 1

- inside index.html file 
    - link the clean.js file 
    ```html
    <head>
        <script defer src="clean.js"></script>
    </head>
    ```
    - & we'll run the code with live server instead of parcel , because in our code there's no code to bundle 

- now let's fix the code of clean.js file & it contains very simple budget application
    ```js
    var budget = [
        { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
        { value: -45, description: 'Groceries 🥑', user: 'jonas' },
        { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
        { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
        { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
        { value: -20, description: 'Candy 🍭', user: 'matilda' },
        { value: -125, description: 'Toys 🚂', user: 'matilda' },
        { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
    ];
      
    // this object contain spending limits
        // means jonas can only spend 1500 euros or dollar or whatever it is
        // & same with matilda
    var limits = {
        jonas: 1500,
        matilda: 100,
    };
      
    var add = function (value, description, user) {
        if (!user) user = 'jonas';
        user = user.toLowerCase();

        var lim;
        if (limits[user]) {
            lim = limits[user];
        } else {
            lim = 0;
        }

        if (value <= lim) {
            budget.push({ value: -value, description: description, user: user });
        }
    };
    add(10, 'Pizza 🍕');
    add(100, 'Going to movies 🍿', 'Matilda');
    add(200, 'Stuff', 'Jay');
    console.log(budget);
      
    // check function will check the budget
        // & see if any of the expenses are actually above the limit i.e defined inside limits object 
    var check = function () {
        for (var el of budget) {
            var lim;
            if (limits[el.user]) {
            lim = limits[el.user];
            } else {
            lim = 0;
            }

            if (el.value < -lim) {
            el.flag = 'limit';
            }
        }
    };
    check();
      
    console.log(budget);
      
    // bigExpenses will print the big expenses
    var bigExpenses = function (limit) {
        var output = '';
        for (var el of budget) {
            if (el.value <= -limit) {
            output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
            }
        }
        output = output.slice(0, -2); // Remove last '/ '
        console.log(output);
    };
    ```

## refactoring the code to make clean 

- `STEP 1` : remove the var & use const or let keywords
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
      
    const limits = {
        jonas: 1500,
        matilda: 100,
    };
      
    const add = function (value, description, user) {
        if (!user) user = 'jonas';
        user = user.toLowerCase();

        let lim;
        if (limits[user]) {
            lim = limits[user];
        } else {
            lim = 0;
        }

        if (value <= lim) {
            budget.push({ value: -value, description: description, user: user });
        }
    };
    add(10, 'Pizza 🍕');
    add(100, 'Going to movies 🍿', 'Matilda');
    add(200, 'Stuff', 'Jay');
    console.log(budget);

    const check = function () {
        for (const el of budget) {
            let lim;
            
            if (limits[el.user]) {
                lim = limits[el.user];
            } else {
                lim = 0;
            }

            if (el.value < -lim) {
                el.flag = 'limit';
            }
        }
    };
    check();
      
    console.log(budget);
      
    // bigExpenses will print the big expenses
    const bigExpenses = function (limit) {
        let output = '';
        for (const el of budget) {
            if (el.value <= -limit) {
                output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
            }
        }
        output = output.slice(0, -2); // Remove last '/ '
        console.log(output);
    };
    ```

- `STEP 2` : that limits object name is not meaningful , so rename it as spendingLimits
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
      
    const spendingLimits = {
        jonas: 1500,
        matilda: 100,
    };
      
    const add = function (value, description, user) { // no need to change these parameters
        if (!user) user = 'jonas'; // if user parameter is undefined then give the default value 
            // which is default argument
            // so we know that whenever possible use the native feature of the language 💡💡💡

        user = user.toLowerCase();

        let lim;
        if (spendingLimits[user]) {
            lim = spendingLimits[user];
        } else {
            lim = 0;
        }

        if (value <= lim) {
            budget.push({ value: -value, description: description, user: user });
        }
    };
    add(10, 'Pizza 🍕');
    add(100, 'Going to movies 🍿', 'Matilda');
    add(200, 'Stuff', 'Jay');
    console.log(budget);

    const check = function () {
        for (const el of budget) {
            let lim;
            
            if (spendingLimits[el.user]) {
                lim = spendingLimits[el.user];
            } else {
                lim = 0;
            }

            if (el.value < -lim) {
                el.flag = 'limit';
            }
        }
    };
    check();
      
    console.log(budget);
      
    const bigExpenses = function (limit) {
        let output = '';
        for (const el of budget) {
            if (el.value <= -limit) {
                output += el.description.slice(-2) + ' / '; 
            }
        }
        output = output.slice(0, -2); 
        console.log(output);
    };
    ```

- `STEP 3` : putting the default argument of user parameter of add() function
    ```js
    const add = function (value, description, user = "jonas") { 
        user = user.toLowerCase();

        // rename this lim variable into limit 
            // because lim is not descriptive variable name & not readable to understand
        let lim; // now let's fix this lines of code 
            // because it looks like complete beginner
            // so let's use ternary/conditional operator 💡💡💡

        if (spendingLimits[user]) {
            lim = spendingLimits[user];
        } else {
            lim = 0;
        }

        if (value <= lim) {
            budget.push({ value: -value, description: description, user: user });
        }
    };
    ```
    - `STEP 3.1` : using ternary operator instead of if else statement
        ```js
        const add = function (value, description, user = "jonas") { 
            user = user.toLowerCase();

            const limit = spendingLimits[user] ? lim = spendingLimits[user] : 0

            if (value <= limit) {
                budget.push({ value: -value, description: description, user: user });
            }
        };
        ```
        - but instead of using ternary operator , we could make that line of code even more clever <br>
            by using optional chaining & nullish coalescing operator
    - `STEP 3.2` : using optional chaining & nullish coalescing operator to make code even better
        - but don't make code too clever which you can't understand
        ```js
        const add = function (value, description, user = "jonas") { 
            user = user.toLowerCase();

            const limit = spendingLimits?.[user] ?? 0 

            if (value <= limit) {
                budget.push({ value: -value, description: description, user: user });
            }
        };
        ```

- `STEP 4` : working on check function
    ```js
    // rename the add() function into addExpenses() function
    const addExpenses = function (value, description, user) { 
        user = user.toLowerCase();

        const limit = spendingLimits?.[user] ?? 0 

        if (value <= limit) {
            budget.push({ value: -value, description: description, user: user });
        }
    };
    addExpenses(10, 'Pizza 🍕');
    addExpenses(100, 'Going to movies 🍿', 'Matilda');
    addExpenses(200, 'Stuff', 'Jay');
    console.log(budget);

    // rename the function name
    const checkExpenses = function () {

        // rename from el into entry
        for (const entry of budget) {
            // let lim;

            // if (spendingLimits[entry.user]) {
            //     lim = spendingLimits[entry.user];
            // } else {
            //     lim = 0;
            // }

            const limit = spendingLimits?.[entry.user] ?? 0 

            if (entry.value < -limit) {
                entry.flag = 'limit';
            }
        }
    };
    checkExpenses();
    ```
    - but here we can see that we're using the same code again & again <br>
        so create a function & follow the DRY principle
    - `STEP 4.1` : refactoring the code & creating a function to get the limit of expenses of people
        ```js
        const getLimit = user => {
            return spendingLimits?.[user] ?? 0 
        }

        const addExpenses = function (value, description, user) { 
            user = user.toLowerCase();

            // const limit = getLimit(user)

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
                // const limit = spendingLimits?.[entry.user] ?? 0 

                if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
            }
        };
        checkExpenses();
        ```
        - output : when we open the array & check the 7th object 
            - then we'll see flat is set as limit & user is jonas & value is -1800 which is correct

- `STEP 5` : renaming bigExpenses function
    ```js
    // rename the bigExpenses into logBigExpenses
    const logBigExpenses = function (bigLimit) { // rename the limit parameter as bigLimit 
        let output = '';

        // rename the el -> variable into entry
        for (const entry of budget) {
            output += entry.value  <= -bigLimit ? `${entry.description.slice(-2)} / ` : ''

            // if (entry.value <= -bigLimit) {
            //     output += `${entry.description.slice(-2)} / `;
            //     // here if we slice as -1 then we'll get weird ? -> question mark symbol 
            // }
        }
        output = output.slice(0, -2); 
        console.log(output);
    };
    
    logBigExpenses(100) // output : 📱 / 🚂 / 💻 / 🍿
    ```
