# jest with ES6 modules

- here we'll see how we can work with Jest in the browser

## Complete code with jest + ES6 modules

<details>
    <summary>.babelrc file</summary>

```json
{
  "presets": ["@babel/preset-env"]
}
```
</details>

<details>
    <summary>.gitignore file</summary>

```
node_modules
coverage
```
</details>

<details>
    <summary>index.html file</summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="script.js" type="module"></script>
  <title>Math Solver</title>
</head>
<body>
  <form id="equation-form">
    <input id="equation">
    <button type="submit">Solve</button>
  </form>
  <div id="results"></div>
</body>
</html>
```
</details>

<details>
    <summary>package-lock.json</summary>

```json
put this file also on github
```
</details>

<details>
    <summary>package.json file</summary>

```json
{
  "name": "current-project",
  "version": "1.0.0",
  "description": "",
  "main": "script.js",
  "scripts": {
    "test": "jest --coverage"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.13.10",
    "@babel/preset-env": "^7.13.10",
    "jest": "^26.6.3"
  }
}
```
</details>

<details>
    <summary>parse.js file</summary>

```js
const PARENTHESIS_REGEX = /\((?<equation>[^\(\)]*)\)/
const MULTIPLY_DIVIDE_REGEX = /(?<operand1>\S+)\s*(?<operation>[\/\*])\s*(?<operand2>\S+)/
const EXPONENT_REGEX = /(?<operand1>\S+)\s*(?<operation>\^)\s*(?<operand2>\S+)/
const ADD_SUBTRACT_REGEX = /(?<operand1>\S+)\s*(?<operation>(?<!e)[-\+])\s*(?<operand2>\S+)/

