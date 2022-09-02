# types of tests

- important 🔥🔥

- here we'll talk about different types of tests & how jest fits into them <br>
    then we'll go over some example projects to know how to use `Jest` in real life projects

## types of testing 

- there are 3 different types of test
    - `first` : Unit test
    - `second` : Integration test
    - `third` : End to End test

## Unit Testing 

- it's easy to do & quickest to get started with
- & `Jest` library is amazing at doing a Unit testing
- means idea of taking one unit of code or one function or one part of the code & testing that particular code 
    - Eg : testing out only sum() function instead of testing whole function   
    - means testing input of that function & testing output of that function 💡💡💡
- Pure functions are really good for testing because they always have no side effects <br>
    & no mutations & give the same inputs & always return the same output 
- & for some reason if we don't have a pure function then it can be a little bit more difficult to do uni test <br>
    because impure functions generally have things like side effects that we need to worry about <br>
    like we want do unit test on that function which generate random function <br>
    so when we're doing a unit test of this type of randomness what we need to use a mock 💡💡💡

- `what is Mock` : 
    - A mock means we faking data means instead of using a random number generator then we're going to mock <br>
        the random number generator & we're going to create our own implementation that always return numbers that we know of 
    - so instead of getting a random number , using Mock way will always return the number 1 <br> 
        that we know that getting this random list of numbers is always going to return to us `1` instead of random number
    - another place where mocking is really important is if we have like a fetch request inside of our function & it's fetching data <br>
        from an API this is slow to do & the API maybe broken (which could cause us while testing) even code is fine
    - generally what we do is we mock out the fetch API & instead of actually making request to an API <br>
        all we do is just say okay , whenever i call fetch with this URL returned this adjacent object <br>
        So it never makes a call to an API & we're just faking the API call 
    - so we don't need to worry whether that fetch itself is actually working or not because ultimately in unite testing <br>
        we just want input of that thing & output of that thing 

- `Best Practices` : so anytime that we're doing something not in that single unit
    - so if we have a side effect , eg : what we need to do is we need to mock out that side effect 
    - so it never occurs & ultimately our code just pretends that it occurred successfully & continues on 
    - & that's also a unit testing 💡💡💡

- `unit testing` means testing that one single section of code 💡💡💡

## Integration testing 

- means testing by integrating all these different pieces together
    - so that fetch request we were faking in unit testing , now here we're just going to make the fetch request <br>
        & we're not going to mock it out
    - & also where we maybe calling different modules , using random number generators , etc <br>
        all of these are not going to be changed means we're going to keep all of those as it is <br>
        because with integration test , we're not just testing one function or one thing <br>
    - Eg : in integration test , we test does this function work when it communicates with other functions in this other piece of code <br> 
        & with other modules & when everything comes together then is it going to work just fine or not <br>
        that's what an integration testing means

- so it test overall general concepts like does that entire shopping cart workflow work or not <br>
    instead of mocking it all out ? , so it's actually going to go through & do different things like make fetch requests <br>
    & save files to the database & so on 
    - These types of tests are generally a bit slower to run <br>
        because we have to do things like access a database , save files , go to a fetch request , etc these things take time <br> 
        so with a `Unit testing` we can fake all of that but with an Integration test we need to use all that 💡💡💡
    - Also that an integration test is going to fail because it's doing a lot more than a unit testing <br>
        so if any point in that like at the chain of events , something fails then the test is going to fail <br> 
        & also these integration tests are just harder to write because we have more things to do that's why <br>
    - generally b/w unit & integration test , we're probably going to have more unit tests that we write <br>
        but with integration tests are going to tell us more about our code because they're testing more of our code as a whole <br>
        making sure everything's working including databases & fetches & so on 
    - that way , we can be sure that on a unit test , our code is working with our unit test & then on an integration test level <br>
        we can make sure that our code is able to talk amongst itself & work together as one unit instead of just as individual functions<br>
        so by combining these two different types of tests (unit & integration) then we can figure out a lot about our code <br>
    - Eg : making sure individual things like pure functions are working just fine & we can make sure when we combine together <br>
        all those different pure functions with weird side effects that also that is working fine 💡💡💡

## End To End testing 

- most important testing than above two 🔥

- End to End testing also called `E to E` & it's a automated testing 
  
- `means` 
    - it's very similar as integration testing means with integration testing , we're still faking certain things <br>
        means we don't have like a full browser running where you're manually clicking on the different buttons on the screen <br>
        & calling the code inside the automated testing 
    - means with E to E testing , we're doing the exact same thing as manual testing where we're clicking on buttons <br>
        & we're doing all of that stuff but we're automating it , so we're telling the computer
    - with E To E testing are going to break when we make changes because they cover like our entire application , all of our code <br>
        means through both testing (unit & integration testing) we're not sure whether that thing work & got the right output or not <br>
        but end to end testing says `i'm going to pretend to be the user of the site & do everything on the site myself`
