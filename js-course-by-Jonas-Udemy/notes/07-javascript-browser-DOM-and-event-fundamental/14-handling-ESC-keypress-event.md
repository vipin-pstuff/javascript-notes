# handling ESC keypress event 

- so to listen for keyboard events , we still need to use add event listener 
    - because the key press event is simply just another type of event 
    
- all keyboard events are called global events because they don't happen on one specific element
    - & we usually listen these on the whole document i.e `document` object

- we have 3 types of keyboard events i.e `keypress` , `keydown` , `keyup` 

- e.keyCode is deprecated : https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode 
    - so instead of it , use this `key` property of `event` object ✔️✔️✔️
