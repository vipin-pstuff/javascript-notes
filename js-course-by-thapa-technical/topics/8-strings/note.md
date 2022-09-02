# Strings 

    - is most important 🔥
    - mutiple characters inside double quotes is called a string
    - index number start with 0 in string characters 

    eg : 
        let myName = "Teen"
            // or 
        let myName = new String("Teen") 

        - so here string can be created as primitives , from string literals , or as objects
            using the String() class / constructor
        - but don't use string in this way
            let myName = new String("Teen") 

## NOTE : 

    - this topic is very important 100% 🔥

## Topics
    
    - escape character
    - finding a string in a string
    - searching for a string in a string
    - extracting string part
    - replacing string content
    - extracting string characters
    - other useful string methods

## length property ✅

    - it counts the spaces also inside in a string 
        
    eg : without space inside string

        let message = "helloworld" 
        console.log(message.length)
        // output - 10 

    eg : with space inside string

        let message = "hello world" 
        console.log(message.length)
        // output - 11

## escape character

    - \n -> for new line
    - \" or \' backslash escape character
        - use this when you are using double quotes outside and inside also
            otherwise error will come

        eg : 
            let message = "We are the so-called "Vikings" from the north."
            console.log(message)

            - so here we don't want to error from JS for this -> "Vikings" 

            - so use like this
                let message = "We are the so-called \"Vikings\" from the north."

        NOTE : 
            but if you want to go in mess then simply use the alternative quotes

            means if you're using double quotes outside then use single quotes inside
            eg : 
                let message = "We are the so-called 'Vikings' from the north."

            and if you're using single quotes outside then use double quotes inside
                let message = 'We are the so-called "Vikings" from the north.'

            - use this if you're dealing with paragraphs which has double or single quotes


## finding a string in a string
    
    -> indexOf() method ✅

        - it also count space if you're dealing 
            with string not with an array
        - it do searching from 0 to end 
            means forward searching 

        eg : 
            const myBioData = "we're Soccer player"
            console.log(myBioData.indexOf("soccer"))
            // output : -1

            - we got -1 from indexOf() method because 
                we already know that indexOf() is case sensitive 
                here we give soccer but s is in small letter and 
                indexOf() method didn't able to find soccer that's why
                we got -1 

            so do this
                console.log(myBioData.indexOf("Soccer"))
                // output : 6   

        eg : 
            const myBioData = "we're the teen heroies"
            console.log(myBioData.indexOf("t", 6))

            - here indexing will start from 6
                so output we got 6 because on the 6th index
                there is a "t" letter that's why

            - if we do this 
                console.log(myBioData.indexOf("t", 7))
                then output will be 10 

    -> lastIndexOf() method ✅ 

        - it is same like indexOf()
        - return -1 if it doesn't find that thing 
            which we give as an argument
        - it return index number of that thing 
            which we give as an argument 
        - it do backward searching 
            means from last to start

        eg : 
            const myBioData = "we're the teen heroies"
            console.log(myBioData.lastIndexOf("t", 19))
            // output : 10 


