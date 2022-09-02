# for of loop

- Eg : of `for of` loop
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

    const menu = [...restaurant.starterMenu]
    // using for of loop
    for (const item of menu) console.log(item)
    ```

- `for of` loop will give only elements of an array but no index of each element 💡💡💡

- Eg - of getting each elements with their index also ✅
    ```js
    const menu = [...restaurant.starterMenu]

    for (const item of menu.entries()) {
        console.log(item) 
    }
    /* output : [0 , 'Focaccia']
                [1 , 'Bruchetta']
                [2 , 'Garlic']
                [3 , 'Bread']
                [4 , 'Caprese Salad']
    */
    ```
    - `entries()` array method returns `an Array Iterator object with key/value pairs` 💡💡💡
        - it also returns index of each elements of an array also 💡💡💡
        - it doesn't change the original array
    - `checking how entries() array method works` : 
        ```js
        const menu = [...restaurant.starterMenu]
        console.log(menu.entries()) // output : we'll get an empty object

        // that's why we used spread operator to unpack the elements & we put them inside an array
        console.log([...menu.entries()]); // output : we'll get correct output
        ```

- Eg 1 : accessing index of each elements through normal way
    ```js
    const menu = [...restaurant.starterMenu]

    for (const item of menu.entries()) {
        console.log(`${item[0] + 1}: ${item[1]}`) 
    }
    /* output : 
        1: Focaccia 
        2: Bruchetta 
        3: Garlic 
        4: Bread 
        5: Caprese Salad 
    */
    ```
    - but this is old way , let's use destructuring
    - Eg 1.1 : using destructuring way
        ```js
        const menu = [...restaurant.starterMenu]

        for (const item of menu.entries()) {
            console.log(`${i} : ${element}`) 
        }
        ```

## Extra stuff of for loop

- traditional for loop
- for of loop
- for in loop
- for await of loop
