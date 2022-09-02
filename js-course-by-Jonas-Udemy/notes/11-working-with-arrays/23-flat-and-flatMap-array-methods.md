# flat() & flatMap() array methods

- `flat() array method` : 
    - it used to convert nested or sub array or multidimensional array into 1D array
    - it can flat an array only one level deep 💡💡💡
    - it doesn't take callback function as argument but takes a number as argument <br>
        which is used to define how much level of deep we want to go to flat that array into 1D array 💡💡💡

- `flatMap() array method` : 
    - it's a combination of a map & a flat method into just one method which is better for performance  
    - it takes a callback function as argument & then flatten the array 💡💡💡
    - it can go only 1 level deep to flatten the array but if we go further than 1 level deep <br>
        then we need flat() array method 💡💡💡

## Examples - of flat() array method

- Eg 1 : of flat() array method
    ```js
    const arr = [[1, 2, 3], [4, 5, 6], 7, 8]
    console.log(arr.flat()) // output : [1, 2, 3, 4, 5, 6, 7, 8]
    ```

- Eg 2 : of checking flat() array method 
    ```js
    const arrDeep = [[[1, 2], 3] , [4, [5, 6]], 7, 8]
    console.log(arrDeep.flat()) // output : [Array(2), 3, 4, Array(2), 7, 8]
    ```

- Eg 3 : of flat an array which is deeply nested by using flat() array method ✅
    ```js
    const arrDeep = [[[1, 2], 3] , [4, [5, 6]], 7, 8]
    console.log(arrDeep.flat(2)) // output : [1, 2, 3, 4, 5, 6, 7, 8]
    ```

- Eg 4 : `Use case` of flat() array method ✅
    - let's say that the bank itself, wants to calculate the overall balance of all the movements of all the accounts 
        - so how we'll solve this problem 
        - first of all , we have all these movements stored in arrays & these arrays are inside the objects <br>
            in the accounts array i.e `accounts` & put them all into one array
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

    const accountMovements = accounts.map(acc => acc.movements)
    console.log(accountMovements) // output : [Array(8), Array(8), Array(8), Array(5)]

    // flatting an nested array
    const allMovements = accountMovements.flat()
    console.log(allMovements) // output : we'll get 1D array

    // checking over all balance
    cons overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0)
    console.log(overallBalance) // output : 17840
    ```
    - but we can use chaining methods instead of doing all operation individually like this 
        ```JS
        const overallBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0)
        console.log(overallBalance) // output : 17840
        ```
    - using map() array method first & flattening the result is a pretty common operation <br>
        but instead of using map() array first & then flat() array method is a tedious task <br>
        that's why we have flatMap() array method 💡💡💡

## Examples - of flatMap() array method

- Eg 1 : of flatMap() array method
    ```js
    const overallBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0)
    console.log(overallBalance2) // output : 17840
    ```
