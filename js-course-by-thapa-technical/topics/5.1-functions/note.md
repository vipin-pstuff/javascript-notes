# Functions 

- [x] a function is a block of code designed to perform 
    a repeated and particular tasks and can be used as reusable

- [x] a function is like a module

### types of functions 
    -> function definition 
        -> calling a function 
    -> function parameter & arguments
    -> function expression
    -> function with return keyword
    -> anonymous function 

    NOTE : there are 2 or 3 advance topics on function 
        what we'll cover on advance js lecture

### NOTE

    -> before using a function , we need to define it.

    -> defining a function doesn't mean it is executed . 
        a function is executed when we call it 

    -> if we don't return or not do console.log()
        then the function return undefined as a output
        eg : 
            function sum() {
                var a = 2 ; b = 2 ;
                var total = a + b ;
            } 

            console.log(sum())

    -> each functions should be different in terms of name

    -> whenever we do console.log() for a function without paranthesis
        then it contains a function definition as a variable
        like a normal variable contain data

### why we need to use function
    eg : 
        var a = 10 ; 
        var b = 20 ; 
        var sum = a + b ; 
        console.log(sum) ;

    -> here is the problem that we can't use this code 
        in another place
    -> like we can't change the value of a and b variable
    
    -> so this is not right that's why we use function
    -> that we can use it anywhere in our program 
    -> and we can change values also

###  function definition 
    -> also known as 
        normal function / function declaration / function statement


    -> to define it 
        -> first declare function keyword
        -> then name of the function then paranthesis
        -> then a list of parameters inside paranthesis to the function 
            -> and each parameters separated by commas
        -> and then define statements inside curly brackets

    -> to call it 
        -> just call the name of the function with paranthesis

    eg : 
        function functionName() {
            // statement
        }  

        functionName()

### function parameter & arguments
    eg : 
        function sum(a , b) {
            console.log(a + b)
        }

        sum(12 , 2) 

    NOTE : 
        - don't put any let or const keyword while defining parameters

        - if don't give arugment to that parameter then
            bydefault undefined will be stored
            just like a variable

        - while creating a function then inside 
            parathesis we define parameters
        - and when we call a function then inside 
            parathesis we define argument

        - each parameters separated by commas and 
            same with each arguments

### function expressions
    - means create a function and put it into 
        variable

    eg : 
        function sum(a , b) {
            var total = a + b ;
            console.log(total)
        }

        var funExp = sum(5, 15) ;
        funExp ;

    -> means that how we can call function without paranthesis
    -> function expression means whenever you're calling a function then put it into a variable and whenever you call that variable then you don't need to put paranthesis
        
        or 

        function sum(a , b) {
            var total = a + b ;
            console.log(total)
        }

        var funExp = sum(5, 15) ;

    -> even if we don't call it variable name then still we'll get output

    NOTE : here we are still getting output even we just assign that function into that variable because somehow we're calling that sum() function indirectly

    NOTE : 
        - but this is not complete function expression because until and unless we don't use return keyword

        - so we need to return from that function and whatever we're returning that will be assign to that variable

        - so here comes function with return keyword

### function with return keyword
    -> when javascript reaches a return statement then
        the function will stop executing

    -> functions often compute a return value
        the return value is "returned" back to the "caller"

    eg :
        function sum(a , b) {
            return a + b
        }

        var funExp = sum(4 , 5) 
        console.log(funExp)

### anonymous function 
    -> it's similar like a function expression + syntax also similar
    -> it's a anonymous function expression
    -> function without name is called anonymous function 
    -> you can use it as argument due to less code

    NOTE : 

        -> this whole code is anonymous function expression
        var anonFunExp = function(a , b) {
            return a + b 
        } 

        -> but only this part is anonymous function 
            function(a , b) {
              return a + b 
            } 

    eg : 
        var anonFunExp = function(a , b) {
            return a + b 
        } 

        var sum = anonFunExp(5 , 15)
        console.log(sum)

        -> so this whole code is anonymous function expression
        -> simply just putting a function while calling into a variable
            it's called function expression
        -> so that we can call/use return value of that function 
            through that variable anywhere without paranthesis