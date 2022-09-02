# Revealing Elements on Scroll

- when we scroll down then some elements gets reveal through animation
- in style.css file , we have a class i.e `.section--hidden` , so we'll apply this class <br>
    & when we scroll down then we'll remove this class from that section

## Starter code 

```html
<section class="section section--hidden" id="section--1">
  <div class="section__title">
    <h2 class="section__description">Features</h2>
    <h3 class="section__header">Everything you need in a modern bank and more.</h3>
  </div>

  <div class="features">
    <img src="img/digital-lazy.jpg" data-src="img/digital.jpg" alt="Computer" class="features__img lazy-img"/>
    <div class="features__feature">
      <div class="features__icon">
        <svg><use xlink:href="img/icons.svg#icon-monitor"></use></svg>
      </div>
      <h5 class="features__header">100% digital bank</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
        sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
        debitis ducimus.
      </p>
    </div>

    <div class="features__feature">
      <div class="features__icon">
        <svg><use xlink:href="img/icons.svg#icon-trending-up"></use></svg>
      </div>
      <h5 class="features__header">Watch your money grow</h5>
      <p>
        Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
        inventore ab? Nulla incidunt eius numquam sequi iste pariatur
        quibusdam!
      </p>
    </div>
    <img src="img/grow-lazy.jpg" data-src="img/grow.jpg" alt="Plant" class="features__img lazy-img"/>

    <img src="img/card-lazy.jpg" data-src="img/card.jpg" alt="Credit card" class="features__img lazy-img"/>
    <div class="features__feature">
      <div class="features__icon">
        <svg><use xlink:href="img/icons.svg#icon-credit-card"></use></svg>
      </div>
      <h5 class="features__header">Free debit card included</h5>
      <p>
        Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
        eveniet consequatur odit quam quos possimus assumenda dicta fuga
        inventore ab.
      </p>
    </div>
  </div>
</section>

<section class="section section--hidden" id="section--2">
  <div class="section__title">
    <h2 class="section__description">Operations</h2>
    <h3 class="section__header">Everything as simple as possible, but no simpler.</h3>
  </div>

  <div class="operations">
    <div class="operations__tab-container">
      <button class="btn operations__tab operations__tab--1 operations__tab--active" data-tab="1">
        <span>01</span>Instant Transfers
      </button>
      <button class="btn operations__tab operations__tab--2" data-tab="2">
        <span>02</span>Instant Loans
      </button>
      <button class="btn operations__tab operations__tab--3" data-tab="3">
        <span>03</span>Instant Closing
      </button>
    </div>
    <div class="operations__content operations__content--1 operations__content--active">
      <div class="operations__icon operations__icon--1">
        <svg><use xlink:href="img/icons.svg#icon-upload"></use></svg>
      </div>
      <h5 class="operations__header">
        Tranfser money to anyone, instantly! No fees, no BS.
      </h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>
    </div>

    <div class="operations__content operations__content--2">
      <div class="operations__icon operations__icon--2">
        <svg><use xlink:href="img/icons.svg#icon-home"></use></svg>
      </div>
      <h5 class="operations__header">
        Buy a home or make your dreams come true, with instant loans.
      </h5>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </p>
    </div>
    <div class="operations__content operations__content--3">
      <div class="operations__icon operations__icon--3">
        <svg><use xlink:href="img/icons.svg#icon-user-x"></use></svg>
      </div>
      <h5 class="operations__header">
        No longer need your account? No problem! Close it instantly.
      </h5>
      <p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat.
      </p>
    </div>
  </div>
</section>

<section class="section section--hidden" id="section--3">
  <div class="section__title section__title--testimonials">
    <h2 class="section__description">Not sure yet?</h2>
    <h3 class="section__header">
      Millions of Bankists are already making their lifes simpler.
    </h3>
  </div>

  <div class="slider">
    <div class="slide slide--1">
      <div class="testimonial">
        <h5 class="testimonial__header">Best financial decision ever!</h5>
        <blockquote class="testimonial__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Accusantium quas quisquam non? Quas voluptate nulla minima
          deleniti optio ullam nesciunt, numquam corporis et asperiores
          laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus
          id alias reiciendis, perferendis facere pariatur dolore veniam
          autem esse non voluptatem saepe provident nihil molestiae.
        </blockquote>
        <address class="testimonial__author">
          <img src="img/user-1.jpg" alt="" class="testimonial__photo" />
          <h6 class="testimonial__name">Aarav Lynn</h6>
          <p class="testimonial__location">San Francisco, USA</p>
        </address>
      </div>
    </div>

    <div class="slide slide--2">
      <div class="testimonial">
        <h5 class="testimonial__header">
          The last step to becoming a complete minimalist
        </h5>
        <blockquote class="testimonial__text">
          Quisquam itaque deserunt ullam, quia ea repellendus provident,
          ducimus neque ipsam modi voluptatibus doloremque, corrupti
          laborum. Incidunt numquam perferendis veritatis neque repellendus.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
          deserunt exercitationem deleniti.
        </blockquote>
        <address class="testimonial__author">
          <img src="img/user-2.jpg" alt="" class="testimonial__photo" />
          <h6 class="testimonial__name">Miyah Miles</h6>
          <p class="testimonial__location">London, UK</p>
        </address>
      </div>
    </div>

    <div class="slide slide--3">
      <div class="testimonial">
        <h5 class="testimonial__header">
          Finally free from old-school banks
        </h5>
        <blockquote class="testimonial__text">
          Debitis, nihil sit minus suscipit magni aperiam vel tenetur
          incidunt commodi architecto numquam omnis nulla autem,
          necessitatibus blanditiis modi similique quidem. Odio aliquam
          culpa dicta beatae quod maiores ipsa minus consequatur error sunt,
          deleniti saepe aliquid quos inventore sequi. Necessitatibus id
          alias reiciendis, perferendis facere.
        </blockquote>
        <address class="testimonial__author">
          <img src="img/user-3.jpg" alt="" class="testimonial__photo" />
          <h6 class="testimonial__name">Francisco Gomes</h6>
          <p class="testimonial__location">Lisbon, Portugal</p>
        </address>
      </div>
    </div>

    <!-- <div class="slide"><img src="img/img-1.jpg" alt="Photo 1" /></div>
    <div class="slide"><img src="img/img-2.jpg" alt="Photo 2" /></div>
    <div class="slide"><img src="img/img-3.jpg" alt="Photo 3" /></div>
    <div class="slide"><img src="img/img-4.jpg" alt="Photo 4" /></div> -->
    <button class="slider__btn slider__btn--left">&larr;</button>
    <button class="slider__btn slider__btn--right">&rarr;</button>
    <div class="dots"></div>
  </div>
</section>
```
- in all 3 sections , we applied the `.section--hidden` class
- & now all those sections will be disappear means they're in on screen but in invisible form

