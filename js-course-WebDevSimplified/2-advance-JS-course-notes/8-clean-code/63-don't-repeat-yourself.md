# Don't repeat yourself

- we'll use minesweeper project of functional programming  version

## what is DRY

- `DRY` : means don't report yourself 
- it's a idea which means you should't repeat code in anywhere in our code base
    - you should abstract/convert those stuff into a function or a method or a class <br> 
        or something that takes care of that repeated code for you 💡💡💡

## Example

- inside minesweeper.js file 
    - we have functions like positionMatch , replaceTile , etc <br>
        & these are the functions that we used all the time in our code base 
    - & some of the functions are bit complex like replaceTile() & some are pretty simple like positionMatch() <br>
    - but still code that we would write all over the place & if we didn't have this encapsulated & abstracted into a single function
        - we used/write positionMatch() function code everywhere & all of a sudden , we added in a third parameter like this <br> 
            inside minesweeper.js file , inside positionMatch() function        
            ```js
            export function positionMatch(a, b) {
                return a.x === b.x && a.y === b.y && a.z === b.z
            }
            ```
            - here we can see that if we didn't abstract/put this `a.x === b.x && a.y === b.y && a.z === b.z` into a function <br>
                then things become really hard because since we'd have to change this all over the place <br>
                that's why we put this `a.x === b.x && a.y === b.y && a.z === b.z` inside a function i.e positionMatch() <br>
            - so if in the future if we do changes inside this `a.x === b.x && a.y === b.y && a.z === b.z` then we just need <br>
                to change in one place & that change will be applied those places where we used positionMatch() function 💡💡💡

    - but that's doesn't mean that we shouldn't repeat always means sometimes if we have code that looks the same , feels the same <br>
        or even as almost identical , there are still differences b/w your code <br>
        that's why it's a good idea to actually make that code repeated 💡💡💡
        - Eg : inside draw.js file , 
            ```js
            export function drawSquare(canvas, {x, y, size , size , color}) {
                const context = canvas.getContext('2d')
                context.fillStyle = color
                context.fillRect(x, y, size, size)   
            }

            export function drawSquareOutline(canvas, { x, y, size, color, lineWidth }) {
                const context = canvas.getContext("2d")
                context.strokeStyle = color
                context.lineWidth = lineWidth
                context.strokeRect(x, y, size, size)
            }

            export function drawCircle(canvas , { x, y, size, color }) {
                const context = canvas.getContext("2d")
                context.fillStyle = color
                context.arc(x, y, size, 0, Math.PI * 2)
                context.fill()
            }

            export function clear(canvas) {
                const context = canvas.getContext("2d")
                context.clearRect(0, 0, canvas.Width, canvas.height)
            }
            ```
            - here we can see that they share a lot of the same things like drawSquareOutline() function is same as drawSquare() <br>
                & the only difference is stroke style , so almost both of them are identical (exactly same as) ✔️✔️✔️
        - so maybe here you'll think that we'll make an abstraction means create another function like this     
            ```js
            export function drawSquare(canvas, {x, y, size , size , color}) {
                const context = canvas.getContext('2d')
                context.fillStyle = color
                context.fillRect(x, y, size, size)   
            }

            export function drawSquareOutline(canvas, { x, y, size, color, lineWidth }) {
                const context = canvas.getContext("2d")
                context.strokeStyle = color
                context.lineWidth = lineWidth
                context.strokeRect(x, y, size, size)
            }

            function drawSquareLikeShape(canvas, { x, y, size, color, lineWidth, stroke }) {

            }

            export function drawCircle(canvas , { x, y, size, color }) {
                const context = canvas.getContext("2d")
                context.fillStyle = color
                context.arc(x, y, size, 0, Math.PI * 2)
                context.fill()
            }

            export function clear(canvas) {
                const context = canvas.getContext("2d")
                context.clearRect(0, 0, canvas.Width, canvas.height)
            }
            ```
            - now we may thing that drawSquareLikeShape() function will be great example of abstraction <br>
                because both have almost identical (exactly same as) but that's not that's why DRY is little difficult <br>
                means even code is almost same of both but both are still different each other <br> 
                because both are serving two different purposes 
                - so it doesn't make any sense to abstract them into one single method 💡💡💡
            - & we never going to touch drawSquareOutline() function because drawSquare() is completely different from it <br>
                & same with the case of drawSquare() function
                - but if combined them together into one function like drawSquareLikeShape() function is doing <br>
                    & here we're just coupling lines of code of both function together

## Said by kyle ✅

- so if DRY concept comes then if the code is identical (exactly same) 
    - from other code & with exact same reason then extracting is a good idea
    - but if we have two pieces of code that are the same or very, very similar to each other but they serve completely
        - two different purposes then that means they won't change at the same time <br>
            means they're gonna change at different times for different reasons <br>
            so there's no point in abstracting them out into a function because they do separate things <br>
            & they serve separate purposes 💡💡💡
    - & when we need to change those methods in the future (which are serving separate purposes) <br>
        then we change them by adding some if conditions & if we add more if conditions then <br>
        those functions become `convoluted method` means that function with full of a bunch of if checks 💡💡💡
    - & if a function split into two different thing & both serving different purposes <br>
        then doesn't make any sense to abstract them at all 💡💡💡
    
- always try to extract everything as much as possible

- `mistake of kyle make` : when he was learning programming 
    - then always create abstractions on top of abstractions because he always thought that was how we write clean code <br>
        & abstraction is something which makes the code look a little bit cleaner
    - but the problem i.e it makes it harder to change in the future because these abstractions <br>
        just add layers of complexity on top of things & then we're abstracting things 
    - that are completely different into one thing that makes it hard because now this one thing is trying to do two separate things <br>
        instead of just two separate things doing two separate things 
    - & when you have two things that are completely different combined into one function <br>
        then that function becomes really confusing to work with 💡💡💡
    - now the way he look at abstractions & DRY concept is if he do this & he take these things that are the same <br>
        & combine them into one function to do this for him ? then will that part of code able to change in the future easier ? <br>
        & if so then he will do it but if not so then avoid abstraction because in future it will make more difficult to change 💡💡💡

- so always think that is both are same code & are they serving the same purpose then do the abstraction <br>   
    & don't just go abstracting things right away as soon as you see duplicate code 💡💡💡

## ------ Extra Stuff - on Clean code -------

- blog
  - https://domtech.hashnode.dev/5-tips-for-writing-cleaner-code

