# default parameters

- this feature is important because we're going to use it all the time ✅
- it means default parameters of functions 

## Example 

- Eg 1 : `without using default argument`
    ```js
    // without default argument
    function greet(firstName , lastName , salutation) {
        console.log(`${salutation} ${firstName} ${lastName}`)
    }

    greet("Steve" , "Jobs" , "Hi")
    /* output : Hi Steve Jobs */
    ```

- Eg 2 : `without using default argument`
    ```js
    // without default argument
    function greet(firstName , lastName , salutation) {
        console.log(`${salutation} ${firstName} ${lastName}`)
    }

    greet("Steve" , "Jobs")
    /* output : undefined Steve Jobs */
    ```

- Eg 3 : `without using default argument`
    ```js
    // without default argument
    function greet(firstName , lastName , salutation) {
        salutation = salutation || "Hi"
        console.log(`${salutation} ${firstName} ${lastName}`)
    }

    greet("Steve" , "Jobs")
    /* output : Hi Steve Jobs */
    ```

    - here this code is bit cumbersome 

- Eg 1 : `using default argument`
    ```js
    // using default argument
    function greet(firstName , lastName , salutation = "Hi") {
        console.log(`${salutation} ${firstName} ${lastName}`)
    }

    greet("Steve" , "Jobs")
    /* output : Hi Steve Jobs */
    ```

- Eg 2 : `using default argument` with passing undefined as a argument  
    ```js
    // using default argument
    function greet(firstName , lastName , salutation = "Hi") {
        console.log(`${salutation} ${firstName} ${lastName}`)
    }

    greet("Steve" , "Jobs" , undefined)
    /* output : Hi Steve Jobs */
    ```

    - here we still got the "Hi" as a output because undefined → means nothing 

- Eg 3 : `using default argument` with passing null as a argument  
    ```js
    // using default argument
    function greet(firstName , lastName , salutation = "Hi") {
        console.log(`${salutation} ${firstName} ${lastName}`)
    }

    greet("Steve" , "Jobs" , null)
    /* output : null Steve Jobs */
    ```

    - here null → means nothing but it's also a value 

- Eg : `using default argument` as Template Strings ✅
    ```js
    // using default argument
    function greet(firstName , lastName , salutation = "Hi" , fullName = `${firstName} ${lastName}`) {
        console.log(`${salutation} ${firstName} ${lastName} : ${fullName}`)
    }

    greet("Steve" , "Jobs" , "Hi" , "Mr Jobs")
    /* output : Hi Steve Jobs : Mr Jobs */
    ```
    - `Note` : purposes on how you can use default parameters in an object 💡💡💡

    - using default parameters would be very useful

- `Best Practices 🔥` : 
    ```js
    // using default argument
    function greet(firstName = "Teen" , lastName , salutation = "Hi" , fullName = `${firstName} ${lastName}`) {
        console.log(`${salutation} ${firstName} ${lastName} : ${fullName}`)
    }

    greet("Jobs" , "Hi" , "Mr Jobs")
    /* output : Mr Jobs Jobs Hi : Jobs Hi */
    ```
    
    - `Note` : don't put default parameters before normal parameters (which doesn't have default parameters) 💡💡💡
        - unless we have a very very good reason to do it

    - so always put one or all default parameters after normal parameters 💡💡💡 

## default parameters as object destructuring 🔥

```js
function greet(firstName , lastName , { salutation, suffix }) {
    console.log(`${salutation} ${suffix} ${firstName} ${lastName} `)
}

greet("Jobs" , "Hi" , "Mr")
```
- output : here we'll not get the output because those parameters are inside object destructuring
    - so we need to put the arguments inside an object like this 

- Eg 1 : 
```js
function greet(firstName , lastName , { salutation, suffix }) {
    console.log(`${salutation} ${suffix} ${firstName} ${lastName} `)
}

// passing arguments as normally 
greet("Steve" , "Jobs" , { suffix : "Mr" , salutation : "Hi" })
/* output : Hi Mr Steve Jobs */
```

- Eg 2 : `using default parameters` 🔥
```js
function greet(firstName , lastName , { salutation = "Hi" , suffix = "Mr" }) {
    console.log(`${salutation} ${suffix} ${firstName} ${lastName} `)
}

// passing default parameters
greet("Steve" , "Jobs" , { })
/* output : Hi Mr Steve Jobs */
```

- `Note 💡` : 
    ```js
    function greet(firstName , lastName , { salutation = "Hi" , suffix = "Mr" }) {
        console.log(`${salutation} ${suffix} ${firstName} ${lastName} `)
    }

    // passing default parameters
    greet("Steve" , "Jobs" )
    /* output : error come */
    ```

    - here we didn't pass argument for third parameter & due to this , we got the error 
    - because JS can't assign `undefined` as a value for that destructure 💡💡💡

    - so lot of times if we're using optional list of options then destructure them inside of this function 
        - & assign that parameter as empty object like this 💡💡💡
    ```js
    function greet(firstName , lastName , { salutation = "Hi" , suffix = "Mr" } = {}) {
        console.log(`${salutation} ${suffix} ${firstName} ${lastName} `)
    }

    // passing default parameters
    greet("Steve" , "Jobs" )
    /* output : Hi Mr Steve Jobs */
    ```

    - so here we got the output even if didn't pass the argument for third parameter i.e object destructuring 

## --------------- Extra notes of default parameters 

- videos 
    - https://www.youtube.com/watch?v=c0BF4Cn4_w8&ab_channel=TechGun
    - https://www.youtube.com/watch?v=aPmAzOXUVYw&ab_channel=ThapaTechnical
    - https://www.youtube.com/watch?v=YQ7vDGjlz08&ab_channel=GeekyShows

## Note 

- `Ques` : reason for putting the `salutation` and `suffix` into an object instead of leaving them as normal variables
    - Ans : The main reason was just for demonstration purposes `on how you can use default parameters in an object`. 
    - In real world code `it is a great thing` to do `if you have lots of options that you want to pass to a function`
    - or if you `have tons of optional parameters to a function` and you don't want people to have to define them 
    - in order since they may only want to define one of the many options
