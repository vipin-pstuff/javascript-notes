# Closure

- it's a opposite of callback function concept because we return functions from inside a function ✔️✔️✔️
- `closure` means create a function which returns a new function 💡💡💡

## Examples - of closure 

- Eg 1 : of Closure
    ```js
    const greet = function(greeting) {
        return function(name) {
            console.log(`${greeting} ${name}`)
        }
    }

    // now here a brand new function definition/body will be returned
        // so now greeterHey variable is become a function 
    const greeterHey = greet("Hey") 
    greeterHey('Jonas') // output : Hey Jonas 
    greeterHey('Steven') // output : Hey Steven 

    // this way we can also call that new return function i.e closure function 💡💡💡
    greet('Hello')('Jonas') // output : Hello Jonas
    ```
    - this is happened due to closure 

- `why Closure is useful` : 
    - closure is extremely useful in some situations <br>
        especially if we're using a really important programming paradigm i.e functional programming  
    
## Challenge Time 

- `Ques` : convert this complete code including the closure also into arrow function syntax
    ```js
    const greet = function(greeting) {
        return function(name) {
            console.log(`${greeting} ${name}`)
        }
    }

    greet('Hello')('Jonas')
    ```
- `Ans` : converted anonymous function into arrow function including closure
    ```js
    const greetArr = greeting => name => console.log(`${greeting} ${name}`)

    greetArr('Hi')('Jonas')
    ```
    - `greeting => name => console.log(greeting , name)` means 
        - this is one arrow function i.e `greeting =>` & this is another arrow function `name => console.log(greeting , name)`
        - so first arrow function is returning another arrow function 💡💡💡
