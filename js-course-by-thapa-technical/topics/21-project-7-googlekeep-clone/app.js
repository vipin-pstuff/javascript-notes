
/* 
    TODO: 

    1 - select the "add note" button
    2 - when we click on "add note" button then 
        add a todo
    3 - so inside "add note" button 
        when we click on button then 
        we want to create and add a div dynmically 
    
        3.1 - add/insert that html code inside that div

    4 - then select the todo-lists class div
        and append that div
        
    5 - now select the delete , edit buttons 
        and paragraph tag , textarea element for toggle
        based on that todoBox class div not based on document object
        
        NOTE : because all these are inside that todoBox
            but if we use querySelector() based on document object
            then all the todo will be delete in single click
            when we click on any of the todo 

        5.1 - first work on delete button
            - second add the click event listener on delete button
            - then class remove() method on that todoBox class div

        5.2 - second work on edit button
            1 - firstly when we click on "add note" button
                then bydefault textarea should be visisble 
                and p tag should be hidden
            2 - but when we add content/text on textarea and 
                then when we click on edit button then 
                we want to show the p tag and hide the textarea
            3 - if we already have content/text inside p tag
                then still we need to hide the textarea element
                and show the p tag only

        NOTE :
            - if textarea is visible means p tag is hidden
                and we need to add something 
            - but if p tag is visible then means textarea is hidden 
                and we add the content/text inside p tag
            - but if let's say p tag already contain a text/content
                and when we click on edit button then we want to show 
                the same content/text inside textarea and hide the p tag
            
            - here change event of textext will fire when we click on other 
                element except textarea and the value of textarea will change 
                inside localStorage when the movement when we click on other element
            - change event will not toggle the edit button
            - when we click on edit button then text of p tag will also change 
            - don't think that edit button will also toggle without click on it 
            - this code 
                    textAreaTodo.addEventListener('change', (event) => {
                        const todoText = event.target.value 
                        paraTodo.innerText = todoText

                        updateLSData() 
                    })
            - only change the updated text of textarea inside localStorage 
                when we click on other element
            - but when we click on edit button then p tag text got the updated text
                of textarea

            - so we'll use the ternary operator inside p and textarea element
                for toggling
        
        5.3 - here text variable is not doing/playing any big role 
                means here we deliberately give empty string as a value
                and we use ternary operator 
            - and here just clicking in edit button 
                so if p tag has hidden class then it will be removed 
                and texarea doesn't have hidden then it will be added 
            - and vice versa while doing toggling

            - but the real thing will start that how we're getting the 
                value for text variable
                - so value of text variable bydefault we set the empty string
                - but when we have the data in our localStorage then 
                    we need get those values and put inside the each textarea
                    of each the todos
                - that's why we need text variable

            - so first time text variable just doing toggling 
            - but second if we have the value for the text variable
                then things text variable also doing toggling + it's also 
                have the value

                - we were just thinking that text -> variable just have 
                    the empty string as a value but it's  not
                - we're also getting value for text -> variable
                    when we're getting all the values from localStorage

    6 - we need to show the context/text of textarea inside p tag also
        so we'll use the change event listener on textarea element

    7 - now we need to use localStorage inside textarea change event 
        because the movement data/content change inside textarea then 
        simultaneously we want to update the data inside our localStorage also

        so here we need data/value of each textarea of each todo

        7.1 - we used querySelectorAll() based on document object because
            instead of using querySelector() 
            because 
                - querySelector() will give only first one todos not all
                - first querySelectorAll() will give all the todos
                - second we called  querySelectorAll() based on document object
                    because we want all the todos whatever we have inside our 
                    document object
                
            NOTE : 
                ques : why do we need these two lines of code ?
                        textAreaTodo.value = text
                        paraTodo.innerText = text
                    
                - means bydefault value of text variable will be empty string
                    if we don't have any value as a argument inside addNewNote() function
                - but if get any value as a argument for text variable then 
                    default value of text variable will be replaced by that value
                    that's why these two lines code is necessary to write
                - so if the value of text variable get the value as a argument 
                    while calling that function then whatever the updated value of text variable 
                    have then that value will be updated inside 
                    value of textarea and as text value of p tag simultaneously
                - but if we don't use these two lines of code then
                    we'll get he value on textarea + para tag while toggling
                    but whenw we refresh the page then the value will be vanish/removed
                    because refreshing the page also means that we clicked on other element
                        means we're changing the state of element from textarea to other 
                - but value will be there inside localStorage
                    due to this code
                            textAreaTodo.addEventListener('change', (event) => {
                                const todoText = event.target.value 
                                paraTodo.innerText = todoText

                                updateLSData() 
                            })
                - and this code 
                        textAreaTodo.value = text
                        paraTodo.innerText = text
                  and this code
                        textAreaTodo.addEventListener('change', (event) => {
                            const todoText = event.target.value 
                            paraTodo.innerText = todoText

                            updateLSData() 
                        })
                    - working as same the differenc is 
                        upper one is working only when we toggle through edit button
                    - and second will work when we click on other element like edit button
                        except textarea
                    
            NOTE : 
                eg : 
                    function addNewNote(text = "") {

                    }

                    addNewNote()

                - here bydefault we gave empty string as a value 
                    which is called default argument
                - means if we don't have any argument while calling a function
                    then bydefault empty string as a value will be stored inside text parameter

    8 - now we need to get the data back from localStorage  
        and show those data in frontend

    9 - now here is the one problem that when we are deleting any of the todo
        then when we  refresh the page then still we're getting that 
        deleted todo

        - so we need to delete that todo from the localStorage also

        9.1 - so first when we delete any of the todo then 
            simultaneoulsy we need to delete from the localStorage also 
*/

