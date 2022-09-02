# Unit test project

- we're going to do Unit testing inside ATM project
- we'll learn how unit tests work & how mocking works & etc ✔️✔️✔️

## starter code 

<details>
  <summary>Account.js</summary>

```js
const FileSystem = require("./FileSystem")

module.exports = class Account {
  constructor(name) {
    this.#name = name
  }

  #name
  #balance

  get name() {
    return this.#name
  }

  get balance() {
    return this.#balance
  }

  get filePath() {
    return `accounts/${this.name}.txt`
  }

  async #load() {
    this.#balance = parseFloat(await FileSystem.read(this.filePath))
  }

  async withdraw(amount) {
    if (this.balance < amount) throw new Error()
    await FileSystem.write(this.filePath, this.#balance - amount)
    this.#balance = this.#balance - amount
  }

  async deposit(amount) {
    await FileSystem.write(this.filePath, this.#balance + amount)
    this.#balance = this.#balance + amount
  }

  static async find(accountName) {
    const account = new Account(accountName)

    try {
      await account.#load()
      return account
    } catch (e) {
      return
    }
  }

  static async create(accountName) {
    const account = new Account(accountName)

    await FileSystem.write(account.filePath, 0)
    account.#balance = 0

    return account
  }
}
```
</details>

<details>
  <summary>CommandLine.js</summary>

```js
const readline = require("readline")

module.exports = class CommandLine {
  static ask(question) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    return new Promise(resolve => {
      rl.question(`${question} `, answer => {
        resolve(answer)
        rl.close()
      })
    })
  }

  static print(text) {
    console.log(text)
  }
}
```
</details>

<details>
    <summary>FileSystem.js</summary>

```js
const fs = require("fs")

module.exports = class FileSystem {
  static read(path) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, (err, data) => {
        if (err) return reject(err)
        resolve(data)
      })
    })
  }

  static write(path, content) {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, content.toString(), err => {
        if (err) return reject(err)
        resolve()
      })
    })
  }
}
```
</details>

<details>
    <summary>script.js</summary>

```js
const Account = require("./Account")
const CommandLine = require("./CommandLine")

async function main() {
  try {
    const accountName = await CommandLine.ask(
      "Which account would you like to access?"
    )
    const account = await Account.find(accountName)
    if (account == null) account = await promptCreateAccount(accountName)
    if (account != null) await promptTask(account)
  } catch (e) {
    CommandLine.print("ERROR: Please try again")
  }
}

async function promptCreateAccount(accountName) {
  const response = await CommandLine.ask(
    "That account does not exist. Would you like to create it? (yes/no)"
  )

  if (response === "yes") {
    return await Account.create(accountName)
  }
}

async function promptTask(account) {
  const response = await CommandLine.ask(
    "What would you like to do? (view/deposit/withdraw)"
  )

  if (response === "deposit") {
    const amount = parseFloat(await CommandLine.ask("How much?"))
    await account.deposit(amount)
  } else if (response === "withdraw") {
    const amount = parseFloat(await CommandLine.ask("How much?"))
    try {
      await account.withdraw(amount)
    } catch (e) {
      CommandLine.print(
        "We were unable to make the withdrawal. Please ensure you have enough money in your account."
      )
    }
  }

  CommandLine.print(`Your balance is ${account.balance}`)
}

main()
```
</details>

## Complete code with unit testing

<details>
  <summary>.gitignore</summary>

```
accounts
node_modules
coverage
```
</details>

<details>
  <summary>Account.js</summary>

```js
const FileSystem = require("./FileSystem")

module.exports = class Account {
  constructor(name) {
    this.#name = name
  }

  #name
  #balance

  get name() {
    return this.#name
  }

  get balance() {
    return this.#balance
  }

  get filePath() {
    return `accounts/${this.name}.txt`
  }

  async #load() {
    this.#balance = parseFloat(await FileSystem.read(this.filePath))
  }

  async withdraw(amount) {
    if (this.balance < amount) throw new Error()
    await FileSystem.write(this.filePath, this.#balance - amount)
    this.#balance = this.#balance - amount
  }

  async deposit(amount) {
    await FileSystem.write(this.filePath, this.#balance + amount)
    this.#balance = this.#balance + amount
  }

  static async find(accountName) {
    const account = new Account(accountName)

    try {
      await account.#load()
      return account
    } catch (e) {
      return
    }
  }

  static async create(accountName) {
    const account = new Account(accountName)

    await FileSystem.write(account.filePath, 0)
    account.#balance = 0

    return account
  }
}
```
</details>

<details>
  <summary>Account.test.js</summary>

