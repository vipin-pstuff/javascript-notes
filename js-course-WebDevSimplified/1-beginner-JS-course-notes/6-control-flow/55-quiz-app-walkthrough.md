# quiz app walkthrough

##  JS code 

```js
/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/
const form = document.getElementById("quiz-form")
const answers = Array.from(document.querySelectorAll(".answer"))
const questionItems = document.querySelectorAll(".question-item")
const alert = document.querySelector("#alert")

// TODO: 3. Create a submit event listener for the form that does the following.
form.addEventListener("submit", e => {
    // 1. Prevent the default behaviour
    e.preventDefault()

    /* 6. BONUS: Make sure unanswered questions show up as incorrect. 
            The easiest way to do this is to add the incorrect class 
            and removing the correct class from all question items 
            before checking the correct answers 
    */
    questionItems.forEach(questionItem => {
        questionItem.classList.add("incorrect")
        questionItem.classList.remove("correct") // this is optional   
    })

    /*  2. Get all selected answers (use the `checked` property on the input 
            to determine if it is selected or not) */
  const checkedAnswers = answers.filter(answer => answer.checked)
    //  3. Loop through the selected answer to see 
    //    if they are correct or not (Check the value of the answer to see if it is the string "true")
  checkedAnswers.forEach(answer => {
    const isCorrect = answer.value === "true"
    const questionItem = answer.closest(".question-item")

    //  4. For each correct answer add the class `correct` 
    //      to the parent with the class `question-item` and remove the class `incorrect`.
    if (isCorrect) {
      questionItem.classList.add("correct")
      questionItem.classList.remove("incorrect")
    } else {
    //  5. For each incorrect answer add the class `incorrect` to the parent with the class 
    //      `question-item` and remove the class `correct`.
      questionItem.classList.add("incorrect")
      questionItem.classList.remove("correct")
    }
    //  7. BONUS: If all answers are correct show the element with the id `alert`
    //      and hide it after one second (look into setTimeout) 
    //      (use the class active to show the alert and remove the class to hide it)

    const allTrue = checkedAnswers.every(answer => answer.value === "true")
    const allAnswered = checkedAnswers.length === questionItems.length

    if (allTrue && allAnswered) {
        alert.classList.add("active")
        setTimeout(() => {
          alert.classList.remove("active")
        }, 1000)
      }
    })
})
```

## steps of code

    STEP 1 : creating all the elements needed ✅

        /*
            TODO: 2. Select all elements needed
            * The form element (has the id `quiz-form`)
            * The answer inputs (have the class `answer`)
            * BONUS: The questions (have the class `question-item`)
            * BONUS: The alert (has the id `alert`)
        */

        const form = document.getElementById('quiz-form')
        const answers = document.querySelectorAll('.answer')

        - BONUS section we'll do later on
            right now we're just doing main thing

    STEP 2 : adding submit event listener on form element ✅

        form.addEventListener('submit' , e => {
            /*     
                1. Prevent the default behaviour
                2. Get all selected answers 
                    (use the `checked` property on the input to determine if it is selected or not)
                3. Loop through the selected answer to see if they are correct or not 
                    (Check the value of the answer to see if it is the string "true")
                4. For each correct answer add the class `correct` to the parent 
                    with the class `question-item` and remove the class `incorrect`.
                5. For each incorrect answer add the class `incorrect` 
                    to the parent with the class `question-item` and remove the class `correct`.
                6. BONUS: Make sure unanswered questions show up as incorrect. 
                    The easiest way to do this is to add the incorrect class 
                    and removing the correct class from all question items before checking the correct answers
                7. BONUS: If all answers are correct show the element with the id `alert` 
                    and hide it after one second (look into setTimeout) 
                    (use the class active to show the alert and remove the class to hide it) 
            */
        })

    STEP 3 : preventing the default behavior of submit event of form event 

        - we're preventing the default behavior of submit event of form event
            because we don't want that default refresh of the page from submit event 

        form.addEventListener('submit' , e => {
            // 1. Prevent the default behaviour
            e.preventDefault()
        })

    STEP 4 : getting all the input element which are selected

        - so to ge the selected input we need to loop through 
            by using filter() array method
        - why we're using filter() array method 
            because we want only those input which are selected out of all input
            based on condition 💡

        - checked property ✅
            - is a property of radio or checkbox input 💡💡💡

        form.addEventListener('submit' , e => {
            // 1. Prevent the default behaviour
            e.preventDefault()
            /*  2. Get all selected answers (use the `checked` property on the input 
            to determine if it is selected or not) */
            const checkedAnswers = answers.filter(answer => answer.checked)
            console.log(checkedAnswers)
        })

        // output : we'll get error
