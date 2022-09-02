# symbols

- symbols is a newer feature added in JS
- is a primitive data type like boolean , string , etc ✔️
- this feature we won't use very often
  - but there are specific usecases where `Symbol() object` are really important 💡💡💡
  - so it's important to understand
- `prerequisite` : must know about object 

## About Symbol() 

- it is a `built-in object` whose constructor returns a `symbol` as a datatype 💡💡💡
- datatype of `Symbol()` is Symbol() but `object & array` has object datatype 💡💡💡
- takes only one argument 💡💡💡
- `S` letter of Symbol() should be capital

## How to use Symbol() object 

- Eg : of `Symbol() class object`
    ```js
    const sym = Symbol()
    console.log(sym)
    // output : Symbol()
    ```

    - `Note✅` : when we create object of `Symbol() object`
        - then we don't use `new` keyword because `Symbol()` is not a constructor or class 
        - it's a object that's why we don't use `new` keyword before it 💡💡💡

## how Symbol() object are different itself ✅

- Eg : of `checking how Symbol() is different than itself`
    ```js
    const sym = Symbol("Name")
    console.log(sym)
    // output : Symbol(Name)
    ```
    - here we can see that `Name` is printed out inside Symbol
        - & `Name` is a `description` of that symbol i.e `sym` variable 💡💡💡
        - & whenever we give value or description inside Symbol() then give inside the double quotes 💡💡💡
    - but this → `Name` key/identifier has no impact on actual code itself means 
    - if we create two Symbol() with exact that same `Name` key/identifier inside of them like this 
    ```js
    const sym1 = Symbol("Name")
    const sym2 = Symbol("Name")
    console.log(sym1)
    console.log(sym2)
    /* output : Symbol(Name)
                Symbol(Name)
    */
    ```
    - so here both are looking same but they're `actually different each other` if we check like this 💡💡💡
    ```js
    const sym1 = Symbol("Name")
    const sym2 = Symbol("Name")
    console.log(sym1)
    console.log(sym2)
    console.log(sym1 === sym2) // checking if both Symbol() are same each other or not
    /* output : Symbol(Name)
                Symbol(Name)
                false
    */
    ```
    - so both are different each other doesn't matter even if we use `==` double equalsto 
    - `Note 🔥` : about Symbol()
        - each particular Symbol() is always unique than other Symbol() 
        - means no other Symbol() will be the same as that Symbol()
        - means that's guaranteed to be unique , If we create two symbols with the same description they will have different values
        - Symbols are often used to add unique property keys to an object 
            - that won't collide with keys any other code might add to the object, 
            - and which are hidden from any mechanisms other code will typically use to access the object.
            - That enables a form of weak encapsulation, or a weak form of information hiding 💡💡💡

- `Why we use Symbol() ✅` 
    - it used to create like a private variable on an object
    - & it's not quite private but it allows us to add different variables to an object
    - & Symbol() not gonna clash with any of the keys of that object
    - & they're gonna be invisible to everyone 💡💡💡

## Example - Symbol() & normal object ✅

- Eg : Symbol() & normal object 
    ```js
    const sym1 = Symbol("Name")
    const person = {
        age : 12 , 
        [sym1] : "Teen"
    }

    console.log(person)
    // output : {age: 12 , Symbol(Name) : "Teen" }
    ```
    - `imp Note 🔥` : using & accessing a symbol from inside an object  
        - if we want to use or insert/create/add that symbol inside an object then always use square bracket notation 
        - & to access that symbol (to see the value of it) from outside/inside an object then use square bracket notation 
        - `Note` : we can't use `dot operator` to access that symbol otherwise `undefined` will come 💡💡💡 
    ```js
    const sym1 = Symbol("Name")
    const person = {
        age : 12 , 
        [sym1] : "Teen" 
    }

    console.log(person.sym1) // output : undefined
    console.log(person[sym1]) // output : Teen
    ```
    - it's kindof like a destructure

- Eg 1 : if we loop through an object to see whether we'll get that symbol or not
    ```js
    const sym1 = Symbol("Name")
    const person = {
        age : 12 , 
        [sym1] : "Teen"
    }

    // console.log(person)

    Object.entries(person).forEach(([key , value]) => {
        console.log(key , value)
    })
    // output : age 12
    ``` 
    - here we can see that only `age` key/property & it's value printed out 
    - & even if we use different kinds of for loop on `person` object then still that `symbol` will not be printed like this 
        ```js   
        let sym1 = Symbol("Name")
        let person = {
            age : 12 , 
            [sym1] : "Teen"
        }

        for(let item in person) {
           console.log(item)
        }
        // output : age
        ```

    - & if we stringify() this object to see whether still we'll get that symbol or not 
    ```js
    const sym1 = Symbol("Name")
    const person = {
        age : 12 , 
        [sym1] : "Teen"
    }

    //console.log(person)
    console.log(JSON.stringify(person))
    // output : {"age" :  12}
    ``` 
    - here still only the `age` property gets converted into stringified

- `imp Note🔥` : `why we're not getting that symbol (after loop through & stringified) `  
    - because a symbol always be hidden 
    - we can't access a symbol through these methods of object i.e `Object.keys()` or `Object.getOwnPropertyNames()` 💡💡💡
    - we can only access all the symbols which are assigned/defined inside an object through this method of `Object` class i.e `getOwnPropertySymbols()` 💡💡💡
    ```js
    const sym1 = Symbol("Name")
    const person = {
        age : 12 , 
        [sym1] : "Teen"
    }

    console.log(Object.getOwnPropertySymbols(person)) // accessing all the symbols that we have in js page
    // output : we'll get all the symbols which are used in that object , so output : [Symbol(Name)]  
    ```

## usecase of Symbol() ✅

