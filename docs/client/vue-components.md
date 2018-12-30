---
title: Vue Components
date: 2017-09-01 21:41:30
description: Vue.js Components
---

Components allow reuse and encapsulation similar to OOP.

You create a new component by calling the Vue.component() method passing in a name and an object literal same as you would for your application instance. You should use a prefix like 'app-' or 'my-' or similar so as to not override some existing component name you might be using.

```html
<div id="app">
  <my-cmp></my-cmp>
</div>

Vue.component('my-cmp', {
  data: function () {
    return {
      title: 'Hello Component'
    }
  },
  template: '<p>{{ title }}</p>'
});

new Vue({
  el: '#app'
});
```

The difference is that in components the data property is a function returning the data object as not to interfere with the app's data properties. You still access data properties via the this keyword though. You could define the data object outside of the component declaration but that can easily lead to components sharing state.

## Local vs Global Components

The `Vue.component()` function registers components globally. To create components only visible to a certain Vue instance you assign a component declaration to a variable and use that variable when registering the component in a Vue instance.

```js
var myCmp = {
  data: function () {
    return {
      title: 'Hello World'
    };
  }
};

new Vue({
  el: '#app',
  components: {
    'my-cmp': myCmp
  }
});
```


