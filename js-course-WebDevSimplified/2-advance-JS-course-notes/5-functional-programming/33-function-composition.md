# function composition

- `define` : function composition means combining multiple functions into one function ✔️✔️✔️

## Example - of function composition

- Eg : Normal example 
    ```js
    const array = [1, 2, 3, 4, 5]

    function double(element) {
        return element * 2
    }

    function addOne(element) {
        return element + 1
    }

    console.log(array.map(double).map(addOne)) // output : (5) [3, 5, 7, 9, 11]
    ```

- or we could create a function composition

- Eg : of creating a function composition
    ```js
    const array = [1, 2, 3, 4, 5]

    function double(element) {
        return element * 2
    }

    function addOne(element) {
        return element + 1
    }

    function doubleAndAddOne(element) {
        return addOne(double(element)) // doing nested function
    }

    console.log(array.map(doubleAndAddOne)) // output : (5) [3, 5, 7, 9, 11]
    ```

- function composition means calling functions together over & over again with the result of the previous function 
    - until we get to the final result that we want , so we're just combining multiple functions together 💡💡💡

- `Disadvantage of function composition`
    - it's kind of backwards because we have to go inside - out to figure out what the function does
        - Eg : `addOne(double(element))` in this , we first doubled & then add 1
        - & this is little bit confusing because we have to read inside - out
        - & normally we read things from left to right or top to bottom in programming 
        - & if we read this `addOne(double(element))` from left to right then we'll get the opposite result
    - so this is the problem with function composition
    - that's why we use libraries like lodash (that take care of all of this for us) ✔️✔️✔️

- let's install lodash library
    - `STEP 1` : inside the folder , inside the terminal 
    - `STEP 2` : run a command `npm i lodash`
    - & when we get installed then we can use it 

## Using lodash library

- Eg : inside script.js file , importing lodash library 
    - `STEP 1` : so instead of directly importing from node_modules folder , run this command `npm i --save-dev parcel-bundler`
        - so we're saving as dev dependency & we're doing parcel bundler because we want to use parcel with this
        - so that way we can directly use node modules as an import ✔️✔️✔️
    ```js
    // generally when we're working with lodash , we don't want to import the whole library 💡💡💡
    // but due to requirement we're doing 
    import lodash from 'lodash' 

    const array = [1, 2, 3, 4, 5]

    function double(element) {
        return element * 2
    }

    function addOne(element) {
        return element + 1
    }

    function doubleAndAddOne(element) {
        return addOne(double(element)) 
    }

    console.log(array.map(doubleAndAddOne))
    ```
    - `STEP 2` : run `npm init -y` to initialize package.json file 
        - inside package.json file 
            - `STEP 2.1` : put `"parcel-bundler" : "^1.12.4"` from dependencies object to deDependencies object
            - `STEP 2.2` : now inside `scripts` object , create a script
                ```json
                "scripts" : {
                    "start" : "parcel index.html"
                }
                ```

    - `STEP 3` : run `npm start` command , now open the console tab 
    - output : we can see we'll get `Array(5)`

- & lodash has a functional programming library i.e `fp` ✔️✔️✔️
    - Eg : of importing function programming library of lodash
        ```js
        import { compose } from 'lodash/fp' 

        const array = [1, 2, 3, 4, 5]

        function double(element) {
            return element * 2
        }

        function addOne(element) {
            return element + 1
        }

        function doubleAndAddOne(element) {
            return addOne(double(element)) 
        }

        console.log(array.map(doubleAndAddOne))
        ```
    - `compose` function (of lodash) means compose together multiple functions & it'll compose in a little bit easier way 
        - it take argument as a function means define only function name without using call it 
        - & it will call last function first & then so on means from right to left 💡💡💡

    - Eg : using compose function of lodash library
        ```js
        import { compose } from 'lodash/fp' 

        const array = [1, 2, 3, 4, 5]

        function double(element) {
            return element * 2
        }

        function addOne(element) {
            return element + 1
        }

        const doubleAndAddOne = compose(addOne, double)

        console.log(array.map(doubleAndAddOne)) // output : (5) [3, 5, 7, 9, 11]
        ```
        - so here `compose(addOne, double)` , compose function wll run `double` function first & then `addOne` function will be called
        - so `compose()` function will execute things from right to left 💡💡💡

    - if we want to call first function first means from left to right then use `flow()` function of lodash 💡💡💡
    - Eg : using `flow` function of lodash
        ```js
        import { flow } from 'lodash/fp' 

        const array = [1, 2, 3, 4, 5]

        function double(element) {
            return element * 2
        }

        function addOne(element) {
            return element + 1
        }

        const doubleAndAddOne = flow(double, addOne)

        console.log(array.map(doubleAndAddOne))
        ```
        - if we define this way `flow(addOne, double)` then `flow()` function will run `addOne` function first & then `double` function 

## what's the purpose of function composition

- so the purpose is that we can create a bunch of small functions such as `double` function , `add` function & so on..
    - & then we can combine together all of these different small functions together to make one larger function 
    - that does a bunch of more complicated stuff
    - due to this , testing becomes easier & really easy to work & that larger composition is just those functions combined together 💡💡💡

- `lodash` library has tons of functions we can use eg : it has `groupBy` that we created custom

- Eg : of `groupBy` function of lodash ✅ 
    - inside script.js file
    ```js
    import { flow , groupBy } from 'lodash/fp' 

    const array = [1, 2, 3, 4, 5]

    function double(element) {
        return element * 2
    }

    function addOne(element) {
        return element + 1
    }

    const doubleAndAddOne = flow(double, addOne)

    console.log(groupBy(element => element % 2, array))
    ```
    - output : 
        ```js
        // {0: Array(2) , 1: Array(3)}
        // 0: (2) [2, 4]
        // 1: (3) [1, 3, 5]
        ```
    - so here on `0` index , we have all the even numbers & `1` index has all the odd numbers

- if we use bunch of pure functions which functional programming is all about
    - so take a bunch of pure functions & making them into one larger pure function that we can use throughout our code ✔️✔️✔️
    - & using libraries like `lodash` makes easier because they give tons of pure functions that we can work with
        - & they also give convenient functions such as `compose` , `flow` functions which allow to do the composition in much easier way

# discussion page

- `Asked` : Can you do a video on the top 10 Lodash functions everyone should know :)
    - `Ans by Kyle` : I will consider that. I generally don't use Lodash too often, though, so have probably used only around 10 methods myself 
    