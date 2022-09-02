# Activating Strict Mode

- `strict mode` : is a special mode that we can activate in JS 
    - it makes easier for us to write a secure JS code 
    - means it makes easier for developers to avoid accidental errors

## how to use strict mode 

- Eg : of using strict mode in js 
    ```js
    'use strict';
    ```
    - so we activated that strict mode for that script file
    - `Note` : `'use strict';` must be very first line of code in the script
        - means if we have any code before this line of code then strict mode will not be activated
        - but comments are allows before it

- Eg : using strict mode in js to find errors 
    ```js
    'use strict';

    let hasDriversLicense = false 
    const passText = true

    if (passText) hasDriverLicense = true
    if (hasDriversLicense) console.log("I can drive ;D")
    ```
    - here we'll get an error i.e hasDriverLicense is not defined , so through strict mode , we can fine these kind of bug

- Eg : one more example ✅
    ```js
    const private = 12
    ```
    - then we'll get undefined as a output , but if we use strict mode like this 
    ```js
    'strict mode';

    const private = 12
    ```
    - we'll get output i.e 'strict mode' & due to this we can understand that we made a mistake in code 
