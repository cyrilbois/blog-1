The [Vue router](https://router.vuejs.org/en/) is a separate library for rouuting Vue SPAs. It's maintained by the core Vue team.

## Install

If using a webpack setup install it via `npm install vue-router`. If you're using direct download you can find it [here](https://unpkg.com/vue-router@3.0.1/dist/vue-router.js)

## Usage

Using the Vue router is very straight forward. Basically you map your components to routes and let vue-router know where to render them.

### Declaring Routes

```javascript
const routes = [
    { path: '', component: Home },
    { path: '/user', component: User }
]
```

### Initializing Router

The vue-router can be initialized to use hash-mode (default) or history-mode. To use history mode the backend needs to be configured to always return the index page. You can find more info [here](https://router.vuejs.org/en/essentials/history-mode.html)

```javascript
const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
```

## Navigating

You can navigate using a path string or using a route name if you have assigned a name.

> Navigating from a component to the same type of componens (say only with different param) does not recreate the component which may lead to some problems with it's data content. You can watch the route params to address these kinds of issues. As of vue-router 2.2 you can bind your route params to props on the target component which eliminates the need to watch for $route changes. Check this [sample](https://github.com/vuejs/vue-router/tree/dev/examples/route-props)

### In Template

```html
<template>
    <ul class="nav nav-pills">
        <router-link tag="li" active-class="active" exact to="/"><a>Home</a></router-link>
        <router-link tag="li" active-class="active" to="/user"><a>User</a></router-link>
    </ul>
</template>

```

### In Code

```javascript
this.$router.push('/');
this.$router.push({path: '/'});
```

## Route Params

```javascript
const routes = [
    { path: '', component: Home },
    { path: '/user/:id', component: User }
]

this.$route.params.id
```
## Childroutes

```javascript
const routes = [
    { path: '', component: Home },
    {
        path: '/user',
        component: User,
        children: [
            { path: '', component: UserList },
            { path: ':id', component: UserDetail },
            { path: ':id/edit', component: UserEdit }
        ]
    }
]
```

Path without a starting slash will be appended to the parent path.
