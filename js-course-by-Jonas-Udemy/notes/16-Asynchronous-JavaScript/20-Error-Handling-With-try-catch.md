# Error Handling With try...catch

- we'll see how use error handling with async await 
- with async await , we can't use the catch() method , so we use try catch statement <br>
    so we can use it to catch errors in async function

## Example - how try catch statement used 

- Eg : of how try catch statement used
    ```js
    try {
        let y = 1 ;
        const x = 2 ;

        // now let's say we accidentally updated the value of x (which is constant variable)
        x = 3
    }
    ```
    - output : we'll get uncaught syntax error
    - `STEP 1` : using catch() function block
        ```js
        try {
            let y = 1 ;
            const x = 2 ;

            x = 3
        }catch(err) { // catch() function block will catch any errors occurred inside the try block 💡💡💡 
            alert(err.message)
            // we know that , any error has the message -> property 💡💡💡
        }
        ```
        - output : we'll get alert i.e Assignment to constant variable
    - but let's know use try catch statement for more useful i.e handle real errors in async functions

## real Example - of try catch statement 

- `STEP 1` : using try catch statement
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

    const renderError = function (msg) {
        countriesContainer.insertAdjacentText('beforeend', msg);
        countriesContainer.style.opacity = 1;
    };

    const getPosition = function() {
        return new Promise(function(resolve , reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject)
        })
    }

    const whereAmI = async function() {
        try {
            // Geolocation
            const pos = await getPosition()
            const { latitude: lat, longitude: lng } = pos.coords;

            // Reverse geocoding
            const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
            const dataGeo = await resGeo.json()
            console.log(dataGeo) 

            // country data
            const res = await fetch(`https://rescountries.eu/rest/v2/name/${dataGeo.country}`)
            const data = await res.json() 
            renderCountry(data[0])
        }catch(err) {
            console.error(`${err} 💥`);
            renderError(`💥 ${err.message}`);
        }
    }
    whereAmI()
    whereAmI()
    whereAmI() 
    ```
    - output : we'll get the errors when we do more than 3 HTTP request
        - so we'll get error i.e 404 & flag of undefined
        - & these errors are not meaningful for users , so we need to handle the error manually <br>
            because some errors can't be handle by the fetch() api function

- `STEP 2` : handling the error manually
    ```js
    // put code before this from STEP 1
    
    const whereAmI = async function() {
        try {
            // Geolocation
            const pos = await getPosition()
            const { latitude: lat, longitude: lng } = pos.coords;
                // Imp Note 🔥 : here we don't need throw the error manually 
                    // because something goes wrong with the geolocation , we already built our promise
                        // so that it automatically rejects 
                        // & then we'll immediately get an error which will be caught inside the catch block 💡💡💡
                    // but we know that this will not happen with for the promise 
                        // which is coming from fetch() api function
                        // so that promise only gets rejected when the user has no internet connection
                        // but if we get the errors from fetch() api function like this 404 error
                        // then the fetch() api function promise doesn't reject
                        // that's why we have to throw the error manually after that fetch() api function 💡💡💡

            // Reverse geocoding
            const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
            if (!resGeo.ok) throw new Error('Problem getting location data')
                // this will handle the error if the error occur in fetch() api function

            const dataGeo = await resGeo.json()
            console.log(dataGeo) 

            // country data
            const res = await fetch(`https://rescountries.eu/rest/v2/name/${dataGeo.country}`)
            if (!res.ok) throw new Error('Problem getting country')
            const data = await res.json() 
            renderCountry(data[0])
        }catch(err) {
            console.error(`${err} 💥`);
            renderError(`💥 ${err.message}`);
        }
    }
    whereAmI()
    whereAmI()
    whereAmI()
    ```
    - `Imp Note ✅` : never ignore the errors especially when it comes to asynchronous code 
        - because error can be occurred , so our application needs to be ready to handle that  
