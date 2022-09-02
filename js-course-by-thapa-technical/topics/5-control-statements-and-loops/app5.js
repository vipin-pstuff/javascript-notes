// Eg : of if else statement

var age = 18 ; 

if (age === 18) {
    console.log("you can vote") ;
} else {
    console.log("you can't vote") ;
}

// 📝 interview question 
// difference b/w break and continue keywords
/* 
    solution

        - break keyword terminate/exit from the loop
        - continue keyword skip from the loop
            eg :
                for (let i = 1 ; i <= 5 ; i++) {
                    
                    if (i === 3) {
                        continue ; 
                    }
                    console.log(i)
                } 

            output : 1 2 4 5

            - here 3 is not printed means 3 is skipped by continue keyword
*/

// 🔥 Challenge time - timestamp : 2:09:08
/* 
    Ques : write a program that works out 
        whether if a given year is a leap year
        or not

        condition
        -> if it is exactly divided by 4
        -> if it is exactly divided by 400
            -> then it's a leap year
        -> if it is only divided by 100 
            -> then it's not a leap year
*/ 

// solution: 
var year = 2019 ;

if (year % 400 === 0 || (year % 100 != 0 && year % 4 === 0)) {
    console.log("Leap year")
} else {
    console.log("Non Leap year")
}

/* 
    debugger; 
        ->> is a keyword which is used for testing
        ->> you can put this keyword anywhere of your program
        ! is most important thing 
    eg : 

    var year = 2020 ;
    debugger ;
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log(year + "is a leap year")
            } else {
                console.log(year + "is not a leap year")
            }
        } else {
            console.log(year + "is a leap year")
        }
    } else {
        console.log(year + "is not a leap year")
    }

*/

// 🔥 Challenge time - timestamp : 2:18:54

// ques - what is truthy && falsy values in JS ?

// solution
if (score = 0) {
    console.log("we lost the game") ;
} else {
    console.log("we won the game") ;
}

// random ques

// ques - difference b/w while and do while loop
/* 
    in while loop if condition is false then 
        control will not go inside block of code 

    in do while loop if condition is false but 
        still we'll get one time output because block of code 
        come first and condition comes after that 
*/


// eg : infinit loop in while loop

var num = 10 ; 

while (num <= 10) {
    console.log(num) ; // this is infinit loop
} 

// eg : normal while loop
var num1 = 1 ; 

while(num1 <= 10) {
    console.log(num1) ;
    num1++ ;
}

/* 
    NOTE : 
    
    * here curly braces of while loop called block scope
        and this word is most important
        
    * on upcoming lectures we're going to see
        block scope VS function scope
*/

// eg : do while loop

var num2 = 1 ;

do {
    console.log(num) ;
    num++ ;
} while(num <= 10) ;

// eg : of for loop

var num3 ;

for ( num3 = 1 ; num3 <= 10 ; num3++) {
    console.log(num3)
}

/* 
    ! NOTE : 

    * when our num3 value is 10 then you'll think that 
        we're now out from for loop but this is not

    * still after value 10 , num3 will go to iteration 
        it's now 11 and then still condition will be checked 
        and now condition is false and now we're out from for loop 
*/

// 🔥 challenge time : timestamp : 3 : 07 : 25

// ques : javascript program to print table for given number
//      (8 , 9 , 12 , 15 ) using for loop

// NOTE : do this step by step to build logic

// solution 
var num4 ; 
var table = 8 ;

for (num4 = 1 ; num4 <= 10 ; num4++) {
    console.log(table + " X " + num4 + " = " + (table * num4)) ;
}