# Uploading a New Recipe - Part 3

- we'll implement the functionality of uploading or recipes
- `problem need to fix` : there're two things are missing from our controller 
    - click on `add recipe` button 
    - then on title input field , write `TEST AVOCADO`
    - now the movement we click on `upload` button then URL will not change based on that recipe id
    - & we need to remove success message popup
    - & inside bookmarks view panel , `TEST AVOCADO` recipe didn't added <br>
        but it's bookmark button , it's bookmarked but we didn't see inside bookmarks view panel
    - so we need to fix 2 things
        - `1st problem` : we need to re-render the bookmarks view
        - `2nd problem` : we need to change the ID in the URL 
            - because even if we reload the page then still that URL with same ID will not change <br>
                & on UI that old recipe will came back

## Steps - uploading a new recipe - Part 3

- `STEP 1` : inside controller.js file , uncomment the addRecipeView.toggleWindow() function
    - so that success popup will get removed after some minute
    ```js
    import * as model from './model.js' 
    import { MODAL_CLOSE_SEC } from './config.js'
    import recipeView from './views/recipeView.js'
    import searchView from './views/searchView.js'
    import resultsView from './views/resultsView.js'
    import paginationView from './views/paginationView.js'
    import bookmarksView from './views/bookmarksView.js'
    import addRecipeView from './views/addRecipeView.js'

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

            // 1 - updating bookmarks view
            bookmarksView.update(model.state.bookmarks) 

            // 2 - Loading recipe
            await model.loadRecipe(id) 

            // 3 - Rendering recipe
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
        // 1) Add/remove bookmark
        if (!model.state.recipe.bookmarked) {
            model.addBookmark(model.state.recipe)
        } else (model.state.recipe.bookmarked) {
            model.deleteBookmark(model.state.recipe.id)
        }

        // 2) Update recipe view
        recipeView.update(model.state.recipe)

        // 3) Render bookmarks
        bookmarksView.render(model.state.bookmarks)
    }

    const controlBookmarks = function() {
        bookmarksView.render(model.state.bookmarks)
    }
            
    const controlAddRecipe = async function(newRecipe) {
        try {
            // show loading spinner
            addRecipeView.renderSpinner()

            // Upload the new recipe data
            await model.uploadRecipe(newRecipe)
            console.log(model.state.recipe)

            // Render recipe
            recipeView.render(model.state.recipe)

            // Success message
            addRecipeView.renderMessage()

            // render bookmark view
            bookmarksView.render(model.state.bookmarks)
                // here we're not using update() function because we really want to insert a new element

            // close form window
            setTimeout(function() {
                addRecipeView.toggleWindow()
            }, MODAL_CLOSE_SEC * 1000) 

        } catch(err) {
            console.error(err)
            addRecipeView.renderError(err.message)
        }
    }

    const init = function() {
        bookmarksView.addHandlerRender(controlBookmarks)
        recipeView.addHandlerRender(controlRecipes)
        recipeView.addHandlerUpdateServings(controlServings)
        recipeView.addHandlerAddBookmark(controlAddBookmark)
        searchView.addHandlerSearch(controlSearchResults)
        paginationView.addHandlerClick(controlPagination)
        addRecipeView.addHandlerUpload(controlAddRecipe) 
    }
    init()
    ```
    - now we need to change the ID inside the URL 


✔️✔️✔️
💡💡💡
✅
🔥