!["quiz app"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/54-quiz-app/lecture-54-3-quiz-app.PNG "quiz app")   

        - here we got error because
            querySelectorAll() method store data in the form of NodeList array
        - so that NodeList array is not an actual array 
            & that NodeList array only have one array method i.e forEach() method
            which we can use without converting NodeList array into an actual array
        - but to use all the methods of array then we need to convert 
            that NodeList array into an actual array
        - so to convert NodeList array into an actual array use
            Array.from() method 💡

    STEP 4.1 : converting that NodeList array into actual array of querySelectorAll() method ✅

        const form = document.getElementById('quiz-form')
        const answers = Array.from(document.querySelectorAll('.answer'))

        form.addEventListener('submit' , e => {
            // 1. Prevent the default behaviour
            e.preventDefault()
            /*  2. Get all selected answers (use the `checked` property on the input 
            to determine if it is selected or not) */
            const checkedAnswers = answers.filter(answer => answer.checked)
            console.log(checkedAnswers)
        })

        // output : after selecting input of each questions 
                    then we'll get all the input which are selected ✔️
!["quiz app"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/54-quiz-app/lecture-54-4-quiz-app.PNG "quiz app")     

        - so we got all the selected input answers 

    STEP 4.2 : looping through all selected input to see whether those input are correct or not ✅

        - so in html file , we put value of input based on 
            which input is true or which is not true ✔️

        - so we'll loop through on all the selected input by using forEach() array method

        - value property ✅
            - is a property of any type of input element 💡💡💡
            - used to set the value or get the value from that input element

        form.addEventListener('submit' , e => {
            // 1. Prevent the default behaviour
            e.preventDefault()
            /*  2. Get all selected answers (use the `checked` property on the input 
            to determine if it is selected or not) */
            const checkedAnswers = answers.filter(answer => answer.checked)
            
            /*  3. Loop through the selected answer to see if they are correct or not  
                    (Check the value of the answer to see if it is the string "true") */
            answers.forEach(answer => {
                const isCorrect = answer.value === "true"
                console.log(isCorrect)
            })
        })        

        // output : we selected a false answer of first questions
!["quiz app"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/54-quiz-app/lecture-54-5-quiz-app.PNG "quiz app")
        - here we got output of other input elements also which are not selected
            reason is that because we're looping through on "answers" variable 
            which contains all the input element

        - so we need to loop through on "checkedAnswers" variable
            which contains only those input element which are checked 💡💡

    STEP 4.3 : loop through on those input element which are checked to get only corrected input element ✅

        form.addEventListener('submit' , e => {
            // 1. Prevent the default behaviour
            e.preventDefault()
            /*  2. Get all selected answers (use the `checked` property on the input 
            to determine if it is selected or not) */
            const checkedAnswers = answers.filter(answer => answer.checked)
            
            /*  3. Loop through the selected answer to see if they are correct or not  
                    (Check the value of the answer to see if it is the string "true") */
            checkedAnswers.forEach(answer => {
                const isCorrect = answer.value === "true"
                console.log(isCorrect)
            })
        })        

        // output : here we selected only one input of first question
                    which is wrong so we got output -> false  
