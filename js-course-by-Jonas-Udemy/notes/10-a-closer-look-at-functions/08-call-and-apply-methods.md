# call & apply methods

- here we'll see `this` keyword again & how we can set the `this` keyword manually <br> 
    & why we would want to do that 💡💡💡

- we use `call()` , `apply()` & `bind()` methods when we're dealing with `this` keyword 💡💡💡 

## Examples - of call() & apply() methods 

- Eg 1 : of airplane question
    ```js
    const lufthansa = {
        airline: 'lufthansa',
        iataCode: 'LH',
        bookings: [],
        book(flightNum, name) {
            console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
            this.bookings.push({ flight: `${this.iataCode}${flightNum}` , name })
        }
    }

    lufthansa.book(239, 'Elon')
    // output : Elon booked a seat on lufthansa flight LH239 
    ```
    - so `this` keyword points to current object itself i.e `lufthansa` <br>
        because we called `book()` method on `lufthansa` object itself

- But now let's say that after some years , the lufthansa group created a new airline like this 
    ```js
    const eurowings = {
        name: 'Eurowings' , 
        iataCode: 'EW' ,
        bookings: [] 
    }
    ```
    - now we also want `book()` function inside this `eurowings` object but this will be bad practice + duplicate code 💡💡💡 <br>
        so we'll take this `book()` method & store it in a external function & then we can reuse that global function for all of <br>
        different airlines like this 
        ```js
        const eurowings = {
            name: 'Eurowings' , 
            iataCode: 'EW' ,
            bookings: [] 
        }

        // here we just passed the function definition or body as it is inside book variable 💡💡💡
        const book = lufthansa.book 

        book(23, 'Sarah Williams') // output : error will come i.e can't read property 'airline' of undefined
        ```
        - `here why we got error`
            - because `book()` function (which we created & called globally) is a regular function call <br>
                & inside normal function , `this` keyword points to `window` global object <br>
                & in `window` global object doesn't have `airline` property that's why we got undefined
            - so here that `book` global function is now a separate function
        - `said by jonas` : that's why he's saying earlier that the `this` keyword
            - depends on how the function is actually called 💡💡💡

- `now how we can fix this problem ✅` : 
    - means we need to tell JS explicitly what that `this` keyword means <br>
        so if we want to book a `lufthansa` flight then `this` keyword should point to `lufthansa` <br>
        but if we want to book a `eurowings` flight then `this` keyword should point to `eurowings`
    - means how we can tell JS manually that which current object it needs to point based on our needs <br> 
        so there're 3 methods i.e `call()` , `apply()` , `bind()` methods 💡💡💡 <br>
        instead of doing this `const book = lufthansa.book` & then `book(23, 'Sarah Williams')`

## call() method ✅

- `call()` method : 
    - it's used to invoke/call a method with an owner object as an argument or parameter
    - through call() method , an object can use a method belonging to another object 💡💡💡
    - takes two arguments 
        - first : which object we want to point as current object
        - second : argument values of that function 💡💡💡
        - each arguments of call() method will be separated by comma ✔️✔️✔️

- Eg 1 : of call() method
    ```js
    const lufthansa = {
        airline: 'lufthansa',
        iataCode: 'LH',
        bookings: [],
        book(flightNum, name) {
            console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
            this.bookings.push({ flight: `${this.iataCode}${flightNum}` , name })
        }
    }

    const eurowings = {
        name: 'Eurowings' , 
        iataCode: 'EW' ,
        bookings: [] 
    }

    const book = lufthansa.book 

    book.call(eurowings , 23, 'Sarah Williams')

    console.log(eurowings)
    /* output : {name: 'Eurowings', iataCode: 'EW', bookings: Array(1)}
                  bookings: Array(1)
                  0: {flight: 'EW23', name: 'Sarah Williams'}
                  length: 1
                  [[Prototype]]: Array(0)
                  iataCode: "EW"
                  name: "Eurowings"
                  [[Prototype]]: Object

        - means we got the correct output
    */

    book.call(lufthansa , 239, 'Mary Cooper') // output : we'll get correct output
    ```
    - `book.call(eurowings , 23, 'Sarah Williams')` : means 
        - we didn't called `book()` global function , so we called `call()` method on `book` global function
        - & then `call()` method which will call `book` function <br>
            with the `this` keyword set to current object i.e `eurowings` 💡💡💡 <br>
            - means whatever we pass as first argument inside `call()` method <br>
                then that first argument will be treated as current object 
            - & due to this manually & explicitly set the `this` keyword of any function that we want to call
        - so after first argument of `call()` method <br>
            are call simple arguments for the original function i.e `book` global function 💡💡💡

    - now we have the way to manipulate/change the `this` keyword manually by using `call()` method 💡💡💡

## apply() method ✅

- `apply()` method : is similar to call() method 
    - but the difference is that apply() method doesn't receive a list of arguments after the `this` keyword <br>
        as we pass arguments while calling a function
    - but it's take an array for the arguments
    - means it takes only 2 arguments i.e 
        - first : name of the object which we want to point as the current object for the `this` keyword
        - second : when we're dealing with objects then we define an array which contain argument values for that function
            - but if we're dealing with the constructor function then defining values as arguments for those parameters <br> 
                of that constructor function as normally we define for normal function 💡💡💡

- Eg : of apply() method 
    ```js
    const lufthansa = {
        airline: 'lufthansa',
        iataCode: 'LH',
        bookings: [],
        book(flightNum, name) {
            console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
            this.bookings.push({ flight: `${this.iataCode}${flightNum}` , name })
        }
    }

    const swiss = {
        airline: 'Swiss Air Lines' , 
        iataCode: 'LX', 
        bookings: []
    }

    const flightData = [583, 'George Cooper']

    book.apply(swiss, flightData)
    console.log(swiss) // output : we'll get correct output 
    ```

- `said by jonas` : 
    - now this `apply()` method is not used anymore in modern JS <br>
        because now we have a better way of doing the exact same thing <br>
        i.e spread operator with call() method like this ✅
        ```js
        const flightData = [583, 'George Cooper']

        book.apply(swiss, flightData)
        // OR 
        book.call(swiss, ...flightData) // 💡💡💡
        // both ways are same 
        ``` 
    - but now in modern JS , we always use `call()` method & then spread out arguments from an array 💡💡💡

## Extra Notes

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call ✅
- https://betterprogramming.pub/when-to-use-bind-call-and-apply-in-javascript-1ae9d7fa66d5 👍
- https://www.freecodecamp.org/news/understand-call-apply-and-bind-in-javascript-with-examples/
- https://www.codingame.com/playgrounds/9799/learn-solve-call-apply-and-bind-methods-in-javascript
- https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb
- https://blog.sessionstack.com/how-javascript-works-deep-dive-into-call-apply-and-bind-415f6729c902
- https://twitter.com/ATechAjay/status/1565203428518768640