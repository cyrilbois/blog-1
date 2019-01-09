---
title: Hapi.js
lang: en-US
date: 2019-01-01
description: Basic information regarding the Hapi.js node framework
---

## What?

[hapi](http://hapijs.com/) is an Open Source Web Application Framework for Node.js developed by a team at Walmart Labs lead by Eran Hammer. Hapi is used by companies like PayPal, Yahoo, Disney, macys, Mozilla and npm. It prefers configuration over code.

> hapi was created around the idea that configuration is better than code, that business logic must be isolated from the transport layer, and that native node constructs like buffers and streams should be supported as first class objects. But most importantly, it was created to provide a modern, comprehensive environment in which as much of the effort is spent delivering business value

-- Eran Hammer (creator of hapi)

## Hello World Server

To create a hapi project create a project folder and run the usual `npm init -y` and `npm i hapi`. Then create the following server.js file:

```js
const Hapi = require('hapi')

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
})

server.route({
  method: 'GET',
  path: '/',
  handler: () => 'Hello, world!'
})

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
})

init()
```

To run it open a CLI in your peoject folder and run `node server.js`, then browse to http://localhost:3000.

```bash
node server
```

To learn more basics have a look at the official [tutorials](https://hapijs.com/tutorials).

## Server API

In hapi everything starts with the server. The server object inherits the Node.js Event.EventEmitter class. I have to admit I've always found the [API Documentation](https://hapijs.com/api) a bit confusing in how it is structured but it contains all the info on the Server objects properties, methods and events etc.

## Routing

### Config

### Handlers

### Route Prerequisites

Allows you to perform some action before the route handler is called, like loading required data from a db, read a file, etc. Route Prerequisites can be executed in serial or parallel modes. They can also be used in combination with server models which makes them really powerful.


## The Request Object

Internally created object for each incoming request. [API Docs](https://hapijs.com/api#request)

There's a huge amount of different [request properties](https://hapijs.com/api#request-properties).

* request.auth - isAuthenticated, credentials
* request.headers - contains parsed http headers
* request.info - hostname, port, IP, referrer...
* request.params - holds the path params as key/values
* request.payload - contains parsed body payload
* request.pre - contains data from route prerequisites
* request.query - contains the query params

You can also log directly using the log method `request.log([tags], data)`.

### The Request Lifecycle

In hapi an http request transforms into a request object. The request lifecycle is what happens between from the point where hapi receives a standard http request until it has fully transformed into a hapi request object.

The framework hides a lot of the complexities in handling a raw http request and provides hooks to extension points . Extension points are predefined points in the request lifecycle where you can provide custom logic to tweak the standard behavior if needed. They can be used to rewrite requests, add custom headers, logging, block IP ranges and more. See more in the [API docs](https://hapijs.com/api#request-lifecycle).


### The Response Toolkit

* [Response Toolkit](https://hapijs.com/api#response-toolkit)

You can just return text or an object. Alternatively you can fetch a response object that can be manipulated before returning it.

```js
server.route({
  method: 'GET',
  path:'/',
  handler: (request, h) => {
    return 'Hello World!'
    // Alternative way to respond:
    const response = h.response('Hello World!')
    response.code(200);
    response.header('Content-Type', 'text/plain');
    return response;
  }
})
```

## Plugins

[Plugins](https://hapijs.com/api#plugins) are one of the grteat features of Hapi for organizing code in larger projects.

### Consuming a Plugin



### Creating a Pluging

```js
const name = 'myplugin'
const version = '1.0.0'

const register = server => {
  server.log('info', `Registering plugin ${name} v.${version}`)

  // magic happens here

}

exports.plugin = { register, name, version }
```

### Useful Plugins

* [Boom](https://github.com/hapijs/boom) for friendly error messages
* [Glue](https://github.com/hapijs/glue) for composing servers
* [Good](https://github.com/hapijs/good) for logging
* [Hoek](https://github.com/hapijs/hoek) is a general purpuse utility functions library
* [Inert](https://github.com/hapijs/inert) provides static file and folder handling
* [Joi](https://github.com/hapijs/joi) for validating input/output
* [Nes](https://github.com/hapijs/nes) is a WebSocket adapter plugin for hapi routes
* [Vision](https://github.com/hapijs/vision) provides template rendering support
* [Wreck](https://github.com/hapijs/wreck) for HTTP client calls


* [hapi-swagger](https://github.com/glennjones/hapi-swagger) - Swagger doc for APIs
* [hapi-auth-jwt2](https://www.npmjs.com/package/hapi-auth-jwt2) - JWT Authorization
* [hapi-error](https://github.com/dwyl/hapi-error) - friendly error page or JSON response

Also have a look at the [Plugin section of the Hapi.js website](https://hapijs.com/plugins) and [The extended hapi universe](https://hapijs.com/plugins#The%20extended%20hapi%20universe)


## Resources

* [GoThinkster Real World Example](https://github.com/gothinkster/hapijs-realworld-example-app)
* [Hapi Coding Conventions](https://hapijs.com/styleguide)
* [Future Studio](https://futurestud.io) has the best content I've found on Hapi. Some of it is behind paid service.
* [Future Studio - Node tutorials repo](https://github.com/fs-opensource/nodejs-tutorials-hapi)
* [hapi.js in Action book repo](https://github.com/mtharrison/hapi.js-in-action)

