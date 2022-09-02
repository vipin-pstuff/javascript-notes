# query selectors

    - important 🔥🔥

    - here we'll see another new way to select elements
        by using query selectors

    - these query selectors are used by most of the people 99.9% to select elements 💡💡💡

    - but sometimes in some situation people use 
        getElementById() & getElementsByClassName() methods 💡💡
        

## two new methods of document object to select elements

    first - querySelector() method 
    second - querySelectorAll() method 

    - these two methods of document object 
        are better than getElementById() & getElementsByClassName() methods 💡💡💡
    - because we can select an element based on anything 
        whether based on tag name or id name or class name or data attribute name
        means we can select an element based on selector as we do in CSS file
        by using these two new methods 💡

    NOTE : selecting elements not just based on document object 🔥

        - we can select a element through these methods based on document object
            like this const btn = document.getElementById("#btn")

        - & we can also select element through these methods based on element
            not through document object like this 
            const btn = form.getElementById("#btn")
        - here because we don't want to select all the button which are present on document
            we to select only that button which is inside the form element
            that's why we selected that button element based on form element 

## querySelector() method of document object 🔥

    - used to select only one element at a time 
        based on anything like 
    - means we can select that element 
        through a id name or a class name or a data attribute name or tag name 💡💡💡 
        as we select a element in CSS file

    NOTE : best practices of using querySelector() method ✅

        - but most of the time use querySelector() method 
            to select an element through an id name or through unique name 💡💡💡💡 
            for best practices  

    - takes one argument inside double quotes
        i.e css selector 💡💡💡💡
    - means if we want to select that element through id name 
        then use # -> sign & then id name inside double quotes
        or if we want to select that element through class name
        then use . -> dot sign & then class name inside double quotes    
        & same thing with others 💡💡
    
    - it return that element which we're selected through id selector or class selector
        or through any css selector
    - it return output -> null
        if we select a element based on selector which doesn't exists 
        or if we gave wrong css selector 

## examples - of querySelector() method of document object 🔥

    eg 1 : of querySelector() method of document object ✅

        html code
        ---------
        <head>
            <script src="./app.js" defer></script>
        </head>
        <body>
            <div data-test>This has a custom data attribute</div>
            <div class="div-class">This has a class name</div>

            <input type="text">
        </body>
        </html> 

        - here we're using custom data attribute i.e data-test

        - here we want to get that element which has data-text -> attribute ✔

        JS code
        -------

        const dataAttributeElement = document.querySelector("[data-test]")
        console.log(dataAttributeElement)

        - here we can see that we used css selector i.e attribute selector 
            as we select a element inside CSS file

        // output : <div data-test>This has a custom data attribute</div>

        NOTE : of selecting a element based on data-attribute ✅

            - whenever we select a select based on data-attribute
                either inside JS file or inside CSS file
            - we use square bracket notation for data-attribute
                to select that element


    eg 2 : selecting multiple elements based on class selector by using querySelector() method ✅

        - important example 🔥

        html code
        ---------
        <head>
            <script src="./app.js" defer></script>
        </head>
        <body>
            <div data-test>This has a custom data attribute</div>
            <div class="div-class">This has a same class name</div>
            <div class="div-class">This has a same class name</div>

            <input type="text">
        </body>
        </html> 

        JS code
        -------
        const dataWithClasses = document.querySelector(".div-class")
        console.log(dataWithClasses)

        - here we can see that we used . -> dot sign & then class name
            to select that element through class selector
            as we do/select element based on class selector inside CSS file

        // output : 
!["query selector"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/38-query-selector/lecture-38-0-query-selector.PNG "query selector") 

        - here we got only element which has class i.e div-class
            out of the two div element which has also same class i.e div-class


        NOTE : of querySelector() method ✅

            - important note 🔥

            -> querySelector() method
                    - used to select only one element

                    - in case class selector name , 
                        querySelector() select the very first one element
                        out of in number of elements with same class name 💡💡💡

    eg 3 : of querySelector() method with a tag name selector ✅

        html code
        ---------
        <head>
            <script src="./app.js" defer></script>
        </head>
        <body>
            <div data-test>This has a custom data attribute</div>

            <input type="text">
        </body>
        </html> 

        JS code
        -------
        const inputBox = document.querySelector("input")
        console.log(inputBox) 

        - here we used querySelector() method 
            because right now we have only one input element in the HTML page
        - but if we have multiple input element
            & if we want to select them all through tag selector
            then we'll use querySelectorAll() method 💡

        // output : <input type="text">

        NOTE : making complex like we do in CS file ✅

            - we can make complex to select a element as we do in CSS file
                like this

                const inputBox = document.querySelector("input[type='text']")
                // OR   
                const inputBox = document.querySelector("body > input[type='text']")

                - here keep double & single quotes in sequence 
                    otherwise error come

            - so we can make huge massive of css selectors as we do inside the CSS file 
                but don't do more than 2 selectors 
                inside querySelector() & querySelectorAll() methods
            - otherwise specificity problem come 💡💡💡

