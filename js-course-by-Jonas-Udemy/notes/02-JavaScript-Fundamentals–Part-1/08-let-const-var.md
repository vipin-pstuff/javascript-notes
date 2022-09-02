# let , const , var

- these are 3 ways to create a new variable 

## example of let & const 

- Eg : of let & const keyword
    ```js
    let age = 30 ;
    age = 31;

    const birthYear = 2000
    birthYear = 1999 // output : in console , we'll get an error i.e assignment to constant variable 
    ```
    - so here we can understand that use `let` keyword to hold those sort of values which will change in the future <br>
        & use `const` keyword when we want to hold that value which never change in the future 
    - that's why we used `let` keyword with `age` variable because it'll change <br>
        & `const` keyword for birthYear of a person will never change

    - `Note` : we can't declare empty variable with `const` keyword like this <br>
        ```js
        const job // output : inside console , we'll get an error 
        ```
        - otherwise will get an error 
        - so for `const` keyword variable , we need initial value 

    - so remember , when to use `let` keyword & when to use `const` keyword

- `let & const` keywords are block scoped & `var` keyword is function scoped 💡💡💡
- `Note` : 
    - never use `var` keyword to create a new variable 
    - most of the time we use `const` keyword & less `let` keyword depending on situations 💡💡💡
    - if we're making a variable through `const` keyword then we can't leave the variable empty <br>
        means we have to define a value to it otherwise we'll get an error 💡💡💡

- Eg : not using any of the three keywords to create a new variable 
    ```js
    lastName = "sha"
    console.log(lastName) // output : sha
    ```
    - so even without `let , const & var` keywords we can create a new variable 
        - but it's bad practice & shouldn't do this way because this doesn't create a variable in the current scope <br>
            & due to this , JS will create a property on the global object ✔️✔️✔️

