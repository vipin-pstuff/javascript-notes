# math solver test walkthrough

## starter code 

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

## Complete code of Math solver project with unit testing 

<details>
    <summary>.babelrc file</summary>

```
put same thing as above starter code 
```
</details>

<details>
    <summary>.gitignore file</summary>

```
put same thing as above starter code
```
</details>

<details>
    <summary>index.html file</summary>

```
put same thing as above starter code
```
</details>

<details>
    <summary>package-lock.json</summary>

```
put this file also on github
```
</details>

<details>
    <summary>package.json file</summary>

```
put same thing as above starter code
```
</details>

<details>
    <summary>parse.js file</summary>

```
put same thing as above starter code
```
</details>

<details>
    <summary>parse.test.js file</summary>

```js
import parse from "./parse.js"

describe("#parse", () => {
  describe("with exponents", () => {
    test("it returns the correct result", () => {
      expect(parse("3 ^ 2")).toBe(9)
    })
  })

  describe("with addition", () => {
    test("it returns the correct result", () => {
      expect(parse("3 + 2")).toBe(5)
    })
  })

  describe("with subtraction", () => {
    test("it returns the correct result", () => {
      expect(parse("2 - 3")).toBe(-1)
    })
  })

  describe("with multiplication", () => {
    test("it returns the correct result", () => {
      expect(parse("2 * 3")).toBe(6)
    })
  })

  describe("with division", () => {
    test("it returns the correct result", () => {
      expect(parse("3 / 2")).toBe(1.5)
    })
  })

  describe("with parenthesis", () => {
    test("it returns the correct result", () => {
      expect(parse("(3 + 2) * 4")).toBe(20)
    })
  })

  describe("with very large numbers", () => {
    test("it returns the correct result in scientific notation", () => {
      expect(parse("10 ^ 30")).toBe(1e30)
    })
  })

  describe("with very small numbers", () => {
    test("it returns the correct result in scientific notation", () => {
      expect(parse("10 ^ -30")).toBe(1e-30)
    })
  })

  describe("with a malformed equation", () => {
    test("it returns NaN", () => {
      expect(parse("abc")).toBeNaN()
    })
  })
})
```
</details>

<details>
    <summary>script.js file</summary>

```
put same thing as above starter code
```
</details>

## Explanation of Math solver project with unit tests

- `STEP 1` : open the parse.js file 
  - & look at the different edge cases that we need to test <br>
    so inside parse() function we're checking `PARENTHESIS_REGEX` , `EXPONENT_REGEX` , etc variables <br>
    so we need to deal with all of the different edge cases & all of different operations we can pass in <brt>
    & also maybe deal with some of the more complex things like how to deal with scientific notation

