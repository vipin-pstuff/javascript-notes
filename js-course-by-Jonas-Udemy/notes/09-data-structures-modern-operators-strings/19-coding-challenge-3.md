# coding challenge 3

Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game.<br> 
The values are the events themselves, and the keys are the minutes in which each event happened <br>
(a football game has 90 minutes plus some extra time).
```js
const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);
```

- `What we need to do`
    - `1` : Create an array 'events' of the different game events that happened (no duplicates)
    - `2` : After the game has finished, is was found that the yellow card from minute 64 was unfair. <br>
        So remove this event from the game events log.
    - `3` : Print the following string to the console: "An event happened, on average, every 9 minutes" <br>
        (keep in mind that a game has 90 minutes)
    - `4` : Loop over the events and log them to the console, marking whether <br>
        it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽️ GOAL

- `Tip` : always understand the problem statement clearly then try brute force way & then do optimization
  - but important is understand the problem clearly 💡💡💡

## Solution

- `Ans - Ques 1` : Create an array 'events' of the different game events that happened (no duplicates)
    ```js
    // Note : here we're getting values because Set() class works on values only not on key value pairs 💡💡💡
    const events = new Set(gameEvents.values()) 
    console.log(events) // output : we'll get only unique values 
    ```
    - converting from Set() class into an array form by using spread operator 💡💡💡
        ```js
        const events = [...new Set(gameEvents.values())]
        console.log(events) // output : we'll get unique values inside an array
        ``` 

- `Ans - Ques 2` : After the game has finished, is was found that the yellow card from minute 64 was unfair. 
    - So remove this event from the game events log.
        ```js
        gameEvents.delete(64)
        ```

- `Ans - Ques 3` : Print the following string to the console: "An event happened, on average, every 9 minutes" 
    - (keep in mind that a game has 90 minutes)
        ```js
        gameEvents.delete(64)

        // here we need every 9 minutes , so right now gameEvents.size is 10
        console.log(`An event happened , on average , every ${90 / gameEvents.size} minutes`)
        // output : An event happened , on average , every 5 minutes
        ```
    - `little trick` : for further we can use this another way also 
        - i.e pop() method of array which return the last deleted element ✔️✔️✔️
        ```js
        const time = [...gameEvents.keys()].pop()
        console.log(`An event happened , on average , every ${time / gameEvents.size} minutes`)
        // output : An event happened , on average , every 9.2 minutes
        ```

- `Ans - Ques 4` : Loop over the events and log them to the console, marking whether 
    - it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽️ GOAL
        ```js
        for (const [min, event] of gameEvents) {
            const half = min <= 45 ? "FIRST" : "SECOND" 
            console.log(`[${half} HALF] ${min}: ${event}`)
        }
        /* output : 
            [FIRST HALF] 17: ⚽️ GOAL
            [FIRST HALF] 36: 🔁 Substitution
            [SECOND HALF] 47: ⚽️ GOAL
            [SECOND HALF] 61: 🔁 Substitution
            [SECOND HALF] 64: 🔶 Yellow card
            [SECOND HALF] 69: 🔴 Red card
            [SECOND HALF] 70: 🔁 Substitution
            [SECOND HALF] 72: 🔁 Substitution
            [SECOND HALF] 76: ⚽️ GOAL
            [SECOND HALF] 80: ⚽️ GOAL
            [SECOND HALF] 92: 🔶 Yellow card
        */
        ```
