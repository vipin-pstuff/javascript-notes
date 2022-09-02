# Values and Variables in JS

- There are three keyword to declare variable
  - [x] var 
  - [x] let 
  - [x] const

### ✅ var

    eg : 
        var myName = "Teen" ;

    - so where var is -> variable (key)
    - myName is name of our variable i.e var
    - "Teen" -> is a value of that variable name

    NOTE: 
        - let's say we want age 

        - eg : so 
            var age = 12 ;

        - but here is the problem that whose age is this
        - so this we don't know

        - that's why write like this
            var myAge = 12 ;

- [x] variable is used to store our data
- [x] using naming convension to give meaningful variable name

### ✅ Rules to define variables
    
    - start first letter of your variable name
        either with letter or underscore (_) or an dollar ($)

    - don't start with number as the first character
    
    - don't use space between a variable
        eg : var my age = "teen ; ❌

    - variables names are case sensitive

    - you can give variable name long but don't make it too long
    
    - don't use js predefine keywords + special character as a variable name


### challenge time - timestamp : 34 : 38

    eg : 
        var _myName = "teen" ; ✅
        var _1my__name = "teen" ; ✅
        var 1myName = "teen" ; ❌
        var myName% = "teen" ; ❌
        var $myName = "teen" ; ✅