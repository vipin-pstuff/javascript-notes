# Advance JS Part - 1

## topic 
    - event propagation (event bubbling and event capturing) 🔥🔥
    - higher order function
    - callback function 
    - function currying (we'll see after Async JS section)
    - callback hell
    - Ajax call using XMLHTTPrequest (not important)
    - JSON 🔥🔥
    - fetch Api
    - Promises
    - Async-Await
    - Error handling in JS

## NOTE 
    
    - nobody use Ajax call using XMLHTTPrequest
        but added because some people use and 
        it's support is good

    - JSON topic is very important
        because XML data nobody use
        and even to transfer data to the server
        99.99% people use JSON that's why
    - JSON topic is very important before working with API

    - fetch API work same as Ajax call using XMLHTTPrequest
        but fetch API is way more easier and simplify the work 

    - after completing these topics we'll see two projects
        - fetch Api
        - Promises
        - Async-Await
        - Error handling in JS
        
## event propagation (event bubbling and event capturing)

    - as you know that we're using addEventListener()
        so third argument of addEventListener() is 
        bubbling or capturing

    - the event propagation mode determines 
        in which order the elements receive the event
        if both elements have events 

    - two ways of event propagation in the HTML DOM API are : 
        - event bubbling or bubbling phase
        - event capturing or capturing phase

    - bydefault event propagation is bubbling phase

    - propagation is divided into 3 things
      - target phase
      - capture phase
      - bubble phase

    - third argument of addEventListener() determine 
        the bubble or capture phase

    -> diagram of event propagation

                           +----- [window]   <----+ 
                           |       [document]     |
        capture phase ->   |       [<html>]       |   <- bubble phase
                           |       [<body>]       |
                           |       [<div>]        |
                           |       [<button>]     |
                           V                      |
                           +------ target phase --+
        eg : 
            - let's say we're clicking on button
                and then alert() would be called
            
            html
            ----
                <div class="parent">
                    <div class="child"></div>
                </div>
            
            NOTE : about bubble phase
                - so what we gonna do is that
                    we put alert() on both the div
                    and we'll only click on child div not on parent div
                - and then alert() will be executed of child  
                    but then after that alert() of parent also excuted
                - but we just want to call alert() of child div not of parent div 
                - so this is called bubble phase

            NOTE : about capture phase
                - so in capture phase
                    if we click on child or parent
                    then alert() will be executed of parent first 
                    then alert() of child div

    -> capture phase ✅

        - going from the window to the event target phase  
            means when we go from top to bottom i.e capture phase
        // OR 
        - in this phase , the event is first captured 
            by that outermost element and propagated 
            to the inner elements from that outermost element

        - capturing also called as "trickling"
            trickling means top to bottom
    
    -> bubble phase ✅

        - from the event target parent back to the window
            means when we go from bottom to top i.e bubble phase
        // OR 
        - in this phase , the event is first captured 
            and handled by that innermost element which contain that event 
            and then propagated to outer elements from that innermost element


    NOTE : 
        - if we want to call all the event from all the elements 
            then this event propagation is fine
        - but what if we just want to call event of that particular element
            not events of other elements
        - then we use stopPropagation() method

    eg : using stopPropagation() method to stop the bubble phase ✅

        html
        ----
            <div class="parent">
                <div class="child"></div>
            </div>

        js 
        --
            const parent = document.querySelector(".parent")
            const child = document.querySelector(".child")

            parent.addEventListener('click' , () => {
                alert("I am parent")
            })

            child.addEventListener('click' , (e) => {
                alert("i am child")
                e.stopPropagation()
            })

        // output : when you click on child div then
                    event will called of child div and then
                    after that event propagation will be stopped 
                    due to stopPropagation() method of that event

    eg : using capture phase

        js 
        --
            const parent = document.querySelector(".parent")
            const child = document.querySelector(".child")

            parent.addEventListener('click' , () => {
                alert("I am parent")
            } , true)

            child.addEventListener('click' , (e) => {
                alert("i am child")
                e.stopPropagation()
            } , true)

            NOTE : 
                - so if we write true as a thrid argument of addEventListener()
                    then it means we're using capturing phase

## higher order function & callback function

    -> higher order function ✅
        
        - function which takes/accept another function as an arguments 

    -> callback function ✅

        - function which get passed as an argument to another function 
        // OR  
        - A callback function is a function that is passed as an argument to 
            another function, to be “called back” at a later time. 

    eg : of both higher order and callback function

        function sum (a , b) {
            return a + b
        }

        function callMe(num1 , num2 , callMeBack) {
            return callMeBack(num1 , num2)
        }

        const total = callMe(12, 12 , sum)
        console.log(total)

        NOTE : 📝
            - here callMe() function will be higher order function 
                and sum() function will be callback function
            
            - higher order function is just a function 
                which takes other functions as an argument

- [x] after doing asynchronous javascript then we'll do function currying topic + other topics 

## function currying

    for this and other topics see 15-2 folder



