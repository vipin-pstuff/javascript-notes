# NPM audit

- in this module , we'll talk about security 

- security is most important because creating an application is good <br>
    but creating a secure application is really the most important thing 

## what we'll learn in this lecture

- here we'll talk about npm audit 
    - how to update packages with npm   
    - how semantic versioning works
    - & all the stuff around npm & updates 💡💡💡

- so we'll see a bunch of different topics but those topics will be interlinked together

## semantic versioning 

- let's see how to use it 

- `STEP 1` : inside empty project folder , run `npm init -y`
    - `STEP 1.1` : now install `npm i express` & this `express` library used for creating servers
    - `STEP 1.2` : & go inside package.json file & we'll see 
        ```js
        "dependencies" : {
            "express": "^4.17.1"
        }
        ```
        - so here we can see version of express is labeled with caret symbol <br>
            & then we have `4` then `.` sign & then `17` then `.` then `1` so this is semantic versioning 💡💡💡

    - in npm , most packages that we're gonna deal with , they're gonna follow semantic versioning 💡💡💡
        - & great thing about semantic versioning is that it really easily lets us know when certain changes <br>
            to a package were made that are going to break our code when things are just fixing bugs , <br>
            when things are adding features & so on

- `STEP 2` : to know more about semantic versioning come on this site [semver.org](https://semver.org)
    - & under summary section , there are types of version i.e
        - `first` : MAJOR
        - `second` : MINOR
        - `third` : PATCH 
    - like this `MAJOR.MINOR.PATCH` & here we can see `dot` b/w them 💡💡💡 <br>
        & that's how `express` library is structured i.e 4.17.1
    
    - through this we can identify when we're updating a package & whether or not we're gonna break certain things <br>
    
- `PATCH version` : is just when we're making a really small bug fix that's almost always supposed to be backwards compatible 
    - so we go from version 4.17.1 to version .2 then means we're upgrading the patch version means we fixed a few bugs
    - means we made a few minor changes

- now next thing is MINOR
- `MINOR version` : is the middle number in the version of the package
    - a minor version comes when we add functionality means we're adding a new function , a new feature , a new property <br>
        but it's backwards compatible means this doesn't actually break anything 
    - it's purely adding new functionality
    - like express version is upgraded from at 4.0.1 to 4.17.1 means we did have any breaking changes <br>
        because we're just changing the minor version of our code by adding new features

- `MAJOR version` : means anytime we update the major version then that means that we made breaking changes
    - means the code in library has changed , so now when we actually use that library then we can't use it in the same way <br>
        that we normally would
    - updating this version means we're breaking most of the thing of that package/library 
    - major version means major changes which means lot of changes in the code of that library/packagee

- `importance of semantic version ✅` : 
    - when we need to update a package/library because we have some security fixes <br>
        that we want to update that package to use the new features 
    - important to know what changes are gonna be making 
    - Eg : if change the version of `express` package into like from this `"^4.0.0"` into this `"^4.17.1"`
        - changing the `patch & minor` versions means we're adding features & fixing bugs
        - but if go from `"^3.1.1"` into `"^4.1.1"` then we're going to have to deal with breaking changes <br>
            because version 4 is a major version

    - inside version of the package , we'll see `^` caret symbol or `~` tilde symbol or no symbol 
        - which means to tell NPM how to determine what packages to install means inside package-lock.json file <br>
            we can see exact version of the `express` package installed

    - `Note` : related to version of the package , inside package.json file 
        - `"express" : "^4.0.0"` means 
            - install if that update is `PATCH or MINOR version` but don't update the MAJOR version 
            - because we putted the `^` sign before the MAJOR version <br>
                which means don't update the MAJOR version expect those versions 💡💡💡

        - & writing `"^4.0.0"` or `"4"` means give us the any 4 major update

    - `Note` : tilde symbol on the version of that package , inside package.json file
        - `"express" : "~4.0.0"` means allows only PATCH version to update & don't update MAJOR & MINOR versions 💡💡💡

    - `Note` : no symbol on the version of that package , inside package.json file
        - `"express" : "4.17.1"` means don't update any version & keep this only as it is 
            - so even version `4.17.2` came & if we run `npm i` then this new version wouldn't install it 💡💡💡

- a handy website which allows to do this calculation to view what things will look like i.e [semver.npmjs](https://semver.npmjs.com/) 
    - type a package name on that input box & type `^3.0.0` then those version will get highlighted

- `said by kyle` : most of the time , we deal with `^` caret symbol 💡💡💡

- generally , a library/package made with bunch of small packages & those small packages on small packages <br>
    but it depends i.e is that library/package is pretty big or small 

- Eg : inside package.json file 
    ```js
    "dependencies" : {
        "express": "4.0.0"
    }
    ```
    - now we want to install exact this version
    - output : save the file , inside terminal , run `npm i` & we'll get this message i.e 11 vulnerabilities (2 low , 3 moderate , 6 high)
        - & this message really handy & don't use the outdated version of that library/package <br> 
            because it'll create security flaws & cause they're huge security exploits
        - so to fix this issue we use the command i.e `npm audit` 💡💡💡

    - `STEP 1` : run the command `npm audit` to fix that issue
        - after running this command then scroll up & we can see name of the package
            ```
            cookie-signature <=1.0.5
            Severity: moderate
            Timing Attack - https://npmjs.com/advisories/134
            fix available via `npm audit fix --force`
            will install express@4.17.1, which is outside the stated dependency range
            ```
            - here we can see more info by clicking on https://npmjs.com/advisories/134
        - & we can fix this issue by running `npm audit fix --force` which will install `Express` 4.17.1 <br>
            which is outside the stated dependency range

    - `STEP 2` : to check which version is installed of that package/library
        - then run this command i.e `npm list express` 💡💡💡

    - `STEP 3` : then run `npm audit` then still we'll get that same message <br>
        & it'll show to run `npm audit fix`

    - `STEP 4` : so run `npm audit fix` & we'll get `found 0 vulnerabilities` message
        - & even we can run that command to check the version of the `express` library 
        - & inside package.json file , version of that `Express` also changed from `"^4.0.0"` into `"^4.17.1"`

- `said by kyle ✅`
    - `Note` : if we run blindly run `npm audit fix--force` on that application then we'll get breaking changes
        - & due to this , our code base will start breaking & hard to actually fix

    - & if bymistake installed the old version of that package instead of we need newer version <br>
        then run this command i.e `npm outdated` 💡💡💡
    - `npm outdated` will give package list & current version that we're using & more info about that package/library

    - `npm update` : used to update all the packages are installed locally inside that project 
        - which are listed inside package.json file , inside `dependencies` object 💡💡💡

    - `recommended advice` : instead of updating the package through terminal would be lead to weird issues 
        - so directly go inside package.json file & change into newer version of that package 
        
## discussion page

- `Ques asked` : I was very pleased with your answers to a commonly occurring NPM dependency security problem <br>
    and how to drill down into individual library issues and repair them. Thank you for adding this to your course.
    - `Ans by kyle` : great
