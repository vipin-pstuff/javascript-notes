
// eg : of let VS const VS var

    // eg : of var
        /* var myName = "Steve" ;
        console.log(myName) ;

        myName = "Steve Jobs" ;
        console.log(myName) ; */

    // eg : of let 
        /* var myName = "Steve" ;
        console.log(myName) ;

        myName = "Steve Jobs" ;
        console.log(myName) ; */

    // eg : of let 
        /* const myName = "Steve" ;
        console.log(myName) ;

        myName = "Steve Jobs" ;
        console.log(myName) ; */

    /* 
        NOTE : 

        - using var and let 
            in both we'll get same output

        - if we use const then we'll get an error 
            because after once defining value into 
            that variable then we can't change / update
            value of that variable

        * const keyword we use 99% inside function 
    */

// eg : of function scope

    // eg : of function scope using var keyword
    /* function biodata() {
        var myFirstName = "Teen" ;
        console.log(myFirstName) ;
        
        if (true) {
            var myLastName = "Sip" ;
            console.log("Inner " + myLastName) ;
            console.log("Inner " + myFirstName) ;
        }   

        console.log("InnerOuter " + myLastName) ;
    } 
    
    biodata() 
    
    */


    /*
        here we're using myLastName outside the if statement
        which is declared inside the if statement
    */

    /* 
        NOTE : 

        - so var keyword don't follow block scope
            - means any variable can be accessible  
            - if a variable declared inside the if statement
                then we can access that variable outside the if statement
    */

    /* function biodata() {
        let myFirstName = "Teen" ;
        console.log(myFirstName) ;
        
        if (true) {
            let myLastName = "Sip" ;
            console.log("Inner " + myLastName) ;
            console.log("Inner " + myFirstName) ;
        }   

        console.log("InnerOuter " + myLastName) ;
    } 
    
    biodata()  */

    /* 
        - here we'll get an error that myLastName variable is not defined
            same with const keyword
    */

    /* 
        NOTE : 

        - so let and const follow the block scope
            - due to this we can't access variables 
                outside the scope if it is define inside the scope

        * IMP NOTE : 
            - we can access variables outside to inside 
                but scope should be same
            - but we can't access variables inside to outside
            
            * means those variables which are defined globally
                can be accessible inside local/inner scope
                but those variables which are defined locally/inner scope
                are not accessible globally / outer scope

            - you can understand through parent scope and child scope
                that whatever variables inside parent scope 
                child scope can access 
                but whatever variables declared inside child scope 
                can't be accessible outside the child scope

            - we can't access variables outside the block scope
    */
            
// eg : of template string

    let tableOf = 12 ;
    for (let num = 1 ; num <= 10 ; num++) {
        // console.log(tableOf + " * " + num + " = " + (tableOf * num))
        console.log(`${tableOf} * ${num} = ${tableOf * num}`)
    }
                    
// eg : for arrow function

    const sum = () => {
        let a = 2 , b = 4 ;
        return `Sum of two numbers is : ${a + b}` ;
        // or
        // return `Sum of two numbers is : ${(a=2)+(b=4)}` ;
    }

    console.log(sum())

    /* 
        NOTE : 

        - in arrow function , if you have only one line of code
            then you don't need to write 
            return keyword and curly braces
        
        eg : 
            const sum = () => `Sum of two numbers is : ${(a=2)+(b=4)}`
    
        - in arrow function , if you have only one parameter 
            then we don't need to write paranthesis
            but we have more than one then we need to give
            paranthesis

        eg : 
            let a = 2 ; 

            const sum = num => `Sum of two numbers is : ${num + 5}`

            sum(a)

        eg : 
            but if we have more than one parameter 
            then we need to define paranthesis
            
            let a = 2 , b = 5 ;

            const sum = (num1 , num2) => `Sum of two numbers is : ${num1 + num2}`
    
            sum(a , b)
    */