```js
const FileSystem = require("./FileSystem")
const Account = require("./Account")

beforeEach(() => {
  jest.restoreAllMocks()
})

describe("#deposit", () => {
  test("it adds money to the account", async () => {
    const startingBalance = 5
    const amount = 10
    const account = await createAccount("Kyle", startingBalance)
    const spy = jest
      .spyOn(FileSystem, "write")
      .mockReturnValue(Promise.resolve())

    await account.deposit(amount)
    expect(account.balance).toBe(amount + startingBalance)
    expect(spy).toBeCalledWith(account.filePath, amount + startingBalance)
  })
})

describe("#withdraw", () => {
  test("it removes money from the account", async () => {
    const startingBalance = 10
    const amount = 5
    const account = await createAccount("Kyle", startingBalance)
    const spy = jest
      .spyOn(FileSystem, "write")
      .mockReturnValue(Promise.resolve())

    await account.withdraw(amount)
    expect(account.balance).toBe(startingBalance - amount)
    expect(spy).toBeCalledWith(account.filePath, startingBalance - amount)
  })

  describe("with not enough money in the account", () => {
    test("it should throw an error", async () => {
      const startingBalance = 5
      const amount = 10
      const account = await createAccount("Kyle", startingBalance)
      const spy = jest.spyOn(FileSystem, "write")

      await expect(account.withdraw(amount)).rejects.toThrow()
      expect(account.balance).toBe(startingBalance)
      expect(spy).not.toBeCalled()
    })
  })
})

async function createAccount(name, balance) {
  const spy = jest
    .spyOn(FileSystem, "read")
    .mockReturnValueOnce(Promise.resolve(balance))
  const account = await Account.find(name)
  spy.mockRestore()
  return account
}
```
</details>

<details>
  <summary>CommandLine.js</summary>

```js
const readline = require("readline")

module.exports = class CommandLine {
  static ask(question) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    return new Promise(resolve => {
      rl.question(`${question} `, answer => {
        resolve(answer)
        rl.close()
      })
    })
  }

  static print(text) {
    console.log(text)
  }
}
```
</details>

<details>
  <summary>FileSystem.js</summary>

```js
const fs = require("fs")

module.exports = class FileSystem {
  static read(path) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, (err, data) => {
        if (err) return reject(err)
        resolve(data)
      })
    })
  }

  static write(path, content) {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, content.toString(), err => {
        if (err) return reject(err)
        resolve()
      })
    })
  }
}
```
</details>

<details>
  <summary>package-lock.json</summary>

```
upload this file also
```
</details>

<details>
  <summary>package.json</summary>

```js
{
  "name": "current-project",
  "version": "1.0.0",
  "description": "",
  "main": "Account.js",
  "scripts": {
    "test": "jest --coverage"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^26.6.3"
  }
}
```
</details>

<details>
    <summary>script.js</summary>

```js
const Account = require("./Account")
const CommandLine = require("./CommandLine")

async function main() {
  try {
    const accountName = await CommandLine.ask(
      "Which account would you like to access?"
    )
    const account = await Account.find(accountName)
    if (account == null) account = await promptCreateAccount(accountName)
    if (account != null) await promptTask(account)
  } catch (e) {
    CommandLine.print("ERROR: Please try again")
  }
}

async function promptCreateAccount(accountName) {
  const response = await CommandLine.ask(
    "That account does not exist. Would you like to create it? (yes/no)"
  )

  if (response === "yes") {
    return await Account.create(accountName)
  }
}

async function promptTask(account) {
  const response = await CommandLine.ask(
    "What would you like to do? (view/deposit/withdraw)"
  )

  if (response === "deposit") {
    const amount = parseFloat(await CommandLine.ask("How much?"))
    await account.deposit(amount)
  } else if (response === "withdraw") {
    const amount = parseFloat(await CommandLine.ask("How much?"))
    try {
      await account.withdraw(amount)
    } catch (e) {
      CommandLine.print(
        "We were unable to make the withdrawal. Please ensure you have enough money in your account."
      )
    }
  }

  CommandLine.print(`Your balance is ${account.balance}`)
}

main()
```
</details>

## Explanation of ATM project with unit testing 

- main thing that we're going to create unit tests inside Account.js file 
    - & inside Account.js file , we're only gonna create unit tests for two of the functions i.e for withdraw() & deposit() functions

- `STEP 1` : install `jest` testing library 
    - `STEP 1.1` : run command i.e `npm init -y` for package.json file
    - `STEP 1.2` : then install npm i --save-dev jest
    - `STEP 1.3` : inside package.json file , make a test file 
        ```js
        "scripts": {
            "test": "jest --coverage" // running jest + we also want coverage
        }
        ```
    
