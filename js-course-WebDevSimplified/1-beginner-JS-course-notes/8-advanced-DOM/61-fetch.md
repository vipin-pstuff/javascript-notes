# fetch

    - most most important 🔥🔥

    - now we'll see advance features of DOM 
        which we'll use most of the time with asynchronous code 

## about fetch api ✅

    - fetch api is the most popular advance DOM technique 
        to fetch the data from server or database or URL , etc
        that we'll use most of the time  

    - JSON , callback , promises , fetch api , async await and error handling 
        are related to each other

    - callback of setTimeout , etc & Promises , fetch api , async await 
        & async await with error handing works asynchronously

    - Promise , fetch api , async await - these are all returns a promise 💡💡💡

    - 90% we consume the promise 
        we don't create the promise & we create the promise in rare cases
        eg : when we use fetch() function 
        then it will return a promise so that promise we'll consume 💡💡💡

    - helps to fetch/query the information/data that is on the web 
        generally we use fetch() function with API
        API - means application programming interface
            - it's really a website that is formatted/made in a way
                that we can use data of that website 
                inside our javascript code 💡💡💡

    - here we'll use an API i.e JSONplaceholder API for testing & fetching data ✔️
        URL - https://jsonplaceholder.typicode.com/ 

## how to use fetch() api function 🔥

    -> fetch()  
        - is a predefined function of window global object

        - it also return a promise 💡💡💡

        - takes two arguments 
            first - a API URL (inside double quotes that we want to fetch) 
            second - header (second argument also know as params or parameter) 💡💡💡

    STEP 1 : go to that website & scroll down & click to user section

    STEP 2 : then copy the URL of users i.e https://jsonplaceholder.typicode.com/users

    STEP 3 : paste user URL as first argument of fetch() api function

        console.log(fetch("https://jsonplaceholder.typicode.com/users")) 

        - here this line of code means 
            we're saying to browser that go fetch data from this URL 
            & return the data to us ✔️
        
        // output : Promise {<pending>}

        - here we can see that we got output i.e a Promise
            because fetch() api function works asynchronously  
            means fetch() api function also returns a promise 💡💡💡

        NOTE : about fetch data through fetch() api function ✅

            - fetch() api function getting data from an API 
                & that API can be internal or external

            - like whenever we're fetching data from the internal of a website
                so data of that website stored on the internet like AWS , etc 

            - so data whatever we're fetching which is on the internet
                then fetching will take to get the data
            - so whatever data/datas are coming can be slow
                & because we're getting data from the internet
                & that's not fast operation & fast & slow speed depends on internet speed too 💡💡

    STEP 4 : 

        fetch("https://jsonplaceholder.typicode.com/users")

        console.log("here")

        // output : here 

        - now we didn't got the promise -> as a output
            because here we didn't use then() method on fetch() api function
        - & as we know that asynchronous code run/handle in the background
            & rest of the code will executed 
            & JS again come on that asynchronous code to execute 💡💡

    STEP 5 : using then() method to get the data ✅

        fetch("https://jsonplaceholder.typicode.com/users").then(response => {
            console.log(response)
        })

        NOTE : 
            - here "response" is a standard name for understanding 
                but we can give any name ✔️

        console.log("here")
!["fetch() api function"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/61-fetch/lecture-61-0-fetch.JPG "fetch() api function")

        - here output is -> Response object

        - but here we can see that first -> console.log("here") executed
            & then fetch() api function executed
        - because code always start from top to bottom
            & first when the JS saw that fetch() api function
            then JS will wait for data from fetch() api function 💡💡💡
        - but control will go to back & JS will execute other codes 
            & the movement other tasks/codes executed completely
            then JS come back to that fetch() api function & JS will say
            "is your fetching work is done or not"
        - then fetch() function will say "just a second , i'll almost done , Yeah fetching is done"
            then JS will also execute that console.log(response) also
            which is inside of fetch() api function ✔️

        - when we open that Response object 
