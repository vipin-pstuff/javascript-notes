# Primitive VS reference types practice 

- Eg : of coping a object by using `assign()` method of `Object` ✅
    - `assign()` method is used to merge two or more than two objects & then return a new object 💡💡💡
        - takes at-least two argument i.e 
            - first : is empty object means curly braces
            - second : is that object we need to merge
    - for more about `Object.assign()` method 
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
        - https://www.javascripttutorial.net/es6/javascript-object-assign/
    ```js
    const jessica2 = {
        firstName: "Jessica" ,
        lastName: "Williams" , 
        age : 27
    }

    const jessicaCopy = Object.assign({} , jessica2) // here we copied 
    jessicaCopy.lastName = "Davis" // updated 
    console.log(jessica2) // output : {firstName: "Jessica" ,lastName: "Williams" , age : 27}
    console.log(jessicaCopy) // output : {firstName: "Jessica" ,lastName: "Davis" , age : 27}
    ```
    - output : `Object.assign({} , jessica2)` it will return a new object which contain all of the properties of that object
    - `Note` : use case of `Object.assign()` method
        - if we're dealing with Object or array & if we don't want to change the original value of an object or an array <br> 
            then we can use `Object.assign()` method to copy that original value of an object or an array 💡💡💡

- `disadvantage of Object.assign()` : 
    - this method can only work with first level
    - means if we have a nested object inside an object <br>
        then `Object.assign()` method can't convert that nested object into single dimensional object
    - that's why this method only do `shallow copy/clone` not `deep clone` , Eg : ✅
        ```js
        const jessica2 = {
            firstName: "Jessica" ,
            lastName: "Williams" , 
            age : 27 ,
            family : ['Alice', 'Bob']
        }

        const jessicaCopy = Object.assign({} , jessica2) 
        jessicaCopy.lastName = "Davis"
        
        jessicaCopy.family.push("Mary")
        jessicaCopy.family.push("John")
        console.log(jessica2) 
        console.log(jessicaCopy) 
        ```
        - output : here both `jessica2` & `jessicaCopy` objects will get updated value of `family` array
            - & value of `lastName` property of only `jessicaCopy` object gets updated but not of `Jessica2` object
            - however , `family` array is deeply nested object
            - because `Object.assign()` can do copy for only one level , so that's why it can't do deep clone 💡💡💡

    - so here we need deep clone but it's not easy to achieve <br>
        so usually , we do something like this which is like really complex i.e using an external library like Lo-Dash ✔️✔️✔️
    - `Lo-Dash` library has a ton of helpful tools & one of them is deep cloning 

- `Advice` : so many new concepts to learn & many of them were hard & probably confusing 
    - but that's not a problem . Though it's always a part of learning <br>
        & even if you didn't understand 100% of everything then it's fine

## Extra notes - of Shallow Copy VS Deep Clone/copy

- https://medium.com/@manjuladube/understanding-deep-and-shallow-copy-in-javascript-13438bad941c 👍
- https://www.javascripttutorial.net/object/3-ways-to-copy-objects-in-javascript/
- https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy
    - https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy
- https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/#:~:text=shallow%20copying.,into%20how%20JavaScript%20stores%20values.