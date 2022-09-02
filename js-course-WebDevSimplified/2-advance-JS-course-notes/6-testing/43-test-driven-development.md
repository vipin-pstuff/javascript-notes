# test driven development

- we'll be taking about test driven development which means we're going to get a little bit away from projects <br> 
    which is good to take break

## About Test Driven Development

- here we'll talk about concepts related to testing i.e Test Driven Development or TDD ✔️

- the idea of Test Driven Development is that we're driving our development of our code based on the test that we write 
  - Normally , when we write out code if then we face problems like we write out the code to solve the problem
  - & then we write the test for that code & that's how a lot of people do coding 
  
- But the idea of test driven development is to flip this process means 
    - first we get our problem then we write the test for the code (before we even write the code)
    - & then we write the code that makes that test pass

- `Eg : of test driven development` : 
    - let's say we have the actual requirements that we need to create a code that adds numbers together
    - so we create a function which is going to add numbers together & that's the code we're going to write 
    - & that's the requirement that we have , so instead of going out & writing that code 
    - what we need to do is first write a test that we have some function that adds numbers & give it two numbers to add <br>
        & we're expecting the result to be the added number , so we could write a test that says like expect the sum 2 + 2 = 4 <br>
        & this is a test 
    - so we wrote the test & that test failed , not because that test doesn't work that we wrote <br> 
        because we have no function but we just don't even have that code written yet <br>
        so our test is going to be like if the test passed then well done but if it's failed <br>
        then we'll do tweaking & tweaking until that test to pass

- so the idea of test driven development is that before writing the test first
  - we first thinking about the different edge cases that we have to code around 
  - & we're also thinking about how we're going to be implement so that's easy to test  
  - & due to test driven development , our code will be organized & it's going to check more edge cases & easy to test in general ✔️

- `disadvantage of it` : but it doesn't always work out that way
    - one problem with it , is when we have really complex or larger projects that we're working on <br>
        & we have lots of changes we need to make , so it's kinda difficult to know what our code is going to look like <br>
        before we actually write it 
        - because generally , if you're like kyle , when we write code then it kind of starts out looking one way <br>
        - & by the time you're done , so code completely morphed into something from what we're originally want

    - so if we do all of that test driven development & we write out all of these tests around
        - & we think the code is going to look like fine & work 
        - but it end up being completely different & well kinda wasted a lot of time writing our those tests

- so generally when we have larger & more ambiguous(having more meanings of one thing) kind of requirement
  - which is what most people deal with when they're dealing with programming 
  - & it's little bit difficult to do test driven development

- some of the test driven development are really useful like thinking about the edge cases of our code 
    - so thinking about edge cases before writing code then it's great & catch these different edge cases
    
- if we're writing the test then that should be well-maintained test after the code 

## said by kyle

- it doesn't really matter that we should do or not do test driven development
    - but in general when we have more ambiguous requirements or more complex code <br>
      then it's better to not do test driven development
    - but if we have more concrete , rigid requirements then test driven development maybe good way to do with Jest 💡💡💡

- but this is upto us whether we want to do or not 

## ---- Extra Stuff on TDD ----

- videos
  - https://www.youtube.com/watch?v=Jv2uxzhPFl4&ab_channel=Fireship
  - https://www.youtube.com/watch?v=SbKPgaRZsxA&ab_channel=DevTuts

- blogs 
  - https://dev.to/pat_the99/basics-of-javascript-test-driven-development-tdd-with-jest-o3c
  - https://medium.com/@suvodeep4119/javascript-tdd-using-jest-9b535c6be7be
  - https://www.freecodecamp.org/news/an-introduction-to-test-driven-development-c4de6dce5c/

## discussion page

- `Ques` - What are some examples of ambiguous projects to test with unclear or non-concrete edge cases? 
    - `Ans by kyle` : There are no specific projects that are ambiguous or not. 
        - Generally, when you are given requirements for a project they can be either very detailed or more likely quite sparse. 
        - When the details are sparse it can be hard to start with testing since you are unsure how exactly something will work. 
        - For example if I just said make a modal that is unclear exactly how it will work. 
        - You need to spend extra time thinking about how the modal will work before you can start writing test for it. 
