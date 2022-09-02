# DOM traversal

    - most most important 🔥🔥

    - how we can traverse/move through the actual DOM structure
        like getting parents , children , siblings & so on..
    - means how we can traverse/move inside the DOM 
        from one element to another element ✔️

## example - of DOM traversal ✅

    html code
    ---------
    <div id="grand-parent">
        <h3>Grand Parent</h3> 
        <div id="parent1">
            <h3>Parent 1</h3>
            <div><h3>child 1</h3></div>
            <div><h3>child 2</h3></div>
        </div>
        <div id="parent2">
            <h3>Parent 2</h3>
        </div>
    </div>

    css code
    --------
    body {
        background-color: rgb(31 31 31) ;
        font-family : sans-serif ;
    }

    div > div {
        margin-left : 1rem ;
        padding-left : 1rem ;
        border-left : 2px solid white ;
    }

    // output : 
!["DOM traversal"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/42-DOM-traversal/lecture-42-0-DOM-traversal.PNG "DOM traversal")

## eg 1 : accessing grand parent element & applying color property to it ✅

    eg : 
        const grandParent = document.querySelector("#grand-parent")

        grandParent.style.color = "red"

        // output : 
            after applying color to text only of grand parent 
            then text of all the elements also become red in color 💡
        - because color property -> is a inherit property

        - so we need to define color explicitly in css file 💡💡
            like this 
            div {
                color : black ;
            }
        - due to this text of only grand parent will be in red color 
        
        // output : 
!["DOM traversal"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/42-DOM-traversal/lecture-42-1-DOM-traversal.PNG "DOM traversal")

## eg 2 : accessing/selecting direct children of grand parent 🔥

    -> children property ✅ 
        - used to select all the direct children elements inside from an element 💡💡💡

        - return all the direct children elements inside from an element
            in the form of an HTML collection array 💡💡

        - if inside a element , if there is not a single child element
            then output -> undefined 💡💡

    eg : 

        const grandParent = document.querySelector("#grand-parent")
        grandParent.style.color = "red"

        console.log(grandParent.children)

        NOTE: 
            - always give color or any value for css
                then give value inside double/single quotes 

        // output : 
!["DOM traversal"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/42-DOM-traversal/lecture-42-2-DOM-traversal.PNG "DOM traversal")

## eg 2.1 : accessing/selecting a individual direct child element of grand parent element 🔥

    - to select/access a individual direct child element from an element 
        then we use square bracket notation 💡💡

    eg : 
        const grandParent = document.querySelector("#grand-parent")
        console.log(grandParent.children[0])

    // output : 
!["DOM traversal"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/42-DOM-traversal/lecture-42-3-DOM-traversal.PNG "DOM traversal")

## eg 2.2 : applying color on a individual direct children of grand parent element 🔥

    eg :
        const grandParent = document.querySelector("#grand-parent")
        const heading1 = grandParent.children[0]
        const parentOne = grandParent.children[1]
        const parentTwo = grandParent.children[2]

        parentOne.style.color = "red"

    // output : 
!["DOM traversal"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/42-DOM-traversal/lecture-42-4-DOM-traversal.PNG "DOM traversal")

## eg 3 : accessing just next one sibiling element of an element 🔥

    -> nextElementSibling property ✅
        - used to select only just next one sibling element of an element 💡💡💡

        - if there is no next sibling element of that element 
            then output -> null

    eg : 
        const grandParent = document.querySelector("#grand-parent")
        const heading1 = grandParent.children[0] 
        const parentOne = heading1.nextElementSibling

        console.log(parentOne)

    // output : 
!["DOM traversal"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/42-DOM-traversal/lecture-42-5-DOM-traversal.PNG "DOM traversal")

    - here we got the first parent element
        which is the next element sibling of heading 1
    - because next sibling element of heading1 is parentOne
        not parentTwo 💡

    NOTE : of nextElementSibling property 📝

        - important thing is that we got the just next one sibling element of an element
            by using nextElementSibling property
            instead of getting the just next random thing 
            & that random thing can be -> text or spacing 💡💡
        - because nextElementSibling property is only select the next one sibling element
            instead of selecting test or spacing 💡💡

        - we can't select next 10th sibling element of first element
            because that's not a sibling of that first element 
            through nextElementSibling property
            same with previousElementSibling property ✔️


    eg : accessing the second parent as a next sibling element of first parent

        const grandParent = document.querySelector("#grand-parent")

        const heading1 = grandParent.children[0]
        const parentOne = heading1.nextElementSibling
        const parentTwo = parentOne.nextElementSibling 💡💡💡

        console.log(parentOne);  


## eg 3.1 : accessing just previous one sibling element of an element 🔥

    -> previousElementSibling property ✅
        - used to select only just previous one sibling element of an element 💡💡💡

        - if there is no previous sibling element of that element 
            then output -> null

    eg :
        const grandParent = document.querySelector("#grand-parent")

        const parentTwo = grandParent.children[2]
        const parentOne = parentTwo.previousElementSibling 💡💡💡

        console.log(parentOne); 
    
    // output : 
!["DOM traversal"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/42-DOM-traversal/lecture-42-5-DOM-traversal.PNG "DOM traversal")

## eg 4 : accessing the all the children element of parentOne

    eg :
        const grandParent = document.querySelector("#grand-parent")

        const parentOne = grandParent.children[1]
        const childOne = parentOne.children[0] 
        const childTwo = parentOne.children[1] 

        childOne.style.color = "red"

