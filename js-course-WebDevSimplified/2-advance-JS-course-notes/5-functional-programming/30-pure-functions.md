# Pure functions 

- Pure functions is a building blocks of functions programming
- important topic 🔥
  
## About Lecture 

- so we'll learn what a pure function is 
- why it's important & where we can use it inside of functional programming 

## Normal Example 

- Eg : of Impure function
    ```js
    const array = [1, 2, 3, 4]

    // impure function 
    function addElement(element) {
        array.push(element)
    }

    console.log(array) // (4) [1, 2, 3, 4]
    ```
    - but if we insert a element by calling addElement() function
    ```js
    const array = [1, 2, 3, 4]

    // impure function 
    function addElement(element) {
        array.push(element)
    }
    addElement(5)

    console.log(array) // (4) [1, 2, 3, 4, 5]
    ```
    - so we appended an element to our array

- `why this addElement() function is impure function 💡` : 
    - it's not a pure function because we're using that `array` variable
        - & modifying it outside of our function
        - so that `array` variable lives outside of that `addElement()` function
        - but `addElement()` function is actually modifying the value of that `array` function
    - so we're modifying & mutating our data outside of the function

# about pure function ✅ 

- pure function can't have any side effects 
- & one type of side effect would be mutating data
- Eg : changing that global `array` variable 
    - because that `array` variable is not a part of our `addElement()` function

- even if we do this 
    ```js
    const array = [1, 2, 3, 4]

    // impure function 
    function addElement(a , element) {
        a.push(element)
    }
    addElement(array , 5)

    console.log(array) // (4) [1, 2, 3, 4, 5]
    ```
    - still this is not a pure function because modifying that `a` variable 
        - means we're actually changing the value of variable i.e `array`

- so to fix this then instead of modifying the value of `array` variable , just return a new array 💡💡💡
    ```js
    const array = [1, 2, 3, 4]

    function addElement(a , element) {
        return [...a , element]
        a.push(element)
    }
    console.log(addElement(array , 5)) // output : (5) [1, 2, 3, 4, 5]
    console.log(array) // output : (4) [1, 2, 3, 4]
    ```
    - so here `console.log(addElement(array , 5))` will return a brand new array 
    - which doesn't modify the original array i.e `array` 
    - & this is pure function because it only relies on it's inputs `a` & `element` argument 
        - & it never modifies anything outside of the local scope of that `addElement()` function 💡💡💡

