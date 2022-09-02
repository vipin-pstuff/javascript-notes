# Consuming Promises

- in this lecture , we'll see how to consume a promise & we'll going to consume <br>
    the promise which was returned by the fetch() function

## Steps - consuming promises

- `STEP 1` : putting fetch() api function inside a function
    ```js
    const getCountryData = function(country) {
        fetch(`https://restcountries.com/v3.1/name/${country}`)
        // now calling the fetch() function like this , it'll then immediately return a promise 
            // as soon as we start the request 💡💡💡
            // & currently , the promise (which we'll get from fetch()) is in pending state 
            // because the async task of getting the data , is still running in the background 💡💡💡 
        // Now , of course , at a certain point , the promise will then be settled 
            // & then either in a fulfilled or in a rejected state 💡💡💡 
    }
    ```
    - To handle the fulfilled state , we use then() method on the promise which will return 💡💡💡

- `STEP 2` : using then() method to handle the fulfilled state
    - `then()` method 
        - it used to handle only the fulfilled state of a promise 💡💡💡
        - it takes one argument only i.e callback function <br>
            & that callback function takes one argument i.e response to handle the response <br> 
            Note : we used `response` for understand but we can give any name
    ```js
    const getCountryData = function(country) {
        fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response) {
            console.log(response)
        })
        // here , this line of code -> fetch(`https://restcountries.com/v3.1/name/${country}`)
            // will return a promise & on that promise , we can call the then() method 💡💡💡
    }

    getCountryData('portugal')
    ```
    - output : console.log(response)
        - we'll get the object & that object name is Response 
        - & inside of that Response object , we have necessary things like status code  , headers
        - but the actually data we need is inside the `body` key , so click on the triple dots & we'll get `ReadableStream` <br>
            which means we can't see the data , so to read that data of the `body` key , <br>
            then we need use `json()` method on that `response` parameter 💡💡💡
    - `STEP 2.1` : handling the new promise which is return by json() method ✅
        - `json()` method returns a promise which resolves with the result of parsing the `body` text as JSON 💡💡💡
            - it's only used when we're working with promises , fetch() api , async await 💡💡💡
        ```js
        const getCountryData = function(country) {
            fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response) {
                console.log(response) // output : we'll get Response object
                
                return response.json() 
                    // Imp Note ✅ : & json() method is available on all the Response object
                      // - but the problem is json() -> method is actually also an async function 
                      // - means it'll also return a new promise , so we need to handle that promise as well 💡💡💡 
                      // that's why , here we use another then() method to handle that new promise 
                        // which is return by a json() method
            }).then(function(data) {
                console.log(data) // output : we'll get the actual JS object 
            })
            // so here we used two promises to get the data 💡💡💡
        }

        getCountryData('portugal')
        ```

    - `Explanation of the code` :
        - `STEP 1` : the stand alone fetch() api function i.e 
            ```js
            fetch(`https://restcountries.com/v3.1/name/${country}`)
            ```
            - it's returning a promise 
        - `STEP 2` : then we handle that promise by using then() method like this
            ```js
            fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response) {
                console.log(response) 
            }) 
            ```
        - `STEP 3` : then to actually read the data from the response
            - we need to call the json() method on that response object like this
            ```js
            fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response) {
                console.log(response) 
                response.json() 
            }) 
            ```
        - `STEP 4` : now this response.json() itself will also return a promise
            - that's why we return that new promise like this 
            ```js
            fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response) {
                console.log(response) 
                return response.json() 
            }) 
            ```
            - so we return that new promise via that then() method , so
                ```js
                then(function(response) {
                    console.log(response) 
                    return response.json() 
                })
                ```
                - so this all will return a new promise itself
        - `STEP 5` : since that then() method is returning a new promise 
            - so we can call the then() method on that then() method itself like this
            ```js
            fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response) {
                console.log(response) 
                return response.json() 
            }).then(function(data) {
                console.log(data)
            })
            ```
            - now we have the access to the actual data because the resolved value of <br>
                this promise i.e `return response.json()` is going to be the data itself which we need 💡💡💡

- `STEP 3` : now rendering the country & refactoring the code to make it small
    ```js
    const getCountryData = function(country) {
        fetch(`https://restcountries.com/v3.1/name/${country}`).then(response => {
            return response.json() 
        }).then(data => {
            renderCountry(data[0])
        })
    }

    getCountryData('portugal')
    ```
    - so using fetch() api function & promises is looks cleaner & easier to read <br>
        instead of handling async stuff through XMLHttpRequest() & event listener or using callback function
    - but you'll still think that you're still using callback in this code <br>
        which is true because promises can't rid of callback function but promise can save us from callback hell ✔️ <br>
        so even if you're not able to see the change then if we add more functionality through fetch() & promises <br>
        then we'll see the change

## Extra notes

- there are 2 ways to do HTTP requests i.e fetch() api function & Axios
    - but which one to use , so here some people's said ✔️
    ```
    person 1 - Fetch if the application is lightweight. Axios if its heavyweight.
    person 2 - for real projects I usually use Axios and for fun project I just use Fetch.
    person 3 - I guess Axios have everything to develop fast. So, my preferences is Axios
    ```
