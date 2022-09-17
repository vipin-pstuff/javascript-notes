# Implementing Pagination - Part 2

- here we'll render the pagination button 

## different scenario of showing pagination button

- `1 scenario` : if have less than 10 results then don't show any pagination button
- `2 scenario` : when we're on first page then show only the `Page 2` pagination button & no button to go back
- `3 scenario` : if we're on second page then we need to show two buttons , on left side for back & on right side for forward
- `4 scenario` : if we go to the last page then only show a button on left side to go back , not for forward

## Steps - Implementing pagination : Part 2

- let's create a new view for the pagination
- `STEP 1` : inside `js/view` folder , create a file as paginationView.js
    - inside resultsView.js file , copy these lines of code 
        ```js
        import View from './View.js'
        import icons from 'url:../../img/icons.svg' 

        class ResultsView extends View {
            _parentElement = document.querySelector('.results')
        }
        ```
    - inside paginationView.js file , paste those lines of code
        ```js
        import View from './View.js'
        import icons from 'url:../../img/icons.svg' 

        class ResultsView extends View {
            _parentElement = document.querySelector('.results')
        }
        ```
    - inside paginationView.js file , do the changes in the code 
        ```js
        import View from './View.js'
        import icons from 'url:../../img/icons.svg' 

        class PaginationView extends View {
            _parentElement = document.querySelector('.pagination')

            _generateMarkup() {
                // we define same name because because every view that renders something on UI , 
                    // needs a generate markup method

                // now here inside this function , we'll write those scenarios
                
            }
        }
        ```

