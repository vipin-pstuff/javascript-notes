# 65-0 Color Game Codes

- only code contains 

## starter code

<details>
    <summary>index.html</summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Color Game</title>
</head>
<body>
  <header class="header">
    <h2 class="title">Color Game</h2>
    <h3 class="color-string">rgb(255, 0, 0)</h3>
    <form class="form">
      <fieldset>
        <legend>Format</legend>
        <div class="radio-group">
          <input type="radio" name="format" id="rgb" value="rgb" checked>
          <label for="rgb">RGB</label>
          <input type="radio" name="format" id="hex" value="hex">
          <label for="hex">Hex</label>
          <input type="radio" name="format" id="hsl" value="hsl">
          <label for="hsl">HSL</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Difficulty</legend>
        <div class="radio-group">
          <input type="radio" name="difficulty" id="easy" value="easy" checked>
          <label for="easy">Easy</label>
          <input type="radio" name="difficulty" id="medium" value="medium">
          <label for="medium">Medium</label>
          <input type="radio" name="difficulty" id="hard" value="hard">
          <label for="hard">Hard</label>
        </div>
      </fieldset>
    </form>
  </header>
  <div class="color-grid">
    <button class="wrong" disabled style="background-color: blue;"></button>
    <button disabled style="background-color: red;"></button>
    <button class="wrong" disabled style="background-color: green;"></button>
    <button class="wrong" disabled style="background-color: yellow;"></button>
    <button class="wrong" disabled style="background-color: purple;"></button>
    <button class="wrong" disabled style="background-color: grey;"></button>
  </div>
  <div class="results">
    <div>Correct</div>
    <button>Next Color</button>
  </div>
</body>
</html>
```
</details>

<details>
    <summary>styles.css</summary>

```css
body {
  font-family: sans-serif;
}

.title, .color-string {
  text-align: center;
  margin: .5rem;
}

.title {
  color: #777;
}

.form {
  display: flex;
}

.form fieldset {
  flex-grow: 1;
  text-align: center;
}

.radio-group {
  display: grid;
  justify-content: center;
  justify-items: flex-start;
  grid-template-columns: auto auto;
  gap: .25rem;
}

.radio-group > * {
  cursor: pointer;
}

.color-grid {
  display: grid;
  gap: .5rem;
  justify-content: center;
  max-width: 16rem;
  margin: auto;
  padding: .5rem;
  grid-template-columns: repeat(auto-fill, 5rem);
  grid-auto-rows: 5rem;
}

.color-grid > * {
  border-radius: .5rem;
  border: 1px solid black;
  padding: 0;
  margin: 0;
}

.color-grid > :disabled {
  cursor: default;
}

.color-grid > .wrong {
  opacity: .3;
}

.results {
  text-align: center;
  font-size: 1.5rem;
}

.results.hide {
  display: none;
}

button {
  cursor: pointer;
}
```
</details>

## complete code 

<details>
    <summary>index.html</summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <script src="script.js" type="module"></script>
  <title>Color Game</title>
</head>
<body>
  <header class="header">
    <h2 class="title">Color Game</h2>
    <h3 class="color-string" data-color-string>rgb(255, 0, 0)</h3>
    <form class="form">
      <fieldset>
        <legend>Format</legend>
        <div class="radio-group">
          <input type="radio" name="format" id="rgb" value="rgb" checked>
          <label for="rgb">RGB</label>
          <input type="radio" name="format" id="hex" value="hex">
          <label for="hex">Hex</label>
          <input type="radio" name="format" id="hsl" value="hsl">
          <label for="hsl">HSL</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Difficulty</legend>
        <div class="radio-group">
          <input type="radio" name="difficulty" id="easy" value="easy" checked>
          <label for="easy">Easy</label>
          <input type="radio" name="difficulty" id="medium" value="medium">
          <label for="medium">Medium</label>
          <input type="radio" name="difficulty" id="hard" value="hard">
          <label for="hard">Hard</label>
        </div>
      </fieldset>
    </form>
  </header>
  <div class="color-grid" data-color-grid>
    <button class="wrong" disabled style="background-color: blue;"></button>
    <button disabled style="background-color: red;"></button>
    <button class="wrong" disabled style="background-color: green;"></button>
    <button class="wrong" disabled style="background-color: yellow;"></button>
    <button class="wrong" disabled style="background-color: purple;"></button>
    <button class="wrong" disabled style="background-color: grey;"></button>
  </div>
  <div class="results" data-results>
    <div data-results-text>Correct</div>
    <button data-next-btn>Next Color</button>
  </div>
</body>
</html>
```
</details>

<details>
    <summary>script.js</summary>

