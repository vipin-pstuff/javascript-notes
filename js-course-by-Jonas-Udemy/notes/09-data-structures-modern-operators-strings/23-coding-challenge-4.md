# coding challenge 4

Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

- THIS TEST DATA (pasted to textarea)
    ```
    underscore_case
     first_name
    Some_Variable 
      calculate_AGE
    delayed_departure
    ```

- SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
    ```
    underscoreCase      ✅
    firstName           ✅✅
    someVariable        ✅✅✅
    calculateAge        ✅✅✅✅
    delayedDeparture    ✅✅✅✅✅
    ```

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

- testing code 
    ```js
    document.body.append(document.createElement('textarea'));
    document.body.append(document.createElement('button'));

    const text = document.querySelector('textarea').value
    ```

- `What we need to do`
    - `1` : we need to paste those tested data 
    - `2` : then convert underscore_case into camelCase when button is pressed
    - `3` : then put those camelCase texts with emoji with same length 

- `Tip` : always understand the problem statement clearly then try brute force way & then do optimization
  - but important is understand the problem clearly 💡💡💡

## Solution

- `STEP 1` : converted underscore_case into camelCase when is pressed
    ```js
    document.body.append(document.createElement('textarea'));
    document.body.append(document.createElement('button'));

    document.querySelector('button').addEventListener('click', () => {
        const text = document.querySelector('textarea').value
        const rows = text.split("\n")

        for (const row of rows) {
            // here we used trim() method because user can give input with spaces also that's why 
            const [first, second] = row.toLowerCase().trim().split("_") 
            const output = `${first} ${second.replace(second[0], second[0].toUpperCase())}`
            console.log(output)
        }
    })
    ```

- `STEP 2` : printing those camelCase texts with emoji
    ```js
    document.body.append(document.createElement('textarea'));
    document.body.append(document.createElement('button'));

    document.querySelector('button').addEventListener('click', () => {
        const text = document.querySelector('textarea').value
        const rows = text.split("\n")

        // entries() array method will give index of each element with element itself
        for (const [i , row] of rows.entries()) {
            const [first, second] = row.toLowerCase().trim().split("_") 
            const output = `${first} ${second.replace(second[0], second[0].toUpperCase())}`
            // here we add i + 1 because index starts from 0 that's why ✔️✔️✔️
            console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)})`
        }
    }) ;
    /* output 
            underscoreCase      ✅
            firstName           ✅✅
            someVariable        ✅✅✅
            calculateAge        ✅✅✅✅
            delayedDeparture    ✅✅✅✅✅
    */
    ```
