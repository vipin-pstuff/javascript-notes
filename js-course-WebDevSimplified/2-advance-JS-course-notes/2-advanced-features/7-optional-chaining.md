# optional chaining 

- it's similar like null coalescing but much more powerful 
- this feature used a lot in js & reactjs 
- is a short way syntax to check deep nested properties of object or Json or array 💡💡💡
- is extremely useful when accessing deeply nested object values 💡💡💡

- is a syntax to do multiple checks whether that thing exist or not 💡💡💡
    - & if that thing exist (means true) then we'll get that as a output otherwise we'll get undefined 💡💡💡 
    - instead of doing multiple checks through normal way by using `&&` or `||` logical operators

## what optional chaining does ✅

- it used to check deep nested properties of object or Json or array or function (especially objects & Json)
    - by using `?.` syntax 
    - instead of using normal way by using `&&` or `||` or both logical operators 💡💡💡

- it checks whether that property exist or not inside that object 
    - if that property exist inside that object , then return the value of that property as a output
    - but if that property doesn't exist then print `undefined` as a output 💡💡💡

## why we need optional chaining ✅

- Eg 1 : `without optional chaining`  
    ```js
    const userDetails = {
        name : "Steve" , 
        age : 25 , 
        address : undefined 
    }

    function printStreet(person) {
        // without optional chaining 
        console.log(person.address.street)
    }

    printStreet(undefined)
    // output : 'address' of undefined 
    ```

- Eg 2 : `without optional chaining`  
    ```js
    const userDetails = {
        name : "Steve" , 
        age : 25 , 
        address : undefined 
    }

    function printStreet(person) {
        // without optional chaining 
        if (person && person.address) {
            console.log(person.address.street)
        }
    }

    printStreet(userDetails)
    // output : now we're not getting any error 
    ```

- Eg 3 : `without optional chaining`  
    ```js
    const userDetails = {
        name : "Steve" , 
        age : 25 , 
        address : {
            street : "123 Main St" 
        } 
    }

    function printStreet(person) {
        // without optional chaining 
        if (person && person.address) {
            console.log(person.address.street)
        }
    }

    printStreet(userDetails)
    // output : 123 Main St
    ```

- Eg 4 : `without optional chaining` with short circuiting  
    ```js
    const userDetails = {
        name : "Steve" , 
        age : 25 , 
        // address : {
        //    street : "123 Main St" 
        //} 
    }

    function printStreet(person) {
        console.log(person && person.address && person.address.street) // doing short circuiting 
    }

    printStreet(userDetails)
    // output : undefined
    ```
    
    - so here `person && person.address && person.address.street`
        - this short circuiting means if `person` contain any falsy values (especially null or undefined)  
        - then short circuiting will happens & then this `person.address && person.address.street` will not run except `person`
        - but if `person` is truthy value then next condition will be checked & so on...

    - `Note✅` : why optional chaining introduce 
        - so here we can see that `person && person.address && person.address.street`
        - this line of code is very ugly to read
        - & what if we want to check more properties of that object then we need to put many conditions also 💡💡💡 
        - that's why optional chaining came to make multiple checks small in syntax form

## syntax of optional chaining 

- using `dot operator` normal syntax to access the properties of an object
    ```js
    obj.a.b // accessing deep nested property of an object using dot operator 
    ```

- using `optional chaining` syntax to access the properties of an object
    ```js
    obj?.a?.b // accessing deep nested property of an object using optional chaining 
    ```

- syntax of optional chaining → `?.` 💡💡💡
  - first we put question mark & then dot

## example of optional chaining ✅

- Eg 1 : using `dot operator` normal syntax to do multiple condition checks through the properties of an object 
    ```js
    const userDetails = {
        name : "Steve" , 
        age : 25 , 
        address : {
            street : "123 Main St" 
        } 
    }

    function printStreet(person) {
        // without optional chaining 
        if (person && person.address && person.address.street) {
            console.log("got it")
        }
    }

    printStreet(userDetails)
    // output : got it
    ```

- Eg 2 : using `optional chaining` syntax to do multiple condition checks through the properties of an object
    ```js
    const userDetails = {
        name : "Steve" , 
        age : 12 , 
        //address : {
        //    street : "123 Main St" 
        //} 
    }

    function printStreet(person) {
        // using optional chaining 
        console.log(person?.address?.street)
    }

    printStreet(userDetails)
    // output : undefined
    ```

    - `Note✅` : what does `person?.address?.street` mean
        - that means we're accessing street property of address object (which is property of person object) through condition based 💡💡💡

    - output : we got undefined 
        - because we're accessing the `street` property of that object through optional chaining 💡💡💡
        - which doesn't exists in that object

    - so optional chaining syntax is checking 
    - `Note` : what `person?.address?.street` means
        - so here first `person` will be checked 
            - if it's false then further things won't be checked & then we'll get `undefined` but if it's true 
            - then whatever inside that object we'll get that 💡💡💡
        - then `address property of person object` will be checked 
            - if it's true then we'll get the things whatever inside the address property 💡💡💡  
            - & if it's false then further things won't be checked by optional chaining syntax 
            - & then we'll get `undefined` 
        - then `street property of address of person object` will be checked
            - if it's true then we'll the thing whatever inside the street property otherwise we'll get undefined like this 

    ```js
    const userDetails = {
        name : "steve" ,
        age : 12 ,
        address : {}
    }

    function printStuff(person) {
        // using optional chaining
        console.log(person?.address)
    }
    
    printStuff(userDetails)
    // output : {}
    ```

    - so `optional chaining` syntax checks & return undefined or value of that property based on true or false checks 💡💡💡
        
