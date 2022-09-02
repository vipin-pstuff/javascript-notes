# Implementing a Sticky Navigation : The Scroll Event

- once we scroll down & then once we reach a certain point <br>
    then the menu becomes attached to the top of the page

## Starter code 

```html
<nav class="nav">
  <img src="img/logo.png" alt="Bankist logo" class="nav__logo" id="logo"/>
  <ul class="nav__links">
    <li class="nav__item">
      <a class="nav__link" href="#section--1">Features</a>
    </li>
    <li class="nav__item">
      <a class="nav__link" href="#section--2">Operations</a>
    </li>
    <li class="nav__item">
      <a class="nav__link" href="#section--3">Testimonials</a>
    </li>
    <li class="nav__item">
      <a class="nav__link nav__link--btn btn--show-modal" href="#">Open account</a>
    </li>
  </ul>
</nav>
```

## Steps - to implement Sticky Navigation

- `scroll` event is of `window` object 💡💡💡

- `STEP 1` : applying scroll event on the 'window' object
    ```js
    window.addEventListener('scroll', function(e) {
        console.log(e)
    })
    ```
    - output : when we scroll no. of times then `scroll` event type will executed that number of times
        - so scroll event is not really efficient & usually it should be avoided 💡💡💡
    - `STEP 1.1` : applying scrollY property of window object
        - `scrollY` property of `window` object return a decimal point value of Y position while scrolling 💡💡💡
        ```js
        window.addEventListener('scroll', function() {
            console.log(window.scrollY)
        })
        ```
        - checking output : when we scroll then we w'll get value of Y position of scrolling in decimal point
            - & that position which we're getting is from the point in the viewport to the very top of the page
        - & we can't define hard coded value of Y position of scroll because Y axis is dependent on viewport size <br>
            let's say we open then inspect tool & we make it bigger then due to that , that first section ends quickly <br>
            that's why we need to calculate dynamically 💡💡💡

- `STEP 2` : getting coordinates of first section
    ```js
    const section1 = document.querySelector('#section--11')

    const initialCoords = section1.getBoundingClientRect() 
    console.log(initialCoords) 
    ```
    - checking output : first go to top of the page & then we'll get we'll get the value of top as 556 inside DOMRect object
    - `STEP 2.1` : applying sticky class
        ```js
        const section1 = document.querySelector('#section--11')

        // sticky navigation
        const initialCoords = section1.getBoundingClientRect() 
        window.addEventListener('scroll' , function() {
            if (window.scrollY > initialCoords.top) nav.classList.add('sticky')
            else nav.classList.remove('sticky')
        })
        ```
        - output : we'll get correct output 

- `why 'scroll' event is bad ✅` : 
    - `scroll` event is bad because it executed/runs all the time as we scroll up or down <br>
        which affect the performance especially on mobile 💡💡💡 
    - in modern computer , we'll not see any performance issue but on mobile , performance issue will come 
    - so we'll see a better & efficient tool i.e Intersection Observer API 💡💡💡
