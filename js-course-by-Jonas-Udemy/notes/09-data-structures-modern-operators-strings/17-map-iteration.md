# Map() iteration

- we have another way to add key value pairs inside Map() class without using set() method of Map() class 
    - & this option is useful than set() method because set() method is bit cumbersome <br>
        when there are lot of values to set 💡💡💡

## Examples - Map() iteration

- Eg 1 : of using another way to set/add key value pairs inside Map() class ✅
    - so another way to define key value paris inside Map() class i.e using arrays of array
    ```js
    const question = new Map([
        ['question', "What's the best programming language in the world"] ,
        [1 , 'C'] ,
        [2 , 'Java'] ,
        [3 , 'JavaScript'] ,
        ['correct', 3] ,
        [true, 'Correct'] ,
        [false, 'Try again!']
    ])
    console.log(question) 
    /* output : Map(7) {'question' => "What's the best programming language in the world", 
                1 => 'C', 
                2 => 'Java', 
                3 => 'JavaScript', 
                'correct' => 3, 
                true => "Correct",
                false => "Try again!"
            }
     */
    ```
    - so when creating a new Map from scratch then use this way always instead of `set()` method <br>
        but if we have less number of key value pairs then use `set()` method <br>
        & if we have more key value pairs then use this way i.e Map() iteration 💡💡💡

- `Object.entries(openingHours)` also give arrays of array output 

- Eg 2 : converting Object into Map() ✅
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
            open : 0 ,  
            close : 24
        } 
    }
    const hoursMap = new Map(Object.entries(openingHours)) // converting object into Map 💡💡💡
    console.log(hoursMap)
    // output : Map(3) {'thu' => {…}, 'fri' => {…}, 'sat' => {…}}
    ```
    
- Eg 3 : doing iteration on Map() class 
    - iteration is possible on Map() class because it's iterable 💡💡💡
    ```js
    const question = new Map([
        ['question', "What's the best programming language in the world"] ,
        [1 , 'C'] ,
        [2 , 'Java'] ,
        [3 , 'JavaScript'] ,
        ['correct', 3] ,
        [true, 'Correct'] ,
        [false, 'Try again!']
    ])

    console.log(question.get('question'))
    for (const [key, value] of question) {
        // now we just want to print those key value pairs which are number
        if (typeof key === 'number') console.log(`Answer ${key}: ${value}`)
    }
    
    cons answer = Number(prompt('Your answer')) // here we converted input number type because we want to compare
   /* output : What's the best programming language in the world
                Answer 1: C
                Answer 2: Java
                Answer 3: JavaScript
    */
    ```
    - Eg 3.1 : now let's take boolean values to print status of answer whether it's correct or not
        - making little quiz app
        ```js
        const question = new Map([
            ['question', "What's the best programming language in the world"] ,
            [1 , 'C'] ,
            [2 , 'Java'] ,
            [3 , 'JavaScript'] ,
            ['correct', 3] ,
            [true, 'Correct'] ,
            [false, 'Try again!']
        ])
        
        console.log(question.get('question'))
        for (const [key, value] of question) {
            if (typeof key === 'number') console.log(`Answer ${key}: ${value}`)
        }

        // printing status of correct answer based on input checking
        console.log(question.get(question.get('correct') === answer))
        ```
    - Eg 3.2 : as a side note we need to convert that `question` Map into an array by using spread operator to unpack 💡💡💡
        ```js
        console.log([...question])
        ```

- Eg : now we have methods of arrays i.e `entries()` , `keys()` , `values()` methods 
    - entries() method is not that important 
    ```js
    console.log([...question]) // STEP 1 : first converting Map into an array
    console.log([...question.keys()]) // give all the keys
    // output : (7) ["question", 1, 2, 3, "correct", true, false]
    console.log([...question.values()])
    /* output : (7) ["What is the best programming language in the world?", 
            "C", "Java", "Javascript", 3, "Correct", "Try again!"]
    */
    ```

- now you might be wondering `when should you use Map()` <br>
    & `when should you use object` because they're pretty similar so we'll see in next lecture 💡💡💡
