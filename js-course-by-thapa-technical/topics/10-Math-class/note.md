
# Math object

    - contains some very important method and properties 🔥
    - used to allows to perform mathematical task on numbers

## properties + methods of Math object

    -> PI property ✅

        eg : 
            console.log(Math.PI)

        NOTE : make sure that "M" letter should be capital of Math object
                whenever you use it's properties or methods

    -> round() method ✅

        - very important method 🔥

        eg : 
            let num = 10.255
            console.log(Math.round(num))
            // output : 10 

        NOTE : 
            - if number is let's say 10.255
                then round will be 10 because after point value 
                that just one number i.e 2 is less than 5
                that's why we got 10

            - but if number is let's say 10.599
                then round will be 11 because
                after point value is 5 that's why 

    -> pow() method ✅  

        - Math.pow(x , y) returns the value of x to the power of y

        eg: 
            console.log(Math.pow(2, 3))
            // OR
            console.log(2**3) // here we use exponential operator
            // output : 8

            NOTE : just understand that 2 to the power of 3

    -> sqrt() method ✅

        eg : 
            console.log(Math.sqrt(25))
            // output : 5

        eg : if we give random number to find square root

            console.log(Math.sqrt(66))
            // output : 8.1240

            - here 66 doesn't have square root
                still sqrt() method gave

    -> abs() method ✅

        - Math.abs(x) returns the absolute (positive) value of x
        - abs -> means absolute 
        - use if we want only positive number even if we gave negative number
            whether number is a decimal or not
        - very important method 🔥

        eg :
            console.log(Math.abs(-55))
            console.log(Math.abs(-55.5))
            console.log(Math.abs(-855))

            // output : 55
                        55.5
                        855

        eg : useful example + important 🔥

            console.log(4-6)
            // output : -2

            - here as you can see we got -2
                that's right but we don't want

            - so here come abs() method
                console.log(Math.abs(4-6))

    -> ceil() method ✅

        - is like round() method
        - difference is if we gave any number like 1
            after point then ceil() method increment it by 1
            - but if we don't give any value after point
                then number will remain as same

        eg : giving number after decimal point

            console.log(Math.ceil(4.51))
            // output : 5

            console.log(Math.ceil(4.1))
            // output : 5

            - here in this you can see after point 1 is there
                which is less than 5 but still we got 5

            - so round() method follow that rule but
                ceil() method don't follow

            console.log(Math.ceil(99.0))
            // output : 99

            - here after point is just 0 then we got that number only

            console.log(Math.ceil(99.01))
            // output : 100 

            - here after point is 0 and 1 also
                then we got 100

    -> floor() method ✅

        - opposite of ceil() method
        - Math.floor(x) returns the value of x rounded down to its nearest integer

        eg :    
            console.log(Math.floor(4.7))
            // output : 4
            console.log(Math.floor(99.9))
            // output : 99

            NOTE : here floor() method give number before decimal point
                    but if we have negative number then we'll get decrement number 

            console.log(Math.floor(-99.9))
            // output : -100
            
            - interview questions come b/w ceil() and floor() method
                and b/w round() , ceil() and floor() method

    -> min() method ✅

        - used to find the lowest value in a list of arugments

        eg :

            console.log(Math.min(0 , 160 , 30 , 23, -5 , -200))
            // output : -200

    -> max() method ✅

        - used to find the maximum value in a list of arguments

        eg :
            console.log(Math.min(0 , 160 , 30 , 23, -5 , -200))
            // output : 160

    -> random() method ✅

        - very very important 🔥🔥
        - we use this most of the time 🔥
        - returns a random number b/w 0 (inclusive) and 1 (exclusive)

        eg : 
            console.log(Math.random())
            // output : 0.6567779192442054

            - so we'll get numbers 0 and after point would 
                be random number

        eg : 
            console.log(Math.random() * 10)
            // output : 3.1868196233212753

            - we'll get output b/w 0 to 9 because we mutiple random numbers with 10
                total would be 10 numbers
                but 10 number would be exclusive

            - but we just want numbers before decimal point

        eg : getting numbers before decimal point

            console.log(Math.floor(Math.random() * 10))
            // output : 7

            - here we'll get numbers b/w 0 to 9
                randomly without any decimal point

            - because floor() method doesn't count numbers after decimal point
                it just give only number which is before decimal point

    -> trunc() method ✅
        
        - used to get number in integer form not in decimal point
            whether it's negative or positive
        - return number which are decimal point
            doesn't matter what number is after decimal point
        - doesn't see number which are decimal point

        eg :
            console.log(Math.trunc(4.6))
            // output : 4
            console.log(Math.trunc(-99.1))
            // output : -99

            - here trunc() method doesn't see what number is after decimal point

            console.log(Math.floor(-99.1))
            // output : -100 

            - floor() method see what number is after decimal point
                if we have negative number