- `STEP 2` : so we want to test that Account.js file 
    - so create test file (for Account.js file) as `Account.test.js` inside main folder
    - `STEP 2.1` : inside `Account.test.js` file , create a Boilerplate for those two functions i.e 
        ```js
        describe("#deposit" , () => {
          
        })

        describe("#withdraw" , () => {

        })
        ``` 
    - now testing deposit() function is easy because deposit() function contain only one thing 
      - i.e get the amount & update the balance & then create the account file

    - let's write the pseudo code for testing deposit() function
    - `STEP 2.2` : inside Account.test.js file 
        ```js
        describe("#deposit", () => {
          test("it adds money to the account" , () => {
            // 1. Create an account with a name & balance
            // 2. call the deposit method
            // 3. then check the balance of the account
            // 4. Check the file is correct 
          })
        }) 

        describe("#withdraw", () => {

        })
        ```
      - in 4th pseudo code of #deposit test function 
        - we need to check to make sure that the file got the correct information , it was created correctly 
        - & if we know already that inside of a unit test , we don't want to deal with any side effects or things <br>
          outside of our account module which is what we're testing 
        - so this 4th pseudo code of #deposit test function deals with side effects of creating a file i.e FileSystem <br>
          so we need to mock out all the information related to that FileSystem.write() line of code <br>
          & we don't want to do it inside test file for unit testing 
        - so we need to make fake methods for FileSystem that allow to do & return set information it <br>  
          without actually calling that FileSystem() line of code inside withdraw() & deposit() async functions

- so inside Account.test.js file , first we need to actually mock that's going to be FileSystem like this 
- `STEP 3` : inside Account.test.js file , mocking things which are side effects
  - getting file system from FileSystem.js file 
    ```js
    const FileSystem = require("./FileSystem")

    describe("#deposit", () => {
      test("it adds money to the account" , () => {
        jest.spyOn()
        // 1. Create an account with a name & balance
        // 2. call the deposit method
        // 3. then check the balance of the account
        // 4. Check the file is correct 
      })
    }) 

    describe("#withdraw", () => {

    })
    ```
  - `jest.spyOn()` method 
    - it allows to overwrite the implementation of a method if we want
    - it also allows us to check to see if the method was called with what arguments & so on... 💡💡💡
      
  - jest.spyOn() is really useful for checking to make sure it was called with the right information like file system

  - `STEP 3.1` : inside Account.test.js file , using jest.spyOn() method
      ```js
      const FileSystem = require("./FileSystem")

      describe("#deposit", () => {
        test("it adds money to the account" , () => {
          jest.spyOn(FileSystem, "write")
          // 1. Create an account with a name & balance
          // 2. call the deposit method
          // 3. then check the balance of the account
          // 4. Check the file is correct 
        })
      }) 

      describe("#withdraw", () => {

      })
      ``` 
    - `jest.spyOn(FileSystem, "write")` means spyOn() method (of jest library) takes two arguments  
      - `first` : that thing which we want to spy i.e FileSystem
      - `second` : method of that thing which we want check inside double quotes i.e write method
      - so here we're overwriting `write` method

    - now we want to mock/fake this `jest.spyOn(FileSystem, "write")` to the other result 
      - so inside FileSystem.js file , FileSystem is returning a promise
      - so to fake the information we use mockReturnValue() method

  - `STEP 3.2` : inside Account.test.js file , mocking/faking the information of FileSystem
      ```js
      const FileSystem = require("./FileSystem")

      describe("#deposit", () => {
        test("it adds money to the account" , () => {
          jest.spyOn(FileSystem, "write").mockReturnValue(1)
          console.log(FileSystem.write("asdasdasdf")) // for testing 
          // 1. Create an account with a name & balance
          // 2. call the deposit method
          // 3. then check the balance of the account
          // 4. Check the file is correct 
        })
      }) 

      describe("#withdraw", () => {})
      ```
      - `jest.spyOn(FileSystem, "write").mockReturnValue(1)` means everything we call the jest.spyOn(FileSystem, "write")
        - then whatever the information FileSystem return that output will be overwrite by `1` as a output

      - output : run command `npm test` then we'll get `1` as a output like this 
        ```
        console.log
          1
        ```

    - & inside FileSystem.js file , write() function is returning a resolve() without any value , so 
      ```js
      const FileSystem = require("./FileSystem")

      describe("#deposit", () => {
        test("it adds money to the account" , () => {
          jest.spyOn(FileSystem, "write").mockReturnValue(Promise.resolve()) 
          console.log(FileSystem.write("asdasdasdf")) // for testing 
          // 1. Create an account with a name & balance
          // 2. call the deposit method
          // 3. then check the balance of the account
          // 4. Check the file is correct 
        })
      }) 

      describe("#withdraw", () => {})
      ```
      - `jest.spyOn(FileSystem, "write").mockReturnValue(Promise.resolve())` means
        - this just returns a resolved promise that has no information inside of it 
        - because we're not passing anything to resolve

      - output : run command `npm test` then we'll get promise { undefined } like this 
        ```
        console.log
          Promise { undefined }
        ```
        - means it's a resolved promise that has no value inside of it 

      - so these lines of code is mocking out our file system i.e 💡💡💡 
        ```js
        jest.spyOn(FileSystem, "write").mockReturnValue(Promise.resolve()) 
        console.log(FileSystem.write("asdasdasdf"))
        ```
  
  - `STEP 3.3` : inside Account.test.js file , using toBeCalledWith() method of expect() function
      ```js
      const FileSystem = require("./FileSystem")

      describe("#deposit", () => {
        test("it adds money to the account" , () => {
          const spy = jest.spyOn(FileSystem, "write").mockReturnValue(Promise.resolve()) 
          expect(spy).toBeCalledWith(filePath, balance)
          console.log(FileSystem.write("asdasdasdf")) // for testing 
          // 1. Create an account with a name & balance
          // 2. call the deposit method
          // 3. then check the balance of the account
          // 4. Check the file is correct 
        })
      }) 

      describe("#withdraw", () => {})
      ```
    - `expect(spy).toBeCalledWith(filePath, balance)` means 
      - inside Account.js file , inside async deposit() function , FileSystem.write() take two arguments 
      - that's why we passed filePath & balance inside toBeCalledWith() function
      - `Note` : whatever arguments we passed inside the toBeCalledWith() function , those should be correct & right sequence
        - because if `expect(spy).toBeCalledWith(filePath, balance)` is called with correct parameters 
        - then we always want to just resolve
    - so we're just faking the implementation by always return that Promise.resolve() i.e <br>
      `jest.spyOn(FileSystem, "write").mockReturnValue(Promise.resolve())`
      - then we're saying , just to make sure that we'er still calling that method i.e Promise.resolve() <br> 
        then we wanna check to make sure we called it with correct arguments i.e `expect(spy).toBeCalledWith(filePath, balance)`
      - this is something that if we're dealing with a lot of things like file systems or databases <br>
        then we're gonna deal with inside our unit test because we don't actually want to call that file system in our unit test <br>
        
    - put these lines of code below like this 
        ```js
        const FileSystem = require("./FileSystem")

        describe("#deposit", () => {
          test("it adds money to the account" , () => {
            // 1. Create an account with a name & balance
            // 2. call the deposit method
            // 3. then check the balance of the account
            // 4. Check the file is correct 
            const spy = jest.spyOn(FileSystem, "write").mockReturnValue(Promise.resolve()) 
            expect(spy).toBeCalledWith(filePath, balance)
          })
        }) 

        describe("#withdraw", () => {})
        ```

