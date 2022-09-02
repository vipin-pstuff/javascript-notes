# Building a Simple Promise

- we'll build our custom promise manually

- we'll take our lottery example & simulate a lottery by using a promise <br>
    & a fulfilled promise means to win the lottery while a rejected promise means to lose

## Steps - of creating a custom Promise

- `STEP 1` : we create a new promise by using the `new Promise()` constructor
    - promises are just a special kind-of object in JS 
    ```js
    new Promise()
    ```
    - Promise() constructor function takes only one argument i.e executor function means callback function 💡💡💡

- `STEP 2` : passing the executor function means callback function inside Promise() constructor function
    ```js
    new Promise(function() {

    })
    ```
    - now as soon as the promise constructor runs then it'll automatically execute that executor/callback function
    - & the executor function argument of Promise() constructor function <br>
        takes only two arguments i.e resolve & reject functions 💡💡💡

- `STEP 3` : passing those two arguments inside executor function 
    ```js
    new Promise(function(resolve, reject) {

    })
    ```

- `STEP 4` : creating a new promise means it's object
    ```js
    const lotteryPromise = new Promise(function(resolve, reject) {

    })
    // so this part of code i.e new Promise(function(resolve, reject) {}) will create a new promise
        // that new promise  will be store into that variable 💡💡💡
        // just like fetch() function , it's also create a new promise 
    ```
    - now this executor function that we defined is the function which will contain the async behavior <br>
        that we're trying to handle with the promise 💡💡💡
    - so this executor function should eventually produce a result value <br>
        means the value will be the future value of the promise 💡💡💡

- `STEP 5` : let's say you won 50% & lose the 50%
    - to set the promise as fulfilled promise , we use resolve() 💡💡💡
    - to set the promise as rejected promise , we use reject() 💡💡💡
    ```js
    const lotteryPromise = new Promise(function(resolve, reject) {
        // Math.random() wil return the number b/w 0 & 1
        if (Math.random() >= 0.5) {
            resolve()
            // in this condition/situation , we said that we win the lottery means fulfilled promise
        }
    })
    ```
    - resolve() functions takes only one argument which can be consumed with the then() method 💡💡💡
    - `STEP 5.1` : passing an argument value inside the resolve() function
        - & that value we can consumed inside the then() method
        - & passing an argument inside the reject() function i.e the error message <br> 
            which we'll later catch that error by using catch() method
        ```js
        const lotteryPromise = new Promise(function(resolve, reject) {
            // Math.random() wil return the number b/w 0 & 1
            if (Math.random() >= 0.5) {
                resolve('You Win')
            } else {
                reject('You lose your money')
                // reject() function also takes only one argument i.e error message
            }
        })
        // Best practices : always define both the state of promise whenever we're using Promise() constructor
            // or using fetch() api function
            // & always catch all the errors , don't just handle the fulfilled promise 💡💡💡
        ```
    - `STEP 5.2` : using then() & catch() methods
        - then() method is to handle resolve() function , when the promise gets fulfilled 💡💡💡 
        - catch() method is to handle reject() function , when the promise gets rejected 💡💡💡
        ```js
        const lotteryPromise = new Promise(function(resolve, reject) {
            if (Math.random() >= 0.5) {
                resolve('You Win')
            } else {
                reject('You lose your money')
            }
        })

        // then() method takes only one argument i.e callback function
            // & that callback function takes only one argument to get/handle the value of resolve() function
        lotteryPromise.then(res => {
            // we can give any name instead of res -> argument 
            // but we gave that name for easier understanding 💡💡💡
            console.log(res) 
        }).catch(err => {
            console.error(err) 
        }) 
        // here just understand like we passed the argument inside resolve() function 
            // & that argument is a value of the parameter of then() method 💡💡💡 
        // & this will be for reject() method 
        ```
        - output : when we reload the page then we'll get our message
            - but this is not async behavior , so we'll use setTimeout() function to make the promise behavior async 💡💡💡

- `STEP 6` : making the promise behavior as async
    ```js
    // creating the promise
    const lotteryPromise = new Promise(function(resolve, reject) {

        console.log('Lotter draw is happening')
        setTimeout(function() {
            if (Math.random() >= 0.5) {
                resolve('You Win')
            } else {
                reject(new Error('You lose your money'))
                // here we use the new Error() constructor function , to actually show the error
                    // means when we get the error then we'll get it with Error label like this
                    // output : Error: You lose your money 💡💡💡
                    // instead of just printing the string by doing like this reject('You lose your money')
            }
        }, 2000)
        // so using setTimeout() function , we encapsulated the async behavior into that Promise() constructor 💡💡💡
    })

    // here we consumed the promise 
    lotteryPromise.then(res => {
        console.log(res) 
    }).catch(err => {
        console.error(err) 
    }) 
    ```
    - output : after 2 second we'll get the state of our promise 
        - & we can check via reloading the page again & again

- most of the time , in real world , we just consume promises & we usually only built promises to wrap old <br>
    callback based functions into promises & this process is called `promisifying` <br>
    promisifying means to convert callback based async behavior to promise based 💡💡💡

## real Example - promisify the setTimeout() function ✅

- promisifying the setTimeout() function & create a wait function 💡💡💡

- Eg : real world example  
    - `STEP 1` : promisify the setTimeout() function & create a wait function
        ```js
        // Promisifying setTimeout
        const wait = function(seconds) {
            // inside of it , we'll create & return the promise
                // & due this , we encapsulate the async operation even further & fetch() function also do same thing

            return new Promise(function(resolve) {
                // actually we don't need reject() function because it's impossible for the timer to fail

                // inside of the setTimeout() function , we want to call 
                    // the callback function after a certain time i.e resolve() function
                setTimeout(resolve, seconds * 1000)
                // & here , we're actually not passing any resolved value inside the resolve() function
                    // because that's actually not mandatory 
                    // means in the case of timer , passing any resolved value inside the resolve() function
                        // it's also not necessary to wait for some value
                    // we just want to make our code wait , so no resolved values are needed 💡💡💡  
            })
        }

        wait(2) 
        // means wait() function will wait for 2 seconds & after that 2 second , it will resolve the promise
            // so we can handle that promise via then() method
        ```
    - `STEP 1.1` : handling the resolve promise
        ```js
        const wait = function(seconds) {
            return new Promise(function(resolve) {
                setTimeout(resolve, seconds * 1000)
            })
        }

        wait(2).then(() => { // we're not passing any parameter to the callback function argument of then() method
            // because we're mot returning any value
            console.log('I waited for 2 seconds')

            // now we return the new promise 
            return wait(1)
            // this is exactly what we did before 
                // when we wanted to chain 2 AJAX calls in sequence/order by using fetch() function
        }).then(() => console.log('I waited for 1 second'))
        ```
        - output : I waited for 2 seconds & then I waited for 1 second
        - so here we made the AJAX call in a sequence/order wise by using promise instead of callback hell

- Eg : of resolving or rejecting promise immediately without waiting 
    - by using `resolve()` method & `reject()` method 
    ```js
    // so resolve() is a static method of Promise constructor class
    Promise.resolve('acb').then(x => console.log(x))
    Promise.reject(new Error('acb')).catch(x => console.error(x))
    ```

- so this is the way we create promise & how we promisify a callback based async behavior function like setTimeout()
