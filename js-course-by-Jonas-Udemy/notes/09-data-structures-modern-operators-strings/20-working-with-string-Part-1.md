# Working With String Part 1

- we'll see useful string methods & string is most important because we work with strings all the time in JS 
- string is case sensitive 💡💡💡

## Examples - of String & it's methods 

- Eg 1 : of accessing characters of a string 
    - we define index number inside square bracket notation just like we do in array
    - & in string , index also starts from 0
    ```js
    const plane = "A320"
    console.log(plane[0]) // output : A
    console.log('B737'[0]) // output : B737A
    ```

- Eg 2 : of `indexOf()` method
    - it used to get index number of a character of a string from left side 
    ```js
    const airline = "TAP Air Portugal"    
    console.log(airline.indexOf('r')) // output : 6
    ```
    - Eg 2.1 : of `lastIndexOf()` method
        - it used to get index number of a character of a string from the last 
        ```js
        console.log(airline.lastIndexOf('r')) // output : 6
        ```
    - `Note` : in string , a space also counted as a character 💡💡💡

- Eg 3 : string is case sensitive
    ```js
    const airline = "TAP Air Portugal"    
    console.log(airline.lastIndexOf('portugal')) // output : -1
    console.log(airline.lastIndexOf('Portugal')) // output : 8
    ```
    - we got `-1` as a output & another is `8` due to case sensitive
    - but `-1` which we got is because `portugal` is not found inside that string 

- Eg 4 : of `slice()` method 
    - it used to extract the part from the string 💡💡💡
    - it takes two arguments i.e starting index & ending index but at-least we need to define starting index 💡💡💡
        - starting index : means from where extraction will start
        - ending index : means where extraction will stop
    ```js
    const airline = "TAP Air Portugal"    
    console.log(airline.slice(4)) // output : Air Portugal 
    ```
    - `Note for string ✅` :   
        - it's hard to change the string because they're primitive dataType
        - that's why to use a string then we have to store somewhere like in a variable or in a data structure
        - so `slice()` method always return a new string means it'll not mutate/change the original string 💡💡💡 
    - Eg 4.1 : of slice() method with starting & ending indexes
        ```js
        const airline = "TAP Air Portugal"    
        console.log(airline.slice(4 , 7)) // output : Air
        ``` 
        - `Note for slice() method ✅` : 
            - if we use slice() then end value/character will not be included in the string <br>
                - means we define `7` as ending index but the character which is on 7th index will not be included 💡💡💡
            - the length of the extracted string is always going to be ending index subtract starting index <br>
                like this `7 - 4` is 3 , so 3 is the length of a string i.e `Air` 💡💡💡

    - till yet we define hard coded index number but what if we're dealing with API , so we'll see examples
    - Eg 4.2 : of slice() method without defining hard coded index 
        ```js
        const airline = "TAP Air Portugal"    
        console.log(airline.slice(0, airline.indexOf(" "))) // output : TAP
        ```
        - as we know `indexOf()` method will start extracting from left to right
    - Eg 4.3 : of slice() method with lastIndexOf() method without hard coded index number
        ```js
        console.log(airline.slice(airline.lastIndexOf(" "))) // output : Portugal
        ```
        - but before ` Portugal` output , a space also included , so we'll add 1 to remove the space like this 
        ```js
        console.log(airline.slice(airline.lastIndexOf(" ") + 1)) // output : Portugal
        ```
    - Eg 4.4 : defining negative argument as an index number inside slice() method
        - if we define starting index as negative inside slice() method then extraction will start from right to left 💡💡💡  
        ```js
        const airline = "TAP Air Portugal"    
        console.log(airline.slice(-2)) // output : al
        ```
    - Eg 4.5 : defining starting & ending indexes of slice() method
        ```js
        const airline = "TAP Air Portugal"    
        console.log(airline.slice(1, -1)) // output : AP Air Portuga
        ```
        - here we define ending negative index for seconding argument , so the last letter will not be included 

    - we need these different things to using slice() method because in different situations , we'll be using these

## Practice challenge 

- `Ques 1` : write a function that receives an airplane seat & locks to the console , whether it's a middle seat or not 
    - in small planes , B & E are middle seats
    ```js
    const checkMiddleSeat = function(seat) {

    }

    checkMiddleSeat('11B')
    checkMiddleSeat('23C')
    checkMiddleSeat('3E')
    ```
- `Ans` : checking middle seat
    ```js
    const checkMiddleSeat = function(seat) {
        const s = seat.slice(-1)
        if (s === "B" || s === "E") console.log("You got the middle seat")
        else console.log("Might you'll get")
    }

    checkMiddleSeat('11B')
    checkMiddleSeat('23C')
    checkMiddleSeat('3E')
    ```

- `said by jonas ✅` : extracting parts from a string is important 💡💡💡

## Reason : how string methods are working on a string dataType 👍

- we know that string is just primitive dataType , so why do they have methods ? & methods only be available on objects 
- `Reason` : 
    - However , JS is really smart
    - whenever we call a method on a string , JS will automatically <br>
        behind the scenes convert that string primitive to a string object with the same content <br>
        & that's why we say those functions as `methods` 
    - & this process is called boxing because it basically takes our string & puts it into a box i.e the object
    - so JS behind the scenes will do this 
        ```js
        console.log(new String("jonas")) // output : String {"jonas"}
        // & when we open this output then each letter of this string are stored with their index number like this 
        /* output of opening the string : 
            String {"Jonas"}
            0: "j"
            1: "0"
            2: "n"
            3: "a"
            4: "s"
        */
        ```
        - & inside `__proto__` , we can see all the methods 
        - & `typeof new String("jonas")` it's dataType will be object <br> 
            so this conversion is what JS does behind the scenes whenever we call a method on a string <br>
            & then when the operation/process is done then the object is converted back to a regular string primitive 💡💡💡 <br>
            & in fact all string methods return primitives
        - even we call methods in String object also like this 
            ```js
            console.log(typeof new String("jonas").slice(1)) // output : string
            ```
            - so it's back from object to a string dataType

## Extra Notes

- slice() VS substring() methods : https://twitter.com/ATechAjay/status/1543788236023087104
- empty string Vs null : https://stackoverflow.com/questions/16620354/difference-between-null-and-empty-string