- now we need to work on first todo i.e Create an account with a name & balance
- `STEP 4` : inside Account.test.js file , working on Create an account with a name & balance
    ```js
    const FileSystem = require("./FileSystem")

    describe("#deposit", () => {
      test("it adds money to the account" , () => {\
        const account = new Account("Teen")
        // 1. Create an account with a name & balance
        // 2. call the deposit method
        // 3. then check the balance of the account
        // 4. Check the file is correct 
        const spy = jest.spyOn(FileSystem, "write").mockReturnValue(Promise.resolve()) 
        expect(spy).toBeCalledWith(filePath, balance)
      })
    }) 

    describe("#withdraw", () => {})
    ```
  - now we can't pass a balance because inside Account.js file , <br>
    only thing we passed inside constructor() function of Account class i.e name 

  - `STEP 4.1` : inside Account.test.js file , working on first pseudo code 
      ```js
      const FileSystem = require("./FileSystem")
      const Account = require("./Account")

      describe("#deposit", () => {
        test("it adds money to the account" , () => {\
          const account = new Account("Teen")
          // 1. Create an account with a name & balance
          // 2. call the deposit method
          // 3. then check the balance of the account
          // 4. Check the file is correct 
          const spy = jest.spyOn(FileSystem, "write").mockReturnValue(Promise.resolve()) 
          expect(spy).toBeCalledWith(filePath, balance)
        })
      }) 

      describe("#withdraw", () => {})
      ```

  - so first pseudo code is done , now let's work on second pseudo code 
  - `STEP 4.2` : inside Account.test.js file , working on second pseudo code i.e call the deposit method
      ```js
      const FileSystem = require("./FileSystem")
      const Account = require("./Account")

      describe("#deposit", () => {
        test("it adds money to the account" , async () => {
          const account = new Account("Teen")
          const amount = 10 // let's say we want to deposit 10 dollars in our account
          await account.deposit(amount)
          // 3. then check the balance of the account
          // 4. Check the file is correct 
          const spy = jest.spyOn(FileSystem, "write").mockReturnValue(Promise.resolve()) 
          expect(spy).toBeCalledWith(filePath, balance)
        })
      }) 

      describe("#withdraw", () => {})
      ```
    - `await account.deposit(amount)` we used await keyword because it's a asynchronous function
      - & we made callback function of test() function as async

  - `STEP 4.3` : inside Account.test.js file , working on third & fourth pseudo code i.e checking the balance of the account
      ```js
      const FileSystem = require("./FileSystem")
      const Account = require("./Account")

      describe("#deposit", () => {
        test("it adds money to the account" , async () => {
          const account = new Account("Teen")
          const amount = 10 
          const spy = jest.spyOn(FileSystem, "write").mockReturnValue(Promise.resolve()) 

          await account.deposit(amount)
          expect(account.balance).toBe(amount)
          expect(spy).toBeCalledWith(filePath, balance)
        })
      }) 

      describe("#withdraw", () => {})
      ```
    - `Note` : we should make sure that `spy` should be created before doing anything 

    - output : run command `npm test` & then we'll get an error 
      - it expected `10` but we received NaN
      - because "Teen" account doesn't have any balance to add value 

    - so inside Account.js file , `#balance` variable is private variable , so we can't manually set it 
      - so we need to mock/fake the setting of that `#balance` private variable
    - & even we can see inside Account.js file , there is a `static async find()` function <br>
      which creates a new account based on the name & that account will be load through `async #load` function <br>
      & that `async #load` function is returning the balance after reading from file system 💡💡💡
      - so we need to mock/fake that file system again 

  - `STEP 4.4` : inside Account.test.js file , create a helper function 
      ```js
      const FileSystem = require("./FileSystem")
      const Account = require("./Account")

      describe("#deposit", () => {
        test("it adds money to the account" , async () => {
          const account = createAccount("Teen", 0)
          const amount = 10 
          const spy = jest.spyOn(FileSystem, "write").mockReturnValue(Promise.resolve()) 

          await account.deposit(amount)
          expect(account.balance).toBe(amount)
          expect(spy).toBeCalledWith(filePath, balance)
        })
      }) 

      describe("#withdraw", () => {})

      async function createAccount(name, balance) {
        const spy = jest.spyOn(FileSystem, "read").mockReturnValueOnce(Promise.resolve(balance)) 
        // inside this we need to create a brand new account
        const account = await Account.find(name)

        return account
      }
      ```
    - `const spy = jest.spyOn(FileSystem, "read")` here we used "read" because inside Account.js file 
      - inside `#load()` function , file system is using read() method  
    - `.mockReturnValueOnce(Promise.resolve(balance))` method means return a value only one time <br>
      because we don't want to fake that "read" more than just one time
    - & this is hacky way because access `#balance` private variable indirectly 

    - output : run command `npm test` & we'll get an error i.e account.deposit is not a function
      - & it means when we're calling `createAccount("Teen", 0)` , we're not getting this account
      - because `createAccount("Teen", 0)` is a async function that's why 

    - `STEP 4.4.1` : inside Account.test.js file , making that `createAccount("Teen", 0)` as async function
        ```js
        const FileSystem = require("./FileSystem")
        const Account = require("./Account")

        describe("#deposit", () => {
          test("it adds money to the account" , async () => {
            const account = await createAccount("Teen", 0)
            const amount = 10 
            const spy = jest.spyOn(FileSystem, "write").mockReturnValue(Promise.resolve()) 

            await account.deposit(amount)
            expect(account.balance).toBe(amount)
            expect(spy).toBeCalledWith(filePath, balance)
          })
        }) 

        describe("#withdraw", () => {})

        async function createAccount(name, balance) {
          const spy = jest.spyOn(FileSystem, "read").mockReturnValueOnce(Promise.resolve(balance)) 
          // inside this we need to create a brand new account
          const account = await Account.find(name)

          return account
        }
        ```

    - output : now run the command `npm test` then again we'll get an error i.e filePath is not defined 
      - means we need to change these arguments of this code i.e `expect(spy).toBeCalledWith(filePath, balance)`
         
    - `STEP 4.4.2` : inside Account.test.js file , passing correct arguments inside `expect(spy).toBeCalledWith()`
        ```js
        const FileSystem = require("./FileSystem")
        const Account = require("./Account")

        describe("#deposit", () => {
          test("it adds money to the account" , async () => {
            const account = await createAccount("Teen", 0)
            const amount = 10 
            const spy = jest.spyOn(FileSystem, "write").mockReturnValue(Promise.resolve()) 

            await account.deposit(amount)
            expect(account.balance).toBe(amount)
            expect(spy).toBeCalledWith(account.filePath, amount)
          })
        }) 

        describe("#withdraw", () => {})

        async function createAccount(name, balance) {
          const spy = jest.spyOn(FileSystem, "read").mockReturnValueOnce(Promise.resolve(balance)) 
          const account = await Account.find(name)

          return account
        }
        ```

    - output : now run the command `npm test` , we'll get output like this 
      ```
      #deposit
        ✔️ it adds money to the account
      ```

