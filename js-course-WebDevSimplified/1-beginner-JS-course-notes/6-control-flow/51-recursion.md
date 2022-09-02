# recursion

    - this topic Note we're dividing into two section
        first Note - lecture of colt steele
        second Note - lecture of kyle 

## Lecture - of colt steele ✅

  for more check this video - https://www.youtube.com/watch?v=lMBVwYrmFZQ&ab_channel=ColtSteele

    -> what is recursion ?

        - is a process (process means a function)
            that calls itself over & over again
            till the -> base case (is a condition) 💡💡💡

        - recursion is a another way to iterate as a loop
            but it's contain any for loop or any types of loop to iterate 
        - means this is a another approach apart from types of loop
            which can do as a loop recursively 💡💡💡

    -> how a recursive function work ?

        - call/invoke the same function 
            with a smaller & smaller different input 
            until we reach that -> base case (which is a condition) 💡💡💡

        - so in story example - of martin & dragon
            martin boy -> kept asking about a smaller & smaller list
                        until he hit an empty list at which point were done ✔️

        - base case 
            - is a condition to stop the recursion of a function
            - this base case is very important to give
                inside the definition of a function 
                so that recursion function ends 💡💡💡
            - it's a condition when the recursion ends

    -> importance of base case/condition/end point/rock bottom ✅

        - if there in no base case inside a recursive function 
            then that recursive function calls itself over & over again till infinity 
            & after sometime stack overflow / stack size exceeded error will come 💡💡💡 

        - so there has to be a rock bottom / end point / condition i.e base case
            so that we can hit/stop to that base case to stop everything 💡💡💡

    -> two essential parts of a recursion function ✅

        first - base case 
        second - different input
                means this input will get smaller & smaller or bigger & bigger input
                something that is bringing / getting us closer to our base case 💡💡💡

## examples 1 - of recursion function without call stack concept (by colt steele) ✅

    eg 1 : recursion function

        function countDown(num) {
            if (num <= 0) {
                console.log("All done")
                return
            }

            console.log(num)
            num--
            countDown(num)
        } 

        countDown(4)

        STEP 1 : while calling a function we passed 4 as a argument

        STEP 2 : then that 4 as a argument goes inside that num parameter
                    condition will check is 4 <=0 -> false
                    so 4 -> will be printed & then 4 will be decrement by 1 & then value becomes 3
                then we called countDown() function at the end inside countDown function itself
                    then condition will check is 3 <= 0 -> means false
                    so 3 -> will be printed & then 3 will be decremented by 2 & then value becomes 2
                then again we called countDown() function 
                    & so on until if the condition didn't become true
                & when the movement condition becomes true 
                    then finally printed -> "All done" 
                    & we'll exit out of the recursive function i.e countDown() function 💡💡💡

        NOTE : inside a recursion function ✅

            - inside a recursion function 
                we defined 3 main things : 
                    first - a base case/condition
                    second - increment/decrement
                    third - recursion call of a function 

            - inside the condition , we used return keyword
                so we can exit from that recursive function 💡💡💡
            - if we don't use it then recursion function 
                call itself infinite times 💡💡💡

        // output : 4
                    3
                    2
                    1
                    All done
!["recursion"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/51-recursion/lecture-51-0-recursion.PNG "recursion")

        - so there we can see that at 0 (zero) value we hit our base case
            
        - means condition is true & then console.log() will printed -> "All done"
            & then we used return -> keyword
            means return -> keyword is going to end our recursion 💡💡💡
        - because if we didn't have that return -> keyword 
            then recursion will continue & then recursion will go in infinite times 
            & we'll get numbers in negative like this 💡💡💡

            4 
            3
            2
            1
            0
            -1
            -2
            .... infinite times

