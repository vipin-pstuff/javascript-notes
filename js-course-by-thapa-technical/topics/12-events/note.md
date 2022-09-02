
# Events in JS

    - very important 🔥
    - HTML events are "things" that happen to HTML elements.
        When JavaScript is used in HTML pages, JavaScript can "react" on these events.
        eg : 
            onclick -> is a event that we used on our html elements
    - an html event cane be something the browser does, or something a user does.
        eg : when user click on a button then something happen on a document
    - JS let's you execute cpode code when events are detected
    - HTML allows event handler attributes, with JavaScript code, to be added to HTML elements. 
        eg : 
            <button onclick="myFunction()">Hello</button>

## topics

    -> 4 ways of writing events in JS
    -> what is event object
    -> MouseEvent in JS
    -> KeyboardEvent in JS
    -> InputEvents in JS

## 4 ways of writing events in JS

    1 - using inline events  
    2 - By Calling a funcion (We already seen and most common way of writing) 
    3 - using Inline events (HTML onclick="" property and element.onclick)
    4 - using Event Listeners (addEventListener and IE's attachEvent)

    NOTE : 
        - event listeners are most famous 
          - and with event listeners , event propagation also comes
          - like bubbling , capturing 
          - so we'll get true and false


    1 - using inline events ✅
    --------------------------

        - these inline events are very common
            - onchange 
            - onclick
            - onmouseover
            - onmouseout
            - onkeydown
            - onload

        - onclick="" event ✅ 

            - is a inline events
            - for simple stuff use onclick event
                otherwise avoid it because
            - mostly people don't use it

            eg : onclick with alert() , etc
                <button onclick="alert("i am awesome but nobody use me)">Click me</button>

    2 - By Calling a funcion ✅
    ---------------------------

        eg : onclick with calling a function

            HTML
            ---
                <button onclick="myFunction()">Click me</button>

            JS
            ---
                function myFunction() {
                    alert("hello world")
                }

            - this is traditional way to use onclick inline event

    3 - using Inline events inside JS not in html ✅
    ------------------------------------------------

        eg : 
            html
            ----
                <button id="btn">Click me</button>
            js
            ---
                const btn = document.querySelector("#btn")

                btn.onclick = function() {
                    alert("hello world")
                }

        eg : another example of onclick event + important 📝
            html
            ----
                <button id="btn">Click me</button>
            js
            ---
                const btn = document.querySelector("#btn")

                btn.onclick = function() {
                    alert("hello world")
                }

                btn.onclick = function() {
                    alert("hello world 2")
                }

            - now tell be which output we'll get or both will come

            // output - hello world 2

            NOTE : 
                - because this is the problem with using 
                    onclick event inside JS
                - that if we calling same event type more than one times  
                    through with same reference i.e btn
                - then things goes from top to bottom
                    that's why things get overwrite 
                - so that's why people use event listeners mostly
                    because things problem will not come
                    with event listeners

        
        eg : using event listeners to check whether we'll 
                get same output or not

            const btn = document.querySelector("#btn")
            
            btn.addEventListener('click' , () => {
                console.log("hello world 1")
            })

            btn.addEventListener('click' , () => {
                console.log("hello world 2")
            })

            - now tell me do we'll get both output or 
                overwritten by second one

            // output : hello world 1
                        hello world 2

            NOTE :
                - so here as we can see that we got both outputs
                - so advantage of using event listeners
                    that we can use same event type mutitple times
                    with same reference 
                - and both will work 

    4 - using Event Listeners ✅
    ----------------------------

        - is a method -> addEventListener()
        - this is a great way to fire an event 
        - takes 3 arugments
          - first is event type that you want to use
          - callback function
          - true or false -> for event delegation

        eg : 
            html
            ----
                <button id="btn">Click me</button>
            js
            ---
                const btn = document.querySelector("#btn")

                btn.addEventListener('click' , () => {
                    alert("hello world")
                })
                // OR
                btn.addEventListener('click' , myFunction)

                function myFunction() {
                    alert("hello world")
                }


## what is event object

    - very important topic 🔥🔥
    - Event object is the parent object of the grandparent Event object
        means like here 
            MouseEvent is a parent object of granparent Event object
    - Event object contain information about a event type
        like here 
            MouseEvent is a of the event type , so all the information
            about MouseEvent contain by Event object
        eg : 
            html
            ----
                <button id="btn">Click me</button>
            js
            ---
                const btn = document.querySelector("#btn")

                btn.addEventListener('click' , (e) => {
                    console.log(e)
                    console.log(e.target)
                    console.log(e.type)
                })

            - so here e or Event is a object that contains 
                all the info about click event which is also an object

            - here target and type are properties of Event object

            // output 
                - we'll get information about click event 
                - which element is targeted by click event 
                - which event type we used

            - but also the information which you need to see are  : 
              - altKey , bubbles , clientX and clientY , ctrlKey
                offsetX and offsetY keys , pageX and pageY keys ,
                screenX and screenY
              - srcElement , target , type keys are important 🔥

            - like if interviewer ask that he/she get you
                a website and he/she click on something and then
                he/she will ask that 
                    - where he/she clicked
                    - did he/she click or double click 
                    - and if they asked from us about information
                        about event they used

    - eg : 
      - MouseEvent
      - FocusEvent 
      - KeyboardEvent , etc...


