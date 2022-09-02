# find() array method

- `about find() array method` :
    - it used to find & return the very first one element (from an array) which is true at based on a condition <br>
        if all the elements (of an array) is false based on condition then it returns `undefined`  
    - it returns only the very first one element as a output which is true based on a condition <br>
        & rest of the elements which are also true based on condition will be skipped 💡💡💡
    - it doesn't return a new array as a output 

## Examples - of find() array method

- Eg 1 : of find() array method
    ```js
    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

    const firstWithdrawal = movements.find(mov => mov < 0) 
    console.log(firstWithdrawal) // output : -400
    ```

## Difference b/w filter() & find() array methods ✅

- `1` : filter() array method returns all the elements which are true based on a condition 
    - but find() array method returns only the first one element

- `2` : filter() returns a new array as a output 
    - but find() only returns the element itself & not an array 💡💡💡

## Practical Examples - using find() array method with objects 🔥

- `testing code` 
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
    ```
    - object is a pretty common data structure in JS 

- Eg 1 : using find() array method with object
    - using find() method , we can find an object in the array based on some property of that object 💡💡💡 <br>
        or we can find a unique thing out of many stuff eg : let's say phone number , username , any unique thing 💡💡💡 
    ```js
    const account = accounts.find(acc => acc.owner === 'Jessica Davis')
    /* output : { 
                    owner: 'Jessica Davis', 
                    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30], 
                    interestRate: 1.5, 
                    pin: 2222
                }
    */
    ```
    - so when we want to get one element or only one element can satisfy that condition that's why we use `===` triple equal-to

- we'll use this find() array method for login feature & more feature in further lecture 
