
# ES2015 to ES2020 Part-2

    - ES6 / 2015
    - ES7 / 2016
    - ES8 / 2017

## topics which are left of object - timeline  11:17:09
    
    - go to this link and see all the updates
        https://flaviocopes.com/es2019/
    - go to this linkg for Es 2020
        https://www.freecodecamp.org/news/javascript-new-features-es2020/

    - ES6 / 2015
        - destructuring
        - object properties
        - rest and spread operators
    - ES7 / 2016
      - includes() method of array
      - exponentiation operator
    - ES8 / 2017
      - string padding
      - methods of objects
        - Object.values()
        - Object.entries()
      - async await -> most important 🔥
    - ES9 / 2018
      - rest and spread operator for objects
    - ES10 / 2019
      - methods of array
        - flat() and flatMap()
      - Object.fromEntries() method of object
      - methods of string
        - trimStart() and trimEnd()
    - ES11 / 2020
        - BigInt datatype
        - Nullish Coalescing or Nullish operator

## destructuring 

    - the destructuring assignment syntax is a JS expression
        that makes it possible to unpack values from arrays , properties
        from objects into distinct variables 
    - in destructuring , position/index number matters a lot 
    - two ways destructuring
      - array destructuring
      - object destructuring

    -> array destructuring ✅

        - to use this we use square brackets instead curly braces

        eg : traditional way to access individual items from an array 🤜

            const myBioData = ["Teen" , "Sky" , 26]

            let myFName = myBioData[0]
            let myLName = myBioData[1]
            let myAge = myBioData[2]

            - to get individual items from an array 
                we need to access through there index number
            - but what is we have mutiple values then we can't do same thing 
                and due to this code gets messed up

        eg : destructuring way to access individual items from an array 🤜 

            const myBioData = ["Teen" , "Sky" , 26]

            let [myFName , myLName , myAge] = myBioData

            - so here we can make variables inside an array
            - and each variables point to index number 
                means myFName contains 0(zero) element and so on 
            - that's why in destructuring position/index number matters a lot
	            means we can't access "Teen" value through myLName because 
	            right now "Teen" value contained by myFname

        eg : adding values inside an array using array destructuring 🤜

            const myBioData = ["Teen" , "Sky" , 26]

            let [userFName , userLName , userRollNum , userGender = "Male"] = myBioData

            console.log(userGender)

            NOTE : 
                - this example you'll see a lot of times specially in reactjs

        NOTE :
            - in array destructuring , don't put elements inside in a array in double quotes
	            like this

                const myBioData = ["Teen" , "Sky" , 26]
	            let ["myFName" , "myLName" , "myAge"] = myBioData
	
            - error will come 
            - same with object destructuring
	

    -> object destructuring ✅

        - we use curly braces to use object destructuring instead square brackets

        eg : traditional way of access properties and methods from an object 🤜

            const userBioData = {
                fName : "Teen" , 
                lName : "sky" , 
                age : 12 
            }

            let age = userBioData.age 

            console.log(age)

            - let's say next day we want firstName of the user
                then again we need to do same thing
                let firstName = userBioData.fName
            - so again we have same problem

        NOTE : 
            - so we can use same thing here that 
                we did in array destructing 
            - but only difference is we use curly braces instead square brackets

        eg : adding a key and value + using object destructuring way 🤜 

            let userBioData = {
                fName : "Teen" , 
                lName : "sky" , 
                age : 12 
            }

            let {FName , LName , userage , userRollNum = 12} = userBioData

            console.log(userage)

            // output : undefined 

            - because in our actual object there is no userage key
                that's why
            
            NOTE : 
                - so in object destructuring , we should give 
                    same key name that we used/gave in our actual object
                - and while adding a new key using object destructuring ,
                    then we can give any name to the key

            - so define like this 

            let {FName , LName , age , userRollNum = 12} = userBioData

            console.log(age)
            // output : 12


