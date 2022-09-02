# for loop

    - through loop , how we can run the code
        multiple times in a row format ✔️

## syntax of for loop

    - initialization + condition + increment or decrement comes 
      inside parenthesis of for loop

    - initialization comes first 
    - then condition comes second 
    - then increment or decrement comes third

    eg : 
        for (initializer ; condition ; iteration) {
            // code to be executed
        }

    NOTE : ✅ 
        - after iteration don't give semi-colon 💡💡

## example - of for loop

    eg : normal using of for loop

        for (let i = 0 ; i < 5 ; i++) {
            console.log("hi")
        }

        first - let i = 0 -> this means we're starting a variable with a initial value 💡
        second - i < 5 -> means condition for how many times we want run loop 💡
        third - i++ -> means to increment value of "i" variable 💡 

        - initializer , condition & iteration can be changed according to situation ✔️

        - here instead of giving i++
            we can give i + 1 or i + 2
        - but generally we give i++ 💡

    eg : of infinite loop

        for (let i = 0 ; i >= -1 ; i++) {
            console.log("hi")
        }

        - to stop the infinite loop in vs code terminal then press -> Ctrl + c

    eg : traversing + accessing elements from inside an array by using for loop ✅

        const a = ["a" , "b" , "c"]

        for (let i = 0 ; i < a.length ; i++) {
            const element = a[i]
            console.log(element)
        }

        - here we can use for of loop instead of traditional for loop 💡💡💡
            like this 

## example - of for of loop & for in loop 

    -> for of loop ✅
        - it gives all the elements of an array just like a normal for loop 💡💡💡

    -> for in loop ✅
        - it gives index number of each elements of an array 💡💡💡

    eg : traversing + accessing elements from inside an array by using for of loop ✅

        const arr = ["a" , "b" , "c"]

        for (const element of arr) {
            console.log(element);
        }

        - here we wrote less code + more readable
        - so always use for of loop if we want only all the values of an array ✔️

        - here element is a variable name 
            & we're getting the value from that arr ✔️

        - same thing we do with for in loop 


    NOTE : getting each values + index of an array ✅  

        - if we want all the elements/values/items + index number of each elements of an array
            then always use forEach() method of array ✔️

    NOTE : returning each values/elements of an array by using return keyword  ✅

        - if we want to return each values of an array
            then still we need to use forEach() method of array

        - here for loop or for in loop don't work

    suggestion by kyle
    ------------------

        - always recommended to use forEach() method of array instead of for loop 💡💡

## break & continue keywords 

    -> break keyword ✅
        - it is used to exit out from the switch statement , same with for loop also 💡💡💡
        - use break -> keyword with condition inside a for loop 💡💡💡

        eg : 
            for (let i = 0 ; i < 5 ; i++) {
                console.log("start")
                if(i > 2) {
                    break
                }
                //OR
                if (i > 2) break

                console.log("end")
            }

            - the movement value of 'i' variable becomes greater than 2
                then immediately we'll out of the for loop
                & whatever statement we wrote after break -> keyword
                will not be executed 💡💡💡

    -> continue keyword ✅
        - used with condition inside a for loop 💡💡💡
        - it works like then movement when we the condition is true
            then the continue keyword -> change the control of a for loop
            & then directly control will go to the main condition of the for loop  
            & this will happen till that condition is true 💡💡💡

        eg : 
            for (let i = 0 ; i < 5 ; i++) {
                console.log("start")
                
                if(i > 2) continue

                console.log("end")
            }

            - here then movement when the condition of the continue -> keyword becomes true
                then continue -> keyword will change the control of a for loop
                & directly control will go to main condition of for loop i.e i < 5
                & this will happen till if the condition of continue -> keyword is true i.e i > 2 💡💡💡 

## challenge time

    ques - create a for loop that loops from 0 to 10
            & prints out all values from 0 to 10
            & make sure 10 also be printed
            & then modify this loop & exit the loop when the value is equal to 5
            by using break -> keyword

    Ans - 
            for (let i = 0 ; i <= 10 ; i++) {
                console.log(i)

                if (i === 5) break
            }

        NOTE : ✅

            - we can write break keyword in one line 
                to make more readable ✔️

            - but if there are condition + break keyword
                then don't do it otherwise readability decrease ✔️

## said by kyle 🔥

    - continue -> keyword that we won't see very much inside of for loop
    - but break -> keyword that we see very often 
            when if we want to exit out of a for loop 💡💡💡

    - still these are two keywords that we don't see two often

    - these are stuff that we shouldn't worry about 
        but important thing to know

    - & use for loop or for of loop when we want to iterate 5 or 6 times
        but if we want to iterate 20 or 30 times then
        forEach() method of array is perfectly fine ✔️
