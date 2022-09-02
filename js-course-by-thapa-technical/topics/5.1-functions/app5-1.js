
// random ques
// ques : difference b/w defining a function and calling a function


// eg : of normal function

// here we define a function
function sum() {
    var a = 10 ;
    var b = 20 ;
    console.log(a + b)
}

// now we're calling a function
sum()


// 🔥 challenge time -> 3:26:42
// ques : difference b/w function parameter VS function arguments
/*
    solution: 

    -> function parameters are the names listed in the function definition
    -> function arguments are the real values passed when we call the function
*/

// eg : of function parameter
/* 
    NOTE : 
        - if i want to get a sum of 20 and 30 
            then i need to do hard coded 

        eg : 
        
        - in a and b variable again i need to put value

            function sum() {
                var a = 10 ;
                var b = 20 ;
                console.log(a + b)
            }

        - but we don't want make our code -> hard coded 
            
        - so to make our code reusable
            here comes concept of parameter and arguement 
*/
function sum(a , b) {
    console.log(a + b)
}

sum(12 , 2) 


// 📝interview question - 3:33:26
// ques : why functions ?
/* 
    solution : 
    
    - we can resuse code
        - define the code once and use it many times
    
    - we can use the same code many times with 
        different arguments , to produce different results

    - this eliminates the need of writing the same code again and again 

    - DRY rule - don't repeat yourself
*/
