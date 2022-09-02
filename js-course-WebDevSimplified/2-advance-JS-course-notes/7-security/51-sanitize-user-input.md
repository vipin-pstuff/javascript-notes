# sanitize user input 

- most important 🔥🔥

- here we'll see how to take user input & sanitize which we can actually use it
    - in last lecture , talked about not using innerHTML & eval() function 
    - but in some instance , we want to allow the user to create HTML input <br>
        but we don't want to allow them to do cross-site-scripting 💡💡💡
    - so this is why sanitizing the user input is really important means we take out all the bad things <br>
        such as `<img src="" onerror="alert('hacked')">` & we just want to allow good things such as like a normal `h1` tag 💡💡💡

## Examples - of sanitize user input

- eg : using innerHTML 
    - innerHTML would be useful like if you have a "comment system" where you want the user to put HTML code in their comments 💡💡💡
    - inside script.js file 
        ```js
        const query = new URL(window.location).searchParams.get("query")
        document.getElementById("query-input").value = query 
        document.getElementById("query-output").innerHTML = query 
        ```
    - output : now let's say we want to allow the user to put an `h1` tag 
        - like this `<h1>Hi</h1>` & click to search button then we'll get `hi` in h1
        - & it'll actually render this `hi` as html
        - so this way users can do change their comments around the HTML Eg : markdown on github 

- & now we want to sanitize by clearing out all the bad things & only allowing the good things <br>
    so there's a npm library i.e `sanitize-html` ✔️✔️✔️

- `using sanitize-html library`
- `STEP 1` : run `npm init -y` to initialize package.json file
    - `STEP 1.1` : then install that library `npm i sanitize-html`
    - & we're not gonna install parcel because it has a bug in current implementation , so we'll use snowpack bundler
    - `STEP 1.2` : `npm i --save-dev snowpack` to install snowpack

    - now inside package.json file , create run command 
    - `STEP 1.3` : inside package.json file , creating run command 
        ```json
        "scripts": {
            "start": "snowpack dev" , // this will start dev snowpack server for us
            "test": "echo \"Error: no test specified\" && exit 1"
        }
        ```
        - `STEP 1.3.1` : now run `npm start` command

    - output : our localhost:8080 server will start

- so any bad input's will be removed if user try to write & if the user put the good input then it'll work 💡💡💡
- `STEP 2` : inside script.js file , importing that library
    ```js
    import sanitizeHtml from 'sanitize-html'

    const query = new URL(window.location).searchParams.get("query")
    document.getElementById("query-input").value = query 
    document.getElementById("query-output").innerHTML = sanitizeHtml(query)
    ```
    - `sanitizeHtml` is a function & now it's gonna take out all the bad stuff & leave behind the good stuff 💡💡💡

    - output : save the file & we'll get an error i.e "Module URL is not available the browser"
        - so run snowpack with --polyfill-node to fix this

    - `STEP 2.1` : inside package.json file , changing command of start command 
        ```json
        "scripts": {
            "start": "snowpack dev --polyfill-node" , // now we'll run snowpack with that polyfill node
            "test": "echo \"Error: no test specified\" && exit 1"
        }
        ```

    - output : run command `npm start` & then localhost server will start
        - now write `<h1>hi</h1>` & click `search` button & then that `hi` will not be printed 
        - so inspect it & go inside console tab , we can see "Cannot use import statement outside a module"
        
    - `STEP 2.2` : inside index.html , make that script link as type="module"
        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="styles.css">
            <script src="script.js" type="module"></script> <!-- converted it into type="module" --> 
            <title>Javascript Injection</title>
        </head>
        <body>
            <h1 class="search-form-header">My Awesome Site</h1>
            <form class="search-form" autocomplete="off">
                <input class="search-input" id="query-input" type="text" name="query">
                <button class="search-button" type="submit" role="button">Search</button>
            </form>
            <h3 class="search-query">You Queried: <span id="query-output" class="query"></span></h3>
        </body>
        </html>
        ```

    - output : & we'll get the output `hi`

    - output : but if try to get the malicious code like `<img src="" onerror="alert('hacked')">` & click to search button
        - then we'll not get any output to our screen 
        - so inspect the `You Queried` section & go to Elements tab & then inside `query-output` span class , there's nothing <br>
            because our sanitized HTML is removing the bad stuff 

## why we need to sanitize the input 🔥

- means `<img src="" onerror="alert('hacked')">` is a Cross site scripting but `<h1>hi</h1>` is not Cross site scripting 💡💡💡 <br>
    if we're dealing with like SQL , etc then a really common other type of security issue is like SQL injection <br>

- so if we have a SQL database & we write SQL code to access that database & if we have a user input on the frontend <br> 
    which gets put into a SQL command that runs on our database like SQL injection <br>
    then might be possible that hacker write `SELECT password from users;` inside input field <br>
    then due to this , they could inject into our server & what if we get the input like SQL command from the user <br>
    then we need to make sure we sanitize it by converting like this `SELECT password from users;` to a string <br>
    so commands like this don't actually run on our database & instead just runs as a string which is not going to do anything 💡💡💡
    
- so sanitizing HTML input , whether it's user database input , don't use `innerHTML` property because it'll create a lot of bug   
    until & unless that data is not a part of user's information then we can use `innerHTML` otherwise avoid it 

## said by kyle 

- don't use `innerHTML` property & start using `innerText` or `textContent` property
