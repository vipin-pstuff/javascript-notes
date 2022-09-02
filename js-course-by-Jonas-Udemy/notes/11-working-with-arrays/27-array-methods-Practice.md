# Array Methods Practice

- testing code 
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

## Practice - array methods 

- Eg 1 : of map() array method 
  - `Problem 1` : calculate how much been deposited in total in the bank means across all the bank
  ```js
  // we want new array that's why we're using map() array method
  const bankDepositSum = accounts.map(acc => acc.movements)
  console.log(bankDepositSum) // output : [Array(8), Array(8), Array(8), Array(5)] 
  ```
  - so we got array of arrays
  - `STEP 1` : we want all the elements inside one array , so we can use flat() array method
      ```js
      const bankDepositSum = accounts.map(acc => acc.movements).flat()
      ```
  - `STEP 2` : to simplify code , we can use flatMap() array method
      ```js
      const bankDepositSum = accounts.flatMap(acc => acc.movements)
      console.log(bankDepositSum) 
      // output : (29) [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, …]
      ```
  - `STEP 3` : using filter() array method to calculate total deposit in all the bank
      ```js
      const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((sum , cur) => {
        return sum + cur
      }, 0)
      console.log(bankDepositSum) // output : 25180
      ```

- Eg 2 : of reduce() array method 
  - `Problem 1` : calculate how many deposits there have been in across bank with at least $1000
  ```js
  const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length 
  console.log(numDeposits1000) // output : 5  
  ```
  - `STEP 1` : let's do the same thing through reduce() array method 
      ```js
      const newDeposits1000 = accounts.flatMap(acc => acc.movements).reduce((count, cur) => {
          return (cur >= 1000 ? count++ : count)
      }, 0)
      // output : 0
      ```
  - `Note of post & pre increment operator ✅` : 
    - here we got `0` because due to post-increment operator
      ```js
      let a = 10
      console.log(a++) // output : 10
      console.log(a) // output : 11
      ```
    - here we got `10` as first output : 
      - because post-increment operator return old value of that variable & then increment the value 
      - but in pre-increment operator doesn't return old value means <br>
        first it'll increment that value by 1 & then return that updated value 💡💡💡
  - `STEP 2` : so we need to use pre-increment here 
      ```js
      const newDeposits1000 = accounts.flatMap(acc => acc.movements).reduce((count, cur) => {
          return (cur >= 1000 ? ++count : count)
      }, 0)
      ```
  
- Eg 3 : of reduce() array method to create an object ✅
  - `Problem 1` : create an object which contains the sum of the deposits & the withdrawals
    - means we need to calculate those two sums all at the same time , all in one go 
    ```js
    const sums = accounts.flatMap(acc => acc.movements).reduce((sums , cur) => {
        cur > 0 ? sums.deposits += cur : sums.withdrawals += cur
        // in reduce() array method ,
          // explicitly , we always have to return the accumulator for each iteration 💡💡💡
        return sums
    } , {deposits : 0 , withdrawals: 0})

    console.log(sums) // output : {deposits: 25180, withdrawals: -7340}
    ```
    - `STEP 1` : to simplify the code , let's destructure the `sums` variable immediately
      ```js
      const { deposits, withdrawals} = accounts.flatMap(acc => acc.movements).reduce((sums , cur) => {
          cur > 0 ? sums.deposits += cur : sums.withdrawals += cur
          // in reduce() array method ,
            // explicitly , we always have to return the accumulator for each iteration 💡💡💡
          return sums
      } , {deposits : 0 , withdrawals: 0})

      console.log(deposits, withdrawals) 
      ```
    - `imp Note 🔥` : here in object destructure , key name should be same otherwise we'll get undefined 💡💡💡
    - `STEP 2` : let's simplify this line `cur > 0 ? sums.deposits += cur : sums.withdrawals += cur` ✅
        - because most of the things same same 
        ```js
        const { deposits, withdrawals} = accounts.flatMap(acc => acc.movements).reduce((sums , cur) => {
            // we'll see the real use case of square bracket notation 
              // to access property of an object 💡💡💡
            sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur ;

            return sums
        } , {deposits : 0 , withdrawals: 0})

        console.log(deposits, withdrawals) 
        ```

- `Challenge time` : do this by yourself
  - recreate any of the examples that we did previously where we used of map() , filter() & reduce() array methods together <br>
    to use only the reduce() array method 

