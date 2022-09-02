# arrow function 

    - it is also a another type of function or is a another way of writing function

## How to write arrow function 

    eg : of normal function

            function sum(a , b) {
                return a + b 
            }

            console.log(sum(1 , 2))

        - so this is normal function 
        - arrow function is like function expression
        - so now to convert normal function into arrow function 
            write like this 

    eg : of arrow function 

        let sumArrow = (a , b) => {
            return a + b
        }

        console.log(sumArrow(1 , 2))

        - this is called function expression
            whether if we write arrow function or anonymous function
            but both will be different in terms of syntax
        
        NOTE : 
            - to make arrow sign 
                - use equalto sign and greaterthan sign
                - but don't give a space b/w them
                
## challenge time - timeline 3:00

    ques - 
            function printName(name) {
                console.log(name)
            }

            printName("Teen")

        convert this normal function into arrow function

    Ans - 
            const printName = (name) => {
                console.log(name)
            }

            printName("Teen")

## about arrow function 

    eg : 
            const printName = (name) => {
                console.log(name)
            }

            printName("Teen")

        NOTE : important 🔥
            if we're defining the arrow function then 
                1 - if we have only one parameter then defining/giving parenthesis is optional  
                    but if we have more than one parameters then we have to define the parenthesis
                    otherwise error come 💡
                2 - if we have only one line of code inside the arrow function 
                        like if we're returning something using return keyword from arrow function
                        then no need to define return keyword and curly braces of arrow function 
                    but if we have multiple lines of code inside the arrow function and
                        if we're returning something using return keyword from the arrow function 
                        we have to define both return keyword and curly braces of arrow function
                        (here return keyword is depends on situation) but curly braces is compulsory
                        otherwise error come (if we define only one of them or none of them)
                        i.e return keyword and curly braces 💡
                    
                    2.1 - we don't have any parameter with arrow function 
                            then put the parenthesis otherwise error come 💡

                - this can't be done with normal function
    
    eg : of one parameter in arrow function ✅
                             __________________
                            |                  |
        const printName = name => {            |
            console.log(name)                  |
        }                                      |
                                               |
        printName("Teen")                      |
                                               |
        +--------------------------------------+ 
        |
        +-> if we have only one parameter while using arrow function 
            then no need to put parenthesis and it's optional to give

    eg : of more than one parameter in arrow function ✅

        const printNameArrow = (name , ag) => {
            console.log(name , age)
        }

        - so here we gave parenthesis because 
            we gave/define more than one parameter and it's compulsory 

    eg : of if we have only one line of code + returning something inside arrow function ✅

        eg : of one line of code inside normal function

            function sum(a , b) {
                return a + b
            }

        eg : of one line of code inside arrow function

            const sumArrow = (a , b) => a + b

            - here a + b means behind the scene
                it will be like this
                    {
                        return a + b
                    }

            - don't start arrow sign in next line like this
        
                const sumArrow = (a , b) 
                => a + b ❌

                - this is completely wrong
                - write/define arrow function in same line only

        eg : of multiple lines of code + returning something inside the arrow function ✅

            const sumArrow = (a , b) => {
                console.log(a , b)
                return a + b
            }

            - here we have more than one line of code inside the arrow function
              that's why we gave/define curly braces or block of code and return keyword also

        eg : of multiple lines of code + not returning anything from inside arrow function ✅

            const sumArrow = (a , b) => {
                console.log(a , b)
                console.log(a + b)
            }

            sumArrow(1 , 2)


## challenge time - timeline 7:06

    ques - 
            function printHi(name) {
                return "Hi" + name
            }

            write this normal function in one line of code by using arrow function
            
            condition - 
                but don't use function keyword , parenthesis for one parameters , 
                curly braces and return keyword

    Ans - 
            const printHi = name => "Hi" + name

            console.log(printHi("Teen"))

## Note - for if we have one line of code + returning something from inside arrow function

    eg : 
            const printArrow = name => { "Hi" + name }

            console.log(printArrow("Sunil Chetri"))

            // output : undefined

        - because we only use curly braces 
            so don't use only curly braces , use return keyword also
            means use both curly braces and return keyword
            otherwise don't use any of them if we have only one line of code inside arrow function

        - don't use either curly braces or return keyword 
            use both of them or none of them
            like this 

            const printArrow = name => "Hi" + name
            // OR --------------------------------
            const printArrow = name => {
                return "Hi" + name
            }

## challenge time - timeline 9:14

    ques - if we have a normal function without parameters
            then write in arrow function 

            normal function without parameters

            function hi() {
                console.log("hi")
            }

    Ans - 
            cost hi = () => {
                console.log("Hi")
            }

            hi()

    NOTE : 

        function hi() {
            console.log("asdasd")
        }

        const hi = () => {
            console.log("asdasd")
        }

        // output - error come

        - we can't create two different types of function 
            with the same name

## Note - about arrow function ✅

    - imp 🔥

    - why we need a arrow function if we can use the normal function
        because we can use arrow function as passing as a argument inside the another function 
        and we need to write much less code if we use arrow function  💡💡

    eg : of passing the anonymous function as an argument inside another function

        function func(x , callback) {
            callback("hi")
        } 

        func(10 , function(variable) {
            console.log(variable)
        })

        - here we use anonymous function as a argument 
            but we can use arrow function also as a argument instead of using 
            anonymous function 

    eg : of passing the arrow function as a argument inside the another function 

        function func(x , callback) {
            callback("Teen")
        } 

        func(10 , variable => console.log(variable))
    
## Extra notes

- what is first class function : https://twitter.com/ATechAjay/status/1562047873578979329
    - conclusion : 
        - Functions are first class citizens in JavaScript.
        - means We can store a function to a variable as a value.
