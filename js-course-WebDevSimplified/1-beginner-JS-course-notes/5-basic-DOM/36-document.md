# document

    - important 🔥

    - it's a both global object & a property of window global object 💡💡
        because many properties & methods comes under the document object 
        & document object comes under the window object

    - here we have two global objects ✅
        first - window 
        second - document
    - but here document object comes under the window object
        that's why document is a property of window global object 💡💡

    - is very incredibly useful in the browser

    - we use document object & it's properties & methods most of the time 💡💡

## example - of document global object 🔥

    eg : getting complete HTML document by using document global object ✅

        console.log(document)
        //OR
        console.log(window.document) 

        // output :
!["document global object"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/36-document/lecture-36-0-document.PNG "document global object")

    - in output , we got complete HTML document

    NOTE : why document object is useful ✅

        - because document global object
            allow us to get elements in JS file from our html page
        - allow us to modify our html page
        - create new elements to add into our html page
        - it's really the way we interact with the html page

    eg : of getting the body element from the HTML document ✅

        - to get the body element from the HTML document
            then we have body property inside the document object 💡💡

        console.log(document.body)

        // output : 
!["document global object"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/36-document/lecture-36-1-document.PNG "document global object")

## difference b/w document.documentElement VS document object 🔥

    eg : of using documentElement property of document global object ✅

        console.log(document.documentElement)

        // output : 
!["document global object"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/36-document/lecture-36-2-document.PNG "document global object")


    eg : of using only document object ✅

        console.log(document)

        // output : 
!["document global object"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/36-document/lecture-36-0-document.PNG "document global object")


    NOTE : difference of both of them ✅

        -> using document.documentElement property

            - if we use document global object with it's documentElement property
                then we'll get only -> html document without it's <!DOCTYPE html> 💡💡

        -> using document global object only 

            - if we use document global object only 
                then we'll get -> html document with it's <!DOCTYPE html> 💡💡

## creating a element dynamically + adding text inside element + append/add element inside any element 

    - important 🔥🔥

    - here we'll see how to create a element dynamically 
        & then how to add text inside that element which we have created 
        & then how to append/add that element inside any element
    - all these three stuff will be done dynamically

    STEP 1 : creating a element dynamically ✅

        - createElement() method of document object
            - used for creating a element dynamically 💡💡 
            - takes only one argument i.e name of a element inside double quotes 
                that we want to create 💡💡

        eg : creating a div element 

            const box = document.createElement("div")

            - here create a div element 

    STEP 2 : giving text/content to that element ✅

        - two properties to insert only text/content inside a element
            i.e innerText or textContent properties 
            - but always use innerText property 💡💡💡

        - to insert only HTML data inside a element then use
            innerHTML property or insertAdjacentHTML() method
            - but insertAdjacentHTML() method is better than innerHTML
                because of great features 💡💡💡

        NOTE : when to use innerHTML property to insert only Text inside a element ✅

            - firstly , all the HTML code inside body element stored inside the string
                & we can see through console.log(document.body.innerHTML)

            - here HTML word all letters should be capital of innerHTML property 💡💡

            - 1st situation
                - if we want to only insert/content inside the p element
                    but we have span element also inside p element
                - & we want that p element should have text only 
                - then here we use innerHTML

        box.innerText = "hello world"
        //OR
        box.textContent = "hello world"

    STEP 3 : adding/append that element inside a element ✅

        - two methods used to add/append a element inside a element
            i.e append() & appendChild() methods 💡💡💡

        NOTE : difference b/w append() & appendChild() methods ✅

            - append() method used to append/add multiple elements at a time
                inside the html document 💡💡💡
            - but appendChild() & insertAdjacentElement("position" , element) 
                used to append/add only one element at a time inside another element 
                or inside the html document 💡💡💡

            - so use both of them individually according to situation ✔
            - but most of the time use append() method 
                because it has more features than appendChild() method 💡

            - for more difference checkout these articles ✅  
                - https://developer.mozilla.org/en-US/docs/Web/API/Element/append
                - https://dev.to/ibn_abubakre/append-vs-appendchild-a4m


        document.body.appendChild(box)

    // output : that div element with content was appended/added inside our HTML document

    said by kyle 
    ------------

        - so this -> document global object is super powerful
        - & is really the gateway into interacting with everything
            inside of our browser like 💡💡
                - creating elements
                - selecting elements
                - adding events listeners to them
                - modifying DOM , etc
        - these all stuff will be done through -> document global object 

## difference b/w innerText & textContent properties of an element ✅

    - innerText & textContent both properties
        are used to get or set the text of/to an element 💡💡💡

    eg : 
        html code
        ----------
!["document global object"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/36-document/lecture-36-3-0-document.PNG "document global object")

        js code
        -------
!["document global object"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/36-document/lecture-36-3-1-document.PNG "document global object")

        // output 
!["document global object"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/36-document/lecture-36-3-2-document.PNG "document global object")

    - here we can see that 
        -> innerText property ✅ 
            - only give that text of an element without the white space 💡💡💡
            - means it gives only text not hidden stuff with the text
        -> textContent property ✅ 
            - gave that text + white space which are around of that text 💡💡💡
            - means it gives text + hidden stuff (which are not visible) i.e white space with the text

    - that's why always use innerText property 💡💡💡
        instead of textContent
        
## Extra notes

- DOM vs BOM : https://www.youtube.com/watch?v=xOCzjgjedRc&ab_channel=CodeWithHarry
