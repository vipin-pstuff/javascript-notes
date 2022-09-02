# Coupling & Cohesion

- these topics are important to make the code easier to read & understand

- we'll have Minesweeper project of functional programming version i.e minesweeper.js & script.js file <br>
    & we also have Minesweeper project which isn't functional programming version <br>
    & we'll come both & see the difference b/w coupling & cohesion

## what is Coupling & Cohesion

- `coupling` : 
    - it is just how interlinked two different modules or files or pieces of code are 
    - Eg : if we have code that is very linked to one another through a lot of different ways <br>
        such as if they directly modify each other , they call each other a bunch of times , <br>
        then you have a highly coupled set of modules
    - & in programming , high coupling is very bad , You want to have the lowest coupling possible 💡💡💡 <br>
    - means we want our modules to depend on the least amount of other modules possible <br>
        that means when we change code in one file then it doesn't make any changes in other files 💡💡💡
    - Eg : inside minesweeper.js file of Minesweeper function programming project <br>
        so if we change that createBoard() function then we want it to have the least amount of effect <br>
        on the rest of the code in our application 💡💡💡
        - that's why high coupling is bad & low coupling is good , <br>
            so the less interconnected our code is then the better it's going to be 💡💡💡

- `Cohesion` : 
    - it's opposite of coupling 
    - it tells about how well the code in one single module or file can follow to one single blueprint <br>
        means how interconnected are the code in one particular file ?
    - Eg : inside minesweeper.js file of Minesweeper function programming project , <br> 
        all of our code is related to the same particular thing & it'll all does the same thing <br>
        & it doesn't really do anything else means particular only dealing with the actual logic of the minesweeper board <br>
        & it doesn't deal with display & with user input , etc any of that information 
    - so the cohesion is very high since it's only doing one particular thing <br>
    - & in software , 
        - `high cohesion` is very good because it means that your files or modules <br>
            do one thing & one thing only & they all are concentrated on doing that one thing 💡💡💡
        - `low cohesion` means that we have a module or a file that does a bunch of different things <br>
            maybe it has a bunch of unrelated functions inside of it 💡💡💡
            - Eg : inside Minesweeper Project without functional Programming  <br> 
                we can see that we have our `createBoard` function & inside of it we're dealing with elements <br>
                i.e `return this.element.dataset.status` & also we're dealing with the DOM which means we're dealing with display
            - & inside of it we also have other things that we're dealing with inside of here such as the logic for our game , etc <br>
                but main thing is we have `return this.element.dataset.status` which we need to worry about both <br>
                i.e dealing with display on our DOM & the actual logics i.e `const element document.createElement("div")` <br>
                & this is lower cohesion than the function programming version
            - inside minesweeper.js file of minesweeper project (which is not a functional programming version) <br> 
                doing a bunch of things means it's lower in cohesion but it's still a pretty high cohesion model <br> 
                just because it's still mostly focused on just the logic of the minesweeper game

    - minesweeper.js file (of functional programming version) is so high in cohesion <br>
        because inside of it , we use pure functions & pure functions are really good at being high cohesion <br>
        because they only do one particular thing & that one particular thing doesn't have any weird side effects 💡💡💡 <br>
        so we don't have about dealing with like side effects of the UI or fetching from a database or etc stuff <br>
        because these pure functions are all focused on one singular thing
        - but if we put a bunch of pure functions together inside of one file or one module <br>
            then we have one module i.e all focused on doing one particular thing just <br>
            just like inside minesweeper.js file (of functional programming version)

- so we have a very high cohesion module in cohesion & pure functions are actually really good at being low in coupling 💡💡💡 <br> 
    because pure functions don't have any side effects & they don't depend on anything else & something that doesn't have any dependencies <br>
    so pure functions automatically gonna be low coupling & they doesn't have any side effects 💡💡💡 <br>
    that's why inside minesweeper.js file (of functional programming version) , <br>
    we define `boardSize & minePositions` as arguments inside createBoard() function <br>
    that's why pure functions are great for having low coupling & high coupling also
    - Eg : inside minesweeper.js file (which is not functional programming version) 
        - we can see that we don't have pure functions which means that we have to worry about low cohesion 💡💡💡 <br>
            because we're dealing with UI inside the same function i.e createBoard() function
        - we actually have a lot more coupling because now the functions inside createBoard() function <br>
            which are dealing with UI i.e document.createElement() function & they're updating our DOM <br>
            & then they're updating our element dataset status i.e `element.dataset.status = TILE_STATUSES.HIDDEN` <br>
            which is changing the styles of our CSS i.e changing UI 
        - so that one function i.e createFunction() function just dealing with the logic of the board <br>
            till dealing with updating our DOM , updating our styles mean touching everything in our code

    - so inside minesweeper.js file (of functional programming version) , inside minesweeper.js file , 
        - inside createBoard() function , we're just dealing with the logic only 
    - & inside minesweeper.js file (of not functional programming version) , inside minesweeper.js file , <br>
        - inside createBoard() function , we're dealing with everything means it's touching all the different pieces of code 
        - & it's highly coupled to all those different sections & which just makes it harder to work <br>
            because if we make changes to how the actual css styling is going to work <br>
            then we need to do changes inside createBoard() function
        - but if we do changes inside createBoard() function (of functional programming version minesweeper.js file) <br>
            then we don't have to bother because createBoard() function has nothing to do with css styling <br>
            that's why pure functions are really great 
            - pure functions are really great because they make easier to write code & they're low coupled & high cohesion 💡💡💡

