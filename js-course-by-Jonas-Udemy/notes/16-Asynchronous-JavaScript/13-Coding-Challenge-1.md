# Coding Challenge 1

- problem statement :
    - In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. <br>
        For that, you will use a second API to geocode coordinates.
    - Here are your tasks:
    - PART 1
        - `1` : Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) <br>
            (these are GPS coordinates, examples are below).
        - `2` : Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates <br>
            to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api
        - The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. <br>
            Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
    - `1` : Once you have the data, take a look at it in the console to see all the attributes that you received <br>
        about the provided location. Then, using this data, log a message like this to the console: 'You are in Berlin, Germany'
    - `2` : Chain a .catch method to the end of the promise chain and log errors to the console
    - `3` : This API allows you to make only 3 requests per second. If you reload fast, you will <br>
        get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject <br>
        the promise in this case. So create an error to reject the promise yourself, with a meaningful error message. 💡💡💡
    - PART 2
        - `1` : Now it's time to use the received data to render a country. So take the relevant attribute <br>
            from the geocoding API result, and plug it into the countries API that we have been using.
        - `2` : Render the country and catch any errors, just like we have done in the last lecture <br>
            (you can even copy this code, no need to type the same code)
    - TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
    - TEST COORDINATES 2: 19.037, 72.873
    - TEST COORDINATES 2: -33.933, 18.474

## solution

- `https://geocode.xyz/52.508,13.381?geoit=json` this url is in xml , so use it in json format only

- `STEP 1` : getting the data
    ```js
    const whereAmI = function (lat, lng) {
      fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`).then(response => {
          return response.json();
        }).then((data) => {
            console.log(data)
        })
    };

    whereAmI(-33.933, 18.474);
    // output : we'll get the object & inside of it , there's is a confidence -> property which tells 
        // how much this data is correct
    ```

- `STEP 2` : accessing the city & the country
    ```js
    const whereAmI = function (lat, lng) {
      fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`).then(response => {
          return response.json();
        }).then((data) => {
            console.log(`You are in ${data.city}, ${data.country}`)
        })
    };

    whereAmI(-33.933, 18.474);
    ```
    - `STEP 2.1` : now let's do the HTTP request 3 times on that API for different coordinates
        ```js
        const whereAmI = function (lat, lng) {
          fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`).then(response => {
              return response.json();
            }).then((data) => {
                console.log(`You are in ${data.city}, ${data.country}`)
            })
        };

        whereAmI(-33.933, 18.474); // output : we'll get an error i.e 403
        whereAmI(19.037, 72.873); // output : we'll get an error i.e 403
        whereAmI(52.508, 13.381); // output : we'll get an error i.e 403
        ```
        - because the API only allows 3 request per second
        - & that fetch() api function is not handling the 403 error & it's not rejected the promise <br>
            even though that 403 is an error , which means there are some errors where fetch() api function <br>
            doesn't handle the error & not reject the promise that's why we need to handle the those errors manually 💡💡💡

- `STEP 3` : handling the 403 error
    ```js
    const whereAmI = function (lat, lng) {
      fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`).then(response => {
            if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`)

            return response.json();
        }).then((data) => { 
            console.log(`You are in ${data.city}, ${data.country}`)
        })
    };

    whereAmI(-33.933, 18.474);
    whereAmI(19.037, 72.873);
    whereAmI(52.508, 13.381);
    // output : when we reload the page again & again then we'll get the uncaught error 
        // so we need to catch() the error
    ```
    - `STEP 3.1` : catching the error
        ```js
        const whereAmI = function (lat, lng) {
          fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`).then(response => {
                if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`)

                return response.json();
            }).then((data) => { 
                console.log(`You are in ${data.city}, ${data.country}`)
            }).catch(err => {
                console.error(`${err.message} 💥`)
            })
        };

        whereAmI(-33.933, 18.474);
        whereAmI(19.037, 72.873);
        whereAmI(52.508, 13.381);
        // output : now we'll get our custom error no matter what error comes whether it's normal error
            // or status code error 💡💡💡
        ```

- `STEP 4` : rendering the country via coordinates
    ```js
    const btn = document.querySelector('.btn-country');
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
    }

    const whereAmI = function (lat, lng) {
        fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`).then(response => {
            if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`)

            return response.json();
        }).then((data) => { 
            console.log(`You are in ${data.city}, ${data.country}`)

            return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
        }).then((res) => {
            if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`)

            return res.json()
        }).then(data => renderCountry(data[0])).catch(err => {
            console.error(`${err.message} 💥`)
        })
    };

    whereAmI(-33.933, 18.474);
    ```
    - output : w'll get the UI component of that country
        - & if we call whereAmI() function three times then sometimes we'll get all the three country <br>
            & when reload the page then sometimes we get the only one country

- `STEP 5` : refactoring the code to remove the duplicate lines of code by creating a helper function
    ```js
    // put code the code from STEP 4

    const getJSON = function(url) {
        return fetch(url).then(res => {
            if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`)

            return response.json();
        })
    }

    const whereAmI = function (lat, lng) {
        getJSON(`https://geocode.xyz/${lat},${lng}?geoit=json`).then((data) => { 
            console.log(`You are in ${data.city}, ${data.country}`)

            return getJSON(`https://restcountries.com/v3.1/name/${data.country}`)
        }).then((res) => {
            if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`)

            return res.json()
        }).then(data => renderCountry(data[0])).catch(err => {
            console.error(`${err.message} 💥`)
        })
    };

    whereAmI(-33.933, 18.474);
    ```

- this is a great use case of multiple APIs in sequence to create really amazing result
