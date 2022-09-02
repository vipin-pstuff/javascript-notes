# modal introduction 

    - here we'll make pop modal

## starter code

```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <title>Modal</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        #modal.open {
        display: block;
        }

        #overlay.open {
        display: block;
        }
    </style>
    <!-- TODO: 1. Link the script tag -->
    </head>
    <body>
        <button id="open-modal-btn">Open Modal</button>

        <div id="overlay"></div>

        <div id="modal">
            <h3>This is a modal</h3>
            <button id="close-modal-btn">Close Modal</button>
        </div>
    </body>
    </html>
```

```css
    #modal {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid black;
        padding: 1rem;
        border-radius: .25rem;
        background-color: white;
    }

    #overlay {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .75);
    }
```

```js
    /*
    TODO: 2. Select the elements with the following IDs
        * modal
        * open-modal-btn
        * close-modal-btn
        * BONUS: overlay
    */

    // TODO: 3. Create a click event listener for the open-modal-btn 
    //          that adds the class "open" to the modal
    // BONUS: Also add the class "open" to the overlay

    // TODO: 4. Create a click event listener for the close-modal-btn 
    //          that removes the class "open" from the modal
    // BONUS: Also remove the class "open" from the overlay

    // BONUS: Add a click event listener to the overlay 
    //          that removes the class "open" from the modal and the overlay
```

## Steps - of JS code

    STEP 1 : add/link the script tag inside html file

    STEP 2 : 
        
        /*
          TODO: 2. Select the elements with the following IDs
              * modal
              * open-modal-btn
              * close-modal-btn
              * BONUS: overlay
        */
        const modal = document.querySelector("#modal")
        const openModalBtn = document.querySelector("#open-modal-btn")
        const closeModalBtn = modal.querySelector("#close-modal-btn")
        const overlay = document.querySelector("#overlay")
        
    STEP 3 : 

        // TODO: 3. Create a click event listener for the open-modal-btn 
        //          that adds the class "open" to the modal
        // BONUS: Also add the class "open" to the overlay
        openModalBtn.addEventListener('click' , () => {
            modal.classList.add("open")
        })

        - here we'll do BONUS thing later on
        - because right now we're trying to focus on main problem 💡💡💡

        // TODO: 4. Create a click event listener for the close-modal-btn 
        //         that removes the class "open" from the modal
        // BONUS: Also remove the class "open" from the overlay
        closeModalBtn.addEventListener('click' , () => {
            modal.classList.remove("open")
        })  

        - here we accomplished the basic/main operation 💡💡

        - now let's do the BONUS stuff

    STEP 4 : 
        - adding overlay when we click to open button with the modal
            & removing overlay when we click to close button with the modal

        openModalBtn.addEventListener('click' , () => {
            modal.classList.add("open")
            overlay.classList.add("open")
        })

        - here we'll do BONUS thing later on
        - because right now we're trying to focus on main problem 💡💡💡

        // BONUS: Also remove the class "open" from the overlay
        closeModalBtn.addEventListener('click' , () => {
            modal.classList.remove("open")
            overlay.classList.remove("open")
        })  
        

    STEP 4 : 
        // BONUS: Add a click event listener to the overlay 
        //        that removes the class "open" from the modal and the overlay
        //          because we want to remove the overlay + modal 
        //          when even if click to overlay directly

        overlay.addEventListener('click' , () => {
            modal.classList.remove("open")
            overlay.classList.remove("open")
        })  

    STEP 5 : 

        - here we can see that overlay code becomes same as above 
        - so here comes function

        - so we can create a function to close the modal as well as overlay
        closeModalBtn.addEventListener('click' , () => {
            closeModal()
        }) 

        overlay.addEventListener('click' , () => {
            closeModal()
        })  
        // OR
        closeModalBtn.addEventListener('click' , closeModal) 
        overlay.addEventListener('click' , closeModal)  

        - here second way is useful when we're not passing anything 
            as arguments inside closeModal() function 
        - & even we didn't use parenthesis 
            because we're just passing the definition of closeModel function
            as a callback function 💡💡💡
            
        - if we're passing arguments inside closeModal() function
            then we need to call that closeModal() function
            like this 
            closeModalBtn.addEventListener('click' , closeModal("hello")) 
            overlay.addEventListener('click' , closeModal("hello"))  

        function closeModal() {
            modal.classList.remove("open")
            overlay.classList.remove("open")
        }

        - here we created a function 
            because even if we want to change something like class name 
            that we're removing then
            those changes will be reflected in both click event listener
            of closeModalBtn & overlay ✔✔

## Note - of classList object/property 🔥

    - classList is a property as well as object also

    - to get all the classList name that are inside the specific element
        then use classList property one that element 💡💡💡

        eg : getting all the class names of an element ✅
            const box = document.querySelector(".close-div")
            console.log(box.classList)
            
    - important methods of classList object ✅

        - add() --> used to add/give class name inside double quotes to that element 
        - remove() --> used to remove a class name from that element
        - toggle() --> used to remove & add class name from that element through toggling/clicking
                        means doing ON or OFF
