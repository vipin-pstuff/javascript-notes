# Implementing Pagination - Part 1

- showing all the results on the left side is not user friendly
- controlSearchResults() async function is responsible for rendering all the search results <br>
    however we only want to render 10 results & not all of the results <br>
    & then if we're on page 1 then render the second 10 results (means result from 11 to 20)
- so let's create a function in our model which will take in the page that we want to render <br>
    & which will then only return the results that we actually want to render for that page

## Steps - Implementing Pagination : Part 1

- `STEP 1` : inside model.js
    ```js
    import { async } from 'regenerator-runtime' ;
    import { API_URL } from '.config.js'
    import { getJSON } from './helpers.js'
            
    export const state = {
        recipe: {} , 
        search: {
            query: "" ,
            result: []
        }
    }

    export const loadRecipe = async function(id) {  
        try {
            const data = await getJSON(`${API_URL}${id}`)

            const { recipe } = data.data 
            state.recipe = { 
                id:  recipe.id , 
                title: recipe.title, 
                publisher: recipe.publisher,
                sourceUrl: recipe.source_url ,
                image: recipe.image_url, 
                servings: recipe.servings, 
                cookingTime: recipe.cooking_time ,
                ingredients: recipe.ingredients
            }

            console.log(state.recipe) 
        } catch(err) {
            console.log(`${err} 💥💥💥`)
            throw err 
        }
    }

    export const loadSearchResults = async function() {
        try {
            state.search.query = query                
            const data = await getJSON(`${API_URL}?search=${query}`)

            state.search.results = data.data.recipes.map(rec => {
                return {
                    id:  rec.id , 
                    title: rec.title, 
                    publisher: rec.publisher,
                    image: rec.image_url, 
                }
            })

        } catch(err) {
            console.log(`${err} 💥💥💥`)
            throw err 
        }
    }

    // loadSearchResults('pizza') 

    export const getSearchResultsPage = function(page) {
        // this function is not going to be a async function
            // because we already have the search results loaded when we call this function
        // page -> parameter means reach into the state & then get the data for the page that's being requested

        // from this function we'll return a part of the results

        return state.search.results.slice(0 , 9) // returning stuff from 1 to 10
            // here results -> is an array inside state -> object
    }
    ```

- `STEP 2` : inside model.js file , inside getSearchResultsPage() function , creating start & end pages
    ```js
    // loadSearchResults('pizza') 

    // put code from STEP 1 before this 

    export const getSearchResultsPage = function(page) {
        const start = 0 
        const end = 9 

        return state.search.results.slice(start, end)
    }
    // now we don't want to hard code these values of start & end
        // so we want to calculate them dynamically 💡💡💡
    ```
    - `STEP 2.1` : inside model.js file , inside getSearchResultsPage() function
        - calculating the start & end values dynamically
        ```js
        // put code from STEP 1 before this 

        export const getSearchResultsPage = function(page) {
            const start = (page - 1) * 10 
                // here 10 is the number of results that we want on the page ✔️✔️✔️
            const end = page * 10

            return state.search.results.slice(start, end)
        }
        // let's say we requested page 1 then 1 - 1 = 0 & 0 * 10 = 0
            // & 1 * 10 = 10 , here slice() method won't give the 10 , it'll give 9
        ```
        - so this is not the important data about our application , so it'll go inside `state` object

