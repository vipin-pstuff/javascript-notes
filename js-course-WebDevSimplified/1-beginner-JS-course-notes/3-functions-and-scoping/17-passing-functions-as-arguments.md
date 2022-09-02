# Passing functions As arguments

    - most important 🔥
    
    - passing functions as an argument know as callback function

    - in this lecture , we'll talk about a pretty special usecase with functions
        i.e we can pass a function inside another function as a argument
        while calling that another function

## Example - of normal function

    eg : 
            function printVariable(variable) {
                console.log(variable)
            }

            printVariable("Hi")

            // output : Hi

        - this is simple thing we learned in previous video

        NOTE : important 🔥

            - now tell us that what is printVariable
            - so let's do 
                console.log(printVariable)

            // output : 

                ƒ printVariable(variable) {
                    console.log(variable)
                }

            - so here we can see that we got 
                definition/body of that function i.e printVariable 💡

            - Now this is very important to understand that 
                here printVariable is just like a normal variable
                that contain the definition/body of that function i.e printVariable() function  
                as a value 💡
            - so just like when we create a variable using let or const keyword
                so same with function that when we create a function with the function keyword
                then here behind the scene printVariable() function creates
                a variable with the same name 💡
            - and variable i.e printVariable contains the definition/body
                of printVariable() function itself as a value 💡
            // OR
            - means behind the scene printVariable is just like a variable 
                which contain the definition/body of itself as a function that we created 
                inside this variable i.e -> printVariable with same name 💡
            - printVariable -> is just like a variable we create normally
                so same with function 💡

    - so now we can actually say that printVariable as a variable
        which contains the definition/body of itself with same name as a function form
        behind the scene 

    - so let's see examples of callback function

## passing a normal function as a argument in a another function

    - here we're passing a function as a argument inside another function
        while calling that another function

    NOTE : important 🔥
        - whenever we pass a function as a argument inside another function
            while calling that another function
        - then don't use parenthesis to call that function
            which we passed as a argument 
            until and unless that callback function is not returning anything using return keyword 
            
    eg 1 : of callback function

            function printVariable(name) {
                console.log(name)
            }

            function func(message) {
                message("hello world")
            }

            func(printVariable)

            // output : hello world

            - so what's happening here that
            - here we passed/define/gave printVariable() function as a argument
                then the definition/body of printVariable function will be mapped/passed as a value
                to that variable/parameter i.e message 💡
            - now message parameter now kindof a function expression
                because that definition/body of printVariable function as a value
                stored inside message parameter 💡
                that's why message parameter now become a function expression
                and due to this that's why we're calling message parameter with parenthesis
            - so here now message parameter of func() function 
                is kindof a function expression  💡

            - here assume that 
                message is just a second name of printVariable() function
                that we're calling printVariable() function 
                through message parameter as a function using parenthesis
                with passing/giving an argument inside message() function
            - so indirectly we're calling the printVariable() function
            
            - so means here func() function is taking the printVariable function
                as a argument and remapping printVariable inside message parameter
                of func() function & then calling that message parameter by using parenthesis
            - and we gave argument inside message callback function 
                and that argument goes inside name parameter of printVariable() function 


    eg 2 : of callback function 

            function printVariable(name) {
                console.log(name)
            }

            function func(message) {
                console.log("before")     ------+
                message("hello world")          |-> this will run in order wise means 
                console.log("after")      ------+   from top to bottom
            }

            func(printVariable)

        - This is something that's very very common in JS 
            and many times when we have a function that we passed to another function
            as an argument while calling that another function i.e func() function
        - then here we'll say that message function as a callback function 💡
        - means passing a function as an argument inside another function
            while calling that another function that is called callback function 

            
    eg 3 : callback function

        function sumCallback(a , b , callback) {
            callback(a + b)
        }

        function handleSum(sum) {
            console.log(sum);
        }

        sumCallback(1 , 2 , handleSum)

        // output : 3

        - so we can assume that while calling that callback function
            i.e callback
        - here we just changed the name of handleSum() function into callback() function

