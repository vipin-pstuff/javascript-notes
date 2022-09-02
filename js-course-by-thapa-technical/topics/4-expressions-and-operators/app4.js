// eg : of increment and decrement operator

// eg : of postfix increment
var num = 15 ; 
var newNum = num++ ;

console.log(num); // output - 15
console.log(newNum); // output - 16

/* 
    NOTE : 
        - in postfix , value is assigned first 
        and then increment or decrement
*/

/* 
    NOTE : we can't do like this , error will come

    var num = 15++ ;
    console.log(num)
*/

// eg : of postfix increment
var num = 15 ; 
var newNum = num++ + 5 ;

console.log(num); // output - 16
console.log(newNum); // output - 20

    // one more example 
let b = 4 ;
let num = b++ ;
console.log(num) 

/* 
    - because this calculation done like this 
        first this is done
        num + 5

    - then incremented so that's why we got 16 

    * so in postfix , firstly the value will be 
        evaluate or assigned or calculated with expression 
        and then store that value in another variable
    
    * and then increment operator will increment 
        and store that value inside that variable only
        
    eg : here we use postfix increment ,
        so num value is 15 
            so num value will be incremented by 1 
            and stored inside num variable only
        even this will happen with 
            prefix increment    
*/

// eg : of prefix increment
var num = 15 ; 
var newNum = ++num ;

console.log(num); 
console.log(newNum);

/* 
    NOTE : 
    
    * in prefix , firstly value would be incremented 
        and then evaluate or assigned or calculated with expression

*/

/* 
    NOTE : let's assume

    * when we simply incrementing or decrementing 
        whether it's post or pre
        like this n++ or n-- or ++n or --n
        then there no concept will come 
        whether this is initialize first or increment first

    * but if you have expression like this 
        n++ + 2 or n++ which has postfix increment 
        then you're taking value of n
        and putting into another variable 
        then value will be stored before incrementing 
*/

// same with the case when we do decrement

// eg : logical not operator
var a = 2 ; 
var b = 1 ;

console.log(!((a > 0) || (b < 0)))

/* 
    NOTE :
    ! logical notoperator is very important
*/

// 🔥 challenge time - timeline : 1:50:18

/* 
    1 - what will be the output of 3**3 
    2 - what will be the output , when we add 
        a number and a string 
    3 - write a program to swap two numbers
    4 - write a program to swap two numbers
        without using third variable    
*/

/* 
    Ans 1 : 

    - here double star or exponentiation operator 
        use for power

    so 3 * 3 * 3 or 3**3 -> means 27

    and if you do this 

    console.log(10 ** -1)
        means 1 / 10 = 0.1
*/

/* 
    Ans 2 : 
        console.log(6 + "GO"); --> output 6GO

*/

/* 
    Ans 3 : 
        var a = 2 ; 
        var b = 4 ;

        var c ;
        c = a ;
        a = b ;
        b = c ;

        console.log("value of a is :" , a);
        console.log("value of b is :" , b);
*/

/* 
    Ans 4 : 
        var a = 5 ; 
        var b = 10 ;

        a = a + b ;
        b = a - b ;
        a = a - b ;

        console.log("value of a is : " , a);
        console.log("value of b is : " , b);

*/

// 📝 interview question

// difference b/w == and === 

// eg : of double equal to
var num1 = 5 ; 
var num2 = "5" ;

console.log(num1 == num2);
// output -> true

// eg : of triple equal to
console.log(num1 === num2);
// output -> false 

/* 
    NOTE : 

    - in double equal to (==) operator
        only value will be checked

    - but in triple equal to (===) operator both
        value + data type of that value will be checked

*/