# Working with string Part 2

- here we'll deal with cases of a string 

## Examples - of String & it's methods & properties  

- Eg 1 : of `toLowerCase()` method
    ```js
    const airline = "TAP Air Portugal"
    console.log(airline.toLowerCase()) // output : tap air portugal
    ```
    
- Eg 2 : of `toUpperCase()` method
    ```js
    const airline = "TAP Air Portugal"
    console.log(airline.toUpperCase()) // output : TAP AIR PORTUGAL
    ```

- Eg 3 : capitalization of a string word 
    ```js
    const passenger = "jOnAS" // we want like this -> Jonas
    const passengerLower = passenger.toLowerCase()
    const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
    console.log(passengerCorrect) // output : Jonas
    ```

- Eg 4 : of `trim()` method with `real life example` i.e like checking/comparing emails of email input field ✅
    - `trim()` method will only remove white spaces of both side of that word 
        - & it's also consider this `\n` as white space 💡💡💡
        - but it'll not remove the white spaces which is b/w the word itself 💡💡💡
    ```js
    const email = 'hello@jonas.io' // here at first time , user is created this email
    const loginEmail = '  Hello@Jonas.Io  \n' // & when time comes to login then user wrote this way
    ```
    - so here still `  Hello@Jonas.Io  \n` this email is correct , so we just need to validate the email
    - `STEP 1` : so first step is to convert that login email in lower case
        ```js
        const email = 'hello@jonas.io' 
        const loginEmail = '  Hello@Jonas.Io  \n'

        const lowerEmail = loginEmail.toLowerCase()
        const trimmedEmail = lowerEmail.trim()
        console.log(trimmedEmail) // output : hello@jonas.io
        ```
        - instead of write these lines of code in short way we can write this way also 
            ```js
            const normalizedEmail = loginEmail.toLowerCase().trim()
            console.log(normalizedEmail) // output : hello@jonas.io
            ```
    - `STEP 2` : checking to return either true or false    
        ```js
        console.log(email === normalizedEmail) // output : true
        ```

- Eg 5 : of `replace()` & `replaceAll()` method
    - they used to remove/replace that thing from a string by something 
    - both methods takes two arguments 
        - first : which thing we want to replace from a string
        - second : what we want to put in place of that removing thing from a string  
    ```js
    const priceGB = "288.97$"
    const priceUS = priceGB.replace('$', '%')
    console.log(priceUS) // output : 288.97%
    ```
    - we can do chaining of replace() string method
    - Eg 5.1 : of replace() method with multiple same words
        ```js
        const announcement = "All passengers come to boarding door 23. Boarding door 23!"
        console.log(announcement.replace('door', 'gate'))
        // output : All passengers come to boarding gate 23. Boarding door 23! 
        ```
        - `Note of replace() method` : it will always start replacing that thing from left to right 💡💡💡
        - here only starting `door` text removed but next `door` text is not removed 
    - Eg : 5.2 : of `replaceAll()` method
        - it will remove all the duplicate/same words from a string 
        ```js
        const announcement = "All passengers come to boarding door 23. Boarding door 23!"
        console.log(announcement.replaceAll('door', 'gate'))
        // output : All passengers come to boarding gate 23. Boarding gate 23! 
        ```
        
- Eg 6 : 3 methods which return boolean values as a output 
    - `includes()` : takes 1 argument to check whether that thing exist inside the string or not  
        - & returns boolean values based on that 
        ```js
        const plane = 'A320'
        console.log(plane.includes('A320')) // output : true
        ```
    - `startsWith()` : takes 1 argument to check whether that thing starts based on the argument in the string or not
        ```js
        const plane = 'A320'
        console.log(plane.startsWith('T')) // output : false
        ```
    - `endsWith()` : takes 1 argument to check whether that thing ends based on the argument in the string or not
        ```js
        const plane = 'A320'
        console.log(plane.startsWith('T')) // output : false
        ```
    - Eg 6.1 : checking by using these methods
        ```js
        const plane = 'Airbus A320neo'
        if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
            console.log("Part of the NEW ARirbus family")
        }
        ```

## Challenge Time 

- `Best Practices ✅` : whenever we received inputs from the user 
    - then usually we always start by putting everything in lower case <br>
        which makes a lot easier to compare with something 💡💡💡
    - because the user can give input in uppercase or lowercase or in both cases , so we don't know what they're inputting <br> 
        that's why we're converting all in lowercase to check easily 

- check the baggage of passengers
    ```js
    const checkBaggage = function (items) {
        const baggage = items.toLowerCase()
        if (baggage.includes('knife') || baggage.includes('gun')) {
            console.log("You're NOT allowed on board")
        } else {
            console.log("Welcome aboard!")
        }
    }

    checkBaggage('I have a laptop , some Food and a pocket Knife')
    checkBaggage('Socks and camera')
    checkBaggage('Got some snacks and a gun for protection')
    ```
