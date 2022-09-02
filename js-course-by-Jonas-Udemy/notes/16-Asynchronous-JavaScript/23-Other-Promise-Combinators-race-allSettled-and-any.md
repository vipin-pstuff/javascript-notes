# Other Promise Combinators methods race(), allSettled() & any()

- we have other Promise Combinators methods 
    - `1` : Promise.race()
    - `2` : Promise.allSettled()
    - `3` : Promise.any()
- `Note` : Promise.all() & these combinators methods takes an argument i.e an array (which contain all the promises) 💡💡💡

## Promise.race() combinator method

- it takes only an array as an argument
- it return a promise as soon as the one of the input promise settled first <br>
    & settled means that promise either rejected or fulfilled 💡💡💡

- Eg : using Promise.race() method
    ```js
    const getJSON = function(url) {
        return fetch(url).then(res => {
            if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`)

            return response.json();
        })
    }

    (async function() {
        const res = await Promise.race([
            getJSON(`https://restcountries.com/rest/v2/name/italy`) , 
            getJSON(`https://restcountries.com/rest/v2/name/egypt`) , 
            getJSON(`https://restcountries.com/rest/v2/name/mexico`)  
        ])
    })()
    // now basically these three promises will do race each other like a real race in real life
        // now if the wining promise is a fulfilled promise 
        // then fulfilled value of that whole Promise.race() is gonna be 
            // the fulfilled value of the wining promise 💡💡💡
    ```
    - `STEP 1` : printing output
        ```js
        // put code of getJSON() function
            
        (async function() {
            const res = await Promise.race([
                getJSON(`https://restcountries.com/rest/v2/name/italy`) , 
                getJSON(`https://restcountries.com/rest/v2/name/egypt`) , 
                getJSON(`https://restcountries.com/rest/v2/name/mexico`)  
            ])

            console.log(res[0])
        })()
        // output : we'll get Italy object
        ```
        - output : when we reload the page multiple times then we'll get might be egypt object
            - & we can see inside the Network tab i.e how much time of those promises took to render <br> 
                & egypt took less time than those two that's why egypt come first
        - `Imp Note Promise.race() 🔥` : we got only one result , not an array as an result 💡💡💡

    - `STEP 2` : now promise which is rejected can also win the race
        - means Promise.race([]) short circuits whenever on of the promise settled <br>
            means not matter whether the promise fulfilled or rejected
        - in real world , Promise.race([]) is useful to prevent never ending promises or for long running promises 💡💡💡 <br>
        - Eg : a user has bad internet connection then the fetch() request might take a long 
            - so we can create a special time out promises which automatically rejects after a certain time is passed 💡💡💡
        ```js
        // put code of getJSON() function

        // making a promise to reject
        const timeout = function(sec) {
            // we don't want to resolve that's why we use throwaway variable convention
            return new Promise(function(_ , reject) { 
                setTimeout(function() {
                    reject(new Error('request took too long!'))
                }, sec * 1000) // we're doing sec * 1000 because setTimeout() function takes second argument as time 
                    // & that time should be in milliseconds 💡💡💡 , not in second
            })
        }

        Promise.race([
            getJSON(`https://restcountries.com/rest/v2/name/tanzania`) , 
            timeout(0.1) // second promise
        ]).then(res => console.log(res[0])).catch(err => console.error(err))
        ``` 
        - output : we'll get the error because 0.1 time is not enough to get finish that getJSON()
            - now experiment with different time because it's depend on the internet connection
            - just if we pass 0.2 time then we'll get tanzania object
            - but in real world , we use larger time like 5 second -> timeout(0.1) 

- `Promise.all([]) & Promise.race([]) 🔥` are the most important one 💡💡💡

## Promise.allSettled() method

- `about Promise.allSettled() method` : 
    - it takes an array as an argument which contain promises <br>
        & then it'll return an array of all settled promises , no matter whether that promise is rejected or fulfilled 💡💡💡
    - `difference b/w Promise.all([]) & Promise.allSettled() ✅` : 
        - Promise.all([]) : will do short circuit as soon as one promise reject
        - Promise.allSettled([]) : will never short circuit as soon as on promise reject 
            - means it'll return result of all settled promises (means both rejected & fulfilled promises)

- Eg : of Promise.allSettled([])
    ```js
    Promise.allSettled([
        Promise.resolve('Success') , 
        Promise.reject('ERROR') , 
        Promise.resolve('Another Success')  

    ]).then(res => console.log(res)) // here we want all the result 
    ```
    - output : we'll get an array which contain all the promises i.e 3 promises
        - even though one of the promise is rejected like this 
        ![output of Promise.allSettled([])](../notes-pics/16-module/23-lecture/lecture-23-0.jpg)

    - but if we do this with Promise.all([])
        ```js
        Promise.all([
            Promise.resolve('Success') , 
            Promise.reject('ERROR') , 
            Promise.resolve('Another Success')  

        ]).then(res => { // here we want all the result 
            console.log(res)
        }).catch(err => console.error(err))
        ```
        - output : we'll get an error
        - because Promise.all([]) method will do short circuit , if there's a one rejected promise 💡💡💡 <br>
            & return that error as a output of Promise.all()
        - but if all the promises gets resolve successfully then <br>
            we'll get all those fulfilled promises in an array as a output 💡💡💡

## Promise.any() method

- `about Promise.any() method` : is introduce in ES2021
    - it takes an array as an argument which contain multiple promises
    - it will return always only first one fulfilled promise & skip the rejected promise , further resolved promises 💡💡💡

- Eg 1 : of Promise.any() method
    ```js
    Promise.all([
        Promise.resolve('Success') , 
        Promise.reject('ERROR') , 
        Promise.resolve('Another Success')  

    ]).then(res => { 
        console.log(res)
    }).catch(err => console.error(err))
    ```
    - output : Success

- Eg 2 : of Promise.any method 
    - here rejecting the promise as first 
    ```js
    Promise.all([
        Promise.reject('ERROR') , 
        Promise.resolve('Success') , 
        Promise.resolve('Another Success')  

    ]).then(res => { 
        console.log(res)
    }).catch(err => console.error(err))
    // here we putted the rejected promise as first 
        // & in second line of code , we resolve the promise 
    // so here that rejected promise (which is first line of code) will be skipped or not executed
        // & only first one fulfilled promise will be executed 💡💡💡
    ```
    - output : Success
