# DOM Traversing

- DOM traversing means walking/traveling through the DOM <br>
    - which means we can select an element based on another element 
    - & it's very important because sometimes we need to select elements relative to a certain other element
    - for Eg : a direct child or a direct parent element or sometimes , we don't even know the structure of the DOM at runtime  
    - & in all these situations , we need DOM traversing

- testing code 
    ```html
    <header class="header">
      <div class="header__title">
        <h1>When
          <!-- Green highlight effect -->
          <span class="highlight">banking</span>
          meets<br>
          <span class="highlight">minimalist
            <span class="highlight">minimalist</span>
            <h1>Hello World</h1>
          </span>
        </h1>
        <h4>A simpler banking experience for a simpler life.</h4>
        <button class="btn--text btn--scroll-to">Learn more &DownArrow;</button>
        <img src="img/hero.png" class="header__img" alt="Minimalist bank items"/>
      </div>
    </header>
    ```

## Examples - DOM Traversing

- Eg : selecting child elements (going downwards)
    ```js
    const h1 = document.querySelector('h1')

    const headerEle = grandContainer.querySelector('header')
    console.log(headerEle) 
        // output : null -> because we can't select parent element 
            // through child element by using querySelector() method
            // through querySelector() method we can select child elements based on that parent element 💡💡💡
            // & here header element is not a child element 
    ```
    - `querySelector()` method & all the selector method 
        - are used to select any element & selecting child elements based on that element  
    - Eg : of childNodes property
        - `childNodes` property 
            - it used to select only direct children inside of that element <br>
                direct children could be anything because we know Nodes can be anything 💡💡💡
            - it returns an array 
        ```js
        const h1 = document.querySelector('h1')

        console.log(h1.childNodes)
        // output : [text, comment , text, span.highlight, text, br, text, span.highlight, text] 
        ```
        - so if we know only child elements then use `children` property
    - Eg : of children property
        - `children` property 
            - used to select only direct child elements based on that parent element 
            - returns an array 
        ```js
        const h1 = document.querySelector('h1')

        console.log(h1.children) // output : [span.highlight, br, span.highlight]
        ```
    - Eg : firstElementChild , lastElementChild properties
        - `firstElementChild` property used to select first direct child element of that parent element 
        - `lastElementChild` property used to select last direct child element of that parent element 
        ```js
        const h1 = document.querySelector('h1')

        h1.lastElementChild.style.color = "gray"
        // output : gray color will be applied on that last direct child of that parent element 
            // Note : but we know that color is a inherit css property , 
                // so if there are nested child inside that last direct child
                // then on those nested child also get color 💡💡💡 
        ```

- Eg : selecting parent (going upwards)
    - `parentNode` & `parentElement` properties will give the direct parent element based on that child element 
    - but `parentElement` property is better 
    ```js
    const h1 = document.querySelector('h1')
    console.log(h1.parentNode)
    console.log(h1.parentElement)
    ```
    - most of the time we want to select that parent element which is not direct parent element , so we use closes() method
    - Eg : of closest() method
        - `closest()` method 
            - it used select any parent element based on that child element 
            - it takes a argument i.e css selector in double quotes
            - return null if that element not found , return that element itself if it's found
        - `matches()` method
            - it's also used to select element 
            - returns true or false whether that element is selected or not 
            - & it's better than `contains()` method of `classList` object 💡💡💡
        ```js
        const h1 = document.querySelector('h1')
        console.log(h1.closest('.header')) // output : header parent element will be selected
        ```
    - closest() method is important method & it's used most of the time especially for event delegation 💡💡💡

- Eg : selecting sibling elements (sideways)
    - in Js , we can only select direct siblings whether it's previous or next
    - `previousElementSibling` property used to select previous element sibling of that element
    - `nextElementSibling` property used to select next element sibling of that element
    - both properties return null if they didn't found
    - 
    ```js
    const h1 = document.querySelector('h1')
    console.log(h1.previousElementSibling) // output : null
    console.log(h1.nextElementSibling) // output : <h4>A simpler banking experience for a simpler life.</h4>
    ```
    - `previousSibling` & `nextSibling` properties are not great <br>
        because most of the time we use previousElementSibling & nextElementSibling properties
    - Eg : normal example 
        - getting parent element & then all the children
        ```js
        console.log(h1.parentElement.children) // output : here we'll get all the children including h1 element also
        ```
        - looping through 
        ```js
        [...h1.parentElement.children].forEach(function(e) {
            if (el !== h1) el.style.transform = 'scale(0.5)'
        })
        ```
