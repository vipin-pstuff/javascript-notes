# Operator Precedence

- Eg : `console.log(20 - 2 > 20 - 3)`
    - so behind the scene , first these will be calculated then check which one is greater <br>
        means these calculations will be done before comparison 💡💡💡
    - so JS use operator precedence rule

- `operator Precedence order` means the order in which operators are executed

- Check Operator Precedence Order : [list of operator precedence order](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
    - inside of this , we can see precedence column with operators 
    - & you just need to keep general idea that which operator will be executed first 

## Examples 

- Eg : of Operator Precedence execution order
    ```js
    let x , y ;
    x = y = 25 - 10 - 5
    console.log(x , y) // output : 10 10
    ```
    - so here JS first finds on this line of code `x = y = 25 - 10 - 5` going to execute
        - & JS will look at all the operators are present in the line of code 
        - & then it'll see the minus operators & then it will start with first `minus` sign <br>
            because minus operator has a higher precedence than equalto assignment operator 💡💡💡
        - & then `x = y = 10` here in operator precedence in equalto , JS will go from right to left <br>
            so 10 will be stored inside `y` & inside x , value of y will be stored 
            