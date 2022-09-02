# When to use comments

- we'll see about comments 
    - when you should use them
    - when you shouldn't 
    - & when they can be useful ✔️✔️✔️

## comments & use case of it with Math Solver Project

- inside Math Solver Project , inside parse.js file , we haven't used very many comments at all <br>
    because comments are not usually needed in most scenarios
    - generally if you're gonna write a comment in code then it means that your code <br>
        is maybe not written in the best way that it could 💡💡💡
    - we use comments on those places like we want to explain what a function does , or what a variable is for & so on.. 
    - Eg : we have a line of code like this 
        ```js
        3.14 * number // 3.14 is pi
        ```
        - so we wrote this comment to explain what number 3.14 is , so it will tell that 3.14 is a pi value but if we have number like this 
        ```js
        234 * number // 234 is the conversion from x unit to y unit
        ```
        - `234` is not very self-explanatory , so let's go back & see the same example
        ```js
        const PI = 3.14
        PI * number
        ```
        - here we in this we don't need to write comment anymore because `PI` variable is explaining itself
    - so if the variables names & functions names are not self-explanatory then it's not good for reading <br>
        & due to this we need to write comment 💡💡💡
    - so if your functions get really large & they don't have a very good name & your functions starts to do <br>
        like there are 10 different things inside of one function & then you're gonna have comments all over <br>
        explaining what each step of that function does , but in reality , <br>
        your functions should be small & a function should be one singular thing 💡💡💡
    
    - Eg : inside script.js file of Math Solver Project
        - all of our functions are pretty small i.e we have a handleMath() function <br>
            & we can put that handleMath() function inside that big function i.e prase() function also <br>
            but we didn't put it inside parse() function means we make a separate function for handle math <br>
            means we kept it in it's own little function 💡💡💡
        - same thing with inside script.js file , that `form.addEventListener() function` does one single thing <br>
            but we can put that entire parse() function code inside this `form.addEventListener()` function <br>
            but we separated out into it's own function , so that it becomes easier to read all of our code 💡💡💡

    - & we don't actually need comments that explain every step of what's going on ✔️

- another place that comments really commonly used 
    - Eg : inside script.js file of Math Solver Project 
        - inside that parse() function , we can comment on each condition like this 
            ```js
            function parse(equation) {
                // if the equation has parenthesis
                if (equation.match(PARENTHESIS_REGEX)) {
                  const subEquation = equation.match(PARENTHESIS_REGEX).groups.equation
                  const result = parse(subEquation)
                  const newEquation = equation.replace(PARENTHESIS_REGEX, result)
                  return parse(newEquation)
                // if the equation has exponents
                } else if (equation.match(EXPONENT_REGEX)) {
                  const result = handleMath(equation.match(EXPONENT_REGEX).groups)
                  const newEquation = equation.replace(EXPONENT_REGEX, result)
                  return parse(newEquation)
                // if the equation has multiplication/division
                } else if (equation.match(MULTIPLY_DIVIDE_REGEX)) {
                  const result = handleMath(equation.match(MULTIPLY_DIVIDE_REGEX).groups)
                  const newEquation = equation.replace(MULTIPLY_DIVIDE_REGEX, result)
                  return parse(newEquation)
                } else if (equation.match(ADD_SUBTRACT_REGEX)) {
                  const result = handleMath(equation.match(ADD_SUBTRACT_REGEX).groups)
                  const newEquation = equation.replace(ADD_SUBTRACT_REGEX, result)
                  return parse(newEquation)
                } else {
                  return parseFloat(equation)
                }
            }
            ```
        - & so on we can do comments but here doing comments are completely pointless <br>
            because here code itself are self-explanatory means these conditions are already explaining themselves <br>
            so we don't need to do comments 💡💡💡
        - & due to comments , they just add extra clutter & make the code harder to read 💡💡💡

    - actually the advice we got earlier to write step by step comments for the project that what we gonna do <br>
        so this advice is for beginner not for intermediate or advance programmer <br>
        so when fill those comments through the solution then a good idea to start removing those comments 💡💡💡

    - if we're starting a new project & it requires complex solution then we can write the comments step by step <br>
        & this is a great way to tackle with complex projects , but let's say `STEP 1` is completed <br>
        then remove the `STEP 1` comment & so on as soon as we created the result 💡💡💡

- Another use case for comments is when we need to write trickly code 
    - Eg : if we're writing code & that's kind of hard to understand but we have to do it for a particular reason <br>
        then write a comment , not just only explaining what the code does but also explain why we did that <br>
        because most of the time if Kyle going through someone else code & if he see something which is really weird or tricky <br>
        & then kyle will think `why they done this thing in a tricky or weird way , if they can also write in much easier way` <br>
        then he'll go in there & he'll make a change & get rid of the hard code & replace it with easy code <br>
        & then he'll end up breaking things without realizing it 
        - but if there's just a simple comment that says like kinda <br>
            `// we did this weird thing because of some edge cases in the library` <br>
            now if kyle see then he'll be able to know that there's a reason why they did this really weird confusing difficult piece of code <br>
            & then they also can say `// This code does X` means explain what the code does <br>
            ```js
            // we did this weird thing because of some edge cases in the library
            // This code does X
            ```
            - so through this we can understand why they wrote weird difficult piece of code <br>
                due to this reason & what does that code do 💡💡💡
        - but if we don't do this then in future , when we come back then we couldn't be able to understand <br>
            & why that weird code is there 💡💡💡

- another great use cause of comments 
    - like inside script.js file of Math Solver Project , we have all these regex variables <br>
        & these regex are kind of confusing to read
    - so here we can use comment to explain each of them like with example also like this
        - Eg : inside script.js file of Math Solver Project 
            ```js
            // This matches the code inside parenthesis
            // Eg : matches (2 + 2)
            const PARENTHESIS_REGEX = /\((?<equation>[^\(\)]*)\)/
            const MULTIPLY_DIVIDE_REGEX = /(?<operand1>\S+)\s*(?<operation>[\/\*])\s*(?<operand2>\S+)/
            const EXPONENT_REGEX = /(?<operand1>\S+)\s*(?<operation>\^)\s*(?<operand2>\S+)/
            const ADD_SUBTRACT_REGEX = /(?<operand1>\S+)\s*(?<operation>(?<!e)[\-\+])\s*(?<operand2>\S+)/
            ```
        - now this way , things become easier to understand

- `said by kyle ✅` : 
    - while writing comments then mostly it should explain two things 
        - `first` : explain why that exists
        - `second` : & how that complex thing works Eg : regex , weird edge cases used 
        - but those code which are self-explanatory then there we don't need to use comments for those code 💡💡💡

    - if you use lot's of comments then if see are those comments required for those lines of code <br>
        or you're using those comments because the code that you wrote is not as clean & well-named as it could be <br>
        so make the code cleaner & easy to read & remove the redundant & unnecessary

    - & those comments which are higher level type of comments are used inside Documentation which is good 
