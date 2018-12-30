---
title: Vue Basics
date: 2017-06-17 21:41:30
description: A introduction to Vue.js - A client-side SPA framework.
---

[Vue.js](https://vuejs.org) *(pronounced /vjuː/, like view)* is a JavaScript library for building interactive web interfaces. The goal of Vue.js is to provide the benefits of reactive data binding and composable view components with an API that is as simple as possible. It was created and is maintained by by [Evan You](http://evanyou.me/) a former employee at Google and Meteor.

## Why Vue?

* Vue is feature rich despite small size
* Simplicity - Easy to get going and allows you to use ES5, ES6 or even TypeScript
* Compactness - 16Kb minified and gzipped
* Speed - Great runtime performance
* Versatile - works for small and large projects
* Very good documentation

## Features

* ES5 or ES6 style compatible down to IE8
* Templates using HTML like Angular with Directives
* Reactivity
* 2-way data binding
* Components
* [Vue Router](http://router.vuejs.org/) for routing, [Vuex](https://vuex.vuejs.org/) for state management

## Vue in comparison

* Vue uses HTML templates and directives but supports React-style render methods and JSX.
* You can use build tools and transpilers but you don't have to
* Vue has a small footprint (~26KB minified) so could also be used for simple scenarios. You could for instance replace Bootstrap + jQuery with [VueStrap](http://yuche.github.io/vue-strap/)
* Simple syntax compared to React, also faster


## Installation

Check [here](https://vuejs.org/v2/guide/installation.html)

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
```

Minimal

```js
new Vue({
    el: '#app'
}):
```

* Vue proxies all data properties to make them available via this.
* You cannot have Vue evaluationg expressions fot html attributes i.e. `<a href="{{myLink}}">Link</a>` Use the [v-bind directive](https://vuejs.org/v2/api/#v-bind) instead.

> Avoid writing code in view templates. Use calculated attributes and methods.


## Directives

A [directive](https://vuejs.org/v2/api/#Directives) is an instruction placed in the view template

> Use `v-bind` for binding to html attributes, use `v-on` (@) for listening to events and finally `v-model` for two-way data binding.

| Directive | Shorthand | Sample                 |
| --------- | --------- | -----------------------|
| v-on      | @         | `v-on:click -> @click` |
| v-bind    | :         | `v-bind:href -> :href` |


## Events

[Events](https://vuejs.org/v2/guide/events.html) are a fundamental part for interactions with the user. Vue can intercept most events and allows you to write custom event handlers.

The generic syntax is: `v-on:DOMevent`="methodEventHandler" where DOMevent is any DOM event and methodEventHandler is a function in the methods section of your Vue declaration. Shortcut for v-on is the @ sign.

##### Passing Event Arguments

You can pass arguments to event handler like any other function. If you need access to the original DOM event you can pass it as a param using the special `$event` variable.

##### Modifiers

Vue implements so called [Event Modifiers](https://vuejs.org/v2/guide/events.html#Event-Modifiers) to deal with DOM event details so that you don't have to deal with a lot of similar logic in your event handlers.

Use `event.preventDefault()` and  `event.stopPropagation()` in an event handler to stop default behavior.

[Key modifiers](https://vuejs.org/v2/guide/events.html#Key-Modifiers) provides similar functionality for key events. I.e. `<input type="text" v-on:keyup.enter="alertMe()">`


## Two-Way Data Binding

Two-way data binding means updating a variable with the value from a UI element when it changes and vice-versa. Vue uses the `v-model` directive for doing these kinds of bindings. You can find more info on form input bindings [here](https://vuejs.org/v2/guide/forms.html)


## Computed Properties

You can data-bind to computed properties and Vue will watch dependencies i.e. computed properties are implemented like functions but used like properties. They are also reactive as opposed to ordinary methods. This means that Vue caches result and watches variables so that the function only is called when necessary. More documentation on [Computed Properties and Watchers ](https://vuejs.org/v2/guide/computed.html). If you know you always want to recalculate when DOM changes you can use an ordinary function.

```js
data: {
	propA: 3,
	probB: 2
},
computed: {
	sumAB: function () {
	    return this.propA * this.propB;
    }
}
```

##### Using the Watch object

In general you should use computer properties instead because they are more optimized. However computed properties need to return immediately meaning you can only do synchronous calls in them. When you need to do an asyncronous call you need to use a watch function.


## Conditionals

v-if adds and removes element and all nested elements from the DOM. Later versions of Vue also have a v-elseif
v-else needs to be attached to sibling following v-if

You can wrap elements inside the non-rendered `<template>` element if you need the `v-if` to apply to multiple sibling elements without introducing an extra `<div>` element.

If you only want to show/hide not add/remove elements you can use the `v-show` element.

## Lists

Vue uses the `v-for` directive to loop enumerables.

```html
<ul>
  <li v-for="item in items">{{item}}</li>
</ul>
```
You can get the index of item as well. It needs to be the second param. If you want to output multiple non-nested elements you can wrap them inside a `<template>`.

```html
<ul>
  <li v-for="(item, i) in items">{{i}}. {{item}}</li>
</ul>
```

You could loop through the properties of an object:

```html
<ul>
  <li v-for="(value, key) in person">{{key}}: {{value}}</li>
</ul>
```

Whenever possible, use a unique key attribute when generating list items.

```html
<div v-for="item in items" v-bind:key="item.id">
	<!-- content -->
</div>
```

## Transitions

Allows us to add effects to UI

* Vue provides a way to apply transitions when items are inserted, updated or removed from the DOM
* Transitions are used in conjunction with directives like v-if v-show etc.
* Transitions use the non-rendering component `<transition>`
* Vue automatically checks for CSS transitions or animations to apply to target element
* Vue applies classes v-enter, v-enter-active, v-leave, v-leave-active
* Giving  transition a name will replace the v with the name i.e. myTrans-enter, myTrans-leave

## The Vue JS instance

The Vue instance acts as the middle man between our business logic and the DOM. Vue instance common properties: `el`, `data`, `methods`, `computed` and `watch`.

A page can contain many Vue instances hooked upp to different elements. A real scenario for this would be when adding some components here and there on an otherwise static page i.e. not typically when building SPAs.

```js
<div id="app1" class="app">
  <h1>{{title}}</h1>
</div>

<div id="app2" class="app">
  <h1>{{title}}</h1>
</div>
...
new Vue({
  el: '#app1',
  data: { title: 'App #1' }
});

new Vue({
  el: '#app2',
  data: { title: 'App #2' }
});
```
The Vue instance can be accessed from outside of the Vue app or from inside another instance if we assign the instances to variables.

```js
var vm1 = new Vue({
  el: '#app',
  data: {title: 'vm1'}
});

setTimeout(function () {
  vm1.title = 'Changed by timer';
}, 3000);

var vm2 = new Vue({
  el: '#app',
  data: {title: 'vm2'}
});
```

In the above sample we can read Vue properties. Although you could also add properties like `vm2.myOtherTitle = '';` they won't be reactive. This is because Vue creates getters and setters in the constructor when called.

| Property | Description                              |
| -------- | ---------------------------------------- |
| `$el`    | A reference to the element where the Vue app was mounted |
| `$data`  | Data is an object holding all our data properties. `(vm1.title === vm1.$data.title)`|
| `$ref`   | Can be used to reference DOM elements    |
| $mount   | Can be used to mount a Vue instance.  Remove el from config and call `vm1.$mount('#app1');`|

```html
<button @click="showInfo" ref="myButton">Info</button>
...
var data = this.$refs.myButton.innerHtml();
```
You can easily read data but beware that writing goes straight to DOM bypassing Vue. If you want to dive deeper read the [guide](https://vuejs.org/v2/guide/instance.html) and the [API Docs](https://vuejs.org/v2/api/).

## Lifecycle Hooks

* Vue instances goes through a series of initialization steps when created
* Sets up data observation, template compilation mount to DOM etc.
* Lifecycle hooks gives us opportunity to execute custom logic at each point
* Hooks include created, mounted, updated, destroyed etc

Check out the [Lifecycle Diagram](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)

```js
var vm = new Vue({
	data: {
	    a: 1
	},
	created: function () {
	    console.log('a is:' + this.a);
	}
});
```

For more info on Vue's reactivity read the [Guide](https://vuejs.org/v2/guide/reactivity.html)

## Filters

* Used to apply common formatting
* Usable in both interpolations and bind expressions
* Appended to the end of an expression denoted by the pipe symbol.


```js
{{message | capitalize}}
```

```html
<div v-bind:id="rawId | formattedId"></div>
```
