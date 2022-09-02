# spread operator 

- `Imp Note 🔥` : spread operator works on only arrays (but that's not entirely true)
    - because actually , the spread operator works on all iterables
    - `iterables` are arrays , strings , maps , sets but not objects 💡💡💡

## About spread operator 

- `define` : we use spread operator to expand an array into all it's elements
    - means unpacking all the array elements at one 💡💡💡
- spread operator `doesn't change/update the original array` 💡💡💡
- to use spread operator to expand an array we use three dots `...` inside the square bracket notation 💡💡💡

## Examples - spread operator with array 

- Eg 1 : of normal way 
    ```js
    const arr = [7, 8. 9]
    const badNewArr = [1, 2, arr[0], arr[1], arr[2]] // here manually doing
    console.log(badNewArr) // output : [1, 2, 7, 8, 9] 
    ```
    - so here we got brand new array & this is quite common stuff that we do 
    - but after ES6 , we have much better way i.e spread operator 

- Eg 2 : of spread operator 
    ```js
    const arr = [7, 8. 9]
    const newArr = [1, 2, ...arr]
    console.log(newArr) // output : [1, 2, 7, 8, 9] 
    ```
    - `[1, 2, ...arr]` means spread operator will take all the values out of that `arr` 
        - & then write them individually as we did manually above 💡💡💡

- Eg 3 : of spread operator 
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

    const newMenu = [...restaurant.mainMenu, 'Gnocci'] 
    console.log(newMenu) // output : ['Pizza', 'Pasta', 'Risotto', 'Gnocci']
    ```
    - `const newMenu = [...restaurant.mainMenu, 'Gnocci']` means 
        - spread operator doesn't change the original array 💡💡💡
        - so we're making a brand new array inside square bracket notation

- `Note ✅` : 
    - you might have noticed that spread operator is same as destructuring <br>
        because it also helps to get elements out of arrays
    - but the big difference is that the spread operator takes all the elements from the array <br>
        & we also doesn't need to create new variables (but depends on situation) 

- `use case of spread operator ✅` :  
    - `first use case` : use it in that situation 
        - when we need to write multiple values separated by commas inside an array
        - Eg : printing individual elements of an array
            ```js
            const arr = [7, 8, 9]
            const newArr = [1, 2, ...arr]
            console.log(newArr) // output : [1, 2, 7, 8, 9] 
            console.log(...newArr) // output : 1 2 7 8 9 
            ```
        - so when we need individual elements of an array then use the spread operator 💡💡💡

    - `second use case` : when we pass arguments into a function ✅
        - let's create orderPasta() function inside `restaurant` object & order pasta always has 3 ingredients
        - this example will be real life ✔️ 
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

            orderPasta: function(ing1 , ing2 , ing3) {
                console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`)
            } 
        }

        const ingredients = [
            prompt('Let\'s make pasta! Ingredient 1?') , 
            prompt("Ingredient 2?") , 
            prompt("Ingredient 3?")
        ]

        console.log(ingredients) // output : ["a", "b", "c"]

        // passing individual elements manually
        restaurant.orderPasta(ingredients[0] , ingredients[1], ingredients[2])

        // using spread operator 
        restaurant.orderPasta(...ingredients)
        ```

## use case of spread operator 🔥

- `two important use cases of spread operator ✅` : 
    - `first` : create shallow copies of arrays
    - `second` : and to merge two arrays together 💡💡💡

- Eg : of two important thing of spread operator 
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

    // first - copy arrays 
    const mainMenuCopy = [...restaurant.mainMenu] 

    // second - join/merge two or more arrays through spread operator 
    const menu = [...restaurant.starterMenu , ...restaurant.mainMenu]
    console.log(menu)
    ```

## Examples - spread operator with string iterable

- Eg : of spread operator with string iterable
    ```js
    const str = "Jonas"
    const letters = [...str, ' ' , "S."]
    console.log(letters) // output : ["J", "o", "n", "a", "s", " ", "S."]
    ```

- `Note of spread operator` : we can't use spread operator inside template string literals like this
    ```js
    const str = "Jonas"
    console.log(`${...str} Go`) // output : error
    ```
    - because multiple values separated by a comma are usually only expected <br>
        when we pass arguments into a function or when we build a new array 💡💡💡

## Examples - spread operator with object (doing shallow copy) 🔥

- Eg : doing shadow copy through spread operator with an object ✅
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

    // objects
    const newRestaurant = {foundedIn: 1998 , ...restaurant, founder: "Guiseppe"}
    console.log(newRestaurant)

    // here did shallow copy of an original object
    const restaurantCopy = { ...restaurant }
    restaurantCopy.name = "Ristorante Roma"
    console.log(restaurantCopy.name) // output : Ristorante Roma 
    console.log(restaurant.name) // output : Classico Italiano
    ```
    - `Note about spread operator with a object ✅` : 
        - so here we copied the original object through spread operator & we made changes in that new object 
        - because as we know that normally when do changes in one object then another object will also be changed <br>
            if both are pointing/refer to same memory address 💡💡💡
        - so instead of using `Object.assign()` method , we can use spread operator <br>
            because both can do only one level deep but spread operator is easy to use than `Object.assign()` method 
            & by using spread operator , if we update copied object than original object will not be updated 💡💡💡  
        - & for deep clone , use Lodash library or etc ways 

## Extra Note 

- shallow clone VS Deep Clone : 
    https://www.linkedin.com/posts/priya-bagde_javascript-typescript-reactjs-activity-6948107330982940673-e5oV?utm_source=linkedin_share&utm_medium=member_desktop_web
