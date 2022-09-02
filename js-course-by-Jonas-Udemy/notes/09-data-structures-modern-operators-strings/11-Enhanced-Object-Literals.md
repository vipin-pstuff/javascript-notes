# Enhanced Object Literals

- Enhanced Object Literals concept only apply on object not array <br>
    because key & value pair concept comes inside only object , not in array 💡💡💡

- another new feature of ES6

- testing code 
    ```js
    const restaurant = {
        name : "Classico Italiano" ,
        location : "Via Angelo Tavanti 23, Firenze, Italy" ,
        categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] ,
        starterMenu : ['Focaccia', 'Bruchetta', 'Garlic', 'Bread', 'Caprese Salad'] ,
        mainMenu : ['Pizza', 'Pasta', 'Risotto'] ,
        openingHours : {
            thu: {
                open : 12 , 
                close : 22
            } , 
            fri: {
                open : 12 , 
                close : 23
            } , 
            sat: {
                open : 0 , // open 24 hours 
                close : 24
            } 
        } ,
    }
    ```
- this object is an object literal by using curly braces syntax
- now ES6 introduced `three ways` which makes it easier to write object literals like this above code 💡💡💡

## three ways to write object literals ✅

- `problem` : let's say we have an object i.e outside of this restaurant object like 
    - & then we can use `openingHours` object inside restaurant object like this
    ```js
    const openingHours = {
        thu: {
            open : 12 , 
            close : 22
        } , 
        fri: {
            open : 12 , 
            close : 23
        } , 
        sat: {
            open : 0 , // open 24 hours 
            close : 24
        } 
    } 

    const restaurant = {
        name : "Classico Italiano" ,
        location : "Via Angelo Tavanti 23, Firenze, Italy" ,
        categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] ,
        starterMenu : ['Focaccia', 'Bruchetta', 'Garlic', 'Bread', 'Caprese Salad'] ,
        mainMenu : ['Pizza', 'Pasta', 'Risotto'] ,
        openingHours : openingHours
    }

    console.log(restaurant) // output : we'll get openingHours object inside restaurant object  
    ```
    - but here is the problem that we used `openingHours` as key & value name also inside `restaurant` object <br> 
        so we can use enhance object literals way inside `restaurant` object 💡💡💡

- `About enhance object literals` : 
    - if we have variable & want to use that variable inside a object <br>
        & key name & value name is same then we don't need to write both inside that object 
    - we just need to define only key name , not value 💡💡💡

- `first way` : not defining object nam as value inside another key ✅
    - Eg 1 : using enhance object literals 
        ```js
        const openingHours = {
            thu: {
                open : 12 , 
                close : 22
            } , 
            fri: {
                open : 12 , 
                close : 23
            } , 
            sat: {
                open : 0 , // open 24 hours 
                close : 24
            } 
        } 

        const restaurant = {
            name : "Classico Italiano" ,
            location : "Via Angelo Tavanti 23, Firenze, Italy" ,
            categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] ,
            starterMenu : ['Focaccia', 'Bruchetta', 'Garlic', 'Bread', 'Caprese Salad'] ,
            mainMenu : ['Pizza', 'Pasta', 'Risotto'] ,
            openingHours 
        }

        console.log(restaurant) 
        ```
        - output : we'll get `openingHours` object inside `restaurant` object 
        - `How enhance object literal work ✅` : `const restaurant = {openingHours}` means behind the scene
            - `openingHours` will be stored as a key name & object value will be stored of `openingHours` object <br>
                which is outside the `restaurant` object 💡💡💡
    - Eg 1.1 : chaining openingHours object into something else 
        ```js
        // here we change the variable name , so
        const hours = {
            thu: {
                open : 12 , 
                close : 22
            } , 
            fri: {
                open : 12 , 
                close : 23
            } , 
            sat: {
                open : 0 , // open 24 hours 
                close : 24
            } 
        } 

        const restaurant = {
            name : "Classico Italiano" ,
            location : "Via Angelo Tavanti 23, Firenze, Italy" ,
            categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] ,
            starterMenu : ['Focaccia', 'Bruchetta', 'Garlic', 'Bread', 'Caprese Salad'] ,
            mainMenu : ['Pizza', 'Pasta', 'Risotto'] ,
            // here we also need to change , otherwise JS will not able to access 💡💡💡
            hours 
        }

        console.log(restaurant) // output : we'll get hours object value inside restaurant 
        ```
        
- `second way` : we can define function inside the object without using `function` keyword ✅ 
    - Eg : inside the object , creating a function without `function` keyword
        ```js
        const restaurant = {
            name : "Classico Italiano" ,
            location : "Via Angelo Tavanti 23, Firenze, Italy" ,
            categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] ,
            starterMenu : ['Focaccia', 'Bruchetta', 'Garlic', 'Bread', 'Caprese Salad'] ,
            mainMenu : ['Pizza', 'Pasta', 'Risotto'] ,

            message() {
                console.log("Hello World")
            }
        }

        restaurant.message() // output : Hello World 
        ```

- `third way` : we can do computation inside key/property name instead of writing them out manually as a value ✅
    - means we can also pass expression or doing computation as property/key inside the object 💡💡💡
    - computation means calculation
    - Eg : doing computation inside property/key name inside an object
        ```js
        const weekdays = ['mon' , 'tue' , 'wed' , 'thu' , 'fri', 'sat', 'sun']

        const hours = {
            [weekdays[3]]: {
                open : 12 , 
                close : 22
            } , 
            // like we can access array element also 💡💡💡
            [weekdays[4]]: {
                open : 12 , 
                close : 23
            } , 
            // like inside key/property we can do calculation 
                // here we used template literal & pass expression also 💡💡💡  
            [`day-${2 + 4}`]: {
                open : 0 , // open 24 hours 
                close : 24
            } 
        }         

        console.log(hours) // output : { thu : {...} , fri: {...}, day-6: {...}}
        ```