## querySelectorAll() method of document object 🔥

    - use this method when we want to select only multiple elements not single element 
        based on any css selector except id selector name 💡💡💡
    - but mostly we use class selector with querySelectorAll() method 💡💡💡

    - we can use querySelectorAll() to select only one element
        but don't use it for selecting single element 💡

    - it return a NodeList array of all the elements that match the specified selector 💡💡💡
    - if we give that class selector name which didn't exists in html page
        then output will be -> NodeList [] which is NodeList empty array 💡💡

    eg 1 : of selecting single element through querySelectorAll() ✅

        html code
        ---------
        <head>
            <script src="./app.js" defer></script>
        </head>
        <body>
            <div data-test>This has a custom data attribute</div>
            <div class="div-class">This has a same class name</div>

            <input type="text">
        </body>
        </html> 

        JS code
        -------
        const dataAttributeElement = document.querySelectorAll("[data-test]")
        console.log(dataAttributeElement)

        // output : 
!["query selector"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/38-query-selector/lecture-38-1-query-selector.PNG "query selector") 

        - we got output in the form of NodeList array from querySelectorAll() method

    eg 2 : of selecting multiple element based on class selector through querySelectorAll() ✅

        html code
        ---------
        <head>
            <script src="./app.js" defer></script>
        </head>
        <body>
            <div data-test>This has a custom data attribute</div>
            <div class="div-class">This has a same class name</div>
            <div class="div-class">This has a same class name</div>
            <div class="div-class">This has a same class name</div>

            <input type="text">
        </body>
        </html> 

        JS code
        -------
        const divsWithClasses = document.querySelectorAll(".div-class")
        console.log(divsWithClasses)

        // output : 
!["query selector"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/38-query-selector/lecture-38-2-query-selector.PNG "query selector") 

        NOTE : of NodeList array output from querySelectorALl() method ✅

            - so again we got output in the form of a NodeList array
                which is very similar to an array 
            - & directly we can use only one method of array i.e forEach() method
                without converting this NodeList array into an actual array 💡💡💡
            - but to use all the methods of array then we have/need to convert 
                that NodeList array into an actual array by using Array.from() method
            - because NodeList has a forEach() method 
                but it doesn't have all the array methods
                - & if we use map() array method 
                    without converting that NodeList array into actual array
                    then we'll get an error 💡💡💡

            - & NodeList array is very similar to an array but not exactly 💡💡💡 

        // using forEach() method directly on this NodeList Array 
        // without converting into an actual array
        divsWithClasses.forEach(box => {
            box.style.color = "red"
        }) 
        //OR
        divsWithClasses.forEach(box => box.style.color = "red")
        
        // output : text of all elements which has .div-class become red in color

          
    NOTE : b/w HTML collection array VS NodeList array ✅ 

        - important note 🔥

        - getElementsByClassName() method return output 
            in the form of HTML collection array
        - & querySelectorAll() method return output
            in the form of NodeList array 💡💡💡

        - here both HTML collection array & NodeList array
            is similiar to an array but not exactly same as an array 💡💡💡

        -> HTML collection array 
            - has no array methods including forEach() method 
                that's why we need to convert that HTML collection array into an actual array
                by using Array.from() method 💡💡💡
            - so that we can use all the array methods including forEach() method 💡💡💡

            - we can't use any array methods directly on HTML collection array    
                because those array method won't work & including forEach() method
                & we'll get error

        -> NodeList array 
            - has only one array method i.e forEach() method 
                that's why we can use forEach() method directly
                on Nodelist array without converting it into an actual array 💡💡💡
            - but if we want to use all the array methods then we have to 
                convert that NodeList array into an actual array 💡💡💡
            - otherwise we'll get error if we use any other array methods 
                on that NodeList array except forEach() 💡💡💡 

## Note - for querySelector() & querySelectorAll() methods 🔥

    - use both of them according to situation

    -> use querySelector() method ✅
        - when we want to select only one element at a time 
            then always use this method 💡💡💡
            
        - & always use id selector only with this method 💡💡💡
            because most of the time we used id selector with querySelector() 💡💡
            & some times we used other selector also with querySelector()

    -> use querySelectorAll() method
        - when we want to select multiple elements at a time
            then always use this method 💡💡💡
        
        - & always use id selector only with this method 💡💡💡
            because most of the time we used class selector with querySelectorAll() 💡💡
            & some times we used data-attribute or tag name also with querySelectorAll()

## Note - when & when not to select a element through document object ✅

    - if that child element like h1 , inside the parent element like div
        & if already selected that parent element
        & we also want to select the child element
    - then select that child element through that parent element 💡💡

    - if that child element like h1 , inside the parent element like body
        & if we don't want to select parent element
        but required that child element 
    - then select that child element through document global object 💡💡

## said by kyle 🔥

    - querySelector() & querySelectorAll() methods of document object
        gives incredible flexibility & easier to use + more readability 💡
    - & these methods are much more powerful
        than getElementById() & getElementsByClassName() methods of document object 

    - querySelector() & querySelectorAll() methods of document object
        are advance methods to select one or multiple elements

    - always use querySelector() & querySelectorAll() methods
        because we can use only one array method i.e forEach() method
        without converting that NodeList array into an actual array
        & even we can select single or multiple elements based on any CSS selector 
        as we do in our CSS file

    - use both querySelector() & querySelectorAll() methods
        according to situation ✔

## discussion page

!["query selectors"](../../all-chats-pics-of-lectures/1-beginner-JS-course-chats-pics/38-Query-selectors.png "query selectors")


