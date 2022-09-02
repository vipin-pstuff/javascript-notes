# prettier 

- is a tool for code formatting
  
### prettier package installation

    -> open terminal in vs code 
    -> then run this command 
        npm i -g prettier 
            |  |   |
            |  |   +---> package name
            V  +----> globally
        means install

        NOTE : 
            - if we install the package globally then
                we can use that package or it'll work for
                every project
            - but installing that package locally means 
                that package will work only for that project

    -> then install prettier extension & enable it
    -> go to settings of vs code 
    -> & then type this
        "format on save"
    -> & then check the box 

        NOTE : 
            - but let's say we want that setting in js only
                not in html or css files

            1 - so go to settings of Vs code 
            2 - & then you'll see right top corner icon
                to open the JSON settings file
            3 - so open it 
            4 - then we'll see 
                "editor.format.OnSave" : true
            5 - so put this above code inside curly braces like this
                so that we can apply for JS only

                "[javascript]" : {
                    "editor.format.OnSave" : true
                } 

            6 - now when we do some changes in html file and save 
                then formatter code setting will not work 
                just only work in JS file
        
    - now go to settings write prettier then we'll see many settings
        of prettier
    - then type this  -> "prettier semi"
    - then click on checkbox of it


### NOTE 

    - prettier doesn't format the code 
        if our code has errors 
    - so remove all the errors and then save file 
        so we'll see prettier will format the code