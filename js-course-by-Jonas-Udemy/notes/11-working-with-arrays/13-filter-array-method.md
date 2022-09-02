# filter() array method

- filter() array method used to filter the elements of an array <br>
    & put those elements inside an new array based on condition & return that new array 💡💡💡

- callback function argument of filter() array method , also take three arguments 
    - `first argument` : current element of that array on which we're using filter() 
    - `second argument` : current index 
    - `third argument` : that current array itself  

- `Note` : but most of the time , we only use current element as first argument for condition 💡💡💡 <br>
    & last two arguments we don't use with filter() array method in real life 

- so this is the second method i.e filter() array method for `data transformation` 💡💡💡

## Examples - of filter() array method

- Eg 1 : of filter() array method
    - now let's create an array for deposits
    ```js
    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

    const deposits = movements.filter(function(mov) {
        // here we're using trick i.e boolean value
        return mov > 0
    })
    console.log(deposits) // output : [200, 450, 3000, 70, 1300]
    ```
    - Eg 2 : using same problem through `for of` loop
        ```js
        const depositsFor = []
        for (const mov of movements) {
            if (mov > 0) depositsFor.push(mov)
        }
        console.log(depositsFor) // output : [200, 450, 3000, 70, 1300]
        ```
    - `reason why we can't use "for of" loop instead of filter() array method ✅` :
        - because filter() array method is like function programming 
        - & practically , we can chain different array methods together to build a final result <br>
        - Eg : like we did in 12 lecture - 11 module , but there we mixed string methods with array methods <br>
            but later on , we'll do big chains only with array methods
        - but chaining can't possible with for loop that's why a big advantage of using the methods 💡💡💡 <br>
            instead of using regular "for" loop 

## Challenge Time 

- `Ques` : create an array of the withdrawals without looking at the code that we wrote above
    - & withdrawals only include the negative numbers
    ```js
    // this array
    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
    ```
- `Ans` : creating an array for only withdrawals from `movements` array 
    ```js
    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

    const withdrawals = movements.filter(mov => {
        return mov < 0
    }) 
    console.log(withdrawals) // output : [-400, -650, -130]
    ```
