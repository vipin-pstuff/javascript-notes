# Coding Challenge 3

- `problem statement`
    - Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
    - TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
    - TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

- `testing code`
    ```js
    function calcAverageHumanAge(ages) {
        const humanAges = ages.map(age => {
            return age <= 2 ? 2 * age : 16 + age * 4
        })

        const adults = humanAges.filter(age => age >= 18)
        const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length , 0) 

        return average
    }

    const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
    const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
    ```

## Solution 

- `Ans Ques 1` : writing calcAverageHumanAge() function code as arrow function & with chaining also
    ```js
    const calcAverageHumanAge = (ages) => ages.map(age => age <= 2 ? 2 * age : 16 + age * 4).filter(age => {
        return age >= 18
    }).reduce((acc, age, i, arr) => acc + age / arr.length , 0)

    const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
    const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
    ```
    - `reduce((acc, age, i, arr) => acc + age / arr.length , 0)` 
        - here we can't use `adults.length` because `adults` variable is not defined 
        - that's why we saw the way i.e using 4th argument of reduce() array method i.e current array <br> 
            to calculate average 💡💡💡
        - because this is the only way get the length of the current array when we're dealing with chaining <br>
            but we can do in two step if we want `adults` variable , but the problem statement said to do with chaining
