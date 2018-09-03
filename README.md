# Symfony 4 with React JS
## Installation Reference

```
https://www.modernjsforphpdevs.com/react-symfony-4-starter-repo/
```

## Render Multiple Component

```
var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .addEntry('app', './assets/js/app.js')

// add second entry.
    .addEntry('second', './assets/js/second.js')
    .enableReactPreset();

module.exports = Encore.getWebpackConfig();
```

## Structure
```
.
├── ...
├── assets          
│   ├── js               # main component files.
│      ├── components    # other components.
|      ├── app.js        # first main .js file
|      ├── second.js     # second main .js file
|        
│           
└── ..
```
