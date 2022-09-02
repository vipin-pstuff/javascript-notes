# Destructuring Arrays

- Destructuring is a ES6 feature

## About Destructuring

- `Define` : it's a way of unpacking values from an array or an object into separate variables 
    - means it's used to break a complex data structure down into a smaller data structure like a variable 💡💡💡
- for arrays , we use destructuring to retrieve elements from the array & store them into variables in a very easy way 💡💡💡
- `2 types of destructuring` ✔️
    - array destructuring 
    - object destructuring
- `Note ✅`
    - for `array destructuring` , we use square bracket notation
    - for `object destructuring` , we use curly braces

## Examples - array destructuring 

- Eg 1 : unpack an array without using destructuring 
    ```js
    const arr = [2, 3, 4]
    const a = arr[0]
    const b = arr[1]
    const c = arr[2]
    ```
    - but now with destructuring , we can actually declare all the three variables at the same time 💡💡💡
    - Eg 1.1 : using destructuring to unpack an array 
        ```js
        const arr = [2, 3, 4]

        const [a, b, c] = arr
        console.log(a, b, c) // output : 2 3 4
        ```
        - `const [a, b, c] = arr` means here we go in a sequence 
        - `Note` : when we're doing destructuring (whether of array or object) then always use `const` keyword 💡💡💡

- Eg 2 : using array destructuring 
    ```js
    const restaurant = {
        name : "Classico Italiano" ,
        location : "Via Angelo Tavanti 23, Firenze, Italy" ,
        categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] ,
        starterMenu : ['Focaccia', 'Bruchetta', 'Garlic', 'Bread', 'Caprese Salad'] ,
        mainMenu : ['Pizza', 'Pasta', 'Risotto'] 
    }

    const [first, second] = restaurant.categories
    console.log(first, second) // output : Italian Pizzeria
    ```
    - `const [first, second] = restaurant.categories` means again we're going in sequence
- but let's say we want first & third categories 
- Eg 3 : using array destructuring to get elements by skipping some elements ✅
    ```js
    const restaurant = {
        name : "Classico Italiano" ,
        location : "Via Angelo Tavanti 23, Firenze, Italy" ,
        categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] ,
        starterMenu : ['Focaccia', 'Bruchetta', 'Garlic', 'Bread', 'Caprese Salad'] ,
        mainMenu : ['Pizza', 'Pasta', 'Risotto'] 
    }

    const [first , , third] = restaurant.categories
    console.log(first, third) // output : Italian Vegetarian
    ```
    - `const [first , , third] = restaurant.categories` means 
        - if we want to access skip that element which we don't want then leave that element by just putting `comma` 💡💡💡
        - now here second element (i.e first index element) will be skipped 

## Use Case of Destructuring ✅

- we use destructuring to do a lot of cool things 💡💡💡

- `Use Case of destructuring 1 ✅` : 
    - let's say that the owner of the restaurant now decided to switch the main & the secondary category 
    - so right now the primary is `Italian` & the secondary is vegetarian but now they wanted to switch it 
    - ans : so here we want main as secondary & secondary as main without using destructuring 
        ```js
        const restaurant = {
            name : "Classico Italiano" ,
            location : "Via Angelo Tavanti 23, Firenze, Italy" ,
            categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] ,
            starterMenu : ['Focaccia', 'Bruchetta', 'Garlic', 'Bread', 'Caprese Salad'] ,
            mainMenu : ['Pizza', 'Pasta', 'Risotto'] 
        }

        let [main , , secondary] = restaurant.categories
        console.log(main , secondary) // output : Italian Vegetarian

        const temp = main // we need "temp" variable , because we don' want to overwrite the value
        main = secondary 
        secondary = temp
        console.log(main , secondary) // output : Vegetarian Italian 
        ```
    - Ans : using array destructuring , to solve swapping problem ✅
        ```js
        const restaurant = {
            name : "Classico Italiano" ,
            location : "Via Angelo Tavanti 23, Firenze, Italy" ,
            categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] ,
            starterMenu : ['Focaccia', 'Bruchetta', 'Garlic', 'Bread', 'Caprese Salad'] ,
            mainMenu : ['Pizza', 'Pasta', 'Risotto'] 
        }

        let [main , , secondary] = restaurant.categories
        console.log(main , secondary) // output : Italian Vegetarian

        [main , secondary] = [secondary , main]
        console.log(main , secondary) // output : Vegetarian Italian 
        ```
        - `[main , secondary] = [secondary , main]` means 
            - here we didn't used the `let` or `const` keyword because we're reassigning values 💡💡💡 

- `Use Case of destructuring 2 ✅` : 
    - that we can have a function , return an array <br>
        & then we can immediately destructure the result into different variables
    - & due to this , it'll allows us to return multiple values from a function to order food 
    ```js
    const restaurant = {
        name : "Classico Italiano" ,
        location : "Via Angelo Tavanti 23, Firenze, Italy" ,
        categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] ,
        starterMenu : ['Focaccia', 'Bruchetta', 'Garlic', 'Bread', 'Caprese Salad'] ,
        mainMenu : ['Pizza', 'Pasta', 'Risotto'] ,

        order : function(starterIndex , mainIndex) {
            // here we're not doing any destructuring , we're just returning values in an array form ✔️
            return [this.starterMenu[starterIndex] , this.mainMenu[mainIndex]] 
        }
    }

    // let [main , , secondary] = restaurant.categories
    // console.log(main , secondary) 

    // [main , secondary] = [secondary , main]
    // console.log(main , secondary)

    const [starter , main] = restaurant.order(2 , 0)
    console.log(starter , main)
    ```
    - `const [starter , main] = restaurant.order(2 , 0)` means 
        - through destructuring way , we created the two variables at the same time out of one function call 💡💡💡

## nested Array Destructuring ✅

- Eg : how we can get values from nested array 
    ```js
    const nestedArr = [2, 4, [5, 6]]
    const [a, , c] = nestedArr
    console.log(a , c) // output : 2 [5 , 6]
    ```
    - but let's say we want all the individual values then we need to do destructuring inside destructuring
- Eg : getting individual values by using nested destructuring
    ```js
    const nestedArr = [2, 4, [5, 6]]
    const [i, , [j , k]] = nestedArr
    console.log(a , j , k) // output : 2 5 6
    ```

## destructuring with default values ✅

- Eg : getting an element which is not defined through destructuring
    ```js
    const [p, q, r] = [8, 9]
    console.log(p, q, r) // output : 8 9 undefined
    ```

- Eg 1 : defining default values while destructuring ✅
    ```js
    const [p = 1 , q = 1 , r = 1] = [8 , 9]
    console.log(p , q , r) // output : 8 9 1
    ```
    - default values will be applied on that destruct variable (like `r`) only when there's no actual value for `r` 
        - so here destructure `p` variable has already actual value defined inside `[8 , 9]` <br>
            then that `1` default value will not be applied 💡💡💡

- `Note` : defining default values while doing destructuring is useful
    - for instance , when we're getting data from an API 💡💡💡