## object properties 
    
    - object features in ES6 
        - inserting data dynamically ✅
        - no need to write key and value , if both are same

    -> inserting data dynamically ✅

        eg : doing addition dynamically 🤜 
            let myName = "Teen"

            const myBio = {
                myName : "hello how are you ?" , 
                20 + 5 :  "is my age"
            }

            console.log(myBio)

            // output : error will come
        
        eg : adding data dynamically inside an object using square brackets 🤜 

            let myName = "Teen"

            const myBio = {
                [myName] : "hello how are you ?" , 
                20 :  "is my age"
            }

            console.log(myBio)
            // output : {20: 'is my age', Teen: 'hello how are you ?'} 

            - to add data dynamically then use 
                square brackets

        eg : performing addition dynamically inside an object 🤜

            let myName = "Teen"

            const myBio = {
                [myName] : "hello how are you ?" , 
                [20 + 6] :  "is my age"
            }

            console.log(myBio)
            // output : {26: 'is my age', Teen: 'hello how are you ?'}

            - even performing addition or etc then still
                we need to use square brackets

    -> no need to write key and value , if both are same ✅

        - sometimes we're in a situation that keys of an object
            and normal variables name are same
            then we don't need to define values inside an object

        eg : normal way 🤜
            let myName = "Teen"
            let myAge = 12

            const userBioData = {
                myName : myName ,
                myAge : myAge
            }

            // output : {myName: 'Teen', myAge: 12}

        eg : keys and values are same in an object 🤜

            let myName = "Teen"
            let myAge = 12

            const userBioData = { myName , myAge }

            // output :  {myName: 'Teen', myAge: 12}

            - here you can see that it's like a object destructuring

        - both examples has same output 


## rest and spread operators 

    -> spread operators ✅
        
        - very important 🔥
        - use this if we want to add more than one array
        - use three dots and name of an array to add more than one array
          NOTE : make sure that don't give a space b/w three dots and name of an array  

        eg : 
            const arr1 = ["red" , "blue" , "green"]
            const arr2 = ["yellow" , "black" , "white"]

            let newStuff = [...arr1 , ...arr2]
            console.log(newStuff)

            // output : ['red', 'blue', 'green', 'yellow', 'black', 'white']

            - so we can use spread operator instead of adding 
                same element again & again inside an new array

        NOTE : 
            - spread operator used most of time 
                than rest operator

    -> rest operator ✅

        - go to this link and know about it 
            https://www.youtube.com/watch?v=ngimOC0V_Q8&ab_channel=YahooBaba
            https://www.youtube.com/watch?v=wsiAwFtqP64&ab_channel=ThapaTechnical
            https://www.youtube.com/watch?v=iLx4ma8ZqvQ&ab_channel=freeCodeCamp.org
            https://www.youtube.com/watch?v=DoIGxx7P-ps&ab_channel=HiteshChoudhary


## exponentiation operator

    - double star we use to find the power of a number

        eg : 
            console.log(2**3)
            // output : 8

## string padding

    - use when you want to give padding/space
        in a string

    - methods of string padding are :
      - padStart()
        - used to add space/padding at start inside of a string
      - padEnd()
        - used to add space/padding at end inside of a string

    eg : of padStart()  

        let name = "Teen"

        name.padStart(10)
        console.log(name)

        // output : nothing will happen

        - in this example these methods will not work 
        - because we need to put methods on a string
            or put this name.padStart(10) inside 
            console.log() like this

        let userName = "Teen"
        console.log(userName.padStart(10))

        // output : "      Teen"

        - but if you find length of this string 
            then output will be 4
        - so to get length including those spaces
            then put string padding methods directly on a string 
            while creating like this

        let name = "Teen".padStart(10)
        console.log(name.length)
        // output : 10

        NOTE :
            - here we said 10 padding
                it means padding will be added extra including your string content
            - means here we said padStart(10)
                so right now 4 is already we have as a string content i.e Teen
                and another 6 padding/sapce will be added as a string content
            - because adding spaces inside a string 
                it's also consider as a content 

    eg : of padEnd()

        let name = "Teen".padEnd(8)
        console.log(name)

        // output : 'Teen    ' 

        - so right now length of "Teen" is taking 4 space
            and we also added another 4 space/padding in a string
        - so total length will be 8 length

    eg : adding a string using padEnd() or padStart()

        let name = "Teen".padStart(8 , "Soccer ")
        console.log(name)

        // output : SoccTeen

