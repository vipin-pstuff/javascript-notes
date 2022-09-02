# Date and Time 

    - Date and Time are both objects
    - very important topic 🔥
    - Date objects contain a number that represent
        milliseconds since 1 january 1970 UTC ✅
        - here don't forget the date

## topic

    -> Date methods
    -> Time methods

    NOTE : 
        - these two topics are really very important 🔥
        - because these two topics contains
            many methods and properties
        - and these two topics also contains getter and setter methods
            here getter means get method and setter means set

## NOTE

    - to create an object we use new -> keyword

    NOTE : this one takes 7 arguments don't give more 
            than 7 arguments but you can give less than 7 arguments
            new Date(year , month, day, hours, minutes, seconds, milliseconds)

    NOTE : 
        - new Date(milliseconds)
            here we gave milliseconds because every thing is in milliseconds

    NOTE : 
        - whenever we create an object of that class then
            constructor of that class automatically call

    NOTE : 
        - we'll understand about constructor when we do OOPS

## about Date class

    -> 4 ways to create a new Date() object
        - new Date()
        - new Date(year , month, day, hours, minutes, seconds, milliseconds)
        - new Date(milliseconds)
        // we can't avoid month section
        - new Date(date string) -> this is used mostly 🔥

    -> new Date() ✅

        - Date objects are created with the new Date() constructor
        - instance or object means same
        - it gives both Date and Time also
        
        eg : getting current date

            let currDate = new Date()
            console.log(currDate)
            // output - 2021-11-16T07:06:28.373Z - in vscode terminal
            // Tue Nov 16 2021 12:35:51 GMT+0530 (India Standard Time) - in chrome dev tools
            
            - here GMT+0530 means time of india is 5hr 30min is faster 
                than compare to others country whose time is slower than india

        eg : 
            - we can do like this also

            console.log(new Date())


## methods of Date() class - part-1

    -> toLocaleString() method ✅ 

        eg : very very important 🔥

            if we want to get right date and time in our vs code 
            instead on chrome then use this method of Date() class 

            console.log(new Date().toLocaleString())
            // output - 16/11/2021, 12:45:20 pm

    -> toString() method ✅ 

        eg : 
            if we want to get that date and time that we're getting 
            in console tab of chrome dev tool then use 
            toString() method of Date() class

            console.log(new Date().toString()) 
            // output - Tue Nov 16 2021 12:48:04 GMT+0530 (India Standard Time)

        NOTE : 
            - new Date() -> use this for get standard date
            - new Date().toLocaleString()) -> use this to get locale time of your country
            - new Date().toString() -> use this as alternative of new Date().toLocaleString())

    -> now() method ✅

        - gives total milliseconds from january 1 , 1970 to till yet
        - here Date is a object not a class

        eg : 
            console.log(Date.now())
            // output - 1637047621123


## examples of Date() class

    -> Date() class with 7 arguments ✅

        - 7 arguements are 
            - year , month , day , hour , minute , second and millisecond
        - minimum should give year and month argument
            
        NOTE : 
            - put these arguments in this order only
            - JS counts months from 0 to 11
              - january is 0 and december is 11

        eg :
            let ourDate = new Date(2021, 0, 5, 10, 33, 30, 0)
            console.log(ourDate.toLocaleString())
            // output : 1/5/2021, 10:33:30 AM

        eg : if we don't give time 
            let ourDate = new Date(2021, 0, 5)
            console.log(ourDate.toLocaleString())
            // output : 1/5/2021, 10:33:30 AM

            - here we're still getting time 
                so in upcoming we'll see how to show only 
                time or only date

    -> Date() class with custom string of date & time ✅

        eg : 
            let d = new Date("October 13 , 2021 11:13:00")
            console.log(d)

            // output : Wed Oct 13 2021 11:13:00 GMT+0530 (India Standard Time)

            - but if we use toLocaleString()
                console.log(d.toLocaleString()) then 
                
            // output : 10/13/2021, 11:13:00 AM

    -> Date() class with milliseconds as a argument ✅

        - when we use now() method of Date() class  
            then we got milliseconds

        eg : now() method

            console.log(Date.now())
            // output : 1637049351679

        - now copy this milliseconds and paste as here

        eg :
            let d = new Date(1637049351679)
            console.log(d.toLocaleString())
            // output : 11/16/2021, 1:25:51 PM

    -> Date() class with argument 0 ✅

        - if we give a 0 argument then we got january date

        eg : 
            let d = new Date(0)
            console.log(d.toLocaleString())

            // output : 1/1/1970, 5:30:00 AM


