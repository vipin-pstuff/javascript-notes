# Simple array methods 

- Starter Code
    ```js
    // BANKIST APP

    // Data
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

    // LECTURES

    const currencies = new Map([
      ['USD', 'United States dollar'],
      ['EUR', 'Euro'],
      ['GBP', 'Pound sterling'],
    ]);

    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
    ```

- `what is array method` :
    - `method` : means methods are simply functions that we can call on objects means they're functions attached to objects
    - so if we have array built-in methods , that means that arrays themselves are also objects 💡💡💡
    - then later on , we'll learn why arrays have access to these methods when we see prototypal inheritance 💡💡💡

## built-in array methods 

- in string & array , when we go from left to right then index will start from `0` <br>
  & when we go from right to left then index will start from `1` 💡💡💡

- Eg 1 : `slice()` array method
  - it's same method like slice() method of string but little bit different in terms for parameters that we pass
  - `slice()` method : 
    - we can extract part/slice of any array but without changing the original array 💡💡💡
    - it takes two parameters 
        - first : starting index
        - second : ending index
    - it returns a new array as a output 💡💡💡
    - `Note for only when we define positive ending index as second argument of slice() array method ✅` : 
      - when we define second argument as positive ending index then slice() method will start copying/slicing/part <br>
        from start to end index of an array but it doesn't include element of ending index 💡💡💡 
    ```js
    let arr = ['a', 'b', 'c', 'd', 'e']

    console.log(arr.slice(2)) 
    // output : ['c', 'd', 'e']
    ```
    - here we just passed the starting index in positive , so index starts from left to right 💡💡💡 <br>
      `Note for slice() array method` : if we define starting index in positive index as first argument <br>
      then slice() array method will give a copy/slice/part from left to right 

    - Eg 1.1 : of slice() method with start & end index as arguments 
      ```js
      let arr = ['a', 'b', 'c', 'd', 'e']

      console.log(arr.slice(2, 4)) // output : ["c", "d"]
      ```
      - here ending index didn't included inside the new array output 
      - & length of that new array output will be `2 - 4 = 2` because we passed `2` as starting index as first argument <br>
        & `4` as ending index as second argument 💡💡💡

    - Eg 1.2 : of slice() array method with negative starting index as first argument  
      ```js
      let arr = ['a', 'b', 'c', 'd', 'e']

      console.log(arr.slice(-2)) // output : ['d', 'e']
      ```
      - `Note of slice() array method with negative starting index & ending index) arguments ✅` : 
        - here `console.log(arr.slice(-2))` we define negative starting index as first argument 
        - `STEP 1` : firstly , slice() method will go from right to left 
        - `STEP 2` : then it'll start copying/slicing right to left , so as we know from right to left , length start from `1` 
        - `STEP 3` : so now it'll start copying/slicing from 2 index element from right side , so we'll get ['d', 'e']

    - Eg 1.3 : of slice() array method to get last element of an array ✅
      ```js
      let arr = ['a', 'b', 'c', 'd', 'e']

      console.log(arr.slice(-1)) // output : ['e']
      ```
      - so this is good trick to get the last element of an array by using `-1` in negative starting index as first argument     

    - Eg 1.4 : of slice() array method with positive starting & negative ending index as arguments ✅
      ```js
      let arr = ['a', 'b', 'c', 'd', 'e']

      console.log(arr.slice(1, -2)) // output : ['b', 'c']
      ```
      - `Note only when we defining negative ending index as second argument of slice() array method ✅` : 
        - when we define negative ending index as second argument of slice() array method <br>
          like this `arr.slice(1, -2)` then don't be confuse , 
        - just consider `-2` as like we're skipping two elements from last of an array 💡💡💡 
        - & due to this conclusion , we don't even need to think about that slice() array method <br>
          also skip last method in case of defining negative ending index as second argument 

    - Eg 1.5 : using slice() array method to create a shallow copy of any original array ✅
      ```js
      let arr = ['a', 'b', 'c', 'd', 'e']
      console.log(arr.slice()) // output : ['a', 'b', 'c', 'd', 'e']
      ```
      - when we don't define any arguments of slice() array method then we'll get the shallow copy of any original array  
      - in previous lecture , we use the spread operator to create shallow copy of any original array like this 
        ```js
        console.log([...arr]) // output : ['a', 'b', 'c', 'd', 'e']
        ```
      - so we're getting exact same result
      - `should we use the spread operator or the slice() array method to create a shallow copy ✅` : 
        - that's totally up to you , it's just personal preference
        - the only time we really need to use the slice() array method when we want to chain <br>
          multiple array methods together means calling one method after the other methods 💡💡💡
      
