# Garbage Collection

- means how we're able to create all these variables
    without running through all of the memory inside 
    of our computer

- means is something that a lot of programming language
    have built iun which is great
    - and it does that it takes variables that no longer are using and 
        then that variable removes from the memory of the computer

## example 
    
    - like we made many variables with it's own value

        let a = 1
        console.log(a)

        - so if we write this same code million times
            then we're gonna have million variables
        - and each variables take each space in the memory of computer

        - when our computer programming running 
            then our computers creates these variables
            inside the memory of the computer and saves them to be used

    eg : 
        let a = 1 ;
        console.log(a)

        - here this 1 -> value saves/store inside variable -> a
            so that we can print it
        
        NOTE : 
            - so garbage collection knows which variable are begin used
                and which are not longer being used 
            - we created millions & millions of variables eventually 
                we're gonna run out of space on our computer 
                like - this happen with recursion function
            - and that would be very bad
            - so garbage collection helps us by cleaning up that memory
                for us of those variables and memory no longer used 
                then garbage collection release/free that memory 
            - no matter how many variables you created as long as they stop begin
                useful , garbage collection will clean them up for us 
                & you don't have to worry about overly filling our computer 
                with all that useless variables

            - as soon as our program ends then garbage collection clean all the variables
                but if a variable need in the program then garbage collection 
                will keep that variable in the memory and it will not delete that variable
                unitl and unless that variable not complete the work
                