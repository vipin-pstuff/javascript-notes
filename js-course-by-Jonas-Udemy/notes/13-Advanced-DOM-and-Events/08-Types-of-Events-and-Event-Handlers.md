# Types of Events and Event Handlers

- for list of events types : https://developer.mozilla.org/en-US/docs/Web/Events

- `important types of events are` : Mouse events , keyboard events , view events 

- `mouseenter` event type : 
    - means it's like hover in css 
    - so when mouse is enter in that element then `mouseenter` event will trigger

- Eg 1 : removing event listener
    - `removeEventListener()` method : 
        - it's used to remove a particular event listener 
        - it also takes two arguments i.e first : event name in double quotes , second : a common callback function
        - then use a common function otherwise removing event listener won't work
    ```js
    const h1 = document.querySelector('h1')

    const alertH1 = function() {
        alert("HELLO WORLD!")

        h1.removeEventListener('mouseenter', alertH1) // don't use remove event listener here
    }

    h1.addEventListener('mouseenter', alertH1) 

    setTimeout(() => {
        h1.removeEventListener('mouseenter', alertH1) 
    }, 3000)
    // output : when we enter the mouse cursor inside h1 element then callback function will be executed i.e alertHI 
        // & then after clicking on the button of alertHi then 'mouseenter' event will be removed 
        // & even if you hover on that h1 element then nothing will happen
    ```
    - use `removeEventListener()` method when we want to listen that event only one time <br>
        & don't remove that event listener immediately , use it with `setTimeout()` function 💡💡💡
