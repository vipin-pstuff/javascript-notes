// examples of data types + usage of typeof operator

// string data type
// var myName = "Teen" ;
// console.log(typeof myName) ; // or console.log(typeof(myName));

// number data type
// var myAge = 12 ;
// console.log(typeof myAge);

// boolean data type
// var isGood = true ;
// console.log(typeof isGood);

// undefined data type
// undefined means a variable doesn't have any value
// var emptyContainer ;
// console.log(typeof emptyContainer);

// BigInt & Symbol -> we'll see on ES6 topic


// 🔥 Challenge - timestamp 48 : 20 
// eg : 
/* 
    10 + "20" 
    9 - "5" -> is a bug 
    "java" + "script"  
    " " + " " 
    " " + 0  
    "Teen" - "show" -> output -> NaN 
    true + true 
    true + false 
    false + true 
    false - true 
*/

// ! NOTE :  NaN -> is very Imp
/* 
    - like you can use it in validation
    eg : 
        like we have phone number field
        and you want to check if there is any character in that 
        phone no. field

        - so it's a number or not
            so you can check by using NaN
*/

/* 📝 Interview question */
// ques - difference b/w null VS undefined 

/* 
    eg : of null

        var isAHouse = null ;
        console.log(isAHouse) ; // output -> null

    eg : of undefined

        var isABall ;
        console.log(isABall) ; // output -> undefined

    * if we want to show null then 
        we need to define null explicitly
    * but if we want to show undefined 
        then we don't need to define 
        
    * data type of null is object
        so ths is a bug
    * but data type of undefined is undefined only
        so this is not a bug
*/


/* 📝 Interview question */
// ques - what is NaN 

/* 
    - is a Not a Number
    - is a property of the global object
        - global object means we'll see when
            we discuss DOM vs BOM (browser object model)
        ! and DOM is very important
    - is a variable in global scope 
    - is not a value and datatype

    eg : 
        console.log("Teen" - "go") ;
        output -> NaN

    * so if we subtract two string which contains characters
        then we'll get NaN

    * but if we do this 
        console.log("2" - "2")
        then we'll get 0 
*/

// ✅ eg : of isNaN() function

var myPhoneNumber = 9876543210 ;
var myName = "Teen" ;

/* 
    - now as you saw many place that websites ask for
        your phone number so how we can validate / know
        that phone number is right or wrong
    
    * so for this we're gonna use isNaN() predefined function
*/

console.log(isNaN(myPhoneNumber)) // output - false 
console.log(isNaN(myName)) // output - true

/* 
    - so if we get true from isNaN() on phone number 
        then means user wrote something wrong

            and then we can do this

        if(isNaN(myPhoneNumber)) {
            console.log("Plz  enter valid phone no.") ;
        }

    - if we get false from isNaN() on phone number
        then means user wrote right thing
*/

// 🔥 Challenge - timestamp 1 : 07 : 50

/* 
    - NaN === NaN // false
    - Number.NaN === NaN // false
    - isNaN(NaN) // true
    - isNaN(Number.NaN) // true
    - Number.isNaN(NaN) // true
*/