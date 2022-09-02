# Exporting & Importing in ES6 Modules

- using export & import
- & before doing any thing just link only script.js file in html & no script file 💡💡💡
- in ES6 modules , there're two types of exports i.e named exports & default exports 💡💡💡
- & we use ES6 modules when our application gets bigger & bigger , for small project we don't use modules

## named import & export statements - ES6 Modules

- `named export statement` : 
    - Example 1 : 
        - create `shoppingCart.js` module/file
        - `Note ✅` : module names also use a camelCase names 💡💡💡
        - `STEP 1` : inside shoppingCart.js
            ```js
            // Exporting module
            console.log('Exporting module')
            ```
        - `STEP 2` : inside script.js file (which is the main file of our project)
            ```js
            // Importing module
            import './shoppingCart.js' // OR import './shoppingCart'
                // so ES6 modules also work without defining file extension 
                // but it's necessary to define for clear understanding & doing further things 💡💡💡

            console.log('Importing module')
            ```
        - output : in the console tab 
            - we'll get an error i.e can't use import statement outside a module . so when we want to <br>
                connect a module to the html file then we need to specify `type="module"` on that script.js file <br>
                like this `<script type="module" src="script.js"></script>`
            - we'll get the output like this
                ```
                Exporting module
                Importing module
                ```
            - so the code in script.js module is parsed & before it's executed , <br>
                all the code in the modules i.e shoppingCart.js which is imported will be executed first & if we do this 
                ```js
                console.log('Importing module')
                import './shoppingCart.js' 
                ```
                - then again we'll get the same output because all the importing statements are hoisted to the top 💡💡💡
            - but for organizing & readability , we write all the import statement at the top only
            - & here we didn't use `'strict mode'` because all modules are executed in strict mode by default 💡💡💡

    - Example 2 :  
        - `STEP 1` : inside shoppingCart.js 
            ```js
            console.log('Exporting module')

            const shippingCost = 10
            const cart = []
            ```
            - now variables which are defined inside of this shoppingCart.js module <br>
                are actually scope to that module itself
            - means the module/file itself is the top-level scope & by-default , top-level scope <br>
                means all the top level variables are private inside of that variable i.e shoppingCart.js module <br>
                means we can access `shippingCost` variable inside the script.js file like this
                ```js
                import './shoppingCart.js'; 
                console.log('Importing module') ;
                console.log(shippingCost) ;
                ```
                - output : we'll get error i.e shippingCost is not defined
            - that's why `cart` & `shippingCost` variables are scoped to the current module only <br>
                so we can only use them inside inside that module itself only 💡💡💡

    - Example 3 : now if we wanted to use them in the script.js module then we would have to use exports 
        - & in ES6 modules , there're two types of exports i.e named exports & default exports 💡💡💡
        - & named imports is the way of exporting something from a module 💡💡💡
        - inside shoppingCart.js
            ```js
            console.log('Exporting module')

            const shippingCost = 10
            const cart = []
            const addToCart = function(product, quantity) {
                cart.push({product, quantity})
                console.log(`${quantity} ${product} added to cart`)
            }
            ```
            - now this addToCart() function is private inside of this module
            - but if we wanted to export addToCart() function , so that we can import it in some other module <br>
                then we just need to write `export` keyword before that `const` keyword of addToCart() 💡💡💡
        - `STEP 1` : inside shoppingCart.js module , using export statement to export that function from shoppingCart.js
            ```js
            console.log('Exporting module')

            const shippingCost = 10
            const cart = []

            export const addToCart = function(product, quantity) {
                cart.push({product, quantity})
                console.log(`${quantity} ${product} added to cart`)
            }
            // so using this export -> keyword creates a named export from this module 
            ```
            - now we can import that addToCart() function variable inside another module <br>
                we just have to write that variable name with the exact same name <br>
                while importing inside another module 💡💡💡
        - `STEP 2` : inside script.js 
            - importing that variable
            ```js
            // Importing module
            import { addToCart } from './shoppingCart.js'; 
            // Note ✅ : whatever we're importing stuff from another module inside a module 
                // then the name of the stuff must be exactly same as we defined inside that another module 💡💡💡
                // whenever we're importing function then that function must be imported as a variable only 
                    // instead of importing a function with parenthesis 💡💡💡

            console.log('Importing module') ;
            console.log(shippingCost) ;

            // now we can use addToCart() function because it exist in same scope now 
            addToCart('bread', 5) // output : 5 bread added to cart 
            ```
            - & syntax of importing without curly braces , we'll see later on
        - `Note ✅` : export stuff always need to happen in top level code , means if we do this 
            - inside shoppingCart.js module
                ```js
                console.log('Exporting module')

                const shippingCost = 10
                const cart = []

                if (true) {
                    export const addToCart = function(product, quantity) {
                        cart.push({product, quantity})
                        console.log(`${quantity} ${product} added to cart`)
                    }
                }
                ```
            - output : we'll get syntax error
            - that's why always used export statement outside any block of code means use it as globally

    - Example 4 : 
        - we can also export multiple things from a module by just using named export i.e `export` keyword 
        - & the main use case of `export` is to export multiple things
        - `STEP 1` : inside shoppingCart.js module 
            ```js
            console.log('Exporting module')

            const shippingCost = 10
            const cart = []

            export const addToCart = function(product, quantity) {
                cart.push({product, quantity})
                console.log(`${quantity} ${product} added to cart`)
            }

            const totalPrice = 237
            const totalQuantity = 23

            export { totalPrice, totalQuantity }
            ```
        - `STEP 2` : inside script.js module (which is our main module)
            - we need to export those variables inside the curly braces 
            ```js
            import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js'

            console.log('Importing module')

            addToCart('bread', 5)
            console.log(totalPrice, totalQuantity) // output : 237 23
            ```

    - Example 5 : 
        - we can also change the name of the stuff whatever we're importing by using `as` keyword 💡💡💡 
        - Eg : we want to call rename the totalPrice as price
        - `STEP 1` : inside script.js module
            ```js
            import { addToCart, totalPrice as price , totalQuantity } from './shoppingCart.js'

            console.log('Importing module')

            addToCart('bread', 5)
            console.log(price, totalQuantity) 
            // Note ✅ : after changing the name of that stuff i.e totalPrice which we import
                // now we can't use totalPrice otherwise we'll get an error because we change the name as -> price 💡💡💡
                // so we have to use this name i.e price  
             ```
        - we can also rename the stuff while exporting in the module 💡💡💡
        - Eg : renaming the stuff while exporting 
            - `STEP 1` : inside shoppingCart.js module
                ```js
                console.log('Exporting module')

                const shippingCost = 10
                const cart = []

                export const addToCart = function(product, quantity) {
                    cart.push({product, quantity})
                    console.log(`${quantity} ${product} added to cart`)
                }

                const totalPrice = 237
                const totalQuantity = 23

                export { totalPrice, totalQuantity as tq }
                ```
            - `STEP 2` : inside script.js module
                ```js
                import { 
                    addToCart , 
                    totalPrice as price , 
                    tq // here we have to use the tq because we rename the variable while exporting 💡💡💡
                } from './shoppingCart.js'

                console.log('Importing module')

                addToCart('bread', 5)
                console.log(price, tq) 
                ```

    - we can take that import even further also 