## eg 5 : getting/accessing the direct parent element of a child element 🔥

    -> parentElement property ✅
        - used to select the direct parent element of a child element 💡💡💡

        - always apply this property on a particular child element
            to get the direct parent element of that child element ✔️

    eg : accessing parent1 element of child1 element ✅

        html code
        ---------
        <div id="grand-parent">
            Grand Parent 
            <div id="parent1">
                Parent 1
                <div id="child-one"><h3>child 1</h3></div>
                <div id="child-two"><h3>child 2</h3></div>
            </div>
            <div id="parent2">Parent 2</div>
        </div>

        css code
        --------
        body {
            background-color: rgb(31 31 31) ;
            font-family : sans-serif ;
        }

        div {
            color : rgb(177, 177, 177) ;
            font-size : 1.2rem ;
        }

        div > div { 
            margin-left : 1rem ;
            padding-left : 1rem ;
            border-left : 2px solid white ;
        }

        // output : 
!["DOM traversal"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/42-DOM-traversal/lecture-42-6-DOM-traversal.PNG "DOM traversal")   

        - now 

        const childOne = document.querySelector("#child-one")
        const parentOne = childOne.parentElement

        parent.style.color = "red"

        // output : 
!["DOM traversal"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/42-DOM-traversal/lecture-42-4-DOM-traversal.PNG "DOM traversal")  

        - here color applied on parent1
            which is a parent of child1 💡

    eg 2 : accessing parent1 element through child1 & accessing grand parent element through parent1 element ✅

        const childOne = document.querySelector("#child-one")
        const parentOne = childOne.parentElement
        const grandParent = parentOne.parentElement

        grandParent.style.color = "red"

        // output : 
!["DOM traversal"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/42-DOM-traversal/lecture-42-1-DOM-traversal.PNG "DOM traversal")  

## Note ✅

    - how we can access the directly jump/access that grand parent
        through child1 element without accessing the parent1 element of child1 element 💡💡

    - because how do we know if there are many parents going to have 
        or how many children 💡💡
    - maybe it'll be 10 parents or maybe it'll be 1 parent 💡💡
        that's why this action we can't do with using parentElement property ✔

    - so here comes closest() method

## eg 6 : accessing/selecting any parent element directly through a child element 🔥🔥

    -> closest() method ✅
        - used to select any parent directly through a child element 
            doesn't matter how far that parent element is from that child element 💡💡💡
        
        NOTE : 
            - but but if we have two parent element & both has same class name
                then closest() method only select that parent through an child element
                which is the very first one parent element that matches 
                based on css selector that we gave 💡💡💡

        - this method follow the same rule of selecting any element 
            through that child by using css selector inside double quotes 💡💡💡 
            as we do in querySelector() method 

    eg : 
        const childOne = document.querySelector("#child-one")

        const grandParent = childOne.closest("#grand-parent")
    
        grandParent.style.color = "red"

    // output : 
!["DOM traversal"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/42-DOM-traversal/lecture-42-1-DOM-traversal.PNG "DOM traversal")  

    eg : giving same class name to grandparent + parent1 element also of child1 element ✅

        - important example 🔥

        html code
        ---------
        <div class="red">
            Grand Parent 
            <div class="red">
                Parent 1
                <div id="child-one"><h3>child 1</h3></div>
                <div id="child-two"><h3>child 2</h3></div>
            </div>
            <div id="parent2">Parent 2</div>
        </div>

        js code
        -------
        const childOne = document.querySelector("#child-one")
        const grandParent = childOne.closest(".red")

        grandParent.style.color = "red"

        // output : 
!["DOM traversal"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/42-DOM-traversal/lecture-42-4-DOM-traversal.PNG "DOM traversal")  

        - here we can see that closest() method 
            select the parent1 element 
        
        NOTE : why closest() method select the parent1 element instead of grandparent element ✅

            - because closest() method 
                looks at all the parents of the element we're currently on
                & find the very first one parent element that matches 
                based on css selector that we gave 💡💡💡 

## eg 7 : selecting/access all the children elements through grand parent element ✅

    - important example 🔥

    eg : 
        html code
        ---------
        <div id="grand-parent">
            Grand Parent 
            <div id="parent1">
                Parent 1
                <div class="child"><h3>child 1</h3></div>
                <div class="child"><h3>child 2</h3></div>
            </div>
            <div id="parent2">Parent 2</div>
        </div>

        - now we want to select all the children elements through grand parent element

        js code
        -------
        const grandParent = document.querySelector("#grand-parent")
        const childrentOfGrandParent = grandParent.querySelectorAll(".child")    

        childrentOfGrandParent.forEach(child => child.style.color = "red")

    // output : 
!["DOM traversal"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/42-DOM-traversal/lecture-42-7-DOM-traversal.PNG "DOM traversal")  

        - now here we can see that we selected all the children element
            through a grand parent element
            not through document object 💡💡💡
        - because we want to select all the children through grand parent element 
            & instead of look all the children inside the document 
            we used grand parent element 💡💡💡

        - & we can also select parent1 element through grand parent element like this 
!["DOM traversal"](../../all-chats-pics-of-lectures/3-notes-pics/1-beginners-js-course-notes-pics/42-DOM-traversal/lecture-42-8-DOM-traversal.PNG "DOM traversal")

        - because document object is like any other element
            like here grand parent element , parent , children 💡💡
        - all these are elements just like document object 💡
