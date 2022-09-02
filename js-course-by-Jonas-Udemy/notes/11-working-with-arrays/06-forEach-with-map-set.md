# forEach() array method with Map() & Set() classes 

- we'll see how forEach() array method works with map() & set() methods

- testing code 
    ```js
    const currencies = new Map([
      ['USD', 'United States dollar'],
      ['EUR', 'Euro'],
      ['GBP', 'Pound sterling'],
    ]);
    ```
    - using bankist application data ,

## Examples - using forEach() array method on Map() & Set() classes 

- Eg 1 : using forEach() array method on Map() class
    ```js
    const currencies = new Map([
      ['USD', 'United States dollar'],
      ['EUR', 'Euro'],
      ['GBP', 'Pound sterling'],
    ]);

    currencies.forEach(function(curValue, key, map) {
        console.log(`${key}: ${curValue}`)
    })
    /* output :  USD: United States dollar 
                EUR: Euro 
                GBP: Pound sterling 
    */
    ```

- Eg 2 : using forEach() array method on Set() class
    ```js
    const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])

    console.log(currenciesUnique)
    // output : Set(3) {'USD', 'GBP', 'EUR'}
    currenciesUnique.forEach(function(curValue, key, map) {
        console.log(`${key}: ${curValue}`)
    })
    /* output : USD: USD
                GBP: GBP
                EUR: EUR
    */
    ```
    - here key is same value , 
    - `why key is same as value when using forEach() array method on Set() class `
        - because Set() class doesn't have keys & index number of that key ✔️✔️✔️
        - & developer those who made this forEach() array method , they kept only three arguments <br>
            instead of 4 arguments for Set() class which can create confusion
    - Eg 2.1 : Note for using forEach() array method on Set() class
        ```js
        const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])

        console.log(currenciesUnique)
        currenciesUnique.forEach(function(value, value, map) {
            console.log(`${value}: ${value}`)
        })
        ```
        - here we gave same argument name i.e `value` but we can't use duplicate arguments name
        - that's why we'll use `_` underscore as second argument like this ✅
            ```js
            const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])

            console.log(currenciesUnique)
            currenciesUnique.forEach(function(value, _, map) {
                console.log(`${value}: ${value}`)
            })
            /* output : USD: USD
                GBP: GBP
                EUR: EUR
            */
            ```
            - here in JS , `_` underscore argument means a throwaway variable <br>
                which means a variable i.e completely unnecessary , it's just a convention 💡💡💡
