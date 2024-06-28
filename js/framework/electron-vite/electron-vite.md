

# electron-vite

###### Reference [electron-vite](https://electron-vite.org/)

| issue      | description | anchor                            |
|------------|-------------|-----------------------------------|
| vue router | blank page  | [vue router](#issue-1-vue-router) |



##### issue 1: vue router

###### Version

| ---            | ---         | ---                | ---                   |
|----------------|-------------|--------------------|-----------------------|
| node: v20.13.1 | npm: 6.14.8 | vue-router: ^4.4.0 | electron-vite: ^2.3.0 |

###### Description

When using vue-router in electron-vite, the page is blank.

###### Solution

```javascript
// router/index.js 
// use createWebHashHistory
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})
```


```javascript
// router/index.js
// change import component like this
component: () => import('../layout/MainLayout.vue'),
```










