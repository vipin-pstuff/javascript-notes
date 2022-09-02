# What is testing & why is it important 

- we talked about functional programming & how it makes easier to test the code 

- the hardest thing in testing is not writing out tests & doing actual coding portion of testing 
    - but it's understanding what to test , when to test & how to test , different types of tests
    - & pretty much all of the high level concepts around testing 
    - & not necessarily the nitty gritty code details

- so we'll see how to implement testing in JS , so that way we can do all the testing things that we need
    - for any project that comes up

## What is testing 

- there are different types of testing 

- there are two main types of testing 
    - `first` : manual testing 
    - `second` : automated testing 

- up until now , all we've done is manual testing 

- `manual testing` : 
    - Eg : when we go through & we run the website
        - & we play through the minesweeper game & we manually test everything 
        - & you do all the button clicks , means everything is done by yourself
    - `Advantage` :
        - it's a great because we get to see exactly how a user interacts with a website
        - & it's probably the most real-world type of testing 
        - because it's an actual person is interacting with the actual code 
    - `Disadvantage` : 
        - it's really slow if we have to test every change every single time
        - easy to mess thing  
        - Eg : we made changes in one section of our code & we test that one section code manually 
          - but we may have accidentally broke something in a different section 
          - so we didn't actually get around to testing 
          - so important we should have a robust set of tests
        - hard to make sure we test everything properly

    - `Best Practice` : if we're doing a lot of manual testing 
        - then generally a good idea to have a set criteria that we test every single time
        - whenever we make big changes
        - so anytime we make big changes inside our code then go through those check boxes or todos 
        - & make sure we check every single thing that we need to test off of that checkbox
        - that way we check means our entire application , all of the important parts of it  

    - that's why people do very limited manual testing if there no big or medium change 💡💡💡 
      - means what if fix the small bug but after fixing it another bug came out & so on.. of endless cycle of bugs
      - where we're constantly fixing & breaking things & it's impossible to catch when we're doing manual testing way

- `Automated testing` : 
    - means writing code to test the code for us so we write code that runs tests against our code for us 
    - there's tons of different ways to do automated testing & that code runs our program for us 
    - `Advantage` : 
        - it saves time 
        - it gives us reassurance that we didn't actually break anything 
    - `Disadvantage` :
        - it's difficult to write these tests because writing tests also takes additional time
        - Eg : if we create a feature & then now we need to write a test for that feature
            - so we won't have additional work when we first write our code but in the end it saves a lot of time 
            - because we don't have to go back & manually test the same feature over & over
            - because automated test that's going to do it for us 

- `said by kyle` : this module pretty much focused on automated testing 
