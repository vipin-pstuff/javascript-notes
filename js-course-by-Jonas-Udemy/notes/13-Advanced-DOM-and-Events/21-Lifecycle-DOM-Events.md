# Lifecycle DOM Events

- let's see different events that occur in the DOM during a webpage's life cycle
    - lifecycle : means right from the moment that the page is first accessed , until the user leaves it 💡💡💡

## events related to DOM

- `DOMContentLoaded` event :
    - executed/fire by the `document` as soon as the HTML is completely parsed
    - "HTML is parsed" means HTML has been downloaded & been converted to the DOM tree
    - & also all scripts must be downloaded & executed before the DOMContentLoaded event can happen 💡💡💡
    - this event doesn't wait for images & other external resources to load 💡💡💡
    - For Example : 
        ```js
        document.addEventListener('DOMContentLoaded', function(e) {
            console.log('HTML parsed & DOM tree built!', e)
        })
        ```
        - output : we'll get this output immediately
            - so go to network tab & select `Fast 3G` & at the bottom we can see `DOMContentLoaded: 85ms` <br>
                which means that event takes 85ms to executed
        - so we want to execute the code of JS , when entire DOM is loaded <br>
            & we don't need to put our all JS code inside this event <br>
            because we have script tag at the bottom of all the HTML code <br>
            but there are also other ways of loading the JS file

- `load` event : 
    - it's executed by the `window` global object as soon as not only the HTML is parsed <br>
        but also all the images & external resources like CSS files are also loaded 
    - means when the loading of complete page has finished then this event will fire 💡💡💡
    - for example :
        ```js
        window.addEventListener('load', function(e) {
            console.log('Page fully loaded', e)
        })
        ```
        - output : we'll get message when all the things are loaded completely
            - & inside the network tab , at the bottom 
                - we'll get `Load:72 ms` , it's a load time 💡💡💡
                - resources & requests 💡💡💡

- `beforeunload` event :
    - it's executed by the `window` global object
    - this event fire immediately before a user is about to leave a page for Eg : closing the tab of that page 💡💡💡 <br>
        so we can use this event to ask the user that they're 100% sure that they want to leave the page 💡💡💡
    - for Example :
        ```js
        window.addEventListener('beforeunload', function(e) {
            // this event will work on some browsers when we prevent the default action 
                // but in chrome it's not required 💡💡💡
            e.preventDefault() 
            // & to display a leaving confirmation popup 
                // then we need to set the return value on the event to an empty string 💡💡💡
            e.returnValue = ''
        })
        ```
        - output : when we close the tab then a popup will come
        - but don't use this event for this feature because it's annoying , 
        - so use it only when it's necessary like user is leaving in the middle of filling out the form <br>
            so like writing a blog post or etc , so a situation in which data could actually be lost by accident 💡💡💡