- `STEP 2` : inside paginationView.js 
    ```js
    import View from './View.js'
    import icons from 'url:../../img/icons.svg' 

    class PaginationView extends View {
        _parentElement = document.querySelector('.pagination')

        _generateMarkup() {
            // Page 1 & there are other pages

            // Page 1 & there are NO other pages

            // last page

            // other page
            
        }
    }

    export default new PaginationView() 
    ```
    - so if we're on Page 1 & there are other pages , then we need that `search` object of `state` object of model.js file <br>
        so we need results , page , resultPerPage -> these data (which are inside `search` object) <br>
        in order to compute which buttons should be displayed
    - so now come inside controller.js file & call the render() function , so that we can parse in the data that we need <br>
        & we want to display the pagination when we're displaying the search results 💡💡💡
    - `STEP 2.1` : inside controller.js file , importing PaginationView class from View.js file 
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
                // resultsView.render(model.state.search.results)
                resultsView.render(model.getSearchResultsPage(1)) // & we pass 1 which means starts from page 1

                // 4) render initial pagination buttons
                paginationView.render(model.state.search)

            } catch(err) {
                console.log(err)
            }
        }

        controlSearchResults()

        const init = function() {
            recipeView.addHandlerRender(controlRecipes)
            searchView.addHandlerSearch(controlSearchResults)
        }
        init()
        ```
    - now in order to know if we're on page 1 & there are other pages , we need to know how many pages there are <br>
        so let's compute it also inside paginationView.js file
    - `STEP 2.2` : inside paginationView.js file , computing how many pages are there
        ```js
        import View from './View.js'
        import icons from 'url:../../img/icons.svg' 

        class PaginationView extends View {
            _parentElement = document.querySelector('.pagination')

            _generateMarkup() {
                const numPages = this._data.results / this._data.resultsPerPage
                    // for Eg : we have total 60 results & 10 results for per page 
                        // if we divide 60 / 10 = 6 pages ✔️✔️✔️
                console.log(numPages)

                // Page 1 & there are other pages

                // Page 1 & there are NO other pages

                // last page

                // other page
                
            }
        }

        export default new PaginationView() 
        ```
        - output : when we search pizza & then hit ENTER key the inside the console tab , we'll get NaN
            - & on the UI , inside the pagination section , we'll get undefined <br>
                because if we don't return anything from that thing then by-default undefined is returned   
        - & we need length of the array , not just array like this `this._data.results.length / this._data.resultsPerPage`
    - `STEP 2.3` : inside paginationView.js file , computing number of pages
        ```js
        import View from './View.js'
        import icons from 'url:../../img/icons.svg' 

        class PaginationView extends View {
            _parentElement = document.querySelector('.pagination')

            _generateMarkup() {
                const numPages = this._data.results.length / this._data.resultsPerPage
                    // for Eg : we have total 60 results & 10 results for per page 
                        // if we divide 60 / 10 = 6 pages ✔️✔️✔️
                console.log(numPages)

                // Page 1 & there are other pages

                // Page 1 & there are NO other pages

                // last page

                // other page
                
            }
        }

        export default new PaginationView() 
        ```
        - output : when we search for pizza then we'll get 5.9 inside the console tab
            - so we need to round that number by using Math.ceil() , not Math.round() method 💡💡💡
    - `STEP 2.4` : inside paginationView.js file , rounding the number of pages & doing checking
        ```js
        import View from './View.js'
        import icons from 'url:../../img/icons.svg' 

        class PaginationView extends View {
            _parentElement = document.querySelector('.pagination')

            _generateMarkup() {
                const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage)
                console.log(numPages)

                // Page 1 & there are other pages
                if (this._data.page === 1) {
                    // this is important that the current page should exist inside state -> object of model.js file
                    
                }

                // Page 1 & there are NO other pages

                // last page

                // other page
                
            }
        }

        export default new PaginationView() 
        ```
        - `STEP 2.4.1` : inside controller.js file , pass `2` as page 2 inside getSearchResultsPage()
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
                    // resultsView.render(model.state.search.results)
                    resultsView.render(model.getSearchResultsPage(2)) 
                        // & we pass 2 which means starts from page 2 for testing

                    // 4) render initial pagination buttons
                    paginationView.render(model.state.search)

                } catch(err) {
                    console.log(err)
                }
            }

            controlSearchResults()

            const init = function() {
                recipeView.addHandlerRender(controlRecipes)
                searchView.addHandlerSearch(controlSearchResults)
            }
            init()
            ```
        - `STEP 2.4.2` : inside paginationView.js file , we're testing this._data.page === 1
            ```js
            import View from './View.js'
            import icons from 'url:../../img/icons.svg' 

            class PaginationView extends View {
                _parentElement = document.querySelector('.pagination')

                _generateMarkup() {
                    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage)
                    console.log(numPages)

                    // Page 1 & there are other pages
                    if (this._data.page === 1 && numPages > 1) {
                        // & current page needs to be less than the number of pages
                        // means number of pages is greater than 1 💡💡💡
                        return 'Page 1, others' 
                    }

                    // last page
                    if (this._data.page === numPages && numPages > 1) {
                        // if current page gets equal-to number of pages then means we're on last page
                        // here we putted the numPages > 1 because if we do this only this._data.page === numPages
                            // then what if we have total 1 page then this condition gets true
                            // that's why we use this._data.page === numPages && numPages > 1
                            // then we'll really on the last page & to render some other buttons 💡💡💡

                        return 'last page'
                    }

                    // other page
                    if (this._data.page < numPages) {
                        return "Other page"
                    }

                    // Page 1 & there are NO other pages
                    return "Only 1 page"
                }
            }

            export default new PaginationView() 
            ```
            - output : now search pizza & hit Enter key , then we'll get Other page when we pass `2` as second page
                - inside controller.js file , pass 6 as a argument inside `resultsView.render(model.getSearchResultsPage(6))` <br> 
                    now search pizza & hit Enter key , we can see `last page` as a output inside pagination section
                - inside controller.js file , pass 1 as a argument inside `resultsView.render(model.getSearchResultsPage(1))` <br>
                    now search pizza & hit Enter key , we can see `page 1, others` as a output inside pagination section
            - now we need to create html markup

