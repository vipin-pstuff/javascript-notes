# Advance JS Part - 1

## topics

    - function currying
    - callback hell
    - Ajax call using XMLHTTPrequest (not important)
    - JSON 🔥🔥
    - Promises 🔥🔥
    - Async-Await 🔥🔥
    - fetch Api 🔥🔥
    - Error handling in JS 🔥🔥

## NOTE 

    - JSON , promises , fetch api , async await and error handling 
        are related to each other

    - callback of setTimeout , etc 
        and Promises , fetch api , async await 
        and async await with error handing works asynchronously

    - Promise , fetch api , async await - these are all returns a promise 

## Projects

    1 - card using XMLHttpRequest
    2 - jokes using modern topics

## function currying

    eg :
        sum(5)(3)(8)
            and 
        sum(5,3,8)

        - here both is different than each other
        - so in first one 
            we're passing a single different argument and 
            each arugment is itself is a function
        - but in second one
            we're passing three different argument
            inside a function while calling

    eg : of function currying STEP-1 ✅

        function sum(num1) {
            console.log(num1)
        } 

        sum(5)(3)(8)

        // output : 5

        - but if think that after passing a parameter
            insde this function only then you'll get that 3 number also
            like this
            
            function sum(num1 ,num2) {
                console.log(num1)
            } 

            sum(5)(3)(8) 

            // output : 5 will be printed
                and then error come

            NOTE : 
                - so this can't be done 
                - because (3) -> this is different function
            
            NOTE : 
                - here sum(5)(3)(8)
                - sum(5) is returning (3)
                    and these two sum(5)(3) function is returning (8)

    eg : of function currying STEP-2 ✅
        
        function sum(num1) {
            // console.log(num1)

            return function(num2) {
                console.log(num1 , num2)
            }
        } 

        sum(5)(3)(8)
        // output : 5 3

    eg : of function currying STEP-3 ✅
        
        function sum(num1) {
            // console.log(num1)

            return function(num2) {
                // console.log(num1 , num2)

                return function(num3) {
                    console.log(num1 + num2 + num3)
                }
            }
        } 
        // OR
        const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3)

        sum(5)(3)(8)
        // output : 16

    - function currying means
        when a function , instead of taking all arguments at one time , 
        takes the first argument and return a new function that takes the second argument
        and returns a new function that takes the third argument and so on
        until all arguments have been fulfilled


## callback hell

    eg :    
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

    - in callback hell , 
        we pass a function as an arugment inside another function 
        and this thing is done too much deep that things get complicated

    - so through this concept we can't do complex stuff
        due to difficulty 

    NOTE : due to this problem , a concept come i.e promises 


## Ajax call using XMLHTTPrequest

    - now mostly people use fetch api
        instead of using XMLHTTPrequest(XHR)

    - but few people also use this XMLHTTPrequest
        because it's browser support and compatibility is great
    - and in this XMLHTTPrequest , 
        ther are 2 or 3 features have
    - but might be these features doesn't have inside fetch api
    - but fetch api is very simple to use and great

    -> API ✅ 
        - is application programming interface
        - now due to api two things communicate with each other
        - and data can be transfer or get also 

        eg : 
            - like we want to take tickets of airplane
            - and you go to makemytrip or etc ..
            - then how they're getting data that
                on which time which airplane go
            - and suppose indigo is a airline
                and for data , indigo say to makemytrip that
                give us 1crore per month and indigo will say that
                we'll give our API to use our data
            
            - so this is a way they make money
                and people are making lakh and crore by jsut
                building an API 


    -> XMLHTTPrequest (XHR) ✅
        - XHR objects used to interact with servers
        - we can retrieve data from a URL without having to do 
            a full page refresh
        - this enables a Web page to update just part of a page
            without disrupting what the user is doing
        - XHR is used heavily  in AJAX programming
            - AJAX is Asynchronous JavaScript And XML]
    
    -> AJAX programming ✅
        - means if we want to retrieve data then
            we don't need to refresh the page after 
            a particular time you'll get data Asynchronously
        - used to make dynamic webpages using a technology i.e XHR
        
        eg : 
            whenever you scroll down in instagram 
            then on the spot we will get data without 
            refreshing the whole page

    eg : card project based using XMLHttpRequest + API ✅

