# Styles, Attributes and Classes

## Example - of style property

- Eg 1 : of `style` property
    - `style` property/object used to apply style 
    ```js
    const message = document.querySelector('.cookie--popup')
    message.style.backgroundColor = '#37383d'
    message.style.width = '120%'
    ```
    - whatever style we apply through JS , all those styles will be applied as inline style 💡💡💡 <br>
        when we do this `console.log(message.style.height)` will be applied then we'll not get anything <br>
        because `style` property only works for inline styles 💡💡💡
        - means right now we didn't applied height to that message that's why we're not getting height
        - but if we do `console.log(message.style.backgroundColor)` then we'll get the background color <br>
            because we already applied the background-color as inline style manually

- Eg 2 : using getComputedStyle() method ✅
    - `getComputedStyle()` method 
        - it returns an object which contain the values of all CSS properties of an element 💡💡💡
        - it takes only two arguments i.e 
            - `1` : an element name itself (required)
            - `2` : a pseudo element of that element (optional) 
    ```js
    console.log(getComputedStyle(message))
    // output : we'll get an object which contain the values of all the css properties of this 'message' element
    console.log(getComputedStyle(message).color) // output : we'll get value of color of this 'message' element
    ```

- Eg 3 : applying style to that cookie message box
    ```js
    message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'
    ```

- Eg 4 : working with css variables (custom css properties) ✅
    - in css , this is `:root {}` & to select this root element selector in JS <br>
        then either do use this `document.documentElement` property 💡💡💡 or document.querySelector(':root') 
    - Note : root element is html element , not the body 💡💡💡 
    - `setProperty()` method 
        - it's a method of `style` property/object 
        - it takes 3 arguments i.e 💡💡💡
            - `1` : property name in double quotes (required)
                - that property name can be either custom css properties or actual property but depends on situation
            - `2` : value for that property in double quotes (required)
                - value must not contain "!important" because "!important" will be define as 3rd argument 
            - `3` : priority (optional)
    ```js
    document.documentElement.style.setProperty('--color-primary', 'orangered')
    // output : any where we used applied this custom property i.e --color-primary , it's value will be applied
    ```
    - we can't directly access css custom property like this `message.style.backgroundColor` <br>
        that's why we have to use `setProperty()` method of `style` property 💡💡💡
    - & we can also use `setProperty()` to set the value for the actual css property also <br>
        but easier way is `message.style.backgroundColor` 💡💡💡

## Example - of html Attributes of an element 

- Eg 1 : getting/selecting attribute of an element of bankist website
    - selecting the standard attribute of an element
        ```js
        const logo = document.querySelector('.nav__logo')
        console.log(logo.alt) // output : we'll get the value of alt attribute of that logo
        console.log(logo.src) // output : http://127.0.0.1:8080/img/logo.png 
        console.log(logo.className) // output : nav__logo 
        ```
        - `className` property used to get the class name of that element
    - `Note for access custom attribute of that element ✅` : 
        - if we add/created custom attribute then we can't access that custom attribute directly 💡💡💡 like this 
            ```html
            <img src="img/logo.png" designer="UI">
            ```
            ```js
            const logo = document.querySelector('img')
            console.log(logo.designer) 
            // output : undefined because designer isn't a standard css properties 💡💡💡
            ```
        - that's why we use `getAttribute()` method 
        - `getAttribute()` method takes only one argument i.e name of that custom attribute in double quotes 💡💡💡
    - if we want to access standard attributes of that element then we can directly access <br>
        that attribute as a property instead of using getAttribute() method 
    - but if want to access the custom attribute of that element then use only `getAttribute()` method 💡💡💡 like this
        ```js
        console.log(logo.getAttribute('designer'))
        ```

- Eg 2 : set the value of an standard attribute of a element 
    ```js
    const logo = document.querySelector('.nav__logo')
    logo.alt = 'Beautiful minimalist logo'
    ```
    - `setAttribute()` property 
        - it's used to set/create the custom attribute & it's value inside an element 💡💡💡
        - takes 2 argument i.e 
            - `1` : custom attribute name in double quotes
            - `2` : value for that custom attribute name in double quotes
        ```js
        logo.setAttribute('company', 'Bankist')
        ```
    - Eg 2.1 : relative URL vs absolute URL ✅
        ```js
        console.log(logo.src) 
            // output : http://127.0.0.1:8080/img/logo.png  --> this is absolute URL 💡💡💡
        console.log(logo.getAttribute('src')) 
            // output : img/logo.png --> this is relative URL which is define by ourself in HTML document 💡💡💡
        ```
        - so if we want relative URL then use `getAttribute()` method & same for `href` attribute on links 💡💡💡
        - Eg 3.1 : of in case of links
            ```js
            const link = document.querySelector('.twitter-link')
            console.log(link.href) // output : https://twitter.com/jonasschmedtman
            console.log(link.getAttribute('href')) // output : https://twitter.com/jonasschmedtman
            ```
            - here we're getting same URL because URL which is defined is same
            - but if we're working with menu links 
        - Eg 3.2 : selecting 'href' attribute of 'open account' button
            ```js
            const link = document.querySelector('.nav__link--btn')
            console.log(link.href) // output : https://127.0.0.1:8080/#
            console.log(link.getAttribute('href')) // output : #
            ```

- Eg 4 : data attributes 🔥
    - data attributes are special attribute & it's used a lot of time when we're dealing with UI <br>
        especially when we need to store data in UI/HTML document 💡💡💡
    - in html , inside an element , we define data attribute as `data-something-something` <br>
        so first `data` word come & then custom name which we want to give based on need <br>
        & then inside JS , we use `dataset` property (on that element) <br>
        & then name of that data attribute in camelCase not in hyphen because in JS variable are not stored in hyphen 💡💡💡 
    ```html
    <img src="img/logo.png" designer="UI" data-version-number="3.0">
    ```
    ```js
    const logo = document.querySelector('img')
    console.log(logo.dataset.versionNumber) // output : 3.0
    ```

## Example - of classes

- `4 methods of classList object/property`
    ```js
    logo.classList.add('c' , 'j') // we can add one or multiple class name at the same time 💡💡💡  
    logo.classList.remove('c' , 'j') // we can remove one multiple class name at the same time 💡💡💡
    logo.classList.toggle('c')
    logo.classList.contains('c') 
        // OR we can use matches() method which is better than classList.contains() 
            // because matches() method can take argument 
            // like class name or id name as css selector in double quotes 💡💡💡 
    ``` 
    - these methods (of classList object) takes name of class name arguments in double quotes ✔️✔️✔️
    
    - `Note for className property ✅` : 
        - don't use `className` property like this `logo.className = "jonas"` <br>
            because it'll override all the existing classes & it only allows to put only one class on any element 💡💡💡 
        - that's why use add() method of classList object to add class names
