# PROJECT - Bankist Website

- features/component that we have on this website
    - `1` : animation happen when we scroll down
    - `2` : lazy loading images come while scrolling 
    - `3` : menu bar is sticky & when we hover any on of the links then other menu links will fade out 
    - `4` : tab component
    - `5` : carousel component
    - `6` : popup/modal window/box
    - `7` : when we click on any menu link then we'll get smooth scrolling animation 
 
## starter code 

- check starter-file folder

## Steps - working on modal/popup window

- right now only one feature/component work i.e popup window & we need to do two small changes
    - `1` : when we scroll down little bit & when we click on `open account` button of menu <br>
        then by-default will scroll up which we don't want 
    - `2` : using forEach() method to loop over on the NodeList of btnsOpenModal
        - `Imp Note for NodeList` : 
            - by-default , NodeList has only one array method i.e forEach() method but it doesn't have all the array methods
            - & to use all the array methods then we need to convert <br>
                that NodeList into an actual array by Array.from() method 💡💡💡

- `STEP 1` : stopping the default behavior of anchor tag
    - when we have that `href="#"` (on a anchor tag) which will make the page jump/scroll to the top <br>
        which is the default behavior when we click a link that has this `href="#"` 💡💡💡
    ```js
    // Modal window

    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const btnCloseModal = document.querySelector('.btn--close-modal');
    const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

    const openModal = function (e) {
        e.preventDefault() // prevented the default behavior of anchor tag
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
    };

    const closeModal = function () {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    };

    for (let i = 0; i < btnsOpenModal.length; i++)
      btnsOpenModal[i].addEventListener('click', openModal);

    btnCloseModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
      }
    });
    ```

- `STEP 2` : using forEach() array method on NodeList instead of old way i.e for loop
    ```js
    // Modal window

    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const btnCloseModal = document.querySelector('.btn--close-modal');
    const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

    const openModal = function (e) {
        e.preventDefault() // prevented the default behavior of anchor tag
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
    };

    const closeModal = function () {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    };

    btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

    // for (let i = 0; i < btnsOpenModal.length; i++)
    //   btnsOpenModal[i].addEventListener('click', openModal);

    btnCloseModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
      }
    });
    ```
