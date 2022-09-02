# More Closure Examples

- here we'll understand two situations in which closures are gonna appear
    - so that we can identify closures is happening in our code in the future ✔️✔️✔️
- Both of these examples are gonna demonstrate so that we don't need to return <br>
    a function from another function in order to create a closure 💡💡💡

## Example 1 - to understand the closure situation ✅

- Eg 1 : creating a closure by using a normal variable 
    - instead of returning a function from another function in order to create a closure
    ```js
    let f 

    const g = function() {
        const a = 23 

        f = function() {
            console.log(a * 2)
        }
    }

    g() 
    f() // output : output : 46 
    ```
    - this code proves that here we can use this `f` variable as a closure inside any function <br>
        means we don't need to return a function from another function in order to create a closure 💡💡💡
    - means this `f` variable which is now a function really does close over any variables <br>
        of the execution context in which it was defined & that's true even when the variable itself i.e `f` variable <br> 
        was technically not even defined inside of this variable environment i.e `a` variable 
    - `how "f" variable able to access "a" local variable`
        - so this `f` variable was defined/created outside in the global scope & then inside this `g` function <br>
            we assigned a function value to `f` variable which is still closed over the variable environment of the `g` function <br> 
        - that's why , that variable environment includes that `a` variable . That's why `f` closure function able to access <br>
            that `a` variable even after the `g` function (at this line of code i.e `f()`) has already finished it's execution
        - so `f()` at this point of execution the variable environment of `g` variable is no longer there <br>
            But `f` function closed over/inside that variable environment & that's why it's able to access the `a` variable <br>
            means that `a` variable is inside the backpack of the `f` function 💡💡💡

- Eg 2 : using a closure inside two different function without using `return` keyword
    ```js
    let f 

    const g = function() {
        const a = 23 

        f = function() {
            console.log(a * 2)
        }
    }

    const h = function() {
        const b = 777 

        f = function() {
            console.log(b * 2)
        }
    }

    g() 
    f() // output : 46

    // Re-assigned "f" function
    h()
    f() // output : 1554
    ```
    - now when we called `h()` function then `f` variable will be re-assigned by a function value <br>
        `Note ✅` : here first `f` function is different than second `f` function because it was re-assigned by `h` function 💡💡💡 
    - this code base proves that `f` function was re-assigned inside `h` function & it also closed over <br>
        the variable environment of `h` function & due to this , `f` closure function able to access the `b` variable
    - Eg 2.1 : checking the variable environment of Eg 2
        ```js
        g() 
        f()
        console.dir(f)

        h() 
        f()
        console.dir(f)
        ```
        - we'll see that before calling `h` function , we have the value of `a` variable inside `f` closure <br>
            but after `h()` function , when we called `f()` function again then `f` variable is re-assigned <br>
            & now `f` closure function store value `b` variable . So `old Closure is overwritten by that new Closure` 💡💡💡  

- so the Closure can change like this as the variable is re-assigned . So a Closure always makes sure <br> 
    that a function doesn't lose the connection to the variables that were present at it's birthplace . <br>
    So that closure always gonna remember the connection
    - so in our case , a closure function was kind-of born inside of `g` function first <br> 
        & then it was reborn again in `h` function
    - so first the closure contained the `a` variable of it's first birthplace & then it was reborn of `b` variable birthplace

- so whenever something like this happens where we re-assigned functions even without `return` keyword <br>
    then this will also create a closure ✔️✔️✔️

## Example 2 - to understand the closure situation ✅

- this closure example will be based on a timer . So a timer is another great example <br> 
    that we don't need to return a function to see a closure in action 💡💡💡

- Eg 1 : using async or timer function to create closure 
    ```js
    const boardPassengers = function(n, wait) {
        const perGroup = n / 3

        setTimeout(function() {
            console.log(`We are now boarding all ${n} passengers`)
            console.log(`There are 3 groups, each with ${perGroup} passenger`)
        }, wait * 1000)

        console.log(`Will Start board in ${wait} seconds`)
    }

    boardPassengers(180, 3)
    ```
    - `setTimeout(function() {}, 1000)` means 
        - after `1000` means 1second that callback function (which is a argument of setTimeout() function) will be executed 
        - `setTimeout()` function takes two arguments 
            - first : a callback function 
            - second : time for delay
    - this code base means here this `console.log("Will Start board in + wait + "seconds")` will not wait <br>
        for those above two `console.log()` . means this `console.log("Will Start board in + wait + "seconds"`)` <br>
        will not wait for those 3 seconds of setTimeout() callback to finish 
    - so this `console.log("Will Start board in + wait + "seconds"`)` will immediately run
    - `Note using a timer function as a closure inside a normal function ✅` 
        - so this `setTimeout()` function was executed completely independently from the `boardPassengers()` function 
        - But still that callback function (of setTimeout() function) was able to use all the variables <br>
            which were in the variable environment in which they were created i.e `n` , `perGroup` 💡💡💡
        - so this is a sign of a closure being created because that callback function (of setTimeout() function) <br>
            able to access those variables which were used inside console.log() <br>
            that's why we got access of `n` parameter , `perGroup` local variable
        - so as we know that the closure can access both local variables & parameters of that parent function also 💡💡💡

## Example - to prove the closure have priority over the scope chain 

- Eg 1 : proving is the closure have priority over the scope chain
    ```js
    const boardPassengers = function(n, wait) {
        const perGroup = n / 3

        setTimeout(function() {
            console.log(`We are now boarding all ${n} passengers`)
            console.log(`There are 3 groups, each with ${perGroup} passenger`)
        }, wait * 1000)

        console.log(`Will Start board in ${wait} seconds`)
    }

    boardPassengers(180, 3)

    const perGroup = 1000
    boardPassengers(180, 3)
    ```
    - now if the scope chain had priority over the closure then that callback function of `setTimeout()` function <br>
        would use `perGroup` global variable because we can image that callback function of `setTimeout()` <br>
        will be executed in the global scope . So if this callback function of `setTimeout()` wasn't the closure <br>
        then it would use `perGroup` local variable
    - Eg 1.1 : checking is the closure have priority over the scope chain or not
        ```js
        const boardPassengers = function(n, wait) {
            // const perGroup = n / 3

            setTimeout(function() {
                console.log(`We are now boarding all ${n} passengers`)
                console.log(`There are 3 groups, each with ${perGroup} passenger`)
            }, wait * 1000)

            console.log(`Will Start board in ${wait} seconds`)
        }

        boardPassengers(180, 3)

        const perGroup = 1000
        boardPassengers(180, 3)
        ```
        - now the callback function (of setTimeout() function) will use that `perGroup` global variable  
    - Eg 1.2 : but if we define `perGroup` variable inside boardPassengers() function itself
        - then let's check is that callback function (of setTimeout() function) will use that local variable or global 
        ```js
        const boardPassengers = function(n, wait) {
            const perGroup = n / 3

            setTimeout(function() {
                console.log(`We are now boarding all ${n} passengers`)
                console.log(`There are 3 groups, each with ${perGroup} passenger`)
            }, wait * 1000)

            console.log(`Will Start board in ${wait} seconds`)
        }

        boardPassengers(180, 3)

        const perGroup = 1000
        boardPassengers(180, 3)
        ```
        - now in this code base , the callback function (of setTimeout() function) will use that `perGroup` local variable <br>
            so due to this , we're able to know that the closure even has priority over the scope chain 💡💡💡