## MouseEvent in JS

    - The MouseEvent Object events that occur 
        when the mouse interacts with the HTML document 
        belongs to the MouseEvent Object

    - there are many ways but we'll see the important one
        - onmousedown or mousedown 
        - onmouseup or mouseup
        - mouseenter or mouseenter
        - onmouseleave or mouseleave 
        - etc ...

    -> onmousedown and onmouseup ✅

        - use onmousedown inline event if you want to use inside html
        - use mousedown if you want to use inside JS
          - and same with others also

        eg : using onmousedown and onmouseup inline event in HTML  

            html
            ----
                <p id="myPara" onmousedown="mouseDown()" onmouseup="mouseUp()">
                    lorem ipsum generator which is triggered when we do 
                    mouse up or mouse down
                </p>
            js
            ---
                const myPara = document.querySelector("#myPara")
                
                function mouseDown() {
                    myPara.style.color = "skyblue" ;
                }

                function mouseUp() {
                    myPara.style.color = "purple" ;
                }

            // output : 
                - so when you click down then skyblue color come
                    when you release the click then purple color 
                    will come

    -> mouseenter and mouseleave ✅ 

        - when we enter mouse cursor inside any element 
            then mouseenter event will fire 
        - if i leave the mouse cursor from inside any element
            then mouseleave event will fire

        eg : 
            html 
            ----
                <p id="myPara>
                    lorem ipsum generator which is triggered when we do 
                    mouse up or mouse down
                </p>
            js
            ---
                const myPara = document.querySelector("#myPara")
                
                myPara.addEventListener('mouseenter' , () => {
                    myPara.innerText = "mouseenter gets fired" ;
                })
                
                myPara.addEventListener('mouseleave' , () => {
                    myPara.innerText = "mouseleave gets fired" ;
                })


## KeyboardEvent in JS

    - Events that occur when user presses a key on the keyboard, 
        belongs to the KeyboardEvent Object

    - important Keyboard events are ✅
        - onkeypress or keypress
        - onkeydown or keydown
        - onkeyup or keyup
        - etc ...

        - properties of these events 
          - key
          - code 

    -> onkeypress or keypress ✅

        eg : 
            html
            ----
                <input type="text" id="inputForKey" onkeypress="keyPress()">
                <p id="keys"></p>
            js
            --
                const inputForKey = document.querySelector("#inputForKey")
                const para = document.querySelector("#keys")

                function keyPress() {
                    para.innerText = `You press ${event.key} and it's code is ${event.code}` ;
                }

            // output : i press b key then we'll get
                You press b and it's code is KeyB

            - here if we want to use event object then we can use directly 
                if we're using inline events inside HTML document
            - if we're using event listeners inside JS 
                then inside callback function we need to give
                as an argument
                eg : 
                    btn.addEventListener('click' , event => {
                        console.log(event)
                    })

    -> onkeydown or keydown ✅

        eg : 
            html
            ----
                <input type="text" id="inputForKey" onkeydown="keyDown()" onkeyup="keyUp()">
                <p id="keys"></p>
            js
            --
                const inputForKey = document.querySelector("#inputForKey")
                const para = document.querySelector("#keys")

                function keyDown() {
                    para.innerText = "key is down" ;
                }

                function keyUp() {
                    para.innerText = "key is up" ;
                }

            // output : when we keep pressing any key then we'll get key down
                        when we release the key then we'll get key up 


## InputEvents in JS

    - The onchange event occurs when the value of an element has been changed
    - input events are very important 🔥🔥
        because forms contain many information
    
    NOTE : and how do we know that which checkbox is checked by user
        and which radio button are selected , etc ...
        so to know all of these we use input events

    - input events are 
      - onchange 
      - 

    -> onchange or change event ✅

        - very important 🔥🔥 even if we use reactjs
            then in reactjs this event is bydefault we need to write
        - onchange or change event is fire when checked or selected , 
            focus , hover , etc state has been changed

        eg : 
            html
            ----
                <div class="container">
                    <div>
                        <label for="userName">Your name</label>
                        <input type="text" name="userName" id="userName" placeholder="fullname">
                    </div>
                    <div>
                        <label for="icecream">Choose Ice cream 🍨</label>
                        <input list="icecreamOptions" name="icecream"  
                            placeholder="Choose one" id="icecream" onchange="userData()">
                        <datalist id="icecreamOptions">
                            <option value="Vanilla">
                            <option value="Mango">
                            <option value="Apple">
                            <option value="pineApple">
                            <option value="Safari">
                        </datalist>
                    </div>
                    <div id="result"></div>
                </div>

            js
            ---
                const userName = document.querySelector("#userName")
                const icecreamOptions = document.querySelector("#icecream")
                const resultBox = document.querySelector("#result")

                function userData() {
                    resultBox.style.marginBlock = "1rem"
                    resultBox.innerText = `Your name is : ${userName.value} and your ice-cream is ${icecream.value}` ;
                }

            - here value attribute of input element or a property in JS 
                so whenever we write/put value inside input field
                then that value is added inside value attribute
            
            - if there is a normal text inside like h1 element
                then we have to use innerText or innerHTML or contentText 

## extra stuff

    -> onload or load ✅
        - use this event when you want to show something
            after when a page load 


## NOTE 

    - bydefault e is written as event 
        - but if you want to use it as "e" letter only
        - then we need to define e -> letter as argument in callback function
            of addEventListener()  