# A Better Way : The Intersection Observer API

- `what is Intersection Observer API` : 
    - this API allows our code to basically observe changes in a way that a certain target element <br>
        intersects another element or the way it intersects the viewport

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
```js
const section1 = document.querySelector('#section--11')

// sticky navigation
const initialCoords = section1.getBoundingClientRect() 
window.addEventListener('scroll' , function() {
    if (window.scrollY > initialCoords.top) nav.classList.add('sticky')
    else nav.classList.remove('sticky')
})
```

## How to use Intersection Observer API 

- `STEP 1` : create a new object of intersection observer
    ```js
    const observer = new IntersectionObserver()
    ```
- `STEP 2` : now use this observer variable to observe a certain target 
    - `observe()` method 
        - it's a method of `IntersectionObserver` class 
        - it used to observe a certain target element or anything
        - so it takes a argument i.e target element which we want to observe 
    ```js
    observer.observe(section1)
    ```
- `STEP 3` : passing callback & options to IntersectionObserver() constructor function ✅
    - `IntersectionObserver()` constructor function 
        - it takes two argument i.e 
            - `1` : callback
            - `2` : options 💡💡💡
    ```js
    const obsCallback = function(entries, observer) {
        // this callback function will get called each time that the observed element i.e target element
            // is intersecting the root element at the threshold that we defined 💡💡💡
            // Eg : whenever the section1 (which is target element) is intersecting the viewport at 10%
                // & viewport is root element which is null & 10% is threshold
                // so whenever that intersection happens b/w target element & root element
                // then this callback function will be called each time doesn't matter we're scrolling up or down
        // this callback function takes two arguments 💡💡💡
            // 1 - entries : these are threshold entires 
                // - usually threshold entires are in array which we loop through each of them
            // 2 - observer means observer object itself i.e new IntersectionObserver(obsCallback, obsOptions)
        entries.forEach(entry => { // here just assume that we have threshold entires in an array
            console.log(entry) 
        }) 
    }

    const obsOptions = {
        // inside options of IntersectionObserver() constructor function 
            // first key will be root -> means it's a element that the target is intersecting 💡💡💡
                // so right now section1 -> is the target element 
                // & root element will be the element that we want our target element to intersect
            // second key will be threshold -> means the percentage of intersection 
                // at which the observer callback will be called i.e first argument 
                    // i.e callback function of IntersectionObserver() constructor function 
        root: null , 
        threshold: 0.1 , // 0.1 = 10% 
            // we can define multiple threshold in an array
    }

    const observer = new IntersectionObserver(obsCallback, obsOptions)
    observer.observe(section1)
    ```
    - checking output : we'll get IntersectionObserverEntry object which `entry` which we loop through
        - but we're not interested in this object , so clean the console tab 
    - output : & then scroll down then we'll get new IntersectionObserverEntry object which is real entry <br>
        because our target element came into the viewport 
        - & we can see the `intersectionRatio` inside of that object which is same as 10% threshold <br>
            & `isIntersecting` property which is true because our target i.e section1 is now intersecting the viewport <br>
            & we're looking for the viewport because we set the root as null 💡💡💡
        - & again if we scroll up then again we'll get that object & inside of it , intersectionRatio will be near to 10%
        - & again when we scroll down & go little far from that threshold 10% then we'll get that object again <br>
            & inside of it isIntersecting as false which is not intersecting because we're no longer have 10% visible 💡💡💡
    - so intersection will happen around that threshold 10% , so if we go far from it then there's no intersection <br>
        & when we come close to use then intersection happen b/w target element & root element <br>
        so this is how intersection observer API works 💡💡💡
    - `intersectionRatio` & `isIntersecting` properties are important to know 💡💡💡

- `STEP 4` : defining different threshold values
    ```js
    const obsCallback = function(entries, observer) {
        entries.forEach(entry => { 
            console.log(entry) 
        }) 
    }

    const obsOptions = {
        root: null , 
        threshold: [0, 0.2] , 
            // 0% - means our callback function will trigger each time that the target element moves completely of the view
                // & also as soon as it enters the view. so the callback function will be called 
                    // when the threshold is passed when moving into the view & when moving out of the view 💡💡💡
            // if we define 1% - then it means the callback function will be called when 100% of the target 
                // is actually visible in the viewport
                // Eg : in case with section1 , that would be impossible because the section itself is already bigger than the viewport
    }

    const observer = new IntersectionObserver(obsCallback, obsOptions)
    observer.observe(section1)
    ```
    - checking output : when threshold 0 
        - then when we scroll down then we'll get IntersectionObserverEntry object & inside of it <br> 
            `0` means that threshold is already passed because already intersection happened
        - `threshold` means limit 
        - like when we scroll down & goes into another section & touches the 20% threshold <br>
            then we'll get intersection object & as soon as we comes to end of that section then <br> 
            means 0% threshold will be trigger which means we got in the end of that section 💡💡💡

- `why Intersection Observer API is useful ✅` : 
    - so it's useful because we can set the limit or we can create a kind-of boundary by defining threshold <br> 
        where that callback function only trigger around that area <br>
        & if that goes far from that boundary then that callback will not execute
    - but in `scroll` event , we don't any control or parameter to set the boundary <br>
        so doesn't matter whether we're scrolling up or down , <br>
        `scroll` event will executed each time as soon as we're scrolling 
    - so IntersectionObserver API is great & it's dynamically interact 💡💡💡

## Steps - to implement sticky navigation by Intersection Observer API

