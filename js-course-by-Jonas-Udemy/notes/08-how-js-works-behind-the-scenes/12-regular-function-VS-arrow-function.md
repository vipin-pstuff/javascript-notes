# Regular Function VS arrow function

- Eg 1 : testing `this` keyword by using through regular function & arrow function
    ```js
    const jonas = {
        firstName : "Jonas" , 
        year : 1991 , 
        calcAge : function() {
            console.log(this)
            console.log(2037 - this.year)
        } ,

        greet : () => console.log(`Hey ${this.firstName}`)
    }

    jonas.greet() // output : Hey undefined
    ```
    - so we didn't got `Hey Jonas` as a output 
    - so as we know that arrow function doesn't get it's own `this` keyword <br>
        because global/parent scope of `greet()` method is window object
    - we get undefined as a output because there's `firstName` property on window global object

- `Imp Note ✅` : here curly braces of jonas object is not a block of code , it's an object literal 💡💡💡 

- `Note ✅` : in this situation , if we use `var` keyword then things become pretty dangerous <br>
    because if variables are declared with `var` keyword , actually create properties on the global object 💡💡💡
    - Eg : using `var` keyword 
        ```js
        var firstName = "Matilda"

        const jonas = {
            firstName : "Jonas" , 
            year : 1991 , 
            calcAge : function() {
                console.log(this)
                console.log(2037 - this.year)
            } ,

            greet : () => console.log(`Hey ${this.firstName}`)
        }

        jonas.greet() // output : Hey Matilda
        ```
        - we got output because inside arrow function , `this` keyword is pointing to `window` global object <br>
            & through `var` keyword , this `firstName` variable is created as a property inside `window` global object <br>
            even if we print `window` global object , then inside of it we can see `firstName` variable as a property
    - but don't ever use `var` keyword to create anything in JS due to bad practice 

- `said by jonas` : you should never ever use an arrow function as a method 💡💡💡
    - & use normal function as a method if we're dealing with `this` keyword 

- Eg 2 : another pitfall of `this` keyword ✅
    ```js
    const jonas = {
        firstName : "Jonas" , 
        year : 1991 , 
        calcAge : function() {
            console.log(this) // output : we'll get jonas object then
            console.log(2037 - this.year) // output : 46

            const isMillenial = function() {
                console.log(this) // output : undefined
                console.log(this.year >= 1981 && this.year <= 1996) 
                // output : error will come i.e can't read property 'year' of undefined
            } 
            isMillenial()
        } ,

        greet : () => console.log(`Hey ${this.firstName}`)
    }

    jonas.calcAge() 
    ```
    - `Note` : here `isMillenial()` is a normal function
        - `rule` : is that inside an object , if we create a nested normal function inside a normal function <br> 
            then inside that nested normal function , if we do `console.log(this)` then we'll get undefined 💡💡💡
        - some people consider it as a bug in JS but it's not because it's just how `this` keyword works

    - now we have two solutions for this problem 💡💡💡
        - `first solution` : inside an object , inside a normal function make a const variable 
            - but outside that nested normal function like this 
            ```js
            const jonas = {
                firstName : "Jonas" , 
                year : 1991 , 
                calcAge : function() {
                    console.log(this) 
                    console.log(2037 - this.year) 

                    const self = this 
                    // before this nested normal function before can access our object
                    // that's why we created before this nested normal function 💡💡💡 
                    const isMillenial = function() {
                        console.log(self) // output : we'll get correct output
                        console.log(self.year >= 1981 && self.year <= 1996) // output : we'll get correct output
                    } 
                    isMillenial()
                } ,

                greet : () => console.log(`Hey ${this.firstName}`)
            }

            jonas.calcAge() 
            ```
            - `note` : we can name that `self` variable as `that` variable name
        
        - `second solution` : inside an object , inside a normal function , use that nested function as arrow function
            - because arrow function will points directly to the parent 💡💡💡
            ```js
            const jonas = {
                firstName : "Jonas" , 
                year : 1991 , 
                calcAge : function() {
                    console.log(this) 
                    console.log(2037 - this.year) 

                    const isMillenial = () => {
                        console.log(this) // output : we'll get correct output
                        console.log(this.year >= 1981 && this.year <= 1996) // output : we'll get correct output
                    } 
                    isMillenial()
                } ,

                greet : () => console.log(`Hey ${this.firstName}`)
            }

            jonas.calcAge() 
            ```
            - so inside an object , inside that normal function i.e calcAge() , we used a arrow function <br>
                & inside of this arrow function , we did console.log(this) , so `this` keyword will points towards <br>
                it's parent scope i.e `jonas` object , so `this` keyword is jonas object 💡💡💡  
            - so basically an arrow function inherits that `this` keyword from the parent scope 💡💡💡

## `arguments` keyword

- just like `this` keyword , we have `arguments` keyword 

- Eg 1 : using `arguments` keyword 
    ```js
    const addExpr = function(a, b) {
        console.log(arguments)
        return a + b
    }
    addExpr(2, 5)
    ```
    - `console.log(arguments)` will give an array (& that array name is `Arguments`)
        - & that array contain 2 , 5 as a argument that we gave

    - this would be useful that we can define many arguments as we want even if we have less parameters like this 
        ```js
        const addExpr = function(a, b) {
            console.log(arguments)
            return a + b
        }
        addExpr(2, 5)
        addExpr(2, 5, 8, 12)
        ```
        - output : we'll get that `Arguments` array which contain all our arguments
            - so we can use a loop inside this function to loop through over this array

    - `Note` : `arguments` keyword only exists/work with normal function , not with an arrow function 💡💡💡

- `said by jonas` 
    - `arguments` is not important to know 
    - because in modern JS , we have a more modern way of dealing with multiple parameters 
