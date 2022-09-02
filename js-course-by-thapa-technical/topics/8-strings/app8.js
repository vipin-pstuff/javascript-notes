
// 🔥 challenge time - timeline : 7:06:44 for slice() method
/* 
    Ques : very important question
        display only 280 characters of a string like the one 
        use in twitter ?

        - as you knwo if you use twitter or instagram
            then max to max you can write characters till 280

        - more than that if you try to write then 
            you'll get an error
        
    remember that : even if user wrote more than 280 characters
                    then only display 280 characters
*/
// solution
const myTweets = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis justo ut lacus tincidunt pretium. Vestibulum eu tortor a lacus tempus lobortis nec iaculis dui. Nulla enim nulla, tempus ut felis sed, auctor hendrerit nunc. Maecenas gravida volutpat velit fermentum sagittis. Vivamus lacus tortor, feugiat sit amet pulvinar eu, tincidunt eget arcu. Nunc consectetur, mauris at maximus volutpat, lacus velit lacinia massa, vitae iaculis augue diam condimentum dolor. Nulla lobortis, erat aliquet consequat lacinia, neque nunc convallis nisi, sed ullamcorper erat est ut neque"
// 0 to 279 =  280
let myActualTweets = myTweets.slice(0 , 280)
console.log(myActualTweets.length)

// 🔥 challenge time - timeline : 7:26:45 
/* 
    Ques - return the unicode of the last character in a string

        let str = "HELLO WORLD"
*/
// solution
let str = "HELLO WORLD"
// let unicodeOFLastChar = str.charCodeAt(str.indexOf(str.charAt(str.length-1)))
// OR
let lastChar = str.length - 1 
console.log(str.charCodeAt(lastChar))



