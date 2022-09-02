# How Passing Arguments Works Value vs. Reference

- here we'll see how passing arguments works Value vs. reference in context of only function 💡💡💡
- we'll see primitives dataTypes vs. object dataTypes means primitive types vs. Reference types
- & this also applied to functions because it's supper important that how primitives & objects or <br>
    pass by value & pass by reference works in the context of functions 💡💡💡

## Examples - of Value vs. Reference with function

- Eg 1 : of Value vs. Reference
    ```js
    const flight = "LH234"
    const jonas = {
        name: 'Jonas Schmedtmann' ,
        passport: 24739479284
    }

    const checkIn = function(flightNum, passenger) {

    }

    checkIn(flight, jonas)
    ```
    - now let's say flight number is changed inside the function 
        - `best practice ✅` : don't change the value of parameters of a function  
        - but we're changing to understand the concept 
    - Eg 1.1 : changing value of parameters that function 
        ```js
        const flight = "LH234"
        const jonas = {
            name: 'Jonas Schmedtmann' ,
            passport: 24739479284
        }

        const checkIn = function(flightNum, passenger) {
            flightNum = 'LH999'
            passenger.name = 'Mr. ' + passenger.name 

            console.log(flightNum) // output : LH999

            // assume that 24739479284 this passport we got from an API
            if (passenger.passport === 24739479284) {
                alert('Check in')
            } else {
                alert('Wrong passport!')
            }
        }

        checkIn(flight, jonas)
        console.log(flight) // output : LH234
        console.log(jonas) // output : {name: 'Mr. Jonas Schmedtmann' , passport: 24739479284}
        ```
        - so here we can see that we changed the value of `flight` constant variable inside the function <br> 
            but when we print `flight` constant variable outside the function scope then value of it remain same <br>
            because string & other primitive dataTypes doesn't change 
        - but when we update the `jonas` object inside the function scope <br>
            & then when we print the `jonas` object outside the function scope then we got updated output <br>
            because reference dataTypes works based on memory address 

    - `working of above code` : 
        - `in primitive dataTypes` : 
            - when we pass the `flight` constant variable as an argument of `checkIn()` function <br> 
                then we just only copied the original value of that `flight` constant global variable <br>
                means we're writing like this `const flightNum = flight`
            - so primitive dataTypes doesn't work like reference dataTypes 
            - that's why when we change the value of `flightNum` parameter of a function <br>
                then it doesn't change/affect that `flight` constant global variable <br>
                because `flightNum` & `flight` variables are completely different then each other
        - `in reference dataTypes` : 
            - when we pass the `jonas` object as an argument while calling that function <br>
                then means we passed the reference of that object i.e `jonas` in the memory heap (not the value of that object) <br>
                like doing this `const passenger = jonas` 
            - & both object point to the same object in memory that's why if we change any one of the object <br>
                then automatically another object will change
            - so actually we're not changing the memory heap of that `jonas` object , we're updating <br>
                by doing this `passenger.name = 'Mr. ' + passenger.name` inside that memory heap of that object
            - because both object are pointing/referring to the same memory heap

- we need to be careful with this behavior because the objects behave this way when we passed to functions <br> 
    can have unforeseeable/unpredictable consequences in large code bases when we're working with multiple developers <br>
    let's see the real life example to prepare yourself these sort of problems
- Eg 2 : real life problem of reference dataTypes with functions ✅
    ```js
    const flight = "LH234"
    const jonas = {
        name: 'Jonas Schmedtmann' ,
        passport: 24739479284
    }

    const checkIn = function(flightNum, passenger) {
        flightNum = 'LH999'
        passenger.name = 'Mr. ' + passenger.name 

        // assume that 24739479284 this passport we got from an API
        if (passenger.passport === 24739479284) {
            alert('Checked in')
        } else {
            alert('Wrong passport!')
        }
    }

    const newPassport = function(person) {
        person.passport = Math.trunc(Math.random() * 1000000000)
    }

    // let's say we booked the flight with original passport number i.e 24739479284

    checkIn(flight, jonas) // call the alert() function
    newPassport(jonas) // then change the passport
    checkIn(flight, jonas) // then again call the alert() function
    // ultimately output : undefined
    ```
    - here we have two functions manipulating the same object which is creating a problem <br>
        means `newPassport(jonas)` here we change the passport of `jonas` object <br> 
        & then again we pass the jonas object i.e `checkIn(flight, jonas` <br>
        & then we're checking the passport inside checkIn function
    - so how the interaction of different functions with the same object can create some issues 💡💡💡

- `in programming , there are 2 terms used all the time when dealing with functions ✅` : 
    - `first` : pass by value  
    - `second` : pass by reference   
    - JS doesn't have pass by reference , JS only have pass by value even though it looks like it's passing by reference <br>
        so there are languages like C++ , etc where we can pass a reference to any value instead of the value itself <br>
        & this works even with primitive dataTypes , so you could pass a reference to the value of 5 & then the original value <br>
        & then the original value outside of the function would be changed & this is called pass by reference 
    - but JS doesn't have pass by reference <br>
        - to remove the confusing in your mind , for objects , we do pass by reference <br>
            so the memory address of the object. However , that reference itself is still a value
        - means it's simply a value that contains a memory address . <br>
            so basically we pass a reference of that object to the function, but we actually don't pass by reference <br>
    - means in JS , we're actually passing memory address as an object variable name , <br>
        so we're kindof using pass by reference concept <br>
        but in C++ , etc , we're actually pass the memory address through `pointer` and `&` ampersand concept <br>
        which is the actual example of pass by reference 💡💡💡
