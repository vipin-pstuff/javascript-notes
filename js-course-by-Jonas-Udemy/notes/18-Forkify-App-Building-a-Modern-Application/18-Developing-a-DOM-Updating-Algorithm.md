# Developing a DOM Updating Algorithm

- in this lecture , we'll develop an algorithm which will update the DOM <br>
    only on those places where it actually changed
- `about issue in previous lecture` : 
    - when we were updating the servings then that will always re-render the entire recipe view
    - so when we were increasing or decreasing the servings then image gets reload <br>
        & due to this , flicking is happening on that image
    - & due to that re-render the entire view means all those HTML elements is actually a bit overkill <br>
        & put too much strain on the browser

## Steps - developing a DOM updating algorithm

- `STEP 1` : inside controller.js file , calling update method
    ```js
    import * as model from './model.js' 
    import recipeView from './views/recipeView.js'
    import searchView from './views/searchView.js'
    import resultsView from './views/resultsView.js'
    import paginationView from './views/paginationView.js'

    import 'core-js/stable' 
    import 'regenerator-runtime/runtime' 

    const timeout = function (s) => {
        return new Promise(function (_, reject) {
            setTimeout(function() {
                reject(new Error(`Request took too long! Timeout after ${s} second`))
            }, s * 1000)
        })
    }

    const controlRecipe = async function() {
        try {
            const id = window.location.hash.slice(1)
            if (!id) return 

            resultsView.renderSpinner()

            // 1 - Loading recipe
            await model.loadRecipe(id) 

            // 2 - Rendering recipe
            recipeView.render(model.state.recipe)

        } catch(err) {
            recipeView.renderError() 
        }
    }

    const controlSearchResults = async function() {
        try {
            resultsView.renderSpinner()

            // 1) Get search query
            const query = searchView.getQuery()
            if (!query) return

            // 2) load search results
            await model.loadSearchResults(query) 

            // 3) Render results
            resultsView.render(model.getSearchResultsPage()) 
                // here we didn't pass anything which means we're on Page 1 

            // 4) render initial pagination buttons
            paginationView.render(model.state.search) 

        } catch(err) {
            console.log(err)
        }
    }

    const controlPagination = function(goToPage) { 
        // 1) Render NEW results
        resultsView.render(model.getSearchResultsPage(goToPage)) 

        // 2) render NEW  pagination buttons
        paginationView.render(model.state.search) 
    }
        
    const controlServings = function(newServings) {
        // update the recipe servings (in state)
        model.updateServings(newServings8)

        // update the recipe view
        // recipeView.render(model.state.recipe)
        recipeView.update(model.state.recipe)
            // here difference b/w recipeView.render() Vs recipeView.update()
                // update() method will only update text & attributes in the DOM
                    // without re-rendering the entire view 💡💡💡
    }

    const init = function() {
        recipeView.addHandlerRender(controlRecipes)
        recipeView.addHandlerUpdateServings(controlServings)
        searchView.addHandlerSearch(controlSearchResults)
        paginationView.addHandlerClick(controlPagination)
    }
    init()
    ```

- `STEP 2` : inside View.js file , 
    - creating update() method because we want to make this method available on the different view & for multiple situations
    ```js
    import icons from 'url:../../img/icons.svg' 

    export default class View {
        _data ; 

        render(data) {
            if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError()
            this._data = data
            const markup = this._generateMarkup()
            this._clear()
            this._parentElement.insertAdjacentHTML('afterbegin', markup)
        }

        update(data) {
            if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError()
            this._data = data
            const newMarkup = this._generateMarkup()
                // here we just going to update the html markup . But for doing this , we still need the entire markup
                    // so that we can compare it to the old markup so we'll create a new markup but not render it
                // so we'll just generate the new htm markup 
                    // & then compare with new html markup with previous html markup
                    // & then only change text & attributes that actually have changed from the old version 
                        // to the new version 💡💡💡

            // Note ✅ : we'll get the html markup in string & due to this , comparing old html compare 
                // will become difficult to the DOM elements that we currently have on the page
            // so we'll convert that html markup string to a DOM object , so that we can compare
                // with the actual DOM which is no the page 💡💡💡
            const newDOM = document.createRange().createContextualFragment(newMarkup)
                // createRange() method will create range
                // createContextualFragment() method takes one argument i.e html markup which is in string type
                    // & then this method will convert that string html markup into real DOM node objects 💡💡💡

            // & then newDOM -> variable will become an object which is like a virtual DOM
                // which means a DOM is not really living on the page but which lives in our memory
                // so we can use that DOM as like a real DOM on our page 💡💡💡
            const newElements = newDOM.querySelectorAll("*") // star sign means all elements
            console.log(newElements)
        }

        _clear() {
            this._parentElement.innerHTML = '' 
        }

        renderSpinner() { 
            const markup = `
                <div class="spinner">
                    <svg><use href="${icons}_icon-loader"></use></svg>
                </div>
            `

            this._clear()
            this._parentElement.insertAdjacentHTML('afterbegin', markup)
        }

        renderError(message = this._errorMessage) {
            const markup = `
                <div class="error">
                    <div>
                        <svg><use href="${icons}_icon-alert-triangle"></use></svg>
                    </div>
                    <p>${message}</p>
                </div> 
            `

            this._clear()
            this._parentElement.insertAdjacentHTML('afterbegin', markup)
        }

        renderMessage(message = this._message) {
            const markup = `
                <div class="message">
                    <div>
                        <svg><use href="${icons}_icon-smile"></use></svg>
                    </div>
                    <p>${message}</p>
                </div> 
            `

            this._clear()
            this._parentElement.insertAdjacentHTML('afterbegin', markup)
        }
    }
    ```
    - output : when we click on the increase button of servings then inside console tab
        - we'll get an NodeList array which contain our all the html elements of that section in the new DOM
        ![we got all the html elements in new DOM which is virtual DOM](../notes-pics/18-module/18-lecture/lecture-18-0.jpg)
        - & if we check this element i.e inside `span.recipe__info-data.recipe__info-data--people` <br>
            inside innerHTML or innerText will contain `5` as updated serving
        - so we can compare this virtual DOM with the actual DOM which is really on the page <br>
            based on which things are changed 

