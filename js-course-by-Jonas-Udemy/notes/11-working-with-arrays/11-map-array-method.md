# map() array method

- here we're doing practice of map() array method 

- `testing code` : 
    ```js
    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
    ```

- `what we'll do` : 
    - we'll try to convert these each movements to US dollars & just suppose conversion rate is 1 Euro = $1.1

## Examples - of map() array method

- Eg 1 : of map() array method  
    ```js
    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

    // conversion rate from Euro to USD currency
    const eurToUsd = 1.1

    movements.map(function(mov) {
        return mov * eurToUsd
    })
    ```
    - now as we know that map() array method will return the brand the array as a output , <br>
        so we need to store inside an variable like this
    - Eg 1.1 : creating a variable to store the brand new array as a output of map() array method ✅
        ```js
        const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

        // conversion rate from Euro to USD currency
        const eurToUsd = 1.1

        const movementUSD = movements.map(function(mov) {
            return mov * eurToUsd
        })

        console.log(movements) 
        // output : [200, 450, -400, 3000, -650, -130, 70, 1300] 
            // so here we can see that original array remain same as it is 
        console.log(movementUSD) 
        // output : [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]
        ```
        - here `0` is coming with most of the elements of the brand new array <br>
            because it's a multiplication error which we'll see later on ✔️✔️✔️

- Eg 2 : of map() array method
    ```js
    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

    const eurToUsd = 1.1

    const movementUSD = movements.map(function(mov) {
        return 23
    })

    console.log(movements) // output : [200, 450, -400, 3000, -650, -130, 70, 1300]
    console.log(movementUSD) // output : [23, 23, 23, 23, 23, 23, 23, 23]
    ```
    - so here we're `return 23` & we got `[23, 23, 23, 23, 23, 23, 23, 23]` 
        - because that's what we returned from the callback function
        - so in each iteration of the original array , map() array method just put `23` <br> 
            into the new array at the same position ✔️✔️✔️
    - but this example is useless 

- we can use map() array method in all kinds of different situations

- Eg 3 : of map() array method vs for of loop
    ```js
    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

    const movementsUSDfor = [] 
    for (const mov of movements) {
        movementsUSDfor.push(mov)
    }
    console.log(movementsUSDfor)
    // output : [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]
    ```
    - here difference comes that in map() array method , <br>
        we used a function to solve this same problem of creating a new array <br>
        but in `for of` loop , we just loop through each element of the original array & then manually created a new array
    - so this is completely philosophy/paradigms means map() array method is like functional programming <br> 
        & JS is making itself as like function programming that's why in modern JS , we use map() array method <br>
        instead of that traditional stuff ✔️✔️✔️

- Eg 4 : let's clean the callback function argument of map() array method into arrow function
    ```js
    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

    const eurToUsd = 1.1

    const movementUSD = movements.map(mov => mov * eurToUsd)

    console.log(movementUSD) // output : we'll get same result
    ```
    - so here we have one liner callback function as argument but due to this , readability decrease & difficult to understand 
    - `best Practice for clean code` : so we can use arrow callback function as argument <br>
        for small task inside any array methods like map() 💡💡💡 
    - but it's just a personal preference & situation also whether we need to use anonymous function or arrow function <br> 
        as callback function argument 

- Eg 5 : using map() array method with example 10 lecture - 11 module
    ```js
    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

    const movementDescriptions = movements.map((mov, i, arr) => {
        if (mov > 0) {
            return `Movement ${i + 1}: You deposited ${mov}`
        } else {
            return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`
        }
    })

    console.log(movementDescriptions) 
    // output : we'll get correct output 
        // here we used map() array method 
        // but in example of 10 lecture - 11 module , we used forEach() array method
    ```
    - Eg 5.1 : now let's clean that string message because there's only one thing which is different i.e "withdrew"
        ```js
        const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

        const movementDescriptions = movements.map((mov, i) => {
            return `Movement ${1 + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
        })
        console.log(movementDescriptions) 
        ```
    - `different b/w forEach() array method & map() array method ✅` : 
        - here whatever we did in this example through map() is same as we did with forEach() <br>
            but there's a big different b/w these two approaches
        - `so in forEach() array method` : we individually printed the each element of the original array 
            - so in each of the iterations , we performed some action that was then visible in the console 
            - this is a `side effect` , so forEach() array method creates side effects
        - `but now in map() array method` : we just return each of the strings from the callback function
            - basically they got added into a new array & then we logged that entire array to the console <br>
                & not the elements one by one 
            - so in map() , we didn't create a side effect in each of the iteration we just build a brand new array
        - idea of side effects is important when we talk about functional programming 💡💡💡

- `Note of map() array method ✅` :
    - keep this in mind that why we get access of those two parameters of callback function argument of map() array method
    - we passed the callback function as argument inside map() array method <br>
        but we didn't call that callback function by ourselves <br>
        means map() array method who call that callback function for each elements of the original array 💡💡💡
    - so each time that the map() array method calls the callback function argument <br>
        then it'll pass that current element of original array as well as the current index & that original array 💡💡💡 <br>
        & right now we're just using two parameter i.e current element & current index of that current element