- Eg 2 : of `splice()` array method
  - it's same like slice() array method but difference is it actually change/mutate the original array 💡💡💡
  - it is used to extract part/slice of any array 💡💡💡
  - it takes two parameters 
    - first : starting index number
    - second : ending index number is like how many number of elements we want to delete 💡💡💡 
  - it returns a new array as a output 💡💡💡
  - `Note for only when we define positive ending index as second argument of slice() array method ✅` : 
    - when we define second argument as positive ending index then slice() method will start copying/slicing/part <br>
      from start to end index of an array but it doesn't include element of ending index 💡💡💡
  ```js
  let arr = ['a', 'b', 'c', 'd', 'e']
  console.log(arr.slice(2)) // output : ['c', 'd', 'e']
  console.log(arr) // output : ['a', 'b']
  ```
  - here we can see that only two starting elements left inside our original array <br>
    so extracted part is removed from the original array
  - `use case of splice() array method ✅` :
    - now in practice , most of the time the value that splice() method returns , we don't need that <br>
      we're interested in is to just delete one or more elements from an array using splice() method 💡💡💡
    - `use case` : we want to remove the last element of an original array instead of using `pop()` array method 💡💡💡
    - Eg 1 : use case of splice() array method ✅
      ```js
      let arr = ['a', 'b', 'c', 'd', 'e']
      arr.splice(-1) // output : ['a', 'b', 'c', 'd']
      ```
    - Eg 2 : use case of splice() array method i.e deleting one or more elements of an array ✅
      ```js
      let arr = ['a', 'b', 'c', 'd', 'e']
      arr.splice(1, 2)
      console.log(arr) // output : ["a", "d", "e"]
      ```
      - `arr.splice(1, 2)` means 
        - starts from `1` index number & second argument of splice() method means <br>
          how many number of elements we want to delete i.e `2`
        - so splice() array method will starts deleting from `1` starting index number <br>
          till deleting two elements from an original array 💡💡💡

- Eg 3 : of `reverse()` array method 
  - it mutate/change the original array 
  ```js
  let arr2 = ['j', 'i', 'h', 'g', 'f']
  console.log(arr2.reverse()) // output : ["f", "g", "h", "i", "j"]
  console.log(arr2) // output : ["f", "g", "h", "i", "j"]
  ```

- `Note` : keep in mind that which array method is mutating the original array & which one is not mutating <br>
  this is important because in a certain situation , we might not want to mutate the original array <br>
  & then we can't use any of these methods which are mutating the original array 💡💡💡

- Eg 4 : `concat()` array method 
  - it used to concatenate/append/add/join two or more than two arrays
  - it doesn't mutate/change the original array
  ```js
  let arr = ['a', 'b', 'c', 'd', 'e']
  let arr2 = ['j', 'i', 'h', 'g', 'f']
  const letters = arr.concat(arr2)
  console.log(letters) // output : ["a", "b", "c", "d", "e", "j", "i", "h", "g", "f"]
  ```
  - we already do this joining/concatenation through spread operator like this `console.log([...arr, ...arr])` <br>
    & even spread operator don't mutate/change the original array 💡💡💡
  - `which one should you use for concatenation of two or more arrays` : it's just personal preference

- Eg 4 : `join()` array method
  - it doesn't mutate/change the original array , 
  - it returns the output in string type because it takes only one argument in string <br>
    like on what basis we want to join each elements of an array that we wan define as argument in string  
  ```js
  let arr = ['a', 'b', 'c', 'd', 'e']
  console.log(arr.join(' - ')) // output : a - b - c - d - e 
  ``` 
  - so here `-` is a separator/sign which is used to join each elements of an array

- `Tip` : great developer sometimes use google + MDN to remember the stuff , so if you forgot something
  - then use these tools , don't be afraid because time will get wasted if you try to remember stuff clearly
  - the important thing is understand the concept clearly that's it 💡💡💡 
