
# OOPS

    - object oriented programming
    
## NOTE 

    - we'll focus on more objects rather than on class topic
      - because now reactjs says itself as functional components
      - and reactjs gradually removing class components
      - there is no guarantee

    - because mostly people use hooks , redux , functional component
        using in reactjs
    - so it will be better that focus more on objects , functional programming
        rather than on classes

## topic

    -> what is object literals
    -> what is "this" keyword in objects

## what is object literals

    - very important 🔥
    - it's simple a key:value pair data structure
    - storing variables and functions together in one container i.e object
        - eg : object is just like school bag to store multiple stuff 

        NOTE : 
            - we use array mostly if we have similar data
            - but if we want to store properties , functions , variables ,etc
                then we use objects 

    - to define objects we use curly braces
    - and to separate things inside an object we use comma
    - we use dot operator to acces object as a value , it's methods and properties , etc
    
    eg : creating function inside an object before es6 ✅

        let bioData = {
            myName : "Teen" , 
            myAge : 12 , 
            getData : function() {
                console.log(`My name is : ${myName} and age is : ${myAge}`)
            }
        }
        
        bioData.getData()

        - here error will come that myName and myAge is not defined
            so we need to use these keys with reference of the object
            like this

        let bioData = {
            myName : "Teen" , 
            myAge : 12 , 
            getData : function() {
                console.log(`My name is : ${bioData.myName} and age is : ${bioData.myAge}`)
            }
        }

        bioData.getData()

        NOTE : 
            - in ES6 we have new way that
                we can easily access key
            - but right to access key we need to refer it's object first
                then that key will come
            
    eg : creating function inside an object after es6 update ✅    

        - this example is important 🔥
        
        let bioData = {
            myName : "Teen" , 
            myAge : 12 , 
            getData : function() {
                console.log(`My name is : ${bioData.myName} and age is : ${bioData.myAge}`)
            }
        }

        - like here we don't need to use colon and function keyword
            to declare function inside an object
            like this

        let bioData = {
            myName : "Teen" , 
            myAge : 12 , 
            getData () {
                console.log(`My name is : ${bioData.myName} and age is : ${bioData.myAge}`)
            }
        }

    eg : an object as a value inside an object ✅

        let bioData = {
            myName : {
                realName : "Teen" , 
                channelName : "TEE"  
            } , 
            myAge : 12 , 
            getData : function() {
                console.log(`My name is : ${bioData.myName} and age is : ${bioData.myAge}`)
            }
        }

        console.log(bioData.myName.channelName)

        NOTE : 
            - here we can see that after value of channelName key
                we didn't put comma because channelName key is the last key


## "this" keyword inside an object

    - very important 🔥
    - "this" keyword as an object is that it contain the current context
        means in which scope we're using "this" keyword 
    - "this" keyword contain information of that particular thing 
        based on which scope/context we're using it
    - "this" keyword can have different values depending on where it is place/scope

    eg : using "this" keyword globally ✅

        console.log(this)
        // output : "this" keyword refer to the current context i.e window global object

        - as we know that window object is a global object
        - so here through using "this" keyword , we can access 
            objects , properties , methods , etc of window object
            eg : 
                console.log(this.alert("heoo"))

    eg : using "this" keyword inside a normal function ✅

        function callMe() {
            console.log(this)
        }

        callMe()

        // output - again current context of "this" keyword is window global object

        - here current context is not that function

    eg : creating a variable globally and using "this" keyword inside a normal function ✅

        let userName = "Teen"

        function printStuff() {
            console.log(this.userName)
        }

        printStuff()

        // output 
            - we're getting undefined because
                we're using let keyword to define a variable
                and let and const has their own scope

            - but if we use var keyword then we'll get output

    eg : using "this" keyword inside an object ✅

        - this example is very important 🔥

        const obj = {
            myAge : 12,
            myName() {
              console.log(this);
              console.log(this.myAge);
            }
        }

        obj.myName();

        // output - {myAge: 12, myName: ƒ} 12

        - because that object is our current context of "this" keyword  

        - so when we use "this" keyword inside an object
            then current context of "this" keyword become that object
            and that's why we can access properties and methods of that object
        - and window global object will no longer be current context of "this" keyword

    eg : using "this" keyword inside an arrow function ✅

        - "this" keyword doesn't work with arrow function
        - very important example 🔥

        eg : using "this" keyword inside arrow function which is inside an object 
            
            const obj = {
                myAge : 12,
                myName : () => {
                  console.log(this);
                }
            }
            
            obj.myName()

            // output : window object we'll get

            - so current context of "this" keyword will be window object
                because we're using "this" keyword inside arrow function

    eg : another example this" keyword inside a normal function which is inside an object ✅
        
        let bioData = {
            myName : {
                realName : "Teen" , 
                currentAccount : "saving AC"
            } ,
            myAge : 12 ,  
            getData() {
                console.log(`user current account is : ${this.myName.currentAccount}`)
                console.log(`user's age is : ${this.myAge}`)
            }
        }

        bioData.getData()

        - here current context of "this" keyword is bioData object

        NOTE : 
            - to access properties or methods inside an object only
                then use "this" keyword or through that object name
            - and to access properties or methods outside an object 
                then use that object name only 
            - if you use "this" keyword to access properties or methods of an object
                outside an object then error will come  
            - untill and unless that methods and properties are not a part of 
                window global object

## NOTE

    - in OOPS , "this" keyword is used most of the time
        inside constructor
    - and even reactjs says that focus on function component
        instead of class component 
    - that's why dont's do class topic 
        but if want to know about class , constructor , extend and super keyword ,etc 
            then go to this link
            https://www.youtube.com/watch?v=TScmRTAWi5Q&ab_channel=ThapaTechnical

    - class topic is not useful because 
        web developers specially front-end don't use
        and it's not required and no need when you do front-end

    - but if you're using java , etc then might/must be needed 
    - and may be this depends on projects also

    - if you learn typescript/TS then might be we need class , etc

    - we can put keys of an object inside double quotes
        like this

        eg : putting keys of an object inside double quotes

            let myObj = {
                "firstName" : "teen" ,
                "lastName" : "Sky" ,
                "age" : 12 ,
            }
            // OR 
            let myObj = {
                firstName : "teen" ,
                lastName : "Sky" ,
                age : 12 ,
            }

            - but use of double quotes will be necessary
                when you have key like this -> college-name 
                means with hypen in the middle of key
                and that's we can't create key in JS without putting 
                inside double quotes
                so like this

        eg : key of an object with hypen

            let myObj = {
                firstName : "teen" ,
                lastName : "Sky" ,
                age : 12 ,
                "college-name" : "DAV"
            } 

            - so here to access those keys which are in hypen
                then use square bracket like this

            console.log(myObj["college-name"])
            // output : DAV

            - just like we do in array 

            NOTE : 
                - if you do this without putting double quotes 
                    outside those keys which are in hypen like this
                        console.log(myObj[college-name])
                    then error will come

    - we can put array inside an array 
        or object inside an array as a value
    - and we can also put array inside and object
        or object inside an object as a value


