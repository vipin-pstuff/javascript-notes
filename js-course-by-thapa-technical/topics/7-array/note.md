# Array

- [x] a normal variable can store only one value at a time

- [x] but if you want to store mutiple values/data inside only one variable 

- [x] in JS , we have an Array class and arrays are the prototype of this class

## NOTE : 

    -> It is most important topic

    -> eg : 
        let myFriends = ["Steve Jobs" , "Bill gates" , "Elon Musk"]

        -> in other programming languages , we can't store 
            multiple items of different data type 
        -> but in JS , we can do 
            like this

        let myFriends = ["Steve Jobs" , 2 , true]

        -> but in other programming languages , we can only 
            store multiple items of same datatype only 
            not of different datatype

    -> first item in our array is -> lower index / lower boundary 
    -> last item in our array is -> upper index / upper boundary 

    -> in array , index starts from 0 (zero)

    -> in this lecture of array , more than 40 methods 
        we will cover and once you know these methods
        then you can create many applications
    -> and almost 80% methods are very important 🔥
        which are highly used and each method same
        thing contain like they take a callback function and etc
        eg : 
            arr.find(function(element, index, array) { ... }, thisArg)

    -> in JS , string and array is a class
        but in c++ is a datatype

    -> length is just 1 bigger than index

### Examples of array
    let myfriends = [] ;

    -> here this square brackets is like a bag 
        that we can carry mutiple diwali booms in this bag

    -> to separate each item / element we use comma

    eg : 
        let myFriends = ["Steve Jobs" , "Bill gates" , "Elon Musk"]


## topics
    -> traversal of an array
    -> searching and filter in an array
    -> how to sort and compare an array
    -> how to insert , add , replace and delete elements (CRUD)
    -> map() , reduce() , filter() 

## How to create an array
    -> we can create array in two ways : 

    eg : 
        var myFriends = new Array ;
        myFriends = ["Apple" , "Mango" , "Banana"] ;

        -> here we created myFriends instance / object of 
            Array class
        -> and then we added value into myFriends variable

        -> but writing this way is optional
            var myFriends = new Array ; 
            because behind the scene , the movement JS see 
            square brackets , then JS will automatically will 
            understand that it's a array

        so we can't create array directly like this

    eg : 
        var myFriends = ["Apple" , "Mango" , "Banana"]

## What is traversal in an array  
    -> traversal means if you have an array
        and there are mutiple items inside that array
        then if you want to display items or you want to 
        navigate through all the items that's it

        simply you can say navigate through an array

### NOTE : 
    eg : 
        var myFriends = ["Steve" , true , "about" , 24] ;

        -> here this is wrong because always only store data 
            based on variable name while using array 
            like if array is number , then only store numbers 
                don't store boolean values , string , etc 💡💡

        -> don't store different data in an array 💡

        -> but if you want to store different data 
            related to single thing then we use object 💡💡
            like bioData of a person

## traversal in array
    -> to traverse in an array we use index number of 
        that element or we can use loop to display all the data

    1 - traversing through index number
      eg : 
          let myFriends = ["Steve" , "Bill Gates" , "Elon"]

          console.log(myFriends[1])

          if you want last element then you can get like this
          console.log(myFriends[2])

      - right now here we have only total 4 elements 
          but what if we have more than 50 elements inside 
          an array then we can't count them or can't see

          so to find we can do length -1

      eg : 
          if we want to check the length of an array

          so we have property i.e length

      - length is start from 1 

          console.log(myFriends.length) // output : 4

      - now we have total length of an array is 4
          so to display the last element of an array
          then do this

      eg : 
          console.log(myFriends[myFriends.length - 1])

    2 - Traversing through loop 
        like for in loop and for of loop
        
        eg : traversing using normal for loop
            let myFriends = ["Steve" , "Bill Gates" , "Elon"] ;

            for (let i = 0 ; i < myFriends.length ; i++) {
                console.log(myFriends[i])
            }

        - now after ES6 we have for in and for of loop

        eg : for in loop for traversing

            let myFriends = ["Steve" , "Bill Gates" , "Elon"] ;

            for (let elements in myFriends) {
                console.log(elements)
            }

            -> for in loop give index number of each 
                elements in an array

            -> here elements is a variable that we made
                and myFriends is an array

            -> here word in -> is a keyword

        eg : for of loop for traversing

            let myFriends = ["Steve" , "Bill Gates" , "Elon"] ;

            for(let elements of myFriends) {
                console.log(elements)
            }

            -> for of loop give all the elments of an array
                just like a normal for loop

        eg : using forEach() method for traversing

            -> forEach() method call a callback function for
                each element in the array

            -> it doesn't understand return keyword + 
                break keyword + continue keyword that's why 
                it doesn't return anything 

            -> it takes 5 arguments
                - element / item of an array
                - index of each element inside an array
                - array itself
                - this argument

            -> it's like a normal for loop 

            let myFriends = ["Steve" , "Bill Gates" , "Elon"] ;

            myFriends.forEach((element , index) => {
                console.log(element)
            })

