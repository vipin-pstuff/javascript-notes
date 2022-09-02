# Scope & the scope chain

- so in last lecture , we learned that each execution context has three things 
    - first : a `variable environment`
    - second : a `scope chain`
    - third : a `this` keyword

- `what we'll learn` 
    - what is scope & a scope chain are
    - why they are so important 
    - how they work 
    - difference b/w scope chain VS callStack

- all the scope concept is easy to understand , just keep parent-child relationship in mind ✔️

## What is Scope

- `scope` : is the space or environment in which a certain variable is declared
    - three types of scope i.e `global` scope , `function` scope , `block` scope

- `Scoping` : means how our program's variables are organized & accessed by the JS engine 
    - means where do variables live or where can we access a certain variable & where not 

- `lexical scoping` : means that the way variables are organized & accessed is entirely controlled <br>
    by the placement of functions & of blocks in the programs code 
    - Eg : a function that's written inside another function has access to the variables of the parent function 
    - this concept comes when we deal with `closure` concept

- `scope of a variable` : means it's the entire region/place of our code where a certain variable can be accessed
    - most of the people define `scope of a variable` as scope

## Types of scope 

![types of scope](../notes-pics/8-module/lecture-6/lecture-6-1.jpg)

- `global scope` : means variables (which are defined in global scope) can be accessible from anywhere 
    - because there are always at the top of the scope chain

- `block scope` : means curly braces is a block which create a scope
    - but there's a different b/w function scope & block scope
    
- `var` keyword : is a function scoped but this is not to remember

- each function creates it's own scope & we can have nested scopes structure 💡💡💡 like this 
    ![types of scope](../notes-pics/8-module/lecture-6/lecture-6-2.jpg)

## Scope chain

![scope chain](../notes-pics/8-module/lecture-6/lecture-6-3.jpg)

- `scope chain` : means if one scope needs to use a certain variable (which is not find that variable in the current scope) 
    - then scope will look up in the scope chain to find that variable in one of the parent scopes
    - & if the scope able to find that variable then it'll use that variable <br>
        & if it can't then there will be an error & this process is called `variable lookup`
    - `imp note ✅` : that those variables are not copied from one scope to another
        - means scopes simply look up in the scope chain until they find a variable that they need & then they use it 
        - A outer scope will never ever have access to the variables of an inner scope <br>
            but inner scope can access outer scope variables 💡💡💡
        - so inner scope can only lookup in a scope chain but it can't look down 
            ![variable look up in scope chain](../notes-pics/8-module/lecture-6/lecture-6-4.jpg)

- now on scope is left i.e blocks (which also create a scope) 
    - `Note` : `let` & `const` are ES6 keywords which used to maintain the scope <br> 
        but `var` keyword doesn't maintain & destroy the scope rule 
    ![var keyword](../notes-pics/8-module/lecture-6/lecture-6-5.jpg)
    - so here we can see that we define `millenial` variable through `var` keyword inside `if statement` <br>
        but this variable is defined inside first() function scope <br> 
        because `var` keyword is a function scope & `let` & `const` are block-scoped 💡💡💡
    - now inside `if statement` (which is a block scope) , we'll get `millenial` & `myName` variables like this 
        ![var keyword](../notes-pics/8-module/lecture-6/lecture-6-6.jpg)
        - & scope chain concept also apply in `block` scope also 💡💡💡

- `lexical scoping` 
    - now `if statement` block scope can't access any of variables (which is defined inside second() function scope) <br>
        because of lexical scoping , means we can access variables but it depends on where the scope is placed <br>
        means where that variable is written in the code 
    - so here that `if statement` & `second()` function are both child scopes of the first() function <br>  
        or we can say that they are a sibling scopes
    - so `rules of lexical scoping` is that two different scopes can't have access to each others variables <br>
        because one is not written inside the other one 
    - & `scope chain` only works upwards , not sideways & downwards 💡💡💡
        ![can't access variables due to different scopes](../notes-pics/8-module/lecture-6/lecture-6-7.jpg)
    - So in short, a lexical environment is a place where variables and functions live during the program execution

## Scope Chain VS callStack

- inside `callStack` 
    - this code will be executed like this 
        ![process of how code will be executed inside the callStack](../notes-pics/8-module/lecture-6/lecture-6-8.jpg)
    - so here we can see ,
        - inside a global execution context will be created which contain all the global things inside itself <br>
            & for each variables , variable environment will be created
        - a execution context will be created for each function inside the callStack <br>
            in order wise as they're called & each execution context of each function contain variables inside of themselves
    - `STEP 1` : now execution will start from global execution context 
        - & the variables which are stored (inside Global execution context) 
        - are exactly stored in the variable environment of the global execution context like this 💡💡💡 
            ![global execution context](../notes-pics/8-module/lecture-6/lecture-6-9.jpg)
    - `STEP 2` : now inside global execution context , we called first() function
        - & then execution context of first() function will be called 
        - & this first() function will also get's it's own scope & inside of that scope <br>
            all the variables (which are defined inside first() function) will be stored 
        - `Note` : getting a scope context of first() function is same <br>
            as the variable environment of the functions execution context 
        - `Note about scope chain 🔥` : & as we know that `scope chain` :
            - means order in which functions are written in the code <br>
                & `scope chain` nothing to do with order in which functions were called 
            - means the scope chain has nothing to do with the order of the execution contexts in the callStack
            - so the scope chain does only get the variable environments from the execution context 💡💡💡 <br>
                but for the callStack , order of execution context means order of code that needs to be executed 
                ![global execution context](../notes-pics/8-module/lecture-6/lecture-6-10.jpg)
    - `STEP 3` : now , inside execution context of first() function , we called second() function 
        - so a execution context will be created for second() function <br>
            & then a scope environment context will be created for variables (which are defined inside second() function)
        - & even inside the scope environment of second() function , those variables also defined <br>
            (which are inside parent scope) i.e first() function , the global execution context like this  
            ![a scope environment of second() function](../notes-pics/8-module/lecture-6/lecture-6-11.jpg)
            - so this is the scope chain example which behind the scenes happen
        - `Note ✅` : `b` variable is accessible through second() function 
            - because we can see that we created second() function body inside first() function itself
            - so here `closure` & `lexical scope` concept comes that's why second() function can access `b` variable 💡💡💡
    - `STEP 4` : inside second() function , we called third() function 
        - so control comes inside third() function body , now third() function is defined in global scope  
        - so a scope will be created for third() function like this 
            ![a scope environment of third() function](../notes-pics/8-module/lecture-6/lecture-6-12.jpg)
        - now we'll get an reference error because `c` & `b` variables are not accessible 
            - because `c` & `b` are not in local scope of third() function 
            - so JS will see in scope chain for these variables but even in global scope , there no `c` & `b` variables
        - `Note` : reason that why `c` variable is not accessible inside a scope environment of third() function
            - because third() function is created in global scope 💡💡💡

## Extra stuff 

- scope chain : https://dev.to/lydiahallie/javascript-visualized-scope-chain-13pd 👍

## Summary 

![summary](../notes-pics/8-module/lecture-6/lecture-6-13.jpg)
