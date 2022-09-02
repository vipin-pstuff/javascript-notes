# First Class functions VS. higher-order functions

- A property of the JS language i.e first class functions which enables to write higher order functions 💡💡💡

## First class functions

- `first-class functions` means 
    - JS treats functions as first-class citizens means functions are simply values
    - functions are just another "type" of object
    - `why functions are just another type of object` : 
        - because since objects are values that's why functions are values too
        - so since functions are values then there's a bunch of interesting things that we can do with them

- `ways to use functions ✅` : 
    - Eg 1 : storing functions in variables like this `const add = (a, b) => a + b` or <br>
        storing a function as a method inside the object like this 
        ```js
        const counter = {
            value: 23 , 
            inc: function() { this.value++ }
        }
        ```
    - so here functions values are these `(a, b) => a + b` in `add` variable <br>
        & `function() { this.value++ }` in `inc` property of `counter` object 💡💡💡
    - Eg 2 : we can also pass a function as an argument i.e callback function
        ```js
        const greet = () => console.log('Hey Jonas')
        btnClose.addEventListener('click', greet)
        ```
    - Eg 3 : we can also return functions from inside a function i.e closure (which can be very useful)
    - Eg 4 : many types of objects in JS have methods but there are also function methods
        - `function methods` means methods that we can call on functions 💡💡💡 like bind() function method
        ```js
        counter.inc.bind(someOtherObject)
        ```

## Higher Order Functions

- `Note ✅` : now js has first-class functions makes it possible for us to use & write higher order functions 💡💡💡
- `higher-order function` means is either a function that receives another function as an argument 
    - or a function that returns a new function or both 💡💡💡

- `first` : function that receives another function 
    - Eg : addEventListener() method is a function which receive another function as a callback function
        ```js
        const greet = () => console.log('Hey Jonas')
        btnClose.addEventListener('click', greet)
        ```
        - here `addEventListener()` method is a higher-order function <br>
            because it receives another function i.e `greet` as an input 💡💡💡
        - & here `greet` function is a callback function because it's passed as an argument inside another function <br>
            because later on , that callback function will be called through that higher-order function 💡💡💡 <br>
            means `addEventListener()` method will call the `greet` callback later as soon as the click event happens/fire

- `second` : a function that returns a new function 
    - Eg : a function return a brand new function i.e closure
        ```js
        function count() {
            let counter = 0 
            return function() {
                counter++
            }
        }
        ```
        - here `count()` function is a higher-order function & returned function i.e `function() {counter++}`
        - & this style of using function used a lot in JS

## difference b/w first-class functions & higher-order functions 

<table><tr><td width="400px" valign="top">

### first-class functions

- its just a feature that a programming language <br>
    either has or doesn't have
- means these sort of functions are values
- & in practical work , there're no first-class functions means it's just a concept 💡💡💡

</td>
<td width="400px" valign="top">    

### higher-order functions

- in practical work , higher-order functions exist 
- due to first-class functions , we can use <br>
    & write higher-order functions

</td></tr></table>

## Extra notes Higher Order function vs first class function

- https://www.youtube.com/watch?v=oJOZxX17NSY&ab_channel=MukulRajpoot
- https://devdeepak.hashnode.dev/higher-order-functions-in-javascript