## searching and filter in an array
    -> like when you visit amazon then you search for a product
        and you filter that product based on ratings or price

    -> indexOf() method ✅
        
        - used to find the index of an element
        eg :
            let myFriends = ["Steve" , "Bill Gates" , "Elon"] ;

            console.log(myFriends.indexOf("Bill Gates"))
                // output : 1
        - it is case sensitive also
            means of you give Bill and bill word 
            inside parathesis of indexOf() then both will be different

        - if you give like "bill" or wrong thing which doesn't
            exist in this array then 
            we'll get output i.e -1

        - it always do forward search not backward
        eg : 
            so 2nd argument of indexOf() takes a number
            which means from which index you want to start
            searching inside array for that element

            let myFriends = ["Ste","Bill","Elon","Bill"] ;
            console.log(myFriends.indexOf("Bill" , 1))
                // output - 1 
                    because first element is Bill only
            so do this

            console.log(myFriends.indexOf("Bill", 2)
                // output - 3 - means Bill is on 3rd index
                    because searching will start from 2 index

            - and here if you specify number from where we want
                to start search then search will start from that


    -> lastIndexOf() method ✅

        - it's like a indexOf() method
            but lastIndexOf() method start searching
            from backward

    -> includes() method ✅

        - means we give an element of an array and 
            and we see whether that element has inside 
            of that array or not

        - very important method 🔥
        
        NOTE : don't forget to put s -> word in includes() method

        - and based on that return true or false

        - it is also case sensitive when we give value
            inside paranthesis of includes() method

        eg : 
            let's say you're making Banana shake recipe
            and already you put recipe but you want to check
            whether that incredients has there or not to make banana shake or not
            basically you're searching

        eg : of includes() method
            
            let myFriends = ["Steve" , "Bill Gates" , "Elon"] ;

            console.log(myFriends.includes("Bill"))
            console.log(myFriends.includes("Bill Gates"))
            console.log(myFriends.includes("Bill gates"))

            - right now includes() method is searching forward in this example but

        eg : of includes() method with redundant/dupicate data

            let myFriends = ["Steve" , "Bill Gates" , "Elon" , "Bill Gates"] ;

            console.log(myFriends.includes("Bill Gates"))
                // output : true -> because at the starting we get that element but

            console.log(myFriends.includes("Bill Gates" , 2))
                // output : true -> because searching starts from 2nd index not from 0 index then searching goes to 3rd index
            
        eg : of includes() method with no redundant data 

            let myFriends = ["Steve" , "Bill Gates" , "Elon"] ;

            - now here we don't have "Bill Gates" on 3rd index
                so here we want to see whether includes() method 
                do searching from start or not , even if we give 
                index number from where we want to searching 

            console.log(myFriends.includes("Bill Gates" , 2)) ;
                // output : false -> so it means includes() method doesn't start searching from 0 index
                and it don't do backward searching

        NOTE : like you can use includes() method in validation
            means whatever array you have and you want to check
            whether that element exist or not before adding that
            element inside that array

    -> find() method ✅

        - it takes a callback function
        - used for filter based on condition
        - it's just like a filter() method but not exactly
        - if some element in the array satisfies the condition
            then find() method return only one and that element who satisfies that condition first
            - if condition is fail then return undefined
        - only problem with find() method that it return only one element

        eg : 
            const prices = [200 , 300 , 350 , 400 , 450 , 500 , 600] ;

            - here we're using as function expression 

            const result = prices.find((currVal) => {
                return currVal < 400 
            })

            console.log(result)

            // output - 200

            - so here we got only one output instead of 
                returning 200 , 300 and 350

    -> findIndex() method ✅

        - both find() and findIndex() methods are same 
        - in find() method , it return only one element 
            even if some elements are also satisfying that condition but

        - in findIndex() method also works like same
            but it return index number of that element that's it
            if condition is false then return -1 

        eg : 
            const prices = [200 , 300 , 350 , 400 , 450 , 500 , 600] ;

            const result = prices.find((currVal) => {
                return currVal < 400 
            })

            const result2 = prices.findIndex((currVal) => {
                return currVal < 400 
            })

            console.log(result)
            console.log(result2)
            // output - 200
            // output - 0

            - so here 0 -> this zero doesn't mean falsy values
                it's a index of number of 200 element inside of an array

        eg : of find() and findIndex() method if condition doesn't satisfies

            const prices = [200 , 300 , 350 , 400 , 450 , 500 , 600] ;

            const result4 = prices.find((currVal) => {
                return currVal > 1400 
            }) 

            const result5 = prices.findIndex((currVal) => {
                return currVal > 1400 
            })

            console.log(result4)
            console.log(result5)
            // output : undefined
            // output : -1

            - so if condition doesn't satisfies in both 
                find() and findIndex() method then 

                find() method return -> undefined
                findIndex() method return -> -1

    -> filter() method ✅

        - this is very important method 🔥
        - if you deal with react , nodejs then most of the time
            filter() method is used 99.9%

        - it takes a callback function with same argument inside callback function 
        - it return new array based on condition that we gave
            if condition is true then we get a new array
            if condition is false then get a empty array
        - filter() method doesn't mutate / doesn't do 
            changes in an current/original array   
        - if condition is true then we get all those elements 
            who are satisfing not only one just like find()method was doing

        eg : 
            const prices = [200 , 300 , 350 , 400 , 450 , 500 , 600] ;

            const newPriceTag = prices.filter((currPrice) => {
                return currPrice < 400
            })

            console.log(newPriceTag)
            // output : [200, 300, 350]

        eg : of filter() method if condition doesn't satisfies

            const prices = [200 , 300 , 350 , 400 , 450 , 500 , 600] ;

            const newPriceTag = prices.filter((currPrice) => {
                return currPrice > 1400
            })

            console.log(newPriceTag)
            // output : [] --> empty array got if condition false

## How to sort and compare an array

    - how we can do sort an array like 
        from ascending to decending or vice versa
        and how we can compare which array is bigger 
        and which one is small

    -> sort() method ✅

        - Array.prototype.sort() 
        - this method is very important 🔥

        - it sorts the elements of an array from ascending to decending or vice versa
        - if all elements of an array are number type
            then default sort order is ascending to decending
        - and if all elements of an array are number type 
            then sort() method converts them in string type
            then it do sorting after comparing
        - if all elements of an array are string type
            then sort order done based on sequences of UTF-16
            code units values

        - it sort / do changes inside an original array only
        - it doesn't return any new array

        eg : sort() method with string elements of an array

            const months = ["march" , "jan" , "feb" , "dec" , "nov"]

            console.log(months.sort())  
            
            // output : ['dec', 'feb', 'jan', 'march', 'nov']

            - but we need in this way 
                ["jan", "feb", "march", "nov", "dec"]

            - but we'll not get output in this way
            - as per sort() method sorts ascending order bydefault 
                if you see output then first letter of each word
                is d then f then j then m then n
            - so here smallest letter is d that's why we got "dec" first then so on

        eg : sort() method with adding "april" element to check output

            const months = ["march" , "jan" , "feb" , "april", "dec" , "nov"]

            - so here as we know first come jan then feb then march then april
            - but sort() will sort() according to first letter of each word

            console.log(months.sort())

            // output - ['april', 'dec', 'feb', 'jan', 'march', 'nov']

        eg : sort() method with number elements 

            const arr = [1 , 30 , 4 , 21 , 10000 , 99]

            console.log(arr.sort())

            // output - [1, 10000, 21, 30, 4, 99]

            - here first 1 is smallest then sort() method 
                checking which one element is smallest but greater
                then 1 is 10000 that's why we got 
            
            - so here sort() method is follow pattern
                that  [1, 10000, 21, 30, 4, 99]

                in this array , whatever number you have
                a single number of each number is comparing and sorted

                - like here 1 then inside 10000 number is again 1
                    then inside 21 is 2  
                    then inside 30 is 3
                    then inside 4 is 4 only 
                    then inside 99 is 9 

            - like a example 

                if number is sorted as strings if we have all elements in number type like

                "25" is bigger than "100"
                because here "2" is bigger than "1"

                - because of this , the sort() method will
                    produce an incorrect result when sorting numbers 

## How to insert , add, replace , delete elements in an array(CRUD)

    - this topic is very important 🔥
     
    - push() , pop() , unshift() ,shift() and splice() methods 
        mutate the original array

    - there are many ways to do CRUD but we single method 
        to do CRUD 

    - CRUD - means creat , read , update and delete

    -> push() method ✅

        - used to add or more elements to the end of an array
            and returns the new length of the array

        eg : of push() method with adding one data
            let's say we open a farm for animals so now
            i want to add more animals in our farm so

            let animals = ["goats" , "sheep"]

            animals.push("cow")

            console.log(animals)
            // output : ['goats', 'sheep', 'cow']

        - remember that push() method add data at the end of an array

        eg : of push() method to see what returns

            let animals = ["goats" , "sheep"]

            const result = animals.push("cow")

            console.log(animals)
            console.log(result)
            // output : ['goats', 'sheep', 'cow']
            // output : 4 -> is a length of our array

        eg : push() method with adding mulitple data

            let animals = ["goats" , "sheep"]

            animals.push("cow" , "hen" , "chicken")

            console.log(animals)
            // output - ['goats', 'sheep', 'cow', 'hen', 'chicken']

    
    -> unshift() method ✅

        - used to add or more elements to the starting of an array
            and returns the new length of the array

        - difference b/w push() and unshift()
            - push() method add items at the end of an array
            - unshift() method add items at the starting of an array

        eg : unshift() method with adding a single data

            let animals = ["goats" , "sheep"]

            animals.unshift("cow")

            console.log(animals)
            // output - ['cow', 'goats', 'sheep']

        eg : unshift() method with adding multiple data

            let animals = ["goats" , "sheep"]

            const result = animals.unshift("cow" , "hen" , "chicken")

            console.log(animals)
            console.log(result)
            // output - ['cow', 'goats', 'sheep']
            // output - 5

        eg : problem with unshift()

            const myNumbers = [1,2,3,5]

            myNumbers.unshift(4,6)

            console.log(myNumbers)  
            
            - now you'll think that 4 number will be added before
                5 and 6 will be added after 5 but this will not 
                happen because according to definition

            // output - [4, 6, 1, 2, 3, 5]

            - but we need output like this [1, 2, 3, 4, 5, 6]
                so this output we can get and this will see in 
                further lectures how we can do

    -> pop() method ✅ 

        - used to removes the last element from an array 
            and returns that element that we're removing
        - we can't say that we're deleting this will be wrong
            we're just removing
        - this method changes the length of an array

        eg : of pop()

            const fruits = ["Apple" , "Banana" , "Mango" , "pineapple"]

            console.log(fruits) 
            // output : ["Apple" , "Banana" , "Mango" , "pineapple"]   
            console.log(fruits.pop())
            // output : pineapple
                because pop() removes the last element from 
                and array and returns that removed one
            console.log(fruits)
            // output : ["Apple" , "Banana" , "Mango"]

    -> shift() method ✅ 

        - is a opposite of unshift() method
        - used to removes the first element from an array
            and returns that removed element
        - this method changes the length of an array

        eg : 
            const fruits = ["Apple" , "Banana" , "Mango" , "pineapple"]

            console.log(fruits) 
            // output : ["Apple" , "Banana" , "Mango" , "pineapple"]   
            console.log(fruits.shift())
            // output : Apple
            //    because pop() removes the last element from 
            //    and array and returns that removed one
            console.log(fruits)
            // output : ["Banana" , "Mango" , "pineapple"]

    -> splice() method ✅ 

        - adds and / or removes any elements from an array 
            not just only start or end elements 

        - for examples see the challenge time of splice for CRUD in app7.js

        - is a important method 🔥

        - arguments of splice() method
            - first argument is starting number i.e 
                we pass as a index number

            - second argument is deleting a number i.e 
                again we pass a index number of that element
                to delete that element

            - third arugment is adding a number/string inside 
                of an array

        - it returns empty array

        NOTE : we use this method mostly for delete purpose

## NOTE : 

    - map() , reduce() , filter() -> these methods used 90%
        in reactjs and nodejs

        - after understanding this then it means you know 
            little but reactjs and nodejs

        - because these 3 methods are very much important 🔥
        - because at then end we'll play with data 
            like array , when we call api then we do loop , etc

    - used mostly methods takes a callback function
        and we pass same argument inside that callback function
        like we saw in 
        forEach() , find() , findIndex() , filter()

        - arguments of a callback function are
          - first is current values or elements of an array
          - second is index of all the elements of an array
          - third is array that we're working on
          - fourth is this argument -> which is not necessary/need


## map() method ✅

    - it takes a callback function
        - with same argument like a callback function of filter() method takes

    - that callback function of map() method will run/fire
        for every element in our array  

    - returns a new array without mutating the original array

    - used this method for changing or manipulating the elements of an array

    - map() method is chainable method 
        means we can use multiple method on or after using map() method

    - - chainable way is very important 🔥

    eg : 
        const arr = [1 , 4 , 9 , 16 , 25]

        let newArr = arr.map((currEle) => {
            return currEle > 9
        })

        console.log(newArr)
        // output - [false, false, false, true, true]

        - here you can see that we're getting boolean values
            instead of giving numbers inside an array which 
            are greater than 9 
        - so here only 2 element which are greater than 9

    eg : 
        const arr = [1 , 4 , 9 , 16 , 25]

        let newArr = arr.map((currEle , index , arr) => {
            return `index no = ${index} and the value is ${currEle} belong to ${arr}`
        })  
        console.log(newArr)

        // output
            ['index no = 0 and the value is 1 belong to 1,4,9,16,25',
             'index no = 1 and the value is 4 belong to 1,4,9,16,25', 
             'index no = 2 and the value is 9 belong to 1,4,9,16,25', 
             'index no = 3 and the value is 16 belong to 1,4,9,16,25', 
             'index no = 4 and the value is 25 belong to 1,4,9,16,25']

        - as you can see map() method return a new array
        - and this is very useful and you can do a lot with map() method
            like when you can a API like pic , corona status , etc
            then you can do like this 

        - here map() method doesn't mutate the original array 
            but forEach() does
        - so this is your choice that if you want to change and need new array
            then use map() but if you don't want then use forEach() or for loop

    NOTE : 
        on interview can be asked 
        difference b/w map() and forEach() method 
        
        you can read on this link
        https://www.freecodecamp.org/news/4-main-differences-between-foreach-and-map/

        so 
            
        - map() return new array but forEach() return undefined
        - map() method has a ability to chain with other methods
            like with reduce() , sort() , filter() , and etc after using a map() method
            - here map() method i chainable method means 
                after using map() method you can define other methods also
            - but in forEach() doesn't do because it returns undefined
                which means falsely value that's why 

    - Higher Order Function : means a function which takes another function as an argument those are higher order function like map() , etc 💡💡💡
        - & the function which is a argument inside map() function , that's the callback function 💡💡💡
    - Eg : 
        const doubleMap = (numbers) => {
            return numbers.map(number => number * 2)
        }
        - here numbers.map(number => number * 2) 
            - means take an array of numbers
            - then loop it on each number i.e number
            - then double them 💡💡💡

## reduce() method ✅

    - used to flatten an array means to convert the 3rd or 2d array 
        into a single dimensional array

    NOTE : 
        - now if you want to flatten an array then 
            in ES20 , we have a features that we don't 
            need reduce() method
        - but still reduce() method is used 99%

    - it takes a callback function which is called reducer function
        which runs for each element of an array
        and return a single value output
        - a callback function takes 4 arugments
            - first is accumulator or you can say sum
            - second is current value
            - third is current index
            - fourth is source/current array

    - it return a new single value 
        but not inside an array

    - like you want a single output 
        eg : total percentage , total sum , total average etc
        so we use reduce() method

    - is too much important 🔥


    eg : 
        let arr = [5, 6, 2]

        let sum = arr.reduce((accumulator , currEle , index , arr) => {
            return accumulator + currEle
        }, 0)

        console.log(sum)

        // output - 13

        - so here first time - accumulator has 5 and currElement is 6   
            then in second time - accumulator has 11 and is 2
            then accumulator has 13 at the end

    eg : if you want to specify your initial value for accumulator

        let's say you forgot to give your marks inside an array
            - so to do this we can use unshift() method or pop() method 
            - but second way is below one

        let arr = [5, 6, 2]

        let sum = arr.reduce((accumulator , currEle , index , arr) => {
            return accumulator + currEle
        }, 0)

        console.log(sum)

        // output - 13

        - here 0 is a initial value for accumulator / sum
            that you can give any number instead of 0

        - so here first time - accumulator has 0 and currElement is 5   
            then in second time - accumulator has 5 and currElement is 6
            then in third time - accumulator has 11 and is 2
            then accumulator has 13 at the end

## flatten an array 🔥

    eg : flatten 2D array using reduce() method
        question timeline : 6:36:35 
            how to flatten an array coverting 2D and 3D array 
            into one dimensional array

            const arr3 = [
                ["zone_1", "zone_2"] ,
                ["zone_3", "zone_4"] ,
                ["zone_5", "zone_6"] ,
                ["zone_7", "zone_8"] ,
            ]

            - this is called array of an array

        solution
            const newArr = arr3.reduce((accu , curVal) => {
                return accu.concat(curVal)
            }) 
            console.log(newArr)
            // output - ['zone_1', 'zone_2', 'zone_3', 'zone_4', 'zone_5', 'zone_6', 'zone_7', 'zone_8']

            // OR
            
            const newArr = arr3.reduce((accu , curVal) => {
               return accu + curVal
            }) 
            // output - zone_1,zone_2zone_3,zone_4zone_5,zone_6zone_7,zone_8

        - here if we use plus operator for concatenation then
            typeof of arr3 will be in string not in array

    
    eg : flatten 3D or even too much nested array into 1D array using 

        const arr3 = [
            ["zone_1", "zone_2"] ,
            ["zone_3", "zone_4"] ,
            ["zone_5", "zone_6"] ,
            ["zone_7", ["zone_8" , "zone_9"]] ,
        ]

        - here we can't convert into 1D array using reduce() method
            so in ES20 , if you want to convert 3d or too much nested array 
            into 1D array then we have a another method instead of using reduce() method

        - so this method we're going to when we do ES10 / 2019

## TIP

    - you just need to understand how work is done
        once when you in a company then you'll learn
        by yourself automatically

    - on this planet , there is no one who know everything
        as you go step by step you'll get experience 

    - in this today's era , still Bill Gates do study
        otherwise he can say that i know everything

    - you need to hard + smart work and understand work
        how it's done

## map() vs filter()

- map() : used to loop over the array & return brand new array based on some manipulation on each elements
- filter() : used to loop over the array & return brand new array based on the condition 💡💡💡