- so we're gonna start with base cases like exponents , addition , subtraction & so on
- `STEP 2` : inside parse.test.js file 
    ```js
    import parse from "./parse.js"

    describe("#parse", () => {
      // here we just use another describe() block to know clearly about thing we're doing
      describe("with exponents", () => { 
        test("it returns the correct result", () => {
          expect(parse("3 ^ 2")).toBe(9)
        })
      })
    })
    ```
    - output : save the file & run `npm test` & it'll get passed
      - & inside `coverage` folder , inside `lcov-report` folder , & open index.html file through live server <br>
        to see that what we're actually testing , so only exponent related thing will not be highlighted <br>
        because we're testing that thing related to exponent

  - `STEP 2.1` : inside parse.test.js file , let's check edge case of addition 
    ```js
    import parse from "./parse.js"

    describe("#parse", () => {
      describe("with exponents", () => {
        test("it returns the correct result", () => {
          expect(parse("3 ^ 2")).toBe(9)
        })
      })

      describe("with addition", () => {
        test("it returns the correct result", () => {
          expect(parse("3 + 2")).toBe(5)
        })
      })

      describe("with subtraction", () => {
        test("it returns the correct result", () => {
          // we're doing subtraction to check whether that test working with negative numbers or not
          expect(parse("2 - 3")).toBe(-1) 
        })
      })

      describe("with multiplication", () => {
        test("it returns the correct result", () => {
          expect(parse("2 * 3")).toBe(6)
        })
      })

      describe("with division", () => {
        test("it returns the correct result", () => {
          expect(parse("3 / 2")).toBe(1.5)
        })
      })
    })
    ```
    - output : save the file & run `npm test` & only from 8 to 11 lines are testing 
      - so open that index.html through live server (which is inside coverage folder , lcov-report folder)
      - & only paranthesis is not testing that's why it's highlighted

  - `STEP 2.2` : inside parse.test.js file , let's test for paranthesis section
    ```js
    import parse from "./parse.js"

    describe("#parse", () => {
      describe("with exponents", () => {
        test("it returns the correct result", () => {
          expect(parse("3 ^ 2")).toBe(9)
        })
      })

      describe("with addition", () => {
        test("it returns the correct result", () => {
          expect(parse("3 + 2")).toBe(5)
        })
      })

      describe("with subtraction", () => {
        test("it returns the correct result", () => {
          expect(parse("2 - 3")).toBe(-1) 
        })
      })

      describe("with multiplication", () => {
        test("it returns the correct result", () => {
          expect(parse("2 * 3")).toBe(6)
        })
      })

      describe("with division", () => {
        test("it returns the correct result", () => {
          expect(parse("3 / 2")).toBe(1.5)
        })
      })

      describe("with parenthesis", () => {
        test("it returns the correct result", () => {
          expect(parse("(3 + 2) * 4")).toBe(20)
        })
      })

      describe("with very large numbers", () => {
        test("it returns the correct result in scientific notation", () => {
          expect(parse("10 ^ 30")).toBe(1e30)
        })
      })

      describe("with very small numbers", () => {
        test("it returns the correct result in scientific notation", () => {
          expect(parse("10 ^ -30")).toBe(1e-30)
        })
      })

      describe("with a malformed equation", () => {
        test("it returns NaN", () => {
          expect(parse("abc")).toBeNaN()
        })
      })
    })
    ```
    - output : save the file & run `npm test` & we'll get the 100% coverage

  - & now we'll think that we've covered every use cases , so technically yes <br>
      but there's a few additional things that we should test i.e <br>
      if we remember that we ran into problems with exponents operation & large numbers & small numbers 
      - so we should probably write some code that deals with large numbers & small numbers to make sure that those work as well
      - also we should deal with not a number to make sure when user pass a wrong formula ✔️✔️✔️

  - `STEP 2.3` : inside parse.test.js file , writing tests for exponents , large & small numbers and NaN
      ```js
      import parse from "./parse.js"

      describe("#parse", () => {
        describe("with exponents", () => {
          test("it returns the correct result", () => {
            expect(parse("3 ^ 2")).toBe(9)
          })
        })

        describe("with addition", () => {
          test("it returns the correct result", () => {
            expect(parse("3 + 2")).toBe(5)
          })
        })

        describe("with subtraction", () => {
          test("it returns the correct result", () => {
            expect(parse("2 - 3")).toBe(-1) 
          })
        })

        describe("with multiplication", () => {
          test("it returns the correct result", () => {
            expect(parse("2 * 3")).toBe(6)
          })
        })

        describe("with division", () => {
          test("it returns the correct result", () => {
            expect(parse("3 / 2")).toBe(1.5)
          })
        })

        describe("with parenthesis", () => {
          test("it returns the correct result", () => {
            expect(parse("(3 + 2) * 4")).toBe(20)
          })
        })

        describe("with very large numbers", () => {
          test("it returns the correct result in scientific notation", () => {
            expect(parse("10 ^ 30")).toBe(1e30) // here 1e30 is a scientific notation of 10 to the 30th
          })
        })

        describe("with very small numbers", () => {
          test("it returns the correct result in scientific notation", () => {
            expect(parse("10 ^ -30")).toBe(1e-30) // here we used - sign before 30 i.e 1e-30 which is again 10 to the -30th
          })
        })
        // till here if we do testing then we'll get the 100% coverage

        describe("with a malformed equation", () => { // this is for when the user give wrong equation to solve
          test("it returns NaN", () => {
            expect(parse("abc")).toBeNaN()
          })
        })
      })
      ```
    - output : save the file & after saving this file if the vscode create import file for `describe` automatically then remove it 
      - & rerun & run command `npm test` & all the tests will be passed & we'll got 100% code covers
      - we covered normal use cases & we also covered those use cases that we kind of ran into problem while developing 
