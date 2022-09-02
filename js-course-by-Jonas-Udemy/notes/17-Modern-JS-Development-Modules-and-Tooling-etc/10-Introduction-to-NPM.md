# Introduction to NPM

- `about lodash library` : 
    - when we install `loadash` module/library <br>
        - we can't install normal loadash module because that one use commonJS <br>
            so we can't use commonJS module system without a module bundler 
        - so when we go to website of loadash & scroll down at the bottom & we'll see `lodash-es` <br>
            so `es` means ES6 modules
    - lodash library contains a lot of properties & methods which we don't have in JS 

## Steps - to install a package via NPM

- `STEP 1` : on terminal , run a command to create package.json file
    ```powershell
    npm init -y
    ```
    - package.json file is to handle the stuff & information about packages that we installed <br>
        which are important for a project
    - so package.json file contains information of the entire configuration of our project

- `STEP 2` : now install loadash library
    ```powershell
    npm i lodash-es
    ```
    - after install it , then inside the package.json file , we'll see `dependencies` object added <br>
        which contain the version of the library which we installed 

- now when we got to `node_modules/lodash-es` folder , & inside of it , we want to import `cloneDeep.js`
- `STEP 3` : importing cloneDeep.js module inside script.js file 
    ```js
    import cloneDeep from './node_modules/lodash-es/cloneDeep.js'
    ```
    - so we already know that we try to copy/clone a nested object but now we'll use lodash library
    - `STEP 3.1` : inside script.js file , creating an object which contain nested object
        ```js
        import cloneDeep from './node_modules/lodash-es/cloneDeep.js'

        const state = {
            cart : [
                {product: 'bread', quantity: 5} , 
                {product: 'pizza', quantity: 5} , 
            ],
            user: { loggedIn : true }
        }

        const stateClone = Object.assign({} , state)
            // we used Object.assign to clone/copy 

        console.log(stateClone) // output : we'll get the output as we define a value
        ```
    - `STEP 3.2` : now let's change the nested object
        ```js
        state.user.loggedIn = false;
        console.log(stateClone)
        // output : inside the user object , value of loggedIn is also false
        ```
    - so we already did till yet at that time , & we should use lodash library instead of `Object.assign()` <br>
        because if we wanted to manually create a deep copy/clone then lodash will work great 💡💡💡
    - `STEP 3.3` : using cloneDeep() function of lodash library to deep clone the nested objects ✅
        ```js
        import cloneDeep from './node_modules/lodash-es/cloneDeep.js'

        const state = {
            cart : [
                {product: 'bread', quantity: 5} , 
                {product: 'pizza', quantity: 5} , 
            ],
            user: { loggedIn : true }
        }

        const stateClone = Object.assign({} , state) 
        const stateDeepClone = cloneDeep(state) 

        // updating the value
        state.user.loggedIn = false 

        console.log(stateClone) 
            // output : inside the object , we'll get loggedIn value as false only 
                // means value didn't get updated

        console.log(stateDeepClone) // output : inside the object , we'll get loggedIn value as true
            // so value gets updated 💡💡💡
        ```
    - so when we want to update/change the stuff of nested object inside an object then use cloneDeep.js module <br>
        of lodash library instead of using Object.assign() method 💡💡💡

- `best practices : Note ✅` : 
    - let's say you want to move your project to another computer or share it wither another developer <br>
        or even check it into version control like Git
    - now in all of these situations , you should never ever include the `node_modules` folder <br> 
        but you'll ask what if have 200 dependencies & if we don't include `node_modules` folder <br>
        then we have to download each packages one by one 
    - that's why here comes `package.json` file ,
        - `STEP 1` : delete `node_modules` folder
        - `STEP 2` : inside terminal , run `npm i` 
            - so NPM will reach into your package.json file & look at the dependencies & install them back

- `said by jonas` : now one problem is here 
    - i.e inside script.js file we specify the complete path to import that cloneDeep.js module 
    - so we'll use Parcel to fix this 💡💡💡 
