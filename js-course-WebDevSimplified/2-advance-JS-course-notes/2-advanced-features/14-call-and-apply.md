# call & apply

- `call()` & `apply()` these are methods like `bind()` method 
    - & kindof similar to `bind()` method means `call()` & `apply()` methods work in same way on function
    - but `call()` & `apply()` methods are little bit different each other 

## Example - of call() , apply() & bind() methods 

- Eg : `using bind() method`
    ```js
    const person = {
        name : "Teen"
    }

    function printName() {
        console.log(this.name)
    }

    printName.bind(person)()
    // output : Teen
    ```
    - so here `this` keyword is pointing to that `person` object
        - & here we can see that we didn't pass the parameter inside `printName` function due to `bind()` method ✔️
    - & we're calling that function (which is returned by bind() method) instead of binding that new function ✔️

- Eg : `using apply() method`
    ```js
    const person = {
        name : "Teen"
    }

    function printName() {
        console.log(this.name)
    }

    printName.apply(person)
    // output : Teen
    ```

    - syntax of `apply()` method is same as `bind()` method ✔️
    - now here we used apply() method but we didn't use `()` parentheses to call that returned function ✔️ 

- Eg : `using call() method`
    ```js
    const person = {
        name : "Teen"
    }

    function printName() {
        console.log(this.name)
    }

    printName.call(person)
    // output : Teen
    ```
    - so `call()` & `apply()` methods are same 

## difference b/w call() & apply() methods ✅

- only difference b/w call() & apply() methods is when we start passing parameters to them 💡💡💡

- Eg : in bind() method , we can pass additional arguments 
    ```js
    function sum(a , b) {
        return a + b
    }

    console.log(sum.bind(null , 2)(3))
    // output : 5
    ```
    - here we pass three arguments , second argument i.e `2` if for first parameter of that function
        - & we passed the `3` as third argument for that function which is going to returned by `bind()` method 💡💡💡 

- Eg : `using call() method for additional arguments`
    ```js
    function sum(a , b) {
        return a + b
    }

    console.log(sum.call(null , 2 , 3))
    // output : 5
    ```
    - so if we use call() method then we don't need to use `()` parentheses to call that returned function by call() method 
        - & we can give any number arguments inside `call()` method 💡💡💡
        - & here we passed `null` as a first argument because there is no `this` keyword inside `sum` function to refer that's why 💡💡💡
    
- `apply()` method also same but if we want to give additional arguments inside `apply()` method <br>
    then we need to define inside an array 💡💡💡 

- Eg : `using apply() method to define additional arguments` 
    ```js
    function sum(a , b) {
        return a + b
    }

    console.log(sum.apply(null , [2 , 3]))
    // output : 5
    ```
    - so if we want to define additional arguments inside `apply()` method 
        - then we need to define additional arguments inside an array 💡💡💡

- `difference b/w call() & apply() methods ✅` : 
    - `apply() method` : to define additional arguments then we need to define inside an array
    - but `call() method` : doesn't required to define arguments inside an array 

## usecases of call() & apply() methods ✅ 

- Eg : `usecase of apply() method` 
    
    - without using apply() method
        ```js
        function sum(...numbers) {
            return numbers.reduce((count , n) => count + n)
        }

        console.log(sum(1, 2, 3))
        // output : 6
        ```

    - using apply() method
        ```js
        function sum(...numbers) {
            return numbers.reduce((count , n) => count + n)
        }

        const numbersToAdd = [1, 2, 3, 4, 5]

        console.log(sum.apply(null , numbersToAdd))
        // output : 15
        ```

- Eg : `usecase of call() method` 

    - using call() method
        ```js
        function sum(...numbers) {
            return numbers.reduce((count , n) => count + n)
        }

        const numbersToAdd = [1, 2, 3, 4, 5]

        console.log(sum.call(null , ...numbersToAdd))
        // output : 15
        ```
        - here we used spread operator because we want spread out those numbers which are inside `numbersToAdd` array
            - because we need individual numbers

## said by kyle

- call() & apply() methods are not really useful because if we have a function which needs individual items from an array then we can do <br>
    that also without using call() & apply() methods like this 
    
    - spreading out the items of an array without using call() & apply() methods
        ```js
        function sum(...numbers) {
            return numbers.reduce((count , n) => count + n)
        }

        console.log(sum(...numbersToAdd))
        // output : 15
        ```
        - so we don't need call() & apply() methods for this situation

- `where we use call() & apply() methods ✅` : 
    - we use them when we want to redefine the `this` keyword like `console.log(sum.apply(person))`

- generally most of the time we don't use `call() & apply()` methods except bind() method 💡💡💡
    - means we rarely use `call() & apply()` methods
    - & `bind()` method is only used sometimes 💡💡💡

- important is to know that they exist because we'll get question in interview ✔️
    - so that we can read the code & know what it's going to return to you 

## --------------- Extra notes of call , apply , bind ---------------

- videos
    - https://www.youtube.com/watch?v=ZZbPmnTEr1E&ab_channel=ThapaTechnical
      - https://www.youtube.com/watch?v=4OQfonZbTF8&ab_channel=ThapaTechnical
      - https://www.youtube.com/watch?v=SsLlT7Mv8ZY&ab_channel=ThapaTechnical
    - https://www.youtube.com/watch?v=SaWTn1ZNTpo&ab_channel=TechnicalSuneja
    - https://www.youtube.com/watch?v=TxpAF4Z1EOQ&ab_channel=CodeWithKashi
    - https://www.youtube.com/watch?v=rZc7_2YXbP8&ab_channel=codeSTACKr

- blogs
    - https://twitter.com/ATechAjay/status/1563722269230129152
    - https://dev.to/ritik_dev_js/what-the-hack-is-call-apply-bind-in-javascript-11ce
    - https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb
    - https://dev.to/thesanjeevsharma/call-apply-and-bind-in-javascript-2nno