export default function parse(equation) {
  if (equation.match(PARENTHESIS_REGEX)) {
    const subEquation = equation.match(PARENTHESIS_REGEX).groups.equation
    const result = parse(subEquation)
    const newEquation = equation.replace(PARENTHESIS_REGEX, result)
    return parse(newEquation)
  } else if (equation.match(EXPONENT_REGEX)) {
    const result = handleMath(equation.match(EXPONENT_REGEX).groups)
    const newEquation = equation.replace(EXPONENT_REGEX, result)
    return parse(newEquation)
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

function handleMath({ operand1, operand2, operation }) {
  const number1 = parseFloat(operand1)
  const number2 = parseFloat(operand2)

  switch (operation) {
    case "*":
      return number1 * number2
    case "/":
      return number1 / number2
    case "+":
      return number1 + number2
    case "-":
      return number1 - number2
    case "^":
      return number1 ** number2
  }
}
```
</details>

<details>
    <summary>parse.test.js file</summary>

```js
import parse from "./parse.js"

describe("#parse", () => {
  test("it works", () => {
    expect(parse("3 - 1")).toBe(2)
  })
})
```
</details>

<details>
    <summary>script.js file</summary>

```js
import parse from "./parse.js"

const inputElement = document.getElementById("equation")
const outputElement = document.getElementById("results")
const form = document.getElementById("equation-form")

form.addEventListener("submit", e => {
  e.preventDefault()

  const result = parse(inputElement.value)
  outputElement.textContent = result
})
```
</details>

## Explanation of Math solver project with Jest (using it inside the browser)

- `STEP 1` : run command `npm init -y` to initialize the package.json file
    - `STEP 1.1` : then install `npm i --save-dev jest`
    - `STEP 1.2` : inside package.json file , make a test file 
        ```js
        "scripts": {
            "test": "jest --coverage" // running jest + we also want coverage
        }
        ```
    - `STEP 1.3` : then run `npm test` 
        - output : we'll get an error because we didn't setup a test for that project

- we're gonna be testing for this project i.e parse function & we'll create only unit tests for this project 
    - & unit test will be for that parse() function (which is inside script.js file)
    - but here is the problem that parse() function is built in this script.js file only <br>
        that's why we need to create separate file for it 
- `STEP 2` : inside main project folder , create a file as parse.js file
    - cut bunch of code which need to parse <br>
        i.e parse() function itself & handleMath() function & all the regex variables from script.js file 
    - & paste them inside parse.js file 
        ```js
        const PARENTHESIS_REGEX = /\((?<equation>[^\(\)]*)\)/
        const MULTIPLY_DIVIDE_REGEX = /(?<operand1>\S+)\s*(?<operation>[\/\*])\s*(?<operand2>\S+)/
        const EXPONENT_REGEX = /(?<operand1>\S+)\s*(?<operation>\^)\s*(?<operand2>\S+)/
        const ADD_SUBTRACT_REGEX = /(?<operand1>\S+)\s*(?<operation>(?<!e)[-\+])\s*(?<operand2>\S+)/

        export default function parse(equation) {
          if (equation.match(PARENTHESIS_REGEX)) {
            const subEquation = equation.match(PARENTHESIS_REGEX).groups.equation
            const result = parse(subEquation)
            const newEquation = equation.replace(PARENTHESIS_REGEX, result)
            return parse(newEquation)
          } else if (equation.match(EXPONENT_REGEX)) {
            const result = handleMath(equation.match(EXPONENT_REGEX).groups)
            const newEquation = equation.replace(EXPONENT_REGEX, result)
            return parse(newEquation)
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

        function handleMath({ operand1, operand2, operation }) {
          const number1 = parseFloat(operand1)
          const number2 = parseFloat(operand2)

          switch (operation) {
            case "*":
              return number1 * number2
            case "/":
              return number1 / number2
            case "+":
              return number1 + number2
            case "-":
              return number1 - number2
            case "^":
              return number1 ** number2
          }
        }
        ``` 

    - `STEP 2.1` : inside script.js file , import that parse.js file 
        ```js
        import parse from "./parse.js"

        const inputElement = document.getElementById("equation")
        const outputElement = document.getElementById("results")
        const form = document.getElementById("equation-form")

        form.addEventListener("submit", e => {
          e.preventDefault()

          const result = parse(inputElement.value)
          outputElement.textContent = result
        })
        ```

    - `STEP 2.2` : inside index.html file , make the script link as type="module"
        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script src="script.js" type="module"></script>
          <title>Math Solver</title>
        </head>
        <body>
          <form id="equation-form">
            <input id="equation">
            <button type="submit">Solve</button>
          </form>
          <div id="results"></div>
        </body>
        </html>
        ```

- now still our application will work & we made separate file for parse i.e parse.js file <br>
    because we want to test it easily & then write our test

- `STEP 3` : inside main project folder , create a test file as parse.test.js file
    - inside parse.test.js file
        ```js
        import parse from "./parse.js"

        describe("#parse", () => {
          test("it works", () => {
            expect(parse("2 + 2")).toBe(4)
          })
        })
        ```
        - output : save the file & run `npm test` & then we'll get an error i.e `Jest encountered an expected token`
            - means we're trying to import a file which Jest can't parse eg: it's not plain javascript
            - By default , if Jest sees a Babel config , it will use that to transform your files , ignoring "node_modules"

        - this error means Jest has no idea what is `import` means & it uses the normal `requires node syntax` <br>
            because Jest is based on node , so we need to tell Jest to be able to compile our files with Babel <br>
            because Jest said it'll work with babel & Babel can take our import module code & actually convert it into something <br>
            that Jest can understand ✔️

    - so now we need to install the babel
    - `STEP 3.1` : inside terminal run command i.e `npm i --save-dev @babel/core @babel/preset-env`
        - now this command will install the babel related files 
    
    - `STEP 3.2` : inside main project folder , create a file as `.babelrc` file
        - & Nice thing about Jest is it's automatically gonna know we have a babelrc file & it's gonna use it to <br> 
            compile & transpile our code , so that it can actually understand what's going on ✔️✔️✔️

    - `STEP 3.3` : inside .babelrc file
        - we need to set one preset variable in array form & that array value will contain @babel/present-env
        ```js
        {
          "presets": ["@babel/preset-env"]
        }
        ```

    - output : now run `npm test` & it's gonna parse our tests
        - & if we get failure then remove these automatically generated import from inside parse.jest.js file i.e 
            ```
            import { expect } from "@jest/globals" 
            import { describe }  from "yargs"
            ```
        - & then run `npm test` & now it pass successfully

- now the test we wrote inside parse.test.js file , it won't work with negative sign like 
    - `STEP 4` : inside parse.test.js file , changing coding from `+` sign to `-` sign
        ```js
        import parse from "./parse.js"

        describe("#parse", () => {
          test("it works", () => {
            expect(parse("3 - 1")).toBe(2)
          })
        })
        ```
        - output : run `npm test` & we'll get an error & we'll get expected : 2 , received : 3 <br>
            because that regex are parsed in the node environment VS the browser environment are slightly different <br>
            so if we find our add , subtract to regex like 
        - inside parse.js file , more the backslash sign from ADD_SUBTRACT_REGEX variable
            ```js
            const ADD_SUBTRACT_REGEX = /(?<operand1>\S+)\s*(?<operation>(?<!e)[-\+])\s*(?<operand2>\S+)/
            ```
            - so from here `[-\+]` we removed the backslash sign
        - now rerun `npm test` & now it will pass & browser version is still going to work as expected
            - so our test is working fine inside terminal when we're doing subtraction
            - & if we open that application & do `3 - 1` then still work i.e `2`
        - so it's working inside both i.e browser & node 

## said by kyle 

- if we're using normal export & import syntax then create a `.babelrc` file & put that preset env

- now take this project & write out all of the different unit tests that we need for that parse function 
    - so make sure we should check all the different edge cases , get all the different branches
    - & at the end of this project , we have 100% test coverage
    - do this by yourself & in next lecture we'll do this same 
