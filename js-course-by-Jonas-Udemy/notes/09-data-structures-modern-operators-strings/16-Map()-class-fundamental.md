# Map() constructor class 

- another new data structure in JS i.e Map() class
- `Map() class` is more useful than `Set() class`

- `About Map() class ✅` : is a data structure which we can use to map values to keys/properties 💡💡💡
    - means data is stored in key value pairs in Map() class like inside an object 💡💡💡
    
- `difference b/w object & Map() class ✅` 
    - in Map() class , the keys can have any dataType <br>
        means that key can be object or array or other Map() class 💡💡💡
    - but in an object , the keys are always in string type 💡💡💡

## Examples - Map() class with it's properties & methods 

- Eg 1 : of creating Map() class with `set()` method
    - `set()` method used to add elements inside Map() class & 
        - it also return updated Map elements means whatever things are added inside Map() class will also come 💡💡💡
    ```js
    const rest = new Map()
    rest.set('name', 'Classico Italiano')
    rest.set(1, 'Firenze, Italy')
    console.log(rest.set(2, 'Lisbon, Portugal'))
    /* output : Map(3) {
            'name' => 'Classico Italiano', 
            1 => 'Firenze, Italy', 
            2 => 'Lisbon, Portugal'
        }
    */
    ```
    - `Note for Map() class 👍` : 
        - while creating a new Map() like this `new Map()` then we don't pass/add anything as an argument <br>
            if we're adding elements/data through set() method
        - but if we don't want to use `set()` method to add elements inside Map() class <br>
            then we can directly add elements as a argument inside `Map()` class   
    - Eg 1.1 : of Map() class with chaining `set()` method
        ```js
        const rest = new Map()

        // example of chaining set() method
        rest.set(
            'categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
            ).set('open', 11).set('close', 23).set(true, 'We are open :D').set(false, 'We are closed :(')
        ```

- Eg 2 : of Map() class with `get()` method
    - `get()` method is used `get the data through name of the key` which are inside Map() class 💡💡💡
    ```js
    const rest = new Map()
    rest.set('name', 'Classico Italiano')
    rest.set(1, 'Firenze, Italy')
    rest.set(
        'categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
        ).set('open', 11).set('close', 23).set(true, 'We are open :D').set(false, 'We are closed :(')
    
    console.log(rest.get('name')) // output : Classico Italiano
    console.log(rest.get(true)) // output : We are open :D
    console.log(rest.get('true')) // output : undefined because true -> key name is defined in boolean datatype 💡💡💡
    console.log(rest.get('1')) // output : undefined because 1 -> key name is defined in number datatype 💡💡💡
    ```
    - `Note of Map() class` : 
        - if we try to get the value of that key through wrong datatype like this `console.log(rest.get('true'))` <br>
            now this 'true' becomes in string so we'll get `undefined` 
        - so in Map() class , when we're getting data through get() method <br>
            then `key/property` name should be define in correct datatype 💡💡💡  

- Eg 3 : of Map() class with `has()` method
    - `has()` method is used to check if Map() class contain that key or not & return true or false based on it  
    ```js
    const rest = new Map()
    rest.set('name', 'Classico Italiano')
    rest.set(1, 'Firenze, Italy')
    rest.set(
        'categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
        ).set('open', 11).set('close', 23).set(true, 'We are open :D').set(false, 'We are closed :(')
    console.log(rest.has('categories')) // output : true
    ```

- Eg 4 : of Map() class with `delete()` method 
    - `delete()` method takes a key name to delete that key value pair
    ```js
    const rest = new Map()
    rest.set(1, 'Firenze, Italy')
    rest.set(2, 'Lisbon, Portugal')

    rest.delete(2)
    console.log(rest) // output : Map(1) {1 => 'Firenze, Italy'}
    ```

- `Note about object ✅` : 
    - we can also delete properties from an object by using `delete` operator <br>
        but that's a really slow process & it's not recommended to do that 
    - object also have a method i.e hasOwnProperty() like has() method in Set() & Map() classes <br>
        but we'll talk about this in OOPS module

- Eg 5 : of Map() class with `size` property
    - Map() doesn't have `length` property only `size` property will work
    ```js
    const rest = new Map()
    rest.set(1, 'Firenze, Italy')
    rest.set(2, 'Lisbon, Portugal')

    console.log(rest.size) // output : 2    
    ```

- Eg 6 : of Map() class with `clear()` method
    - `clear()` method used to clear/delete/remove everything from Map() class & doesn't take any argument  
    ```js
    const rest = new Map()
    rest.set(1, 'Firenze, Italy')
    rest.set(2, 'Lisbon, Portugal')
    rest.clear()
    console.log(rest.size) // output : 0
    ```

- in Map() class , we have `keys()` & `values()` methods
    - keys() method will give all keys from that Map() class 
    - values() method will give all values from that Map() class

## Examples - of Map() class to use an array or an object as a key ✅  

- Eg 1 : using an array as a key inside Map() class ✅
    ```js
    const rest = new Map()
    rest.set([1, 2] , 'Test')
    console.log(rest) // output : Map(1) {Array(2) => 'Test'}
    ```
    - Eg 1.1 : now getting the data based on that array key 
        ```js
        console.log(rest.get([1,2])) // output : undefined will come , 💡💡💡
        ```
        - so this will not work because this array that we're getting `rest.get([1,2])` <br>
            & that array that we passed are different each other & both are not same object in the Heap <br>  
            even though both have same elements
        - so that array which we set with value 'Test' is inside the memory <br>
            but the array which we're getting is not presented in memory that's wht we're getting undefined 💡💡💡
        - so we need to make a separate global variable which contain this array 💡💡💡
    - Eg 1.1 : getting rid from the problem 
        ```js
        const arr = [1, 2] // creating a global variable 
        const rest = new Map()
        rest.set(arr , 'Test') 

        // reading the key 
        console.log(rest.get(arr)) // output : Test   
        ```
        - we got output because `arr` variable is referring same memory 

- Eg 2 : using an object as a kye inside Map() class ✅
    - this is useful with dumb elements of html
    ```html
    <h1>Heading</h1>
    ```
    ```js
    const rest = new Map() 
    rest.set(document.querySelector('h1'), 'Heading')
    console.log(rest) // output : Map(1) {h1 => 'Heading'}
    ```
    - this would be useful which can enable some advanced functionality ✔️✔️✔️

## challenge time

- `Ques 1` : we have time = 21 & based on open & close value we want show whether restaurant is close or not 
    ```js
    const rest = new Map()
    rest.set(
        'categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
        ).set('open', 11).set('close', 23).set(true, 'We are open :D').set(false, 'We are closed :(')
    ```
- `Ans 1` : showing whether restaurant is close or not based matching with open or close value 
    ```js
    cons currentTime = 21 
    // means is the current time is b/w 11 & 23 or not
    consol.log(rest.get(currentTime > rest.get('open') && currentTime < rest.get('close')))
    ```
    - this is clever trick but don't use this because it's not readable code <br>
        this is just to show the power of boolean values 💡💡💡
