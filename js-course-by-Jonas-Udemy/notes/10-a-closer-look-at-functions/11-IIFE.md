# Immediately Invoked Function Expressions (IIFE)

- sometimes in JS , we need a function which only executed once & then never again
    - means a function that disappears after when it's called one time
    - we need this technique like with async/await 💡💡💡

## Examples - of IIFE

- Eg : of normal function 
    ```js
    const runOnce = function() {
        console.log('This function will never run again after running once')
    }

    runOnce() // output : This function will never run again after running once
    ```
    - however , might be we can run the function again at some point in our code base if we want <br>
        but we don't want to do this , we want to actually execute a function immediately <br>
        & not even having to save it somewhere 💡💡💡
    
    ```js
    function () {

    }

    // output : error : function statements require a function name
    ```
    - here we didn't stored the function body in any variable , so we'll get an error 
        - because we started this function statement with `function` keyword that's why we need variable to store it 💡💡💡
        - however , we can still trick the JS into thinking that `function` keyword is just an expression , <br>
            so here comes IIFE 💡💡💡

- Eg 1 : of IIFE
    - `STEP 1` : to use IIFE concept wrap the function inside a parenthesis like this 💡💡💡
        ```js
        (function() {
            console.log('This function will never run again after running once')
        })
        // output : no output will come because we didn't called the IIFE function
        ```
        - so we transformed this function statement into an expression by just wrapping it through a parenthesis <br>
            but we didn't called it 
    - `STEP 2` : call this IIFE function
        ```js
        (function() {
            console.log('This function will never run again after running once')
        })()
        // output : This function will never run again after running once
        ```
        - so here we immediately call this IIFE function 

    - `understanding the IIFE function ✅` : 
        - this part of IIFE function i.e 
            ```js
            (function() {
                console.log('This function will never run again after running once')
            })
            ```
            - is a function value means a function expression 
        - & this part of IIFE function i.e 
            ```js
            (function() {
                console.log('This function will never run again after running once')
            })()
            ```
            - here we called this function expression immediately that's why we say Immediately invoked function expression

- Eg 2 : IIFE function syntax with arrow function 
    ```js
    (() => {
        console.log('This function will ALSO never run again after running once')
    })()
    // output : This function will ALSO never run again after running once
    ```

## Why we need to IIFE ✅

- we already know that a function create scopes . so , if one scope doesn't have access of variables from an inner scope , Eg
    ```js
    (function() {
        console.log('This function will never run again after running once')
        const isPrivate = 23
    })()
    console.log(isPrivate) // output : error come 
    ```
    - so it means all data which is defined inside a scope is private or we can say that data is encapsulated 
        - Eg : `isPrivate` variable is encapsulated inside of this function scope only
        - means we can't access inner stuff in global scope but global stuff can be access in inner scope 💡💡💡
    - & data encapsulation & data privacy are extremely important concepts in programming 💡💡💡 <br>
        - because many times we actually need to protect our variables from being accidentally overwritten <br>
            by some other parts of the program or even with external scripts or libraries 💡💡💡 
            which we'll see in OOPS concept 
        - so it's important to hide variables & scopes are a good tool for hiding variables & that's why IIFE introduced 💡💡💡
    - IIFE is not a feature of JS , it's a pattern in JS 

## Reason why we don't use IIFE in code base ✅

- `let` & `const` keywords are also create their own scope inside a block of code i.e curly braces 
    - block of code means curly braces 💡💡💡
- but if we use `var` keyword to define a variable then scope rules will be destroyed <br>
    & if that variable is defined inside inner scope then it can be access globally also <br> 
- that's why in modern JS , IIFE are not used anymore because we want a new scope for data privacy by using curly braces <br>
    means we don't need to create a function to create a new scope 💡💡💡

- but if we want to execute the function immediately then we can use IIFE in modern JS <br>
    so we use IIFE in some situation in modern JS + we'll see a great Use Case of it 
