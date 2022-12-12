# callbacks

    - previously we used for loop , while loop , if statement
        in order to determine the flow of the code to make 
        it different from just running top to bottom

    - here we'll see another way that we can change the flow 
        of our code by using asynchronous code 

    - eg : of asynchronous code 
        setTimeout() function , setInterval() function , 
        addEventListener() method , promises , async await , fetch() api , etc ✔️

## example - of setTimeout() function ✅ 

    -> setTimeout() function 
        - here "s" letter should be small + "T" letter should be capital

        - takes two arguments 
            first - callback function 
            second - time for delay in millisecond

    eg : of setTimeout() function 
        setTimeout(() => {
            console.log("Hi")
        } , 1000) 

        // output : here that callback function as an argument of setTimeout() function
                    will run after 1second
        
        // output : Hi

        - so here asynchronous code means 
            that callback function as an argument of setTimeout() function
            which is created , it will not run immediately 💡💡💡

    eg : of setTimeout() function

        setTimeout(() => {
            console.log("Hi")
        } , 1000) 

        console.log("outside")

        // output : here first immediately "outside" message will be printed out
                    & when after 1second over then "inside" message will be printed out

        - means those code will run step by step which are not asynchronous code 
            i.e called synchronous code so when the movement 
            all the code executed completely which are synchronous code
            then asynchronous code will run based on time , internet speed , etc 💡💡💡

        - asynchronous code means that those code 
            which doesn't run right away / immediately
            because it gets run after specified time 
            but maybe it runs multiple times in a row 
            after specified time such as an even listener 💡💡💡

        - so setTimeout() function "fire/execute the callback function" (which is a argument) 
            & whatever the stuff are defined inside the callback function will also be executed 💡💡💡

## example - of addEventListener() method ✅

    eg : 
        html code 
        ---------
        <button>Click me</button>

        js code 
        -------
        setTimeout(() => {
            console.log("inside");
        } , 1000)

        const button = document.querySelector("button")

        button.addEventListener('click' , () => {
            console.log("clicked");
        })

        console.log("outside");

        // output : outside 
                    inside 

        - until & unless if we don't click/trigger on that button
            then addEventListener() method will not run 
        - & synchronous codes will run in the order they're defined 💡💡💡

## Note - about asynchronous code 

    - setTimeout() function , setInterval() function , addEventListener() method , etc
        are types of asynchronous code which we're going to hear refereed to as callbacks 💡💡

    - & a callback function which are inside of these different types of asynchronous code
        will going to executed at a later time based on some specific condition
    - & condition can be based on
        - whether it execute after a specific amount of time 
        - or whether it execute when an event listener gets triggered/fire/called
        - or whether it executes based on some other outside things 
            such as getting data from a URL OR from a database OR some other means 💡💡💡

    - asynchronous code means run that code after 
        when specified time over OR based on some condition

## example - of callback ✅

    eg : 
        setTimeout(() => {
            console.log("inside")
        } , 1000) 

        const button = document.querySelector("button")

        addClickEventListener(button , () => {
            console.log("clicked")
        })

        console.log("outside")

        function addClickEventListener(element , callback) {
            element.addEventListener('click' , callback)
        }
        //OR
        function addClickEventListener(element , callback) {
            element.addEventListener('click' , () => {
                callback()
            })
        }

        - now here first synchronous code will be executed first 
            & then other types of asynchronous code 

        // output : outside
                    inside 
                    7 clicked --> because we clicked 7 times 

    - that's about all callbacks
        & callbacks are all over the JS language
        that's why callbacks really core fundamental in the JS ✔️

## Note - about callback hell ✅

    - using callback becomes difficult/cumbersome
        when we add callbacks more & more inside another callback
        then we enter into callback hell

    - callback hell means we have a callback inside of other callback
        & again inside that callback again & again 
        means we have too many nested callback ✔️

    eg : of callback hell

        setTimeout(()=>{
            console.log(`1️⃣ works is done`);    
            setTimeout(()=>{
                console.log(`2️⃣ works is done`); 
                setTimeout(()=>{
                    console.log(`3️⃣ works is done`);  
                    setTimeout(()=>{
                        console.log(`4️⃣ works is done`); 
                        setTimeout(()=>{
                            console.log(`5️⃣ works is done`);   
                            setTimeout(()=>{
                                console.log(`6️⃣ works is done`);    
                            }, 1000) 
                        }, 1000)   
                    }, 1000)  
                }, 1000)   
            }, 1000)
        }, 1000)

    - & if we nested too many callback again & again 
        then things become messed up & difficult to read

    - due to this Promises concept come 💡💡
        & due to Promises things become easier instead of using callback hell 