- now think about when we want our navigation to become sticky
    - so we want when the header moves completely out of the view <br>
        means we want to show sticky navigation when we can no longer see that header section 
    - & we're going to observe the header element 💡💡💡

- `STEP 1` : creating a observer object for observing the header element
    ```js
    const header = document.querySelector('.header')

    const stickyNav = function(entries) {
        const [entry] = entries // assume that we have value of threshold in array 
            // so here we're getting first element from the value of threshold
        console.log(entry)
    }

    const headerObserver = new IntersectionObserver(stickyNav, {
        root: null, // here we again root will be null because we're interested in the entire viewport 💡💡💡
        threshold: 0
    })
    ```
    - output : when we scroll down & when the movement the header section goes out of the view 
        - then we'll get IntersectionObserverEntry object & inside of it , intersectionRatio is 0 <br>
            & it's no longer intersecting

- `STEP 2` : making a logic of adding & removing the classes
    ```js
    const header = document.querySelector('.header')

    const stickyNav = function(entries) {
        const [entry] = entries 
        nav.classList.add('sticky')
    }

    const headerObserver = new IntersectionObserver(stickyNav, {
        root: null, 
        threshold: 0
    })
    ```
    - output : now that `sticky` class will be applied 
        - because right now , our target element is intersecting the root i.e viewport 
        - but when we go out of the view of header section then we'll get that intersection observer object <br> 
            & inside of it , intersectionRatio is 0 which means it's not longer intersecting <br>
            & this is the condition which we're interested in 💡💡💡 
        - So only when the header is not intersecting the viewport is when we want to add that `sticky` class <br>
            because when we again scroll up then again we come back to the header section & we'll get that object <br>
            & inside of it , value of `isIntersecting` property is true , so at this point we want to <br> 
            remove that sticky class 💡💡💡

- `STEP 3` : applying the condition by using isIntersecting property 
    - `isIntersecting` property of a entry of callback function argument of IntersectionObserver() constructor function
        - it returns true or false based on whether we're intersecting or not b/w target element & root element 💡💡💡
        - true means it's intersecting & false means it's not intersecting 
    ```js
    const header = document.querySelector('.header')

    const stickyNav = function(entries) {
        const [entry] = entries 

        // do this when the target is not intersecting the root
        if (!entry.isIntersecting) nav.classList.add('sticky')
        // otherwise remove the class
        else nav.classList.remove('sticky')
    }

    const headerObserver = new IntersectionObserver(stickyNav, {
        root: null, 
        threshold: 0
    })
    ```
    - output : when we scroll down & when we go out of the view of header section 
        - then that `sticky` class will be applied to navbar because we're no longer intersecting
        - but when we scroll up & again comes to the view of header section then `sticky` class will be removed  
    - we're still not done because when we see the working example 
        - then while coming to the end of the line of header section then we want to show the navbar as sticky 
        - so here comes `rootMargin` property of options object <br>
            which is the second argument of IntersectionObserver constructor function) 💡💡💡

- `STEP 4` : using rootMargin property
    ```js
    const header = document.querySelector('.header')

    const stickyNav = function(entries) {
        const [entry] = entries 

        // do this when the target is not intersecting the root
        if (!entry.isIntersecting) nav.classList.add('sticky')
        // otherwise remove the class
        else nav.classList.remove('sticky')
    }

    const headerObserver = new IntersectionObserver(stickyNav, {
        root: null, 
        threshold: 0,
        rooMargin: `-90px` // here only px unit works (rem & % unit doesn't work) 💡💡💡
            // means 90px margin will be applied outside of our target element i.e header section 💡💡💡
                // but we want to apply that 90px inside the header section itself , so root margin will be in -90
    })
    ```
    - output : when we scroll down & the movement we're touch the gap i.e margin which is -90px 
        - then `sticky` class will be applied & navbar will be appeared before the threshold was actually reached 💡💡💡
    - now let's calculate this -90px heigh dynamically , so we'll use `getBoundingClientRect()` method 

- `STEP 5` : using `getBoundingClientRect()` method to calculate -90px heigh dynamically
    - why we're calculating dynamically because of responsive site
    ```js
    const header = document.querySelector('.header')
    const navHeight = nav.getBoundingClientRect().height

    const stickyNav = function(entries) {
        const [entry] = entries 

        // do this when the target is not intersecting the root
        if (!entry.isIntersecting) nav.classList.add('sticky')
        // otherwise remove the class
        else nav.classList.remove('sticky')
    }

    const headerObserver = new IntersectionObserver(stickyNav, {
        root: null, 
        threshold: 0,
        rooMargin: `-${navHeight}px` // here only px unit works (rem & % unit doesn't work) 💡💡💡
            // means 90px margin will be applied outside of our target element i.e header section 💡💡💡
                // but we want to apply that 90px inside the header section itself , so root margin will be in -90
    })
    ```
    - height of header section is now dynamic no matter how large height of header section is & work in all the situations

- intersection Observer API is important to do things on certain positions on the page like related to scrolling ✔️✔️✔️

## Extra Notes - Intersection Observer API

- https://itnext.io/1v1-scroll-listener-vs-intersection-observers-469a26ab9eb6
- https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/ 👍
- https://www.youtube.com/watch?v=T8EYosX4NOo
- https://www.youtube.com/watch?v=2IbRtjez6ag
- https://www.youtube.com/watch?v=_5Bu3JY-ZHc
- https://www.youtube.com/watch?v=QOWq3_zpOK4
- https://www.youtube.com/watch?v=gQ8WggeHoJU
