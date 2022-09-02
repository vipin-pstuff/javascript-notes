# Bundlers

- here we'll use `Parcel` bundler

## Parcel bundler

- `what Parcel can do` : 
    - it needs a zero configuration to use it 
        - means we just need to download parcel & starts working immediately
    - it bundles all of your files & transpile them with babel 
    - it makes sure that when we're making changes inside the code then it automatically refresh in the browser
    - & it's build time is quicker than webpack also 

## snowpack bundler

- this bundler is similar like parcel
- & it is newer than parcel but it's very similar to parcel
    - so we an download & work immediately 
    - & there's very low configuration
    - it has plugins

## webpack bundler

- this is really really popular bundler because we can do anything with it 
- the entirely of create-react-app is built on top of webpack
- it provides all of the powers but comes a ton of complexity
- it requires huge amount of configuration that's why people don't use most of the time
    - that's why parcel or snowpack is great because they didn't require configuration ✔️✔️✔️
    - & they does 99.9% of what we want to do ✔️✔️✔️

- if we're already using something like create-react-app then webpack maybe the way to go

## rollup bundler

- it's similar like webpack which requires a lot of configuration
- rollup is build on top of svelte

## conclusion what Bundler do

- these bundlers take that raw JS files , & then convert all of those files into <br>
    files which can be usable by the browser using things just like babel do transpiling
- & lot of times they help you out with things like just development & building
    because if we know that when we were using babel then <br>
    we need to run build command everyTime when we made changes in code
- but bundler like parcel do this automatically for us

## said by kyle

- use that bundler which needs low configuration like parcel or snowpack <br>
    stay away from like webpack or rollup which requires a ton of configuration 💡💡💡

- because webpack or rollup are great for really large applications that have very specific needs