- `named import statement` : 
    - Example 1 : 
        - we can import all the exports from a module at the same time 💡💡💡
        - `STEP 1` : inside shoppingCart.js module
            ```js
            console.log('Exporting module')

            const shippingCost = 10
            const cart = []

            export const addToCart = function(product, quantity) {
                cart.push({product, quantity})
                console.log(`${quantity} ${product} added to cart`)
            }

            const totalPrice = 237
            const totalQuantity = 23

            export { totalPrice, totalQuantity as tq }
            ```
        - `STEP 2` : inside script.js file 
            ```js
            console.log('Importing module')

            import * as ShoppingCart from './shoppingCart.js'
                // it's kind-of like a class name because this is the convention
                    // when we're importing everything 💡💡💡
                // here we're exporting all the things from a module at the same time 
                    // by using * -> asterisk sign & then as -> keyword 💡💡💡
                // so behind the scene , when we import all the exports at the same time from a module
                    // then it'll create a namespace for all the values , exported from that module
            ```
            - so whenever we import all the exports from a module i.e shoppingCart.js <br>
                then if we want to access any stuff from that shoppingCart.js module <br>
                then we need to use `ShoppingCart` variable as object class <br>
                & those stuff will be used as properties & methods like this 💡💡💡
        - `STEP 3` : now accessing the stuff 
            ```js
            console.log('Importing module')

            import * as ShoppingCart from './shoppingCart.js'
            
            ShoppingCart.addToCart('bread' , 5) // output : 5 bread added to cart
            console.log(ShoppingCart.totalPrice) // output : 237
            ```

