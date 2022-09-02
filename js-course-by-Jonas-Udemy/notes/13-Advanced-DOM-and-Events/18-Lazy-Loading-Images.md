# Lazy Loading Images

- images should be optimized on any page , so for this we can use the strategy i.e Lazy loading images 💡💡💡
- so when we scroll down then image was blur but when we scroll little more then image gets loaded <br> 
    & that blur will be removed

## Starter code 

```html
<section class="section" id="section--1">
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
```
- how Lazy loading is working 
    - so we have two images i.e a small resolution image & a actual resolution image 
    - & we used `data-src` data attribute to apply actual image which contain URL of actual resolution image

## Steps : to implement Lazing Loading Image during scroll by using Intersection Observer API

- so lazy loading image is great for those users whose internet connection is slow 

- `STEP 1` : selecting required images
    ```js
    const imgTargets = document.querySelectorAll('img[data-src]')
    ```
    - `STEP 1.1` : creating observer for image
        ```js
        const imgTargets = document.querySelectorAll('img[data-src]')

        const loadImg = function(entries, observer) {
            const [entry] = entries

            if (!entry.isIntersecting) return

            // Replace src with data-src
            entry.target.src = entry.target.dataset.src
        }

        const imgObserver = new IntersectionObserver(loadImg, {
            root: null, 
            threshold: 0 
        })

        imgTargets.forEach(img => imgObserver.observe(img))
        ```
    - Note : we can't remove `laz-img` class directly like this 
        ```js
        const loadImg = function(entries, observer) {
            const [entry] = entries

            if (!entry.isIntersecting) return

            // Replace src with data-src
            entry.target.src = entry.target.dataset.src
            entry.target.classList.remove('lazy-img')
        }
        ```
        - because after doing this , when we scroll down then image loads very quickly
        - that's why we need `load` event type

- `STEP 2` : using load event
    - `load` event type used to show or do something when things gets load
    ```js
    const imgTargets = document.querySelectorAll('img[data-src]')

    const loadImg = function(entries, observer) {
        const [entry] = entries

        if (!entry.isIntersecting) return

        // Replace src with data-src
        entry.target.src = entry.target.dataset.src

        entry.target.addEventListener('load', () => {
            entry.target.classList.remove('lazy-img')
        })
    }

    const imgObserver = new IntersectionObserver(loadImg, {
        root: null, 
        threshold: 0 
    })

    imgTargets.forEach(img => imgObserver.observe(img))
    ```
    - `STEP 2.1` : now stop the observing the image
        ```js
        const imgTargets = document.querySelectorAll('img[data-src]')

        const loadImg = function(entries, observer) {
            const [entry] = entries

            if (!entry.isIntersecting) return

            // Replace src with data-src
            entry.target.src = entry.target.dataset.src

            entry.target.addEventListener('load', () => {
                entry.target.classList.remove('lazy-img')
            })

            observer.unobserve(entry.target)
        }

        const imgObserver = new IntersectionObserver(loadImg, {
            root: null, 
            threshold: 0 
        })

        imgTargets.forEach(img => imgObserver.observe(img))
        ```
    - now we want to load the images a little bit before we actually reached them . <br>
        so ideally we don't want our users to notice that we're lazy loading these images
    - so lazing loading should happen in the background without our user noticing that. <br> 
        so we should make those images load a little bit earlier , so we'll use `rootMargin` key of options object
    
- `STEP 3` : using rootMargin key of options object
    ```js
    const imgTargets = document.querySelectorAll('img[data-src]')

    const loadImg = function(entries, observer) {
        const [entry] = entries

        if (!entry.isIntersecting) return

        // Replace src with data-src
        entry.target.src = entry.target.dataset.src

        entry.target.addEventListener('load', () => {
            entry.target.classList.remove('lazy-img')
        })

        observer.unobserve(entry.target)
    }

    const imgObserver = new IntersectionObserver(loadImg, {
        root: null, 
        threshold: 0,
        rootMargin: '200px'
    })

    imgTargets.forEach(img => imgObserver.observe(img))
    ```
    - output : when we scroll down then images are fully loaded . so now that happens 200px before we reach them 💡💡💡
