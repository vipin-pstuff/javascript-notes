# Implementing Search Results - Part 1

- now we'll implement the search results based on search 
- inside the flow chart of forkify flowchart part 1
    - `1` : handling the event of a user searching for recipes
    - `2` : then loading the search results 
    - `3` : & rendering them
    - so in this lecture , we'll do these 3 & then & further stuff we'll do in PART 2

- so we'll focus on these 3 points & for this , 
    - we need to implement the `model` , the `view` & the `controller` that binds everything together
    - & usually , Jonas find easiest way to start with the data i.e the `model` <br>
        so in this case is to start to make some API calls in order to load some search results ✔️✔️✔️ <br>
        & once we have this part working , then we can render them on the screen & also do the actual event

## Steps - Implementing Search Results : PART 1

- `STEP 1` : inside model.js file 
    ```js
    import { async } from 'regenerator-runtime' ;
    import { API_URL } from '.config.js'
    import { getJSON } from './helpers.js'
            
    export const state = {
        recipe: {}
    }

    export const loadRecipe = async function(id) {  
        try {

            const data = await getJSON(`${API_URL}/${id}`)

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

    // again this function will be called by the controller
        // means controller who will tell this function what it would actually search for
        // so basically , it will pass in a query like string
        // & then pluck/pull/take into our API call 💡💡💡
    export const loadSearchResults = async function() {
        try {

        } catch(err) {
            console.log(`${err} 💥💥💥`)
            throw err 
            // here we're doing same thing as before in 11 lecture - 18 module
                // means throwing the error again so that eventually , we'll be able to use it in the controller 💡💡💡
        }
    }
    ```
    - now to implement further functionality , go to documentation page of the API to get all recipes <br>
        so we need to make a get request on this path `https://forkify-api.herokuapp.com/api/search` <br>
        & then with the `search` parameter 
    - & the way we add a parameter <br>
        like this `https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>` 
        - so we search for the parameter by putting question mark `?` <br>
            & then `search=` & then search query i.e `pizza` like this `search="pizza"` 💡💡💡
        - but it depends on the creator of API like jonas change the API url to get the data <br>
            which is now like this `https://forkify-api.herokuapp.com/api/search?q=pizza` , <br>
            so here `q` means search query 💡💡💡

- `STEP 2` : let request on that API URL for search query
    ```js
    import { async } from 'regenerator-runtime' ;
    import { API_URL } from '.config.js'
    import { getJSON } from './helpers.js'
            
    export const state = {
        recipe: {}
    }

    export const loadRecipe = async function(id) {  
        try {

            const data = await getJSON(`${API_URL}/${id}`)

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
            // again we'll use getJSON() function to fetch the data & convert the data into JSON
                // & create an error if something went wrong
            const data = await getJSON(`https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza`)


        } catch(err) {
            console.log(`${err} 💥💥💥`)
            throw err 
        }
    }
    ```
    - `STEP 2.1` : now refactor the code i.e change the API URL of getting the recipes
        ```js
        // put code from STEP 2 before this code 

        export const loadSearchResults = async function() {
            try {
                const data = await getJSON(`${API_URL}/recipes?search=pizza`)


            } catch(err) {
                console.log(`${err} 💥💥💥`)
                throw err 
            }
        }
        ```
        - inside config.js file , change the API URL
            ```js
            export const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/'; 
                                    // here we putted the slash after recipes 
                                    // because usually a URL ends with a slash 💡💡💡

            export const TIMEOUT_SEC = 10;
            ```
        - now inside model.js file , change the API URL also
            ```js
            import { async } from 'regenerator-runtime' ;
            import { API_URL } from '.config.js'
            import { getJSON } from './helpers.js'
                    
            export const state = {
                recipe: {}
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
                    const data = await getJSON(`${API_URL}?search=${query}`)
                    console.log(data) // for checking 
                } catch(err) {
                    console.log(`${err} 💥💥💥`)
                    throw err 
                }
            }

            loadSearchResults('pizza') 
                // now without the any controller & the any view
                // we can call the loadSearchResults() async function inside the model.js file itself

                // output : {status:"status", results: 59, data: {...}}
                    // so we're getting the correct output 
                    // & inside this object , we have data -> property , which contain our actual data
                        // but the actual data doesn't contain the unnecessary data like ingredients , etc 
            ```