## examples 2 - of recursion function with call stack (by colt steele) ✅

    eg : 
        function sumRange(num) {
            if(num === 1) return 1 ;

            return num + sumRange(num - 1) ;
        }

        sumRange(3)

        - let's say we passed 3 as a argument 
            & sumRange() function going to return
            all the numbers b/w 1 & summed up until that number i.e 3

        - so here we pass 3
            so sumRange() function should return -> 3+2+12
            which is going to be 6 💡
        - & same if we pass 5 as a argument while calling a function
            then 5 + 4 + 3 + 2 + 1 which is 15 💡

        - when that recursion function calls i.e return num + sumRange(num - 1)
            like this -> 3 + sumRange(2)
            & then -> num = 2 so 2 + sumRange(1)
            so now num = 1 means we hit the base case & then return 1

        eg : 
            let's say we pass 5 as value argument
            so sumRange(5)

            so in call stack
!["recursion"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/51-recursion/lecture-51-1-recursion.PNG "recursion")

            - so here 
                 +-----------------+
                 |   sumRange(1)   |
                 |   sumRange(2)   |
                 |   sumRange(3)   |
                 |   sumRange(4)   |
                 |   sumRange(5)   |
                 +-----------------+

        NOTE : about how recursion + call stack both working together ✅

            - important note 🔥

            - so inside call stack 
                what is happening that recursion function i.e sumRange() function till base case
                - & during that each time sumRange() function called itself 
                    again & again & that will accumulated inside the call stack
                - & the movement that that recursion function hit 
                    the base case then recursion function will stop
                - & till yet whatever sumRange() function stack itself 
                    inside the call stack 
                - that will be executed one by one from call stack 💡💡💡

        - so inside the call stack 
            first sumRange(5) will be stacked
                then sumRange(4) will be stacked 
                    then sumRange(3) will be stacked
                        then sumRange(2) will be stacked
                            then sumRange(1) will be stacked
        - now when the movement base case hit 
            - then from sumRange(1) -> will return -> 1
                after returning 1 then sumRange(1) will be out of call stack
            - now which means sumRange(2) -> can return -> 2 
                because sumRange(2) was waiting for sumRange(1) to return 1
            - now sumRange(3) -> can return 3
            - then sumRange(4) -> can return 4
            - & then finally sumRange(5) -> can return 5
            

        - means recursion function call -> calls the data as input ✔️

!["recursion"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/51-recursion/lecture-51-2-recursion.PNG "recursion")

    -> explanation + diagram of recursion function + call stack ✅

        - like let's say we pass 3 as a argument -> sumRange(3)
            so the diagram of recursion function 

        +--------------------------------------------+
        |    sumRange(3)                             |
        |        return 3 + sumRange(2)              |
        |                    return 2 + sumRange(1)  |
        |                                 return 1   |
        +--------------------------------------------+

        - in this diagram
        - we called sumRange(3)
            then base case/condition is not true so it will not run
            & then sumRange(3) will return 3 + sumRange(2)
        - but sumRange(3) is waiting for sumRange(2) to return the value of sumRange(2)
            so sumRange(2) will say to sumRange(3) that let me bring
        - so sumRange(2) is called , then sumRange(2) will return 2 + sumRange(1)
            but here again sumRange(2) will wait for the value of sumRange(1)
        - so sumRange(1) will be called , then sumRange(1) will return 1 💡💡💡

        - so here sumRange(1) say to sumRange(2) that i got the value 
            so take this 1 value
            so sumRange(1) will return 1 to sumRange(2)
        - Now sumRange(2) got the value from sumRange(1)
            so in the place of sumRange(1) will come 1 as a value like this 
            i.e return 2 + 1 means -> return 3
        - now again sumRange(2) will return 3 
            then in the place of sumRange(2) will come 3
        - now in sumRange(3) will return 3 + 3
        - so finally we got 6 💡💡💡

