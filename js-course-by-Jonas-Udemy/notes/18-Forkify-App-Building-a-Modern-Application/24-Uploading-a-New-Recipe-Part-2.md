# Uploading a New Recipe - Part 2

- we'll implement a feature for sending the recipe data to the forkify API

## Steps - Uploading a New Recipe - Part 2

- `STEP 1` : inside model.js file , create a new function & export it
    ```js
    import { async } from 'regenerator-runtime' ;
    import { API_URL , RES_PER_PAGE } from '.config.js'
    import { getJSON } from './helpers.js'
            
    export const state = {
        recipe: {} , 
        search: {
            query: "" ,
            result: [] , 
            page: 1 , 
            resultsPerPage: RES_PER_PAGE, 
        } ,
        bookmarks: [] 
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

            if (state.bookmarks.some(bookmark => bookmark.id === id)) {
                state.recipe.bookmarked = true
            } else {
                state.recipe.bookmarked = false
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

            state.search.page = 1 
        } catch(err) {
            console.log(`${err} 💥💥💥`)
            throw err 
        }
    }

    export const getSearchResultsPage = function(page = state.search.page) { 
        state.search.page = page

        const start = (page - 1) * state.search.resultsPerPage 
        const end = page * state.search.resultsPerPage
        return state.search.results.slice(start, end)
    }   

    const persistBookmarks = function() {
        localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks))
    }

    export const addBookmark = function(recipe) {
        // add bookmark
        state.bookmarks.push(recipe)

        // Mark Current recipe as bookmarked
        if (recipe.id === state.recipe.id) {
            state.recipe.bookmarked = true
        }

        persistBookmarks()
    }

    export const deleteBookmark = function(id) {
        // Delete bookmark
        const index = state.bookmarks.findIndex(el => el.id === id)
        state.bookmarks.splice(index, 1)

        // Mark Current recipe as NOT bookmarked
        if (id === state.recipe.id) {
            state.recipe.bookmarked = false
        }

        persistBookmarks()
    }

    const init = function() {
        const storage = localStorage.getItem("bookmarks")
        if (storage) state.bookmarks = JSON.parse(storage)
    }
    init()

    const clearBookmarks = function() {
        localStorage.clear('bookmarks')
    }
    // clearBookmarks()

    export const uploadRecipe = async function(newRecipe) {

    }
    ```
    - now 1st task of this uploadRecipe function is to take the raw input data <br>
        & transform it into the same format as the data that we also get out of the API
    - output : click on `add Recipe` button then click on `upload` button , now see the console tab
        - the data that we'll get from the API is like this
            ![getting data from API](../notes-pics/18-module/24-lecture/lecture-24-0.jpg)
            - here `ingredients` property are nicely stored inside an array like this
            ![ingredients array](../notes-pics/18-module/24-lecture/lecture-24-1.jpg)
        - but the data which we got from model popup form , we have ingredients like in this form
            ![ingredients data got from model popup form](../notes-pics/18-module/24-lecture/lecture-24-2.jpg)
            - & here value each of these ingredients , are separated by the comma inside a string
            - so we want all ingredients in an array & value of each ingredients as quantity , unit & description
        - now inside the modal popup form , we can see that 
            ![inputs of model popup form](../notes-pics/18-module/24-lecture/lecture-24-3.jpg)
            - so here we created 3 different fields for each ingredient
            - so one input field for quantity , the unit & description for 1st ingredient <br>
                & for 2nd ingredient , we leave the unit by comma because don't have & same with others
    - `STEP 1.1` : inside model.js file , creating an array of ingredients
        ```js
        // put code from STEP 1 before this code 

        export const uploadRecipe = async function(newRecipe) {
            
        }
        ```



✔️✔️✔️
💡💡💡
✅
🔥
