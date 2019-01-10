* Compile single-file templates (.vue files)
* Preprocessors es6-> es6, SASS -> CSS
* Transpile, minify, source maps


## Vue-cli

[vue-cli](https://github.com/vuejs/vue-cli) is a node package that allows you to easily create Vue project templates. To install it run `npm install -g vue-cli`.


#### Usage

`vue init <templatename> <project name>`. Example: `vue init webpack-simple myproject`.

The vue-cli will create a working template project in a directory named after the project name given. Go to that folder, run `npm install` and `npm run dev` to open the project in a browser window. The build.js file referenced is memory-only. If you want a production build you would run `npm run build`.

templates

simple - index.html + CDN link. Does not support single file templates.
webpack-simple - Basic Webpack Workflow
webpack
browserify
browserify-simple

## Single File Templates

<div align="right">
<a href="https://vuejs.org/v2/guide/single-file-components.html" target="_blank">Guide</a>
</div>



When not using single-file templates Vue ships with a "compiler" that transforms your html templates into JavaScript code. When using sinle-file templates it is done as part of the transpilation process. This typically reduces the size of the shipped app by a third.

A typical Vue project contains a main.js that contains code to render the main component template in App.vue.  A .vue-file must contain a template and can also contain a script and style section. the script section typically exports a Vue component. You can find more info on the render function in the [Vue guide](https://vuejs.org/v2/guide/render-function.html).

#### Hello World Sample

The sample shows a minimal setup involved to start developing with .vue files.

##### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Hello World</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="/dist/build.js"></script>
  </body>
</html>
```

##### src/main.js

```javascript
import Vue from "vue";
import App from "./App.vue"

new Vue({
    el: "#app",
    render: h => h(App)
});
```

##### scr/App.vue
```html
<template>
    <div id="app">
        <h3>{{title}}</h3>
    </div>
</template>

<script>
export default {
    name: "app",
    data () {
        return {
            title: "Hello World!"
        };
    }
}
</script>
```

## Debugging

There are some useful [devtools](https://github.com/vuejs/vue-devtools) available for debugging Vue apps. First there's a [Chrome extension](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) that is very useful. Secondly, when running a project built by Webpack you should find a webpack folder in your Chrome Developer Tools - Sources tab. If you expand that folder it should contain your source files where you can add breakpoints etc.