## challenge time - timestamp 5:34

    ques - create a function -> called printVariable
        which take in a parameter -> i.e variable like this

            function printVariable(variable) {
                console.log(variable)
            }

        take this function and then create a new function
        that takes two parameters 
            - first parameter is going to be a -> name
            - second parameter will be a callback function i.e printVariable function as a argument
        
        so we want 2nd parameter of a new function to be a callback -> that prints out 
        what we pass to it 
        and then take name parameter & append/add "hello" to the beginning of the name
        means if we pass "Teen" to it then should be printed like this "hello Teen"


    Ans - 

        function printVariable(variable) {
            console.log(variable)
        }

        function printName(name , callbackFunc) {
            callbackFunc("hello " + name)
        }   

        printName("Teen" , printVariable)

        // output : hello Teen

## Note - common mistake while using callback function ✅

    - most imp 🔥

    - this is very common mistake that 
        a lot of people do this mistake while passing a function as a argument inside another function
        while calling that another function like this

        printName("Teen" , printVariable( ))
                                         |
        +--------------------------------+
        |
        +-> where they put parenthesis 
            while passing a function as a argument inside another function     
            so don't do this ever otherwise we'll get error 💡
        
        - because callback function is not a function
            means here we're just only passing definition/body of printVariable function 
            as an argument inside printName() function while calling printName() function

    -> eg : for when to use parenthesis with passing a function as an argument inside another function ✅
            
        eg 1 : using parenthesis with passing a function as an argument inside another function

            function printVariable(variable) {
                return variable
            }

            function printName(name , callbackFunc) {
                console.log(callbackFunc)
            }   

            printName("Teen" , printVariable)

            - here printVariable() function 
                is not returning anything by using return keyword
                because we didn't gave any argument for printVariable to return something 💡
            
            - that's why output will be undefined 💡

        eg 2 : using parenthesis with passing a function as an argument inside another function ✅

            - here we'll return something to get the output

            function printVariable(variable) {
                return variable
            }

            function printName(name , callbackFunc) {

                console.log(callbackFunc)
            }   

            printName("Teen" , printVariable("go"))

            // output : go

            - so here we didn't got undefined as a output 
            - because printVariable() is returning by using return keyword
                and that returned value will passed as a argument
                inside printName() during calling printName() function 💡


        NOTE : important 🔥
            - give parenthesis with passing a function i.e callback function as an argument inside 
                another function while calling that another function 
                if that callback function is returning something by using return keyword

            - otherwise don't give parenthesis with callback function
                if that callback function is not returning anything by using return keyword
                otherwise error will come 

## passing anonymous function as an argument inside another function 

    - we have a another type of function in JS
        i.e anonymous function
    - function without name is called anonymous function
    - it's similar like a function expression + syntax also similar
        that's why it is a anonymous function expression
    - we can use it as an argument due to less code and easy to use (handy)

    eg : 
            function printName(name , callback) {
                callback("hello" + name)
            }

            printName("Teen" , function(variable) {
                console.log(variable)
            })

        - here 
            function(variable) {
                console.log(variable)
            }

            this is a anonymous function that we passed as a argument
            which is a callback function while calling printNam() function

        - this is anonymous function means a function which has no name 💡

        - the definition/body of anonymous function which is a callback function 
            will be passed/mapped inside that parameter i.e callback of printName() function
            and then we're calling that callback parameter using parenthesis
        - so here callback parameter is kinda acting as a anonymous function expression 💡


        NOTE : 
            - don't forget to give the curly braces or block of code
                of callback function while defining it as a argument 💡

        - here anonymous function not actually without a name
            means indirectly we're defining that name to anonymous function 💡

            eg 1 : of anonymous function 

                    const sum = function (a , b) {
                        return a + b
                    }

                    let result = sum(1 , 2)
                    console.log(result)

                - so here we can see that indirectly 
                    we gave name -> sum to that anonymous function 💡

            eg 2 : of anonymous function 

                    function printName(name , callback) {
                        callback("hello" + name)
                    }

                    printName("Teen" , function(variable) {
                        console.log(variable)
                    })
                
                - here we can also see that we indirectly we gave name i.e
                    callback which is a parameter 💡

    NOTE : 

        function printName(name , callback) {
            callback("Hello" + name)
        }

        printName("Teen" , function(variable) {
            console.log(variable)
        })

        - a function is just a variable that has/contain a definition/body
            of itself in the form of function & we can actually call 
            that function by using parenthesis 💡
        - eg : here printName is a variable
                and this variable itself has/contains the definition/body
                of our printVariable() function itself 💡
        - so the fact that we can pass a function as an argument to the another function 
            directly the name of that function without parenthesis or with parenthesis
            (this depends on situation like that callback function is returning something or not)
        // OR -----------------------------------------------------------------------------------
        - so a function is just a fancy variable 💡💡
            - so we can pass a definition/body of a function directly like anonymous function
                as an argument to the another function 
                is not different than 
            - passing a function in the form of variable to the another function 
                while calling that another function 
        // OR -----------------------------------------------------------------------------------
        - a function is just a variable that has a definition/body of itself in the form of function 

        - we call the function with parenthesis when we need 
            the logic/value of that function 
            which is or are defined inside of that function


    NOTE : Tip to debug/check the error 💡

        - to check the error that on which line 
            has an error so 
        - go to preference -> settings of vs code 
            then search for "line numbers"
            then turn it ON