!["fetch() api function"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/61-fetch/lecture-61-1-fetch.JPG "fetch() api function")
        
        - there are important properties of Response object i.e ✅
            - body property
            - ok & status properties are same 
            - statusText property

            - here body property is most important 
                because it contain our actual data 💡💡💡

        - so that body property contain our actual data in readable stream format
            but we want our actual data so we can't directly access that body property
            through that readable stream 💡💡💡
        
        - so we need to convert our data into an actual JS array or object type
            by using json() method ✔️

        -> json() method
            - is a method used to convert data (of body property of Response object)
                into actual JSON data i.e JS array or object type
                which was in readable stream format 💡💡💡

            - is a method of Response object 💡💡💡

    STEP 6 : using json() method on response object to get actual data ✅

        fetch("https://jsonplaceholder.typicode.com/users").then(response => {
            console.log(response.json())
        })
        
        console.log("here")

        // output : here
                    Promise {<pending>}
    
        - again we got Promise 
            because that response object also return a promise 
            so we need to use promise chaining means we need to use then() method again
            to get the actual data 💡💡💡 
            
    eg : using Promise chaining way with fetch() api function ✅

        - important example 🔥

        fetch("https://jsonplaceholder.typicode.com/users").then(response => {
            return response.json()
        }).then(data => {
            console.log(data)
        })
        
        console.log("here")
        
        // output : (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}] 

        - now got actual data i.e JSON data in array of objects 

## challenge time - timeline 5:24

    ques - 
        fetch("https://jsonplaceholder.typicode.com/users").then(response => {
            return response.json()
        }).then(data => {
            console.log(data)
        })
        
        - now print all the usernames 
            by using promise version with fetch() api function 

    Ans 
        fetch("https://jsonplaceholder.typicode.com/users").then(response => {
            return response.json()
        }).then(data => {
            console.log(data);
            console.log(data.map(user => user.name));
        })

        // output : we got data inside an array


        NOTE : 
            - here we used map() method of array
                because most of the time we want to return 
                so that we can use those values for other purpose
                & that's a best practice 💡💡💡

            - but we can use forEach() array method also 

