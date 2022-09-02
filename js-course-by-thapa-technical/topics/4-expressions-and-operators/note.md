# expressions & operators

- eg : difference b/w operator and operands

  ```
  - 5 + 20 -> what do you mean by this

    - so here 5 and 20 are operands 
        and "+" plus sign is a operator

    - expression is a combination of 
        operator & operators
  ```

### types of operators
    - assignment operators
    - arithmetic operators
    - comparison operators
    - logical operators
    - string operators
    - conditional (ternary) operator


### assignment operator
    - it's used to assigns a value to its operand

    - eg : 
        var a = 2 ;

### arithmetic operators
    - it takes numerical values (either literals or variables) as their operands
    - and returns a single numerical value  

    - eg : 
        3 + 3 
        10 - 5 
        20 / 5 
        5 * 6 
        81 % 8 -> is a mod or modulus operator to find remainder

    - eg : plus arithmetic operator

            console.log(1 + "2")
            // output : 12

        - because plus operator will concatenate 
            because here first value is integer type and second value is string type 
            so both of them will be concatenated each other 💡💡
        - but if we used other operator like mutiply operator except plus operator
            if we have first value as integer & another value is string type 💡💡
            like this 

            console.log(2 * "3")
            // output : 6


### increment & decrement operator

    types: 
      - postfix and prefix increment
      - postfix and prefix decrement

    - eg : 
        ++ and --

    - eg : of postfix
        x++
        y--

    - eg : of prefix
        ++x
        --y 

    - eg : let's say you want to increase your salary
        then we'll use increment operator

    eg : of post and prefix increment

        let number = 0 

        console.log(number++)  // postfix increment
        console.log(++number) 
        console.lognumber) 

        // output : 0 
                    2 
                    2

        - NOTE : 
            - in postfix , value is assigned first in that variable itself 
                and then increment or decrement 💡💡

            - that's why here first time we got 0(zero)

### comparison operators

    - it compares its operands and returns true or false
        based on whether the condition is true or not

    - equal operator (==)
    - not equal to (!=)
    - Strict equal to (===)
    - Strict not equal to (!==)
    - Greater than (>)
    - Greater than or equal to (>=)
    - less than (<)
    - less than or equal to (<=)

### logical operators

    - return true if condition is true 
    - return false if condition is false

    - logical and (&&)
    - logical or (||)
    - logical not (!)

    - NOTE : 
        - if you use && operator then all the condition should be
            true otherwise we'll get false

        - in case of || operator then if any one condition is true 
            then we'll get true . if all the condition is false 
            then we'll get false 

        - in case if ! not operator converts true condition into false
            and if condition is false then it converts into true 

### string concatenation operator

    - for this we use plus sign

### conditional (ternary) operator

    - we'll see this when we see if else statement

### NOTE :

    -> double star means used for power
        eg : 
            3**2 or 3 * 3
            output -> 9