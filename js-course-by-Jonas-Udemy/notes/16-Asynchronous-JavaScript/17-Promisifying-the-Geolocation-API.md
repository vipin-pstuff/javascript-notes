# Promisifying the Geolocation API

- we'll see how to promisify the geolocation API

## Example 

- Eg : callback based API
    - `STEP 1` : we used the geolocation for current position like this
        ```js
        navigator.geolocation.getCurrentPosition()
        ```
        - getCurrentPosition() takes two 2 callbacks as arguments
            - `1st callback function argument` : 1st callback function argument is for the success
            - `2nd callback function argument` : 2nd callback function argument is for the error

    - `STEP 2` : passing those two callback function arguments of getCurrentPosition()
        ```js
        navigator.geolocation.getCurrentPosition(position => console.log(position) , err => console.error(err))
        // first callback function takes an argument i.e position 
        // second callback function takes an argument i.e error for in case , 
            // that the user doesn't allow the page to get access to the current location 💡💡💡
        console.log('Getting position')
        ```
        - output : we'll get message i.e Getting position
            - & then the popup for geolocation position & click on allow
            - then we'll get the GeolocationPosition 
            - & this is async behavior because geolocation api is doing it's processing in the web apis environment 💡💡💡
    - so this is a callback based API
    - let's promisify a callback based API to a promise based API 💡💡💡

- Eg : promisify a callback based API to a promise based API ✅
    - `STEP 1` : creating a function just like wait() function we created in lecture 16
        ```js
        const getPosition = function() {
            return new Promise(function (resolve , reject) {
                // navigator.geolocation.getCurrentPosition(
                //     position => resolve(position) , 
                //     err => reject(err)
                // )
                
                navigator.geolocation.getCurrentPosition(resolve, reject)
                // passing arguments inside getCurrentPosition() like this getCurrentPosition(resolve, reject)
                    // is same as doing above
                // actually doing this -> position => resolve(position) means 
                    // we define the callback function manually 💡💡💡
                // but inside this -> getCurrentPosition(resolve, reject)
                    // we don't need to define callback function manually , means defining callback function 
                    // will done automatically 💡💡💡
                    // so getCurrentPosition(resolve, reject) , here resolve argument itself
                        // is the callback function which will get called with the position behind the scene 
                        // like this resolve(position) 💡💡💡
            })
        }

        getPosition().then(pos => console.log(pos))
        ```
        - output : we'll get the geolocation position
            - so we promisified the geolocation API to a promised based API 💡💡💡

## refactoring the code - of coding challenge 1

- inside the coding challenge 1 , we built a function which received GPS coordinates <br>
    as an input & then rendered the corresponding country . well , now we actually got these coordinates <br>
    via geolocation & so we don't even have to pass in any coordinates into that function

- `coding challenge 1` : 
    ```js
    getPosition().then(pos => console.log(pos))

    const whereAmI = function(lat, lng) {
        fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`).then(res => {
            if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`)
            return res.json()
        }).then(data => {
            console.log(`You are in ${data.city}, ${data.country}`)
            return fetch(`https://rescountries.eu/rest/v2/name/${data.country}`)
        }).then(res => {
            if (!res.ok) throw new Error(`Country not found (${res.status})`)

            return res.json()
        }).then(data => {
            renderCountry(data[0])
        }).catch(err => console.error(`${err.message}`))
    }
    ```
    - now we don't need to pass that lat & lng coordinates means we're gonna build a function that <br>
        will tell us where we're in the world based on the geolocation of our device 💡💡💡

- `STEP 1` : getting position
    ```js
    getPosition().then(pos => console.log(pos))

    const whereAmI = function(lat, lng) {
        getPosition().then(pos => {
            console.log(pos.coords)
        })


        fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`).then(res => {
            if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`)
            return res.json()
        }).then(data => {
            console.log(`You are in ${data.city}, ${data.country}`)
            return fetch(`https://rescountries.eu/rest/v2/name/${data.country}`)
        }).then(res => {
            if (!res.ok) throw new Error(`Country not found (${res.status})`)

            return res.json()
        }).then(data => {
            renderCountry(data[0])
        }).catch(err => console.error(`${err.message}`))
    }

    btn.addEventListener('click', whereAmI) // we passed whereAmI function as callback without calling it 
        // because we don't need to pass any arguments 💡💡💡
    ```
    - output : when we click on the button
        - then we'll get the uncaught error i.e latitude is not defined 
        - & we'll get the GeolocationCoordinates which contain latitude & longitude , so we need these two 

- `STEP 2` : getting latitude & longitude from GeolocationCoordinates object
    ```js
    getPosition().then(pos => console.log(pos))

    const whereAmI = function(lat, lng) {
        getPosition().then(pos => {
            const {lat : latitude, lng = longitude} = pos.coords
            // doing object destructuring & giving new name 💡💡💡
        })

        fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`).then(res => {
            if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`)
            return res.json()
        }).then(data => {
            console.log(`You are in ${data.city}, ${data.country}`)
            return fetch(`https://rescountries.eu/rest/v2/name/${data.country}`)
        }).then(res => {
            if (!res.ok) throw new Error(`Country not found (${res.status})`)

            return res.json()
        }).then(data => {
            renderCountry(data[0])
        }).catch(err => console.error(`${err.message}`))
    }

    btn.addEventListener('click', whereAmI)
    ```
    - now we need to chain the promise

- `STEP 3` : chaining the promise
    ```js
    const whereAmI = function(lat, lng) {
        getPosition().then(pos => {
            const {lat = latitude, lng = longitude} = pos.coords

            return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        }).then(res => {
            if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`)
            return res.json()
        }).then(data => {
            console.log(`You are in ${data.city}, ${data.country}`)
            return fetch(`https://rescountries.eu/rest/v2/name/${data.country}`)
        }).then(res => {
            if (!res.ok) throw new Error(`Country not found (${res.status})`)

            return res.json()
        }).then(data => {
            renderCountry(data[0])
        }).catch(err => console.error(`${err.message}`))
    }

    btn.addEventListener('click', whereAmI)
    ```
    - output : after clicking on the button , we'll get the error i.e latitude is not defined
        - because here we made the syntax mistake i.e `const {lat = latitude, lng = longitude} = pos.coords`
    - `STEP 3.1` : correcting the syntax mistake of object destructuring 
        ```js
        const whereAmI = function(lat, lng) {
            getPosition().then(pos => {
                const {latitude: lat, longitude: lng} = pos.coords // getting coordinates

                return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
                // for those coordinates , we got the location i.e the actual location with country
            }).then(res => {
                if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`)
                return res.json()
            }).then(data => {
                console.log(`You are in ${data.city}, ${data.country}`)
                return fetch(`https://rescountries.eu/rest/v2/name/${data.country}`)
                // here we got all the data about the country
            }).then(res => {
                if (!res.ok) throw new Error(`Country not found (${res.status})`)

                return res.json()
            }).then(data => {
                renderCountry(data[0])
            }).catch(err => console.error(`${err.message}`))
        }

        btn.addEventListener('click', whereAmI)
        ```
        - output : after clicking on the button , then data will take sometime to come 
            - & then we'll get the output i.e portugal data
        - so we got the data/coordinates by just simply using geolocation then from those coordinates , <br>
            we got the location i.e the actual location with country & from there , we got all the data about the country
        - & we're displaying the flag of a country just based on geolocation on any device <br>
            but just let's say you have to handle all of these async operations using callback function <Br>
            so that would be not good 💡💡💡

- so we saw that we can really promisify all kinds of async stuff or we can promisify the image loading 💡💡💡
