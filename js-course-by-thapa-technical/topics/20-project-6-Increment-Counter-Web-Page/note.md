# Project 6 Increment Counter Web Page

    - we seen that whenever we reach to particular section 
        then this increment counter we saw 
    - we'll learn how to type casting , 
        how to use getAttribute() method 

![Project 6](project-6.PNG)

## important notes

    -> data- ✅

        - is a custom attribute
        - used to hold custom data from custom code
        - write data and then hyphen after that you can write any name 
          - but data word and hyphen is important to write
        - don't give any space b/w data and hyphen and anything we wrote
            
        eg : <div data-target="400"></div>
    
    -> getAttribute() method ✅

        - used to get the value of that 
            attribute

        eg : 
            html
            ----
                <div class="box">
                    <input type="text" value="1">
                </div>

            js
            ---
                const inputBox = document.querySelector("input")
                console.log(inputBox.getAttribute("value"))
                //OR
                console.log(inputBox.value)

            - here we'll get output in both ways
                but to get the value of custom attribtue 
                    we don't have any direct property
            - so to get the value of custom attribute 
                use getAttribute() method

    -> type casting

        - there are several ways to convert one datatype to another
        
        eg : converting string data into integer/number type

            -> using unary plus operator ✅ 

                - unary plus operator used to convert string type into integer type

                let str = "1" ;
                let n = +str ;

                console.log(typeof n)

            -> using Number constructor ✅

                let n = Number(str) ;
                console.log(typeof n)

            -> using parseInt() function/method ✅     

                let n = parseInt(str) ;
                console.log(typeof n)

## todo of JS code

    TODO : 

    1 - select all the h1 through class name
    2 - then loop through with forEach() method on those h1
        2.1 - first set the initial value to each h1

    3 - then make a function to increment/update the counter
        and call it
    3.1 - now make a range from 0 to those value for
        each h1 to increment
        3.1.1 - so for this make two variables 
                - one for starting count
                - second for the end count 
        3.1.2 - first variable for to get all the values of data-target attribute
                of each h1
        3.1.3 - second variable to get all those initial values of h1
    
    3.2 - now we want to increment by 10
        because if we increment starting values by 1
        then it'll take time to reach at those ending values of each h1
    3.3 - then  make a condition that
        - if starting value is less than ending value
            then we want to increment those starting value 
            by the difference/gap of 10
            and use the setTimeout() function to call that
            updateCounter() function which we made
        - else put ending values of each h1 as initial
            if -> if condition is false

## code 

    html
    ----
        <!-- font awesome link -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"/>

        and

        <div class="counter-container">
            <div class="inner-container">
                <div class="box" id='box1'>
                    <span class="fa fa-cube"></span>
                    <h1 class="counter" data-target="400"></h1>
                    <h4>Projects Completed</h4>
                </div>
                <div class="box" id='box2'>
                    <span class="fa fa-users"></span>
                    <h1 class="counter" data-target="1500"></h1>
                    <h4>Our Happy Clients</h4>
                </div>
                <div class="box" id='box3'>
                    <span class="fa fa-folder-open"></span>
                    <h1 class="counter" data-target="500"></h1>
                    <h4>OnGoing Projects</h4>
                </div>
            </div>
        </div>

        -> we use custom data attribute a lot 🔥
    
    CSS
    ---
        * {
            margin : 0 ;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            font-size : 62.5% ;
        }

        body {
            font-family : sans-serif ;
        }   

        .counter-container {
            width: 100%;
            height: 100vh;
            background-color: #111;
            color : rgb(197, 196, 209) ;

            display: flex;
            justify-content: center;
            align-items: center;
        }

        .inner-container {
            padding : 1rem 2rem ;
            background-color: rgb(41, 28, 77);
            border-radius : .25rem ;

            display: flex;
            gap : 5rem ;
            justify-content: center;
            align-items: center;
        }

        .box {
            text-align : center ;
        }

        .box span {
            font-size : 4rem ;
        }

        .counter {
            color : rgb(223, 206, 250) ;
            margin-block : 1rem ;
            font-size : 4rem ;
        }

        .counter--title {
            font-size : 1.5rem ;
        }

    js
    ---
        const counters = document.querySelectorAll(".counter")

        counters.forEach((counter) => {
            counter.innerHTML = 0 ;

            updateCounter()

            function updateCounter() {
                const targetCount = +counter.getAttribute('data-target')
                const startingCount = +counter.innerHTML
            
                let incr = targetCount / 100
            
                if (startingCount < targetCount) {
                    counter.innerHTML = `${Math.round(startingCount + incr)}`
                    setTimeout(updateCounter , 10)
                } else {
                    counter.innerHTML = targetCount
                }
            }
        })

    NOTE : 
        - don't put 
            counter.innerHTML = 0 
            inside updateCounter() function
            otherwise only 0(zero) will be overwrite itself
        - even we can see when we do console.log(counter.innerHTML)

    1 -  we set the initial value of each counter like this
            counter.innerHTML = 0 ;
    2 - we get the value of data-target custom attribute 
            and then convert that data from string into integer type 
            using unary plus operator like this
            const targetCount = +counter.getAttribute("data-target")
    3 - we need to increment from 0 till the value of data-target attribute have
            so we add inital count would be 0 and converted into integer type like this
            const startingCount = +counter.innerHTML
    4 - now we want to increment so we need to increment by 100 and 100 difference/gap like this
            let incr = targetCount / 100
            but we don't want to increment by 1 and then 2 and so on.. because this will take time 
    5 - then if startingCount is less than the targetCount
            so then we want to increment so we use setTimeout() method which
            is calling updateCounter() function again & again 
            unitll and unless that if condition gets false
    6 - and then we'll get our output but if we want to 
            make our code more secure then use Math.round() 
            if we get decimal value in future like this
            counter.innerHTML = `${Math.round(startingCount + incr)}`
    7 - else we put initial value of targetCount i.e data-target attriute value
            inside counter.innerHTML

    NOTE : if we call the updateCounter() function 
        outside the counters.forEach() method
        then error will come