## searching for a string in a string

    -> search() method ✅

        - String.prototype.search(regexp)
        - return -1 if we give wrong argument 
        - it return index number of the string 
            that we give as a first argument
        - it also case sensitive
        - it can't take a second argument start position 
            as indexOf() and lastIndexOf() method takes
        - used most of the time and very important 🔥

        eg : 
            const myBioData = "we're the Teen heroies"
            console.log(myBioData.search("teen")
            // output : -1

        eg : 
            const myBioData = "we're the teen heroies"
            console.log(myBioData.search("t"))
            // output : 6 


## extracting string part

    - there are 3 methods for extracting a part of a string
        - slice(start , end)
        - substring(start , end)
        - substr(start , length)

        - these three doesn't change original array

    -> slice() method ✅

        - in array , we saw splice() method
        - used to extracts/fetch a part of a string 
            and returns the extracted part in a new string
        - it takes 2 arugments which are both index number
          - first is start index/position (compulsory to give)
          - second is end index/position (optional to give)

        eg : 
            let str = "Apple , Banana , Kiwi"
            let result = str.slice(0 , 4)
            console.log(result)
            // output : Appl

            - here as you can see that we didn't got "e" letter 
          
        NOTE : 
            - slice() method selects the string from starting index
                till ending index that we gave as an second argument
                but ending index will not be included
            
            - that's why we didn't got "e" letter 
                so we need to give 5th index as 
                an second arugment to get "e" letter like this 
                    let str = "Apple , Banana , Kiwi"
                    let result = str.slice(0 , 5)
                    console.log(result)

                    // output : Apple

                - but here 5th index which is second arugment of slice() method
                    will not be included

        eg : giving negative index number as an second arugment

            let str = "Apple , Banana , Kiwi"
            let result = str.slice(7 , -2)
            console.log(result)

            // output : Banana , Ki

            - here we got "ki" because 
                we give -2 so if we give any negative number 
                as an second argument of slice() then 2 things happen
                    - first extracting will happen the end
                    - second let's say here we gave -2
                        so means go to end and remove the 2 characters 
                        from last of "Kiwi"
                        so now we got Ki

            let str = "Apple , Banana , Kiwi , Mango"
            let result = str.slice(7 , -2)
            console.log(result)

            // output : Banana , Kiwi , Man

            - so here as you can see we got "Man" instead 
                of complete "Mango" 

        eg : giving only starting index number

            let str = "Apple , Banana , Kiwi , Mango"
            let result = str.slice(7)
            console.log(result)

            // output : Banana , Kiwi , Mango

            NOTE : here if we give only starting index number 
                    then from that extracting will start
                    and extracting will stop till our ending string

    -> substring() method ✅

        - is similar to slice() method
        - difference is that substring can't accept negative index
            as second argument

        eg : 
            let str = "Apple , Banana , Kiwi"
            let res = str.substring(0 , 4)  
            console.log(res)

            // output : Appl

            - same output we got as we're getting by slice() method

        eg : giving negative index number as second argument in substring() 

            let str = "Apple , Banana , Kiwi"
            let res = str.substring(8 , -2)  
            console.log(res)

            // output : Apple , B

            - according to rule that we can't give negative index 
                as an second argument but why we're getting this output
            - because substring() works like this
                here we gave 8 as starting index and -2 as ending index
                but substring works opposite 
            NOTE :  
                - means if you give negative index as second argument in substring()
                    then substring() will take 
                        first arugment will be as second arguement
                        and bydefault 0 will be as first argument 

                - so if we give negative value as second argument in substring()
                    then the characters are counted from the 0 index which
                    will be first argument

    -> substr() method ✅

        - is similar to slice() method
        - difference is that the second parameter specifies the length
          of the extracted part
        - if give negative index number as second argument in substr()
            then we'll not get any output
        - takes 2 argument 
            - first is starting number
            - second is length

        eg : 
            let str = "Apple , Banana , Kiwi"
            let res = str.substr(0 , 4) 
            console.log(res)

            // output :  Appl

            - so in slice() , substring() and substr() 
                we're getting same data 

        eg : giving negative index number as second argument in substr() 

            let str = "Apple , Banana , Kiwi"
            let res = str.substr(7 , -2) 
            console.log(res)

            // output : nothing will come

            - so giving negative index number as second argument in substr()
                is useless

        eg : giving negative index number as first argument in substr()

            let str = "Apple , Banana , Kiwi"
            let res = str.substr(-4) 
            console.log(res)

            // output : Kiwi

            - here we got only 4 characters 

            - it is useful if we have set of string inside a string
                and we just want to get data from backward
            - so then we can give negative number as first argument
                in substr() due to this string extracting will start from backward
            - and if we give negative number as first argument
                then mimus sign means start from backward and
                indexing will start from 1 when we start from backward

        eg : giving positive index number as first argument in substr()
            let str = "Apple , Banana , Kiwi"
            let res = str.substr(2) 
            console.log(res)

            // output : ple , Banana , Kiwi

            - so in slice() , substring() , substr()
                works same in this example


## replacing string content 

    -> replace() method ✅

        - takes 2 argument
          - first is searchFor 
          - second is replacewith

        - used to replaces a specified value / string
            with another value in a string

        eg : 
            let message = "we're soccer player and soccer"
            let updatedMessage = message.replace("soccer" , "Soccer")
            console.log(updatedMessage)

            // output : we're Soccer player and soccer

            - here "S" letter of soccer converted into capital

            NOTE : but here deliberately we wrote "soccer" word two times
                to see whether replace() method replace/update
                both word or not

            - so interviewer can ask that replace() method update/replace
                same thing in mutiple places or not if that same thing 
                used/exists in mutiple place in a string
                - so answer is if a word or a letter exists in 
                    mutiple places in a string then 
                    replace() method update/replace only starting one
                    not all of them 

    -> replaceAll() method ✅

        - is similar as replace() method
        - difference is replaceAll() method used to 
            update/replace all the same thing used/exists in a string
            whether it's a word or a letter
        - is very important 🔥

        eg : 
            let message = "we're soccer player and soccer"
            let updatedMessage = message.replaceAll("soccer" , "Soccer")
            console.log(updatedMessage)

            // output : we're Soccer player and Soccer

            - so here "S" letter converted into capital 
                in both soccer word by replaceAll() method

        
        - points to remember
            - replace() and replaceAll() method doesn't change
                original string
            - both returns a new string
            - bydefault
                - the replace() method replaces only the first one
                - but replaceAll() method replaces/update all the them
                    if same word or a letter exists in a string
            - bydefault replace() and replaceAll() methods are case sensitive
                i mean let's say if you pass a word "soccer" but in actual
                string there is no "soccer" word with "s" letter small 

## extracting string characters

    - there are 3 methods for extracting string characters
      - charAt(indexnumber)
      - charCodeAt(indexnumber)
      - access [] property

    -> charAt() method ✅

        - used / returns a character at a specified index/position
            in a string 

        - total 26 letters we have

        eg : 
            let str = "HELLO WORLD"
            console.log(str.charAt(0))

            // output : H

            - so using this method you can play a lucky draw game

    -> charCodeAt() method ✅
        
        - we give index number as an argument
        - returns the unicode of the character 
            at a specified index in a string 
        - returns a UTF-16 code of characters 
            (an integer b/w 0 to 65535)
        - means return a unique number for every character

        eg:
            let str = "HELLO WORLD"
            console.log(str.charCodeAt(0))

            // output : 72

            - here we got UTF-16 code of "H" letter 

    -> access [] property ✅

        - introduce in ES5 
        - used to access characters based on index number 
            that we gave inside square brackets

        eg : 
            let str = "HELLO WORLD"
            console.log(str[0])
            // output : H


## other useful string methods

    - these methods are very important 🔥

    - useful methods are 
      - toUpperCase()
      - toLowerCase()
      - concat()
      - trim() -> very important than above 🔥
      - split() -> important 🔥

    -> toUpperCase() method ✅

        eg :
            let message = "mouse"
            console.log(message.toUpperCase())

            // output : MOUSE

    -> toLowerCase() method ✅

        eg :
            let message = "MOUSE"
            console.log(message.toLowerCase())

            // output : mouse

    -> concat() method ✅  

        - used to join two or more strings
        - we can use + plus operator to joing strings

        eg: 
            let fName = "HELLO"
            let lName = "WORLD" 
            console.log(fName.concat(lName))
            // output : HELLOWORLD
            console.log(fName.concat(" " , lName))
            // output : HELLO WORLD

            - but now due to template string 
                we'll do like this

            console.log(`${fName} ${lName}`)

    -> trim() method ✅

        - very useful when you deal with form validation
            so if user by mistak or deliberately give spaces
            then if we don't want space at starting and ending also
            then we can use trim() method

        - used to removes whitespace from both sides of a string / word
            
        - but trim() can't remove if 
            there is a space b/w two word or characters

        eg :
            let str = "        Teen       "
            console.log(str.trim())
    
    -> split() method ✅

        - used to convert a string into an array
            based on commas or space , etc that we gave
        - takes only one argument
        - is very important method 🔥

        eg : using split() method based on commas

            let str = "a,b,c,d,e"
            console.log(str.split(",")) 

            // output : ['a', 'b', 'c', 'd', 'e']

            - here we made string into an array based on commas
                because inside string we have commas

        eg : using split() method based on spaces

            let str = "a,b,c,d,e"
            console.log(str.split(" ")) 

            // output : ['a,b,c,d,e']

            - here we got a same string inside an array
                because inside string we don't have spaces

            but if we give a space inside string 
                then we can split() into an array 
                and with that each element also gets split based on spaces

            let str = "a b c d e"
            console.log(str.split(" ")) 

            // output : ['a', 'b', 'c', 'd', 'e']

        eg : using split() method based on bar

            let str = "a,b,c | d,e"
            console.log(str.split("|")) 
            
            // output :  ['a,b,c ', ' d,e']

        - so this way we can split a string 
            into an array based on spaces , commas , etc