!["quiz app"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/54-quiz-app/lecture-54-6-quiz-app.PNG "quiz app")   

        - we'll get only that or those input which are selected

    STEP 5 : setting the condition based on which input element is or are correct & which are not ✅

        - we're setting the 'correct' class on that or those question item
            based on chosen input elements which is or are correct 
            & which is or are not correct input element then we'll set the 'incorrect' class
            on that question item also

        - but before this we need to select the question item based on checked input elements
            so we'll use closest() method on that child element 💡
        
        form.addEventListener('submit' , e => {
            // 1. Prevent the default behaviour
            e.preventDefault()
            /*  2. Get all selected answers (use the `checked` property on the input 
            to determine if it is selected or not) */
            const checkedAnswers = answers.filter(answer => answer.checked)
            
            /*  3. Loop through the selected answer to see if they are correct or not  
                    (Check the value of the answer to see if it is the string "true") */
            checkedAnswers.forEach(answer => {
                const isCorrect = answer.value === "true"
                const questionItem = answer.closest("question-item")

                //  4. For each correct answer add the class `correct` 
                //      to the parent with the class `question-item` and remove the class `incorrect`. 
                if (isCorrect) {
                    questionItem.classList.add("correct")
                } else {
                    questionItem.classList.add("incorrect")
                }
            })
        }) 

        // output : when we select right input element of that question
                    then that questionItem will become green
                    if we select wrong input element of that questionItem
                    then that questionItem will become red
!["quiz app"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/54-quiz-app/lecture-54-7-0-quiz-app.PNG "quiz app")
!["quiz app"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/54-quiz-app/lecture-54-7-1-quiz-app.PNG "quiz app")

        - but if we click wrong input element then that questionItem will become red 
        - & then if we select right input element then that questionItem will not become green
!["quiz app"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/54-quiz-app/lecture-54-7-2-quiz-app.PNG "quiz app")
        
        - this is happening because 'incorrect' class is overwriting that 'correct' class 💡💡💡
            
        - & if we see in css file , we define 'correct' class before 'incorrect' class
            & due that , specificity problem is coming 💡💡💡

    STEP 5.1 : removing the 'incorrect' class & 'correct' class based on input element is true or false ✅

        - removing the 'incorrect' class if that or those input element is or are true
            & removing 'correct' class if that or those input elements is or are false ✔️

        form.addEventListener('submit' , e => {
            // 1. Prevent the default behaviour
            e.preventDefault()
            /*  2. Get all selected answers (use the `checked` property on the input 
            to determine if it is selected or not) */
            const checkedAnswers = answers.filter(answer => answer.checked)
            
            /*  3. Loop through the selected answer to see if they are correct or not  
                    (Check the value of the answer to see if it is the string "true") */
            checkedAnswers.forEach(answer => {
                const isCorrect = answer.value === "true"
                const questionItem = answer.closest("question-item")

                //  4. For each correct answer add the class `correct` 
                //      to the parent with the class `question-item` and remove the class `incorrect`. 
                if (isCorrect) {
                    questionItem.classList.add("correct")
                    questionItem.classList.remove("incorrect")
                } else {
                /*  5. For each incorrect answer add the class `incorrect` 
                    to the parent with the class `question-item` and remove the class `correct`.
                    */
                    questionItem.classList.add("incorrect")
                    questionItem.classList.remove("correct")
                }
            })
        }) 

        // output : if we select right input element of any or all questionItem become green 
                    if we select wrong input element of any or all questionItem become red
                    & then if we select right input element of any or all questionItem become green 💡💡💡

    STEP 6 : setting the 'incorrect' class to all the unanswered questions ✅

        - so by default we'll apply the 'incorrect' class to all the unanswered questions
            before doing any thing else 💡💡💡

        const form = document.getElementById("quiz-form")
        const answers = Array.from(form.querySelectorAll("quiz-form"))
        const questionItems = form.querySelectorAll(".question-item")

        form.addEventListener("submit", e => {
            e.preventDefault()

            /* 6. BONUS: Make sure unanswered questions show up as incorrect. 
                    The easiest way to do this is to add the incorrect class 
                    and removing the correct class from all question items 
                    before checking the correct answers 
            */
            questionItems.forEach(questionItem => {
                questionItem.classList.add("incorrect")
                questionItem.classList.remove("correct")
            })

            const checkedAnswers = answers.filter(answer => answer.checked)

            checkedAnswers.forEach(answer => { 
                const isCorrect = answer.value === "true"
                const questionItem = answer.closest(".question-item")

                if (isCorrect) {
                    questionItem.classList.add("correct")
                    questionItem.classList.remove("incorrect")
                } else {
                    questionItem.classList.add("incorrect")
                    questionItem.classList.remove("correct")
                }

            })
        })

        // output : if we select wrong input element of a particular questionitem
                    then that questionItem become red
                    with that those input element which are not selected 
                    then their questionItem also become red 