## Project 1 - card using XMLHttpRequest

![card project using XMLHttpRequest with API](card-project.PNG)

    html
    ----
        <div class="container"> 
            <div class="inner-container"></div>
        </div>

    JS                                  
    --
        const innerContainer = document.querySelector(".inner-container")

        const request = new XMLHttpRequest()
        request.open("GET" , "https://restcountries.com/v3.1/name/india")
        request.send()

        // get the response
        request.addEventListener('load' , function() {
            const data = JSON.parse(this.responseText)
            const newData = data[0]

            const htmlCode = `
                <div class="country">
                    <div class="flag">
                        <img src="${newData.flags.png}" alt="flag">
                    </div>
                    <div class="about">
                        <div class="country-name">
                            <h6>${newData.name.common}</h6>
                        </div>
                        <div class="country-capital">
                            <h6>${newData.capital[0]}</h6>  
                        </div>
                        <div class="country-region">
                            <h6>${newData.region}</h6>
                        </div>
                    </div>
                    </div>
                </div> 
            `

            innerContainer.insertAdjacentHTML("afterbegin" , htmlCode)
        })

    STEP-1 : 
        - we created a instance/object of XMLHttpRequest class
        - then open() method takes two arguments
            - first is type of request we need
                - so we need GET request because we need data
            - second is URL
                - which which URL we want to send request

    STEP-2 :
        - then we send request using send() method of XMLHttpRequest class

    STEP-3 : 
        - now we need to get response so we use 
            load -> event means whenever page refresh 
            then we'll the data

    STEP-4 : 
        - now here we're using this -> keyword
            with anonymous function then 
            - means current context of this -> keyword would be
                that thing on which click event we put
                i.e response object

        - now we are getting JSON data in string form
            but if we want to play with that JSON data
            then we need to convert it into string type to object type

        - there are two method to convert JSON data from one datatype to another
            - JSON.parse() ✅ 
            - JSON.stringify() ✅

        -> JSON.parse() 

            - use this method when you want to convert JSON data
                from string type to object 
            
        -> JSON.stringify() 

            - this method used to convert JSON data from object to string type

    STEP-5 : 
        - so to add html code dynamically then we use template string

        - now we want to add that html code 
            inside a div

        - so we have two ways to insert html code inside HTML document      
          - first way use innerHTML property
          - second way use  insertAdjacentHTML() method

        eg : 
            innerContainer.innerHTML= htmlCode
            // OR
            innerContainer.insertAdjacentHTML("afterbegin" , htmlCode)

        
        -> insertAdjacentHTML() method ✅ timeline : 13:42:37

            - it's syntax is 
                element.insertAdjacentHTML(position, text);

            - first position argument values are : 
              - 'beforebegin' - means Before the element itself
              - 'afterbegin' - means Just inside the element, before its first child
              - 'beforeend' - means Just inside the element, after its last child
              - 'afterend' - means After the element itself.

                Note: 
                    - The beforebegin and afterend positions 
                        work only if the node is in the DOM tree and has a parent element

            - second argument is text
                - means string to be parsed as HTML or XML
                    and inserted into the tree/DOM/html document

            - Visualization of position names
                <!-- beforebegin -->
                <p>
                    <!-- afterbegin -->
                    foo
                    <!-- beforeend -->
                </p>
                <!-- afterend -->

    NOTE : 
        - in second project i.e jokes
        - and this project we'll use
            - async await
            - promises
            - error handling
            - fetch api

        - means all the modern advance topics
            we'll use in this project


