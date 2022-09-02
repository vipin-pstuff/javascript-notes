# currying

- use parcel to run the script as previous lecture we did 

- currying is also a part of function programming 

## What is currying function

- currying function means taking a function & reducing the number of arguments in that function all the way down to one
    - means we're just reducing the number of arguments that go into a function 
    - so that we can call it with less arguments 💡💡💡

- means creating a new function that already has the arguments applied kindof like `bind` function 

## Example 

- Eg : inside script.js file 
    - normal function which can take number of arguments as per need
        ```js
        function sum(a, b) {
            return a + b
        }

        console.log(sum(1, 2)) // output : 3
        ```
    
    - using currying function way which takes only one argument
        ```js
        function sum(a) { // it takes only one argument
            return (b) => { // & return function also take another one argument
                return a + b
            }
        }

        console.log(sum(1)(2)) // output : 3
        ```
        - inside this `sum(1)(2)` , second parentheses means calling return function

    - so we used curring function means we used one argument inside `sum()` function  
        - we can use bind() method

- Eg : `using bind() method on sum() function`
    ```js
    function sum(a, b) {
        return a + b
    }

    console.log(sum.bind(null, 1)(2)) // output : 3
    ```
    - so by using `bind()` method , we've curried that sum() function by reducing the number of arguments that it takes
        - `sum.bind(null, 1)(2)` means first parentheses only take one argument & second parentheses also take one argument 
        - & doing this manually is not great that's why let's use lodash ✔️✔️✔️

## using lodash library to use currying function 

- `curry` is a function inside `fp` of lodash library

- Eg : of using `curry()` function of fp of lodash library
    ```js
    import { curry } from "lodash/fp"

    function sum(a, b) {
        return a + b
    }

    console.log(curry(sum)(1)(2)) // output : 3
    ```

- `why we need to use currying function ✅` : 
    - because it allows us to actually partially apply certain functions 
    - that way it's easier for us to compose & chain together functions 💡💡💡
    - Eg :
        ```js
        import { curry , groupBy , sortBy } from "lodash/fp"

        const array = {
            {
                name: "Kyle"
            } , 
            {
                name: "Sally"
            } , 
            {
                name: "Joey"
            } 
        }

        console.log(groupBy(element => element.name.length , sortBy(element => element.name , array))) 
        ```
        - output : 
            ```js
            /* {4: Array(2) , 5: Array(1)} 
                4: Array(2)
                    0: {name: "Joey"}
                    1: {name: "Kyle"}
                    length: 2
                5: Array(1)
                    0: {name: "Sally"}
                    length: 1
            */
            ```

    - but why we would need currying function , so let's say what if we want to compose these different functions together
        - let's import the `compose` function from `lodash/fp`
        ```js
        import { curry , groupBy , sortBy , compose } from "lodash/fp"

        const array = {
            {
                name: "Kyle"
            } , 
            {
                name: "Sally"
            } , 
            {
                name: "Joey"
            } 
        }

        const composedFunction = compose(groupBy(element => element.name.length) , sortBy(element => element.name))

        console.log(composedFunction(array))
        /* {4: Array(2) , 5: Array(1)} 
            4: Array(2)
                0: {name: "Joey"}
                1: {name: "Kyle"}
                length: 2
            5: Array(1)
                0: {name: "Sally"}
                length: 1
        */
        ```
      - `compose(groupBy(element => element.name.length) , sortBy(element => element.name))` means 
        - so here normally sortBy() & groupBy() functions takes two arguments 
        - & we're curring it where we're saying every single time we call this `groupBy(element => element.name.length)`
        - then we want to groupBy this argument i.e `element => element.name.length`
        - but second argument we don't know that it is yet inside groupBy() function , so we'll wait for it to be passed in 
        - that's currying function does 

- `Note` : lodash automatically does the currying if we only pass one argument inside any function of lodash
    - then lodash automatically curry that function so that it returns a new function that takes in another argument
    
## said by kyle

- Honestly , it's not even super important that how exactly what currying is or why it works 
- important to know is that we use currying is to make it easier to compose functions 
    - which then makes it easier to actually use those small functions to do larger things
- & if we're using `lodash` library then it'll takes care of all the currying for us , so we don't have to worry about it  

## ------ Extra stuff of currying ------

- videos 
    - https://www.youtube.com/watch?v=vQcCNpuaJO8&ab_channel=AkshaySaini
    - https://www.youtube.com/watch?v=7vJy9asG-J8&ab_channel=ThapaTechnical
    - https://www.youtube.com/watch?v=I4MebkHvj8g&ab_channel=DaveGray
    - https://www.youtube.com/watch?v=k5TC9i5HonI&ab_channel=RoadsideCoder
    - https://www.youtube.com/watch?v=DkBcfYtBZnQ&ab_channel=TechnicalSuneja
    - https://www.youtube.com/watch?v=FQEmpvgdhD8&ab_channel=CodeSikho
    - https://www.youtube.com/watch?v=KbAW3R2RAGM&ab_channel=CodeImprove
    - https://www.youtube.com/watch?v=KY5LNkyc97o&ab_channel=AshutoshBhardwaj

- blogs 
    - https://dev.to/cglikpo/currying-in-javascript-1jke
    - https://javascript.info/currying-partials
    - https://blog.logrocket.com/understanding-javascript-currying/
    - https://medium.com/swlh/currying-in-javascript-bbe4ddedf86b
    - https://zetcode.com/javascript/currying/
