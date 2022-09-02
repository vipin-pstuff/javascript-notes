# Top level await ES2022

- top level await used when we want to execute promise which is asynchronous code in sequence order 

## Resources : for this concept 

- videos
    - https://www.youtube.com/watch?v=KGSmlZ3i4i8
    - https://www.youtube.com/watch?v=sGy3rCy5dGY
- blogs
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#browser_compatibility
    - https://www.javascripttutorial.net/javascript-top-level-await/
    - https://v8.dev/features/top-level-await
    - https://flaviocopes.com/javascript-await-top-level/
    - https://javascript.plainenglish.io/javascript-top-level-await-in-a-nutshell-4e352b3fc8c8 (for use cases) 👍
    - https://www.puruvj.dev/blog/top-level-await 👍

## Example 

- Eg : normal async code running flow without Top level await
    ```js
    const promise = new Promise((resolve) => {
        const response = { name : `Hello` , age : 20 }
        setTimeout(() => {
            return resolve(response)
        }, 1500)
    })

    console.log('Start')
    promise.then(res => console.log(res))
    console.log('end')
    // output : start
        // end 
        // & after some time we'll get the output from the promise -> { name : `Hello` , age : 20 }
    ```
    - but what if we want to wait for that promise i.e `promise.then(res => console.log(res))` <br>
        for resolve or reject then after that run the next line of code 💡💡💡
    - so if we're not using a promise inside a function scope or block scope , <br>
        then we can use `await` keyword (without `async` keyword) directly on that promise like this 💡💡💡

- Eg : using top level await
    ```js
    const promise = new Promise((resolve) => {
        const response = { name : `Hello` , age : 20 }
        setTimeout(() => {
            return resolve(response)
        }, 1500)
    })

    console.log('Start')
    
    // using top level await
    await promise.then(res => console.log(res))
    
    console.log('end')
    // output : start
        // { name : `Hello` , age : 20 }
        // end
    ```
    - so here our code gets executed in sequence or order wise
    - & behind the scene that `await` keyword will await for that promise <br>
        & as soon as the promise resolve or reject we'll get the output then the next line of code will be executed 💡💡💡 
    - this top level await concept mean run the asynchronous code in sequence order al


- `about top level await` : 
    - Top-level await enables modules to act as big async functions: With top-level await , <br>
        ECMAScript Modules (ESM) can await resources, causing other modules who import them to wait before they start evaluating their body.
