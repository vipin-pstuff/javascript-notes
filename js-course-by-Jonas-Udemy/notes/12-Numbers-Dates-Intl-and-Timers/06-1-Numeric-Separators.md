# Numeric Separators

- Numeric Separators is the underscore sign `_`
- `use case ✅` : it's just used to make a big number (whether it's a floating , bigInt number) in readable format 💡💡💡

## Examples - of Numeric Separators

- Eg : of normal way 
    ```js
    const num = 1000000000 
    console.log(num) // output : 1000000000
    ```
    - it's difficult to find whether it's a million or trillion , so here comes Numeric Separators
    - Eg : of Numeric Separators
        ```js
        const num = 1_000_000_000
        console.log(num) // output : 1000000000
        ```
        - so we'll get same output

- Eg : of bigInt with Numeric separators
    ```js
    const bigNum = 1_000_000_000n
    console.log(bigNum) // output : 1000000000
    ```

- Eg : correct & wrong way to use Numeric Separators
    - floating & normal numbers
        ```js
        250_000_000.012_304 // ✔️
        _1_0_0_0_0 // ❌
        1_0_0_0_0_ // ❌
        ```
    - binary numbers
        ```js
        const b = 0b0000_0000_1111_1111 // separate in terms of nibble
        console.log(b) // output : 255
        ```

## Extra Resources

- https://www.youtube.com/shorts/8L36qRYruec 👍
- https://www.youtube.com/watch?v=DoIUDLKOvzY : techsith 👍
- https://www.youtube.com/watch?v=IU9_26x5N5A
- https://www.youtube.com/watch?v=wCykTckvgvs
- https://backbencher.dev/articles/javascript-numeric-separators
- https://www.javascripttutorial.net/es-next/javascript-numeric-separator/
- https://dev.to/suprabhasupi/numeric-separators-in-javascript-3jec
