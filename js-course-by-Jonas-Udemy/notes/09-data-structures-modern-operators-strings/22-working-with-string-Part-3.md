# Working With String Part 2

- one of the most powerful string methods i.e `split()` method 💡💡💡

## Examples - of String & it's methods & properties  

- Eg 1 : of `split()` method 
    - it used to split a string into multiple parts based on a divider (means could be any repeated thing) string 💡💡💡
    - it takes 1 argument i.e divider string 
    - it returns an array as a output 
    ```js
    // let's say we have a string like this with a repeated divider i.e + sign
    console.log('a+very+nice+string'.split("+")) // output : (4) ['a', 'very', 'nice', 'string']
    ```
    - `'a+very+nice+string'.split("+")` means based on this divider string i.e `+` , split the string
    - Eg 1.1 : of `split()` method with space divider string
        ```js
        console.log("Jonas Schmedtmann".split(" ")) // output : (2) ['Jonas', 'Schmedtmann']
        ```

- now we can use the power of destructuring with split() string method we can create a variable 
    ```js
    const [firstName, lastName] = "Jonas Schmedtmann".split(" ")
    ``` 
    - now let's say we want to make lastName in uppercase & we also want to add a Mr. in the beginning <br>
        so we could do by using string template literal but we'll use `join()` method for this work

- Eg 2 : of `join()` method
    - it is opposite of split() method 
    - it also takes only 1 argument i.e divider string (based on what we want to join) 💡💡💡
    - it doesn't mutate the original array 
    ```js
    const [firstName, lastName] = "Jonas Schmedtmann".split(" ")
    const newName = ['Mr.', firstName, lastName.toUpperCase()].join(" ")
    console.log(newName) // output : Mr. Jonas SCHMEDTMANN
    ```

- `said by jonas ✅` : split() method is used all the time 💡💡💡

- `use case of split() & join() methods` : solving previous lecture challenge ✅
    ```js
    const capitalizeName = function (name) {
        const names = name.split(" ")
        const namesUpper = []

        for (const n of names) {
            // namesUpper.push(n[0].toUpperCase + n.slice(1))
            // OR different way 
            namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
        }
        console.log(namesUpper.join(' '))
    }

    capitalizeName("jessica ann smith davis") // output : Jessica Ann Smith Davis 
    capitalizeName("jonas schmedtmann") // output : Jonas Schmedtmann
    ```
    
- Eg 3 : of `padStart()` method
    - padStart() method means padding to the string means add a number of characters to the string from start <br>
        until that length we is defined 💡💡💡
    - it takes 2 arguments i.e 
        - first : how much total length we want of that string 
        - second : define characters that we want to add 
    - `Note` : but if we define only first argument then by-default white spaces will include as characters 💡💡💡 
        - padding means characters or white spaces 
    - it'll not mutate the original string 💡💡💡
    ```js
    const message = "Go to gate 23!"
    console.log(message.padStart(25 , "+")) // output : +++++++++++Go to gate 23!
    console.log("Jonas".padStart(25 , "+")) // output : ++++++++++++++++++++Jonas
    console.log(message.length) // output : 25
    ```
    - `message.padStart(25 , "+")` means add `+` character to make that total string length 25 💡💡💡
    - Eg 3.1 : of `padEnd()` method
        - it'll add the number of characters at the end of the string 
        ```js
        const message = "Go to gate 23!"
        console.log(message.padStart(25 , "+").padEnd(30 , "+"))
        ```

- `Trick to convert a number to string dataType ✅` 
    - either use toString() method or just add that number with a empty string like this 
    ```js
    const num = 2 
    const str = num + ""
    console.log(typeof str) // output : string
    ```

- Eg 4 : of `repeat()` method
    - it used to repeat a message as many times as we want 
    - it takes 1 argument i.e number (how many times we want to repeat that message)
    - `Use Case` : let's say there's a bad weather & in news that message repeat all the time
        ```js
        const message = "Bad Weather... All Departues Deplayed..."
        console.log(message.repeat(5))
        // output : this string will repeat 5 times
        ```
        - we can take this example further that due to bad weather some planes taking take off in their airport
            ```js
            const planesInLine = function(n) {
                console.log(`There are ${n} planes in line ${'🛬'.repeat(n)}`)
            }

            planesInLine(5)
            planesInLine(3)
            planesInLine(12)
            /* output : 
                There are 5 planes in line 🛬🛬🛬🛬🛬 
                There are 3 planes in line 🛬🛬🛬
                There are 12 planes in line 🛬🛬🛬🛬🛬🛬🛬🛬🛬🛬🛬🛬
            */
            ```
        - so here how much planes are taking takeoff due to bad weather we can see 

## challenge time with padStart() method (important 🔥)

- take a number & hide some number of that number itself ✅
    ```js
    const maskCreditCard = function (number) {
        // converting number to string 
        const str = number + ""
        // taking last 4 characters
            // 🚨 Note : when we go from right to left in string then index starts from 1 always 💡💡💡
        const last = str.slice(-4) 
        return last.padStart(str.length, "*") // output : 
    }

    console.log(maskedCreditCard(4890231902347923)) // output : ************7923 
    console.log(maskedCreditCard('290384752390823478')) // output : **************3478 
    ```

## said by jonas

- so there are many string methods which we can see in `MDN` website
    - but we only talked about most important string methods which we're gonna use all the time ✔️✔️✔️
