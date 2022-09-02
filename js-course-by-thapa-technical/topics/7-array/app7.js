
// difference b/w for in loop and for of loop
/* 
    solution :
    
    - for in loop return index number of each element

    - for of loop give all the elments of an array
    just like a normal for loop

*/

// 🔥 challenge time - timeline : 5:38:55
// this question will be based on CRUD operation
/* 
    Ques : 
        1 - Add Dec at the end of an array
        2 - what is the return value of splice method
        3 - update march to March (update)
        4 - Delete June from an array

        these all 4 should be perform by only one method
        like we need to perfrom CRUD by using only one method
            don't use push() , pop() method , etc 

    const months = ["Jan", "march", "April", "June", "July"]

    NOTE : 
        - due to pop() and unshift() method , we're just able 
        to remove last and at starting element of an array

        - but we want to remove and add in the middle of an array
            so how we can do this

*/

/* here if we got the only one question then we can do 
    by using push() method but 
    we have more than one question that we need to do 
    by just using only method
*/

const months = ["Jan", "march", "April", "June", "July"]

// solution 1 : - Add Dec at the end of an array
const newMonth = months.splice(5,0,"Dec")
console.log(months)
/* 
    NOTE : 
        in splice() method we have

        - first argument is a index number
            which is a starting number means from where we want
            to start so i.e 5

            - because there is no element at 5th index
            
        - second argument is a delete number
            like here do we want to delete that element 
            which is in 4th index
            so answer is nope we don't want
            that's why we put 0(zero) there

        - third argument is for to update / add a new element
            like here we want to add "Dec" at the end of an array

    - so output is 
        ['Jan', 'march', 'April', 'June', 'July', 'Dec']
*/

/* 
    - like here is a problem that what if have 100 + more
        elements inside our an array then we can't count them
        and it's too much difficult to count

        - so remember that whenever you solve many problems 
            then you'll see a pattern

    - so right now we have 5 elements in our array
        so this we can do that
        give length of an array as a index number
        like this

        - but use length property if we want to add/remove 
            an element at the end of an array 
*/
const newMonth2 = months.splice(months.length , 0 , "Dec") ;
console.log(months)
// output : ['Jan', 'march', 'April', 'June', 'July', 'Dec']

// solution 2 : - what is the return value of splice method
console.log(newMonth2)
// output - [] --> empty array
/* 
    NOTE : 

        - here we're getting empty array because 
            months.splice(months.length , 0 , "Dec")
            here we didn't deleted any element from an array

        - so if we delete any element from an array
            then that deleted elements we'll be return
            by splice() method inside this empty array
*/

// solution 3 : - update march to March (update)
const updateMonth = months.splice(1 , 1 , "March") ;
console.log(months)
// output - ['Jan', 'March', 'April', 'June', 'July']

/* 
    NOTE : 
        - so here if we want to delete elements then 
            from that index number till which index number
            do you want to delete elements

        - like here 
            months.splice(1 , 1 , "March")
            splice() method is starting to delete elements 
            from 1 and ending on 1 only that's why 
            only 1 element is deleted which is on 1st index 
*/

/* 
    NOTE : 
        - again right now we're doing manual work using 
            splice() method

        - eg : 
            let's say in that array we have 50 data
                randomly 27 or 28 element you want to update
                like how do you know that on which index that data 
                exists

        - so whatever we study till yet we need to apply
            so whatever an element you want to update
            first see whether it exists in our array or not

            - so we use includes() method for checking
            - but first think which method is giving index number
                i.e findIndex() or indexOf()

        so let's see
*/
const months = ["Jan", "march", "April", "June", "July"]
//getting index number of that element
/* so if "march" -> this element inside our array then 
    means we'll get index number 
*/
const indexOfMonth = months.indexOf("march")
/* so if we get a index number of that element then 
    easily we can perform but if we don't get
    then what indexOf() method will return

    - important thing is which method return what 
        we need to keep this in mind

    so let's put if else statement
*/
/* if "march" index number is not equal to -1 then 
    it means "march" element exists in our array 
*/
if (indexOfMonth !== -1) {
    // indexOfMonth is giving index number of "march"
    // doesn't matter on which index number "march" exists
    const updateMonth = months.splice(indexOfMonth , 1 , "March")
    console.log(months)
} else {
    console.log("No such data found!")
}
       
