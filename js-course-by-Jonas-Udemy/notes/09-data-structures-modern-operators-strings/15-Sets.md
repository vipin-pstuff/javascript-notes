# Set() constructor class 

- in past , JS only had two built-in data structure i.e array , object <br>
    but in ES6 , two more data structures were introduced i.e Set() , Map() <br>
    & these are pretty common data structures that already exists in other programming languages

- `About Set() class` : 
    - is a collection of unique values means that a Set() can never have any duplicates 💡💡💡
    - it takes iterable as an argument like array
    
- `S` should be capital of `Set()` because it's a class 

## Examples - for creating a new Set() class

- Eg 1 : of Set() class with an array 
    ```js
    // here we passed duplicate values
    const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'])
    console.log(ordersSet) // output : Set(3) {'Pasta', 'Pizza', 'Risotto'}
    ```
    - here we can see that inside this object output , there's no key/value pair <br>
        means this is the way that `Set()` store data in object form 💡💡💡

- `why Set() class is different than array ✅` : 
    - `Set() class` are also iterables like arrays but it's very different than array because 
        - `first` : it's elements are unique
        - `second` : the order of elements in the Set() class is irrelevant

- Eg 2 : of Set() class with an string 
    - string is also iterable
    ```js
    console.log(new Set('Jonas')) // output : Set(5) {'J', 'o', 'n', 'a', 's'}
    ```

- Eg 3 : iterating the Set() class 
    ```js
    const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'])
    for (const order of ordersSet) console.log(order)
    /* output : Pasta
                Pizza
                Risotto
    */
    ```

## Examples - of properties & methods of Set() class

- Eg 1 : of Set() class with `size` property ✅ 
    ```js
    const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'])
    console.log(ordersSet.size) // output : 3
    ```
    - `Note of Set() class` : 
        - `size` property used to check the size/length <br>
            but `length` property doesn't work on `Set() class` object dataType 💡💡💡
    - this example might be useful for the chef of our kitchen to know how many different meals are going to cooked ✔️

- Eg 2 : of Set() class with `has()` method
    - `has()` returns true or false values based on whether we have that stuff or not & only take 1 argument 
    ```js
    const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'])
    console.log(ordersSet.has('Pizza')) // output : true
    console.log(ordersSet.has('Bread')) // output : false
    ```

- Eg 3 : of Set() class with `add()` method
    - `add()` method used to add/append the stuff inside that iterable & only take 1 argument 
    ```js
    const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'])
    // let's someone accidentally ordered garlic bread twice  
    ordersSet.add('Garlic Bread')
    ordersSet.add('Garlic Bread')
    console.log(ordersSet) // output : Set(4) {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}
    ```
    - here only first one added & second one is skipped ✔️

- Eg 4 : of Set() class with `delete()` method
    - `delete()` method used to delete that stuff inside that iterable & only take 1 argument 
    ```js
    const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'])
    // let's someone accidentally ordered garlic bread twice  
    ordersSet.delete('Risotto')
    console.log(ordersSet) // output : Set(4) {'Pasta', 'Pizza', 'Garlic Bread'}
    ```

- `Note to retrieve values from a Set() class ✅` :
    - we can't use index inside square bracket notation like we do in arrays <br> 
        because in Set() class there are no indexes & there is no way of getting values our of a set 
    - because there's really no need for getting data out of a Set() class <br>
        that's because if all values are unique & if their order doesn't matter then there's no point <br>
        of retrieving values our of a Set() class 
    - All we need to know is that whether that value exists inside the Set() class or not through has() method 
        - so if you want to retrieve value then just use an array & don't use Set() class for it 💡💡💡

- Eg 5 : of Set() class with `clear()` method
    - this method is not that important 
    - `clear()` method is used to clear all the things from `Set()` class 
    ```js
    const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'])
    ordersSet.clear()
    console.log(ordersSet) // output : Set(0) {}
    ```

## Use case of Set() class ✅

- in normal code base , the main use case of Set() class is to remove duplicate values of arrays 💡💡💡
    ```js
    const staff = ['Waiter', 'Chef', 'Waiter', 'Manage', 'chef', 'Waiter']
    const staffUnique = new Set(staff)
    console.log(staffUnique) // output : {'Waiter', 'Chef', 'Manage'}
    ```
    - now we need to convert this Set() output into an array
    - converting Set() output into array form by using spread operator 💡💡💡
        ```js
        const staff = ['Waiter', 'Chef', 'Waiter', 'Manage', 'chef', 'Waiter']
        const staffUnique = [...new Set(staff)]
        console.log(staffUnique) // output : ['Waiter', 'Chef', 'Manage']
        ```

## Extra stuff on Set() class 

- 8 JavaScript Set Methods You Should Master : https://www.makeuseof.com/javascript-set-methods-to-master/
- https://twitter.com/ATechAjay/status/1551421989939580928 (use this thread to make clean note & remove unnecessary)
