---
title: React.js
lang: en-US
date: 2016-07-15
description: The React.js Framework
---

::: warning
A bit dated. Looked at first-half 2016 maybe?
:::

> An introduction to the React client-side web framework

React is a simple composable components library and doesn't mandate how to do routing, data flow etc
in MVC terms React covers the View and the Controller parts (ControllerViews).

* Fast and scalable
* Small - few concepts
* Composable via nested components
* Pluggable to existing apps (View Layer)
* Universal JS => Isomorpic friendly components => Render on both client and server
* Battle Proven by well known companies


## React Concepts

* JSX (Markup in JavaScript as opposed to JavaScript in markup)
* Virtual DOM - Minimizes expensive DOM updates
* Isomorphic rendering - both client and server
* Unidirectional data flows with Flux or Redux - No two-way data binding

> HTML should be a projection of application state, not a source of truth


## Components

React forces you to architect your UIs in terms of reusable components. They are the building blocks that make up your app. Compose your UI by using components and sub-components.

The UI will express the current state of your components.

Encourages good structure, usability, modularity for improved changeability...

Parents pass down state to subcomponents

Component data is held in either immutable properties passed from a parent component `this.props.username` or in mutable state `this.state.username`. Strive to only use state in controller views.

* getInitialstate is used to set the intial state for your component.
* getDefaultProps can be used to set initial values for properties (if no value is passed via parent)


> In React the render fuction can only return a single top-level element.

### Container (smart, stateful) Components
* Also called Controller View Components
* Little to no markup
* Passing data and actions to children
* Knows about Flux/Redux
* Typically Stateful

```javascript
var HelloWorld = React.createClass({
    render: function () {
        return (
            <h1>Hello World</h1>
        );
    }
});
```

### Presentation (dumb, stateless) Components
* Also called View Components
* Nearly all markup
* Receive data and actions via props
* Knows nothing about Flux/Redux
* Typically stateless functional components
*

```javascript
var HelloWorld = function (props) {
    return (
        <h1>Hello World</h1>
    );
};
```

## Virtual DOM

Constantly chaning the DOM, like SPAs often do, requires a lot of processing and causes frequent expensive re-renders in the browser.

The virtual DOM (VDOM) is an internal structure in React mimicing the browser DOM (BDOM). React uses the VDOM for comparing to the BDOM. Changes to the VDOM are fast as they require no re-rendering in the browser. React then uses a diffing algorithm to compare the two and calculates the most efficient way of transforming the DOM to match the VDOM (DOM diffing).

Building React components means building a virtual DOM. React then makes the necessary changes to the DOM in an efficient way. Changing the VDOM is very inexpensive compared to changing the browser DOM. You also have some control wether a component should update on changing state by implementing the `shouldComponentChange` method.


## JSX

JSX fails fast and loudly. Easier debugging
JSX is an abstraction over plain JavaScript calls and is optional.
JSX syntax is mostly HTML with some differences where there would be naming problems (class => className).
Browsers doesn't understand JSX so it needs to be transpiled to JavaScript. React will use the transpiled JSX for building the DOM. You can try JSX and see what it generates on the [React homepage](https://facebook.github.io/react/). You can use [Babel](http://babeljs.io), [Browserify](http://browserify.org/) or [Webpack](https://webpack.github.io/).


```javascript
'use strict'

var React = require('react');

var aboutPage = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1>About</h1>
                <p>This is the about page</p>
             </div>
        );
    }
});

module.exports = AboutPage;
```

## Component Lifecycle Methods

* componentWillMount - Runs before initial render and is a good place to set initial state
* componentDidMount - Runs after render when DOM is ready. Used when you need to access the DOM like integrating with 3rd party libs, set timers and do AJAX requests.
* componentWillReceiveProps - When receiving new props. Not called on initial render. This is where you would set component state before the next render.
* shouldComponentUpdate - Runs before render and when changed props or state is received. Not called on initial render. This is the place where you can avoid unnecessary renders.
* componentWillUpdate - Runs before render and when changed props or state is received. Not called on initial render. Prepare for update but cannot set state.
* componentDidUpdate - Runs after component updates have been flushed to the DOM.
* componentWillUnmount - Runs just before component is removed from the DOM. Used for cleanup.

### Keys

You may need to declare a key for dynamic child elements so React can keep count of what needs to be changed.

```
<tr key={author.id}>...
```

## Development Setup

Do the following tasks with a single command:

* Linting (ESlint)
* Bundling (Webpack)
* JSX compilation (Babel)
* ES6 transpilation (Babel, babel-polyfill)
* Minification
* Automated Testing (mocha)

If you want hot reloading have a look at React Hot Loader or the babel-preset-react-hmre package.


