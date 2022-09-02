# javascript Releases

- how make that modern js code that we wrote compatible for old browser 

- so we have to situations i.e development & production

- `Development Phase` : 
    - means when we're building the application on our computer
    - & in this phase we use all the latest features of js 

- `Production Phase` : 
    - means when our webapp is finished then we deploy it on the internet
    - & you assume that webapp is working in your users' browsers also , but here's where problems might appear
        - because this is the part that we actually can't control <br>
            means we can't control which browser the user uses <br>
            & we can't assume that all the users always use the latest browsers
        - so the solution is that convert those modern js versions into ES5 by using Babel <br> 
            so Babel used to transpile & polyfill our code ✔️✔️✔️

- so during development , we can use latest features of js in our code base <br>
    but in production/shipping phase , we transpile our code base into ES5 features by using Babel  

- `JS features support` 
    - ES5 is fully supported in all browsers (down to IE9 from 2011) ✔️✔️✔️ 
    - ES6 till ES20 is well supported in all modern browsers , but these are not support in old browsers ✔️✔️✔️
    - we can use most features in production phase with transpiling & polyfilling ✔️✔️✔️

- check ES6 compatibility table : http://kangax.github.io/compat-table/es6/

- before releasing any js features official , that feature go through with 4 stages
    - `first` :  
