# The Event Loop in Practice

- just doing simple example to understand the event loop

## Example 

- Eg : using synchronous & asynchronous code
    ```js
    console.log('Test start');
    setTimeout(() => console.log('0 sec timer'), 0);
    Promise.resolve('Resolved promise 1').then(res => console.log(res));
    console.log('Test end');
    /* output : Test start
                Test end
                Resolved promise 1
                0 sec timer
    */      
    ```
    - those code which are top level code means which are outside the callback function will get executed first step by step
    - now let's say timer & promise finishes at the exact same time <br>
        because we said timer will execute at 0 second & promise will immediately resolve <br>
        that's why both will finish at the exact same time 
    - now which one will get handle/execute first means which of these two callbacks will be executed first <br>
        so that timer appears/finish first , so it's callback will be put on the callback queue first <br> 
        but it's callback will not executed first because micro-tasks queue has higher priority than callback queue 💡💡💡 
        - so the callback of the resolved promise will be put on the micro-tasks queue <br>
            & the callback of the timer will go in a callback queue 💡💡💡
        - & micro-tasks queue has higher priority than callback queue <br>
            that's why the callback function which is inside the micro-tasks queue , <br>
            will go first inside the call stack & it'll be executed first 💡💡💡
        - & now when `call stack` gets empty then again `event loop` take the first callback function from the callback queue <br> 
            & putted inside the `call stack` & it's also executed 💡💡💡

    - if a promise is taking a time to execute then that timer will not be executed even if the timer is defined for 0 second

- Eg : using synchronous & asynchronous code ✅
    ```js
    console.log('Test start');
    setTimeout(() => console.log('0 sec timer'), 0);
    Promise.resolve('Resolved promise 1').then(res => console.log(res));
    Promise.resolve('Resolved promise 2').then(res => {
        for (let i = 0; i < 1000000000; i++) {}
        console.log(res)
    })
    console.log('Test end');
    /* output : Test start
                Test end
                Resolved promise 1
                Resolved promise 2
                0 sec timer
    */      
    ```
    - from this example , we want to tell you that if even that timer is taking 0 second <br>
        then it'll not be executed until the promise not finishes it's execution , <br>
        doesn't matter how much the time that promise is taking to execute 💡💡💡
