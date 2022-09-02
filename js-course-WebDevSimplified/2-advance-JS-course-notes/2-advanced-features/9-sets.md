# sets

- `prerequisite` : must know about Map() class object 

## About Set() class object

- is like an array but not completely 💡💡💡
- Set() is very useful & better in some usecases than `array` 

- is a special type of `object` 💡💡💡
- it store only `unique values` (whether primitive values or object references) 💡💡💡 

## Example : of without using Set() class object ✅

- Eg : `using normal way` (without using Set() class object)
    ```js
    const uniqueList = [1, 2, 3, 4, 5]
    const newNumber = 4

    if (!uniqueList.includes(newNumber)) {
        uniqueList.add(newNumber)
    }

    console.log(uniqueList)
    // output : (5) [1, 2, 3, 4, 5]
    ```
    - we want `uniqueList` array should contain only unique numbers & we're adding `4` number inside that array
        - so we're doing simple little check whether `4` number is inside that array list or not & based on that we'll add or not
        - output : so output we got that `4` number is already inside the `uniqueList` array so skip it

    - `Reason` : why we need Set() class object ✅ 
        - so this is super common usecase where we have a list of unique items & we want to make sure that array always contain unique numbers 💡💡💡
        - `Note` : but doing this check with array , is little bit cumbersome/difficult & with array , it's really easy to mess up
        - that's why in this situation Set() class object is great 💡💡💡

- `Set()` class object 
    - is just like an array but `Set()` always give guaranteed that whatever items we have inside `Set()` will be unique 💡💡💡

## How to use Set() class object ✅

- Set() is a class constructor & it has own methods & properties 

- `new Set()` : here `new` is a keyword to create object of Set() class

- `Note🔥` : here `S` letter (of Set() class) should be capital because it's a class otherwise error will come 💡💡💡 

- properties & methods of Set() class used 
    - methods
        - `add()` 
        - `clear()`
        - `delete()`
        - `has()`
        - `forEach()`
        - `entries()`
        - `keys()`
        - `values()`
        - `values()`
        
    - properties 
        - `size`

- `Note` : Set() class object doesn't have set() & get() methods 💡💡💡
    
- `Set()` class object 
    - takes an array argument as a value 💡💡💡

## Example : of Set() class object

- Eg 1 : of `Set()` class
    ```js
    const set1 = new Set()

    console.log(set1)
    // output : Map(0) {}
    ```
    - right now Set() class object is completely empty

- Eg 2 : of `Set()` class object with passing an value as an argument
    ```js
    const set1 = new Set([1, 2, 3, 4])

    console.log(set1)
    // output : Set(0) {1, 2, 3, 4}
    ```

- Eg 3 : of `Set()` class object with passing `duplicate values` ✅
    ```js
    const set1 = new Set([1, 2, 3, 4, 4, 4, 4]) // passing duplicate values

    console.log(set1)
    // output : Set(0) {1, 2, 3, 4}
    ```
    - so here we can see that those duplicate values gets removed

- Eg 4 : of `Set()` class object with `add()` method
    ```js
    const set1 = new Set([1, 2, 3, 4]) 

    set1.add(5)
    console.log(set1)
    // output : Set(0) {1, 2, 3, 4, 5}
    ```
    - so `5` is added in that array 
    - but if we try to add `4` number by using add() method of Set() class object then it won't be added 💡💡💡
        - because Set() only store `unique values` & duplicate values will be removed 💡💡💡    
        - `Note💡` : so Set() class object is `checking` for us before adding duplicate values inside that array `without using any condition`

    - Set() class object contains that array in the form of an object 
        - but at the time of passing an argument we give in the form of an array 💡💡💡 

- Eg 5 : of Set() class object with `has()` method
    - `has()` method used to check whether that number exist inside that array or not & based on that return true or false 💡💡💡 

    ```js
    const set1 = new Set([1, 2, 3, 4]) 

    set1.add(5)

    // getting that item from an array by using index number but without using has() method
    console.log(set1[0]) 
    console.log(set1.get(0))
    // output : undefined
    ```
    - we're getting undefined because Set() class object doesn't have get() & set() method
        - that's why we have only `has()` method

    ```js
    const set1 = new Set([1, 2, 3, 4]) 

    set1.add(5)

    console.log(set1.has(2)) // using has() method
    // output : true
    ```
    - so has() method is only checking whether that element exist inside that array or not
        - & based on that return true or false

    - so to get the all individual values , we need to use `forEach()` method 💡💡💡

- Eg 6 : of Set() class object with `forEach()` method
    ```js
    const set1 = new Set([1, 2, 3, 4]) 

    set1.add(5)

    set.forEach(value  => {
        console.log(value)
    })
    /* output : 1
                2
                3
                4
                5
    */
    ```
    - `Note✅` : generally , we don't need to access things by index inside Set() class object
        - because all we care about is what the actual values are 
        - so has() method is good enough to use
        - because Set() class object is only contain unique list inside an array 💡💡💡

- Eg 7 : of Set() class object with `delete()` method
    ```js
    const set1 = new Set([1, 2, 3, 4]) 

    set1.add(5)
    set1.delete(3)
    console.log(set1)
    /* output : Set(4) {1, 2, 4, 5} */
    ```
    - delete() method (of Set() class object) is very handy
        - because in array , to delete an individual item is difficult 
 
- & we have size() & clear() method of Set() class object

## challenge time

- `ques` :
    ```js
    function removeDups(arr) {
        
    }

    console.log(removeDups([1, 2, 3, 4, 3, 2, 5]))
    ```

    - `what we need to do`
        - take this array & remove the duplicates inside that function
        - & put unique list of array in console

- `Ans` : 
    ```js
    function removeDups(arr) {
      const uniqueSet = new Set(arr)
      return uniqueSet
    }
    function removeDups(arr) {
      return [...new Set(arr)]
    }
    // OR 


    console.log(removeDups([1, 2, 3, 4, 3, 2, 5]))
    // output : (5) [1, 2, 3, 4, 5]
    ```

    - `Note✅` : what does it mean → `[...new Set(arr)]`
        - means we're taking that array
        - & the easiest way to turn this → `[...new Set(arr)]` back into an array i.e we can use `spread operator`
        - `Spread operator` : is works on anything which is similar to an array like Set() class object is like an array 💡💡💡
        - so that Set() class object spread out due to spread operator

    - so we created a brand new Set() 
    - & then we took that brand new `Set()` & we spread out all the values in that `Set` into a brand new array by using spread operator
    - & then we returned that

## mine conclusion 

- use Set() class object , if we have array which contains duplicate values 💡💡💡

## --------------- Extra notes on Map() class object ---------------

- videos
  - https://www.youtube.com/watch?v=nwgH8IOqRMA&ab_channel=CodeWithHarry
  - https://www.youtube.com/watch?v=YiIKUhtqeRM&ab_channel=Telusko
  - https://www.youtube.com/watch?v=nGOnfYNo8F4&ab_channel=dcode
  - https://www.youtube.com/watch?v=hLgUTM3FOII&ab_channel=JavaScriptMastery
  - https://www.youtube.com/watch?v=4pRkrVwpLQo&ab_channel=ColtSteele
  
- blogs
  - https://www.javascripttutorial.net/es6/javascript-set/
  - https://javascript.info/map-set
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  - https://www.w3schools.com/js/js_object_sets.asp
  - https://alligator.io/js/sets-introduction/
