# CommonJS Modules

- apart from ES6 modules (native modules) & Module Pattern , <br>
    there are other module systems which have been used by JS in the past <br> 
    but they were not native JS means those other module systems reply on some external implementations <br>
    - AMD Modules & Common JS modules
- CommonJS modules are worth to know

## About CommonJS modules

- CommonJS modules is important because it's used in Nodejs for almost all of it's existence <br>
    but in Nodejs , ES modules also implemented & Nodejs is a way of running JS on a web server outside of a browser
- CommonJS module system also used in all the modules/packages of NPM 
- it's also called node modules 💡💡💡
- `Note ✅` : we can't use commonJS modules without a module bundler 💡💡💡

## Steps - to use CommonJS modules

- `STEP 1` : inside shoppingCart.js module
    - Nodejs documentation example : https://nodejs.org/api/modules.html 👍 
    ```js
    // Nodejs Documentation example 
    const { PI } = Math;
    exports.area = (r) => PI * r ** 2;
    exports.circumference = (r) => 2 * PI * r;

    // our Example 
    const shippingCost = 10
    const cart = [];

    exports.addToCart = function (product, quantity) {
      cart.push({ product, quantity });
      console.log(
        `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
      );
    };

    exports.message = "This is Nodejs module";

    // Note ✅ : when we want to export specific at a time then we use exports -> object 💡💡💡
        // on that variable name or a function name as a property of exports -> object
        // but don't use exports -> object before const or let keywords , 
            // because we're not using node modules , not ES6 modules 
    ```

- `STEP 2` : inside index.js file
    ```js
    const circle = require("./ShoppingCart.js");
    const shoppingDetail = require("./ShoppingCart.js");

    console.log(+circle.area(4).toFixed(2), parseInt(circle.circumference(4).toFixed(2)));

    shoppingDetail.addToCart("Pizza", 4)
    console.log(shoppingDetail.message);
    ```

- see the 70 - node modules lecture for how to export multiple things at time from a module 💡💡💡

- `said by jonas` : in the future , ES6 modules will replace all these different module systems