## example 2 : stack overflow error of call stack in recursion function (colt steele) ✅

    - stack overflow is a common error inside call stack when we do recursion ✔️

    - a base case or condition is very important to have inside recursion
    - otherwise stack overflow error come 
        because not having a base case in the recursion
        then we'll never going to hit the base case ever ✔️

    eg : 
        function sumRange(num) {
            // if (num === 1) return 1
            return num + sumRange(num - 1)
        }

        sumRange(3)

        - so inside recursion function i.e sumRange() function
            we didn't have a base case
        - so as soon as we hit 1 value then there is no base case   
            so sumRange(1) will return/give -> return 1 + sumRange(0)
                & sumRange(0) will return -> return 0 + sumRange(-1)
                    & so on with -2 ..... till infinite times 💡💡💡

        - & then an error will come i.e stack size exceeded
            like this 


                 +-----------------------> here recursion will be called infinite times                   
            |    .             |
            |    .             |
            |    .             |
            |    sumRange(-2)  |
            |    sumRange(-1)  |
            |    sumRange(0)   |
            |    sumRange(1)   |
            |    sumRange(2)   |
            |    sumRange(3)   |
            +------------------+

        - so sumRange(3) is waiting for value which will return by sumRange(2)
            but sumRange(2) is also waiting for value will return by sumRange(1)
            & so on.... till infinite times 
        - but nobody is returning anything 
            because there is no base case inside that recursion function 💡💡💡

        - so here each one is waiting 
            for each one function to return a value
            but nothing will come & recursion goes in infinite loop
        - that's why always give/have a base case inside a recursion function 
            so that recursion function can stop 
            after when it hit that condition/base case/end point/rock bottom 💡💡💡

    RECAP
    -----
        - a recursive function is a function that invokes/calls itself

        - inside a recursive function always must have a base case/rock bottom/condition/end point
            & then that recursive function call
            where that function calls itself with a different inputs (which is a smaller data)
            until it hit that base case & that recursion function stops itself

        - after seeing different examples of recursion with & without call stack 
            now we know where call stack role comes & when not ✔️

## Lecture - of kyle ✅

    - idea of recursion came from stack overflow error ✔️

    - Recursion says - i'm gonna loop through things
                        but I'm gonna do that looping inside of a function 
                        instead of doing that looping inside of a normal loop i.e for loop , etc 💡💡💡

    -> eg : of normal loop i.e for loop

        - printing 1 to 10 numbers using for loop

        for (let i = 1 ; i <= 10 ; i++) {
            console.log(i)
        }

        - this is obvious & actual loop example
            but how would we can do this looping with recursion function 💡

## example 1 - applying concept of recursion function (kyle) 🔥

    - first -> we need a function
    
    STEP 1 - eg : initialize first value which is starting point ✅

        function printNumber(number) {
            console.log(number)
        } 

        printNumber(1)

        // output : 1

        - so here 1 is passed as a argument while calling a function 
            which is a initial value just like we had i = 1 inside -> for loop 💡💡💡

        - here we got output -> 1
            but we want that printNumber() function should call itself
            again & again within next number we print 
            so we need to either increment or decrement based on situation 💡💡💡

    STEP 2 - eg : applying increment in recursion function ✅

        - the next thing we need to in order to increment our number -> 1
            & recall that function again 💡💡💡
            just like we had third section i.e i++ inside a for loop

        function printNumber(number) {
            console.log(number)
            printNumber(number + i)
        } 

        printNumber(1)

    STEP 3 - eg : applying condition in recursion ✅

        - as we had a condition to stop the for loop
            same in recursion function -> we need to apply condition
            to stop the recursion call 💡💡💡

        - always put the condition at the top inside the recursion function 
            & inside that condition we use return keyword to stop/exit 
            the recursion call 💡💡💡

        - so put that condition at the top inside the recursion function 
            if number is greater than 10 + use return keyword inside that condition 💡💡

        NOTE : ✅ 

            - to stop the recursion function when it call itself over & over again
                at the condition then we only use return keyword 💡💡💡

            - don't use break -> keyword directly
                because generally function doesn't understand break -> keyword 💡💡💡

            - break -> keyword only use with condition 
                inside for loop , while loop , switch statement , etc..
                these types of loop didn't understand the return keyword 💡💡 

            - return -> keyword only use directly or with condition inside a function 💡💡💡

        function printNumber(number) {
            if (number > 10) return 
            
            console.log(number)
            
            printNumber(number + i) 
            //OR
            return printNumber(number + i) ---> we can put return keyword for better understanding 💡💡
        } 

        printNumber(1)

        - but in this scenario concept of recursion doesn't making any sense
            & we can do this through for loop also
        - but it's important to know recursion

        - so in recursion , things go to previous one ,
            then again previous one & then again previous one until we hit the base case
            & we have to go back up that stack trace 💡💡💡 
        - means if we want to print 1 - 10 numbers then 
            10 -> will say hey i need 9 , to print myself as 10
            but 9 -> will say hey i need 8 , to print myself as 9
            but again 8 -> will also say hey i need 7 , to print myself as 8
            & so on.... till 1 💡💡💡
        - means in recursion things goes 
            from forward to backward & then backward to forward 💡💡💡       

