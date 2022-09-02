# Coding Challenge

- Let's build a simple poll app!
    - A poll has a question, an array of options from which people can choose, and an array with the number of replies for <br>
        each option. This data is stored in the starter object below.

Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
    - 1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:<br>
        What is your favorite programming language? <br>
        0: JavaScript <br>
        1: Python <br>
        2: Rust <br>
        3: C++ <br>
        (Write option number)
  
    - 1.2. Based on the input number, update the answers array. For example, <br>
        if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check <br>
        if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)

2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. <br>
   The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. <br>
   If type is 'array', simply display the results array as it is, using console.log(). <br>
   This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call. 
    - HINT: Use many of the tools you learned about in this and the last section 😉 
    - BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. 
        - Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! <br>
            So what should the this keyword look like in this situation?
            - BONUS TEST DATA 1: [5, 2, 3]
            - BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

- `testing code` 
    ```html
    <button class="poll">Answer Poll</button>
    ```
    ```js
    const poll = {
        question: 'What is your favorite programming language?',
        options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
        answers: new Array(4).fill(0),
    }
    ``` 

## Solution

- `Ans Ques 1 & 2` : Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
    - 1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:<br>
        ```
        What is your favorite programming language?
        0: JavaScript <br>
        1: Python <br>
        2: Rust <br>
        3: C++ <br>
        (Write option number)
        ```
    - 1.2. Based on the input number, update the answers array. 
        - For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check <br>
            if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
    2. Call this method whenever the user clicks the "Answer poll" button.
    - `STEP 1` 
        ```js
        const poll = {
            question: 'What is your favorite programming language?',
            options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
            answers: new Array(4).fill(0),
            registerNewAnswer() {
                // Get answer
                const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`))

                // register number
                    // here we used short circuiting technique/trick
                typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++ 
            }
        }

        document.querySelector('.poll').addEventListener('click' , poll.registerNewAnswer)
        // output : when we click on "Answer poll" button then we'll get an error 
            // i.e cannot read property 'join' of undefined
        ```
    - `STEP 2` : so prevent the error we need to use bind() method , so that `this` keyword can point to `poll` object
        ```js
        const poll = {
            question: 'What is your favorite programming language?',
            options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
            answers: new Array(4).fill(0),
            registerNewAnswer() {
                // get answer
                const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`))

                console.log(answer)

                // register number
                typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++ 

                console.log(this.answers)
            }
        }

        document.querySelector('.poll').addEventListener('click' , poll.registerNewAnswer.bind(poll))
        /* output : when we click on "Answer poll" button then inside prompt input we gave -> 0 and press ok button
                    then we'll get this output
                    0
                    (4) [1, 0, 0, 0]
        */
        ```

- `Ans Ques 3` : Create a method 'displayResults' which displays the poll results. <br>
    - The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. <br>
        If type is 'array', simply display the results array as it is, using console.log(). <br>
    - This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
    ```js
    const poll = {
        question: 'What is your favorite programming language?',
        options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
        answers: new Array(4).fill(0),
        registerNewAnswer() {
            const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`))

            typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++ 

            // calling display results two times
            this.displayResults() // without arguments
            this.displayResults('string') // with an argument 
        } , 
        displayResults(type = 'array') {
            if (type === array) {
                console.log(this.answers)
            } else if (type === 'string') {
                console.log(`Poll results are ${this.answers.join(', ')}`)
            }
        }
    }

    document.querySelector('.poll').addEventListener('click' , poll.registerNewAnswer.bind(poll))
    /* output : when we click on "Answer poll" button then inside prompt input 
                we gave let's say -> 1 and press ok button then we'll get this output
                0
                (4) [1, 0, 0, 0]
                Poll Results are 1, 0, 0, 0

            - & then if we write 3 inside prompt input and press ok button then we'll get 
                3
                (4) [1, 0, 0, 1]
                Poll Results are 1, 0, 0, 1

            - & then again if we write 3 inside prompt input and press ok button then we'll get 
                3
                (4) [1, 0, 0, 2]
                Poll Results are 1, 0, 0, 2 --> here we got 2 because we select the 3rd option 2 times that's why 

            - but if we something else like "gen" inside prompt input then nothing will change & we'll get 
                NaN
                (4) [1, 0, 0, 2]
                Poll Results are 1, 0, 0, 2
    */
    ```

- `Ans Ques 4` : 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call. 
    - HINT: Use many of the tools you learned about in this and the last section 😉 
    - BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. 
        - Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! <br>
            So what should the this keyword look like in this situation?
            - BONUS TEST DATA 1: [5, 2, 3]
            - BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
    ```js
    const poll = {
        question: 'What is your favorite programming language?',
        options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
        answers: new Array(4).fill(0),
        registerNewAnswer() {
            const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`))

            typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++ 

            this.displayResults() 
            this.displayResults('string')
        } , 
        displayResults(type = 'array') {
            if (type === array) {
                console.log(this.answers)
            } else if (type === 'string') {
                console.log(`Poll results are ${this.answers.join(', ')}`)
            }
        }
    }

    document.querySelector('.poll').addEventListener('click' , poll.registerNewAnswer.bind(poll))

    // Note : here we're calling call() method because we need a new "this" keyword
        // because displayResults function uses this.answers
        // so answers is coming from the "this" keyword
        // & if we want to have a different "this" keyword then we need to use call() method 💡💡💡
        // so we need a object which contain "answers" property 
            // otherwise , there's no way for call() method to call this.answers
            // that's why we create a new object
    poll.displayResults.call({ answers: [5, 2, 3]}) // output : [5, 2, 3]
    poll.displayResults.call({ answers: [5, 2, 3]} , 'string') // output : Poll results are 5, 2, 3
    ```
    - so basically we need a way to make `this.answers` equal to this array i.e [5, 2, 3] <br>
        that's why we used call() method , so that we could manually set that`this` keyword to a new object <br>  
        which as the answers property has that new array 💡💡💡