## JSON

    - fullform : javacript object notation

    - is use to tansfer data from client to server 
        or to communicate from server also 
    - now we use JSON format for data but in past people use XML    
    - is much readable and useable than XML
    - is easy to parse into an object than XMl

    - difference b/w JSON & object ✅
        - in JSON , our both keys and it's values are in double quotes always 
            - if you use single quotes for keys then error will come
        - but in object , putting keys in double quotes is optional 

    - in JSON , there are two methods which is used 90% 
        - JSON.stringify()
        - JSON.parse()

        -> JSON.stringify() ✅
            - used to convert JS object into JSON text
                and stores that JSON text in a string
            - so due to this JSON data will be in string type
            - and we'll get key and it's values inside double quotes

        -> JSON.parse() ✅
            -  use to convert JSON data into an object
            -  and we'll not get keys in double quotes of an object 

        NOTE : 
            - put JSON word in all capital 

    eg : of JSON with stringify() method ✅

        let myObj = {
            name : "teen" ,
            age : 12 ,
            rollNum : 24 ,
            degree : "BCA"
        }

        - now we want to convert this object data into JSON data
        - so we use stringify() method of JSON object

        let jsonData = JSON.stringify(myObj)
        console.log(jsonData)
        console.log(typeof jsonData)

        // output : {"name":"teen","age":12,"rollNum":24,"degree":"BCA"}
                    string

        - here we can see that we're getting key and it's values 
            inside double quotes
            
    eg : of JSON with parse() method ✅

        let myData = '{"name":"teen","age":12,"rollNum":24,"degree":"BCA"}'

        let myObj = JSON.parse(myData)
        console.log(myObj)    

        // output : {name: 'teen', age: 12, rollNum: 24, degree: 'BCA'}

        - here we can see that our all keys are not inside double quotes

        NOTE : 
            - JSON data must be inside double or single quotes
                to convert into string into an object 
                otherwise error come
            - but when GET data from an API then that data is already
                in string type 

        NOTE : putting comma after last item of JSON 🔥

            - if we put comma after last item inside of JSON
                then error will come
            - but in object we can put

        - to know more about JSON watch this
            https://www.youtube.com/watch?v=whNFPBEI-wM&ab_channel=CodeWithHarry


