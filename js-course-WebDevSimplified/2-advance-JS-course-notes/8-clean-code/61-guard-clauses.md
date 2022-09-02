# Guard Clauses

- here we'll see guard clauses to clean code with Minesweeper project (of functional programming + testing version)

## What is Guard Clauses + examples 

- `Guard Clauses` : 
    - means when we're running a function or a piece of code most likely a function <br>
        & we know that we only want to run that code based on particular conditions 
    - generally we're going to wrap our code inside of a big if block statement & inside of we put our code <br> 
        but guard clauses is opposite means it will only run the code if we need something to be true <br>
        so if something's not true , then return from the function immediately 
    - if you have a condition that you want to check before running the function or something like that <br>
        then guard clause are always going to be a way 💡💡💡

- Eg: inside this project , inside minesweeper.js file , inside markTile() function
    ```js
    export function markTile(board, { x, y }) {
        const tile = board[x][y]
        if (tile.status !== TILE_STATUSES.HIDDEN && tile.status !== TILE_STATUSES.MARKED) {
            return board
        }

        if (tile.status === TILE_STATUSES.MARKED) {
            return replaceTile(board, { x, y }, {...tile, status: TILE_STATUSES.HIDDEN }) 
        } else {
            return replaceTile(board, { x, y }, {...tile, status: TILE_STATUSES.MARKED }) 
        }
    }
    ```
    - means we're saying if the tile status not equal to hidden & it doesn't not equal to marked <br> 
        then we don't want to run any of the code in this markTile() function
    - we can write this code this way also
        ```js
        export function markTile(board, { x, y }) {
            const tile = board[x][y]
            if (tile.status === TILE_STATUSES.HIDDEN || tile.status === TILE_STATUSES.MARKED) {
                if (tile.status === TILE_STATUSES.MARKED) {
                    return replaceTile(board, { x, y }, {...tile, status: TILE_STATUSES.HIDDEN }) 
                } else {
                    return replaceTile(board, { x, y }, {...tile, status: TILE_STATUSES.MARKED }) 
                }
            } else {
                return board // this will be default
            }
        }
        ```
    - so the same code in two different ways but inside second way , we used the normal way at the very beginning 💡💡💡 <br>
    - that second way of writing code is quite a bit harder to read than previous one because we have additional layers of nesting <br>
        - & inside first way of writing code is easier to read & even we can remove that else part also like this 
            ```js
            export function markTile(board, { x, y }) {
                const tile = board[x][y]
                // here we way guard clauses at starting as like guardian our this function
                if (tile.status !== TILE_STATUSES.HIDDEN && tile.status !== TILE_STATUSES.MARKED) {
                    return board
                }

                if (tile.status === TILE_STATUSES.MARKED) {
                    return replaceTile(board, { x, y }, {...tile, status: TILE_STATUSES.HIDDEN }) 
                }
                
                return replaceTile(board, { x, y }, {...tile, status: TILE_STATUSES.MARKED }) 
            }
            ```

- Eg : inside minesweeper function programming + testing version , inside test.js file ✅
    ```js
    function startTimer(timer) {
        if (timer.enabled) {
            timer.time = 0 
            timer.start()
        }
    }

    function getInsuranceDeductible(insurance) {
        if (insurance.covered) {
            if (insurance.majorRepair) {
                return 500 
            } else if (insurance.mediumRepair) {
                return 300
            } else {
                return 100
            }
        } else {
            return 0
        }
    }
    ```
    - this timer will be great example of guard clauses like this <br>
        & instead of saying that timer is enabled , we'll say if timer is not enabled
        ```js
        function startTimer(timer) {
            if (!timer.enabled) return // this is guard clauses

            timer.time = 0 
            timer.start()
        }
        ```
        - so we used guard clauses at starting of this startTimer() function & if statement gets false then set the timer & start it <br>
            & code becomes easier to read the code 

    - so Guard Clauses makes complicated level of nesting into easier way to make easier to read code 💡💡💡 

- Eg : inside minesweeper function programming + testing version , inside test.js file ✅
    ```js
    function startTimer(timer) {
        if (!timer.enabled) return 

        timer.time = 0 
        timer.start()
    }

    function getInsuranceDeductible(insurance) {
        if (insurance.covered) {
            if (insurance.majorRepair) {
                return 500 
            } else if (insurance.mediumRepair) {
                return 300
            } else {
                return 100
            }
        } else {
            return 0
        }
    }
    ```
    - now let's covert this complex nested if statements (of getInsuranceDeductible() function) into guard clauses
        ```js
        function getInsuranceDeductible(insurance) {
            if (!insurance.covered) return 0
            if (insurance.majorRepair) return 500
            if (insurance.mediumRepair) return 300

            return 100
        }
        ```
        - so due to guard clauses , this code becomes easier to read & understand & no. of lines also reduced <br>
            & even we didn't use `else` keyword & this code easier to refactor & for testing + debugging also 💡💡💡

    - `Best Practices` : when we use guard clauses <br>
        stuff which are inside a function , runs from top to bottom & only returned one time <br>
        so that we know where we're in the function & we never get confused by early returns 💡💡💡

- Eg : inside minesweeper function programming + testing version , inside minesweeper.js file ✅ 
    - inside revealTile() function , we can see that inside of it what's happening <br>
        we used guard clauses & due to this , we don't need to think that what that statement gonna do <br>
    - by using guard clauses , if that condition is true then do this otherwise move forward that's it 
    - & inside of this revealTile() function , we just only have to think about smaller subsets of code <br>
        because we don't have to worry about the entire function for every single thing 
    - & as a beginner using nested if else statements is fine <br>
        but eventually we need to use guard clauses to make code easier to read code <br> 
