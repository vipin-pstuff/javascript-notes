# bind

- most important 🔥
- here we'll talk about `bind , call & apply`
- these are some pretty niche stuff but these are most important to understand  💡💡💡
    - because these are related to how under the hood JS works
- `Prerequisite` : this → keyword & object

## about bind ✅

- it's a method ✔️✔️✔️ 
- it takes only one object as an first argument and creates a new function 💡💡💡
- bind means combine or use that thing with something else 💡💡💡
- it doesn't work with arrow function because it handle this & scope differently 💡💡💡
    - `reason` : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#call_apply_and_bind

## example of bind() method ✅

- Eg 1 : `using bind() method`
    ```js
    window.name = "Global Name"

    const person = {
        name : "Teen"
    }

    function printName() {
        console.log(this.name)
    }

    const newPrintName = printName.bind(window)
    newPrintName()
    // output : Global Name
    ```
    - here we're binding or combining a function with an object 💡💡💡

- Eg 2 : `using bind() method` 
    ```js
    window.name = "Global Name"

    const person = {
        name : "Teen"
    }

    function printName() {
        console.log(this.name)
    }

    const newPrintName = printName.bind(person)
    newPrintName()
    // output : Teen
    ```
    - so here we called this function i.e `printName.bind(person)` , so this will return a brand new function
        - & inside of that new function we'll get the object i.e person object not the window object 💡💡💡
        - means `this` keyword is pointing to the `person` object 
            - because we bind the `printName` function with `person` object due to bind() method
        - means we're redefining what `this` keyword means inside of a function i.e `printName` function 💡💡💡

    - means we're just redefining what `this` keyword means after passing an argument as a object inside bind() method 💡💡💡

- `said by kyle about bind() method ✅` : 
    - bind() method is not gonna use mostly 
    - but it's important to know because we're understanding how JS at it's core works   
    - & bind() method also do addition things
    - we can actually use bind() method to bind properties of an object to a function 💡💡💡

- Eg 3 : `using bind() method to bind properties of an object to a function` ✅
    
    - normal example 
        ```js
        function sum(a , b) {
            return a + b
        }

        console.log(sum(2 , 3))
        // output : 5
        ```
        - this is pretty easy code to understand

    - what if we wanna another function that always has `2` passed in as the first parameter , for this we'll use bind() method 💡💡💡
    
    - making two function which always take `2` passed in as the first parameter by using bind() method
        ```js
        function sum(a , b) {
            return a + b
        }
        
        const sumTwo = sum.bind(null , 2)
        console.log(sumTwo(3))
        // output : 5
        ```
        - here as we know that `bind()` method takes first argument & that first argument means redefining `this` keyword
            - but as a first argument we passed `null` because inside of sum() function there is no `this` keyword
        - & second argument of `bind()` method is to redefining first parameter of sum() function 💡💡💡

        - so this line of code i.e `sum.bind(null , 2)` is like
            ```js
            function sumTwo(b) {
                return 2 + b
            }
            ```

- `reason why we need bind() method ✅` : so let's see the usecase of bind() which is handy
    
    - usecase of bind() method 💡💡💡
        ```js
        function product(a , b) {
            return a * b
        }

        const numbers = [1, 2, 3, 4, 5]

        // here we're doubling the number 
        const newNumbers = numbers.map(number => {
            return product(2 , number)
        })

        console.log(newNumbers)
        // output : (5) [2, 4, 6, 8, 10]
        ```
        - so here product() function is called every single time & `2` argument is static & `number` argument will change
        - now we can make this code little bit condense or small by using `bind()` method i.e 💡💡💡
            ```js
            const newNumbers = numbers.map(number => {
                return product(2 , number)
            })
            ```
    
    - make that code condense by using `bind()` method
        ```js
        function product(a , b) {
            return a * b
        }

        const numbers = [1, 2, 3, 4, 5]

        // const newNumbers = numbers.map(number => {
        //     return product(2 , number)
        // })

        const newNumbers = numbers.map(product.bind(null , 2))

        console.log(newNumbers)
        // output : (5) [2, 4, 6, 8, 10]
        ```
        - so here we called the `bind()` method on `product` function 
            - & we don't have `this` keyword inside that `product` function that's why we passed the `null` as a first argument
            - & we passed the `2` as a second argument in `bind()` method & that second argument will be static 
                - & assume that second argument is like first argument for first parameter of `product` function i.e `a`
                - because `null` is just define because we don't have `this` keyword inside that function that's why 💡💡💡

- `when to use bind() method ✅` : 
    - if we always want a value at the beginning to be the same like here `2`
    - so we can use bind() method so that it's always that `2` value    
    
- `bind()` method will make little bit cleaner & short

## said by kyle 

- we can use either this code 
    ```js
    const newNumbers = numbers.map(number => {
        return product(2 , number)
    })
    ```
    - or we can use that code with `bind()` method 
    ```js 
    const newNumbers = numbers.map(product.bind(null , 2))
    ```
    - most of the time he use first one because bind() method is can't be used always <br> 
        but in certain scenarios , `bind()` method will be useful

    - & if we face any scoping problem then we can redefine `this` keyword by using bind() method 💡💡💡