```js
import Rgb from "./Rgb.js"
import Hex from "./Hex.js"
import Hsl from "./Hsl.js"

const COLOR_MAP = {
  rgb: Rgb,
  hex: Hex,
  hsl: Hsl,
}

const DIFFICULTY_MAP = {
  easy: { withinTolerance: 1, outsideTolerance: 0.2 },
  medium: { withinTolerance: 0.5, outsideTolerance: 0.2 },
  hard: { withinTolerance: 0.3, outsideTolerance: 0.2 },
}

const nextButton = document.querySelector("[data-next-btn]")

nextButton.addEventListener("click", render)

document.addEventListener("change", e => {
  if (e.target.matches('input[type="radio"]')) render()
})

// Formatter
// Difficulty - Config for the formatter

// Render - every time page loads, on change of format, on change of difficulty
// 1. Get a formatter
// 2. Configure formatter based on difficulty
// 3. Generate colors
// 4. Render colors
// 5. Handle clicking a color

// Generate correct color
// Generate similar colors based on difficulty

const colorGrid = document.querySelector("[data-color-grid]")
const colorStringElement = document.querySelector("[data-color-string]")
const resultsElement = document.querySelector("[data-results]")
const resultsText = document.querySelector("[data-results-text]")

function render() {
  const format = document.querySelector('[name="format"]:checked').value
  const difficulty = document.querySelector('[name="difficulty"]:checked').value
  const { colors, correctColor } = generateColors({ format, difficulty })

  colorGrid.innerHTML = ""
  colorStringElement.textContent = correctColor.toCss()
  resultsElement.classList.add("hide")
  const colorElements = colors.sort(() => Math.random() - 0.5).map(color => {
      const element = document.createElement("button")
      element.style.backgroundColor = color.toCss()
      return { color, element }
  })

  colorElements.forEach(({ color, element }) => {
    element.addEventListener("click", () => {
      resultsElement.classList.remove("hide")
      resultsText.textContent = color === correctColor ? "Correct" : "Wrong"

      colorElements.forEach(({ color: c, element: e }) => {
        e.disabled = true
        e.classList.toggle("wrong", c !== correctColor)
      })
    })
    colorGrid.append(element)
  })
}
render()

function generateColors({ format, difficulty }) {
  const colorClass = COLOR_MAP[format]
  const difficultyRules = DIFFICULTY_MAP[difficulty]
  const correctColor = colorClass.generate()
  const colors = [correctColor]
  for (let i = 0; i < 5; i++) {
    colors.push(correctColor.generateSimilar(difficultyRules))
  }
  return { colors, correctColor }
}

const rgb = Rgb.generate()
console.log(rgb, rgb.generateSimilar({ withinTolerance: 0.3, outsideTolerance: 0.2 }))
```
</details>

<details>
    <summary>Rgb.js</summary>

```js
import { randomNumber, randomValueInRange } from "./utils.js"

const MAX_RGB_VALUE = 255

export default class Rgb {
  constructor(r, g, b) {
    this.r = r
    this.g = g
    this.b = b
  }

  static generate() {
    return new this(
      randomNumber({ max: MAX_RGB_VALUE }),
      randomNumber({ max: MAX_RGB_VALUE }),
      randomNumber({ max: MAX_RGB_VALUE })
    )
  }

  generateSimilar(options) {
    return new this.constructor(
      randomValueInRange({
        startingValue: this.r,
        maxCutoff: MAX_RGB_VALUE,
        ...options,
      }),
      randomValueInRange({
        startingValue: this.g,
        maxCutoff: MAX_RGB_VALUE,
        ...options,
      }),
      randomValueInRange({
        startingValue: this.b,
        maxCutoff: MAX_RGB_VALUE,
        ...options,
      })
    )
  }

  toCss() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`
  }
}
```
</details>

<details>
    <summary>Hsl.js</summary>

```js
import { randomNumber, randomValueInRange } from "./utils.js"

const MAX_HUE_VALUE = 360
const MAX_SATURATION_VALUE = 100
const MAX_LIGHTNESS_VALUE = 100

export default class Hsl {
  constructor(h, s, l) {
    this.h = h
    this.s = s
    this.l = l
  }

  static generate() {
    return new this(
      randomNumber({ max: MAX_HUE_VALUE }),
      randomNumber({ max: MAX_SATURATION_VALUE }),
      randomNumber({ max: MAX_LIGHTNESS_VALUE })
    )
  }

  generateSimilar(options) {
    return new this.constructor(
      randomValueInRange({
        startingValue: this.h,
        maxCutoff: MAX_HUE_VALUE,
        ...options,
      }),
      randomValueInRange({
        startingValue: this.s,
        maxCutoff: MAX_SATURATION_VALUE,
        ...options,
      }),
      randomValueInRange({
        startingValue: this.l,
        maxCutoff: MAX_LIGHTNESS_VALUE,
        ...options,
      })
    )
  }

  toCss() {
    return `hsl(${this.h}, ${this.s}%, ${this.l}%)`
  }
}
```
</details>

<details>
    <summary>Hex.js</summary>

```js
import Rgb from "./Rgb.js"

export default class Hex extends Rgb {
  toCss() {
    const rHex = decimalToHex(this.r)
    const gHex = decimalToHex(this.g)
    const bHex = decimalToHex(this.b)
    return `#${rHex}${gHex}${bHex}`
  }
}

function decimalToHex(decimal) {
  return decimal.toString(16)
}
```
</details>

<details>
    <summary>utils.js</summary>

```js
export function randomNumber({ min = 0, max }) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function randomValueInRange(options) {
  const ranges = validRanges(options)

  const range = ranges[randomNumber({ max: ranges.length - 1 })]
  return randomNumber(range)
}

function validRanges({ startingValue, maxCutoff, withinTolerance, outsideTolerance }) {
  const withinToleranceIncrementor = Math.floor(withinTolerance * maxCutoff)
  const outsideToleranceIncrementor = Math.ceil(outsideTolerance * maxCutoff)

  const aboveRangeMin = startingValue + outsideToleranceIncrementor
  const aboveRangeMax = Math.min(
    startingValue + withinToleranceIncrementor,
    maxCutoff
  )

  const belowRangeMin = Math.max(startingValue - withinToleranceIncrementor, 0)
  const belowRangeMax = startingValue - outsideToleranceIncrementor

  const ranges = []
  if (aboveRangeMax > aboveRangeMin) {
    ranges.push({ min: aboveRangeMin, max: aboveRangeMax })
  }
  if (belowRangeMax > belowRangeMin) {
    ranges.push({ min: belowRangeMin, max: belowRangeMax })
  }
  return ranges
}
```
</details>

## output 

![output](../../all-chats-pics-of-lectures/3-notes-pics/2-advance-js-course-notes-pics/64-color-game-intro/lecture-64-0.jpg)