## Promises

    - reference : 
            https://www.youtube.com/watch?v=2IPw-mWe10U&ab_channel=CodeWithHarry
            https://www.youtube.com/watch?v=xGBhmi4wwMI&ab_channel=ThapaTechnical

    - to save from callback hell that's why promises was introduced
        that's why we use promises
    - Promise is better than callback hell 
        because we can track things easily 
    - use to handle multiple asynchronous operations 
    - and callback can create callback hell leading to unmanageable code
    - determine what happens after the events has happend

    - 3 states/conditions/stages of promises
        - first is ongoing/pending
        - second is fullfilled/resolve 
          //OR
        - third is rejected 

        eg : 
            we'll call you tomorrow at 10am

        -> ongoing/pending state ✅

            - means here that promise is in pending or just started stage
                right now promise neither fullfilled nor rejected
            // OR
            - initial state, neither fulfilled nor rejected.

        -> fullfilled state ✅

            - means we got that stuff successfully without any error

        -> rejected state ✅
            
            - means we didn't got that stuff due to error
                like internet error , server error

        - these are three state of promises 
            but fullfilled and rejected we'll listen a lot in promises

    - two ways to use promises
      - first way is using promise constructor
      - second way is using promise by returning it from inside a function

    -> using promise as a constructor ✅

        NOTE : 📝
            const data = new Promise()

            - whenever we create an object of a Promise constructor
                then we need to define a callback function as an argument inside 
                Promise() constructor
            - and that callback function is known as executor
            - and this executor callback function takes two argument
                - first is resolve ✅
                - second is reject ✅
            - and here these two argument is a function 
                that we're gonna use

            - use resolve() -> when promise gets fullfilled
            - use reject() -> when promise gets rejected

            - whenever we create an object of a Promise class then that object has two methods
                - first is then() method ✅
                - second is catch() method ✅
            - then() method is related to resolve() function
                and catch() method is related to reject() function
                - so we use then() method to show output of resolve() function 
                    means Promise is fullfilled
                - and we use catch() method to show output of reject() function 
                    means Promise is rejected due to error

            - means then() method will be called when we call resolve() function
                and catch() method will be called when we call reject() function 

            - after creating Promise means we're producing Promise
                and when we use then() and catch() method to show output 
                means we're consuming/receiving/getting the Promise

            - then() method takes a callback function as a argument 
                and thant callback function takes a parameter 
                for argument of resolve() function 
                when we pass an argument inside resolve() function
            - and same with catch() method and reject() function

        eg : of if Promise gets resolve ✅
            // here we're producing promise 
            const data = new Promise((resolve , reject) => {
                setTimeout(() => {
                    let message = "hello world" 
                    resolve(message)
                } , 1000)
            })

            // here we're consuming
            data.then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })

            // output : Promise {<pending>}
                    then we'll get - hello world

            NOTE :
                - 90% we consume the promise 
                    we don't create the promise  
                - we create the promise in rare cases
                - means when we use fetch() function then
                    it will return a promise so that promise we'll consume

        eg : of Promise if it gets reject ✅            
            const data = new Promise((resolve , reject) => {
                setTimeout(() => {
                    let message = "hello world" 
                    reject("error while communicating")
                } , 1000)
            })

            data.then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })

            // output : Promise {<pending>}
                    then we'll get - error while communicating

        eg : of both state of promise ✅
            
            const data = new Promise((resolve , reject) => {
                setTimeout(() => {
                    let arr = ["apple" , "banana" , "mango" , "pineapple"]
                    let sizeOfArr = arr.length

                    if (sizeOfArr === 4) {
                        resolve("we won")
                    } else {
                        reject("just keep learning")
                    }
                } , 1000)
            })

            data.then((response) => {
                console.log(response)
            }).catch((error) => {
                //console.log(error)
                console.error(error)
            })

    -> using promise by returning it from inside a function ✅

        - here we're consider a particular task as a promise

        eg : 
            // making two different promise for different work

            // here using Promise constructor
            // first Promise is for books
            const booksData = new Promise((resolve , reject) => {
                
                setTimeout(() => {
                    let favBooks = ["universe" , "Rich dad Poor Dad"]
                    let totalBooks = favBooks.length

                    if (totalBooks === 2) {
                        resolve(favBooks[1])
                    } else {
                        reject("Communicating Error")
                    }
                } , 1000)

            })

            // here using Promise as an object
            // second promise is for bioData of a user
            const getBioData = (userFavBook) => {
                return new Promise((resolve , reject) => {
                    setTimeout((userFavBook) => {
                        let bioData = {
                            name : "teen" ,
                            age : 12 ,
                            userDetails() {
                                return `user name is ${this.name} and age is ${this.age} and favbook is ${userFavBook}`
                            }
                        }
                        
                        if (bioData !== null) {
                            resolve(bioData.userDetails())
                        } else {
                            reject("communication error")
                        }
                    } , 1000 , userFavBook)
                })
            }

            - setTimeout() takes 3rd argument also 
                here setTimeout() taking data which a item of an array
            - so here setTimeout() of 2nd Promise is taking data as a 3rd argument
                means passing response as a argument inside getBioData() function
                then getBioData is take that argument and then we give that parameter
                as a argument inside setTimeout() again and then 
                callback function of setTimeout() taking that argument

            booksData.then((response) => {
                console.log(response)
                getBioData(response).then((result) => {
                    console.log(result)
                })
            }).catch((errorMessage) => {
                console.error(errorMessage)
            })
            // OR
            booksData.then((response) => {
                console.log(response)
                return getBioData(response)
            }).then((result) => {
                    console.log(result)
            }).catch((errorMessage) => {
                console.error(errorMessage)
            })

            - here for simple code we're creating Promise
                but know what is happening but in callback hell
                we can't trace that what is happening 
            
            - here Promise return the resolve and after that 
                first then() method will return the userDetails and 
                that userDetails will be shown by second then() method

            NOTE : 📝
                - don't give semi colon after then() method 
                    because we're using catch() method also 
                    if we didn't define the catch() method
                    then we can use

                - here we can see that we're putting again then() method 
                    2 times to show the output
                    - but again if we create another Promise then for this 
                        we need to use then() method again
                    - so this means Promise chaining
                - there is no problem coming when we producing a Promise
                    but while consuming then we need to use then() method again & again
                    and to remove this problem we use async await