- Eg 4 : dealing with string methods 🔥
  - `Problem 1` : create a function to convert any string to a title case in a sentence are capitalized except for some of them 
    - & there are some exceptions
    - example : this is a nice title -> This Is a Nice title (& here 'a' is a exception) 
    ```js
    const convertTileCase = function(title) {
      // here we just put necessary exceptions but in general there are more exceptions
        // Note : this is common technique to put exceptions inside an array , so keep it in mind 💡💡💡
      const exceptions = ['a' , 'an' , 'and' , 'the', 'but' , 'or' , 'on' , 'in' , 'with']
    }
    console.log(convertTileCase('this is a nice title'))
    console.log(convertTileCase('this is a LONG title but not tool long'))
    console.log(convertTileCase('and here is another title with an EXAMPLE'))
    ```
    - we'll convert all the words of a sentence in lowerCase & then work on individually on each of the words
    - `STEP 1` : convert all the words of a sentence in lowerCase & split them
      ```js
      const convertTileCase = function(title) {
        const exceptions = ['a' , 'an' , 'and' , 'the', 'but' , 'or' , 'on' , 'in' , 'with']

        // here we use used toLowerCase() array method instead of toUpperCase()
          // because solving this problem becomes easy
        const titleCase = title.toLowerCase().split(' ')
        return titleCase
      }

      console.log(convertTileCase('this is a nice title'))
      console.log(convertTileCase('this is a LONG title but not tool long'))
      console.log(convertTileCase('and here is another title with an EXAMPLE'))
      ```
    - `STEP 2` : now go through each the array & capitalized each of the words that's not an exception in that array
      - so if there is any exception word then don't capitalize it & return a new array with a output 
      ```js
      const convertTileCase = function(title) {
        const exceptions = ['a' , 'an' , 'and' , 'the', 'but' , 'or' , 'on' , 'in' , 'with']

        const titleCase = title.toLowerCase().split(' ').map(word => {
          return word[0].toUpperCase() + word.slice(1)
        })
        return titleCase
      }

      console.log(convertTileCase('this is a nice title'))
      console.log(convertTileCase('this is a LONG title but not tool long'))
      console.log(convertTileCase('and here is another title with an EXAMPLE'))
      ```
    - `STEP 3` : working on exceptions words
      ```js
      const convertTileCase = function(title) {
        const exceptions = ['a' , 'an' , 'and' , 'the', 'but' , 'or' , 'on' , 'in' , 'with']

        const titleCase = title.toLowerCase().split(' ').map(word => {
          // checking exceptions words here 
            // if exceptions.includes(word) -> it's true then return the word itself without any modifications
            // otherwise do this -> word[0].toUpperCase() + word.slice(1)
          return exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
        })
        return titleCase
      }

      console.log(convertTileCase('this is a nice title'))
      // output : (5) ["This", "Is", "a", "Nice", "Title"]
      console.log(convertTileCase('this is a LONG title but not tool long'))
      // output : (9) ["This", "Is", "a", "Long", "Title", "but", "Not", "Tool", "Long"]
      console.log(convertTileCase('and here is another title with an EXAMPLE'))
      // output : (8) ["and", "Here", "Is", "Another", "Title", "with", "an", "Example"]
      ```
    - `STEP 4` : join the array 
      ```js
      const convertTileCase = function(title) {
        const exceptions = ['a' , 'an' , 'and' , 'the', 'but' , 'or' , 'on' , 'in' , 'with']

        const titleCase = title.toLowerCase().split(' ').map(word => {
          return exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
        }).join(' ')
        return titleCase
      }

      console.log(convertTileCase('this is a nice title'))
      // output : This Is a Nice Title 
      console.log(convertTileCase('this is a LONG title but not tool long'))
      // output : This Is a Long Title but Not Tool Long 
      console.log(convertTileCase('and here is another title with an EXAMPLE'))
      // output : and Here Is Another Title with an Example 
      ```
    - `STEP 5` : simplify this line code i.e `word[0].toUpperCase() + word.slice(1)`
      ```js
      const convertTileCase = function(title) {
        const capitalize = str => str[0].toUpperCase() + str.slice(1) 

        const exceptions = ['a' , 'an' , 'and' , 'the', 'but' , 'or' , 'on' , 'in' , 'with']

        const titleCase = title.toLowerCase().split(' ').map(word => {
          return exceptions.includes(word) ? word : capitalize(word)
        }).join(' ')

        return capitalize(titleCase)
      }

      console.log(convertTileCase('this is a nice title'))
      // output : This Is a Nice Title 
      console.log(convertTileCase('this is a LONG title but not tool long'))
      // output : This Is a Long Title but Not Tool Long 
      console.log(convertTileCase('and here is another title with an EXAMPLE'))
      // output : and Here Is Another Title with an Example 
      ```
