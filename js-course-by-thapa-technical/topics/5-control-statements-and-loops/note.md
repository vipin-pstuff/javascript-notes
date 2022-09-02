# Control Statements and Loops

### types of control statements
    - if else 
    - switch statement
    - conditional (ternary) operator

### types of loops
    - while loop
    - do while loop
    - for loop
    - for in loop
    - for of loop

### truthy & falsy values 
    - falsy values
      -> 0   
      -> false
      -> ""   
      -> undefined   
      -> null   
      -> NaN   

    - NOTE : except these falsy values all are truthy values

### conditional (ternary) operator
    -> it takes only three operands

    -> it is a shorthand code for if else statement

    -> eg : 
        variablename = (condition) ? value1 : value2

    -> if condition is true then output is - value1
    -> if condition is false then output is - value2

    -> eg : 

        var age = 18 ;

        -> using if else statement

        if (age >= 18) {
            console.log("you're eligible") ;
        } else {
            console.log("you're not eligible") ;
        }

        -> using conditional (ternary) operator

        var message = (age >=18) ? "you're eligible" : "you're not eligible" ;

        console.log(message)

### switch statement
    -> means evaluates an expression , matching the expression's value to a case clause , and executes statements associated with that case

    -> put colon after giving value just after case keyword

    -> break keyword terminates the current loop , switch, etc 

    -> break -> keyword is most important 🔥
            than continue keyword

    -> NOTE : 
        switch statement is better than if else statement
        when you want to compare multiple values with a value of a variable

    eg :
        var area = "circle" ;
        var PI = 3.14 , l = 5 , b = 4 , r = 3 ;

        -> using if else if statement

        if(area === "circle") {
            console.log("Area of a circle is : " + PI*(r**2)) ;
        } else if(area === "triangle") {
          console.log("Area of the triangle is : " + (l*b)/2) ;
        } else if(area === "rectangle") {
          console.log("Area of the rectangle is : " + (l*b)) ;
        } else {
            console.log("please enter valid data") ;
        }

        -> using switch statement

        -> NOTE : if we don't use break -> keyword 
            then all the statement will be excuted 
            that we don't want to show all of them

        switch (area) {
            case "circle" : 
                console.log("Area of a circle is : " + PI*(r**2)) ;
                break ;
            case "triangle" : 
                console.log("Area of the triangle is : " + (l*b)/2) ;
                break ;
            case "rectangle" : 
                console.log("Area of the rectangle is : " + (l*b)) ;
                break ;
            default : 
                console.log("please enter valid data") ;
        }

### while loop
    -> initialization comes first which is outside block of code 
    -> and condition comes inside paranthesis of while keyword
    -> and then increment or decrement comes inside 
        block of code or block scope or body of while loop

### do while loop
    -> initialization comes first 
    -> and then increment or decrement comes inside 
        block of code or block scope or body of do while loop
    -> then condition comes 

    NOTE : put semi-colon after while keyword condition in
        do while loop

### for loop
    -> initialization + condition + increment or decrement comes 
        inside paranthesis of for loop

    -> initialization comes first 
    -> then condition comes second 
    -> then increment or decrement comes third

    eg : 
        for (initiaizer ; condition ; iteration) {
            // code to be executed
        }

    NOTE : after iteration don't give semi-colon


### NOTE : 
    - while loop
    - do while loop
    - for loop
    - for in loop
    - for of loop

    -> all these loops doesn't return anything like a function do
    -> and they don't understand what is return -> keyword