## challenge time - timeline 6:15 ✅

    - important challenge 🔥

    ques : convert that code of previous challenge 
            from promise version of fetch into async await version of fetch

        fetch("https://jsonplaceholder.typicode.com/users").then(response => {
            return response.json()
        }).then(data => {
            console.log(data);
            console.log(data.map(user => user.name));
        })

    Ans : 
        const URL = "https://jsonplaceholder.typicode.com/users"

        async function doStuff() {
            const response = await fetch(URL)
            const users = await response.json()
            
            console.log(users.map(user => user.name)
        }

        doStuff()

        NOTE : 
            - we use await -> keyword on those lines of code 
                because those lines of code will return a promise
                & promise works asynchronously in the background
                that's why we we're telling JS that wait on those lines of code 
                which have await -> keyword 💡💡💡 

            - here we put all the letters of URL in capital 
                because that variable will be constant
            - & more readable also to show that variable is const variable 💡💡✔

## how to handle errors while working with fetch() api 🔥

    eg : let's fetch an individual user

        const URL = "https://jsonplaceholder.typicode.com/users/1"

        async function doStuff() {
            const response = await fetch(URL)
            const user = await response.json()
            
            console.log(user)
        }
        
        NOTE : here we wrote "user" variable not "users"
            because we're fetching only one variable + readability reason also

        // output : we'll get our 1st user perfectly
                    which has id is 1

    eg : access that user which doesn't exists ✅

        - important example 🔥

        const URL = "https://jsonplaceholder.typicode.com/users/20"

        async function doStuff() {
            const response = await fetch(URL)
            const user = await response.json()
            
            console.log(user)
        }

        - here we're access user which has id is 20
            but it doesn't exists

        // output : 
!["fetch() api function"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/61-fetch/lecture-61-2-fetch.JPG "fetch() api function")

        - here we got 404 error
            means we tried to get information
            but it doesn't actually exist
        - & that's not an actual error 💡💡💡
            & even our all the code still runs 

        - & we got empty object because there is no user with id : 20

## Note - promise version of fetch() api function 🔥

    - here we'll see & talk about error

    eg : accessing that use which doesn't exists

        fetch("https://jsonplaceholder.typicode.com/users/20").then(response => {
            return response.json()
        }).then(data => {
            console.log(data)
        }).catch(error => console.log(error))

        // output : 
!["fetch() api function"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/61-fetch/lecture-61-2-fetch.JPG "fetch() api function")

        - here we got 404 error & empty object

        NOTE : about fetch() api function ✅

            - here 404 error is not an actual error means 
                whatever promise we're getting from fetch() api function
                that promise will only reject 
                when we have only network/internet connection problem/error
            - & error only come inside catch() method of promise way
                when we have only network error 💡💡💡
                like maybe we lose internet connection

            - if there are other errors than network error
                then fetch() api function will not be rejected
                & our all code will be executed properly 💡💡💡

            - so here 404 error is not a network error
                that's why our promise data from fetch() api function didn't rejected
            - & due to promise data didn't rejected
                that's why catch() method block didn't executed
                & if catch() method block don't run 
            - then we can't see the proper error 💡💡💡

            - but if there is network error then catch() method block 
                will run & we'll get the properly error output 💡💡💡
 
!["fetch() api function"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/61-fetch/lecture-61-2-fetch.JPG "fetch() api function")

            - so this 404 error is a normal response we got 

    eg : 
        fetch("https://jsonplaceholder.typicode.com/users/20").then(response => {
            return response.json()
        }).then(data => {
            console.log(data)
        }).catch(error => console.log(error))

        // output : 
!["fetch() api function"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/61-fetch/lecture-61-3-fetch.JPG "fetch() api function")

        - we can see that value of ok -> property of Response object is false 

        NOTE : about ok -> property of Response object ✅

            - whatever error comes whether that error is network or other errors 
                then value of ok -> property will be false  
            - but if there is no error including no network error 
                then value of ok -> property will be true 💡💡💡
            
            - OR we can use status -> property of Response object
                if the value of status -> property is 200 
                then means there is no error including no network error after fetching data
            - but if there is any value like 404 , etc of status -> property
                then means there is error or maybe network error 💡💡💡

            - & even statusText -> property of Response object 
                also has value i.e "not found" ✔✔

            - but better property of Response object is -> ok
                to see the error 
            - so most of the time 99% use ok -> property of Response object 💡💡💡
 

## handling errors while working with fetch() api 🔥

    - how to handle errors of fetch() api function 
        which are not actual errors 

    NOTE : about network error & other errors ✅ 

        - important note 🔥

        - fetch() api function only fail to give a Response object 
            when there is a network errors 
            & it doesn't fail to give response if there is other errors 
        - so if there is network error & to catch/handle that network error properly 
            then we need to use catch() method block 
            otherwise catch() method doesn't catch/handle the other errors 💡💡💡 
        - & if there are other errors like 404 , etc errors 
            then still fetch() api function will give a Response object 💡💡💡 

        - but to catch/handle other errors 
            then most of the time we use ok -> property of Response object 
            & ok -> property doesn't catch/handle the network error 💡💡💡

    NOTE : about ok -> property of Response object ✅

        - ok -> property of Response object gives true or false based on 
            whether that response is successful or not 💡💡💡

    eg 1 : using ok -> property of Response object 

        const URL = "https://jsonplaceholder.typicode.com/users/20"

        async function doStuff() {
            const response = await fetch(URL)
            console.log(response.ok)
            
            const user = await response.json()
            console.log(user)
        }

        doStuff()

        // output : 
!["fetch() api function"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/61-fetch/lecture-61-4-0-fetch.JPG "fetch() api function")

        - here we got false -> output 
            because we're accessing that user which doesn't exist

    eg 1.1 : using ok -> property of Response object

        const URL = "https://jsonplaceholder.typicode.com/users/1"

        async function doStuff() {
            const response = await fetch(URL)
            console.log(response.ok)
            
            const user = await response.json()
            console.log(user)
        }

        doStuff()

        // output : 
!["fetch() api function"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/61-fetch/lecture-61-4-1-fetch.JPG "fetch() api function")

        - here we got true -> output + we got response of that user

    eg : handling only network errors through catch(){} block ✅

        - important example 🔥

        - fetch() api function will only fail to give response 
            when there is a network error 
        - & to catch/handle that network error properly 
            we need to use catch() method block 💡💡💡

        const URL = "https://jsonplaceholder.typicode.com/users/1"

        async function doStuff() {
            try {
                const response = await fetch(URL)
                console.log(response.ok)
                
                const user = await response.json()
                console.log(user)
            
            } catch (error) {
                console.error(error);
            } 
        }

        doStuff()

        // output : 
!["fetch() api function"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/61-fetch/lecture-61-5-fetch.JPG "fetch() api function")

        - here we're accessing that user which exists
            but due to network error fetch() api function failed to give Response object
        - & we used catch() {} block to catch/handle the network error properly 💡💡💡

    eg : handling only other errors through ok -> property of Response object ✅

        - important example 🔥

        - to handle/catch other errors then use ok -> property of Response object
            & if other errors come then fetch() api function still give Response object  
            & ok -> property doesn't catch/handle the network error 💡💡💡

        const URL = "https://jsonplaceholder.typicode.com/users/20"

        async function doStuff() {
            try {
                const response = await fetch(URL)
                if (response.ok) {
                    const user = await response.json()
                    console.log(user)
                } else {
                    const user = await response.json()
                    console.log(user)
                }
            
            } catch (error) {
                console.error(error);
            } 
        }

        doStuff()

        // output : 
!["fetch() api function"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/61-fetch/lecture-61-2-fetch.JPG "fetch() api function")

## said by kyle 🔥

    - so generally when we're fetching from an API 
        or fetching data from an URL 

    - then we really not to worry too much 
        about the catch() method of fetch() function promise 
        because those errors only happen in those situation or edge cases
    - but it's a good practice to always catch/handle the errors 
        properly by using catch() method of promise 
        or catch() {} block of error handling ✔️ 

## example - catching/handling only other errors by using ok -> property of Response object ✅

    const URL = "https://jsonplaceholder.typicode.com/users/20"

    async function doStuff() {
        try {
            const response = await fetch(URL)
            if (response.ok) {
                const user = await response.json()
                console.log(user)
            } else {
                // const user = await response.json()
                // console.log(user)
                console.log("FAILURE") 
            }
        
        } catch (error) {
            console.error(error);
        } 
    }

    doStuff()

    // output : 
!["fetch() api function"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/61-fetch/lecture-61-6-fetch.JPG "fetch() api function")

    - this line executed i.e console.log("FAILURE")
        because we try to access wrong user ✔

    - console.error() 

## example - catching/handling only network error by using catch() { } block of promise ✅

    NOTE 
        - when there is a network error
            then fetch() api function will failed to give Response object
            & directly control of code will go to catch(){} block
            to print/handle/catch the network error properly

    eg : 
        html code
        ---------
        <button>click to make request</button>

        js code 
        -------
        const btn = document.querySelector("button")

        const URL = "https://jsonplaceholder.typicode.com/users/20"

        async function doStuff() {
            try {
                const response = await fetch(URL)
                if (response.ok) {
                    const user = await response.json()
                    console.log(user)
                } else {
                    console.log("failure");
                }
            
            } catch (error) {
                console.error(error); // to show standard error
                console.error("error"); // to show custom error 
            } 
        }

        btn.addEventListener('click' , doStuff)

        - now go to the network tab & select the offline

        // output : 
!["fetch() api function"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/61-fetch/lecture-61-5-fetch.JPG "fetch() api function")

        - now here we got the edge case error i.e network error inside catch() {} block
            because we're not connected to the internet
        - so that's why fetch() api function failed to give a Response object
            that's why directly control goes inside catch() {} block 
        - so the fetch data from URL or api then we need to be in online mode ✔️

    said by kyle
    ------------

        - but really this is not something that we need 
            to worry about it very often

        - important thing is if we're fetching data 
            & when we get other errors like 404 error , 500 error ,etc
            except network error from the server
        - then fetch() api function still give a response
            because we were connected to the internet 💡💡💡

        - fetch() api function will only fail to give a response 
            when there is a network error 
        - & due to getting network error , then control of code 
            directly go to that catch() {} block to print/handle/catch 
            that network error properly 💡💡💡  

    NOTE : 
        - whatever the API allow facilities to do GET , etc stuff 
            & different APIs would have different facilities to do same thing  
            & that's totally depends on author of that API ✔️
        
## different HTTP request methods ✅

    GET - used to get data from the server to client
        eg : insta post , food items , stuff we seen on amazon , etc
    POST - used to send data from the client to server 
        eg : gmail login or login on any website , file upload , etc
    PUT - used to update the data in a database
    DELETE - use to delete the data in a database 

    - each HTTP request methods used to for different work ✔️

## sending data to the server by using POST request 🔥

    - to use HTTP request methods with fetch() api function 
        then we need to use the second argument of fetch() api function
        i.e header (second argument also know as params or parameter) 💡💡💡 

    STEP 1 eg : giving second argument of fetch() api function

        const URL = "https://jsonplaceholder.typicode.com/1'

        async function doStuff() {
            const response = await fetch(URL , { })
            const user = await response.json()

            console.log(user)
        }

        doStuff()

        - now inside that empty object (second argument of fetch() function)
            we can give keys & their values to modify the request 💡💡

        - now to send the data to the server then we need to use POST HTTP request method i.e
            method -> as a key & POST -> as a value 💡💡💡
            inside that empty object

    STEP 2 eg : setting up the POST method to send the data to the server ✅

        async function doStuff() {
            const response = await fetch(URL , { 
                method : 'POST'
            })
            const user = await response.json()

            console.log(user)
        }

        doStuff()

        - here value of method -> key all should be in capital letters 💡💡💡 

    STEP 3 eg : changing the URL

        const URL = "https://jsonplaceholder.typicode.com/posts"

        async function doStuff() {
            const response = await fetch(URL , { 
                method : 'POST'
            })
            const post1 = await response.json()

            console.log(post1)
        }

        doStuff()

        - here we we want to send data on this API URL - https://jsonplaceholder.typicode.com/posts
            by using POST https request method 

        // output : {id: 101}

        - here we got id & it's value 
            but we didn't got any information
        - because we're just telling through that POST request method 
            that we're sending data 💡💡💡
        - but actually we didn't send any data

        - so to send data with our POST request method 
            we need to use body -> key inside that empty object
        - body -> key used to send data to the server 💡💡💡

    STEP 3 eg : defining body -> key with POST request method to send data on the server ✅

        const URL = "https://jsonplaceholder.typicode.com/posts"

        async function doStuff() {
            const response = await fetch(URL , { 
                method : 'POST' , 
                body : {
                    title : "new Post 2022"
                }
            })
            const post1 = await response.json()

            console.log(post1)
        }

        doStuff()

        - here we gave title -> key & it's value of our new post

        // output : {id: 101}

        - here still we didn't get the data i.e title -> key & it's value 
            because value of body -> key always should be inside a string 💡💡💡

        - so use JSON.stringify() method or us double/single quotes
            to convert value/data of body -> key 
            before sending data on the server 💡💡💡

    STEP 4 eg : converting data/value of body -> key from object into string type ✅

        const URL = "https://jsonplaceholder.typicode.com/posts"

        async function doStuff() {
            const response = await fetch(URL , { 
                method : 'POST' , 
                body : JSON.stringify({
                    title : "new Post 2022"
                })
            })
            const post1 = await response.json()

            console.log(post1)
        }

        doStuff() 

        // output : {id: 101}

        - still we didn't get our title -> key & it's value 
            because we need to pass/give a one final thing 
            i.e headers -> key & it takes object value 💡💡💡

        - headers -> key means it tells the server that what our data looks like 💡💡💡 

    STEP 5 eg : giving/defining headers -> key before body -> key ✅

        const URL = "https://jsonplaceholder.typicode.com/posts"

        async function doStuff() {
            const response = await fetch(URL , { 
                method : 'POST' , 
                headers : {
                    "Content-Type" : "application/json"
                } ,
                body : JSON.stringify({
                    title : "new Post"
                })
            })
            const post1 = await response.json()

            console.log(post1)
        }

        doStuff() 

        // output : {title: 'new Post', id: 101}

        - now we got our posted data with that new id

## challenge time - timeline 18:29

    ques : 
        - go to this API URL - https://jsonplaceholder.typicode.com/
        - now go to comments of post id 1 -> /comments?postId=1

    - now do a fetch/get all the comments of post id 1 
        through based on promise or async await 
        & print them all

    Ans - 
        const URL = "https://jsonplaceholder.typicode.com/comments?postId=1"

        fetch(URL).then(response => {
            return response.json()
        }).then(comments => {
            console.log(comments.map(comment => comment.body))
        }).catch(error => {
            console.error(error);
        })

        // output : (5) [{…}, {…}, {…}, {…}, {…}]

## Axios library Vs fetch api of JS

- we can either use any one of them <br> 
    but inbuild fetch api in js is better than axios library ✔️✔️

## ----------------------- Extra Notes of fetch() api function -----------------------

### check these videos + blogs

  - https://www.youtube.com/watch?v=9YNGAxXGJzM&ab_channel=YahooBaba 👍
  - https://www.youtube.com/watch?v=a8tsXX6nvw4&ab_channel=GeekyShows 👍
  - https://www.youtube.com/watch?v=38uPRscJXfo&ab_channel=CodeWithHarry
  - https://www.youtube.com/watch?v=TojSXOuGUW4&ab_channel=ThapaTechnical
  - https://www.youtube.com/watch?v=VlwD8-u5QME&ab_channel=CoderDost
  - https://www.youtube.com/watch?v=6o1sHf8Dk6o&ab_channel=TechBowl
  - https://www.youtube.com/watch?v=LRF8hKJdE4s&ab_channel=CODERSNEVERQUIT
  - https://devdojo.com/smpnjn/how-fetch-works-in-javascript

## methods related to JSON object ✅

    - json()
        - used to convert JSON data from readable stream format 
            to actual JS array or object type 💡💡💡
        - this method used when we're fetching through fetch() api function ✔ 
    
    - JSON.text()  
        - used when we have data in the form text
    - JSON.parse() 
        - most important method of JSON object
        - used when we're dealing with fetch() api function & browser storage , etc
        - used to convert JSON data from string type to actual JS object or array type 💡💡💡
    - JSON.stringify() 
        - most important method of JSON object 
        - used when we're dealing with fetch() api function & browser storage , etc
        - used to convert JSON data from JS object or array type to string type 💡💡💡

    - most of the time we use 
        JSON.parse() , JSON.stringify() methods of JSON object 
        and json() method on response object 💡💡💡

    - "JSON" word should be in capital letters while using parse() & stringify methods
        because JSON is a object & class also     

### Notes - fetch() api function (by GeekyShows) ✅

    - most of the time data on the API will be 
        in the JSON format ✔ 

    -> only getting/fetching data from an API/server/database ✅

        eg : 
            function getJokes() {
                const setHeader = {
                  method : "GET" , // optional to give GET https request method  
                  headers : {
                    Accept : "application/json"
                  } 
                }

                fetch("https://icanhazdadjoke.com" , setHeader).then((response) => {
                  return response.json()
                }).then((data) => {
                  console.log(data.joke)
                }).catch((error) => {
                  console.error(error)
                })
            }

            getJokes()

        - firstly we made setHeader -> variable to put headers -> key
            separately instead of putting directly inside fetch() api function 
            as second argument 
        - due to for readability of code 💡💡💡

        NOTE : about only getting data from the server/api/database ✅

            - important note 🔥

            -> when & when not to set/give headers -> key when we're getting data from the API , etc 🖐
                
                - most of the time we get data from the API , etc
                    & we don't need to use second argument of fetch() api function 
                    to set the headers -> key & it's value 

                - but here in this example we have to use 
                    second argument of fetch() api function to set the headers -> key
                - because if we don't use set/give that headers -> key then 
                    when we send the request then 
                    we'll get HTML code data inside body -> key which we don't want 💡💡💡
                - that's why if this scenario comes then we need to 
                    set/give the headers -> key  

            -> about arguments of fetch() api function 🖐

                - takes two arguments 
                    first - a API URL (inside double quotes that we want to fetch) 
                    second - header (second argument also know as params or parameter) 💡💡💡

                - we use second argument of fetch() api function 
                    when we want to get the data from that api , etc
                    or when we want to send the data on that Api/server , etc
                    or in both scenario 💡💡
                
                - second argument of fetch() api function always takes only a object 💡💡💡
                    in order to get or send the data on that api/server , etc

                - when if we're only getting/fetching data from the API/server/database
                    then inside that object (which is a second argument of fetch() api function)
                    we define two things - 💡💡💡
                    first - GET http request method 
                            - which is optional to give because fetch() api itself means 
                              we're getting/fetching data  
                            - so no need to define i.e method : "GET"

                    second - headers -> key 
                                - put "s" letter at the end with "headers" key while setting the header
                                - headers -> key takes always a object value 
                                    & inside that object value we give -> Accept : "application/json"
                                - here A letter of "Accept" key should be capital 
                                - this line means i.e -> Accept : "application/json"
                                    means we want data in the JSON format from that API/etc

    -> only sending data to an API/server/database ✅

        eg : 
            const URL = "https://jsonplaceholder.typicode.com/posts"

            async function doStuff() {
                const response = await fetch(URL , { 
                    method : 'POST' , 
                    headers : {
                        "Content-Type" : "application/json"
                    } ,
                    body : JSON.stringify({
                        title : "new Post"
                    })
                })
                const post1 = await response.json()

                console.log(post1)
            }

            doStuff() 

            NOTE : about a empty object (which is a second argument of fetch() api function) ✅

                - important note 🔥

                - here we're only sending data (not getting/fetching data)
                    so we have to use only a empty object as a second argument 
                    of fetch() api function 💡💡💡

                - after that inside that empty object, we need to define POST http request method 
                    because POST -> request methods used to send the data 
                    on the server/API/etc 💡💡💡

                - now we have to define "Content-Type" : "application/json"
                    inside a empty object value of headers -> key
                    because when we're only sending data to the API/etc 
                    then we use "Content-Type" -> key
                - but if we're getting/fetching data from the API/etc 
                    then we use Accept -> key 💡💡💡
                - & here we use "Content-Type" -> key inside double quotes 
                    because we can't define a variable with hyphen sign 
                - & "C" & "T" letters of "Content-Type" -> key should be in capital ✔  

                - body -> is a key used only when we want to send data to the server
                    it takes a empty object as a value 
                - & inside that empty object value of body -> key
                    we define our data in the form of keys & it's values that we want to send 
                    but which keys & it's values we need to give that depends on that API 💡💡💡
                - & whatever data we're sending on the server through body -> key
                    then empty object value of body -> key should always be send in string type
                    without string type we can't send data on the server/API/etc 💡💡💡
                - so either use JSON.stringify or double/single quotes 
            
            NOTE : about those three keys inside that empty object (second argument of fetch() api) ✅

                - whenever we're only sending data to the server
                    then these 3 keys & it's values should be defined
                    inside that empty object (which is a second argument of fetch() api function) 💡💡💡

                - method : "POST" 
                    means we're sending data to the server/API/etc

                - & then that headers -> key 
                    means we want to send data in the form JSON format

                - body -> key 
                    means we're sending these data to the server

            NOTE : getting data from the server/API/etc

                - this note is for when we want to convert data from stringify to object or array type

                - so if we're only getting data from the server/API/etc
                    & that data is in the form of string type
                    then use JSON.parse() method 💡💡💡

                - & if we're getting data through fetch() api function 
                    & that response is in the string type
                    then use json() method to convert 
                    that data from string type to actual JS object or array type 💡💡💡

## discussion page 

!["fetch() api function"](../../all-chats-pics-of-lectures/1-beginner-JS-course-chats-pics/61-fetch.png "fetch() api function")

