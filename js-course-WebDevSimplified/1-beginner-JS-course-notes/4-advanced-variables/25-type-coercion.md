# type coercion / type conversion

    - very important 🔥

    - means it's a way of converting 
        one datatype of information 
        to another datatype

## types of datatypes 

    -> Primitive datatypes
        - number  -----------------------+
        - string                         |
        - boolean                        |--> these are essentially main datatypes 💡
        - null                           |
        - undefined ---------------------+  
        - BigInt
        - Symbol

    -> non-primitive datatypes
        - array
        - object 

    - so how to convert one datatype into another datatype
        eg : 
            "1"

        - this 1 number is in string type
            so we want to convert into number type
            this we'll see

## typeof operator/function ✅

    - typeof -> should be all in small letter
    - use it to check the datatype of a variable 
        means which kind of data has inside a variable
        according to that typeof operator -> tells datatype

    - it can be used as operator or a function form
        depends on situation
        but mostly we use it as operator

## types of conversion

    - two types of conversion
        - explicit type conversion 
        - implicit type conversion 

## explicit type-conversion ✅

    - explicit type conversion means 
        converting data from string type to integer type 
        manually/forcefully/explicitly & vice versa 💡
    
    - explicit type conversion are : 

        -> parseInt() function 
        -> parseFloat() function 
        -> toString() method 
        -> using + unary plus operator

## parseInt() function ✅

    - is a function not a method
    - used to convert string float/integer/whole number type into integer type only
    - it will not convert string float number type into float number 
    - parseInt -> should be written in camelCase form

    eg : convert string type into integer type by using parseInt() function ✅

        let a = "1"
        console.log(parseInt(a))
        console.log(typeof parseInt(a))

        // output : 1
                    number

        - now here "1" which is in string type 
            become into integer type

        - so this is called explicit type conversion
            means we're forcefully converting string type into integer type 💡💡

        NOTE : 
            - in JS , datatype of float or integer/whole number will be number only 💡 

    eg : converting string type number into float type by using parseInt() function ✅

        let a = "1.3"
        console.log(parseInt(a))
        console.log(typeof parseInt(a))

        // output : 1
                    number

        NOTE : for parseInt() function ✅
            - so parseInt() function will convert string float or string integer/whole number
                into integer type only 
            - parseInt() function will not convert string float number into float type

            - so to convert string type float number into float type 
                then use parseFloat() function 

## parseFloat() function ✅

    - is used convert string float number type into float number 💡

    eg : of parseFloat() function ✅

        let a = "1.3"
        console.log(parseFloat(a))
        console.log(typeof parseFloat(a))
        
        // output : 1.3
                    number

    NOTE : for parseInt() & parseFloat() functions ✅

        - parseInt() & parseFloat() functions 
            will convert string type into integer/number type only

        - so in JS , where that number is in float/decimal or integer/whole number
            both has integer/number only

## toString() method ✅

    - is a method 
    - it should be written in camelCase form
    - used to convert integer/number/whole number or float/decimal number into string type
    //OR
    - used to convert any number (whether is a integer or float number) into string type 💡

## unary plus operator ✅

    - + -> used to convert only string or boolean type or empty string into integer datatype
        //OR
        -> used to convert string number type into integer type 💡

    eg : 
        let a = 1
        let b = -1

        console.log(+x);
        // output: 1

        console.log(+y);
        // output: -1

        console.log(+''); // empty string means false because empty string is falsy value
        // output: 0

        console.log(+true); // boolean value
        // output: 1

        console.log(+false); // boolean value
        // output: 0

        console.log(+'hello'); 
        // output: NaN 
        - we got NaN because combination of characters inside string can't be converted into
            integer type 

    eg : of string number type into integer type ✅

        let str1 = "1"
        let str2 = "21"

        console.log(typeof +str1) // using unary + operator
        console.log(typeof +str2) // using unary + operator   
        console.log(+str1 + +str2) // using unary + operator
        
        // output : number
                    number
                    22
        

## implicit type conversion ✅

    - means the computer/JS is implicitly/automatically 
        convert string type into integer type & vice versa
    - and we don't need to type conversion

    eg 1 : 

        let a = 1
        const b = "hello"

        console.log(b + a) // implicit type conversion done by JS automatically
        //OR
        console.log(b + a.toString()) // explicit type conversion done by programmer manually

        // output : hello1

    eg 2 : 

        let a = 1 
        const b = "1"
        console.log(b == a)

        // output : true

        - because JS converting them into implicitly to exact same type

    - now JS do weird stuff if we do this 

    eg 3 : weird stuff done by JS ✅

        let a = 1 
        const b = "hello" 

        console.log(b - a)

        // output : NaN

        - so here we did subtraction 💡
        - so now "b" variable become string to number type
            and then subtraction started 💡
        - so now output we got -> NaN (not a number) 💡
        - because here value of "b" variable is not a number
            it's a combination of characters inside a string 💡

    eg 4 : important example ✅

        let a = 1
        const b = "3"
        console.log(b - a)

        // output : 2   

        - here we got output without any error 
            because JS converted "b" variable into integer type 💡
        - now value of "b" variable is not a string it's a integer
            so that's why subtraction done successfully 💡

    eg 5 : concatenation done b/w integer number & string number ✅

        - important example 🔥

        let a = 1
        const b = "3"
        console.log(a + b) 

        // output : 31

        - here we didn't got 4 as a output 
        - because whenever we do addition 
            b/w string type value & integer/float type value
            then they gets concatenated each other
        - and here implicit type conversion not happen

        - so that's why we need to convert value of "b" variable 
            into integer type explicitly/manually
            to do addition like this 

        console.log(parseInt(b) + a) // doing explicit type conversion  

        // output : 4

## suggestion by kyle ✅

    - important to know 🔥

    - it's really important when we're working 
        with JS 
    - then we have to understand it what exactly datatype
        of all the variables have 💡

    - so if we have string & numbers 
        & we're mixing them together
        then we can get weird stuff 💡

    - & if we try to add together different strings which contains different stuff as a value
        & concatenate them , adding , subtracting , doing equalto , etc.. 💡
    - then important to know that what datatype of variable holds value 
        & do we need to swap/change into another datatype or not 💡
        by using toString() method 
                 parseFloat() function 
                 parseInt() function 
    - so that we don't get error or weird bug
        due to type conversion/coercion 💡

