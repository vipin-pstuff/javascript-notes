# how to know what to test

- here we'll talk about what to test & how to write the test & when to test , etc 💡💡💡

## Scenarios of testing 

- there's kind of a lot of different things that go into this , so there's a few different scenarios that we'll cover

- `first scenario` : that we kind of run into which is most common scenario in programming job
  - i.e either going to be adding code to an existing code base or fixing/modifying code in a code base 
  - Eg : let's we have a bug in the code base then what should we do when it comes to testing 
    - some people say we should write a test every time that we fix a bug to make sure that bug doesn't occur
    - & generally , we would say that's probably a good idea for the most part <br>
      & this is a great instance of test driven development , which will help us to write the code quicker <br>
      because if we have a bug & we know the bug occurs then once we've kind of figured out where the bug is <br>
      then it's really easily to write a test for that & that test can be done accordingly what the bug is it <br>
    - but the test failed then we can hunt down that bug & once we solve that bug then our test will now pass
    - so test driven development is great when we have a scenario where we're solving a bug or a broken piece of code <br> 
      inside of some software that already exists
    - `said by kyle` : & generally , if we're writing a text to the fix bug for some code then should be recommended <br>
      that write out a test for that if it's something that makes sense to have a test for 💡💡💡
    - Now if the bug is something like maybe a typo or maybe a class name not being correctly applied to something <br> 
        maybe then writing a test for it doesn't make sense but generally when we're solving a bug <br>
        then to fix that bug required the actual logic of our code , so testing that logic does a great thing that we could do
    - & generally , if we solve a bug then the test we write for that will be a unit test but not always be a unit test <br>
        means if that bug in one unit for code one function or one section of the code then use the unit test 💡💡💡

- `second scenario` : as a software developer then our work will also be like modifying/refactoring existing code <br>  
    or writing other bunch of code 
    - there's two other scenarios we'll see 💡💡💡
      - `first scenario` : where there are no test at all 
        - now what we do if we need to refactor & modify code
        - `said by kyle` : generally , he would recommend writing out test <br> 
            because if we go through & we refactor a bunch of code then how do we know if it actually works 
        - then sure we can manually test it but we're probably gonna miss something during manual testing
        - so going through & writing our automated test for code before we actually refactor it , <br> 
            then making sure all those tests pass & then when we refactor it & rerunning all those tests <br>
            & making sure they still pass then there is a great way to make sure that the code that we changed <br>
            didn't actually break anything unintentionally 💡💡💡
        - `kyle face problem` : he didn't write tests before making refactors & he ended up breaking things <br>
            without even realizing it & just let so many headaches then we start writing out the test before he changed the code <br>
            then he would know immediately that he did these changes & fix it before actual customers ran into there problems

      - `second scenario` : where there's already tests for this code
        - this is a best scenario where we could run into but this situation doesn't happen too much
        - if there's already tests for the code that we're refactoring & this is great because we can use those tests <br>
            to do double check to make sure whatever test we wrote is correct or not & working fine or not <br>
            & if something missing in those tests then add additional test to fix those functionalities 

- `third scenario` : adding new functionality
    - means adding some new functionality/feature which can enhance that application <br>
        so we can write the test for that code (whether we're starting with new application or inside existing application)
    - `said by kyle` : let's say we're adding to a huge project & that project has no test at all 
        - then generally it's a good idea to start adding test for the new code that we're writing & new code that we're modifying <br>
            because eventually over time , the code base is gonna be changed & modified & added to so many times <br>
            that eventually all these new tests we're adding & gonna cover the majority of the code base 
        - so even if we're starting with a project that has absolutely no test at all then it's a great idea to add test to the code <br>
            to make that by the end of the time that we're working on this then we're gonna have a much better idea of the testing <br>
            & we're gonna be able to be more confident when you release code knowing that our tests are passing <br>
            means more than actual code is working 

- `What actually test we do when we write our test` : 
    - because when we're new in testing then we don't know where to start (whether we need to test everything or few things)
    - & difficult to know which one is unit test & which one is integration test & so on..
    - `unit test` : 
        - these are the tests that we're gonna write the most often & most numerous in our code base
        - & these are the tests that we should write to cover out all of those weird or confusing edge cases
        - means anytime that we have branches in our code or weird edge cases then use a unit test <br>
            to make sure that those function as we expect 
        - also test the failure conditions & success conditions in the unit test
        - unit test means broadly covering all the different functionalities of that one unit of our code 
        - & in unit test maybe we don't need 100% test coverage <br>
            but having a high level of test coverage in unit test is important <br>
            so that we'll able to cover all those main use cases & branches & so on.. 💡💡💡

    - after covering all those weird edge cases then next thing comes integration testing 
    - `integration testing` : 
        - it is great for connecting the different modules of our code 
        - Eg : let's say we have `Unit A` which talks to `Unit B`
            - well writing an integration test that tests the actual connection b/w `Unit A` & `Unit B` will be great <br>
                because if the unit test for this `Unit A` work & unit test for `Unit B` also work then that's fine <br>
                but if the actual integration b/w them doesn't work then we're never gonna catch that with just using unit test
            - that's why we need integration test , so writing integration tests that connect these pieces of logic together <br>
                then it's really important to make sure the application works as a whole
            - & these shouldn't really worry about edge cases as much , really the integration tests are more about testing <br>
                if things equal & communicate well together & unit tests are more about testing all those weird different edge cases

    - & as we go up on this pyramid to end to end testing then we even care less about edge cases because the other testing types <br>
        are kinda taking care of that for us
    - `end to end testing` : 
        - here we write the least amount of these but they're probably gonna be the most important test that we write <br>
            because writing end-to-end testing based on what the user experiences
        - means writing this test based on what user gonna do with that application right away <br>
            so we need to test user interaction with that application 
        - here we don't need to worry about edge cases at all because end-to-end testing is not used for to check edge cases 💡💡💡
            - only unit & integration testing is used to test edge cases also 💡💡💡

    - unit testing is great for testing individual functions & great for testing all the edge cases
      - & integration testing is good at connecting the different unit test together
      - & end-to-end testing is great to test user interactions

- `Tip✅` : if we have larger code base of that application & don't know from where to start testing 
    - so look at the most important part of the code like e-commerce site <br>
        then inside of it , important part will be shopping cart code or checkout or payments gateway
    - so first test we should write all to deal with payments & checkout & shopping cart <br>
        means end-to-end tests , integration tests & unit tests should all be compiled around that most important core feature <br>
        & once we have that tested out then we can move on to some of the secondary feature & so on ..<br>
        means first focus should be to test the primary features of that application 💡💡💡

- `said by kyle` : if we're working on a new project just continually add test to it as we go
    - if we slowly write test as we write our code then it's going to be much more digestible <br>
        because we're just write a few tests here & there as we go 
    - but if we write out our entire application & then try to add all the tests to it <br>
        then it's gonna be a much more painful slow process because we have so many tests to write 💡💡💡
