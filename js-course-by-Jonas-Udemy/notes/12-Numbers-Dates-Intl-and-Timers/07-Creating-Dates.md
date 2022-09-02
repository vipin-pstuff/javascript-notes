# Creating Dates

- when we built real world applications , one type of data that comes up all the time i.e dates & times ✔️✔️✔️

## 4 ways to create a new date  ✅ 

- `first` : Date() constructor function (where we didn't pass any arguments)
    ```js
    const now = new Date()
    console.log(now) // output : Sat Jul 30 2022 13:21:06 GMT+0530 (India Standard Time)
    ```
    
- `second` : parse the date which we passed a string date as only one argument inside `new Date()`  
    ```js
    console.log(new Date('Jul 30 2022 13:21:06')) 
    // output : Sat Jul 30 2022 13:21:06 GMT+0530 (India Standard Time)
    console.log(new Date('December 24, 2015')) 
    // output : Thu Dec 24 2015 00:00:00 GMT+0530 (India Standard Time)
    ```
    - generally , this way is not a good idea to because it can be quite unreliable <br>
        however, if the string was actually created by JS itself , then it's pretty safe like this 
        ```js   
        const accountDate = "2019-11-18T21:31:17.178Z" 
        // here Z - means the UTC i.e the coordinated universal time 
            // which is the time without any time zon in London & also without daylight savings

        console.log(new Date(accountDate)) // output : Tue Nov 19 2019 03:01:17 GMT+0530 (India Standard Time)
        ```

- `third` : passing arguments inside Date() constructor function 
    - `6 arguments taken by Date() constructor function ✅`
        - `first argument` : year 
        - `second argument` : month name in number 
            - don't define month name in a word directly otherwise error come 
        - `third argument` : date
        - `fourth argument` : hours
        - `fifth argument` : minutes
        - `sixth argument` : seconds
        ```js
        console.log(new Date(2037, 10, 19, 15, 23, 5))
        // output : Thu Nov 19 2037 15:23:05 GMT+0530 (India Standard Time)
        ```
        - so we got November 19 , 2037 at 15 hours , 23 minutes,  5 seconds
        - `Note` : in JS , in Date , month name starts from `0` index , so 10 means November 💡💡💡
    - JS actually auto-corrects the day ✅
        ```js
        // here we define november 31st but we know November month only has 30 days 💡💡💡
        console.log(new Date(2037, 10, 31)) 
        // output : Tue Dec 01 2037 00:00:00 GMT+0530 (India Standard Time)

        console.log(new Date(2037, 10, 33)) 
        // output : Thu Dec 03 2037 00:00:00 GMT+0530 (India Standard Time)
        ```
        - so here we can see JS auto-corrects Dec 01
        - so this sometimes pretty useful 

- `fourth` : passing date & time in milliseconds as a argument based on calculation inside Date() constructor function 
    - since the beginning of the Unix time & Unix Time is January 1, 1970
    ```js
    console.log(new Date(0)) // here 0 -> means 0 milliseconds after that initial Unix Time
    // output : Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
    ```
    - here we got Jan 01 1970 which is pretty useful
    ```js
    // here we want later 3 days after that Jan 01 1970
    console.log(new Date(3 * 24 * 60 * 60 * 1000))
    // output : Sun Jan 04 1970 05:30:00 GMT+0530 (India Standard Time)

    // 3 means 3 days , 24 means 24 hours , 60 means 60 minutes , 60 means 6 seconds & 1000 means milliseconds 
    // 24 means numbers of hours in one day
    // 60 means minutes in 1 hr & 60 means no. of seconds in 1 minute
    // 1000 times to convert 2 milliseconds

    console.log(3 * 24 * 60 * 60 * 1000) // output : 259200000
        // 259200000 -> is a timestamp of the day number 3
    ```

- for more clear stuff check this : https://www.w3schools.com/js/js_dates.asp

## methods of Date constructor 

- Eg : of getFullYear() method
    ```js
    const future = new Date(2037, 10, 19, 15, 23)
    console.log(future.getFullYear()) // output : 2037
    ```
    - don't use getYear() method because it's deprecated , so always use `getFullYear()` method

- Eg : of getMonth() method
    ```js
    const future = new Date(2037, 10, 19, 15, 23)
    console.log(future.getMonth()) // output : 10
    ```
    - `Note` : in JS , in Date , Month starts from 0 index , so 10 means november 💡💡💡

- Eg : of getDate() method
    ```js
    const future = new Date(2037, 10, 19, 15, 23)
    console.log(future.getDate()) // output : 19
    ```
    - `Note` : in JS , in Date , Month starts from 0 index , so 10 means november 💡💡💡

- Eg : of getDay() method
    ```js
    const future = new Date(2037, 10, 19, 15, 23)
    console.log(future.getDay()) // output : 4
    ```
    - `Note` : `getDay()` method will not give day of the month but it'll give day of the week 💡💡💡
        - & `0` index means sunday , so here `4` output means thursday 💡💡💡

- Eg : of getHours(), getMinutes() , getSeconds() methods
    ```js
    const future = new Date(2037, 10, 19, 15, 23)
    console.log(future.getHours()) // output : 15
    console.log(future.getMinutes()) // output : 23
    console.log(future.getSeconds()) // output : 0
    ```

- Eg : of toISOString() method ✅
    - `toISOString()` method used to get the date & time in string type 
    ```js
    const future = new Date(2037, 10, 19, 15, 23)
    console.log(future.toISOString()) // output : 2037-11-19T09:53:00.000Z 
    ```
    - `use case of toISOString() method of Date class` : when we want to convert a particular object which contain date data <br>
        into a string which we can store somewhere 💡💡💡

- Eg : of getTime() method
    - `getTime()` method used to get the timestamp for the date
    ```js
    const future = new Date(2037, 10, 19, 15, 23)
    console.log(future.getTime()) // output : 2142237180000

    // now take this timestamp & pass it inside Date() constructor function 
    console.log(new Date(2142237180000))
    // output : Thu Nov 19 2037 15:23:00 GMT+0530 (India Standard Time)
    ```
    - timestamp is very important that's why we have a special method i.e `Date.now()` method 💡💡💡
    - Eg : of new() method ✅
        - `new()` method used to get current timestamp
        ```js
        console.log(Date.now()) // output : 1659172526470
        ```

- Eg : of setFullYear() method
    ```js
    const future = new Date(2037, 10, 19, 15, 23)
    future.setFullYear(2040)
    console.log(future) // output : Mon Nov 19 2040 15:23:00 GMT+0530 (India Standard Time)
    ```
    - so here we changed the year
    - now we also have methods to set month , day , hours , etc as same as for getting 
    - & setting date also perform auto-correction just like we did above