!["quiz app"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/54-quiz-app/lecture-54-8-quiz-app.PNG "quiz app")          
         
        - this is because bydefault we marked/set all the question items
            through 'incorrect' class

        - means first we marked all the question item as incorrect
            & after that we're marking correct or incorrect input element
            based on true or false values

    STEP 7 : showing alert box if all the questionItems are correct ✅
        
        - here we're setting 'correct' class if each input element of each questionItem are true
            & based on that we're showing the alert box
        - & hiding that alert box after 1 seconds

        - to tell that all the answers are correct 
            then we'll use every() method of array 
            on those input element which are selected or checked 💡💡💡

        const form = document.getElementById("quiz-form")
        const answers = Array.from(form.querySelectorAll("quiz-form"))
        const questionItems = form.querySelectorAll(".question-item")
        const alert = form.querySelector("#alert")

        form.addEventListener("submit", e => {
            e.preventDefault()

            /* 6. BONUS: Make sure unanswered questions show up as incorrect. 
                    The easiest way to do this is to add the incorrect class 
                    and removing the correct class from all question items 
                    before checking the correct answers 
            */
            questionItems.forEach(questionItem => {
                questionItem.classList.add("incorrect")
                questionItem.classList.remove("correct")
            })

            const checkedAnswers = answers.filter(answer => answer.checked)

            checkedAnswers.forEach(answer => { 
                const isCorrect = answer.value === "true"
                const questionItem = answer.closest(".question-item")

                if (isCorrect) {
                    questionItem.classList.add("correct")
                    questionItem.classList.remove("incorrect")
                } else {
                    questionItem.classList.add("incorrect")
                    questionItem.classList.remove("correct")
                }
                
                /*  7. BONUS: If all answers are correct show the element with the id `alert` 
                        and hide it after one second (look into setTimeout) 
                        (use the class active to show the alert and remove the class to hide it) 
                */
                const allTrue = checkedAnswers.every(answer => answer.value === "true")

                if (allTrue) {
                    alert.classList.add("active")
                    setTimeout(() => {
                      alert.classList.remove("active")
                    } , 1000)
                }
            })
        })

        NOTE : of setTimeout() function ✅

            -> setTimeout() function  
                - works like asynchronous way
                - takes two argument 
                    first - callback function
                    second - time (which is behind the scene in milliseconds)

                - whatever we writing inside callback function of setTimeout() function
                    then that code will run after that specified time that we gave 💡💡💡

        
        // output : here we have a little bug that 
                    if we select only one input element then click to check -> button
                    then we'll still get that alert box 
                - even if we didn't selected the other input elements of those questionItems