- `STEP 3` : inside paginationView.js file , creating html markup for those scenarios
    ```js
    import View from './View.js'
    import icons from 'url:../../img/icons.svg' 

    class PaginationView extends View {
        _parentElement = document.querySelector('.pagination')

        _generateMarkup() {
            const curPage = this._data.page
            const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage)
            console.log(numPages)

            // Page 1 & there are other pages
            if (curPage === 1 && numPages > 1) {
                return `
                    <button class="btn--inline pagination__btn--next">
                        <span>Page ${curPage + 1}</span>
                        <svg class="search__icon"><use href="${icons}#icon-arrow-right"></use></svg>
                    </button>
                ` 
            }

            // last page
            if (curPage === numPages && numPages > 1) {
                return `
                    <button class="btn--inline pagination__btn--prev">
                        <svg class="search__icon"><use href="${icons}#icon-arrow-left"></use></svg>
                        <span>Page ${curPage - 1}</span>
                    </button>
                `
            }

            // other page
            if (curPage < numPages) {
                return `
                    <button class="btn--inline pagination__btn--prev">
                        <svg class="search__icon"><use href="${icons}#icon-arrow-left"></use></svg>
                        <span>Page ${curPage - 1}</span>
                    </button>
                    <button class="btn--inline pagination__btn--next">
                        <span>Page ${curPage + 1}</span>
                        <svg class="search__icon"><use href="${icons}#icon-arrow-right"></use></svg>
                    </button>
                ` 
            }

            // Page 1 & there are NO other pages
            return "" 
                // if we're on Page 1 then return nothing 
        }
    }

    export default new PaginationView() 
    ```
    - output : inside controller.js file , 
        - `1 scenario` : we already pass `1` as argument i.e `resultsView.render(model.getSearchResultsPage(1))` <br> 
            - which means we'll get the page 2 
            - so inside search pizza then hit ENTER then we'll get `Page 2` button inside pagination section
        - `2 scenario` : now if we pass 4 as a argument like this `resultsView.render(model.getSearchResultsPage(4))` 
            - now search pizza then we'll get `<- Page 3` & `Page 5 ->` inside pagination section 
            - so passing 4 as a argument there means we're right now on page 4
        - `3 scenario` :  
            - now pass 6 as a argument like this `resultsView.render(model.getSearchResultsPage(6))` 
            - now search pizza then we'll get `<- Page 5` button & no forward button we'll get 
    - now inside paginationView.js file , things html markup is getting repeated , so let's refactor it <br>
        & we'll not do refactoring here inside this file & try to do it by yourself as a challenge 💡💡💡 <br>
        Eg : you might create a method called like generate markup button & then refactor that code in that method

- `STEP 4` : now we need to add the click event on those buttons of pagination
    - so for that , we're gonna use PUBLISHER SUBSCRIBER pattern 💡💡💡 <br>
    - inside paginationView.js file , creating a function which is going to be a PUBLISHER
        ```js
        import View from './View.js'
        import icons from 'url:../../img/icons.svg' 

        class PaginationView extends View {
            _parentElement = document.querySelector('.pagination')

            addHandlerClick(handler) {
                // here we're going to use event delegation concept
                    // because there are going to be two buttons 
                    // & we don't want to listen to each of them individually 
                // so we'll add the event listener to the common parent element 💡💡💡
                this._parentElement.addEventListener('click' , function(e) {

                    

                })
            }

            _generateMarkup() {
                const curPage = this._data.page
                const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage)
                console.log(numPages)

                // Page 1 & there are other pages
                if (curPage === 1 && numPages > 1) {
                    return `
                        <button class="btn--inline pagination__btn--next">
                            <span>Page ${curPage + 1}</span>
                            <svg class="search__icon"><use href="${icons}#icon-arrow-right"></use></svg>
                        </button>
                    ` 
                }

                // last page
                if (curPage === numPages && numPages > 1) {
                    return `
                        <button class="btn--inline pagination__btn--prev">
                            <svg class="search__icon"><use href="${icons}#icon-arrow-left"></use></svg>
                            <span>Page ${curPage - 1}</span>
                        </button>
                    `
                }

                // other page
                if (curPage < numPages) {
                    return `
                        <button class="btn--inline pagination__btn--prev">
                            <svg class="search__icon"><use href="${icons}#icon-arrow-left"></use></svg>
                            <span>Page ${curPage - 1}</span>
                        </button>
                        <button class="btn--inline pagination__btn--next">
                            <span>Page ${curPage + 1}</span>
                            <svg class="search__icon"><use href="${icons}#icon-arrow-right"></use></svg>
                        </button>
                    ` 
                }

                // Page 1 & there are NO other pages
                return "" 
            }
        }

        export default new PaginationView() 
        ```







✔️✔️✔️
💡💡💡
✅
🔥

