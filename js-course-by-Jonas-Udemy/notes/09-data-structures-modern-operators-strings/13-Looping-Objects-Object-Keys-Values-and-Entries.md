# Looping Objects through Object.keys(), Object.values() & Object.entries() method

- we used `for of` loop on an array which is an iterable  
    - but we can also loop indirect way over objects which are not iterable ✔️✔️✔️
- so we have different methods of `Object` depending on what exactly we want to loop over ✔️✔️✔️
    - means do we want to loop over the objects or property names or or values or both properties & values 💡💡💡

- testing code 
    ```js
    const openingHours = {
        thu: {
            open : 12 , 
            close : 22
        } , 
        fri: {
            open : 12 , 
            close : 23
        } , 
        sat: {
            open : 0 , // open 24 hours 
            close : 24
        } 
    } 
    ```

## Examples - of loop over property names of an object

- `Object.keys()` method : used to loop over the property names or keys of an object 💡💡💡
    - takes 1 argument i.e that object name  

- Eg 1 : looping over property names of an object
    ```js
    for (const day of Object.keys(openingHours)) {
        console.log(day)
    }
    /* output : thu
                fri
                sat
    */
    ```
    - `checking how Object.keys() method is working ✅` : 
        ```js
        const properties = Object.keys(openingHours)
        console.log(properties) // output : ['thu' , 'fri', 'sat']
        ```

- Eg 2 : looping over property names of an object
    ```js
    const properties = Object.keys(openingHours)
    let openStr = `We are open on ${properties.length} days: `

    for (const day of properties) {
        openStr += `${day}, `
    }
    console.log(openStr) // output : We are open on 3 days: thu, fri, sat
    ```

## Examples - of loop over values of properties of an object 

- `Object.values()` method : used to loop over the values of property/keys names of an object 💡💡💡
    - takes 1 argument i.e that object name  

- Eg 1 : looping over values of property names of an object
    ```js
    const values = Object.values(openingHours)
    console.log(values) 
    /* output : [{open: 12, close: 22}, {open: 12, close: 23}, {open: 0, close: 24}] */
    ```

## Examples - of loop over the entire object

- `Object.entries()` method : used to loop over that entire object 💡💡💡
    - take 1 argument i.e that object name 
    - return two things i.e index value & element/properties/keys of an object 

- `Note for entries() method using with object Vs array ✅` 
    - when we're using `entries()` method on array then this method doesn't need argument <br>
        & we use it on the name of an array variable without `Object` keyword like this `arr.entries()` <br>
        but we don't need this method now because we have much better methods
    - but when we're looping over the object through `entries()` method <br>
        then we need `Object` keyword & then this method need 1 argument i.e that object name 💡💡💡
 
- Eg 1 : converting the object value into an array value for looping over that object
    ```js
    const entries = Object.entries(openingHours)
    console.log(entries) 
    /* output : [Array(2), Array(2), Array(2)]
        when we open this array then we'll key & it's value of each one of them 
    */
    ```
    - so here `Object.entries(openingHours)` converted the `openingHours` object into an array value
    - Eg 1.1 : now looping over the object
        ```js
        const entries = Object.entries(openingHours)

        for (const x of entries) {
            console.log(x)
        } 
        /* output : (2) ["thu", Object]
                    (2) ["fri", Object]
                    (2) ["sat", Object]
        */
        ```

- Eg 2 : looping over the object to print the key/property & it's value of through destructuring ✅
    ```js
    const entries = Object.entries(openingHours)

    // here we're using array & then object destructuring 
    for (const [day, {open , close}] of entries) {
        console.log(`On ${day} we open at ${open} and close at ${close}`)
    } 
    ``` 
