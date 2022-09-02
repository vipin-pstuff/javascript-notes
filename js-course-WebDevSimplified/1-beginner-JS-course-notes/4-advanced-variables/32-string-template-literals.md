# string template literals

    - is a special way to define strings using backticks -> ``

## normal way & backticks to define string 

    - normal way to define a string by using double or single quotes

    eg : using double or single quotes to define a string ✅

        let a = "Hi" 
        //OR
        let a = 'Hi'

        console.log(a) 

    eg : using backticks to define a string ✅

        let a = `Hi`

        console.log(a)

## Note - for backticks ✅

    - using "" -> double quotes is kinda awkward so 

    - using backticks -> ``
        - has really good feature we can combine with variables 
            in order to make string really nice
        
        - it is also used to print/log multiple things at once (not just strings)

    - `` -> this backticks called template string or string literals or string interpolation 💡 

## example - of using double quotes with variables ✅

    - here why we need to use backticks 💡

    eg : 
        let a = "hello" 
        let b = "world"

        console.log(a + " " + b)

        - here we can see that we use + -> plus operator to concatenate 
            & " " -> double quotes to give a space b/w them

        - so here comes string template concept 💡

## example - of using backticks with variables ✅

    - important example 🔥

    eg : 
        let a = "hello" 
        let b = "world"  +----------------> here we gave a space to print space also
                         |
        console.log(`${a} ${b}`)
        // output : hello world

        console.log(`${2 + 3} ${b}`)
        // output : 5 world

## Note - for template string ✅

    - we use backticks to using template string 

    - to use variables inside the backticks
        then use $ -> dollar sign & curly braces 
        and inside that curly braces we give the variable name like this 
        ${}

    NOTE : 💡💡
        - don't give a space b/w dollar sign & curly braces

        - only define one variable inside that curly braces
            otherwise we'll not get right output

    - use template string -> according to situation otherwise 
        use string concatenation i.e plus sign
        