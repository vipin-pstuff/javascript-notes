
# DOM + BOM + Window object

    - very important 🔥

## topics

    -> Window vs Document objects
    -> DOM vs BOM
    -> DOM navigation
    -> searching and getting elements reference

## Window vs Document objects

    -> window Object ✅

        - is the main container
        - is a global object
        - if any operations related to entire brower window
            can be a part of window object
        - all the things like objects , methods , properties 
            if they are the part of window object then we don't 
            refer the window object
            eg : 
                whenever we define setInterval()
                then we don't use window object before it
                because indirectly behind the scene it's define
            eg : 
                window.alert() // or alert()
                
                - both are same
            eg :
                window.location // OR location
                - use to find location on which website are you right now
                
                window.location.herf // OR location.herf
                - use to find URL on which website are you right now

                - so this things can't be done by document object
                    because document object is just meant to render the 
                    HTML elements and according to this whatever we want to 
                    do with HTML elements then we use document object 
                - so it means whatever document object have 
                    then those things automatically part of window object
                - but whatever window object have then
                    then those things will not be a part of document object  

        - whatever operations are related to window object
            then use directly or with window object
            otherwise use document object

    -> Document Object ✅

        - is a child object of window object   
        - is a DOM
        - if we want to use the document's object , methods , properties
            then we have to refer document object before it's methods and etc
            eg : let box = document.getElementById("myDiv")
        - document object is just deals with HTML elements
        
    eg : 
        - whatever you see in your browser including tab , URL , etc
            i.e Window object

        - and the body i.e white part which contains our website which is inside window
            i.e document object

        - so document object is just a part of Window object


## DOM vs BOM

    -> DOM - Document object model
        - use DOM when we want to play with HTML elements
        eg :
            document.body.style.background = "red" ;

    -> BOM - Browser object model
        - BOM means window object 
        - use BOM / window object when we want to play with
            navigator , screen , location , frames , history , etc
            which are not a part of document object
        - In simple meaning all the Window operations 
            which comes under BOM are performed usign BOM

    -> Diagram
                            window
                           /   |   \
                        DOM   BOM   Javascript
                       /       |            \
                [document]     |             [object]
                            [navigator]      [Array]
                            [screen]         [function]
                            [location]
                            [frames]
                            [history]
                            [XMLhttprequest]
                            [etc...]

        - here we can see that window object is a father of all the things 
            that's why we don't need to refer window object before 
            to use objects , methods , properties
        
        - if we want to know navigator , screen , etc 
            and if you want to play with API - XMLhttprequest
            now we don't use XMLhttprequest , we use fetch API , Axios , etc
        - but if we want to perform any operations related to
            navigator , screen , etc then we use BOM or window object

    -> properties of window object ✅

        - there are many properties and some are : 
          - window.innerWidth OR innerWidth
          - window.innerHeight OR innerHeight

        eg : of innerWidth & innerHeight
            whenever you adjust the screen of the document
            then innerWidth and innnerHeight will tell you 
            the width & height of the document

        eg : of History object 

            HTML
            ----
                <button class="btn_submit" onclick="goBack()">Go Back</button>
                <p>after clicking on the submit we'll redirect to the previous page</p>

            JS
            --
                function goBack() {
                    window.history.back()
                }

            - here history is a property + object also 
                and back() is a method of history object
            - back() method is used to go to previous page 

            NOTE : you should be on same tab that you were 
                    if you change the tab of browser then 
                    back() method will not work

        eg : of history object

            - alert() , confirm() and prompt() methods are a part of BOM / window object
            - they are not directly related to the document

            JS 
            ---
              alert(location.herf) ;
              if (confirm("want to visit google")) {
                  location.herf = "https://google.com" ; // you'll redirect to another URL
              }

            // output - you'll see the current URL of the website
                        then confirm() method will ask if you want to
                        visit google site or not 


## DOM Navigation part-1

    -> Diagram
                            window
                           /   |   \
                        DOM   BOM   Javascript
                       /       |            \
                [document]     |             [object]
                [html]      [navigator]      [Array]
                  |         [screen]         [function]
                 / \        [location]
            [body]  [head]  [frames]
            | |             [history]
           /|  \            [XMLhttprequest]
        [a] |   [p]         [etc...]
            |                      
            [etc..]    


        - here html element is a root element
        - inside body element usually elemenets come like
            <a> , <p> , <template> , etc ...
        - complete html code from top to bottom hold by 
            document object
    
