# Configuring Babel and Polyfilling

- previously we're done with bundling . Now let's configure Babel to transpile <br>
    means convert that modern JS code into ES5 code 💡💡💡

- we need to transpile code into ES5 code because there're are many people who are stuck <br>
    on like a windows XP , old OS , etc but we want our applications to work for everyone <br>
    so we need to keep everyone in mind ✔️✔️✔️

- Now actually parcel automatically use Babel to transpile the code 
    - & we can configure Babel a lot if we want to like <br>
        Eg : defining exactly what browsers should be supported but that's a ton of work & we don't want that 
    - instead of that , Parcel makes some default decisions for us & most of the time we'll use those defaults

## Overview of babel

- to get the general overview of how babel works : https://babeljs.io/docs/en/
    - then go to `plugins` section 
    - so basically babel works with plugins & presets which both can be configured

- A plugin is just a specific JS feature that we want to transpile/convert 
    - let's say we only want to convert arrow function into ES5 function but leave everything else in ES6 code <br>
        example like const & let declarations
    - & usually we don't do this becaus we want to transpile everything at the same time <br>
        that's why usually instead of using single plugins for each of those features <br>
        Babel actually uses `presets`
    - `Preset` is just a bunch of plugins bundled together <br>
        & by-default , Parcel use that preset which is like used by babel i.e `@babel/preset-env` 
    - & that `preset` automatically select which JS features should be compiled based on browser support <br>
        which happen automatically & babel will convert all features <br>
        so only browsers that are barely used anymore that's why by the transpiling that preset

## Example 

- `STEP 1` : run the command `npm run start`
- `STEP 2` : inside the script.js file 
    - let's say we wrote the code of class & object like this
        ```js
        class Person {
            #greeting = "Hey" ;
            constructor(name) {
                this.name = name ; 
                console.log(`${this.#greeting}, ${this.name}`) 
            }
        }
        ```
- `STEP 3` : when we go inside the `script.75da7f30.js` then 
    - we can see that `Person` class is converted into Person object which is converted into ES5 <br>
        & there's no `class` keyword ✔️
    - & those `preset` which are experimental in Babel can't be converted into ES5 code <br>
        means those ES6 features are in experimental for transpiling can't be converted in to ES6 code ✔️
        & those features which are new in modern JS can't be converted into ES5 code via Babel <br>
        that's why here polyfill concept comes 💡💡💡
    - so for the new modern features of JS , we need to polyfill them <br> 
        now babel used to do polyfilling but babel recommend to use other library <br>
        so we need to manually import data ✔️✔️✔️
- `STEP 4` : importing `core-js` library & `stable` is a part of this library of Parcel
    - but we can directly import this library but parcel is smart enough to install it for you automatically <br>
        but if it's not installed then install it manually `npm i core-js`
    - `STEP 4.1` : inside script.js file 
        ```js
        import 'core-js/stable'

        Promise.resolve('TEST').then(res => {
            return console.log(res)
        })

        const arr = ["apple" , "banana", "orange"]

        const output = arr.find(fruit => {
            return fruit === "apple"
        })
        console.log(output)
        ```
        - but inside the script.75da7f30.js , this promise & find() method didn't converted & remain same <br> 
            so we need to polyfill these modern code
    - so polyfiling means recreate defined function & make it available in that bundle i.e script.75da7f30.js <br>
        so that it can work & inside of that bundle file , like if we search array.prototype.find <br>
        then find() method is created but other methods of array also created which we didn't even used in our code <br>
        so if we want to others then we can define only those features that we actually want to polyfill <br>
        but this is lot of work & but doing that , will reduce the bundle size like 💡💡💡
    - `STEP 4.2` : inside script.js file , polyfilling only those features which we used in our code 
        ```js
        import 'core-js/stable/array/find'
        import 'core-js/stable/promise'
        ```
        - but doing these way is a lot of work , so usually we don't do this if you're not worried about bundled size
        - but now one thing is still not polyfill i.e that promise code , so for this we need to install & import <br>
            `regenerator-runtime/runtime` 💡💡💡
    - `STEP 4.3` : inside script.js file , polyfilling the promise code 
        - first , install that regenerator-runtime library `npm i regenerator-runtime` <br>
            so this library for polyfilling the async function
        - second , then import it 
        ```js
        import 'core-js/stable'
        import 'regenerator-runtime/runtime'

        Promise.resolve('TEST').then(res => {
            return console.log(res)
        })

        const arr = ["apple" , "banana", "orange"]

        const output = arr.find(fruit => {
            return fruit === "apple"
        })
        console.log(output)
        ```
    - & maybe things changed due to new update , so use the version which is used in the lecture i.e 
        ```json
        "dependencies" : {
            "core-js" : "^3.6.5" ,
            "leaflet" : "^1.6.0" ,
            "lodash-es" : "^4.17.15" ,
            "regenerator-runtime" : "^0.13.7"
        } , 
        "devDependencies" : {
            "parcel" : "^1.12.4"
        }
        ```
