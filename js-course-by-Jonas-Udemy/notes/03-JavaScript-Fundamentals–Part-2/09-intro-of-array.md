# introduction of arrays 

- array is a great data structure to store multiple values inside like a box <br>
    instead of creating multiple variables related to same thing fruits list 

## Example 

- Eg : of mutating the value of an array 
    ```js
    const friends = ["Steve Job", "Elon Musk", "Bill Gates", "Warren Buffet"]

    // mutating the value of an array 
    friends[2] = "Gim Simon" 
    console.log(friends)
    // output : ["Steve Job", "Elon Musk", "Gim Simon", "Warren Buffet"]
    ```
    - here we can see we're still able to mutate the value of an array even we used `const` keyword 
        - because values are inside of an array & we didn't change the array as a whole value 

- `Note` : if change an array itself from a different value like this 💡💡💡
    ```js
    const friends = ["Steve Job", "Elon Musk", "Bill Gates", "Warren Buffet"]

    friends = ["Bill Gates"]
    console.log(friends)
    // output : we'll get an error that we can't change the value of constant variable 
    ```

- Eg : we can do calculation or can create an expression inside an array
    ```js
    const year = [1990 , 1990 + 1 , 2000]
    
    console.log(year)
    ```