- now there's one problem with this i.e we're setting our account to zero to start with but this could lead to a bug
  - Eg : inside Account.js file , our code isn't actually taking into account like 
- `STEP 5` : inside Account.js file , 
    - inside `async deposit()` function , 
      - change this line code i.e `this.#balance = this.#balance + amount` into this `this.#balance = amount` 
    
  - `STEP 5.1` : & then inside Account.test.js file , add initial value with new value 
      ```js
      const FileSystem = require("./FileSystem")
      const Account = require("./Account")

      describe("#deposit", () => {
        test("it adds money to the account" , async () => {
          const startingBalance = 5
          const amount = 10 
          const account = await createAccount("Teen", startingBalance)
          const spy = jest.spyOn(FileSystem, "write").mockReturnValue(Promise.resolve()) 

          await account.deposit(amount)
          expect(account.balance).toBe(amount + startingBalance)
          expect(spy).toBeCalledWith(account.filePath, amount + startingBalance)
        })
      }) 

      describe("#withdraw", () => {})

      async function createAccount(name, balance) {
        const spy = jest.spyOn(FileSystem, "read").mockReturnValueOnce(Promise.resolve(balance)) 
        const account = await Account.find(name)

        return account
      }
      ```
    - output : now run the command `npm test` & then we'll get an error i.e Expected: 15 but Received: 10
  
  - now inside `async deposit()` function , change this line code i.e `this.#balance = amount` <br>
    into this again `this.#balance = this.#balance + amount` 

