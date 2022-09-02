# Destructuring Objects

- `Note` : for objects destructuring , we use curly braces 💡💡💡

- testing code : 
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

        order : function(starterIndex , mainIndex) {
            return [this.starterMenu[starterIndex] , this.mainMenu[mainIndex]] 
        }
    }
    ```

- `Imp Note 🔥` : while doing object destructuring 
    - `first` : inside of that curly braces , we need to write the exact property names <br>
        to extract variables from the object otherwise we won't be able to access properties 💡💡💡
    - `second` : in object destructuring , the order of elements doesn't matter <br>
        means we don't need to manually skip elements like we did in an array 💡💡💡 

## Examples - destructuring objects

- Eg 1 : using object destructuring 
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

        order : function(starterIndex , mainIndex) {
            return [this.starterMenu[starterIndex] , this.mainMenu[mainIndex]] 
        }
    }

    const {name, openingHours, categories} = restaurant
    console.log(name, openingHours, categories)
    /* output : Classico Italiano 
        {thu: Object, fri: Object, sat: Object}
        (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"] 
    */
    ```

- destructuring is useful concept when we're dealing with API call ✔️
    - API call - means to get data from another web application like weather data or data about movies , etc
    - usually these data comes in the form of objects i.e JSON data
    - so destructuring allows us to write less code ✔️
    - destructuring concept really used in modern applications 💡💡💡
    