## Object.values() & Object.entries() methods of objects

    -> Object.values() ✅

        - O letter of Object should be capital
        - used to loop the values of keys in an object
        - return only values of keys in the form an array
            not keys of an object

        eg : 
            const person = {name : "teen" , age : 12}
            console.log(Object.values(person))

            // output : ['teen', 12]

    -> Object.entries() ✅

        - used to loop keys and values also of an object
        - return keys and values of an object
            means output will be array of an array

        eg : 
            const person = {name : "teen" , age : 12}
            console.log(Object.entries(person))

            // output : [ [ 'name', 'teen' ], [ 'age', 12 ] ]

            - so here first key and value stored in a array 
                and same with second key and value


## rest and spread operator for objects

    eg : of spread operator

        const person = {name : "teen" , age : 12 }
        const newPerson = {...person , rollNum : 15}

        console.log(newPerson)

        // output : {name: 'teen', age: 12, rollNum: 15}

    eg : of rest operator 

        - for this see YT video


## flat() & flatMap() methods of array

    - when we're doing array topic then we use reduce() method
            but reduce() method not able to convert 3D array into 1D array
            so here we'll learn able flat() method

    -> flat() method ✅ timeline - 11:50:15

        - very important method 🔥
        - used to make 2D or 3D or too much nested array into 1D array
        - instead of using reduce() method to flatten an array
            into 1D , use flat() method
        - bydefault flat() method convert 2D array into 1D array
            - but after 2D array if you want to convert into 1D array
            then we need to give argument inside flat() method
        - or you can use Infinity -> as a argument inside flat() method
            if you don't know how much deep nested array are in an array
            but "I" letter should be capital of Infinity word 

        eg : using reduce() method to flatten 3D or even too much nested array into 1D array

            const arr3 = [
                ["zone_1", "zone_2"] ,
                ["zone_3", "zone_4"] ,
                ["zone_5", "zone_6"] ,
                ["zone_7", ["zone_8" , "zone_9"]] ,
            ]

            let newArr = arr3.reduce((accumulator , curVal) => {
                return accumulator.concat(curVal)
            })

            console.log(newArr)

            // output :
                    [
                        'zone_1',
                        'zone_2',
                        'zone_3',
                        'zone_4',
                        'zone_5',
                        'zone_6',
                        'zone_7',
                        [ 'zone_8', 'zone_9' ]
                    ]

            - so here you can see that we did many stuff inside 
                reduce() method but reduce() method not able to make
                this 3D array into 1D

        eg : using flat() method instead of reduce() with same example

            const arr3 = [
                ["zone_1", "zone_2"] ,
                ["zone_3", "zone_4"] ,
                ["zone_5", "zone_6"] ,
                ["zone_7", ["zone_8" , "zone_9"]] ,
            ]

            let newArr = arr3.flat()

            console.log(newArr)

            // output : we'll get same as above we got 

        eg : giving arugment inside flat() method if we have 3D array

            const arr3 = [
                ["zone_1", "zone_2"] ,
                ["zone_3", "zone_4"] ,
                ["zone_5", "zone_6"] ,
                ["zone_7", ["zone_8" , "zone_9"]] ,
            ]

            let newArr = arr3.flat(2)
            console.log(newArr)

            // output : we'll get 1D array

        eg : using Infinity as a arugment inside flat() method 
            
            const arr3 = [
                ["zone_1", "zone_2"] ,
                ["zone_3", "zone_4"] ,
                ["zone_5", "zone_6"] ,
                ["zone_7", ["zone_8" , "zone_9"]] ,
                ["zone_10", ["zone_11" , "zone_12"]] 
            ]

            let newArr = arr3.flat(Infinity)
            console.log(newArr)

            // output : we'll get 1D array

    -> flatMap() method ✅

        - is a combination of flat() and map() methods  
        - use if you're using map() method and you're getting array
            which is not in 1D array so we can flat() that array 
            at the same time
        - use this if you want to map() and flat() an array at the same time
        - flatMap() will flat an array is array is 2D 
            if array is 3D then using flatMap() to flat an array don't work

        eg : using flatMap() method with 2D array

            const num = [1,2,3,4]
            const str = ["apple" , "banana" , "mango" , "pineapple"]

            const result = num.flatMap((curVal , index) => [curVal , str[index]]) 
            console.log(result)

            // output : [1, 'apple', 2, 'banana', 3, 'mango', 4, 'pineapple']

            NOTE : 
                - here name of arguments should be same 
                    in both for num array & str 
                - otherwise error come

        eg : 

            const num = [1,2,3]
            const str = ["apple" , "banana" , "mango" , "pineapple"]

            const result = num.flatMap((curVal , index) => [curVal , str[index]]) 
            console.log(result)

            // output : [ 1, 'apple', 2, 'banana', 3, 'mango' ]

            - here we didn't got pineapple value
                because str array is loop through parallely of num array
            - so here num array doesn't have 4th index of any item
                that's why

        eg : using flatMap() with 2D array to flatten

            const num = [1,2,[3,4]]
            const str = ["apple" , "banana" , ["mango" , "pineapple"]]

            const result = num.flatMap((curVal , index) => [curVal , str[index]]) 
            console.log(result)

            // output : [ 1, 'apple', 2, 'banana', [ 3, 4 ], [ 'mango', 'pineapple' ] ]

            - so here flatMap() method doesn't do able to flatten
                2D array


