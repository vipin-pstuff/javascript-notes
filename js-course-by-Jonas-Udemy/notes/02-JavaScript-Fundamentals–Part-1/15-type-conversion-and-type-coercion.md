# Type conversion & Type coercion

- `type conversion` : means explicit type conversion 
    - means when we manually convert from one datatype into another datatype

- `type coercion` : means implicit type conversion 
    - means when JS convert from one datatype into another datatype automatically behind the scene for us 

## example 

- Eg : checking datatype of `NaN` keyword"
    ```js
    console.log(typeof NaN) // output : number
    ```

- `Note about JS` 
    - JS only convert from number datatype into a string or boolean datatype
    - but we can't covert `undefined` into null & this doesn't make any sense to do this 
    - & here right now we just converted number datatype into string or vice versa <br>
        but not from number into boolean because boolean behave in a special way <br>
        that's why we have separate lecture on truthy & falsy values 💡💡💡

- `Note` : for arithmetic operator 
    - in case of plus operator , concatenation will happen if only when first operand is in string & second operand is in number <br>
        but if use minus or divide or modulus operator then actual operations/calculations will be done 💡💡💡
    - Eg : of plus & minus arithmetic operator 
        ```js
        let n = '1' + 1 // concatenation will happen , so it'll become '11' in string datatype
        n = n - 1
        console.log(n) // output : 10

        // example 
        2 + 3 + 4 + '5' // output : "95"
        '10' - '4' - '3' - 2 + '5' // output : "15"
        ```

- Eg : using comparison operation
    ```js
    console.log('24' > '19') // output : true
    ```
    - so here JS did automatic type conversion behind the scene for us  


- `said by Jonas` 
    - many people don't like type coercion or implicit type coercion or automatic type coercion <br>
        because it's a bad practice to rely on only automatic type coercion because it bring many unexpected bugs into our code base <br>
        however , this problem only happens when we don't really know what we're doing <br>
        but if we know then we can easily avoid this error
    - so type coercion allow us to write less code but use it wisely in your code base