- `STEP 3` : inside model.js file , now let's refactor the code of getSearchResultsPage() function
    ```js
    import { async } from 'regenerator-runtime' ;
    import { API_URL } from '.config.js'
    import { getJSON } from './helpers.js'
            
    export const state = {
        recipe: {} , 
        search: {
            query: "" ,
            result: [] , 
            resultsPerPage: 10
        }
    }

    export const loadRecipe = async function(id) {  
        try {
            const data = await getJSON(`${API_URL}${id}`)

            const { recipe } = data.data 
            state.recipe = { 
                id:  recipe.id , 
                title: recipe.title, 
                publisher: recipe.publisher,
                sourceUrl: recipe.source_url ,
                image: recipe.image_url, 
                servings: recipe.servings, 
                cookingTime: recipe.cooking_time ,
                ingredients: recipe.ingredients
            }

            console.log(state.recipe) 
        } catch(err) {
            console.log(`${err} 💥💥💥`)
            throw err 
        }
    }

    export const loadSearchResults = async function() {
        try {
            state.search.query = query                
            const data = await getJSON(`${API_URL}?search=${query}`)

            state.search.results = data.data.recipes.map(rec => {
                return {
                    id:  rec.id , 
                    title: rec.title, 
                    publisher: rec.publisher,
                    image: rec.image_url, 
                }
            })

        } catch(err) {
            console.log(`${err} 💥💥💥`)
            throw err 
        }
    }

    export const getSearchResultsPage = function(page) {
        const start = (page - 1) * state.search.resultsPerPage 
        const end = page * state.search.resultsPerPage

        return state.search.results.slice(start, end)
    }    
    ```
    - now we can do even better because this `resultsPerPage: 10` looks kind-of like a magic number
    - `STEP 3.1` : inside config.js file , creating results per page
        ```js
        export const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/'; 
        export const TIMEOUT_SEC = 10;
        export const RES_PER_PAGE = 10
        ```
        - inside model.js file , importing res per page from config.js file
            ```js
            import { async } from 'regenerator-runtime' ;
            import { API_URL , RES_PER_PAGE} from '.config.js'
            import { getJSON } from './helpers.js'
                    
            export const state = {
                recipe: {} , 
                search: {
                    query: "" ,
                    result: [] , 
                    resultsPerPage: RES_PER_PAGE, 

                }
            }

            export const loadRecipe = async function(id) {  
                try {
                    const data = await getJSON(`${API_URL}${id}`)

                    const { recipe } = data.data 
                    state.recipe = { 
                        id:  recipe.id , 
                        title: recipe.title, 
                        publisher: recipe.publisher,
                        sourceUrl: recipe.source_url ,
                        image: recipe.image_url, 
                        servings: recipe.servings, 
                        cookingTime: recipe.cooking_time ,
                        ingredients: recipe.ingredients
                    }

                    console.log(state.recipe) 
                } catch(err) {
                    console.log(`${err} 💥💥💥`)
                    throw err 
                }
            }

            export const loadSearchResults = async function() {
                try {
                    state.search.query = query                
                    const data = await getJSON(`${API_URL}?search=${query}`)

                    state.search.results = data.data.recipes.map(rec => {
                        return {
                            id:  rec.id , 
                            title: rec.title, 
                            publisher: rec.publisher,
                            image: rec.image_url, 
                        }
                    })

                } catch(err) {
                    console.log(`${err} 💥💥💥`)
                    throw err 
                }
            }

            export const getSearchResultsPage = function(page) {
                const start = (page - 1) * state.search.resultsPerPage 
                const end = page * state.search.resultsPerPage
                return state.search.results.slice(start, end)
            }   
            ```
        - inside controller.js file , let's show only some results instead of showing all
            ```js
            import * as model from './model.js' 
            import recipeView from './views/recipeView.js'
            import searchView from './views/searchView.js'
            import resultsView from './views/resultsView.js'

            import 'core-js/stable' 
            import 'regenerator-runtime/runtime' 

            // hot module reload of parcel
            if (module.hot) {
                module.hot.accept()
            }

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
            - output : resultsView.render(model.getSearchResultsPage(1))
                - if we you still get the all the results then stop the parcel then re-run it <br> 
                    then we'll get the 10 results
                - now if you pass page 2 `resultsView.render(model.getSearchResultsPage(2))` <br>
                    & if you search pizza then hit ENTER then if you didn't get the result <br>
                    then remove the hot module reload code of parcel from controller.js file 
                - so we'll get the output when we search pizza & hit ENTER key
            - now we need to know at which page we actually are 

- `STEP 4` : inside model.js file , setting the page number dynamically inside getSearchResultsPage() function
    ```js
    import { async } from 'regenerator-runtime' ;
    import { API_URL , RES_PER_PAGE} from '.config.js'
    import { getJSON } from './helpers.js'
            
    export const state = {
        recipe: {} , 
        search: {
            query: "" ,
            result: [] , 
            page: 1 , // by-default page number will be 1
            resultsPerPage: RES_PER_PAGE, 
        }
    }

    export const loadRecipe = async function(id) {  
        try {
            const data = await getJSON(`${API_URL}${id}`)

            const { recipe } = data.data 
            state.recipe = { 
                id:  recipe.id , 
                title: recipe.title, 
                publisher: recipe.publisher,
                sourceUrl: recipe.source_url ,
                image: recipe.image_url, 
                servings: recipe.servings, 
                cookingTime: recipe.cooking_time ,
                ingredients: recipe.ingredients
            }

            console.log(state.recipe) 
        } catch(err) {
            console.log(`${err} 💥💥💥`)
            throw err 
        }
    }

    export const loadSearchResults = async function() {
        try {
            state.search.query = query                
            const data = await getJSON(`${API_URL}?search=${query}`)

            state.search.results = data.data.recipes.map(rec => {
                return {
                    id:  rec.id , 
                    title: rec.title, 
                    publisher: rec.publisher,
                    image: rec.image_url, 
                }
            })

        } catch(err) {
            console.log(`${err} 💥💥💥`)
            throw err 
        }
    }

    export const getSearchResultsPage = function(page = state.search.page) { // passing default argument
        state.search.page = page

        const start = (page - 1) * state.search.resultsPerPage 
        const end = page * state.search.resultsPerPage
        return state.search.results.slice(start, end)
    }   
    ```
    - output : when we search for pasta then we'll get the 10 results