- now there's actually one sight problem i.e `const spy = jest.spyOn(FileSystem, "write").mockReturnValue(Promise.resolve())`
  - when we create this mocks/fake through spnOn() then they persist forever until we actually clear out that spot <br>
    which means even when we run a different test then that `spy` variable still going to contain all that information <br>
    i.e that `file system & "write"`
  - eg : let's see whether that `spy` variable still contain all that information i.e `file system & "write"` or not 
  - `STEP 6` : inside Account.test.js file 
      ```js
      const FileSystem = require("./FileSystem")
      const Account = require("./Account")

      describe("#deposit", () => {
        test("it adds money to the account" , async () => {
          const startingBalance = 5
          const amount = 10 
          const account = await createAccount("Teen", startingBalance)
          const spy = jest.spyOn(FileSystem, "write").mockReturnValue(Promise.resolve()) 

          await account.deposit(amount)
          expect(account.balance).toBe(amount + startingBalance)
          expect(spy).toBeCalledWith(account.filePath, amount + startingBalance)
        })

        test("test", () => { // doing testing 
          const spy = jest.spyOn(FileSystem, "write")
          expect(spy).not.toBeCalled()
        })
      }) 

      describe("#withdraw", () => {})

      async function createAccount(name, balance) {
        const spy = jest.spyOn(FileSystem, "read").mockReturnValueOnce(Promise.resolve(balance)) 
        const account = await Account.find(name)

        return account
      }
      ```
    - output : run command `npm test` & then that test will be failed because 
      - that previous `spy` variable is keeping the track of previous information when we're spying first time <br>
        i.e "accounts/Teen.txt" , 15

    - so we need to clear out previous information from the spy , so we use `mockRestore() method of spy` 💡💡💡

    - `STEP 6.1` : inside Account.test.js file , clearing out previous information from the spy by using `mockRestore()` method
        ```js
      const FileSystem = require("./FileSystem")
      const Account = require("./Account")

      describe("#deposit", () => {
        test("it adds money to the account" , async () => {
          const startingBalance = 5
          const amount = 10 
          const account = await createAccount("Teen", startingBalance)
          const spy = jest.spyOn(FileSystem, "write").mockReturnValue(Promise.resolve()) 

          await account.deposit(amount)
          expect(account.balance).toBe(amount + startingBalance)
          expect(spy).toBeCalledWith(account.filePath, amount + startingBalance)
          spy.mockRestore() // clearing out the previous information from the spy
        })

        test("test", () => { // doing testing 
          const spy = jest.spyOn(FileSystem, "write")
          expect(spy).not.toBeCalled()
        })
      }) 

      describe("#withdraw", () => {})

      async function createAccount(name, balance) {
        const spy = jest.spyOn(FileSystem, "read").mockReturnValueOnce(Promise.resolve(balance)) 
        const account = await Account.find(name)

        return account
      }
      ```
    - output : now run the command `npm test` & we'll get the output 

    - but for after every single spy inside the each test becomes difficult , so we can use built in `beforeEach()` function 💡💡💡
    - `STEP 6.2` : inside Account.test.js file , using beforeEach() function to remove the previous information of spy
      - instead of calling mockRestore() again & again after each spy inside each test
        ```js
        const FileSystem = require("./FileSystem")
        const Account = require("./Account")

        beforeEach(() => {
          jest.restoreAllMocks() // this will run for every single mock that we have created
        })

        describe("#deposit", () => {
          test("it adds money to the account" , async () => {
            const startingBalance = 5
            const amount = 10 
            const account = await createAccount("Teen", startingBalance)
            const spy = jest.spyOn(FileSystem, "write").mockReturnValue(Promise.resolve()) 

            await account.deposit(amount)
            expect(account.balance).toBe(amount + startingBalance)
            expect(spy).toBeCalledWith(account.filePath, amount + startingBalance)
            spy.mockRestore() 
          })

          test("test", () => { 
            const spy = jest.spyOn(FileSystem, "write")
            expect(spy).not.toBeCalled()
          })
        }) 

        describe("#withdraw", () => {})

        async function createAccount(name, balance) {
          const spy = jest.spyOn(FileSystem, "read").mockReturnValueOnce(Promise.resolve(balance)) 
          const account = await Account.find(name)
          spy.mockRestore()
          return account
        }
        ```
      - `beforeEach(() => { jest.restoreAllMocks() })` means it will for every single mocks that we have created inside tests

      - remove the `const { expect , beforeEach , jest } = require("@jest/globals")` which is added by vscode intellisense

      - output : run command `npm test` & that test wil be passed

    - `Note` : anywhere that we see `spy` variable doesn't leak out into the rest of our test 
      - so `spy` should be only inside function not outside the function or test
      - & use the `spy.mockRestore()` after spy