- `Rules of a pure function ✅` : 
    - `1st Rule` : we need to make sure that we only reply on inputs to our function
        - or we only reply on variables that can never change 
        - Eg : 
            ```js
            const array = [1, 2, 3, 4]
            const PI_VALUE = 3.14

            function addElement(a , element) {
                return [...a , element , PI_VALUE]
                a.push(element)
            }
            console.log(addElement(array , 5)) 
            console.log(array)
            ````
        - so here we must always reply on the inputs i.e `[...a , element , PI_VALUE]`
        - or global constant variables for our function `const PI_VALUE = 3.14`

    - `2nd Rule` : we can't have any side effects
        - so things like modifying variables which are outside the local scope like `array` variable 
            - in a way that actually changes them
        - or even such as calling it API , if we do a fetch request to call an API
            - so that's a side effect because calling the API is a side effect of that function 💡💡💡
        - so anything at all whether it's mutating data , doing something that's inconsistent
            - like querying a database or querying an API , etc . all of those are side effects of the function

    - `3rd Rule` : don't call impure function inside of the pure function 
        - otherwise that pure function will not remain pure function
        - but if we call the pure function inside the pure function then overall means that's pure function
        - Eg : of `calling a pure function inside pure function`
            ```js
            const person = {
              name: "Gen" , 
              friends: ["Steve", "Elon"]
            }

            // pure function
            function addFriend(friNamesList , friendName) {
              return [...friNamesList , friendName: addElement(...friNamesList.friends, friendName)]
            }

            function addElement(a , element) {
                return [...a , element]
            } 

            console.log(addFriend(person.friends , "Zara"))
            console.log(person.friends) 
            ```

        - Eg : of `calling a impure function inside the pure function like methods of Math`
            ```js
            const person = {
              name: "Gen" , 
              friends: ["Steve", "Elon"]
            }

            // impure function
            function addFriend(friNamesList , friendName) {
              return [...friNamesList , friendName: addElement(...friNamesList.friends, friendName)]
            }

            function addElement(a , element) {
                return [...a , element , Math.random()]
            } 

            console.log(addFriend(person.friends , "Zara"))
            console.log(person.friends) 
            ```
            - then we'll get a random number every time , so even though we give it the same inputs 
                - we're actually getting different outputs 
                - so we're breaking rules of the pure functions
                - so that `addElement()` is an impure function which means that `addFriend()` is also a impure function
                    - because `addFriend()` impure function calls the impure function i.e addElement() function 💡💡💡
            
- & the reason of all these rules is because a pure function at it's core definition says
    - giving the exact same inputs then we'll always get to the exact same output returned
    - with no side effects & no additional changes that's why that `addElement()` function works 
    - Eg : means if we log out 5 different times 
        ```js
        const array = [1, 2, 3, 4]
        const PI_VALUE = 3.14

        function addElement(a , element) {
            return [...a , element , PI_VALUE]
            a.push(element)
        }
        console.log(addElement(array , 5)) // output : (6) [1, 2, 3, 4, 5, 3.14]
        console.log(addElement(array , 5)) // output : (6) [1, 2, 3, 4, 5, 3.14]
        console.log(addElement(array , 5)) // output : (6) [1, 2, 3, 4, 5, 3.14]
        console.log(addElement(array , 5)) // output : (6) [1, 2, 3, 4, 5, 3.14]
        console.log(addElement(array , 5)) // output : (6) [1, 2, 3, 4, 5, 3.14]
        console.log(addElement(array , 5)) // output : (6) [1, 2, 3, 4, 5, 3.14]
        console.log(array)
        ``` 
    - so here we can see that we got the same output even after printing out 5 different times 
    - because this `addElement()` function has no side effects & it only relies on it's own inputs
    - & every time we give the same inputs to `addElement()` function then it will return same output 

- inside Math solver project problem , we took a math equation such as `2 + 4 * 3 - 7`
    - & we were able to deduce it but this equation is same as `2 + 12 - 7` which is also same as `14 - 7`
    - & again which is same as `7` , so this is the same idea as a pure function 
    - so each one of these section i.e `4 * 3` is a pure function inside `2 + 4 * 3 - 7`
        - & `4 * 3` will always return `12` & that's pure function do
    - so `pure functions` doesn't have no side effects & we know it's always going to return the same thing 
        - means giving the same inputs & due to this , lot of people think of pure functions as similar to functions inside of `math`
        - because Math function such as 2 + 2 always return 4 when we give same inputs 2 + 2 many times 💡💡💡

## Challenge Time

- `Ques` : make this impure function as pure function
    ```js
    const person = {
        name: "Gen" , 
        friends: ["Steve", "Elon"]
    }

    // impure function
    function addFriend(friendName) {
        person.friends.push(friendName)
    }

    addFriend("Zara")

    console.log(person) 
    ```
    - here we can see that we'll get value of `friends` property updated means we directly modified
    - so convert this impure function into a pure function that doesn't have any side effects 
        - or any other things that makes this impure 💡💡💡

- `Ans` : converting that impure function as pure function 
    ```js
    const person = {
      name: "Gen" , 
      friends: ["Steve", "Elon"]
    }

    // pure function
    function addFriend(friNamesList , friendName) {
      return [...friNamesList , friendName: [...friNamesList.friends, friendName]]
    }

    console.log(addFriend(person.friends , "Zara"))
    console.log(person.friends) 
    ```
    - if we do this `friNamesList.friend.push(friendName)` instead of returning a new object 
        - then still we're mutating the original object
    - so `return [...friNamesList , friendName: [...friNamesList.friends, friendName]]` will return a new updated array
        - & that original didn't modified

- `said by kyle` : 
    - this is important to understand because in OOPs , many times the actual modification of the state
        - like our side effect that we're creating is going to be pushed down as low as possible
        - into the actual model or object , so that way we don't have to mentally think about it while writing the code 
    - but in functional programming , we take the opposite approach
        - means we want pure functions as possible & we want our actual side effects or mutations 
    
    - `best practices ✅` : always put impure functions at the very top of the script file 
        - because those impure functions will very start of our program
        - & we want to have as many pure functions as possible underneath of that impure function 
        - so instead of pushing all of the function mutation & etc to the lowest level possible
            - instead of pull it up as high as possible & use as many as pure functions as we can to get the results that we need
            - before we actually make our mutation 💡💡💡

    - we're gonna use pure functions all over the place in upcoming lectures 

## --- Extra Stuff of Pure functions ---

- videos 
    - https://www.youtube.com/watch?v=k8I4zZ5sc7E&ab_channel=CodeImprove
    - https://www.youtube.com/watch?v=4IIWib5MZKg&ab_channel=Academind
    - https://www.youtube.com/watch?v=DZ2yp5Sn0Eg&ab_channel=RethinkingUI
    - https://www.youtube.com/watch?v=J_mYQIMWH3g&ab_channel=MukeshJoshi
    - https://www.youtube.com/watch?v=ZXxahQS1PN8&ab_channel=DaveGray
    - https://www.youtube.com/watch?v=x9Cy-N22uvQ&ab_channel=DevDreamer

- Blogs 
    - https://suprabhasupi.hashnode.dev/pure-vs-impure-functions
    - https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976
    - https://blog.greenroots.info/what-are-pure-functions-and-side-effects-in-javascript
    - https://www.freecodecamp.org/news/what-is-a-pure-function-in-javascript-acb887375dfe/
    - https://www.syncfusion.com/blogs/post/pure-and-impure-functions-in-javascript-a-complete-guide.aspx
    - http://net-informations.com/js/iq/pure.htm
    - https://dev.to/sanspanic/pure-vs-impure-functions-50aj
    - https://www.educative.io/edpresso/pure-function-vs-impure-function