## async await

    - reference :
            https://www.youtube.com/watch?v=AyJq1RRaY_k&ab_channel=CodeWithHarry
            https://www.youtube.com/watch?v=hFLXE5-JCcs&ab_channel=ThapaTechnical

    - very very important 🔥🔥 

    - is also know as promise async await
    - it returns a promise asynchronously
    - we use async await promise instead of normal Promise
        because async await is easy to use and simple than normal Promise

    - we use async await with promises to fetch/get/consume the data from the Promise()
        - don't use async await to create the promise that's wrong 

    - async and await are both keywords
        - async - means asynchronously
        - await - means wait for the data from Promise 

    - we can use await keyword only when we're working with async function
    
    NOTE : 
        - so in normal promise there is no problem with producing a Promise
            when problem comes when we receiving/consuming the promise because 
            for consuming/receiving a promise we're using then() method again & again\
        - due to this problem comes in readability
            so that's why we use async await

    - so to use async keyword then put async keyword at the starting of the 
        function keyword in normal function 

        eg : how to define async keyword with normal function ✅

            async function getData() {

            }

            getData()

    - but if we're using arrow function then put async keyword before the
        parantheses for argument

        eg : using async keyword with arrow function ✅

            const getData = async () => {

            }

            getData()

    NOTE : most important about using async keyword 🔥
        - after defining async keyword before a function keyword in normal function
            or in arrow function 
        - then this means that function always return a promise
        - means the async keyword is added to functions to tell them
            to return a promise rather than directly returning the value

    eg : previous example of Promise() ✅
        const booksData = new Promise((resolve , reject) => {
            setTimeout(() => {
                let favBooks = ["universe" , "Rich dad Poor Dad"]
                let totalBooks = favBooks.length

                if (totalBooks === 2) {
                    resolve(favBooks[1])
                } else {
                    reject("Communicating Error")
                }
            } , 1000)
        })

        // here using Promise as an object
        // second promise is for bioData of a user
        const getBioData = (userFavBook) => {
            return new Promise((resolve , reject) => {
                setTimeout((userFavBook) => {
                    let bioData = {
                        name : "teen" ,
                        age : 12 ,
                        userDetails() {
                            return `user name is ${this.name} and age is ${this.age} and favbook is ${userFavBook}`
                        }
                    }
                    
                    if (bioData !== null) {
                        resolve(bioData.userDetails())
                    } else {
                        reject("communication error")
                    }
                } , 1000 , userFavBook)
            })
        }

        booksData.then((response) => {
            console.log(response)
            return getBioData(response)
        }).then((result) => {
                console.log(result)
        }).catch((errorMessage) => {
            console.error(errorMessage)
        })

        - so here we're consuming the data using then() and catch() method
            and now we'll use async await to consume the data

    eg : using async await promise to consume data from 1st normal Promise() ✅

        const booksData = new Promise((resolve , reject) => {
            setTimeout(() => {
                let favBooks = ["universe" , "Rich dad Poor Dad"]
                let totalBooks = favBooks.length

                if (totalBooks === 2) {
                    resolve(favBooks[1])
                } else {
                    reject("Communicating Error")
                }
            } , 1000)
        })

        // using async await to consume the data from first promise
        async function getData() {
            const response = await booksData
            console.log(response)
        } 

        getData()

        - so using async await promise to get/consume the data
            instead of using then() and catch() method
            - here we're using await keyword to tell that whatever data is 
                getting asynchronously from booksData object so wait for that data
            - and we stored that data inside a variable i.e response
                which we're getting from booksData Promise after resolving  
                using resolve() function

        - now in first example if you see that one promise 
            is dependent on second Promise and we use return keyword 
            with getBioData inside first then() method for 2nd promise
        - but if in async await we don't need to do this for 2nd promise

    eg : using async await promise to consume data from 1st and 2nd Promise() ✅ 
        
        // 1st Promise
        const booksData = new Promise((resolve , reject) => {
            setTimeout(() => {
                let favBooks = ["universe" , "Rich dad Poor Dad"]
                let totalBooks = favBooks.length

                if (totalBooks === 2) {
                    resolve(favBooks[1])
                } else {
                    reject("Communicating Error")
                }
            } , 1000)
        })

        // 2nd promise
        const getBioData = (userFavBook) => {
            return new Promise((resolve , reject) => {
                setTimeout((userFavBook) => {
                    let bioData = {
                        name : "teen" ,
                        age : 12 ,
                        userDetails() {
                            return `user name is ${this.name} and age is ${this.age} and favbook is ${userFavBook}`
                        }
                    }
                    
                    if (bioData !== null) {
                        resolve(bioData.userDetails())
                    } else {
                        reject("communication error")
                    }
                } , 1000 , userFavBook)
            })
        }

        async function getData() {
            const response = await booksData 
            const dataOfSecondPromise = await getBioData(response)

            console.log(response)
            console.log(dataOfSecondPromise)
        }

        getData()

        - here we can see that we're consuming data from both the promises
            using async await 
        - and it's easy to ready also
        - and here we use await to tell both the promises i.e booksData and getBioData() 
            as soon as we get data we'll stored those data inside a variable
        - so we just need to use await to tell the Promise that wait for the data
            but in normal promise , we were using then() method again and again
            and each then() method dependent on each other

    eg : how to get data after returning data using return keyword inside async function ✅

        const booksData = new Promise((resolve , reject) => {
            setTimeout(() => {
                let favBooks = ["universe" , "Rich dad Poor Dad"]
                let totalBooks = favBooks.length

                if (totalBooks === 2) {
                    resolve(favBooks[1])
                } else {
                    reject("Communicating Error")
                }
            } , 1000)
        })

        const getBioData = (userFavBook) => {
            return new Promise((resolve , reject) => {
                setTimeout((userFavBook) => {
                    let bioData = {
                        name : "teen" ,
                        age : 12 ,
                        userDetails() {
                            return `user name is ${this.name} and age is ${this.age} and favbook is ${userFavBook}`
                        }
                    }
                    
                    if (bioData !== null) {
                        resolve(bioData.userDetails())
                    } else {
                        reject("communication error")
                    }
                } , 1000 , userFavBook)
            })
        } 

        async function getData() {
            const response = await booksData 
            const dataOfSecondPromise = await getBioData(response)     

            return dataOfSecondPromise
        }

        - here we're returning dataOfSecondPromise
            now to see the output then we use then() method on getData() function

        const stuff = getData().then((data) => {
            console.log(data)
        })

        NOTE : 
            - if we do console.log() the stuff variable then we don't get output 
                because the async function return the promise not return the value directly
                so that's why we use then() method on getData() async function
                to show the data

    - now what if we got an error then how do we can print it
        because in normal promise we have catch() method
        but how to show error in async await
    - so for this we use error handling
        but to see this topic we'll do fetch api


