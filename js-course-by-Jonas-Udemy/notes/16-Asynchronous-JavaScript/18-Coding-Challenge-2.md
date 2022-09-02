# Coding Challenge 2

- problem statement :
    - Build the image loading functionality that I just showed you on the screen.
    - Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉
    - PART 1
        - `1` : Create a function 'createImage' which receives imgPath as an input. 
            - This function returns a promise which creates a new image (use document.createElement('img')) 
            - and sets the .src attribute to the provided image path. When the image is done loading, 
            - append it to the DOM element with the 'images' class, and resolve the promise. 
            - The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.
        - If this part is too tricky for you, just watch the first part of the solution.
    - PART 2
        - `1` : Consume the promise using .then and also add an error handler;
        - `2` : After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
        - `3` : After the 2 seconds have passed, hide the current image (set display to 'none'), and 
            - load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
        - `4` : After the second image has loaded, pause execution for 2 seconds again;
        - `5` : After the 2 seconds have passed, hide the current image.
    - TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. 
        - Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

## solution

- working output : when we reload the page
    - then there will be image loading in the background & as soon as that arrives it's displayed <br>
        & after 2 seconds it disappear 
    - & another image starts loading in the background & it'll be displayed & again after 2 seconds it disappeared <br>
        & then page will again become blank

- set the network as fast 3G otherwise images will load too fast & due to that , we can see the effect 💡💡💡

html code
```html
<div class="images"></div>
```

- `STEP 1` : creating createImage() function , creating & returning a new promise
    ```js
    const imgContainer = document.querySelector('.images')

    const createImage = function(imgPath) {
        return new Promise(function(resolve, reject) {
            const img = document.createElement('img')
            img.src = imgPath

            img.addEventListener('load', function() {
                imgContainer.append(img)
                resolve(img)
            })

            img.addEventListener('error', function() {
                imgContainer.append(img)
                resolve(img)
            })

            // load & error are event listener which are fired on a window -> global object
            // here error -> event will fire when a resource failed to load or couldn't be used 💡💡💡
        })
    }
    ```

- `STEP 2` : consuming the promise
    ```js
    const imgContainer = document.querySelector('.images')

    const createImage = function(imgPath) {
        return new Promise(function(resolve, reject) {
            const img = document.createElement('img')
            img.src = imgPath

            img.addEventListener('load', function() {
                imgContainer.append(img)
                resolve(img)
            })

            img.addEventListener('error', function() {
                imgContainer.append(img)
                resolve(img)
            })
        })
    }

    createImage('img/img-1.jpg').then(img => {
        console.log('Image 1 loaded')
    }).catch(err => console.error(err))
    ```
    - output : refresh the page & now image will take some time & then loaded

- `STEP 3` : creating wait() function
    ```js
    const wait = function(seconds) {
        return new Promise(function(resolve) {
            setTimeout(resolve, seconds * 1000)
        })
    }

    const imgContainer = document.querySelector('.images')

    const createImage = function(imgPath) {
        return new Promise(function(resolve, reject) {
            const img = document.createElement('img')
            img.src = imgPath

            img.addEventListener('load', function() {
                imgContainer.append(img)
                resolve(img)
            })

            img.addEventListener('error', function() {
                imgContainer.append(img)
                resolve(img)
            })
        })
    }

    let currentImg ;

    createImage('img/img-1.jpg').then(img => {
        currentImg = img
        console.log('Image 1 loaded')
        return wait(2)
    }).then(() => {
        // here we can't use the img -> variable which is inside the first then() method 
            // so that's why we create the global variable 💡💡💡
        currentImg.style.display = 'none'

    }).catch(err => console.error(err))
    ```
    - output : now refresh the page then the first image gets loaded & then after 2 seconds it'll get hide

- `STEP 4` : loading the second image & hiding it after 2 seconds
    ```js
    const wait = function(seconds) {
        return new Promise(function(resolve) {
            setTimeout(resolve, seconds * 1000) 
            // here we just pass the function definition of resolve() function 
                // as a callback function argument of setTimeout() 
            // & we didn't pass any argument inside that resolve() function 
                // because we actually want to resolve that promise 💡💡💡
        })
    }

    const imgContainer = document.querySelector('.images')

    const createImage = function(imgPath) {
        return new Promise(function(resolve, reject) {
            const img = document.createElement('img')
            img.src = imgPath

            img.addEventListener('load', function() {
                imgContainer.append(img)
                resolve(img)
            })

            img.addEventListener('error', function() {
                imgContainer.append(img)
                resolve(img)
            })
        })
    }

    let currentImg ;

    createImage('img/img-1.jpg').then(img => {
        currentImg = img
        console.log('Image 1 loaded')
        return wait(2)
    }).then(() => {
        currentImg.style.display = 'none'
        return createImage('img/img-2.jpg') 
    }).then(img => {
        currentImg = img
        console.log('Image 2 loaded')
        return wait(2)
    }).then(() => {
        currentImg.style.display = 'none'
        
    }).catch(err => console.error(err))
    ```

- so we promisify the code to handle the async behavior
