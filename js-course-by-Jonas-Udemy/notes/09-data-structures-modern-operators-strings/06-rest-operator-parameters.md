# Rest operator parameters

- rest operator/pattern is same as spread operator with same syntax <br>
    but rest operator does the opposite of the spread operator ✔️✔️✔️

- so we used the spread operator to build new arrays or to pass multiple values into a function <br>
    so these are two use cases of spread operator & in both use cases , we use the spread operator <br>
    to expand an array into individual elements ✔️

- we use rest operator to collect multiple elements & condense them into an array . <br>
    so this is opposite of spread operator 💡💡💡

## Spread operator VS Rest Operator ✅

- `spread operator` : used to unpack an array/object means it'll expand
- `rest operator` : used to pack elements into an array/object means it'll compress 

## Examples - spread operator VS rest operator pattern 🔥

- Eg : using spread operator on right side of assignment operator `=` ✅
    ```js
    const arr = [1, 2, ...[3, 4]]
    ```
    - here we use spread operator on right side of assignment operator `=` 
    - however we can also use it on the left hand side of assignment operator `=` for destructuring <br>
        then it'll become rest operator syntax 💡💡💡
    
- Eg : using spread operator on left side of assignment operator `=` for destructuring to make rest operator syntax ✅
    ```js
    const [a, b, ...others] = [1, 2, 3, 4, 5]
    console.log(a, b, others) // output : 1 2 [3, 4, 5]
    ```
    - now this spread operator become rest operator syntax
    - `const [a, b, ...others] = [1, 2, 3, 4, 5]` means 
        - here this would be useful when we have multiple elements in an array or multiple arguments while calling a function 
        - `[a, b, ...others] = [1, 2, 3, 4, 5]` means 
            - here we get individual value of `a` then `b` & then we don't know how much value we have <br>
                so we used rest operator syntax pattern to get remaining elements inside an new array 💡💡💡 
    - so the rest operator pattern collects the elements that are unused in the destructuring assignment 💡💡💡

- `Note of using rest operator ✅` : 
    - we can't use rest operator like this way `const [1, 2, ...others] = [1, 2, 3, 4, 5]` other wise we'll get an error
    - because in programming , on left side we create variables not numbers 💡💡💡

## Example - rest operator pattern with array destructuring 

- Eg : using rest operator pattern 
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

    const [pizza, , risotto, ...othersFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
    console.log(pizza, risotto, otherFood) 
    // output : Pizza Risotto ['Focaccia', 'Bruchetta', 'Garlic', 'Bread', 'Caprese Salad']
    ```
    - rest operator pattern syntax collects all the array after the last variable <br>
        i.e `risotto` is a variable inside array destructuring 💡💡💡
    - means rest operator pattern syntax doesn't include any skipped elements <br>
        when we skip elements while doing array destructuring 💡💡💡 <br>
        that's why rest operator pattern syntax always used at last inside array destructuring or object destructuring 💡💡💡
    - Eg : we can't use rest operator pattern syntax in the middle like this ✔️
        ```js
        const [pizza, , risotto, ...othersFood, bread] = [...restaurant.mainMenu, ...restaurant.starterMenu]
        ```
        - then we'll get an error i.e Rest element must be last element
        - because JS will not able to know which it should include & which should be skipped 
    - `Note for rest syntax pattern ✅` : 
        - inside an array or object destructuring , there can only one rest operator pattern syntax 💡💡💡 <br>
            shouldn't be more than one 

## Examples - rest operator pattern with object destructuring 

- `Note of rest operator with object destructuring ✅` : 
    - when we're using rest operator pattern syntax with object destructuring <br>
        then remaining elements will be collected into a new object & not into a new array 💡💡💡

- Eg : rest operator with object destructuring 
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

    const { sat, ...weekdays} = restaurant.openingHours
    console.log(weekdays) 
    // output : {thu: {...}, fri: {...}}
    ```
    - `const { sat, ...weekdays} = restaurant.openingHours` means 
        - here `weekdays` variable only contain `thu` & `fri` objects but not of `sat` <br>
            because we already took saturday object value before inside it's own variable i.e `sat` 💡💡💡
        - & then we collected the rest of the properties into it's own new object i.e `weekdays` variable 

## Examples - rest operator pattern with functions 

- Eg 1 : rest operator pattern with functions 
    ```js
    const add = function() {

    }

    add(2, 3)
    add(5, 3, 7, 2)
    add(8, 2, 5, 3, 2, 1, 4)
    ```
    - `Note ✅` : always remember that we use rest operator pattern on left side not on right side <br>
        if we use rest operator pattern on right side then it'll become spread operator <br>
        - means in spread operator with function , we used spread operator inside a function as an argument <br>
        - but in rest operator pattern with function , we use rest operator pattern as a parameter inside a function 💡💡💡  
    - Eg 1.1 : rest operator pattern with a function 
        ```js
        const add = function(...numbers) {
            console.log(numbers)
        }

        add(2, 3) // output : [2, 3]
        add(5, 3, 7, 2) // output : [5, 3, 7, 2]
        add(8, 2, 5, 3, 2, 1, 4) // output : [8, 2, 5, 3, 2, 1, 4]
        ```
        - so rest operator pattern takes multiple values & packs them into one array. 💡💡💡 <br>
            so it's opposite of spread operator . 
        
- Eg 2 : rest operator pattern with functions 
    ```js
    const add = function(...numbers) {
        let sum = 0 
        for (let i = 0 ; i < numbers.length ; i++) {
            sum = sum + numbers[i]
        }

        console.log(sum)
    }

    add(2, 3) // output of sum : 5
    add(5, 3, 7, 2) // output of sum : 17
    add(8, 2, 5, 3, 2, 1, 4) // output of sum : 25
    ```

- Eg 3 : spread & rest operator pattern with function (packing & unpacking values)
    ```js
    // & here we again pack the values through rest operator 
    const add = function(...numbers) {
        let sum = 0 
        for (let i = 0 ; i < numbers.length ; i++) {
            sum = sum + numbers[i]
        }

        console.log(sum)
    }

    const x = [23, 5 , 7]
    add(...x) // here we unpack the values through spread operator 
    ```
    - so rest operator pattern is great because in future if we pass more data as an argument of a function <br>
        then our code will not break 💡💡💡

- `said by jonas` : we'll see rest operator pattern as a parameter of a function most of the time in modern JS code base 💡💡💡

- now let's use rest operator syntax parameter inside a function with some edge cases of restaurant object
    - Eg 4 : rest operator syntax parameter inside a function
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
            
            // for pizza we just need at-least one ingredient & other are optional
            orderPizza : function(mainIngredient, ...otherIngredients) {
                console.log(mainIngredient , otherIngredients)
            } 
        }

        restaurant.orderPizza("mushrooms", "onion", "olives", "spinach")
        // output : mushrooms ["onion", "olives", "spinach"]
        ```
        - so here main ingredient stored inside `mainIngredient` parameter <br>
            & rest/remaining ingredients stored inside `otherIngredients` parameter due to rest operator pattern syntax 💡💡💡
        - but if we don't pass rest parameters like this `restaurant.orderPizza("mushrooms")` <br>
            then we'll get output i.e `mushrooms` & empty array `[]` & here we can work with this empty array if we want 💡💡💡

## summary 

- Spread & Rest operator
    - [x] what it is 
    - [x] when to use them
    - [x] where we use spread & where we use rest operator   

## Extra notes

- spread vs rest operator : https://www.youtube.com/watch?v=gQWOLRKGPsA&ab_channel=Coder%27sGyan 🔥