## fetch Api or fetch() method ✅

    - reference :
        https://www.youtube.com/watch?v=38uPRscJXfo&ab_channel=CodeWithHarry 
        https://www.youtube.com/watch?v=TojSXOuGUW4&ab_channel=ThapaTechnical        

    - fetch() is a alternative of XMLHttpRequest
    - fetch() method defined on the window object 
    - it also run asynchronously 
    - use to perform requests
    - it returns a Promise that we can use  
        to consume/retrieve/get the reponse of the request

    - fetch() method takes two argument 
        - first is API URL
        - second is header

        -> second argument of fetch() method

            - is also know as params or parameter

            eg : using POST request method
                async function postData() {
                    const URL = "https://jsonplaceholder.typicode.com/posts"
                    const data = `{"name":"Cool","salary":"123","age":"23"}`

                    let params = {
                        method : "post" , 
                        headers : {
                            "Content-Type" : "application/json"
                        } , 
                        body : data
                    }

                    const response = await fetch(URL , params)
                    const result = await response.json()

                    console.log(result)

                }

                postData()

                - here 'Content-Type' is important key 🔥
                    and this key should be written like this
                    C and T letters should be in capital
                - and in 'Accept' key , A letter should be capital 
                - and both keys have the value 90% will be 'application/json' 
                    and 10% might be the value will be something else 
                    according to situation that we need

                - whenever send data from client to server using POST request method
                    then we send JSON data in string type

                - there is a difference b/w 'Content-Type' and 'Accept' keys
                    - 'Content-Type' key will work in both client and server side   
                        either we're receiving from the server or sending data to the server
                        but mostly we use 'Accept' key to receive data from the server
                    - but if we're just working on client only then
                        'Accept' key is used not if we're working in server 

                - 'Content-Type' key will used when we're doing POST request 100%
                    but we can also use in GET request also
                - 'Accept' key will be used when we're doing GET request 

                - here headers or param are same and 
                    takes data inside as an object 
                    because this is way it takes inside curly

    - json() method used to convert the JSON format data into object type
        and text() method used to convert the object type data into JSON format 
        which is in string type

    eg : using fetch() method with then() and catch() method of normal Promise() ✅
          
        fetch("https://api.covid19api.com/summary").then((apiData) => {
            console.log(apiData)
        }).catch((error) => {
            console.error("communicating error")
        })

        - here fetch() method returns a Promise and to get/retrieve/consume 
            the data then we use then() method 

        // output : 
            - we'll get our ouput and when you open that response 
                then we'll see that there are many key value pair
            - and one of them is body: ReadableStream
                which is very important 🔥
            - so as we know that whatever we got data from APi
                that data is in the format of JSON i.e ReadableStream
                - so we want to convert that JSON data to object type
                    so that we can work with that data 
                
        - so we'll use json() method like this

    eg : converting json format data into object type ✅

        fetch("https://api.covid19api.com/summary").then((apiData) => {
            // console.log(apiData)
            return apiData.json()
        }).then((actualData) => {
            console.log(actualData)
        }).catch((error) => {
            console.error("communicating error")
        })

        - here fetch() method returning a promise 
          - so to see the output we use then() method
          - and again first then() method returning a promise
            so again we use then() method

        // output : now we'll got data in object type

    eg : getting/retriving/consuming data using fetch() with async await promise ✅

        async function getData() {
            const response = await fetch("https://api.covid19api.com/summary")
            const covidData = await response.json()

            console.log(covidData)
        }

        getData()

        - here we use await keyword two times because
            firstly fetch() method return the Promise and 
            fetch() method works asynchronously that's why we use await keyword
        - and then again response.json() also returns a Promise
            that's why we use await keyword 

    eg : using POST request method with fetch() method and async await promise ✅

        async function postData() {
            const URL = "https://reqres.in/api/users" 
            const data = '{"name":"Teen","job":"leader"}'

            let params = {
                method : "POST" , 
                headers : {
                    "Content-Type" : "application/json"
                } , 
                body : data
            }

            const response = await fetch(URL , params)
            const result = await response.json()

            console.log(result)

        }

        postData()

        // output : we'll posted our data in object type
            and we'll get output what we posted 


