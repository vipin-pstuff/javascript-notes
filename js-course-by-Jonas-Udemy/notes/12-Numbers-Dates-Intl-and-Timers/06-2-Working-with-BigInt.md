# BigInt() constructor function

- we're already know that numbers are represented internally as 64 bits 
    - which means there're exactly 64 ones or zeros to represent any given number
    - now out of these 64 bits , only 53 are used to actually store the digits themselves <br>
        & rest are for storing the position of the decimal point & the sign
    - now , if there are only 53 bits to store the number then means there's a limit of how big numbers can be <br>
    - so when we do this 
        ```js
        console.log(2 ** 53 - 1)
        // OR another way
        console.log(Number.MAX_SAFE_INTEGER) // output : 9007199254740991  
        ``` 
        - so got a big number i.e `9007199254740991` , so this is the biggest/maximum number that JS can safely represent 
        - & here we took `2` because we're working with base 2 which is only zeros & ones 
    - so any integer (which is larger than this `9007199254740991`) is not safe which means that integer can't be <br> 
        represented accurately means if we add extra number with biggest integer like this
        ```js
        const x = Number.MAX_SAFE_INTEGER + 1;
        const y = Number.MAX_SAFE_INTEGER + 2;

        console.log(Number.MAX_SAFE_INTEGER); // output: 9007199254740991
        console.log(x); // output: 9007199254740992

        console.log(x === y); // output: true
        ```
        - here actually x is not equal to y but we're getting true so it means mathematically incorrect
        - for more info check : MDN
    - so if we do calculation based on that biggest/maximum number then we might lose precision/accurate answer <br> 
        which can be mathematically wrong because sometimes doing calculation based on that biggest number work <br>
        & sometimes not which can create problem 
    - `why we need BigInt() constructor function ✅` : 
        - because sometimes we need really , really big numbers than that biggest number like database IDs or <br>
            when interacting with real 60 bit numbers & these numbers are used in other languages 💡💡💡 <br>
        - & sometimes from some API , we might get a number which is larger than that biggest number <br> 
            then we don't have any way of storing that number in JS 
        - that's why we need BigInt() constructor function 💡💡💡


## about BigInt() constructor function

- it means big integer & it's a primitive datatype for big integers
- it used to store numbers as large as we want (means no matter how big) 💡💡💡

- Eg 1 : why we need BigInt() constructor function ✅
    ```js
    console.log(2938749238748923748923748923748913747897239487) // output : 2.938749238748924e+45
    ```
    - here output which we got doesn't have precision/accurate & mathematically wrong
    - Eg 1.1 : using BigInt() constructor function to get precision output 
        - using `n` at the end of a number means we're using BigInt() constructor function
        ```js
        console.log(2938749238748923748923748923748913747897239487n) 
        // output : 2938749238748923748923748923748913747897239487n
        ```
        - here `n` transforms a regular number into a BigInt number
        - so through BigInt we can show the very large number accurately 💡💡💡

- `2 ways to use BigInt ✅`
    - `first` : using `n` at the end of that larger number 
    - `second` : using BigInt() constructor function 
    
- Eg 1 : when to use `n` & when `BigInt()` constructor function ✅ 
    ```js
    console.log(2938749238748923748923748923748913747897239487n) 
        // output : 2938749238748923748923748923748913747897239487n
    // OR another way
    console.log(BigInt(2938749238748923748923748923748913747897239487)) 
        // output : 2938749238748923962826827329428773395494862848n
    ```
    - here kind of we get same output but not really , because JS <br>
        first represent this number `2938749238748923748923748923748913747897239487` internally <br>
        before it can then transform it into a BigInt that's why few numbers are different in output of BigInt() <br>
        that's why use `BigInt()` constructor function with small numbers & for very larger number use `n` 💡💡💡
    ```js
    console.log(2938749238748923748923748923748913747897239487n) 
        // output : 2938749238748923748923748923748913747897239487n

    console.log(BigInt(2389473289)) // output : 2389473289n
    ```

- Eg 2 : `use case of when to use "n" & when BigInt()`
    ```js
    const huge = 894723894723894798223n
    const num = 23
    console.log(huge * num) // output : error i.e Cannot mix BigInt and other types, use explicit conversions
    ```
    - so we have to convert that 23 into BigInt , here comes use case of BigInt() <br>
        so always use BigInt() constructor function for small number 💡💡💡
    - Eg 2.1 : using BigInt() constructor function
        ```js
        const huge = 894723894723894798223n
        const num = 23
        console.log(huge * BigInt(num)) // output : 20578649578649580359129n
        ```

- `2 exceptions of BigInt ✅`
    - so there're 2 exceptions where BigInt datatype can work
        - `first exception` : comparison operators 💡💡💡
        - `second exception` : + (plus) operators when working with strings 💡💡💡
    - Eg : of first exception of BigInt
        ```js
        console.log(20n > 15) // output : true 
        console.log(20n === 15) // output : false because === (triple equals) checks both value & datatype 
            // & triple equals doesn't do implicit type conversion 💡💡💡
        console.log(typeof 20n) // output : bigint
        console.log(20n == 20) // output : true
        console.log(20n == '20') // output : true
        ```
    - Eg : of second exception of BigInt
        ```js
        const huge = 894723894723894798223n
        console.log(huge + ' is REALLY big!!!') // output : 894723894723894798223 is REALLY big!!! 
        ```

- `where we can't use bigint datatype ✅`
    - we can't do mathematically operation with bigint datatype
    - Eg : using Math.sqrt() of bigint datatype
        ```js
        console.log(Math.sqrt(16n)) // output : error come i.e can't convert a BigInt value to a number
        ```
    - Eg : doing division
        ```js
        console.log(11 / 3) // output : 3.6666666666666665
        console.log(11n / 3n) // output : 3n ---> we got this output because BigInt cutoff the decimal part 💡💡💡
        ```

- `said by jonas` : we don't use BigInt very much but it's good to know 