## DOM Navigation with access html elements part-2

    -> document ✅
        - returns the root element with <!DOCTYPE html>
        
    -> document.documentElement ✅
        - returns the root element of the document

    -> document.head ✅
        - returns head element

    -> document.body ✅ 
        - returns body element

    -> document.body.childNodes ✅ (include tab , enter , whiteSpace , comment)
        - used to find childNodes inside an element
        - return total childNodes in the form of an array

        eg : 
            console.log(document.body.childNodes)

            // output : 
                [text, comment, text, div.main-div, text, comment, text, comment, text, script, text]   

            - here as you can see that 
                in our html file there is no text just inside body
            - but here we're getting text
                so this text means you gave whitespace or tab or 
                you did enter that's all represent as text and 
                these things also counted as childNodes
            - that's why here we're getting text

            - when you open the text    
                then you'll see data -> key
                which means value of data key is "\n    "
                means you press enter and now you're in new line

    -> document.body.children ✅
        - return all the children which are inside body tag
            in the form of an array

    -> document.body.children.length ✅
        - return total length of children which are inside body tag

    -> hasChildNodes() method ✅
        - used to check whether an element has childNodes or not
        - childNodes means children 
        - return true or false

        eg : 
            document.body.hasChildNodes()
            // output : true

    -> firstElementChild ✅
        - return only that first child inside an element

        NOTE : 📝
            - firstChild vs firstElementChild
            
            - difference b/w them is 
                - firstChild property 
                    - can give tab or whitespace or Enter or Comment
                    as a first child inside an element
                - firstElementChild property 
                    - give directly first child inside an element
                    - it doesn't consider tab or whitespace or Enter or Comment 
                        as child inside an element

    -> lastElementChild ✅
        - return only that last child inside an element

        NOTE : 📝
            - lastChild vs lastElementChild
            
            - difference b/w them is 
                - lastChild property 
                    - can give tab or whitespace or Enter or Comment
                        as a last child inside an element
                - lastElementChild property 
                    - give directly last child inside an element
                    - it doesn't consider tab or whitespace or Enter or Comment 
                        as a child inside an element

    -> NOTE : 📝

        - now we don't use firstElementChild and lastElementChild
        - because we have new way to access
        
        - getElementsByTagName
            const heading = document.getElementsByTagName('h1');
        - getElementsByName
            const input = document.getElementsByName("gender") ;
        - getElementById
            const heading = document.getElementById('heading');
            console.log(heading);
        - getElementsByClassName
            const heading = document.getElementsByClassName('heading');
        - querySelector
            const heading = document.querySelector('.heading');
        - querySelectorAll
            const heading = document.querySelectorAll('.heading');
            console.log(heading)

        - so here
            we use less 
                getElementById() and getElementsByClassName()
            we use mostly
                querySelector() and querySelectorAll() ✅

    -> properties to find parent Nodes ✅
        - parentNode
        - parentElement

        eg : 
            console.log(document.head.parentNode)
            // OR
            console.log(document.body.parentElement)

            // output : both will give html element as a parent element

        NOTE : mostly parentElement property used

    -> properties to find or access the siblings ✅
        - nextSibling
        - nextElementSibling 
        - previousSibling
        - previousElementSibling

        - siblings means brother / sister

        eg : of nextSibling 

            document.body.nextSibling
            // output : null

            - because body tag doesn't have next sibling
                but body tag has previousSibling i.e head tag

        eg : of previousSibling
            
            document.body.previousSibling
            // output : #text

            - because previousSibling and nextSibling
                count tab or enter or whitespace or comment as element
            ✔ that's why always use previousElementSibling and nextElementSibling

        eg : of previousElementSibling and nextElementSibling

            document.body.previousElementSibling
            // output : <head></head>

            document.body.nextElementSibling
            // output : null

            - because after body there is no next sibling element

## DOM navigation with manipulation Part-3

    -> style property  ✅
        - is a property for any element to customize
            color , fontSize , etc

        - properties of style object are 
            - fontSize
            - color
            - backgroundColor , etc..

        eg : 
            const heading = document.querySelector('.heading');
            heading.innerHTML = 'Web dev is awesome!';
            heading.style.color = 'red';
            heading.style.fontSize = '100px';
            heading.classList.add('title');
            heading.classList.remove('heading');


## NOTE 

    - if you want to select many elements
        then use class selector
    - if you want to select specific element
        then use id selector
    
    - for class selector -> use querySelectorAll()
    - for id selector -> use querySelector()

    - if we use getElementById()
        then here you can see we don't have s -> letter with Element
        because id -> always be unique
    - but if we use getElementsByClassName()
        then you can see we have s -> letter with Elements
        because class name will be same mutiple times

    - if you create element in HTML like <p></p>
        without writing any paragraph
        then this is called tag not element
    - but if we insert paragraph inside <p>hello</p> tag
        then we'll say element not tag

    - use getElementsByName
        if we have same value of name attribute in mulitple input elements 

    - querySelector() and querySelectorAll()
        useful because we can select elements based on selector
        like we give in css
    - but getElementById() and getElementsByClassName()
        doen't have this feature

## searching and getting elements reference

    eg : of changing text after clicking on button

        HTML 
        ----
            <h1 id="heading">Change the content of the H1</h1>
            <button class="btn" onclick="changeContent()">Click me</button>

        JS  
        --
            function changeContent() {
                let heading = document.querySelector("#heading")
                heading.innerHTML = "Hello DOM"
            }
            // OR
            function changeContent() {
                document.getElementById("heading").innerHTML = "Hello DOM"
            }

            - in first one we're doing through reference 
                means we're using variable as reference
            - in second one we're doing directly

    eg : get all the elements which has same class name

        html
        ---
            <p class="para">Hello , lorem </p>
            <p class="para">lorem ipsum generator </p>
            <h4 class="para">lorem ipsum generator 2</h4>
            <p class="para1">lorem ipsum generator 3</p>

        js
        --
            const paras = document.querySelectorAll(".para")
            // OR 
            const paras = document.getElementsByClassName(".para")

            console.log(paras)

    eg : get all the input elements which have similar value in name attribute 

        html
        ----
            <form>
                <label for="male">male</label>
                <input type="radio" name="gender" id="male">
                <label for="female">female</label>
                <input type="radio" name="gender" id="female">
                <label for="other">other</label>
                <input type="radio" name="gender" id="other">
            </form>

        javascript
        ----------
            const genderInputs = document.getElementsByName("gender")
            // OR
            const genderInputs = document.querySelectorAll("input[name='gender']")
            console.log(genderInputs)

        - getElementsByName() used most of the time 🔥

    NOTE : 
        - if in html there are many elements 
            with same class with class attribute but 
            they doesn't contain id attribute
        - and we just want to select only first one out of them
        - then use querySelector() not querySelectorAll()