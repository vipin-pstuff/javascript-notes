# Optional Chaining 

- `about optional chaining ✅` :  
    - `optional chaining syntax` is a short way to checking multiple conditions instead of use `&&` logical operator 💡💡💡 
    - it's short way only of `&&` logical operator , not of `||` operator  💡💡💡
    - it's used with object & arrays also 💡💡💡 

- most of the time , optional chaining operator used with nullish coalescing operator together 💡💡💡

## why we need optional chaining ✅

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

- let's say that we want to get the openingHours of our restaurant for monday like this 
    ```js
    console.log(restaurant.openingHours.mon) // output : undefined
    ```
    - we got undefined as a output because this `mon` property doesn't exists <br> 
        but let's just pretend that we don't know whether this restaurant opens on monday or not 
    - for eg : if this data came from a real web service or a web API & in their service there could be multiple restaurants <br>
        & not all of them would open on Monday & so we had no way of knowing if that particular restaurant <br>
        would open on monday or not
    - so if we further check that restaurant whether it's open monday or not like this 
        ```js
        console.log(restaurant.openingHours.mon.open) 
        // output :cannot read property 'open' of undefined 
            // here undefined means 'restaurant.openingHours.mon' becomes undefined 💡💡💡
        ```
    - so in order to avoid this error , first we need to check if this `restaurant.openingHours.mon` actually exists <br>
        by using if statement or logical operator like this <br>
        ```js
        if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open)
        ```
- `problem why we need optional chaining ✅` : 
    - but if we check more conditions through `&&` logical operator then our code becomes messy & not readable 
    - which happens in real world that's why in ES20 , introduced a great solution for this problem i.e optional chaining 💡💡💡

- `Note for optional chaining ✅` : 
    - with optional chaining , if a certain property doesn't exist then undefined is returned immediately <br>
        & due to this , that error will not come i.e "cannot read property 'open' of undefined" 💡💡💡 <br>

## Examples - of optional chaining 

- for optional chaining syntax condition , we use question mark combine with & dot operator like this `?.`  💡💡💡

- Eg 1 : of optional chaining ✅
    ```js
    console.log(restaurant.openingHours.mon?.open) // output : undefined
    ```
    - `restaurant.openingHours.mon?.open` means 
        - if that `mon` property exist then `open` property will be read 💡💡💡
        - but if this `mon` property doesn't exist then immediately undefined will be returned 💡💡💡
    - optional chaining checks for nullish values (means only null or undefined) , not for 0 & empty string <br>
        means even if that variable contain 0 or empty string then means that variable exist 💡💡💡

- `multiple optional chaining ✅`  
    - Eg 1 : of normal way
        ```js
        if (restaurant.openingHours && restaurant.openingHours.mon) {
            console.log(restaurant.openingHours.mon.open)
        }
        ```
    - here we we're checking two things through `&&` logical operator 
    - Eg 2 : of multiple optional chaining 
        ```js
        console.log(restaurant.openingHours?.mon?.open)
        ```
        - here we're also checking two things i.e 
            - if that `openingHours` property exist inside the object then check/read the `mon` property <br>
                & if that `mon` property exist then check the `open` property
            - but if that `openingHours` property doesn't exist then don't check further <br>
                & return `undefined` as a output 💡💡💡
            - but we'll not get error if that property doesn't exist inside the object 💡💡💡

- `said by jonas ✅` : 
    - so `optional chaining & multiple optional chaining` are great ways to prevent all kinds of bugs <br>
        that sometimes we might not even expect ✔️✔️✔️
            
- Eg 2 : actual use case of optional chaining operator & nullish coalescing operator 🔥
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

    const days = ['mon', `tue`, 'wed', 'thu', 'fri', 'sat', 'sun']

    for (const day of days) {
        console.log(day)
        // here day is coming dynamically
        const open = restaurant.openingHours[day]?.open
        console.log(`On ${day}, we open at ${open}`)
    }
    /* output : On mon, we open at undefined 
                On tue, we open at undefined 
                On wed, we open at undefined 
                On thu, we open at 12 
                On fri, we open at 12 
                On sat, we open at 0 
                On sun, we open at undefined 
    */
    ```
    - `Imp Note 🔥` : we can't access `day` variable like this `restaurant.openingHours.day` 
        - because here it means we're access `day` as a property which doesn't exist inside `openingHours` object 💡💡💡
        - so if we want to use variable name as the property name of the object then we use square bracket notation 💡💡💡
        
    - but we don't want `undefined` in the output , so let's show the default value through `||` operator like this 
        ```js
        for (const day of days) {
            const open = restaurant.openingHours[day]?.open || 'Closed'
            console.log(`On ${day}, we open at ${open}`)
        }
        /* output : On mon, we open at Closed 
                    On tue, we open at Closed 
                    On wed, we open at Closed 
                    On thu, we open at 12 
                    On fri, we open at 12 
                    On sat, we open at Closed 
                    On sun, we open at Closed 
        */
        ```
        - but here we got "Closed" on that `sat` property which exist inside the `openingHours` object <br>
            so the problem is `open` property (of `sat` object) contain `0` (which is a falsy value) <br>
            so the solution is nullish coalescing operator `??` 
        - because `0` & empty string are truthy values for nullish coalescing operator <br>
            but in general `0` & empty string are falsy value 💡💡💡
    - so let's use nullish coalescing operator to get the correct output 
        ```js
        for (const day of days) {
            const open = restaurant.openingHours[day]?.open || 'Closed'
            console.log(`On ${day}, we open at ${open}`)
        }
        /* output : On mon, we open at Closed 
                    On tue, we open at Closed 
                    On wed, we open at Closed 
                    On thu, we open at 12 
                    On fri, we open at 12 
                    On sat, we open at 0 
                    On sun, we open at Closed 
        */
        ```

- both `optional chaining operator & nullish coalescing operator ✅` 
    - checks/read even if that variable has `0` or empty string <br>
        because these values are not falsy values for these operators 💡💡💡
    - but these operators , both null & undefined values are falsy values 💡💡💡

- `using optional chaining operator on methods of a object ✅` : to check whether it exist or not 
    - Eg : 1 : using optional chaining operator on methods 
        ```js
        console.log(restaurant.order?.(0, 1) ?? "Method doesn't exist") // output : ['Focaccia', 'Pasta']
        console.log(restaurant.orderRisotto?.(0, 1) ?? "Method doesn't exist") // output : Method doesn't exist
        ```

- `using optional chaining operator on arrays ✅` : to check if an array is empty or not 
    - Eg 1 : using optional operator on an array
        ```js
        const users = [{ name: 'Jonas', email: 'hello@jonas.io'}]

        // using with optional chaining 
        console.log(users[0]?.name ?? 'User array empty')

        // using without optional chaining
        if (users.length > 0) console.log(users[0].name)
        else console.log("user array empty")
        ```
        - `users[0]?.name` means
            - array is empty or not , so if array i.e `users` is not empty then check the `name` property
