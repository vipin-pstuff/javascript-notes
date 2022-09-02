
# Timing events

    - very important 🔥
    - The window object allows execution of code after a specified time intervals
    - These time intervals are called timing events

## NOTE 

    - two methods mostly used in timing event 🔥🔥  
      - setTimeout(callbackfunction , milliseconds)
      - setInterval(callbackfunction , milliseconds)

## topics

    -> setTimeout()
    -> setInterval()
    -> clearTimeout()
    -> clearInterval()

    -> setTimeout() ✅
        - Executes a function, after waiting a specified number of milliseconds 
            untill and unless you don't stop it
        - but we use it when we want to show something only one time after a milliseconds

        eg : we put giveaways in our website
            then after that time we'll show that person number
            and he/she wins that giveaways

        eg : 

            html
            ----
                <div class="mainBox">
                    <div>
                        <p>Want to show my name 😀</p>
                        <p id="showMyName"></p>
                        <button id="btn">Click here</button>
                    </div>
              </div>

            - here we want that whenever user click on button
                then we want to show our name

            js 
            --- 
                const btn = document.querySelector("#btn")
                const showMyName = document.querySelector("#showMyName")

                btn.addEventListener('click' , showName)

                function showName() {
                    setTimeout(() => {
                        showMyName.innerText = "Teen"
                    } , 1000)
                }

                - but here user waiting for data for 1000
                    so we can show the loading also like this

                function showName() {
                    showMyName.innerText = "loading..."
                    setTimeout(() => {
                        showMyName.innerText = "Teen"
                    } , 1000)
                }

                // output : when you click on a button then 
                            loading.. text will come and then 
                            after a 1000 milliseconds , our name will come

    -> clearTimeout() ✅

        - used to stop setTimeout() 

        eg : 
            html
            ----
                <div class="mainBox">
                    <div>
                        <p>Want to show my name 😀</p>
                        <p id="showMyName"></p>
                        <button id="start-btn" onclick="">start</button>
                        <button id="stop-btn" onclick="">stop</button>
                    </div>
                </div>
            js
            ---
                const startBtn = document.querySelector("#start-btn")
                const stopBtn = document.querySelector("#stop-btn")
                const para = document.querySelector("#showMyName")

                let message ;

                startBtn.addEventListener('click' , myFunction)
                stopBtn.addEventListener('click' , myStopFunction)

                function myFunction() {
                    para.innerText = "Loading..."
                    message = setTimeout(() => {
                        console.log("Hello") 
                    }, 3000);
                }

                function myStopFunction() {
                    para.innerText= "stopping..."
                    clearTimeout(message);
                }

            - here we put setTimeout() inside a variable
            - and to clear that setTimeout we put same variable
                inside clearTimeout()

            NOTE : 
                - to use clearTimout() then
                  - always use a same variable for reference otherwise
                    clearTimout() and setTimout() will work separately
                    and that's we don't want
                
                - so reference of a variable should be same 
                    to clear the setTimeout() by using clearTimeout() 👍

    -> setInterval() ✅

        - Same as setTimeout(), but repeats the execution of the function continuously
            after that give time
            untill and unless you don't stop it 
        - we use it when we want to make a thing countinuosly 

        eg : like create a digital clock or countdown 
            which meanst these things will never stop  

        eg : 
            html
            ----
                <div class="mainBox">
                    <div>
                        <p>can you stop us when we reach at 5</p>
                        <button id="btn">click</button>
                    </div>
                </div>
            js
            --- 
                const stopNum = document.querySelector("p")
                const btn = document.querySelector("#btn")

                let num = 0;

                btn.addEventListener('click' , countdown)

                function countdown() {
                    stopNum.innerText = 'loading..'

                    setInterval(() => {
                        stopNum.innerText = num
                        num++

                    } , 1000)

                }

    -> clearInterval() ✅

        - used to stop/clear the setInterval()
        - same as clearTimeout()

        eg: 
            html
            ----
                <div class="mainBox">
                    <div>
                        <p>can you stop us when we reach at 5</p>
                        <button id="start-btn">start</button>
                        <button id="stop-btn">stop</button>
                    </div>
                </div>
            js
            ---
                const para = document.querySelector("p")
                const startBtn = document.querySelector("#start-btn")
                const stopBtn = document.querySelector("#stop-btn")

                let num = 0;
                let timeRef ; 

                startBtn.addEventListener('click' , startCountdown)
                stopBtn.addEventListener('click' , stopCountdown)

                function startCountdown() {
                    para.innerText = 'loading..'

                    timeRef = setInterval(() => {
                        para.innerText = num
                        num++

                    } , 1000)
                }

                function stopCountdown() {
                    para.innerText = "countdown has been stopped 🛑"
                    clearInterval(timeRef)
                }

            
    


























