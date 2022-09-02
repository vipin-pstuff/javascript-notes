# Ternary Operator

- about it :  
    - ternary operator is also called conditional operator
    - it useful to define a value inside a variable conditionally 💡💡💡
    - it's a short way to write if else statement

## Example 

- Eg : of using storing a variable by using ternary operator ✅
    ```js
    const age = 12 
    const drink = age >= 18 ? "Wine 🍷" : "water 💧"
    ```

- we can use ternary operator to created a condition inside template literals
- Eg : creating a condition inside template literals through ternary operator ✅
    ```js
    const age = 12 
    console.log(`They like to drink ${age >= 18 ? "Wine 🍷" : "water 💧"}`)
    ```
    - but we can't use if else statement inside template literals 
    - so this would be useful if we want to use condition inside template literals then use ternary operator 💡💡💡

- `Note` : 
    - ternary operator is introduce to replace the if else statement <br>
        it just used when we have only on line of code to print based on condition then we can use ternary operator 💡💡💡
    - but if we have many lines of code to execute based on a condition then in this situation use if else statement 💡💡💡