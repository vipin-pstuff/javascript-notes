# this keyword

## about `this` keyword

![about `this` keyword](../notes-pics/8-module/lecture-10/lecture-10-0.jpg)

- let's analyze four different ways to call functions 
    - `first way` : call a function as a method like this 
        ![about `this` keyword](../notes-pics/8-module/lecture-10/lecture-10-1.jpg)
        - so always access properties & methods inside an object then use `this` keyword 💡💡💡 <br>
            instead of using name of that object 
    - `second way` : if we use `this` keyword inside normal function 
        - then `this` keyword points to `window` global object which is not good 
        - that's why use strict mode i.e `'use strict'`
        ![about `this` keyword](../notes-pics/8-module/lecture-10/lecture-10-2.jpg)
    - `third way` : if we use `this` keyword inside arrow function
        - then `this` keyword points to `window` global object due to lexical scope
        ![about `this` keyword](../notes-pics/8-module/lecture-10/lecture-10-3.jpg)
    - `fourth way` : using `this` keyword inside an event listener
        ![about `this` keyword](../notes-pics/8-module/lecture-10/lecture-10-4.jpg)

- `what "this" keyword is not ✅` : 
    - `this` keyword will never point to the function in which we're using it
    - also it never points to the variable environment of the function

- so there are other ways that we can call a function like by using keywords like `new` , `call` , `apply` , `bind` 💡💡💡 
    ![about `this` keyword](../notes-pics/8-module/lecture-10/lecture-10-5.jpg)
