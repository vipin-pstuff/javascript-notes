# The Module Pattern

- the main goal of module pattern is to encapsulate functionality to have private data & to expose a public API 💡💡💡 <br>
    & achieving all of that is just using a function because functions give us private data by-default <br>
    & allow us to return values which can become our public API 💡💡💡

## Steps - Module pattern

- `STEP 1` : so we start with a function & usually we write an IIFE 
    - because we don't have to call that function separately & ensure that it's only called once 
    - inside empty scrip.js file 
        ```js
        (function() {

        })() 
        // we just want to call this function once because the goal of this IIFE function is that 
            // not to use reuse for multiple times 💡💡💡
            // so the only purpose of this function is to create a new scope & return data just once 💡💡💡
        ```

- `STEP 2` : adding stuff inside the IIFE function
    ```js
    (function() {
        const cart = []
        const shoppingCart = 10
        const totalPrice = 237
        const totalQuantity = 23

        const addToCart = function(product, quantity) {
            cart.push({product, quantity})
            console.log(`${quantity} ${product} added to cart`)
        }

        const orderStock = function(product, quantity) {
            console.log(`${quantity} ${product} ordered from supplier`)
        }
    })() 
    // now all of these data are private , because things are inside of the scope of the function 💡💡💡
    ```
    - `STEP 2.1` : now we have to return some stuff from this IIFE function in order to return a public API
        ```js
        (function() {
            const cart = []
            const shoppingCart = 10
            const totalPrice = 237
            const totalQuantity = 23

            const addToCart = function(product, quantity) {
                cart.push({product, quantity})
                console.log(`${quantity} ${product} added to cart`)
            }

            const orderStock = function(product, quantity) {
                console.log(`${quantity} ${product} ordered from supplier`)
            }

            return {
                // returning an object which contain only those stuff which we want to make public 
                addToCart , 
                cart , 
                totalPrice , 
                totalQuantity
            }
        })() 
        // if we just calling this IIFE function then we'll get nothing because we're returning the output 
        ```
    - `STEP 2.2` : storing the result in a variable
        ```js
        const ShoppingCart = (function() {
            const cart = []
            const shoppingCart = 10
            const totalPrice = 237
            const totalQuantity = 23

            const addToCart = function(product, quantity) {
                cart.push({product, quantity})
                console.log(`${quantity} ${product} added to cart`)
            }

            const orderStock = function(product, quantity) {
                console.log(`${quantity} ${product} ordered from supplier`)
            }

            return {
                addToCart , 
                cart , 
                totalPrice , 
                totalQuantity
            }
        })()

        ShoppingCart2.addToCart('apple', 4) // output : 4 apple added to cart
        ShoppingCart2.addToCart('pizza', 2) // output : 2 apple added to cart
        // Note ✅ : if we try to access ShoppingCart variable just writing ShoppingCart inside the console tab 
            // then we can't able to access it because we're still inside of a module
            // & everything i.e in a module is private to that module
            // because in global scope , we're not creating any of those & even that ShoppingCart -> variable
            // because it's scoped only to that module

        console.log(ShoppingCart) // output : we'll get the object

        console.log(ShoppingCart.shippingCost) // output : undefined
            // & that's actual implementation of the module pattern 💡💡💡
        ```
        - now in module pattern , we need to understand that how & why this work
            - means how do we have access to the `cart` variable & even able to manipulate it <br>
                so how we're able to do changes even if this IIFE has already returned <br>
                because that IIFE function was only executed once in the beginning & finally we just only return that object <br>
                & assign it to the variable & then we're able to manipulate the data which is inside of IIFE function
            - so all of this working i.e closures 💡💡💡 . so closures allow a function to have access to all the variables <br>
                that were present at it's birthplace 
            - Eg : we're able to access addToCart() function & manipulate data because we return the addToCart() function <br>
                & addToCart function birthPlace i.e that complete IIFE function & same with other things which we returned
            - & these things work because it's not that like cart variable is also in that object <br>
                means we didn't use `this.cart` inside that addToCart() function , we directly use a variable name <br>
                so can print those things which are private in that module i.e addToCart() function <br>
                we're not returning that private things inside an object 💡💡💡
    - `STEP 2.3` : defining private things only inside that private module i.e addToCart() function
        ```js
        const ShoppingCart = (function() {
            const cart = []
            const shoppingCart = 10
            const totalPrice = 237
            const totalQuantity = 23

            const addToCart = function(product, quantity) {
                cart.push({product, quantity})
                console.log(`${quantity} ${product} added to cart (sipping cost is ${shippingCost})`)
                // here we accessed the shippingCost -> variable inside this module i.e addToCart() function
                // but we're not returning it inside that object 
            }

            const orderStock = function(product, quantity) {
                console.log(`${quantity} ${product} ordered from supplier`)
            }

            return {
                addToCart , 
                cart , 
                totalPrice , 
                totalQuantity
            }
        })()

        ShoppingCart2.addToCart('apple', 4) 
        ShoppingCart2.addToCart('pizza', 2) 

        console.log(ShoppingCart) 

        console.log(ShoppingCart.shippingCost)
        ```
        - so all this happening due to closure

- `problem with Module Pattern ✅` : 
    - if we wanted one module per file , like we have with ES6 modules then we would <br>
        have to create different scripts & link all of them in the HTML file
    - & this will creates a couple of problems like we have to careful with the order in which we declare them in HTML <br>
        & variables are in global scope & we also couldn't bundle them together using a module bundler 💡💡💡 <br>
        & module bundler is important in modern JS dev
    - so Module pattern does work quite good but it has some limitations <br>
        that's why we have native modules i.e ES6 modules 💡💡💡
