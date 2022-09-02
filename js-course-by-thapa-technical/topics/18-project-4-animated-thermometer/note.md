# Project 4 Animated Thermometer

    - here we'll learn how we can play with timing based events
    - and how to use unicodes 
    - we'll use unicode of font awesomes

![project 4](project-4.png)

    html
    ----
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Project-4</title>
            <!-- font awesome -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"/>
            <!-- custom css -->
            <link rel="stylesheet" href="./style.css">
            <!-- custom js -->
            <script src="./app.js" defer></script>
        </head>
        <body>
            <div class="container">
                <div class="inner-container">
                    <h1 class="title">Thermoeter
                        <span id="temp" class="fa"></span>
                    </h1>
                </div>
            </div>
        </body>
        </html>

    - here "fa" -> classs is important 
        because "fa" tells that we're using
        font aweomse 

    js
    ---
        const temp = document.querySelector("#temp")

        const tempLoad = () => {
            temp.innerHTML = "&#xf2cb;"

            if (temp.style.color === "red") {
                temp.style.color = "white"
            }

            setTimeout(() => {
                temp.innerHTML = "&#xf2ca;"
            } , 1000)
            
            setTimeout(() => {
                temp.innerHTML = "&#xf2c9;"
            } , 2000)

            setTimeout(() => {
                temp.innerHTML = "&#xf2c8;"
            } , 3000)
            
            setTimeout(() => {
                temp.innerHTML = "&#xf2c7;"
                temp.style.color = "red"
            } , 4000)
        }

        tempLoad()

        setInterval(tempLoad , 5000)

        - here we use setTimeout() 
            because we want to repeat things or that callback function
            after few seconds then after that setTimeout() will be stopped
            means after a given seconds that callback function will run of setTimeout()
            after that setTimeout() will be stopped
        - but we used setInterval() to repeat continuously that tempload() function

        - here why we wrote all the code inside a function
            because so that we can call that function to run 
            the same code again and again 
            
        NOTE : 
            - if we use innerText and textContent on temp variable 
                like this 

            eg : 
                temp.innerText = "&#xf2cb;"

            - output - then that termometer icon will not come
