- Eg 3 : `using optional chaining` syntax with functions ✅
    ```js
    const userDetails = {
        name : "steve" ,
        age : 12 ,
        address : {
            street : "123 Main St" ,
        } ,
        sayHi() {
            console.log("Hi")
        }
    }

    function printStuff(person) {
        // using optional chaining with a method of an object 
        console.log(person?.sayHi())
    }
    
    printStuff(userDetails)
    // output : Hi
    ```

    - but if comment down the sayHi function like this 
        ```js
        const userDetails = {
            name : "steve" ,
            age : 12 ,
            address : {
                street : "123 Main St" ,
            } ,
            //sayHi() {
            //    console.log("Hi")
            //}
        }

        function printStuff(person) {
            // using optional chaining with a method of an object 
            console.log(person?.sayHi())
        }
        
        printStuff(userDetails)
        // output : error will come
        ```
    - then we'll get an error i.e `person?.sayHi is not a function`
    - but if we do this 
        ```js
        const userDetails = {
            name : "steve" ,
            age : 12 ,
            address : {
                street : "123 Main St" ,
            } ,
            //sayHi() {
            //    console.log("Hi")
            //}
        }
        function printStuff(person) {
            // using optional chaining with a method of an object 
            console.log(person?.sayHi?.())
        }
        
        printStuff(userDetails)
        // output : no error will come
        ``` 
    - now no error will come 
    - `Note✅` : what does this `person?.sayHi?.()` mean 
        - means `person` object will checked 
        - & then if inside of `person` object has `sayHi` function then call it through that parentheses `()`
        - but if inside of `person` object doesn't have `sayHi` function then immediately exit out 💡💡💡
        - means first `optional chaining` will check that do we have `sayHi` function inside of that object or not
        - so if we have that `sayHi` function then execute the further things i.e calling that function 
        - but if we don't have it inside that object then stop here only → `person?.sayHi` 💡💡💡 

- Eg 4 : `using optional chaining` syntax with arrays ✅
    ```js
    const userDetails = {
        name : "steve" ,
        age : 12 ,
        address : {
            street : "123 Main St" 
        } ,
        hobbies : ["Bowling" , "Weight Lifting"]
    }

    function printHobbyOne(person) {
        // using dot operator (normal way of accessing)
        console.log(person.hobbies[0])
    }
    
    printStuff(userDetails)
    // output : Bowling
    printStuff(undefined) 
    // output : error will come
    ```

    ```js
    const userDetails = {
        name : "steve" ,
        age : 12 ,
        address : {
            street : "123 Main St" 
        } ,
        hobbies : ["Bowling" , "Weight Lifting"]
    }

    function printHobbyOne(person) {
        // using optional chaining syntax of accessing
        console.log(person?.hobbies[0])
    }
    
    printStuff(undefined) 
    // output : undefined
    ```

    - but if commend down the `hobbies` property like this 
        ```js
        const userDetails = {
            name : "steve" ,
            age : 12 ,
            address : {
                street : "123 Main St" 
            } ,
            //hobbies : ["Bowling" , "Weight Lifting"]
        }

        function printHobbyOne(person) {
            // using optional chaining syntax of accessing
            console.log(person?.hobbies[0])
        }
        
        printStuff(undefined) 
        // output : error will come 
        ```
    
    - but as we did earlier like this 
        ```js
        const userDetails = {
            name : "steve" ,
            age : 12 ,
            address : {
                street : "123 Main St" 
            } ,
            //hobbies : ["Bowling" , "Weight Lifting"]
        }

        function printHobbyOne(person) {
            // using optional chaining syntax of accessing
            console.log(person?.hobbies?.[0])
        }
        
        printStuff(userDetails) 
        // output : undefined 
        ```

    - so here we didn't got the error 
    - `Note✅` : what does `person?.hobbies?.[0]` mean
        - means first `optional chaining` is checking `person` object 
        - & then inside `person` object , do we have `hobbies` property or not
        - & then getting value of 0(zero) index of `hobbies` property 
        - so right now we don't have `hobbies` property inside `person` object that's why we got undefined

## said by kyle      

- if anytime we're worrying about null or undefined
    - just add the `?.` before accessing that thing 
    - due to this , immediately problem will be solved
    - means we're checking before accessing any value 💡💡💡

- due to `optional chaining` , we don't need to do that normal way of checking things 

- before using this feature , first check the browser supports

## --------------- Extra notes on optional chaining ---------------

- videos 
    - https://www.youtube.com/watch?v=tM0Mm4eE6Z4&ab_channel=THMJ
    - https://www.youtube.com/watch?v=7k_FNNGhGiQ&ab_channel=EatCodeRepeat
    - https://www.youtube.com/watch?v=NyDZwFMbGyY&ab_channel=RahulMishra
    - https://www.youtube.com/watch?v=3yZuXLjWPjU&ab_channel=NishaSingla

- blogs 
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    - https://javascript.info/optional-chaining
    - https://www.freecodecamp.org/news/javascript-optional-chaining/
    - https://daily.dev/blog/optional-chaining-in-javascript-what-is-it-and-how-to-use-it
    - https://www.freecodecamp.org/news/javascript-optional-chaining-explained/
    - https://www.javascripttutorial.net/es-next/javascript-optional-chaining-operator/