## My Conclusion 🖐

    eg : checking the definition/body of the function which we created ✅

        function printVariable(name) {
            console.log(name)
        }

        console.log(printVariable)

        - here 
            +----------------------------+
            |   printVariable(name) {    |
        +---|        console.log(name)   |
        |   |   }                        |
        |   +----------------------------+
        |
        +--> this is function definition/body 
                and whose function definition/body is this i.e printVariable() function

        // output : 
                    ƒ printVariable(name) {
                        console.log(name)
                    }

            - so we got definition/body of printVariable() function

        - so printVariable which is behind the scene is a variable
            where printVariable itself is a function
        - which means printVariable contain the definition/body of itself in the form of function

        NOTE : 
            - here functions are just like variables   
                but we can't call normal variables using parenthesis
            - but we can call functions using parenthesis

        - so ultimately means 

            function printVariable(name) {
                console.log(name)
            }
            
            console.log(printVariable)

            - we created a function using function keyword
                i.e printVariable function 💡
            - and then this function itself behind the scene
                will create a variable with that same name which we have to the function 💡 
            - & then that same name variable contains/has definition of that function 
                which we created 💡

    eg : passing a normal function as an argument inside the another function while calling that another function ✅

        function printVariable(name) {
            console.log(name)
        }

        function func(x) {
            x("Teen")
        }

        func(printVariable)

        - we can give any name of parameter of any function 
            but name should be readable 
            and argument we give while calling a function 
            should be readable and understandable

        - here we passed the printVariable (callback function) as an argument
            inside func() function
        - so means the definition/body of that printVariable function 
            will be remapped again inside the x parameter of func function
        - now x parameter becomes a function expression (which is another type of function)
            because inside x parameter has a definition/body of that function as a value
            that's why and then x parameter is now become callback function kindof
        - so assume that we have second name of printVariable function 
            i.e x parameter
        - so we can call that callback function i.e x parameter inside func() function
            by using parenthesis
        - and then we gave "Teen" as a argument inside x while calling x callback function
            so this argument is for name parameter of printVariable function  

        - here -> x parameter 
                    - is just a second name to use definition/body of printVariable function
                    - is a callback function 

        NOTE :
            - if we want to call printVariable function outside the func function
                then use the printVariable name itself not x parameter as a name
                like this printVariable("hello world")
            - & if we want to call printVariable function inside func function
                then we can use printVariable name itself also and x parameter also
            - but we can can't use or call the x parameter outside the func function 
                due to local and global scope or local and global variables
    
    eg : passing anonymous function as a argument inside another function ✅

        function printName(name , callback) {
            callback("hello" + name)
        }

        printName("Mouse" , function(variable) {
            console.log(variable)
        })

        - here we directly pass anonymous function definition as an argument 
        - and this anonymous function definition/body will be stored inside that callback parameter
            as a value
        - so now that callback parameter becomes a function 
        - and we gave argument inside callback parameter function 
            which goes inside variable parameter of anonymous function 

        - here we can assume that anonymous function
            is not without name , means it has a virtual name i.e callback parameter  


## about callback function 

    - a callback function is a function passed as an argument into the another function 
        while calling that another function
    - and that callback function is invoked/call
        inside the outer function to complete some kind of task/action/logic

    eg :
            function printVariable(name) {
                console.log(name)
            }

            function func(x) {
                x("Teen")
            }

            func(printVariable)

        - here x is a inner function which is callback function 
            and func is a outer function 

    - callback function is a technique that allows a function to call another function 

## discussion page 

!["callback function"](../../all-chats-pics-of-lectures/1-beginner-JS-course-chats-pics/17-Passing-Functions-as-arguments.png "callback function")