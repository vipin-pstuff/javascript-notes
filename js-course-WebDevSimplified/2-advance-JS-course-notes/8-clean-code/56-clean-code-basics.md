# Clean Code Basics

- clean code is a really difficult subject to teach & to learn <br>
    because it's something that we can really only learn by actually writing code , reading code <br>
    & maintaining a project for an extended period of time ✔️✔️✔️

- we'll talk about structuring the code & easier to read & write & writing maintainable & scalable code for the future ✔️

## What is clean Code 

- it's a idea of making your code easy to read & easy to change in the future

- if we have messy or difficult to read code or your code is difficult to make changes to <br>
    then that's generally a sign of messy code & not very clean

- the idea of clean code is just to make your code more maintainable in the future <br> 
    as your build larger & larger features onto the end of your project
    - one of the ways that we can really improve the cleanliness of your code is to focus more on readability than write ability 
    - means make your code easier to read & not necessarily making code easy to write 💡💡💡
    - because sometimes the easiest code to write is not necessarily the easiest to read <br>
        so refactoring code is also make your code more readable
  
- Eg : let's say your working on a project & after working for a week on that project 
    - you took break & then you come back after 1week or 1month or etc on that project <br>
        then if your code is messy then it's hard to know from where we need to start & making changes <br>
        but if you wrote clean code at that time & then we don't need to spend time on think for where you need to start 

## Best Practices to make Clean code 

- `make your code as simple as possible` 
    - because when you start adding complex things into your code <br>
        then it becomes harder to actually read then means you need to deal with more metal overhead 💡💡💡 
    - so writing simple code is easy to read & write & easy to remember <br> 
        & only use complex things when you actually need them when they actually improve upon the code 💡💡💡

- `always improve your code readability by making good variable names & good function names` : 
    - this is most important thing
    - these things make easy to read the code which means we can make better changes in the future
    - Eg : if you give `p` variable name then we don't know what it's doing <br>
        but if we give `person` then it's means something related to person

  - `prioritize smaller functions , smaller files , pretty much smaller everything` : 
    - into code bases where there are files that have thousands of lines in them <br>
        & these files are pretty much impossible to understand
    - because can you really keep over a thousand lines of code in your head at one time <br>
        & know what's going on No , it's entirely impossible
    - but if you have small files that are maybe tens or hundred of lines <br>
        then it's so much easier to know exactly what's going on in these files 
    - `recommended advice from kyle` : make your programming files , no bigger than a couple hundred lines at most <br>
        because generally , when it starts to get above that & it goes into the multiple hundreds & thousands of lines <br>
        then it just becomes really hard to follow what's going on & same thing for functions shorter <br>
        because if you have a function that's 300 lines long then how you're gonna know what's going on in that function <br>
        when instead you could break it up into a bunch of smaller functions 💡💡💡
    
- `make the code better & cleaner in terms of testing` : 
    - think about testing when you're writing your code means think about how your code is gonna be tested
    - generally it's going to make it easier for us to write better code <br>
        because you kind of know how the code is gonna work & you know the edge cases <br>
        & due to things become easier to know what exactly it should look like
    - & it'll let you think of these edge cases ahead of time <br>
        means if you build out the code & then add the edge cases in afterwards then the code gets kinda messy <br>
        & you're gonna need to refactor it to make it look a little bit cleaner 💡💡💡

- `really important thing about making clean code` : 
    - is that any time that you can remove code , it is always a good thing .
    - there's never a bad thing with removing code because if you remove code <br>
        it means you don't have to memorize it means you don't need to know what it does
    - as long as the code is absolutely not necessary anymore , just remove it & don't comment it out <br>
        means just remove it as soon as you don't need it anymore <br>
        because otherwise you have to deal with the cognitive overhead of knowing is the code needed ? 💡💡💡

- `another & most important to make clean code` : 
    - the best thing to do is to setup conventions that you follow yourself
    - means give yourself specific rules around how you name variables around how you define functions & how your file lengths are <br>
        to know how all your code works which makes easier to read & change it in the future