- Eg 1 : while create a library 
    - `said by kyle✅` : when `Symbol()` can be useful
    - so if we're making a library & we want to hide away some certain functionality
    - then `Symbol()` are sometimes great way to hide 
    - & if we just have some internal implementation details that aren't important for the other user
        - that's using our library to see
        - then in this situation we can use `Symbol()` to hide that important thing

- Eg 2 : `never conflict if we have same key of an object & same description name of that symbol`
    ```js
    const sym1 = Symbol("name")

    const person = {
        age : 12 ,
        name : "Job" , 
        [sym1] : "Steve"
    }

    console.log(person[sym1]) // output : Steve
    console.log(person)
    // output : {age: 12, name: "Job", Symbol(name): "Steve"}

    ```
    - so here we can see that we have `name` key of an object 
        - & we also have symbol which has description `name` , which we're using it as key inside that object also
        - & we also got output without an error 💡💡💡
        - because each `Symbol()` are always be unique & due to this we don't ever run into any conflicts
        
    - so `Symbol()` would be great if we're creating a library & we need to modify an object
        - but we don't know what other modifications might happen to that object in future
        ```js
        const sym1 = Symbol("name")

        // advantages of using symbol 
        const person = {
            age : 12 ,
            name : "Job" , 
            [sym1] : "Steve"
        }

        console.log(person)
        ```
        - here if we want to add a `name` key/property inside an object 
            - then we can use a symbol for it & if another library or a different piece of code also modifies that object
            - then changes/modifications will not override that symbol 💡💡💡
            
        - so instead of doing like this 
            ```js
            const sym1 = Symbol("name")

            const person = {
                age : 12 ,
                LIBRARY_NAMESPACE_name: "Job", // don't use this way , symbol() would be great in this situation
                name : "Job" , 
                [sym1] : "Steve"
            }

            console.log(person)
            ```
            - so `LIBRARY_NAMESPACE_name: "Job",` here actual `name` used after those two words
                - & this is how most of the people do 
                - but this is cumbersome to read & looking ugly
                - so we can use `Symbol()` to make enhance the code 

- Eg 3 : using a method of Symbol() i.e `for()` to make that symbol not unique ✅
    - `for() method` 
        - is a method of Symbol()
        - used on that Symbol() to make that symbol not unique 💡💡💡
    ```js
    const sym1 = Symbol.for("name")

    const person = {
        age : 12 ,
        name : "Job" , 
        [sym1] : "Steve"
    }

    console.log(person)
    ```
    - so here this line `const sym1 = Symbol.for("name")`  
        - means create a global symbol with same `name` description
        - but if that global symbol doesn't exist then get the current global symbol which exist

- `said by kyle 🔥`
    - generally `Symbol.for()` method is not we're going to really use but just to know that it exists
        - & in general `Symbol()` also not going to be used
        - because there are libraries creators & people that are modifying existing code for libraries
        - & not so much for actual day to day web apps
    - but there are specific situations where `Symbol()` may be useful & one of them is we have a list of enums 💡💡💡
    
    - Eg 4 : `situation of Symbol() when we have list of enums` ✅
        ```js
        const LOG_LEVEL = {
            DEBUG : 'debug',
            INFO : 'info',
            WARNING : 'warning',
            ERROR : 'error'
        }

        const logLevel = LOG_LEVEL.DEBUG
        ```
    - so here we have different log levels to check log levels easily
    - so this kindof code is really useful for clearing it up & we don't need to worry about strings
        - means we can use these actual variables for checking
    - but what if accidentally duplicate a string across multiple things like this 
        ```js
        const LOG_LEVEL = {
            DEBUG : 'debug',
            INFO : 'info',
            WARNING : 'warning',
            ERROR : 'debug' // duplicate the string accidentally
        }

        const logLevel = LOG_LEVEL.DEBUG
        ```
    - then this will cause a lot of bugs 
    - so great usecase is using `Symbol()` like this 💡💡💡
        ```js
        const LOG_LEVEL = {
            DEBUG : Symbol('debug'),
            INFO : Symbol('info'),
            WARNING : Symbol('warning'),
            ERROR : Symbol('error') // duplicate the string accidentally
        }

        const logLevel = LOG_LEVEL.DEBUG

        if (logLevel === LOG_LEVEL.DEBUG) {
            console.log(logLevel)
        }
        // output : Symbol(debug)
        ```
    - but either string or Symbol() we can use means this is upto you

    - for the same example check this video : https://www.youtube.com/watch?v=nPrHbLsqb54&ab_channel=JamesQQuick 👍

- `said by kyle` : most of the part we're not going to have to use `Symbol()` but nice to know they exist

## Mine conclusion

- `Symbol()` : used to avoid same name (which are defined in different places) clashes b/w properties  

## --------------- Extra notes on Symbol() object ---------------
    
- videos
    - https://www.youtube.com/watch?v=rf-5okAVias&ab_channel=YahooBaba 👍
    - https://www.youtube.com/watch?v=4J5hnOCj69w&ab_channel=ColtSteele
    - https://www.youtube.com/watch?v=c7aJyJeBOxQ&ab_channel=WebStack
- blogs
    - https://flaviocopes.com/javascript-symbols/ 👍
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
    - https://javascript.info/symbol
    - https://www.javascripttutorial.net/es6/symbol/
    - https://www.freecodecamp.org/news/how-did-i-miss-javascript-symbols-c1f1c0e1874a/
    - https://medium.com/intrinsic-blog/javascript-symbols-but-why-6b02768f4a5c
    - https://www.w3schools.com/js/js_es6.asp
    - https://levelup.gitconnected.com/everything-you-need-to-know-about-javascript-symbols-24650a163038

## discussion page

- When doing OOPS with JavaScript, we could leverage symbols to better work with abstraction , is that correct?
