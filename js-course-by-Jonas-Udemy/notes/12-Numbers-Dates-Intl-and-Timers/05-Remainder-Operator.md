# Remainder Operator

- `%` remainder operator will give remainder of the division
- `/` divide operator will give quotient of the division

## Examples - of remainder operator 

- Eg : of remainder operator 
    ```js
    console.log(5 % 2) // output : 1
    console.log(5 / 2) // output : 2.5
    
    console.log(8 % 3) // output : 2
    console.log(8 / 3) // output : 2.6666666666666665
    ```
    - `%` remainder operator is useful to check whether that number is odd or even

- Eg 1 : of remainder operator to check whether a number is odd or even
    ```js
    // any number is divided by 2 & give remainder 0 means it's a even otherwise odd
    console.log(6 % 2) // output : 0
    console.log(6 / 2) // output : 3

    console.log(7 % 2) // output : 1
    console.log(7 / 2) // output : 3.5
    ```
    - Eg : using this above knowledge to check whether a number is odd or even
        ```js
        const isEven = n => n % 2 === 0
        console.log(isEven(8)) // output : true
        console.log(isEven(23)) // output : false
        console.log(isEven(514)) // output : true
        ```
        - this used to check is any number is divisible by any other number & whenever the results of the remainder <br>
            operator is zero then that means that the first number is completely divisible by the second one 

- Eg 2 : let's work on little bit on movements of our application
    ```html
    <!-- MOVEMENTS -->
    <div class="movements">
      <div class="movements__row">
        <div class="movements__type movements__type--deposit">2 deposit</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">4 000€</div>
      </div>
      <div class="movements__row">
        <div class="movements__type movements__type--withdrawal">
          1 withdrawal
        </div>
        <div class="movements__date">24/01/2037</div>
        <div class="movements__value">-378€</div>
      </div>
    </div>
    ```
    ```js
    [...document.querySelector('.movements__row')].forEach(function(row , i) {
        if (i % 2 === 0) {
            row.style.backgroundColor = 'skyblue'
        }
    })
    ```
    - now we want this inside a even handler otherwise it'll execute when our application start
    ```js
    labelBalance.addEventListener('click', function() {
        [...document.querySelector('.movements__row')].forEach(function(row , i) {
            // for 0 , 2 , 4 , 6 
            if (i % 2 === 0) {
                row.style.backgroundColor = 'skyblue'
            }
            // for 0 , 3 , 6 , 9
            if (i % 3 === 0) {
                row.style.backgroundColor = 'purple'
            }
        })
    })
    ```
