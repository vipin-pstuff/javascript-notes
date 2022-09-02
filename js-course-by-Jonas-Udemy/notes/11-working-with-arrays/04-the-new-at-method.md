# at() array & string method

- `at()` method takes only one argument i.e index number to access that element of an array <br>
    or to access the character from a string 💡💡💡
    
## Example - at() method of array & string 

- Eg 1 : normal example of at() method
    ```js
    const arr = ['Orange', 'apple', 'banana']
    
    console.log(arr[1]) // output : apple
    console.log(arr.at(1)) // output : apple
    ```
    - as a personal preference , we can use either square bracket notation or at() method <br> 
        to access the element of an array or a character from a string 

- `Note of drawback with square bracket notation syntax ✅` : but here comes drawback with square bracket notation 
    - i.e we can't define a negative index number to access element from right to left like this 
    ```js
    const arr = ['Orange', 'apple', 'banana']
    
    console.log(arr[-1]) // output : undefined 
    console.log(arr.at(-1)) // output : banana
    ```
    - but we can define a negative index number as a argument inside at() method 💡💡💡

- `use case of at() method ✅`
    - if we want to get the last element of an array or a last character from a string then we can at() method
    ```js
    const arr = ['Orange', 'apple', 'banana']
    const str = "Hello World"

    console.log(arr.at(-1)) // output : banana
    console.log(str.at(-1)) // output : d
    ```
    - so instead of doing this `arr[arr.length - 1]` or `array.splice(-1)` , we can simply use at() method <br>
        to get last element of an array or a last character from a string
    - `Imp Note` : in real word , we don't use `splice()` array method because it mutate the actual array also 💡💡💡

## Extra Notes 

- https://www.youtube.com/watch?v=YzBjOLqU-78&ab_channel=12rajendrajangid 👍
- https://blog.logrocket.com/using-javascript-at-method/ 👍
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at
- https://www.javascripttutorial.net/javascript-array-at/
- https://dmitripavlutin.com/javascript-array-at/