## error handling 

    - reference : 
        https://www.youtube.com/watch?v=fRv2ng_srrM&ab_channel=YahooBaba
        https://www.youtube.com/watch?v=BcAYvnsbmMQ&ab_channel=CodeWithHarry
        https://www.youtube.com/watch?v=A_ZwHY8xNNI&ab_channel=ThapaTechnical

    - used because in async await promise 
        we don't have any method to catch the error
        except we can get the output of resolve
    - that's why error handling comes

    - so we use try{}catch{} block for error handling

    eg : 
        const info = new Promise((resolve , reject) => {

            let infoValue = 12

            setTimeout(() => {
                if (infoValue === 123) {
                    resolve("we won")
                } else {
                    reject("communicating error")
                }
            } , 2000)
        })

        async function getData() {

            try {
                const response = await info()
                console.log(response)
            } catch(error) {
                console.error(error)
            }
        }

        getData()

        - so here we put all our code inside try block
            and for error we use catch() method block
            which takes one argument

## NOTE
    
    - request methods
        GET - used to get data from the server to client
            eg : insta post , food items , stuff we seen on amazon , etc
        POST - used to send data from the client to server 
	        eg : gmail login or login on any website , file upload , etc
        PUT - used to update data in database
        DELETE - use to delete the data in the database 

