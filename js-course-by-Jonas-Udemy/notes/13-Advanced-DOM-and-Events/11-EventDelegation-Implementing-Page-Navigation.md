# Event Delegation : Implementing Page Navigation

- let's use the power of event bubbling phase to implement event delegation 

## Stater code 

index.html
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

script.js 
```js
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});


///////////////////////////////////////
// Page navigation
```

## Steps - to implement page navigation

- so whenever we click on any links of menu of navigation then we scroll down immediately without any smooth scrolling 

- `STEP 1` : preventing default action of anchor tag
    ```js
    document.querySelectorAll('.nav__link').forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
        })   
    })   
    ```
    - output : now when we click on any links then the page won't scroll down to that section & even URL also not change

- `STEP 2` : selecting that id name to scroll down instead of href attribute
    ```js
    document.querySelectorAll('.nav__link').forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();

            const id = this.getAttribute('href') 
                // here we used getAttribute() method to get the exact value of href instead of doing like this 
                    // this.href --> this will give absolute URL 💡💡💡
            console.log(id)
        })   
    })
    ```
    - output : when we click let's say 'features' menu link then we'll get #section--1
        - so we can use #section--1 as it is for id selector
    - `STEP 2.1` : selecting id of menu & implementing the smooth scrolling 
        ```js
        document.querySelectorAll('.nav__link').forEach(function (el) {
            el.addEventListener('click', function (e) {
                e.preventDefault();

                const id = this.getAttribute('href') 
                document.querySelector(id).scrollToView({ behavior: 'smooth' })
            })   
        })
        ```
        - output : we'll get smooth scrolling 

- `why event delegation/propagation we want ✅` : 
    - so till yet , smooth scrolling is happening but at the end it's not efficient because 
        ```js
        el.addEventListener('click', function (e) {
            e.preventDefault();

            const id = this.getAttribute('href') 
            document.querySelector(id).scrollToView({ behavior: 'smooth' })
        })
        ```
        - here we're adding callback function once to each of those 3 menu links <br>
            means we attach the same callback function for each menu link which is unnecessary & not efficient <br>
            right now we have 3 menu links but what if we have 1000 or 10,000 menu links
        - so if we attach that same callback function in 10,000 menu links then we're just coping for 10,000 menu links <br>
            so at the end , it'll impact the performance which is not a clean solution 💡💡💡
        - so better solution is event delegation 💡💡💡
    - so by using event delegation , we know that events bubble up & we'll do this <br>
        by putting the `addEventListener()` method on a common parent of all the elements <br>
        that we're interested in i.e `ul` element 💡💡💡
        - so we'll put our event handler on that `ul` element & then when a user clicks any on the menu links <br>
            then that event is generated & bubbles up
        - & then we can catch that event in that common parent element & handle that event in the parent element <br>
            because we know where the event actually originated/executed/runs 💡💡💡
        - so we can use `e.target` property to know where that event originated/executed 💡💡💡

- `STEP 3` : so event delegation/propagation needs two steps ✅
    - `1` : add the event listener to a common parent element of all the elements that we're interested in    
    - `2` : determine what element originated the event 
    - & it's a very common & important technique 💡💡💡
    ```js
    document.querySelector('.nav__links').addEventListener('click', function (e) {
        e.preventDefault();
        console.log(e.target) 
    });
    ```
    - output : when we click on any menu link then that we'll be printed as target 
        - but when we click on `ul` element then that also will be printed as target
        - now here we want matching condition for only menu links <br> 
            that if user click on only any menu links then do smooth scrolling <br>
            but if user click on `ul` element then don't do anything 💡💡💡
    - `STEP 3.1` : checking matching condition
        ```js
        document.querySelector('.nav__links').addEventListener('click', function (e) {
            e.preventDefault(); // for when we click on ul element then prevent the default action

            // Matching strategy
            if (e.target.classList.contains('nav__link')) { // OR if (e.target.matches('.nav__link')) 💡💡💡
              const id = e.target.getAttribute('href');
              document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
            }
        })
        ```
        - output : now when we click on any of the menu links then smooth scrolling happens
            - & if we click on `ul` element then nothing will happen
    - so event delegation/propagation is a lot better & a lot more efficient <br>
        than simply attaching the same event handler to multiple elements
    - so we just add one big event handler function to the parent element of all the elements which we're interested in <br> 
        & then we simple determined where the click event came from
    - we need that matching strategy because we wanted to ignore clicks which didn't happen one of those menu links

- `one more important use case of event delegation ✅` : 
    - when we're working with elements that're not yet on the page on runtime <br>
        so by the time the page loads & a great example is buttons 💡💡💡 <br>
        so buttons are added dynamically while using the application 
    - so it's not possible to add event handlers on two elements which didn't exist but we'll still be able <br>
        to handle events on elements which don't exist at the beginning by using event delegation 💡💡💡