## Note - example of recursion function (kyle) 🔥

    eg : important example of recursion ✅

        function printNumber(number) {
            if (number > 3) return

            console.log(number)
            printNumber(number + i) // OR return 

            console.log("exiting function")
        } 

        printNumber(1)

        // output : 1
                    2
                    3
                    exiting function
                    exiting function
                    exiting function

        - here how these "exiting function" messages printed out three times
            because when we hit the base case then return -> keyword statement run immediately 💡💡💡
        - so when we return through return keyword then we go one step backward 
            to where value of number variable was 3 (where we stopped before)
            i.e printNumber(3 + i)
            & then we continue executing where we exit/stop at printNumber(3 + 1) function 
            & then we call that console.log() which printed 3 times 
        - why 3 times because we again go to backward about 3 times to stack trace 💡💡💡 
            so that message will be printed 3 times

        - so that message printed 3 times 
            after all of that recursive function calls done 💡💡💡

## example 2 - of finding sum through for loop & recursion (kyle) 🔥

    eg : of finding total sum through for loop ✅

        let sum = 0 // initial value of "sum" variable 

        for (let i = 1 ; i <= 10 ; i++) {
            sum = sum + i 
            //OR
            sum += i
        }

        console.log(sum)

    eg : of finding total sum through recursion ✅

        function sumNumber(num) {
            if (num <= 0) return 0

            return number + sumNumber(num - 1)
        }

        console.log(sumNumber(10))

        - return 0 -> means that 0(zero) is a initial value 
            as we had sum = 0 in for loop 💡💡💡

        // output diagram is 
!["recursion"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/51-recursion/lecture-51-3-recursion.PNG "recursion")

        // output - 55

## challenge by kyle ✅

    we'll take previous example that we took for while loop lecture 

    eg : 
        const person = {
            name : "Teen" , 
            friend : {
                name : "Joe" , 
                friend : {
                    name : "sally"
                }
            }
        }

        while (currentPerson != null) {
            console.log(currentPerson.name)

            currentPerson = currentPerson.friend
        }

    ques - now convert this while loop into a recursion function
          where we pass the person to the function we're gonna print out
          the same inside of that function & then 
          we're going to get that person's friend as a value 
          which is actually is a object
        & continue that all the way down until we get to the very end 
          where there's no more friends & we exit out of the recursion function

        - recursion function name is -> printNames

    Ans 
        const person = {
            name : "Teen" , 
            friend : {
                name : "Joe" , 
                friend : {
                    name : "sally"
                }
            }
        }

        function printNames(friName) {
            if (friName == null) return 

            console.log(friName.name)
            printNames(friName.friend)
        }

        // output : Teen
                    Joe
                    Sally

        NOTE : for myself

            - don't confuse by the condition when we give 
                most of the time you confused with it ✔

    - that's all about recursion & little complex topic 
        but as we use it more & more it'll really
        start to make sense exactly where we need to put 
        all those different variable in order to make a perfect recursive function ✔️

## said by kyle ✅

    - so this is the power of recursion & 
        we can do some really complicated things with it 
        & we can do anything with recursion
    - but recursion is not something that we're gonna see super often
        especially because it's really easy 
        to accidentally create an infinite loop with recursion ✔️
        or maybe we'll forget to put the base case inside a recursion function 

    - that's why not recommended to use recursion
        unless we have a really really use case for it 

    - generally it's easier to use for loop for certain + simple tasks
    - & use while loop where we don't know 
        how much that array or especially object is nested 💡💡💡
