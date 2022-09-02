# coding challenge 2

- here we're gonna continue with our football betting application & this challenge will be bit difficult
- so let's say we get some data about a particular football game from a web service which is look like this 
    ```js
    const game = {
      team1: 'Bayern Munich',
      team2: 'Borrussia Dortmund',
      players: [
        [
          'Neuer',
          'Pavard',
          'Martinez',
          'Alaba',
          'Davies',
          'Kimmich',
          'Goretzka',
          'Coman',
          'Muller',
          'Gnarby',
          'Lewandowski',
        ],
        [
          'Burki',
          'Schulz',
          'Hummels',
          'Akanji',
          'Hakimi',
          'Weigl',
          'Witsel',
          'Hazard',
          'Brandt',
          'Sancho',
          'Gotze',
        ],
      ],
      score: '4:0',
      scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
      date: 'Nov 9th, 2037',
      odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
      },
    };
    ```

- `What we need to do`
    - Loop over the game.scored array and print each player name to the console, <br>
        along with the goal number (Example: "Goal 1: Lewandowski")
    - Use a loop to calculate the average odd and log it to the console <br>
        (We already studied how to calculate averages, you can go check if you don't remember)
    - Print the 3 odds to the console, but in a nice formatted way, exactly like this: 
        - Odd of victory Bayern Munich: 1.33 
        - Odd of draw: 3.25
        - Odd of victory Borrussia Dortmund: 6.5
    - Get the team names directly from the game object, don't hardcode them (except for "draw"). <br>
        HINT: Note how the odds and the game objects have the same property names 😉
    - BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, <br>
        and the number of goals as the value. In this game, it will look like this: 
        ```
        {
          Gnarby: 1,
          Hummels: 1,
          Lewandowski: 2
        }
        ```

- `Tip` : always understand the problem statement clearly then try brute force way & then do optimization
  - but important is understand the problem clearly 💡💡💡

## Solution

- `Ques 1` : Loop over the game.scored array and print each player name to the console, 
    - along with the goal number (Example: "Goal 1: Lewandowski")
    ```js
    for (const [num , name] of game.scored.entries()) {
      console.log(`Goal ${num + 1}: ${name}`);
    } 
    /* output : Goal 1: Lewandowski 
                Goal 2: Gnarby 
                Goal 3: Lewandowski 
                Goal 4: Hummels  
    */
    ```

- `Ques 2` : Use a loop to calculate the average odd and log it to the console 
    - (We already studied how to calculate averages, you can go check if you don't remember)
    ```js
    const odds = Object.values(game.odds)
    let average = 0 
    for (const odd of odds) average += odd
    average /= odds.length
    console.log(average)
    // output : NaN
    ```
    - so let's debugging 
        ```js
        const odds = Object.values(game.odds)
        let average = 0 
        for (const odd of odds) average += odd
        console.log(average) // output : 11.08
        average /= odds
        console.log(average) // output : NaN
        ```
      - so something wrong in the division because we need to write `odds.length` <br>
        means before it , we were dividing by the entire array which doesn't make any sense
    - complete solution 
      ```js
      const odds = Object.values(game.odds)
      let average = 0 
      for (const odd of odds) average += odd
      average /= odds.length
      console.log(average)
      // output : 3.6933
      ```

- `Ques 3` : Print the 3 odds to the console, but in a nice formatted way, exactly like this: ✅
    - Odd of victory Bayern Munich: 1.33 
    - Odd of draw: 3.25
    - Odd of victory Borrussia Dortmund: 6.5
    - `Note` : now while writing code you'll think how you're gonna print these messages 
      - so the solution is create a variable of each of them 
    ```js
    for (const [team, odd] of Object.entries(game.odds)) {
      const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`
      console.log(`Odd of ${teamStr} ${odd}`)
    }
    // output : we'll get correct output 
    ```
    - here `game[team]` we passed dynamic variable inside object by using square bracket notation 💡💡💡

- `Ques 4` : Get the team names directly from the game object, don't hardcode them (except for "draw"). 
    - HINT: Note how the odds and the game objects have the same property names 😉
      ```js
      for (let teamName of Object.keys(game.odds)) {
        teamName = teamName === 'x' ? 'draw' : `${game[teamName]}`  
        console.log(teamName);
      }
      ```

- `Bonus Ques` : Create an object called 'scorers' which contains the names of the players who scored as properties, ✅
    - and the number of goals as the value. In this game, output will look like this : 
      ```
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
      ```
    - here we need to calculate the score of each scored player based on how much they are repeating themselves 
      - means inside `scored` property (of `game` object) `Lewandowski` is repeating two times , so he scored 2 <br> 
        so same with other players 
    - Ans : 
      ```js
      const scorers = {}
      for (const player of game.scored) {
        scorers[player] ? scorers[player]++ : (scorers[player] = 1);
      }
      ```
      - `scorers[player]` means checking whether that player exists inside `scorers` object or not 
      - `scorers[player]++` means if that player already exists inside `scorers` object 
        - then increment the value of that player key 
      - `(scorers[player] = 1)` means we're adding default value as 1 
        - `Note` : we put it inside parenthesis because of readability 💡💡💡