- generally when you're writing code then just think about 
    - what is this code all touching , when you create a file 
    - when you create a module , think about what is this supposed to do ?
    - Eg : you gonna make all your functions to do that & once you do that <br>
        then check those functions & say "well, where is this all touching the rest of my code ? <br>
        is it dealing with the UI ? is it dealing with fetching from an API ? is it dealing with the DOM ? <br>
        is it importing all these other modules & changing things around in them ?"
        - so if it's doing that then generally you're introducing more & more coupling <br>
            & it's okay to have some coupling because you're going to have coupling 💡💡💡
        - & if you'd (you had) never coupled your code together then you couldn't get anything done <br>
            because you need to your code to be connected to be able to communicate & work together 
        - but if you want to reduce those connection points to as few as possible <br>
            because the less connection b/w your code that means that you can change code <br>
            & most likely not have to change other code because if you have tons of connections all over the place <br>
            & all your code is touching all your other code then you'll face a spider web effect <br>
            then you have to change all your other code & all those other locations 💡💡💡 <br>
        - but if your code only connects to each other in a few places then you only need to have that spider effect <br>
            means when you change the few places where your code is actually connecting to each other <br>
            - Eg : means like this functional programming minesweeper project , <br>
                if we changed how we wanted to display the UI of our board then we would never have to touch <br>
                that minesweeper.js file (of functional programming version) because those codes have nothing to do with UI <br>
                so we just need to change that script.js file (of functional programming version) which does all the UI stuff for us <br>

    - but inside minesweeper.js file (of not functional programming version) , if we changed how our UI was being displayed <br>
        then we most likely would have to make some changes inside of this function i.e createBoard() function <br>
        because this function deals with creating elements in the DOM & doing with the UI <br>
    - while in minesweeper.js file (of functional programming version) , inside createBoard() function <br>
        has nothing to do with the UI at all 💡💡💡

- `another thing that we can do with the help of clean code , not necessarily with cohesion & coupling ✅` :
    - generally make your functions smaller because smaller functions make easier to your code 
    - Eg : inside minesweeper.js file (of functional programming version)
        - we have small function like replaceTile() then we can share that smaller function anywhere <br>
            because it has very few dependencies & it's not going to have a bunch of coupling b/w a bunch of different functions 💡💡💡
        - so we can place replaceTile() function anywhere we need it to be because it's not gonna cause a huge coupling burden <br> 
            because it's a little function & it's not gonna cause any weird cohesion means we're not gonna lose cohesion <br>
            because replaceTile() is doing one particular little thing 💡💡💡
    - so if we have a lot of small functions then it's generally better than having few large functions 💡💡💡

- `another great thing is if you have that low level of coupling & high level of cohesion ✅` :  
    - is you can have something called a black box
    - A black box means some code that does something but it doesn't matter how it does it 💡💡💡
    - Eg : inside script.js file (of functional programming version) , 
        - we imported some functions for creating a board like createBoard , markTile , revealTile , checkWin , etc
        - & after importing , we don't need to worry at all for how these functions work <br>
            & we can just use it & never have to worry about what it does
        - so this is the idea of black box , so these imported functions are black box & we don't need to look those black box
        - we just need to know that we give it (like createBoard) something & it returns something to us & that's all that matters <br>
            so if we have a code let's say pure functions where the side effects don't exist <br>
            then it's really easy to have these abstractions because we don't have to worry about side effects 💡💡💡
        - while inside script.js file (of not functional programming version) ,
            - we imported functions like createBoard , markTile , revealTile , checkWin , etc <br>
                & we have side effects inside like createBoard() , markTile() <br>
                like createBoard() function creates DOM elements & etc
            - & here we need to think about when we call these functions & it becomes harder to think of them as a black box <br>
                where we don't worry about what happens, we just need to understand how these functions work at a core level 💡💡💡

    - generally , if we write pure functions then it's really good because it means we can just forget about what that functions does <br>
        & only care about the inputs & outputs means less code we have to think about & easier to write & read code 💡💡💡
