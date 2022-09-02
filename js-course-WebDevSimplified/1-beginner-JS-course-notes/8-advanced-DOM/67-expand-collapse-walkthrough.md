# expand collapse walkthrough 

## Note ✅ 

    - we need to write JS based on that 
            even if in future , if we add any element dynamically like here card 
            then that card should work

    - because if we don't write JS code which doesn't work on 
        that elements which is/are added dynamically then we need to 
        rewrite the our html code that's why we need to always think about 
        that JS code work for those elements also which are added dynamically 💡💡💡

## explanation of code ✅

    STEP 1 : 

        - using 'click' event on document object 
            instead of on that button of each card 
        - due to this we don't have to worry about 
            whether that element is dynamically added or not inside the page 💡💡💡

        document.addEventListener("click", e => {
            if (!e.target.matches(".expand-button")) return
        })

        - here we're again use ing guard clause i.e
            if (!e.target.matches(".expand-button")) return
        - means code which are inside 'click' event only will be executed 
            when that button has a class i.e expand-button

    STEP 2 : 

        - so now we already accessed that button has a class i.e expand-button

        - now we need to think about how we can access that class ie. .card-body
            so first think we can use closest() method on that button 
            to access that class i.e .card
        - & then through that class -> .card , we can access that -> .card-body
            & then we can add the class -> .show & remove it from -> .card-body 

        document.addEventListener("click", e => {
            if (!e.target.matches(".expand-button")) return

            const card = e.target.closest(".card")
            const cardBody = card.querySelector(".card-body")
        })

        - so here we access that .expand-button class  
            & then through this class we directly access .card -> class by using closes() method 
            which is a parent 
        - & then we access that .card-body class 💡💡💡

    STEP 3 : 

        document.addEventListener("click", e => {
            if (!e.target.matches(".expand-button")) return

            const card = e.target.closest(".card")
            const cardBody = card.querySelector(".card-body")
            cardBody.classList.toggle("show")
        })

    STEP 4 : change the text based on which state we are 

        document.addEventListener("click", e => {
            if (!e.target.matches(".expand-button")) return

            const card = e.target.closest(".card")
            const cardBody = card.querySelector(".card-body")
            cardBody.classList.toggle("show")

            if (e.target.innerText === "Expand") {
                e.target.innerText = "Collapse"
            } else {
                e.target.innerText = "Expand"
            }
            // e.target.innerText = e.target.innerText === "Expand" ? "Collapse" : "Expand"
        })

## complete code 

```js
document.addEventListener("click", e => {
  if (!e.target.matches(".expand-button")) return

  const card = e.target.closest(".card")
  const cardBody = card.querySelector(".card-body")

  cardBody.classList.toggle("show")
  if (e.target.innerText === "Expand") {
    e.target.innerText = "Collapse"
  } else {
    e.target.innerText = "Expand"
  }
  // e.target.innerText = e.target.innerText === "Expand" ? "Collapse" : "Expand"
})
```

## discussion page

!["expand collapse walkthrough"](../../all-chats-pics-of-lectures/1-beginner-JS-course-chats-pics/67-expand-collapse-walkthrough.png "expand collapse walkthrough")

