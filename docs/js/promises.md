---
title: Promises
lang: en-US
description: JavaScript promises
---

A Promise is a JavaScript object containing methods that allow you to execute asynchronous code using  a synchronous-looking syntax. They serve the same purpose as callback functions but are composable which makes them more powerful as well as providing a more readable syntax. You avoid the so called [callback hell](http://callbackhell.com/).

> A Promise is an object representing the eventual completion or failure of an asynchronous operation.

## Promisifying functions

```javascript
const fetch = (url) => {
    return new Promise((resolve, reject) => {
        request((error, apiResponse) => {
            if (error) {
                reject(error);
            }

            resolve(apiResponse)
        });
    });
};
```

## Promisifying values

You can use the `Promise.resolve()`and `Promise.reject()` functions to "promisify" values returned. It's good practice to return an Error object in the reject callback.

```javascript
const readFile (name) => {
    if (!name) {
        return Promise.reject(new Error("No filename specified"));
    }

    if (name === "todo.txt") {
        return Promise.resolve("Write promise");
    }

    return new Promise((resolve, reject) => {
        ...
    });
};
```

## Running in parallel

A promise chain one after the other but  sometimes you mav be able to run in parallel. You can use the `Promise.all()` function for that. It takes a list of promises and will run it's .then() function when all the promises are completed or it's `.catch()`function if any of them fail.

```javascript
const files = ['index.html', 'blog.html', 'terms.html'];

Promise.all(files.map(readFile))
    .then(files => {
        console.log('index:', files[0]);
        console.log('blog:', files[1]);
        console.log('terms:', files[2]);
    });
```

## Resources

* [MDN Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [The Q library](https://github.com/kriskowal/q)
* [Bluebird](http://bluebirdjs.com/docs/getting-started.html).
* [MDN Using Promises page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
* [ES6 Promise patterns and antipatterns](https://medium.com/datafire-io/es6-promises-patterns-and-anti-patterns-bbb21a5d0918)