- now let's work on withdraw test
  - with withdraw , we can do two things , so first is we can have successful withdraw 
  - & second is unsuccessful withdraw (means we don't have enough money for withdraw)
- `STEP 7` : inside Account.test.js file , working on withdraw test
    ```js
    const FileSystem = require("./FileSystem")
    const Account = require("./Account")

    beforeEach(() => {
      jest.restoreAllMocks() 
    })

    describe("#deposit", () => {
      test("it adds money to the account" , async () => {
        const startingBalance = 5
        const amount = 10 
        const account = await createAccount("Teen", startingBalance)
        const spy = jest.spyOn(FileSystem, "write").mockReturnValue(Promise.resolve()) 

        await account.deposit(amount)
        expect(account.balance).toBe(amount + startingBalance)
        expect(spy).toBeCalledWith(account.filePath, amount + startingBalance)
        spy.mockRestore() 
      })

      // we have removed that temporary test
    }) 

    describe("#withdraw", () => {
      test("it removes money to the account" , async () => {
        const startingBalance = 10
        const amount = 5 
        const account = await createAccount("Teen", startingBalance)
        const spy = jest.spyOn(FileSystem, "write").mockReturnValue(Promise.resolve()) 

        await account.withdraw(amount)
        expect(account.balance).toBe(startingBalance - amount)
        expect(spy).toBeCalledWith(account.filePath, startingBalance - amount)
        spy.mockRestore() 
      })
    })

    async function createAccount(name, balance) {
      const spy = jest.spyOn(FileSystem, "read").mockReturnValueOnce(Promise.resolve(balance)) 
      const account = await Account.find(name)
      spy.mockRestore()
      return account
    }
    ```
  - output : run command `npm test` & all the tests will be passed

  - now next thing is that we need to test for withdraw with failure case
  - `STEP 7.1` : inside Account.test.js file , working for withdraw with failure case
      ```js
      const FileSystem = require("./FileSystem")
      const Account = require("./Account")

      beforeEach(() => {
        jest.restoreAllMocks() 
      })

      describe("#deposit", () => {
        test("it adds money to the account" , async () => {
          const startingBalance = 5
          const amount = 10 
          const account = await createAccount("Teen", startingBalance)
          const spy = jest.spyOn(FileSystem, "write").mockReturnValue(Promise.resolve()) 

          await account.deposit(amount)
          expect(account.balance).toBe(amount + startingBalance)
          expect(spy).toBeCalledWith(account.filePath, amount + startingBalance)
          spy.mockRestore() 
        })
      }) 

      describe("#withdraw", () => {
        test("it removes money to the account" , async () => {
          const startingBalance = 10
          const amount = 5 
          const account = await createAccount("Teen", startingBalance)
          const spy = jest.spyOn(FileSystem, "write").mockReturnValue(Promise.resolve()) 

          await account.withdraw(amount)
          expect(account.balance).toBe(startingBalance - amount)
          expect(spy).toBeCalledWith(account.filePath, startingBalance - amount)
          spy.mockRestore() 
        })

        describe("with not enough money in the account", () => {
          // inside this test we wrote message for error because inside Account.js file 
          // we're throwing an error inside async withdraw() function
          test("it should throw an error", async () => { 
            const startingBalance = 5
            const amount = 10 // we want ot withdraw 10 but we have balance 5
            const account = await createAccount("Teen", startingBalance)
            const spy = jest.spyOn(FileSystem, "write") 

            // here we used expect() function because we know that we'll get an error 
            expect(await account.withdraw(amount)).toThrow()
            expect(account.balance).toBe(startingBalance)
            expect(spy).not.toBeCalledWith()
          })
        })
      })

      async function createAccount(name, balance) {
        const spy = jest.spyOn(FileSystem, "read").mockReturnValueOnce(Promise.resolve(balance)) 
        const account = await Account.find(name)
        spy.mockRestore()
      }
      ```
    - output : run command `npm test` & we'll still get an error because instead of putting await keyword 
      - inside expect() function we need to outside before the expect() function like this

  - `STEP 7.2` : inside Account.test.js file , putting await keyword before the expect() function  
      ```js
      const FileSystem = require("./FileSystem")
      const Account = require("./Account")

      beforeEach(() => {
        jest.restoreAllMocks() 
      })

      describe("#deposit", () => {
        test("it adds money to the account" , async () => {
          const startingBalance = 5
          const amount = 10 
          const account = await createAccount("Teen", startingBalance)
          const spy = jest.spyOn(FileSystem, "write").mockReturnValue(Promise.resolve()) 

          await account.deposit(amount)
          expect(account.balance).toBe(amount + startingBalance)
          expect(spy).toBeCalledWith(account.filePath, amount + startingBalance)
          spy.mockRestore() 
        })
      }) 

      describe("#withdraw", () => {
        test("it removes money to the account" , async () => {
          const startingBalance = 10
          const amount = 5 
          const account = await createAccount("Teen", startingBalance)
          const spy = jest.spyOn(FileSystem, "write").mockReturnValue(Promise.resolve()) 

          await account.withdraw(amount)
          expect(account.balance).toBe(startingBalance - amount)
          expect(spy).toBeCalledWith(account.filePath, startingBalance - amount)
          spy.mockRestore() 
        })

        describe("with not enough money in the account", () => {
          // inside this test we wrote message for error because inside Account.js file 
          // we're throwing an error inside async withdraw() function
          test("it should throw an error", async () => { 
            const startingBalance = 5
            const amount = 10 // we want ot withdraw 10 but we have balance 5
            const account = await createAccount("Teen", startingBalance)
            const spy = jest.spyOn(FileSystem, "write") 

            // here we used expect() function because we know that we'll get an error 
              // so if promise gives an error then we'll reject & throw an error 
            await expect(account.withdraw(amount)).rejects.toThrow() 
            expect(account.balance).toBe(startingBalance)
            expect(spy).not.toBeCalledWith()
          })
        })
      })

      async function createAccount(name, balance) {
        const spy = jest.spyOn(FileSystem, "read").mockReturnValueOnce(Promise.resolve(balance)) 
        const account = await Account.find(name)
        spy.mockRestore()
        return account
      }
      ```
    - output : run the command `npm test` & all the tests will be passed

- `Note for await expect(account.withdraw(amount)).rejects.toThrow()`
  - we didn't put await keyword inside expect() function like this `expect(await account.withdraw(amount)).rejects.toThrow()`
  - because await will wait for rejects but it will not wait for toThrow() function that's why it'll be exit out 
  - that's why we put `await` keyword outside & before the expect() function 

## said by kyle 

- one down side of unit test is that unit testing becomes messy when there are many mocking which is not good 