// solution 4 - Delete June from an array
const months = ["Jan", "march", "April", "June", "July"]

// here we're checking whether index number of "june" exists or not
const indexOfMonth = months.indexOf("June")
if (indexOfMonth !== -1) {
    const updateMonth = months.splice(indexOfMonth , 1 )
    console.log(months)
} else {
    console.log("No such data found!")
}
// output - you'll see we delete the "June" element
/* 
    - if i give 2 
        const updateMonth = months.splice(indexOfMonth , 2 ) 

    - then from "June" to "July"
        these both element together will we deleted
        but we want to delete only "June"
        then only give 1 -> in second argument of splice() method

    output - ['Jan', 'march', 'April', 'July']

    - now if you do console.log(updateMonth)
        then you'll get the delete element inside 
        an empty array 

    - so when we delete any element then 
        splice() method will return those inside an empty array

        - why empty array because if we don't delete 
            any element from our array then splice() method
            will return an empty array
*/

// Random Example : 
/* what if we want to delete all the elements after "April"
    so to do this we use Infinity keyword as second argument 
    of splice() method like this 
*/
const months = ["Jan", "march", "April", "June", "July"]
const indexOfMonth = months.indexOf("April")

if(indexOfMonth !== -1) {
    /* 
        here Inifnity keyword means delete all the data
        from "April"
    */
    const updateMonth = months.splice(indexOfMonth , Infinity)
    console.log(months)
    // output - ["Jan", "march"]
    console.log(updateMonth)
    // output - ["April", "June", "July"]
} else {
    console.log("No such data found!")
}



/* 
    NOTE : why we should delete that element first and
            then update with new one in splice() method ?
            
        - here we deleted the "march" because to update 
            from "march" to "March" then we need to remove 
            the previous one

        otherwise if we don't delete then this will happen
        
        const months = ["Jan", "march", "April", "June", "July"]
        const updateMonth = months.splice(1 , 0 , "March") ;
        console.log(months)

        output - ['Jan', 'March', 'march', 'April', 'June', 'July']

        - as you can see here that we didn't deleted the "march"
            and "March" is added at 1st index position

        - so it's important that whenever we're using splice() method
            to update that thing then we need to first delete it and 
            then add on that index position
*/

// 🔥 challenge time - timeline - 5:57:13
/* 
    Ques-1 
        find the square root of each element in an array ?

        let arr = [25, 36, 49, 64, 81]

    Ques-2
        mutliply each element by 2 and return only those elements
        which are greater than 10 ?

        let arr = [2, 3, 4, 6, 8] 

    NOTE : before doing question-2 , 
        we just learned about that map() method is chainable method

*/
// solution-1
let arr = [25, 36, 49, 64, 81]
    
// let newArr = arr.map(num => {
//     return Math.sqrt(num)
// })   
    // OR
let newArr = arr.map(num => Math.sqrt(num))
console.log(newArr)
// output - [ 5, 6, 7, 8, 9 ]
/* 
    NOTE : 
        - in Math object we have a method to find square root 
            is sqrt()
        - use like this Math.sqrt()
*/

// Solution-2 
// here as we know that map() method is chainable method so
let arr2 = [2, 3, 4, 6, 8] 

let newArr2 = arr2.map(curNum => {
    return curNum * 2
}).filter(curNum => curNum > 10)
console.log(newArr2)
// output - [12, 16]

// NOTE : and this is how professional programmer use power of chainable 


