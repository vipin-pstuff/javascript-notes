# forEach() array method

- we'll use forEach() array method to loop each elements of an array
- `forEach()` array method will call/run the callback function each time for each element of an array 💡💡💡
    - means callback function will run one time for each individual elements of an array

## Examples - of forEach() array method 

- testing code 
    ```js
    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
    ```
    - using bankist application array , here positive value means deposit & negative values means withdrawals
    - we can print by just saying whether the user deposited or withdrew some money

- Eg 1 : of for of loop
    ```js
    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

    for (const movement of movements) {
        if (movement > 0) {
            console.log(`You deposited ${movement}`)
        } else {
            console.log(`You withdrew ${Math.abs(movement)}`)
        }
    }
    /* output : You deposited 200 
                You deposited 450 
                You withdrew 400 
                You deposited 3000 
                You withdrew 650 
                You withdrew 130 
                You deposited 70 
                You deposited 1300
    */
    ```
    - `Math.abs() method` returns the absolute value of a number 
        - means if get output number with negative sign then this method will remove only that negative sign 
        - & return the value without any negative sign 💡💡💡

- Eg 2 : of forEach() array method
    ```js
    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

    movements.forEach(function(movement) {
        if (movement > 0) {
            console.log(`You deposited ${movement}`)
        } else {
            console.log(`You withdrew ${Math.abs(movement)}`)
        }
    })
    // output : same output will come as above
    ```
    - so forEach() array method will call this callback function in each iteration <br>
        & that callback function will receive the current element of the array as an argument
    - `Note working of forEach() array method` : 
        - so for first iteration , forEach() array method will call `0` index with the callback function for `200`
        - then in second iteration , forEach() array method will call `1` index with the callback function for `450`
        - & so on..
    - so we use a callback function to tell another higher order function i.e we tell forEach() array method <br>
        that in each iteration , that callback function print any of the console based on condition <br>
        so we give the instructions to forEach() array method by giving it callback function <br>
        which contains these instructions 💡💡💡

- Eg 3 : getting index number through for of loop & forEach() array method
    ```js
    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

    for (const [i, movement] of movements.entries()) {
        if (movement > 0) {
            console.log(`Movement ${i + 1}: You deposited ${movement}`)
        } else {
            console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`)
        }
    }
    /* output : Movement 1: You deposited 200 
                Movement 2: You deposited 450 
                Movement 3: You withdrew 400 
                Movement 4: You deposited 3000 
                Movement 5: You withdrew 650 
                Movement 6: You withdrew 130 
                Movement 7: You deposited 70 
                Movement 8: You deposited 1300 
    */
    ```
    - but by using forEach() array method , we can easily access index number of each element of an array 💡💡💡
    - Eg 3.1 : using forEach() method to get index number of each element
        ```js
        const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

        // `Note` : in real world , we use shorter names for arguments & parameters of a function 
            // that's why we define "move" for movement , "i" for index & "arr" for array ✔️✔️✔️
        movements.forEach(function(mov, i, arr) {
            if (mov > 0) {
                console.log(`Movement ${i + 1}: You deposited ${mov}`)
            } else {
                console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`)
            }
        })
        ``` 
        - `Note` : always define arguments in sequence of callback function of forEach() method because it's a rule
            - that first argument will be current element of an array <br>
                second argument will be index number of that current element <br>
                third argument will be the current array 
 
- `when should we use forEach() array method & when for of loop ✅` : 
    - `fundamental difference b/w them` : 
        - we can't use `break` & `continue` keyword statement inside forEach() array method <br>
            because forEach() array method will loop through on each element till the last element 💡💡💡
        - so for ending the loop in b/w then use for of loop 
    - & at the end it's a personal preference 
    
- `said by jonas`
    - once we understand exactly how forEach() method works & specially this mechanism of the callback function <br>
        then working with all other array methods will become really easy
    - because most of them follow the exact same principle of the callback function 💡💡💡
