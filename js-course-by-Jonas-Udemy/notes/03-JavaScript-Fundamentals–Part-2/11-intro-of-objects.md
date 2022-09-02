# intro of objects

- if that property doesn't exist inside an object then we'll get undefined 💡💡💡

## why we need objects ✅

- eg : we have an array which contain all the info about a person like id card
    ```js
    const personElon = [
        "Elon" , 
        "Musk" ,
        1990 ,
        "Tesla",
        "Business man", 
        ["Steven", "Peter", "Alien"]
    ]
    ```
    - now we now that whatever the information we included in this array is related to that person <br>
        & we know that first element of an array should be like firstName & so on.. <br>
        like an id card which contain data in the form of an key value pairs ✔️✔️✔️
    - so in array there's is no way to give name or key or property name to each elements <br>
        so here comes object concept

- Eg : of using objects to store data in key value paris of that particular thing 
    ```js
    const personElon = {
        firstName : "Elon" , 
        lastName : "Musk" ,
        birthYear : 1990 ,
        companyName : "Tesla",
        occupation : "Business man", 
        friendsName : ["Steven", "Peter", "Alien"]
    }
    ```

- `different b/w array & object ✅` : 
    - `array` : in this , order of elements in which we specify the elements matters a lot 
        - because that's how we access these elements , so we can only access a particular array value by using their order number
        - `use case` : use array when we have data in order or sequence or structured data 💡💡💡

    - `object` : 
        - `use case` : use object , when we have more unstructured data & we want to retrieve the value based on the key 💡💡💡 

- Eg : checking the order of property which we define inside an object , those properties are printed in sequence or not
    ```js
    const personElon = {
        firstName : "Elon" , 
        lastName : "Musk" ,
        birthYear : 1990 ,
        companyName : "Tesla",
        occupation : "Business man", 
        friendsName : ["Steven", "Peter", "Alien"]
    }

    console.log(personElon)
    /* output : 
        {
          birthYear: 1990
          companyName: "Tesla"
          firstName: "Elon"
          friendsName: (3) ['Steven', 'Peter', 'Alien']
          lastName: "Musk"
          occupation: "Business man"
        }
    */
    ```
    - so here we can see properties of an object are ordered alphabetically 💡💡💡 
    - so in last lecture , as we saw that order of properties of an object doesn't matter 