!["quiz app"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/54-quiz-app/lecture-54-9-quiz-app.PNG "quiz app")

        - so how do we know that all the checked answers are actually selected

        - so we need to check if whether checkedAnswers array has equal length 
            to all those questionItems

    STEP 9 : setting all checked input answers should be same as all question items ✅

        form.addEventListener("submit", e => {
            e.preventDefault()

            /* 6. BONUS: Make sure unanswered questions show up as incorrect. 
                    The easiest way to do this is to add the incorrect class 
                    and removing the correct class from all question items 
                    before checking the correct answers 
            */
            questionItems.forEach(questionItem => {
                questionItem.classList.add("incorrect")
                questionItem.classList.remove("correct")
            })

            const checkedAnswers = answers.filter(answer => answer.checked)

            checkedAnswers.forEach(answer => { 
                const isCorrect = answer.value === "true"
                const questionItem = answer.closest(".question-item")

                if (isCorrect) {
                    questionItem.classList.add("correct")
                    questionItem.classList.remove("incorrect")
                } else {
                    questionItem.classList.add("incorrect")
                    questionItem.classList.remove("correct")
                }
                
                /*  7. BONUS: If all answers are correct show the element with the id `alert` 
                        and hide it after one second (look into setTimeout) 
                        (use the class active to show the alert and remove the class to hide it) 
                */
                const allTrue = checkedAnswers.every(answer => answer.value === "true")

                const allAnswered = checkedAnswers.length === questionItem.length

                if (allTrue && allAnswered) {
                    alert.classList.add("active")
                    setTimeout(() => {
                      alert.classList.remove("active")
                    } , 1000)
                }
            })
        }) 

        // output : now if we select only one right input element of one questionItem 
                    then that questionItem will become green
                    & others which are not selected those will become red 
!["quiz app"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/54-quiz-app/lecture-54-10-quiz-app.PNG "quiz app")

            - if we select only right input element of each questionItem
                then those questionItem will become green
            - otherwise not

            - but still here we get length of questionItem not questionItems
                that's why we're not getting the alertBox

        STEP 10 : getting the questionItems not questionItem ✅

            - technically we have 'questionItem' variable
                but this variable has not all the questionItems 
                + this variable only be selected based on if we select all input element 💡💡💡

            form.addEventListener("submit", e => {
                e.preventDefault()

                /* 6. BONUS: Make sure unanswered questions show up as incorrect. 
                        The easiest way to do this is to add the incorrect class 
                        and removing the correct class from all question items 
                        before checking the correct answers 
                */
                questionItems.forEach(questionItem => {
                    questionItem.classList.add("incorrect")
                    questionItem.classList.remove("correct")
                })

                const checkedAnswers = answers.filter(answer => answer.checked)

                checkedAnswers.forEach(answer => { 
                    const isCorrect = answer.value === "true"
                    const questionItem = answer.closest(".question-item")

                    if (isCorrect) {
                        questionItem.classList.add("correct")
                        questionItem.classList.remove("incorrect")
                    } else {
                        questionItem.classList.add("incorrect")
                        questionItem.classList.remove("correct")
                    }
                    
                    /*  7. BONUS: If all answers are correct show the element with the id `alert` 
                            and hide it after one second (look into setTimeout) 
                            (use the class active to show the alert and remove the class to hide it) 
                    */
                    const allTrue = checkedAnswers.every(answer => answer.value === "true")

                    const allAnswered = checkedAnswers.length === questionItems.length

                    if (allTrue && allAnswered) {
                        alert.classList.add("active")
                        setTimeout(() => {
                        alert.classList.remove("active")
                        } , 1000)
                    }
                })
            })    

            // output : now we'll get prefect output
                        if we select only two correct input then only those questionItem
                        will become green
                    - rest questionItems will be become red
!["quiz app"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/54-quiz-app/lecture-54-11-0-quiz-app.PNG "quiz app") 

            - only when we answer all the input elements correctly then
                all the questionItems will become green 
            
            - & we'll get the alertbox only when all the corrected input answer + questionItems length
!["quiz app"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/54-quiz-app/lecture-54-11-1-quiz-app.PNG "quiz app") 
                
## Note ✅

    - always use submit -> event for a form element
        because this is a best practice 💡💡💡

    - don't use click -> event for a form element
        because this is bad practice 

## discussion page

!["quiz app walkthrough"](../../all-chats-pics-of-lectures/1-beginner-JS-course-chats-pics/55-quiz-app-walkthrough.png "quiz app walkthrough")

