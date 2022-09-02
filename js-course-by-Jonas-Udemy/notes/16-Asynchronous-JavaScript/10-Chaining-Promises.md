# Chaining Promises

- we'll see how to chain promises in order to render the neighboring country of the initial country in sequence

## Steps - chaining promises

- `starter code` :
    ```js
    const getCountryData = function(country) {
        fetch(`https://restcountries.com/v3.1/name/${country}`).then(response => {
            return response.json() 
        }).then(data => {
            renderCountry(data[0])
        })
        // And actually , we already have a small chain of promises
            // because of this JSON function , means those two then() method will 
                // be called in order wise they're defined
            // but we'll do chaining together 2 sequential AJAX calls
                // so we'll get the first country then we'll get the neighboring country of that initial country
                // so second AJAX call depends on the data from the first call , so these should be done in sequence
    }

    getCountryData('portugal')
    ```

- `STEP 1` : doing second AJAX call for the neighboring country
    ```js
    const getCountryData = function(country) {
        // country 1
        fetch(`https://restcountries.com/v3.1/name/${country}`).then(response => {
            return response.json() 
        }).then(data => {
            renderCountry(data[0])
            const neighbour = data[0].borders[0]

            if (!neighour) return

            // country 2
            fetch(`https://restcountries.com/v3.1/name/${neighbour}`)
        })
    }

    getCountryData('portugal')
    ```
    - now we need to return new promise because then we'll able to chain a new then() method <br>
        on the result of that then(data) method

- `STEP 2` : returning then new promise
    ```js
    const getCountryData = function(country) {
        // country 1
        fetch(`https://restcountries.com/v3.1/name/${country}`).then(response => {
            return response.json() 
        }).then(data => {
            renderCountry(data[0])
            const neighbour = data[0].borders[0]

            if (!neighour) return

            // country 2
            return fetch(`https://restcountries.com/v3.1/name/${neighbour}`)
        })
        // now we need to handle the fulfilled value which is returned by that then(data) method
    }

    getCountryData('portugal')
    ```
    - `STEP 2.1` : handling the fulfilled value 
        ```js
        const getCountryData = function(country) {
            // country 1
            fetch(`https://restcountries.com/v3.1/name/${country}`).then(response => {
                return response.json() 
            }).then(data => {
                renderCountry(data[0])
                const neighbour = data[0].borders[0]

                if (!neighour) return

                // country 2
                return fetch(`https://restcountries.com/v3.1/name/${neighbour}`)
            }).then(response => {
                return response.json()
                // means fulfilled value of a promise will become the value/data of the body property
            }).then(data => {
                renderCountry(data, 'neighbour')
            })
        }

        getCountryData('portugal')
        ```
        - output : we'll get the portugal country data & then it's neighbour country data will come
            - means things will come in sequence/order wise in async way in the way we define them 
            - so promises allow us to handle these complex async operations with as many steps as we want <br>
                so right now we have 4 steps but we could extend the line as much as we want    
            - so even if we wanted the neighbour of the neighbour of the neighbour like 10 countries <br>
                then we could easily do this by chaining all those promises one after another 💡💡💡

- Promises are the modern way to handle the asynchronous code

## common mistake done by beginners

```js
const getCountryData = function(country) {
    // country 1
    fetch(`https://restcountries.com/v3.1/name/${country}`).then(response => {
        return response.json() 
    }).then(data => {
        renderCountry(data[0])
        const neighbour = data[0].borders[0]

        if (!neighour) return

        // country 2
        return fetch(`https://restcountries.com/v3.1/name/${neighbour}`).then(response => {
            return response.json()
        })
        // here we used then() method inside then() method because we have one callback function 
            // inside of another one
        // so avoid this mistake

        // Imp Note ✅ : always return a promise from inside the then() method &
            // handle that returned promise outside by simply continuing the chain 💡💡💡

    }).then(data => {
        renderCountry(data, 'neighbour')
    })
}

getCountryData('portugal')
```
