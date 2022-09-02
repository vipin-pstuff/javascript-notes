# Coding Challenge 1

- here we're gonna start building a football betting application 
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
    - Create one player array for each team (variables 'players1' and 'players2')
    - The first player in any player array is the goalkeeper and the others are field players. <br>
        For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, <br>
        and one array ('fieldPlayers') with all the remaining 10 field players
    - Create an array 'allPlayers' containing all players of both teams (22 players)
    - During the game, Bayern Munich (team 1) used 3 substitute players. <br>
        So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
    - Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
    - Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) <br>
        and prints each of them to the console, along with the number of goals <br>
        that were scored in total (number of player names passed in)
    - The team with the lower odd is more likely to win. Print to the console which team is more likely to win, <br>
        WITHOUT using an if/else statement or the ternary operator.
    
    - TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. <br>
        Then, call the function again with players from game.scored

- TIP : first understand the problems clearly then work on it 

## Solution

- `Ques 1` : Create one player array for each team (variables 'players1' and 'players2')
    ```js
    // normal way of creating variables
    // const player1 = game.players[0]
    // const player2 = game.players[1]

    // using destructuring concept  
    const [players1, players2] = game.players
    ```

- `Ques 2` : The first player in any player array is the goalkeeper and the others are field players. 
    - For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, <br>
      and one array ('fieldPlayers') with all the remaining 10 field players
    ```js
    const [GK , ...fieldPlayers] = players1
    ```

- `Ques 3` : Create an array 'allPlayers' containing all players of both teams (22 players)
    ```js
    // used spread operator
    const allPlayers = [...players1 , ...players2]
    ```

- `Ques 4` : During the game, Bayern Munich (team 1) used 3 substitute players. <br>
    So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
    ```js
    const players1Final = [...players1 , 'Thiago', 'Coutinho', 'Perisic']
    ```

- `Ques 5` : Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
    ```js
    // using nested destructuring 
    // STEP 1 : const {odds} = game ---> this will create a variable i.e odds which contain that object
      // here we first destructure the "odds" variable & then we destructure the object value of it 💡💡💡
    const {odds : {team1, x : draw , team2}} = game
    console.log(team1 , draw , team2) // output : 1.33 3.25 6.5
    ```

- `Ques 6` : Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) <br>
    and prints each of them to the console, along with the number of goals <br>
    that were scored in total (number of player names passed in)
    - TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. <br>
      Then, call the function again with players from game.scored
    ```js
    // here we used rest operator because in the question given is that (NOT an array)
    const printGoals = function(...players) {
      console.log(players)
      console.log(${players.length} goals were scored)
    }

    printGoals(...game.scored)
    ```

- `Ques 7` : The team with the lower odd is more likely to win. Print to the console which team is more likely to win, <br>
    WITHOUT using an if/else statement or the ternary operator
    ```js
    // using && operator with condition
    team1 < team2 && console.log("Team 1 is more likely to win")
    team1 > team2 && console.log("Team 2 is more likely to win")
    ```
