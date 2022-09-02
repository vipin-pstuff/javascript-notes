# Consuming Promises with async await

- we'll consume promises through async await

## Steps - Consuming Promises with async await

- `STEP 1` : first we create a special kind of function i.e async function
    ```js
    const whereAmI = async function(country) {

    } 
    // after putting async -> keyword before the function() keyword 
        // now the function is an asynchronous function
        // means a function will keep running in the background while performing the code which is inside of it 
        // then when that async function done with work then it'll automatically returns a promise 💡💡💡

    // async function -> always return a promise as a output 💡💡💡
    ```
    - now inside if this async function , we can define one or more await statements

- `STEP 2` : defining await statements inside the async function
    ```js
    const whereAmI = async function(country) {
        await fetch(`https://rescountries.eu/rest/v2/name/${country}`)
    } 
    // here fetch() api function itself will return a promise
        // which means fetch() api function is a asynchronous function
        // so before it , we can use the await -> keyword to await or wait for the result of that promise 
            // which is going to be return be that fetch() api function 💡💡💡
        // so await -> keyword will stop the execution of that fetch() function until the promise is fulfilled
            // means until the data has been fetched 💡💡💡

    // now you'll think that isn't stopping the code , blocking the execution ?
        // Ans : NO , because stopping execution inside an async function is not a problem 
            // because that whereAmI() function is running asynchronously in the background
            // that's why it's not blocking the main thread of execution
            // means it's not blocking the call stack
        // async await also makes our code look like regular synchronous code 
            // while behind the scenes , everything is in asynchronous 💡💡💡

    // Now , as soon as that fetch() api function itself return the resolved promise 
        // then the value of this complete line -> await fetch(`https://rescountries.eu/rest/v2/name/${country}`)
            // is going to be the resolved value of the promise
        // so we can simply store that into a variable 💡💡💡
    ```
    - `STEP 2.1` : storing the promise in a variable 
        ```js
        const whereAmI = async function(country) {
            const res = await fetch(`https://rescountries.eu/rest/v2/name/${country}`)
            console.log(res)
        }
        whereAmI('portugal')

        // here we putted the console.log() just to check that above code is asynchronous code 
        console.log('First')
        ```
        - output : First
            - then we'll get the Response object

    - Now , before using async await all over the place , you need to first understand that async await is <br>
        simply syntactic sugar over the then() method in promise . So behind the scenes , we're still using promises 💡💡💡
    - so doing this way 
        ```js
        const whereAmI = async function(country) {
            const res = await fetch(`https://rescountries.eu/rest/v2/name/${country}`)
            console.log(res)

            // first line is same as this one 
            fetch(`https://rescountries.eu/rest/v2/name/${country}`).then(res => console.log(res))
        }
        whereAmI('portugal')
        ```

- `STEP 3` : calling that json() method on that response object
    ```js
    const whereAmI = async function(country) {
        const res = await fetch(`https://rescountries.eu/rest/v2/name/${country}`)

        res.json() 
        // now we know that json() method itself will return a new promise 
            // so previously we use then() method but now we need to use await -> keyword 💡💡💡
    }
    whereAmI('portugal')
    ```
    - `STEP 3.1` : using await keyword before the res.json()
        ```js
        const whereAmI = async function(country) {
            const res = await fetch(`https://rescountries.eu/rest/v2/name/${country}`)

            const data = await res.json() 
            console.log(data)
        }
        whereAmI('portugal')
        ```
        - output : we'll get the actual JS array of object

- `STEP 4` : now we just need to render the country
    ```js
    const countriesContainer = document.querySelector('.countries')

    const renderCountry = function(data, className = '') {
        const html = `        
            <article class="country ${className}">
                <img class="country__img" src="${data.flag}" />
                <div class="country__data">
                  <h3 class="country__name">${data.name}</h3>
                  <h4 class="country__region">${data.region}</h4>
                  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
                  <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                  <p class="country__row"><span>💰</span>${data.languages[0].currencies}</p>
                </div>
            </article>
            ` ;
        
        countriesContainer.insertAdjacentHTML('beforend', html)
        countriesContainer.style.opacity = 1        
    }

    const whereAmI = async function(country) {
        const res = await fetch(`https://rescountries.eu/rest/v2/name/${country}`)

        const data = await res.json() 

        renderCountry(data[0])
    }
    whereAmI('portugal')
    ```
    - output : we'll get the portugal country data card
        - so we did it without chaining the promise
        - & async await is all about consuming the promise 💡💡💡

- `STEP 5` : now let's complete the geolocation code
    ```js
    const countriesContainer = document.querySelector('.countries')

    const renderCountry = function(data, className = '') {
        const html = `        
            <article class="country ${className}">
                <img class="country__img" src="${data.flag}" />
                <div class="country__data">
                  <h3 class="country__name">${data.name}</h3>
                  <h4 class="country__region">${data.region}</h4>
                  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
                  <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                  <p class="country__row"><span>💰</span>${data.languages[0].currencies}</p>
                </div>
            </article>
            ` ;
        
        countriesContainer.insertAdjacentHTML('beforend', html)
        countriesContainer.style.opacity = 1        
    }

    const getPosition = function() {
        return new Promise(function(resolve , reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject)
        })
    }

    const whereAmI = async function() {
        // Geolocation
        const pos = await getPosition()
        const { latitude: lat, longitude: lng } = pos.coords;

        // Reverse geocoding
        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
            // now we used await -> keyword again to chain promises
            // because we don't have to return anything
                // we don't have to create use new then() methods & we don't have to create new callback functions
            // so we just use the await -> keyword 💡💡💡
        const dataGeo = await resGeo.json()
        console.log(dataGeo) // output : we'll get the geolocation object of that country

        // country data
        const res = await fetch(`https://rescountries.eu/rest/v2/name/${dataGeo.country}`)
        const data = await res.json() 
        renderCountry(data[0])
    }
    whereAmI()
    ```
    - `said by jonas` :
        - async await is just synthetic sugar over consuming promises <br>
            so it's a bit like classes in JS , which also hides the true nature of how things work behind the scenes ✔️✔️✔️
        - it's used most of the time instead of using traditional then() method to consume promises 
        - but first know about how promises work then use async await otherwise understand the promise first 
    - output : when we do more than 3 HTTP request , then we'll get an error
        - & we're getting errors because right now we don't have any way to handle those error
        - that's why error handling introduce ✔️✔️✔️