## methods of Date() class - part-2 

    - methods to get only the individual date✅
        - getFullYear()
        - getMonth()
        - getDate()
        - getDay()
        
    - for more check this 
            https://www.codevscolor.com/javascript-date-getter-methods-normal-utc-date

        eg : 
            const curDate = new Date()

            console.log(curDate.getFullYear())
            console.log(curDate.getMonth())
            console.log(curDate.getDate())
            console.log(curDate.getDay())

            // output :
                2021
                10
                16
                2

    - methods to set only the individual date ✅        
        - setFullYear()
        - setMonth()
        - setDate()

        eg : 
            const curDate = new Date()

            console.log(curDate.setFullYear(2022))
            console.log(curDate.setMonth(2))
            console.log(curDate.setDate(3))

            // output :
                1668589340277
                1647421340277
                1646298140277

            - here we got everything in milliseconds
                because we already know that date and time 
                behind the scene in milliseconds


## methods of time in Date() class

    - methods for only get time ✅
        - getTime() -> return total milliseconds from jan 1 , 1970 to till yet
        - getHours() -> return the hours of a date as a number (0 to 23)
        - getMinutes()
        - getSeconds()
        - getMilliseconds() 
        - toLocaleTimeString()

        eg : 
            const curTime = new Date()

            console.log(curDate.getTime())
            console.log(curDate.getHours())
            console.log(curDate.getMinutes())
            console.log(curDate.getSeconds())
            console.log(curDate.getMilliseconds())

            // output :
                1646298140277
                14
                32
                20
                277

    - methods for only set time ✅
        - setTime() -> return total milliseconds from jan 1 , 1970 to till yet
        - setHours() -> return the hours of a date as a number (0 to 23)
        - setMinutes()
        - setSeconds()
        - setMilliseconds() 

        eg : 
            const curTime = new Date()

            // console.log(curTime.setTime())
            console.log(curTime.setHours(5))
            console.log(curTime.setMinutes(2))
            console.log(curTime.setSeconds(5))
            console.log(curTime.setMilliseconds(10))

            // output :
                1637022098975
                1637019158975
                1637019125975
                1637019125010

            - here we're getting time in milliseconds       
                so when you put any of the output inside 
                Date() class like this

            eg : 
                const curTime = new Date(1637019158975)
                console.log(curTime)
                // output : Tue Nov 16 2021 05:02:38 GMT+0530 (India Standard Time)

        eg : 
            HTML
            ----
              <p>Click on button to display a time</p>
              <button onclick="myFunction()">Try it </button>

              <p id="demo"></p>
            
            JS
            --
              function myFunction() {
                  let t = new Date() ;
                  t.setHours(5) ;
                  document.getElementById("demo").innerHTML = t ;
              }

            // output : you'll get a proper time

        eg : important example 🔥

            - in this we're using IIFE that we'll see in 
                advance JS

            HTML
            ----
                same code of above one

            JS
            ---
              (function() {
                  setInterval(() => {
                      let curTime = new Date().toLocaleTimeString()
                      document.getElementById("demo").innerHTML = curTime ;
                  } , 1000)
              })()

            // output : you'll see time changing after 1000ms
                like this 3:19:57 PM


## important methods to get time and date

    - these methods are very important 🔥

    -> toLocaleTimeString() method ✅
        
        - use to get only time 

        eg : 
            console.log(new Date().toLocaleTimeString())
            // output : 11:14:23 AM

    -> toLocaleDateString() method ✅
        
        - use to get only date 

        eg : 
            console.log(new Date().toLocaleDateString())
            // output : 11/4/2020

    -> toLocaleString() method ✅
        
        - use to get both date and time 

        eg : 
            console.log(new Date().toLocaleString())
            // output : 11/4/2020 11:14:23 AM

        
## program to show date and time

    eg : 
        HTML 
        -----
            <main class="container">
                <div class="inner--wrapper">
                    <p>click on button to see the date and time</p>
                    <button onclick="myFunction()">Click</button>
                    <p id="date"></p>
                    <p id="time"></p>
                </div>
            </main>

        JS
        --
            function myFunction() {
              setInterval(() => {
                      let curDate = new Date().toLocaleDateString() ;
                      let curTime = new Date().toLocaleTimeString() ;
                      document.getElementById("date").innerHTML = curDate
                      document.getElementById("time").innerHTML = curTime
              } , 1000)
            }

