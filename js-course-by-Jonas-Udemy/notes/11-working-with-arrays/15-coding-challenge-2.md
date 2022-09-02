# Coding Challenge 2 

- here we'll see coding challenge based on reduce() array method 

- problem statement 
    - Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
    - Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
        1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
        2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
        3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
        4. Run the function for both test datasets
    - TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
    - TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
    
## solution

- `Ans Ques 1` : Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
    1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
    ```js
    function calcAverageHumanAge(ages) {
        // Note ✅ : here we want to convert that dog ages into human ages
            // that's why we created a new array based on the original array , so map() array method will be perfect
            // because map() array method return a new array with updated values ✔️✔️✔️
        const humanAges = ages.map(age => {
            return age <= 2 ? 2 * age : 16 + age * 4
        })
        console.log(humanAges) // output : [36, 4, 32, 2, 76, 48, 28]
    }

    calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
    ```

- `Ans Ques 2` : 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
    ```js
    function calcAverageHumanAge(ages) {
        const humanAges = ages.map(age => {
            return age <= 2 ? 2 * age : 16 + age * 4
        })

        const adults = humanAges.filter(age => age >= 18)
    }

    calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
    ```

- `Ans Ques 3` : 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
    - so we need to calculate the average
    ```js
    function calcAverageHumanAge(ages) {
        const humanAges = ages.map(age => {
            return age <= 2 ? 2 * age : 16 + age * 4
        })

        const adults = humanAges.filter(age => age >= 18)
        const average = adults.reduce((acc, age) => acc + age , 0) / adults.length 

        return average
    }

    console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
    console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
    ```
    - `adults.reduce((acc, age) => acc + age , 0) / adults.length` means 
        - `adults.reduce((acc, age) => acc + age , 0)` will return the total sum 
        - & then we divided by the total length of `adults` variable  

- `STEP 1` : simplifying this line of code i.e `adults.reduce((acc, age) => acc + age , 0) / adults.length`
    - which is related to finding an average
    - `Eg : ways to calculate the average ✅` 
        - let's say we have two numbers 2 & 3 , so to find the average of them , we have two ways 
            - `first & common way` : (2 + 3) & divide them by "2" because we have two numbers , we'll get 2.5 💡💡💡
            - `second way` : divide each number by 2 like this 2/2 + 3/2 because we have total two numbers , output i.e 2.5 
    ```js
    function calcAverageHumanAge(ages) {
        const humanAges = ages.map(age => {
            return age <= 2 ? 2 * age : 16 + age * 4
        })

        const adults = humanAges.filter(age => age >= 18)

        // const average = adults.reduce((acc, age) => acc + age , 0) / adults.length 

        // using that first way to calculate the average  
        const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length , 0) 

        return average
    }

    console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
    console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
    ```
    - `Note` : `adults.reduce((acc, age, i, arr) => acc + age / arr.length , 0)` 
        - here we can say like this `adults.reduce((acc, age, i, arr) => acc + age / adults.length , 0)`
        - but sometimes when we chain these methods together then we have only way i.e arr.length means using the current array
