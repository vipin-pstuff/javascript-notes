# Callback functions 

- let's create our own higher-order functions for a callback function
- so we'll be creating a function that accepts other functions as an input/argument 💡💡💡
- most important topic/concept 🔥🔥🔥

## Examples - of callback functions

- Eg 1 : of callback functions
    ```js
    const oneWord = function(str) {
        return str.replaceAll(' ', '').toLowerCase()
    }

    const upperFirstWord = function (str) {
        // array destructuring with rest operator
        const [first, ...others] = str.split(' ')
        // array destructuring with spread operator 
        return [first.toUpperCase(), ...others].join(' ')
    }

    // higher-order function
    const transformer = function(str, fn) {
        console.log(`Original string: ${str}`)
        console.log(`Transformed string: ${fn(str)}`)

        // in previous lecture we said that functions even have their own methods & properties also 💡💡💡
            // name property : gives name of the function 💡💡💡
        console.log(`Transformed by: ${fn.name}`)
    }

    transformer('Javascript is the best!' , upperFirstWord)
    /* output : 
        Original string: Javascript is the best! 
        Transformed string: JAVASCRIPT is the best! 
        Transformed by: upperFirstWord  
    */
    transformer('Javascript is the best!' , oneWord)
    /* output : 
        Original string: Javascript is the best! 
        Transformed string: javascriptisthebest! 
        Transformed by: oneWord 
    */
    ```
    - `transformer('Javascript is the best!' , upperFirstWord)` means 
        - here we're not calling that callback function which is passed as an argument inside `transformer()` function <br>
        - which means we're simply passing function body/definition of that callback function 💡💡💡
    - a callback function we also pass as an argument inside `addEventListener()` method , etc also 

- Eg 2 : of higher-order function with callback function
    ```js
    const high5 = function() {
        console.log("💡")
    }

    document.body.addEventListener('click' , high5)
    ```
    - here `document.body.addEventListener('click' , high5)` means 
        - addEventListener()` is a higher-order function 
        - & high5 is a callback function which is passed as an argument 

- callback function used all the time in built in JS functions & there are many examples of callback function like this 💡💡💡
    ```js
    const high5 = function() {
        console.log("💡")
    }

    ['Jonas', 'Martha', 'Adam'].forEach(high5) // output : 3💡
    ``` 
    - using callback function concept practically in JS code base is really common

## why callback functions used most the time & advantages of it ✅

- `Advantages` : it makes code to split up easily into more reusable & interconnected parts
- `most IMP advantage` : it allows us to create abstraction 
    - `what is abstraction ✅` : 
        - means is that hide the detail of some code implementation because we don't really care about all those detail <br>
            & due to this , it allows us to think about problems at a higher or abstract level 💡💡💡
        - it's also called obstruction 
    - Eg 1 : to understand abstraction properly
        ```js
        const oneWord = function(str) {
            return str.replaceAll(' ', '').toLowerCase()
        }

        const upperFirstWord = function (str) {
            const [first, ...others] = str.split(' ')
            return [first.toUpperCase(), ...others].join(' ')
        }

        const transformer = function(str, fn) {
            console.log(`Original string: ${str}`)
            console.log(`Transformed string: ${fn(str)}`)
            console.log(`Transformed by: ${fn.name}`)
        }

        transformer('Javascript is the best!' , upperFirstWord)
        ```
        - here we create a level of abstraction & `abstraction` is really important in programming 💡💡💡
        - so this `transformer` function doesn't care at all how the string is transformed <br>
            so `transformer` function only wants to do is to transform a string but it doesn't care how it should do it 💡💡💡
        - means we can write the code of oneWord & upperFirstWord functions inside `transformer` function itself <br>
            but instead of doing that , we abstracted some code or responsibility away into other functions <br>
            means we again created a new level of abstraction 
        - & due to this `transformer` function is really only concerned with transforming the input string itself <br>
            but `transformer` function doesn't care how that transforming itself actually works
        - means `transformer` function is delegating the string transformation to the other lower level of functions 💡💡💡
        - & due to this idea of abstraction , higher level & lower levels of abstraction concept <br>
            we can say `transformer` function is a higher-order function because this function operates/starts <br>
            at a higher level of abstraction by just leaving/giving the low level details to those low level functions 💡💡💡
    - Eg 2 : to understand abstraction 
        ```js
        const high5 = function() {
            console.log("💡")
        }

        document.body.addEventListener('click' , high5)
        ```
        - here if we don't pass callback function inside addEventListener() method <br>
            then addEventListener() don't know what to do after clicking
        - & here `addEventListener()` method is a higher-order function with the high level of abstraction <br>
            & `high5` function with more lower level of abstraction 💡💡💡
