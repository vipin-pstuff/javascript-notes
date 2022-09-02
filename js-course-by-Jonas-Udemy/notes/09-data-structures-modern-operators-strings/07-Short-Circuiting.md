# Short Circuiting (&& and ||)

- in OR operator , we just need one condition to be true then we'll get true as a output <br>
    but in && operator , all conditions should be true then we'll get true as a output ✔️✔️✔️

- It's a short way instead of using if else statement or conditional ternary operator 

- there are three properties of logical operators ✅
    - first : they can `use any datatype`
    - second : they can `return any datatype`
    - third : they can `do short circuiting or short circuit evaluation` 

## Examples - normal way of defining condition

- Eg : normal way of defining condition 
    ```js
    console.log(3 || "Jonas") // output: 3
    ```
    - `Note ✅` : here we got `3` because it's means that result of OR operator doesn't always have to be a boolean 💡💡💡
    - `console.log(3 || "Jonas")` means here we used two values which are not boolean <br> 
        & then short circuiting will returned a value as a output which also not a Boolean 

## Explanation - Short Circuiting with OR operator ✅

- in case of OR operator , short circuiting means if the first operand is a truthy value 
    - then that first operand will be returned & further operand condition will not be checked/evaluated <br>
        means JS will not check further & that's short circuiting means 

- Eg 1 : short circuiting with OR operator
    ```js
    console.log(3 || 'Jonas') // output : 3
    ```
    - `console.log(3 || 'Jonas')` means 
        - here first operand is 3 which is a truthy value , <br>
            so this first operand will be returned & further operand will not be checked 

- Eg 2 : short circuiting with OR operator 
    ```js
    console.log('' || 'Jonas') // output : Jonas
    console.log(true || 0) // output : true
    console.log(undefined || null) // output : null
    ```
    - `console.log('' || 'Jonas')` we got `Jonas` because 
        - here first operand is a falsy value that's why JS checked further & second operand is truthy value <br>
            so second operand will be evaluated 💡💡💡

- Eg 3 : short circuiting with OR operator
    ```js
    console.log(undefined || 0 || '' || 'hello' || 23 || null) // output : hello
    ```
    - here `hello` is a first truthy value in this `chain of OR operations`

- Eg 4 : real example on restaurant object - short circuiting with OR operator
    - we want to know number of guests in our restaurant
    ```js   
    const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
    console.log(guests1) // output : 10
    ```
    - here we got `10` as a output because `restaurant.numGuests` doesn't exists means it's undefined <br>
        therefore , we got default value i.e `10`
    - Eg 4.1 : setting value to restaurant.numGuests property
        ```js
        restaurant.numGuests = 23
        const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
        console.log(guests1) // output : 23
        ```
    - but instead of doing this we can take advantage of short circuiting with OR operator
    - Eg : 4.2 : short circuiting with OR operator 
        ```js
        const guests2 = restaurant.numGuests || 10
        console.log(guests2) // output : 10
        ```

- `Best Practice ✅` : so instead of using ternary operator or even worse is using if else statement <br>
    we can just simply use short circuiting way with OR operator 💡💡💡

## Explanation - Short Circuiting with && operator ✅

- Eg 1 : Short Circuiting with AND operator
    ```js
    console.log(0 && 'Jonas') // output : 0
    console.log(7 && 'Jonas') // output : Jonas
    ```
    - `console.log(0 && 'Jonas')` we got `0` which is a falsy value means 
        - && operator short circuits , when the first value is falsy <br>
            & then immediately returns that falsy value without even evaluating the second operand 💡💡💡
    - here both values are truthy `console.log(7 && 'Jonas')` , so we got `Jonas` because 
        - && operator short circuits , when the first value is truthy then the evaluation continues <br>
            & then the last value is returned 💡💡💡

- `Note of && operator ✅` : in && operator condition , 
    - if first operand is false then it means already that the entire result of the AND operation is false <br>
        so there's no need to even look at any further other operands 💡💡💡

- Eg 2 : short circuiting with AND operator 
    ```js
    console.log('hello' && 23 && null && 'jonas') // output : null
    ```
    - `STEP 1` : js will check first operand , so it's truthy value 
    - so next operand will be check
    - `STEP 2` : js will check second operand , so it's also a truthy value 
    - so next operand will be check
    - `STEP 3` : js will check third operand , so it's a falsy value 
    - now JS will stop here & no longer evaluation continue 
    - so JS short circuits the rest of the evaluation i.e further operands after that third operand 💡💡💡

- Eg 3 : short circuiting with AND operator ✅
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

    // using normal if statement to check whether that orderPizza method exists inside the object or not 
        // & if it exists then add ingredients
    if (restaurant.orderPizza) {
        restaurant.orderPizza('mushrooms' , 'spinach')
    }

    // using short circuiting way with AND operator 💡💡💡
    restaurant.orderPizza && restaurant.orderPizza('mushrooms' , 'spinach') 
    ``` 

- `said by Jonas ✅` : don't use short circuiting way everywhere inside your code base
    - don't go ahead & replace all your `if statements` with && and || operator
    - don't do this because it's gonna make your code very hard to read in the future 💡💡💡

- `advice by Jonas ✅` : for practical application
    - we can use the OR operator to set default values 💡💡💡
    - use the AND operator to execute code as the second operand if the first one is true 💡💡💡

## Summary

- `|| operator` : 
    - will return the first truthy value out of all the operands or simply the last value if all of them are falsy 💡💡💡
    - in this operator , we just need one operand/condition to be true then we'll get true as a output 💡💡💡
    - Eg : console.log(undefined || null)
- `&& operator` : will return the first falsy value or the last value if all of them are truthy 💡💡💡
    - in this operator , we need all operand/condition must be true then we'll get true as a output <br>
        & any one of them condition is false then we'll get false as a output 💡💡💡

## Extra notes

- for complete summary about Short Circuit Evaluation : https://www.youtube.com/watch?v=9mlMXJMnJR8&ab_channel=WebStack 🔥
