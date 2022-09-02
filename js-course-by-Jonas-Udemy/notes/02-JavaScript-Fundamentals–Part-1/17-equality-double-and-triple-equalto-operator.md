# equality double & triple equalto operator

- `===` : means triple equalTo operator is called strict equality operator
    - means it's strict because it doesn't perform type coercion 💡💡💡
    - so it'll only returns true when both values are exactly same in value & in datatype
    - it checks two things value & datatype
    - Eg : `'18' === 18` return false

- `==` : means called lose equality operator
    - it does type coercion 💡💡💡
    - means it will return true even if both values has different datatype
    - Eg : `'18' == 18` will return true

- `best practice ✅` : 
    - always most of the time use triple equalTo operator
    - & use `==` for only when we're checking the value with null or undefined
    - don't use `==` , because it'll make things hard to find bug <br>
        so don't rely on automatic type conversion , most of the time do the manual type conversion 💡💡💡

- not equalTo operator 
    - `!==` : for strict version (always use this) 💡💡💡
    - `!=` : for lose version (just for only checking that value with null or undefined or both)