- `STEP 3` : inside View.js file , getting html elements which are on the actual page in order to compare
    ```js
    import icons from 'url:../../img/icons.svg' 

    export default class View {
        _data ; 

        render(data) {
            if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError()
            this._data = data
            const markup = this._generateMarkup()
            this._clear()
            this._parentElement.insertAdjacentHTML('afterbegin', markup)
        }

        update(data) {
            if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError()
            this._data = data
            const newMarkup = this._generateMarkup()

            const newDOM = document.createRange().createContextualFragment(newMarkup)
            const newElements = Array.from(newDOM.querySelectorAll("*")) 
            const curElements = Array.from(this._parentElement.querySelectorAll("*"))
            console.log(curElements)
            console.log(newElements)
        }

        _clear() {
            this._parentElement.innerHTML = '' 
        }

        renderSpinner() { 
            const markup = `
                <div class="spinner">
                    <svg><use href="${icons}_icon-loader"></use></svg>
                </div>
            `

            this._clear()
            this._parentElement.insertAdjacentHTML('afterbegin', markup)
        }

        renderError(message = this._errorMessage) {
            const markup = `
                <div class="error">
                    <div>
                        <svg><use href="${icons}_icon-alert-triangle"></use></svg>
                    </div>
                    <p>${message}</p>
                </div> 
            `

            this._clear()
            this._parentElement.insertAdjacentHTML('afterbegin', markup)
        }

        renderMessage(message = this._message) {
            const markup = `
                <div class="message">
                    <div>
                        <svg><use href="${icons}_icon-smile"></use></svg>
                    </div>
                    <p>${message}</p>
                </div> 
            `

            this._clear()
            this._parentElement.insertAdjacentHTML('afterbegin', markup)
        }
    }
    ```
    - output : console.log(curElements) & console.log(newElements)
        - currently servings is `4` & when we click on increase button of servings then will become 5
        - & then inside console tab , if we see curElements <br>
            then inside `span.recipe__info-data.recipe__info-data--people` , innerHTML or innerText will be 4
        - but if see inside `span.recipe__info-data.recipe__info-data--people` of newElements <br>
            then innerHTML or innerText will be 5 because newElements is a new DOM 💡💡💡
    - `STEP 3.1` : inside View.js file , looping over that new DOM
        ```js
        import icons from 'url:../../img/icons.svg' 

        export default class View {
            _data ; 

            render(data) {
                if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError()
                this._data = data
                const markup = this._generateMarkup()
                this._clear()
                this._parentElement.insertAdjacentHTML('afterbegin', markup)
            }

            update(data) {
                if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError()
                this._data = data
                const newMarkup = this._generateMarkup()

                const newDOM = document.createRange().createContextualFragment(newMarkup)
                const newElements = Array.from(newDOM.querySelectorAll("*")) 
                const curElements = Array.from(this._parentElement.querySelectorAll("*"))

                newElements.forEach((newEl, i) => {
                    const curEl = curElements[i]
                    console.log(curEl , newEl.isEqualNode(curEl))
                        // about isEqualNode() method ✅ :
                            // used to check whether two Nodes are equal or not 
                })
            }

            _clear() {
                this._parentElement.innerHTML = '' 
            }

            renderSpinner() { 
                const markup = `
                    <div class="spinner">
                        <svg><use href="${icons}_icon-loader"></use></svg>
                    </div>
                `

                this._clear()
                this._parentElement.insertAdjacentHTML('afterbegin', markup)
            }

            renderError(message = this._errorMessage) {
                const markup = `
                    <div class="error">
                        <div>
                            <svg><use href="${icons}_icon-alert-triangle"></use></svg>
                        </div>
                        <p>${message}</p>
                    </div> 
                `

                this._clear()
                this._parentElement.insertAdjacentHTML('afterbegin', markup)
            }

            renderMessage(message = this._message) {
                const markup = `
                    <div class="message">
                        <div>
                            <svg><use href="${icons}_icon-smile"></use></svg>
                        </div>
                        <p>${message}</p>
                    </div> 
                `

                this._clear()
                this._parentElement.insertAdjacentHTML('afterbegin', markup)
            }
        }
        ```
        - output : 


✔️✔️✔️
💡💡💡
✅
🔥