## default import & export statements - ES6 Modules

- Example 1 : export default
    - usually , we use default export when we only want to export one thing per module <br>
        that's why they are called default 💡💡💡
    - `STEP 1` : inside shoppingCart.js module
        ```js
        console.log('Exporting module')

        const shippingCost = 10
        const cart = []

        export const addToCart = function(product, quantity) {
            cart.push({product, quantity})
            console.log(`${quantity} ${product} added to cart`)
        }

        const totalPrice = 237
        const totalQuantity = 23

        export { totalPrice, totalQuantity as tq }

        // first we write export -> keyword then default -> keyword
        export default function(product, quantity) {
            cart.push({product, quantity})
            console.log(`${quantity} ${product} added to cart`)
        }
        // Note ✅ : while export default then we don't give any name of that function 💡💡💡
            // just like here , we're just exporting 
            // now while import it inside another module , we have to define any name we want 💡💡💡 
        ```
    - `STEP 2` : inside script.js file
        ```js
        console.log('Importing module')

        import * as ShoppingCart from './shoppingCart.js'

        import add from './shoppingCart.js'
            // this will import the export default that function definition as a value 
        ```
        - but here we can see that we're importing stuff from same module twice <br>  
            & this not a problem but usually we don't want to make our code duplicate 💡💡💡
        - so uncomment the line of code i.e import * as ShoppingCart from './shoppingCart.js'
    - `STEP 2.1` : using the `add` variable
        ```js
        console.log('Importing module')

        import * as ShoppingCart from './shoppingCart.js'

        import add from './shoppingCart.js'
        add('pizza', 2) // output : 2 pizza added to cart
        ```
    - now we could mix all of them in the one & same import statement <br>
        means we could have default import & named imports & named exports all at the same time 💡💡💡  
    - `STEP 3` : putting default import & named imports & named exports all inside the same import statement
        ```js
        // Note ✅ : so a default import will always be defined outside the curly braces
            // & all named imports will come inside the curly braces while importing 💡💡💡
        console.log('Importing module')

        import add , { addToCart, totalPrice as price, tq } from './shoppingCart.js'
        add('pizza', 2)
        console.log(price)
        ```
        - `Best practices ✅` : however, in practical , 
            - we usually never mix named exports & default exports in the same module 💡💡💡 <br>
                so avoid it & keep things simple 
            - but we can keep as per our situation 

        - so change code like this 
        ```js
        console.log('Importing module')
        import add from './shoppingCart.js' 
            // so this is the preferred style that just use one export default in each module 💡💡💡
        add('Pizza', 2)
        ```
    - `Note - importing default export ✅` :
        - while importing that default export , we don't put that default thing inside curly braces <br>
            for designer perspective & easy to know that it's a export default 

## proving imports as a life connection to exports 

- Example : here we're proving imports as a live connection to exports
    - `STEP 1` : inside shoppingCart.js module
        ```js
        console.log('Exporting module')

        const shippingCost = 10
        export const cart = [] // here cart -> variable is contain empty array value

        export const addToCart = function(product, quantity) {
            cart.push({product, quantity})
            console.log(`${quantity} ${product} added to cart`)
        }

        const totalPrice = 237
        const totalQuantity = 23

        export { totalPrice, totalQuantity as tq }

        export default function(product, quantity) {
            cart.push({product, quantity})
            console.log(`${quantity} ${product} added to cart`)
        }
        ```
    - `STEP 2` : inside script.js file 
        ```js
        console.log('Importing module')
        import add, { cart } from './shoppingCart.js' 
        add('Pizza', 2) // output : 2 Pizza added to cart
        add('bread', 5) // output : 5 bread added to cart
        add('apples', 4) // output : 4 apples added to cart

        console.log(cart) // output [{...}, {...}, {...}]
            // so here we didn't got the empty array
        ```
        - so this proves that import of `cart` is simply not a copy of the value that we exported <br>
            because cart is a life connection means we mutated the array value of `cart` variable 
        - means things we're importing all the exported from a module inside another module are connected with each other
        - so imports are not copies of the export means they're like a live connection <br>
            means that point to the same place in memory because <br> 
            if it was a copy then we would not get anything in the array 💡💡💡

- `said by jonas ✅`
    - import & export is the foundation of how we organize a modern JS code base 💡💡💡
    - so repeat this lecture again because it's most important  
