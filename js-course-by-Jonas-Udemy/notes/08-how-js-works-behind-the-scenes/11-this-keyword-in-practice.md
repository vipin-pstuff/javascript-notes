# this keyword in practice 

## Examples 

- Eg 1 : concept of method borrowing ✅
    ```js
    const jonas = {
        year : 1991 ,
        calcAge : function() {
            console.log(this)
            console.log(2037 - this.year)
        }
    }

    const matilda = {
        year: 2017 ,
    }

    matilda.calcAge = jonas.calcAge // output of method borrowing concept
    console.log(matilda) // output : we'll get calcAge() function
    ```
    - `method borrowing` means : we borrowed the method from one object to the other <br> 
        so that we don't have to write it in a duplicate way 💡💡💡

- Eg 2 : of how `this` keyword know which current object needs to point/refer
    ```js
    const jonas = {
        year : 1991 ,
        calcAge : function() {
            console.log(this)
            console.log(2037 - this.year)
        }
    }
    jonas.calcAge() 
    ```
    - `Note` : now how `this` keyword able to point/refer towards the current object 
        - because we called calcAge() function through `jonas` object 
        - so that's why `this` keyword is pointing to `jonas` object 💡💡💡

- Eg 3 : if we do this ✅
    ```js
    const jonas = {
        year : 1991 ,
        calcAge : function() {
            console.log(this) 
            console.log(2037 - this.year) 
                // here this.year is now undefined 
                // because inside window object there's no year property 💡💡💡
        }
    }
    const f = jonas.calcAge
    f() // output : window object will be printed & we'll get NaN
    ```
    - so ultimately , we can't access year property if this.year becomes undefined.year
    - so if we do `console.log(f)` then function definition body of calcAge() is stored inside `f` variable 

## Extra stuff of `this` keyword & arrow function 

- `Note ✅` : globally if we do `console.log(this)` then `this` keyword will points to window object

- Eg : using arrow function VS normal function inside the object with `this` keyword ✅
    ```js
    const stuff = {
        firstName : "Hello" ,,

        // normal function
        print() {
          console.log(this) // output : stuff object will be printed 
        } ,

        // using anonymous function
        message = function() {
            console.log(this) // output : stuff object will be printed 
        } ,

        // arrow function
        callMe : () => {
          console.log(this) // output : window object
        }
    }

    stuff.print()
    stuff.callMe()
    ```

- `Best Practice for an object ✅` : 
    - inside object , use anonymous function instead of normal function 
        - because first , we can't create normal function through `function` keyword inside an object <br>
            that's why we need to normal function without `function` keyword <br>
            & due to this readability decline 
        - that's why use normal anonymous function , not arrow function due to `this` keyword   