## Steps - to implement reveal sections during scroll by using Intersection Observer API

- `STEP 1` : creating Intersection Observer API for revealing sections
    ```js
    const allSections = documnet.querySelectorAll('.section')

        // using these names of parameter because these are standard names 💡💡💡
    const revealSection = function(entries, observer) { 

    }

    const sectionObserver = new IntersectionObserver(revealSection, {})

    // Note for forEach() method ✅ : 
        // we use forEach() method when we don't want to return any array 
        // but we want to loop over the array 💡💡💡
    allSections.forEach(function(section) {
        sectionObserver.observe(section)
    })
    ```
    - Note : instead of applying that `.section--hidden` manually
        - do it , through JS because some people disable the JS & due to this they'll be not able to see
        - so remove the `.section--hidden` class from all the section in the index.html file

- `STEP 2` : adding that .section--hidden class
    ```js
    const allSections = documnet.querySelectorAll('.section')

    const revealSection = function(entries, observer) { 
        const [entry] = entries // using array destructing because usually threshold value will be in array 💡💡💡

        console.log(entry)
    }

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null, 
        threshold: 0.15 // 15%
            // we want to set greater than 0 
                // because we don't want to show the section right as it enters the viewport   
                // but a little bit later 💡💡💡
    })

    // Note for forEach() method ✅ : 
        // we use forEach() method when we don't want to return any array 
        // but we want to loop over the array 💡💡💡
    allSections.forEach(function(section) {
        sectionObserver.observe(section)
        section.classList.add('section--hidden')
    })
    ```
    - output : when we scroll down & we'll get that IntersectionObserverEntry object
        - & inside of it , isIntersecting is false  
        - & when we scroll little bit untill 15% , now intersection happens & <br>
            inside IntersectionObserverEntry object , inside `target` property , <br>
            we have `className: "section section--hidden"` means a certain section intersect the viewport <br>
            & we have `id` property which is `section--1` means it was the section--1 which intersect with the viewport 💡💡💡
        - now we'll see `target` property of IntersectionObserverEntry object 💡💡💡 <br>        
            is important because we don't want to reveal all the section except this section--1 <br>
            but right now we're observering all the section , we have to figure out which is the section <br>
            that actually intersected the viewport , so here we'll use `target` property 💡💡💡

- `STEP 3` : observing the particular section & revealing it while scrolling
    - but keep other section hidden
    ```js
    const allSections = documnet.querySelectorAll('.section')

    const revealSection = function(entries, observer) { 
        const [entry] = entries 
        entry.target.classList.remove('section--hidden')
    }

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null, 
        threshold: 0.15 
    })

    allSections.forEach(function(section) {
        sectionObserver.observe(section)
        section.classList.add('section--hidden')
    })
    ```
    - output : we'll get all the section reveal while scrolling 
        - but we only want to show/trigger the particular section when it's intersecting & remove that class 💡💡💡

- `STEP 3` : triggering the particular section when it's actually intersecting & then remove that class
    ```js
    const allSections = documnet.querySelectorAll('.section')

    const revealSection = function(entries, observer) { 
        const [entry] = entries 

        console.log(entry)

        if (!entry.isIntersecting) return
        entry.target.classList.remove('section--hidden')
    }

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null, 
        threshold: 0.15 
    })

    allSections.forEach(function(section) {
        sectionObserver.observe(section)
        section.classList.add('section--hidden')
    })
    ```
    - output : we'll get the correct output 
        - but when we're scrolling the more & more these intersction object will be printed 
        - so we don't want to show because all the work is done already , so we need to unobserve

- `STEP 4` : don't want to observe when all the section gets reveal
    ```js
    const allSections = documnet.querySelectorAll('.section')

    const revealSection = function(entries, observer) { 
        const [entry] = entries 

        console.log(entry)

        if (!entry.isIntersecting) return
        entry.target.classList.remove('section--hidden')
        observer.unobserve(entry.target) // unobserve() method used to unobserve that target element
    }

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null, 
        threshold: 0.15 
    })

    allSections.forEach(function(section) {
        sectionObserver.observe(section)
        section.classList.add('section--hidden')
    })
    ```
    - output : when we do scrolling down then we'll get that intersection object
        - because we'll observing that element 
        - but the movement oberving work done & scrolling up <br>
            then that intersection object will not be printed which is great for better performance 💡💡💡