## Object.fromEntries() method of object

    - we learned about Object.entries() method of an object
    
    -> use Object.entries() if you want to convert 
        an object into an array 
    -> use Object.fromEntries() if you want to convert 
        an array into an object

    eg : of Object.entries() ✅

        const person = {name : "teen" , age : 12}

        console.log(Object.entries(person))

        // output : [ [ 'name', 'teen' ], [ 'age', 12 ] ]

        - now let's say we have a data like this
            [ [ 'name', 'teen' ], [ 'age', 12 ] ]
        - and if we want to convert this data into an object
            then we use Object.fromEntries()

    eg : of Object.fromEntries()

        const person = {name : "teen" , age : 12}

        const personData = Object.entries(person)
        console.log(Object.fromEntries(personData))

        // output : {name : "teen" , age : 12}


## trimStart() & trimEnd() methods of string

    - we already seen that padStart() and padEnd() used to add padding/space
    - and here trimStart() and trimEnd() used to remove the space/padding
        from a string

    -> trimStart() 

        - used to remove white spaces from starting of a string
        - return a new string

    -> trimEnd() 

        - used to remove white spaces from ending of a string
        - return a new string

## BigInt datatype

    - very important datatype 🔥
    - if you want to perform operations/calculation 
        out of this safe number 9007199254740991 then we use bigint
    - to use bigint just use n -> letter with a number

    eg : 
        let oldNum = Number.MAX_SAFE_INTEGER
        console.log(oldNum)

        // output : 9007199254740991
        
        - so in number datatype , 
            we can't give number till this range 9007199254740991
            after that we can't define number

        - use BigInt if you want to do calculation even further 
            if that number is out of range of this safe number 9007199254740991

    eg : doing calculation with out of safe range number

        let oldNum = Number.MAX_SAFE_INTEGER
        console.log(oldNum)

        const newNum = 9007199254740991n + 12n

        console.log(newNum)
        console.log(typeof newNum)

        // output : 9007199254741003n
        // output : bigint

        NOTE : here "n" letter means BigInt
 
    eg : doing calculation with out of safe range number without "n" letter

        let oldNum = Number.MAX_SAFE_INTEGER
        console.log(oldNum)

        console.log(9007199254740991 + 12n)

        // output : error come because this number 9007199254740991
            and this number with n letter 12n are both different datatype 

        - if you do calculation out of that safe number 
            without using bigint then JS will break 
            because that's the limit and we'll get wrong output


## Nullish Coalescing / Nullish operator

    - it's related to truthy & falsy values
    - is a logical operator i.e double question mark -> ??
    - used to check whether our condition is nullish or not

    - nullish operator only consider null and undefined as falsy values
      not all falsy values
    - but || and && operator consider all falsy values as falsy

    - false means -> 0 
        and true means -> 1

    NOTE : 
        - if have condition and 
            if left value is only null or undefined not all falsy value
            then we'll get value of rightside
        
        - and if inside condition , 
            right value is null or undefined value then 
            we'll get left value only not right one

    eg : using nullish operator with falsy value on left side 
        
        console.log(false ?? "some truthy value")
        // output : false

        console.log(undefined ?? "some truthy value")
        // output : "some truthy value"

        console.log(null ?? "some truthy value")
        // output : "some truthy value"
        
        console.log(NaN ?? "some truthy value")
        // output : NaN


## NOTE - timeline 12:05:19

    - few stuff are skipped in this tutorial 
        and those are not important
    - and we already done which are very important
        and async await is very very important 🔥
    

