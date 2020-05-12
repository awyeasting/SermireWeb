# Sermire Web
Repository for the Sermire website using Vuejs and npm.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Deploy to Production

Before building, set 
```js
Vue.config.productionTip = true
```
in src/main.js. Then run
```
npm run build
```
And copy files in the ```dist/``` directory to wherever the site is being hosted. Make sure to enable fallback to ```index.html``` for all requests using whatever service is being used to host the directory. This is required due to the routing mode being set to ```history```. If this is not done then all requests to the server will result in a 404 response.