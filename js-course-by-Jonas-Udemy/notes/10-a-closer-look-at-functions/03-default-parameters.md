# Default parameters

- default parameters are set by-default in a function is useful 
    - so that we don't have to pass them manually if we don't want to change the default 💡💡💡

## ways to define default parameters to a function 

- `first way` : using short circuiting to define default values to parameters of a function
    - Eg 1 : not defining default values to parameters of a function 
        ```js
        const bookings = []
        
        const createBooking = function (flightNum, numPassengers, price) {
            const booking = {
                flightNum , 
                numPassengers, 
                price
            }

            console.log(booking)
            bookings.push(booking)
        }

        createBooking('LH123')
        // output : {flightNum: "LH123", numPassengers: undefined, price: undefined}
        ```
        - here we can see that we got undefined as a value of these two parameters of a function 
        - & we know that undefined is a falsy values , so we can take advantage of this falsy values <br>
            to use short circuiting way to define default values to parameters ✔️✔️✔️
    - Eg 2 : using short circuiting way to define default values to parameters 
    ```js
    const bookings = []
    
    const createBooking = function (flightNum, numPassengers, price) {
        // short circuiting way to define default values to parameters of a function 💡💡💡
        numPassengers = numPassengers || 1 
        price = price || 199

        const booking = {
            flightNum , 
            numPassengers, 
            price
        }

        console.log(booking)
        bookings.push(booking)
    }

    createBooking('LH123')
    // output : {flightNum: "LH123", numPassengers: 1, price: 199}
    ```
    - `numPassengers = numPassengers || 1` means 
        - if value of the `numPassengers` parameter is falsy values 
        - then short circuiting will happen & `1` will be stored  

- defining default values to parameters through short circuiting way it's not easy & lot of boilerplate code & it's a ES5 way 
    - now we have ES6 way i.e directly we can define default values to parameters of a function 💡💡💡

- `second way` : using ES6 way to define default values directly to parameters of a function ✅
    ```js
    const bookings = []
    
    // Es6 way to define default values directly to parameters of a function 💡💡💡
    const createBooking = function (flightNum, numPassengers = 1, price = 199) {

        const booking = {
            flightNum , 
            numPassengers, 
            price
        }

        console.log(booking)
        bookings.push(booking)
    }

    createBooking('LH123') // default values are used instead of undefined falsy values 
    // output : {flightNum: "LH123", numPassengers: 1, price: 199}
    createBooking('LH123', 2 , 800) // arguments values are used instead of default values 
    // output : {flightNum: "LH123", numPassengers: 2, price: 800} 
    ```
    - `const createBooking = function (flightNum, numPassengers = 1, price = 199) {}` means 
        - if we don't define values as arguments for these parameters then automatically <br>
            default values will be assigned to these parameters 
        - but if we defined values as arguments then those default values of parameters will be used <br>
            means values which are defined as arguments will be assigned to parameters & <br>
            `those arguments will overwrite the default values of parameters` 💡💡💡

## Examples - of default values to parameters of a function

- Eg 1 : with default values , we can define any expressions to parameters 
    ```js
    const bookings = []
    
    const createBooking = function (flightNum, numPassengers = 1, price = 199 * 1.2) {

        const booking = {
            flightNum , 
            numPassengers, 
            price
        }

        console.log(booking)
        bookings.push(booking)
    }

    createBooking('LH123') 
    createBooking('LH123', 2 , 800) // output : {flightNum: "LH123", numPassengers: 2, price: 238.799} 
    ```

- Eg 2 : we can use the values of other parameters which are defined before `price` parameter of that function ✅
    ```js
    const bookings = []
    
    const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {

        const booking = {
            flightNum , 
            numPassengers, 
            price
        }

        console.log(booking)
        bookings.push(booking)
    }

    createBooking('LH123', 2) // output : {flightNum: "LH123", numPassengers: 2, price: 398} 
    createBooking('LH123', 5) // output : {flightNum: "LH123", numPassengers: 5, price: 995} 
    ```
    - so here value of price is `dynamically calculated` based on num of passengers 💡💡💡
    - `const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {}` means 
        - we want to calculate price based on number of passengers 
        - so inside a function , we can use other parameters as an expression/calculation <br>
            which are defined before this `price` parameters 💡💡💡

- `Note for parameters of a function ✅` : 
    - if we use `price = 199 * numPassengers` parameter before defining `numPassengers` parameter <br>  
        then here `price = 199 * numPassengers` , `price` parameter can't access numPassengers like this 
        ```js
        const createBooking = function (flightNum, price = 199 * numPassengers, numPassengers = 1) { }
        createBooking('LH123', 2)
        ```
    - because JS specifies these parameters in order/sequence 💡💡💡
        - so here `const createBooking = function (flightNum, price = 199 * numPassengers, numPassengers = 1) { }` <br>
            when JS reaches at `price` parameter then JS doesn't know about `numPassengers` <br>
            & due to this it wouldn't work

- Eg 3 : how to skip default value of parameters
    - now we can't leave blank as an argument for that default parameter value like this 
        ```js
        const bookings = []
        
        const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {

            const booking = {
                flightNum , 
                numPassengers, 
                price
            }

            console.log(booking)
            bookings.push(booking)
        }

        createBooking('LH123',  , 2) // output : error will come 
        ```
    - so to skip default value of parameters then just define `undefined` as an argument for that default parameter ✅
        ```js
        const bookings = []
        
        const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {

            const booking = {
                flightNum , 
                numPassengers, 
                price
            }

            console.log(booking)
            bookings.push(booking)
        }

        createBooking('LH123', undefined , 2) // output : {flightNum: "LH123", numPassengers: 1, price: 2}
        ```
