# ECMAScript 2015 (ES6) Part 1

- [x] known as modern JS

    - so we have ES6 - 2015
    - then ES7 - 2016
    - then ES8 - 2017
    - after that every year we getting new updates   
    - again we have ES9 - 2018
    - then ES10 - 2019
    - then ES11 - 2020
    - then ES12 - 2021

### ES6 or ES 2015
    -> is most famous because + ES6 is most IMP

    -> features and update we got in ES6
        - let and const
        - template string / template literals
        - default arguments
        - destructuring
        - object properties
        - arrow function
        - rest and spread operators

### NOTE : 
    -> rest operator use less but 
        mostly spread operator is used even in reactjs also

### let VS const VS var
    - var has function scope
    - let and const has block scope
    
    - here block scope means curly braces scope 

    - let and const maintain the block scope
        but var destroy the block scope

    - we use let and const most of the time 99.9%
      - const keyword we use 99% inside function 

### template literals / template strings
    -> we need to use ${} -> for variable
        and this ${} --> comes inside backtics ``

    -> most of the people use template strings 99.9%

    -> use it according to situation otherwise 
        use string concatenation i.e plus sign

### default arguments
    -> default function argument allow 
        named parameters to be initialized 
        with default values if no value or undefined is passed

    eg : 
        -> normal thing

        function sum(a , b) {
            return a + b ;
        }

        console.log(sum(4 , 2))

    NOTE : 

    - what if we don't want to pass 2 as 
        a second argument then here comes default
        argument

    - and what if we forgot to pass any argument
        then we'll get NaN as a output 
        due to undefined stored in that variable
        that's why default argument

    eg : of default argument

        function sum(a , b=5) {
            return a + b ;
        }

        console.log(sum(4)) 

### destructuring
    - right now still we don't saw array and object
        so we'll do this in upcoming lectures

### object properties
    - again we can't see this also because 
        we didn't saw object

### rest and spread operator
    - again we'll see this in upcoming lectures
    - rest is not so important 
    - but spread is most important

### NOTE :
    - so when we do array and object then we'll see 
        destructuring and spread operator , etc 
        which are skipped in this lecture

### arrow function
    - it is most important
    - it's like a function expression but not exactly
    - you can use it as argument

    eg : of normal way

        function sum() {
            let a = 2 , b = 4 ;
            let sum = a + b ;
            return `Sum of two numbers is : ${sum}` ;
        }

        console.log(sum())

    eg : of arrow function

        const sum = () => {
            let a = 2 , b = 4 ;
            return `Sum of two numbers is : ${a + b}` ;
        }

        console.log(sum())

    - here we have a problem if we use this keyword
        inside arrow function then we can't use 
        this keyword that we'll see in object lecture