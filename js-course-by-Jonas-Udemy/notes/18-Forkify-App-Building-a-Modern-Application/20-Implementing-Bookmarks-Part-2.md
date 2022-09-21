# Implementing Bookmarks - Part 2

- when we bookmark a recipe then we want to display that recipe inside the bookmarks panel
- current , when we hover on the bookmarks panel then we'll get the message like this
    ![message is coming when bookmarks panel is empty](../notes-pics/18-module/20-lecture/lecture-20-0.jpg)

## Steps - implementing bookmarks - Part 2

- `STEP 1` : inside index.html file , copy this html markup of bookmark which is commented out
    ```html
    <li class="preview">
        <a class="preview__link" href="#23456">
            <figure class="preview__fig">
                <img src="src/img/test-1.jpg" alt="Test" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__name">Pasta with Tomato Cream ...</h4>
                <p class="preview__author">The Pioneer Woman</p>
            </div>
        </a>
    </li>
    ```
    - just like we have `preview` class div for search

- `STEP 2` : inside resultsView.js file , copy all the code
    ```js
    import View from './View.js'
    import icons from 'url:../../img/icons.svg' 

    class ResultsView extends View {
        _parentElement = document.querySelector('.results')
        _errorMessage = 'No recipes found for your query! Please try again :-D'
        _message = ""

        _generateMarkup() {
            console.log(this._data)
            return this._data.map(this._generateMarkupPreview).join("")
        }

        _generateMarkupPreview(result) {
            const id = window.location.hash.slice(1) // getting first element

            return ` 
                <li class="preview">
                    <a class="preview__link ${result.id === id ? 'preview__link--active' : ''}" href="#${result.id}">
                        <figure class="preview__fig">
                            <img src="${result.image}" alt="${result.title}" />
                        </figure>
                        <div class="preview__data">
                            <h4 class="preview__title">${result.title}</h4>
                            <p class="preview__publisher">${result.publisher}</p>
                        </div>
                    </a>
                </li>
            `
        }
    }

    export default new ResultsView() 
    ```
    - `STEP 2.1` : inside `js/views` folder , create a file as bookmarksView.js file
        - inside bookmarksView.js file , paste all the code of resultsView.js file & refactor it
            ```js
            import View from './View.js'
            import icons from 'url:../../img/icons.svg' 

            class BookmarksView extends View {
                _parentElement = document.querySelector('.bookmarks__list')
                _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :-D'
                _message = ""

                _generateMarkup() {
                    console.log(this._data)
                    return this._data.map(this._generateMarkupPreview).join("")
                }

                _generateMarkupPreview(result) {
                    const id = window.location.hash.slice(1) 

                    return ` 
                        <li class="preview">
                            <a class="preview__link ${result.id === id ? 'preview__link--active' : ''}" href="#${result.id}">
                                <figure class="preview__fig">
                                    <img src="${result.image}" alt="${result.title}" />
                                </figure>
                                <div class="preview__data">
                                    <h4 class="preview__title">${result.title}</h4>
                                    <p class="preview__publisher">${result.publisher}</p>
                                </div>
                            </a>
                        </li>
                    `
                }
            }

            export default new BookmarksView() 
            ```
    - `STEP 2.2` : inside controller.js file , importing BookmarksView() class
        ```js
        import * as model from './model.js' 
        import recipeView from './views/recipeView.js'
        import searchView from './views/searchView.js'
        import resultsView from './views/resultsView.js'
        import paginationView from './views/paginationView.js'
        import bookmarksView from './views/bookmarksView.js'

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

                // 0) update results view to mark selected search result
                resultsView.render(model.getSearchResultsPage()) 

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

        const controlAddBookmark = function() {
            if (!model.state.recipe.bookmarked) {
                model.addBookmark(model.state.recipe)
            } else (model.state.recipe.bookmarked) {
                model.deleteBookmark(model.state.recipe.id)
            }

            console.log(model.state.recipe)
            recipeView.update(model.state.recipe)
        }

        const init = function() {
            recipeView.addHandlerRender(controlRecipes)
            recipeView.addHandlerUpdateServings(controlServings)
            recipeView.addHandlerAddBookmark(controlAddBookmark)
            searchView.addHandlerSearch(controlSearchResults)
            paginationView.addHandlerClick(controlPagination)
        }
        init()
        ```
        - now we need to do is whenever a new bookmark is added <br>
            then we want to render the bookmarks view with all the bookmarks



✔️✔️✔️
💡💡💡
✅
🔥