- now what if we want the variable names to be different from the property names 
- Eg 2 : using object destructuring , defining different variable names for properties names ✅
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

        order : function(starterIndex , mainIndex) {
            return [this.starterMenu[starterIndex] , this.mainMenu[mainIndex]] 
        }
    }
    
    const {name: restaurantName , openingHours: hours , categories : tags} = restaurant
    console.log(restaurantName, hours, tags) // output : we'll get correct output
    ```
    - `const {name: restaurantName , openingHours: hours , categories : tags} = restaurant` means 
        - while doing object destructuring , then before colon sign `:` , actual property name will be defined <br> 
            & after colon sign , custom property or custom variable name will be defined ✔️✔️✔️
    - this example would be useful when we're dealing with third-party data

## object destructuring with default values ✅
    
- `problem that why we need default values while doing object destructuring ✅` :  
    - when we're dealing with third-party data like this above code , so like an object that we get from somewhere else 
        - eg : an API call , defining default values while doing object destructuring <br>
            then this could be really useful to have default values for that thing that we're trying to read/access a property <br>
            which doesn't exist inside that data/object/JSON
    - usually if we access that property which doesn't exist inside the object then we'll get `undefined` 💡💡💡
        - eg : `restaurant.menu` here `menu` property doesn't exists inside the object & we'll get undefined
    - so here we can define default values for this situation 💡💡💡

- Eg : defining default values while doing object destructuring 
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
        }
    }

    const { menu = [] , starterMenu: starters = [] } = restaurant
    console.log(menu , starters)
    // output : [] ['Focaccia', 'Bruchetta', 'Garlic', 'Bread', 'Caprese Salad']
    ```
    - `const { menu = [] , starterMenu: starters = [] } = restaurant` means 
        - why here we gave custom property name to `starterMenu` property of restaurant object
            - because we don't have `menu` property in that object that's why we gave default value to it 
            - but we have `staterMenu` property in the object , so we can't give default value directly <br> 
                because default value won't be applied to it that's why we gave custom variable name to it 
    - `Note ✅` : defining default values in destructuring (whether it's array or object)
        - when there's no value inside that destructure value <br>
            then default value will be stored inside that destructure variable 💡💡💡

- defining default values while doing destructuring then those default values will be helpful <br> 
    because when we're getting data from somewhere else then we don't know which data we want <br>
    so if we're accessing that data then we don't want undefined , so defining default values will be helpful like this above

## mutating values of global variables through object destructuring ✅ 

- Question :  
    ```js
    let a = 111 
    let b = 999
    const obj = { a: 23, b: 7, c: 14 }
    ```
    - here we want to put `23` value to `a` global variable & `7` value to `b` global variable  
    
- `Note : for solving this Question` : 
    - we can't say like this `const { a, b }` because `a` & `b` are already declared as global variables
    - & also can't do `let { a, b }` because it's means we're creating a new variables that we already have 💡💡💡
    - we can't also write like this `{a, b} = obj` 
        - because if we create code through curly braces then JS treat it as a code block & then equal sign <br>
            then we'll get an error 
        - put/wrap this line of code inside parenthesis like this `({a, b} = obj)` 💡💡💡

- Ans : of this question
    ```js
    let a = 111 
    let b = 999
    const obj = { a: 23, b: 7, c: 14 }
    ({a, b} = obj)
    console.log(a, b) // output : 23 7
    ```
    - `({a, b} = obj)` means here we wrap the destructuring syntax inside parenthesis

## nested Object destructuring ✅

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
    } 
}
```

- Eg : of nested object destructuring 
    ```js
    const { name, openingHours, categories } = restaurant
    const { fri } = openingHours
    console.log(fri)
    ```
    - Eg : of doing nested object destructuring further
        ```js
        const { name, openingHours, categories } = restaurant
        const { fri: {open : o, close : c} } = openingHours
        console.log(o , c) // output : 11 23
        ```
        - `const { fri: {open, close} } = openingHours` means here we're doing destructuring further
            - `Note` : put exact property name of `fri` nested object 💡💡💡

## practical use case of object destructuring 🔥

- `why we need object destructuring` :  
    - inside `restaurant` object we'll create another method 
    - so many times , we have functions with a lot of parameters . 
        - But then it can be hard to know the order of parameters for someone that's using a function
        - so instead of defining the parameters manually , we can just pass an object into the function as an argument <br>
            & then the function will immediately destructure that object 💡💡💡

- Eg 1 : practical use case of object destructuring ✅
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
         
        orderDelivery: function(obj) {
            console.log(obj)
        }
    }

    // practical use case of object destructuring 
    restaurant.orderDelivery({ 
        time: '22:30' , 
        address: 'Via del Sole, 21',
        mainIndex : 2,
        starterIndex : 2 , 
        // here we're just passing an object with data as an argument
        // & that's a pretty standard thing in JS especially in third-party libraries
    })
    ```
    - now inside parameter of orderDelivery() method , we can do object destructuring right away like this 
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
             
            // inside parameter of orderDelivery() method , we did a object destructuring 
            // by just defining exact property name
            orderDelivery: function({starterIndex, mainIndex, time, address}) {
                console.log(obj)
            }
        }

        restaurant.orderDelivery({ 
            time: '22:30' , 
            address: 'Via del Sole, 21',
            mainIndex : 2,
            starterIndex : 2 , 
        })
        ```
        - `Note ✅` : 
            ```js
            orderDelivery: function({starterIndex, mainIndex, time, address}) {
                console.log(obj)
            }
            ```
            - the great thing is that inside parameter of orderDelivery() method <br>
                we didn't define multiple parameters , we just define an object through object destructuring 💡💡💡
            - & inside that object destructuring parameter , <br> 
                we don't have to define property name of an object in order wise <br>
            - because in object destructuring , defining property names in order wise doesn't matter <br>
                but in array destructuring , defining variable names in order wise matter <br> 
                - depends on that we want & what we want to skip 💡💡💡
            - so due to no order sequence in object destructuring , makes it really easy for the user of this function <br>
                to specify basically the arguments 💡💡💡

- Eg 2 : default values with object destructuring inside parameter of a function 
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

        // a object destructuring parameter with default values 
        orderDelivery: function({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
            console.log(`Order received! ${this.starterMenu[starterIndex]} 
                and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
        }
    }

    restaurant.orderDelivery({ 
        time: '22:30' , 
        address: 'Via del Sole, 21',
        mainIndex : 2,
        starterIndex : 2 , 
    })

    restaurant.orderDelivery({ 
        address: 'Via del Sole, 21',
        starterIndex : 1
        // & rest of values will be taken as the default values of them 
    })

    // first output : of without default values
        // Order received! Garlic and Risotto will be delivered to Via del Sole, 21 at 22:30
    
    // second output : of some with default values
        // Order received! Bruchetta and Pizza will be delivered to Via del Sole, 21 at 20:00 
    ```

- `said by jonas 🔥` : 
    - so if you need to write a function with a lot of parameters <br>
        then we can use object destructuring as a parameter of that function
    - so keep this technique which makes useful even as the amount of parameters increases 💡💡💡
