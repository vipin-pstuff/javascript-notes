# Helpers and Configuration Files

- many real world applications have two special modules which are completely independent of the rest of the architecture <br>
    & these are a module for the project configuration & also a module for some general helper functions 💡💡💡
- let's start with the configuration module & then we'll see helper module 💡💡💡

## Steps - using helpers & configuration files/modules system for a project

- `STEP 1` : inside `src/js` folder create a file as config.js file 
    - & inside config.js file , we'll put all the variables that should be constants <br>
        & should be reused across the project 💡💡💡
    - & the purpose of having this `config.js` file with all these variables <br> 
        is that it'll allow us to easily configure or project by simply changing some of the data <br>
        which is inside this configuration file 
    - & we'll not want to put all the variables in this file , <br>
        the only variables that we want to put inside this configuration file which are responsible <br> 
        for kind-of defining some important data about the application itself 💡💡💡
    - Eg : inside model.js file , that API URL
        - so that API URL , we'll reuse it multiple places across this project
        - like for getting search data & also for uploading a recipe to the server 💡💡💡
        - but imagine , at some place , this API URL needs to change <br>
            like you're in version 3 of this API URL like this `https://forkify-api.herokuapp.com/api/v3/recipes/${id}` <br>
            that's why we don't want to change that everywhere & simple have a variable which contains this API URL <br>
            so that's why we can reuse this API URL & no need to change the URL everywhere manually
        - now you'll think that can we dine a global variable for at API URL inside model.js file  <br>
            but then we would have all these configuration variables spread across multiple modules <br>
            but it's easier to have all of those variables in one central place i.e inside config.js file 💡💡💡
    - `STEP 1.1` : cut the API URL from model.js file & paste it inside config.js file like this
        - inside config.js file 
            ```js
            export const API_URL = "https://forkify-api.herokuapp.com/api/v3/recipes"
            // Best practices ✅ : for defining constant variable
                // here we define name of the variable all in capital letters
                // because the value of this constant variable will never change 
                // & this is the common practice especially in a configuration file 💡💡💡 
            ```
        - inside model.js file , import the API URL
            ```js
            import { async } from 'regenerator-runtime' ;
            import { API_URL } from '.config.js'
                    
            export const state = {
                recipe: {}
            }

            export const loadRecipe = async function(id) {  
                try {
                    const res = await fetch(`${API_URL}/${id}`)
                    const data = res.json()
                    console.log(data)
                    if (!res.ok) throw new Error(`${data.message} (${res.status})`) 
                    let { recipe } = data.data 
                    
                    // this should be state.recipe , not recipe object
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
                    alert(err)
                }
            }
            ```
            - output : everything works fine
                - so we successfully imported the configuration value i.e API_URL from the config.js file 

- `STEP 2` : now inside `src/js/views` folder , create a file as `helpers.js` for some helper functions 💡💡💡
    - & that file usually called as helpers.js for helper functions
    - `purpose of this helpers.js file/module` : 
        - it's used to contain a couple of functions that we reuse over & over in our project 
        - so in this helpers.js module , we can have a central place for all of them 💡💡💡
    - inside helpers.js file
        ```js

        ```


