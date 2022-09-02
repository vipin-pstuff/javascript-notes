# Simple Deployment With Netlify

- before deploying the site on netlify , we need to create the final bundle of our application 
    - so inside package.json file , we have this code 
        ```json
        {
          "name": "forkify",
          "version": "1.0.0",
          "description": "Recipe application",
          "main": "index.html",
          "scripts": {
            "start": "parcel index.html",
            "build": "parcel build index.html"
          },
          "author": "Jonas Schedtmann",
          "license": "ISC",
          "devDependencies": {
            "parcel": "^2.0.0-beta.1",
            "sass": "^1.26.10"
          },
          "dependencies": {
            "core-js": "^3.6.5",
            "fractional": "^1.0.0",
            "regenerator-runtime": "^0.13.7"
          }
        }
        ```
    - up until now , we used `start` command but it only works for development because the final output <br>
        will actually the development server & also the code is not being compressed & dead code is not being eliminated <br>
        while in development 💡💡💡

- `STEP 1` : first open the terminal & if the parcel is still running then stop it by `Ctrl + C`
    - & due to this , our development server will get stop running & parcel will <br>
        not automatically create the build as we save the application

- `STEP 2` : now delete `.parcel-cache` & `dist` folders
    - & due to that , now `build` command not work because in the `build` command <br>
        we actually need to manually specify that we want our output inside the `dist` folder
    - `STEP 2.1` : so if you're using version 2 of parcel then specify these lines inside `build` command
        ```json
        {
          "name": "forkify",
          "version": "1.0.0",
          "description": "Recipe application",
            // `Imp Note ✅` : now we need to change the `main` property into `default` 
                // otherwise that `build` command will not run in parcel version 2
          "main": "index.html",
          "scripts": {
            "start": "parcel index.html",
            "build": "parcel build index.html --dist-dir ./dist"
          },
          "author": "Jonas Schedtmann",
          "license": "ISC",
          "devDependencies": {
            "parcel": "^2.0.0-beta.1",
            "sass": "^1.26.10"
          },
          "dependencies": {
            "core-js": "^3.6.5",
            "fractional": "^1.0.0",
            "regenerator-runtime": "^0.13.7"
          }
        }
        ```
    - `STEP 2.2` changing main into default
        ```json
        {
          "name": "forkify",
          "version": "1.0.0",
          "description": "Recipe application",
          "default": "index.html",
          
          "scripts": {
            "start": "parcel index.html",
            "build": "parcel build index.html --dist-dir ./dist"
          },
          "author": "Jonas Schedtmann",
          "license": "ISC",
          "devDependencies": {
            "parcel": "^2.0.0-beta.1",
            "sass": "^1.26.10"
          },
          "dependencies": {
            "core-js": "^3.6.5",
            "fractional": "^1.0.0",
            "regenerator-runtime": "^0.13.7"
          }
        }
        ```
    - output : we'll  get the `dist` folder in our project & ready to ship it 
    - & to uninstall the package then run the command `npm un parcel`

## about Netlify

- it's just used to deploy static webpages or static web apps
- static means the application only contains HTML , CSS , JS as well as images but no database or no server <br>
    so it's only work with front-end apps
- it has a lot free features like continuous integration with git 💡💡💡
- alternative of netlify is Surge where we don't need to create account 
- `STEP 1` : our project folder which we want to deploy is `dist` 
    - so just drag & drop the `dist` folder inside netlify
    - & after deploying it then our application will get hoisted with SSL certificate which as `https`

- now we deploy the project but it's deploy based on CDN which means instead of uploading the files only to one server <br>
    in one location in the world , our sit now actually lives in many locations <br>
    which means in many servers spread out across the entire world , so when user access then they'll get diversion from the server <br>
    which is closest to them which will speed up the delivery 