- `STEP 3` : inside model.js file , now let's work on the data which we got 
    ```js
    import { async } from 'regenerator-runtime' ;
    import { API_URL } from '.config.js'
    import { getJSON } from './helpers.js'
            
    export const state = {
        recipe: {}
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
            const data = await getJSON(`${API_URL}?search=${query}`)
            console.log(data) // for checking 

            // data.data.recipes contain the array of all the objects
                // & now we want to create a new array which contains the new objects
                    // where the property names are different 
                // that's why we're using map() array method
            data.data.recipes.map(rec => {
                return {
                    id:  rec.id , 
                    title: rec.title, 
                    publisher: rec.publisher,
                    image: rec.image_url, 
                }
            })
            // this data which we're returning , we'll store inside our state -> object
                // which is going to contain all the data that we need in order to build our application ✔️✔️✔️

        } catch(err) {
            console.log(`${err} 💥💥💥`)
            throw err 
        }
    }

    loadSearchResults('pizza') 
    ```
    - `STEP 3.1` : inside model.js file , storing the data inside which we're returning 
        ```js
        import { async } from 'regenerator-runtime' ;
        import { API_URL } from '.config.js'
        import { getJSON } from './helpers.js'
                
        export const state = {
            recipe: {} , 
            search: {
                // this search object also include the search query itself 💡💡💡
                    // but right now , we don't need query -> property but in future we need it 
                    // & also for maybe if you want add some analytics in the future 
                        // to know which queries are made the most

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
                console.log(data) // for checking 

                // data.data.recipes contain the array of all the objects
                    // & now we want to create a new array which contains the new objects
                        // where the property names are different 
                    // that's why we're using map() array method
                state.search.results = data.data.recipes.map(rec => {
                    return {
                        id:  rec.id , 
                        title: rec.title, 
                        publisher: rec.publisher,
                        image: rec.image_url, 
                    }
                })
                // this data which we're returning , we'll store inside our state -> object
                    // which is going to contain all the data that we need in order to build our application ✔️✔️✔️

                console.log(state.search.results) // output : we'll get all 59 objects inside an array
            } catch(err) {
                console.log(`${err} 💥💥💥`)
                throw err 
            }
        }

        loadSearchResults('pizza') 
        ```
        - now remove this `loadSearchResults('pizza')` from model.js file because we want to call it inside a controller.js file 

- `STEP 4` : inside controller.js file , calling loadSearchResults() function
    ```js
    import * as model from './model.js' 
    import recipeView from './views/recipeView.js'

    import 'core-js/stable' 
    import 'regenerator-runtime/runtime' 

    const recipeContainer = document.querySelector('.recipe')

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
            console.log(id)

            if (!id) return 
            recipeView.renderSpinner()

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
            await model.loadSearchResults('pizza') 
            // here are not storing the result inside any variable of it because it doesn't return anything
            // it only doing one thing i.e manipulate the state 

            console.log(model.state.search.results) // here we'll still get access of the results 
                // but here we can see it come a chain but doesn't matter right now 
                // output : we'll get those 59 objects of each recipe inside an array


        } catch(err) {
            console.log(err)
        }
    }

    controlSearchResults()

    const init = function() {
        recipeView.addHandlerRender(controlRecipes)
    }

    init()
    ```
    - now instead of searching for only pizza , let's get the query from that input field <br>
        & then starts the whole loading the search results only when the `search` button clicked
    - now let's create a new file inside `view` folder , only for that search part of both input field & the search button <br>
        & then a different view file which will render/display the results on left side of that search <br>
        so it's best to do one for search part & another one for displaying the results 💡💡💡
    - now getting the input data is something related to DOM <br>
        that's why we're putting stuff inside the `view` folder instead inside of controller.js file <br> 
        & this is best practice according to MVC architecture also 💡💡💡

- `STEP 5` : inside `views` folder , create a folder as searchView.js file 
    - inside searchView.js file 
        ```js

        ```


✔️✔️✔️
💡💡💡
✅
🔥