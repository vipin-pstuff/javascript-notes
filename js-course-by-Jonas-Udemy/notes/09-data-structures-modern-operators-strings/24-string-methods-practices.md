# String methods practices 

- many people said in this course to make more exercises on string methods 
- so here we'll do one more challenge/exercise

## challenge time

- testing code : String Methods Practice
    ```js
    const flights =
      '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

    // 🔴 Delayed Departure from FAO to TXL (11h25)
    //              Arrival from BRU to FAO (11h45)
    //   🔴 Delayed Arrival from HEL to FAO (12h05)
    //            Departure from FAO to LIS (12h30)

    const getCode = str => str.slice(0, 3).toUpperCase();

    for (const flight of flights.split('+')) {
      const [type, from, to, time] = flight.split(';');
      const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_',' ')} 
        ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
      console.log(output);
    }
    ```

- `what we need to do` 
    - just assume that we got that messed up string from an API & we need to present that data in this nicely 
    - `1` : take this messed up string & format the string nicely like this 
        ```
        // 🔴 Delayed Departure from FAO to TXL (11h25)
        //              Arrival from BRU to FAO (11h45)
        //   🔴 Delayed Arrival from HEL to FAO (12h05)
        //            Departure from FAO to LIS (12h30)
        ```

- `Tip` : divide the problem into smaller chucks & solve those chucks step by step & join it like puzzles

## Solution

- `STEP 1` : printing each flight by using split() method
    ```js
    const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

    for (const flight of flights.split("+")) {
      console.log(flight)
    }
    /* output : _Delayed_Departure;fao93766109;txl2133758440;11:25 
              _Arrival;bru0943384722;fao93766109;11:45 
              _Delayed_Arrival;hel7439299980;fao93766109;12:05 
              _Departure;fao93766109;lis2323639855;12:30 
    */
    ```

- `STEP 2` : now splitting based on semi colon
    ```js
    for (const flight of flights.split("+")) {
      console.log(flight.split(";"))
    }
    /* output : (4) ["_Delayed_Departure", "fao93766109", "txl2133758440", "11:25"]
                (4) ["_Arrival", "bru0943384722", "fao93766109", "11:45"]
                (4) ["_Delayed_Arrival", "hel7439299980", "fao93766109", "12:05"]
                (4) ["_Departure", "fao93766109", "lis2323639855", "12:30"]) 
    */
    ```
    - now each details got split based on `;` semi colon 

- `STEP 3` : storing each values through array destructuring that we got based on split(";")
    ```js
    const getCode = str => str.slice(0, 3).toUpperCase()

    for (const flight of flights.split("+")) {
      const [type, from, to, time] = flight.split(";")
      const output = `${type.startsWith("_Delayed") ? '🔴' : ''}${type.replaceAll("_", " ")} 
        ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36)
      console.log(output)
    }
    ```