const addNoteBtn = document.querySelector("#add-note-btn") 
const todoLists = document.querySelector(".todo-lists") 

addNoteBtn.addEventListener('click' , () => {
    addNewNote()
})

function addNewNote(text = "") {
    // creating + adding an element dynamically
    const todoBox = document.createElement('div')
    todoBox.classList.add("todo-box")

    const htmlData = `  
        <div class="icon-box">
            <button aria-label="edit-btn" class="edit-btn"> <span class="fa fa-pencil-square-o"></span></button>
            <button aria-label="delete-btn" class="delete-btn"><span class="fa fa-trash-o"></span></button>
        </div>
        <p class="todo-note ${text ? "" : "hidden"}"></p>
        <textarea class="${text ? "hidden" : ""}"></textarea> `

    todoBox.insertAdjacentHTML("afterbegin" , htmlData)
    todoLists.append(todoBox)

    // selecting required element
    const deleteBtn = todoBox.querySelector(".delete-btn")
    const editBtn = todoBox.querySelector(".edit-btn")
    const paraTodo = todoBox.querySelector(".todo-note")
    const textAreaTodo = todoBox.querySelector("textarea")

    // delete the node/tododocument
    deleteBtn.addEventListener('click' , () => {
        todoBox.remove()

        updateLSData()
    })

    // toggling b/w paragraph tag and textarea element
    textAreaTodo.value = text
    paraTodo.innerText = text

    editBtn.addEventListener('click' , () => {
        paraTodo.classList.toggle("hidden")
        textAreaTodo.classList.toggle("hidden")
    })

    // adding content/text of textarea element inside p tag also
    textAreaTodo.addEventListener('change', (event) => {
        const todoText = event.target.value 
        paraTodo.innerText = todoText

        updateLSData() 
    })

}

function updateLSData() {
    const textAreaTodos = document.querySelectorAll("textarea")
    const note = []
    
    textAreaTodos.forEach((todoNote) => {
        note.push(todoNote.value)
    })

    // setting todods inside localStorage
    localStorage.setItem("todoNotes" , JSON.stringify(note))
}   

// getting data back from localStorage
const notes = JSON.parse(localStorage.getItem("todoNotes"))

/* 
    NOTE :
        - if we make condition -> if (notes.length > 0)
            then if we add empty todo and when we refresh the page 
            then that empty todo will be removed

        - but if we give this condition like this
            if (notes) {} that's it 
            then if we add empty todo and when we refresh the page then
            we'll get the empty todo that we created
*/
if (notes) {
    notes.forEach(note => {
        addNewNote(note)
    })
}




