# Particular attention！ The best solution is to use it with smart-rem  

**smart-rem and postcss-auto-rem can set rem automatically, it's suitable for Vue Frameworks, React Frameworks, Angular Frameworks, Nuxt Frameworks, Next Frameworks, Node Api, gulp and so on.**

# What can this package do？

## e.g.

### Your css code

```
.foo {
    /* Input example */
    margin: 100px;
    padding: 100px;
    width: 50px;
    font-size: 50px;
}
```

### What it looks like in the browser

```
.foo {
    /* Output example */
    margin: 1rem;
    padding: 1rem;
    width: 0.5rem;
    font-size: 0.5rem;
}
```

# Usage  

### 1.Vue Frameworks    


**Step one:** 

```
npm install smart-rem -S
```



**Step two:**

In file src/main.js

```
import smartRem from 'smart-rem'
smartRem(Arguments)
```

**Notes**:  Arguments is the width of design draft. If  design draft's width is 750px, the argument of smartRem is 750 without 'px' as follows:

```
smartRem(750)
```



**Step three:**

***1.*** Install plugin: converts pixel units to `rem` without configuration. 



```sh
npm install --save-dev postcss postcss-auto-rem
```



***2.*** Check you project for existed PostCSS config: `postcss.config.js`

in the project root, `"postcss"` section in `package.json`

or `postcss` in bundle config.



If you do not use PostCSS, add it according to [official docs](https://github.com/postcss/postcss#usage)

and set this plugin in settings.



***3.*** Add the plugin to plugins list:

```diff
module.exports = {

  plugins: [

+   require('postcss-auto-rem'),

    require('autoprefixer')

  ]

}
```



### 2.React Frameworks

**Step one:** 

```
npm install smart-rem -S
```



**Step two:**

In file src/index.js

```
import smartRem from 'smart-rem'
smartRem(Arguments)
```

**Notes**:  Arguments is the width of design draft. If  design draft's width is 750px, the argument of smartRem is 750 without 'px' as follows:

```
smartRem(750)
```



**Step three:**

***1.*** Install plugin: converts pixel units to `rem` without configuration. 



```sh
npm install --save-dev postcss postcss-auto-rem
```



***2.*** Check you project for existed PostCSS config: `postcss.config.js`

in the project root, `"postcss"` section in `package.json`

or `postcss` in bundle config.



If you do not use PostCSS, add it according to [official docs](https://github.com/postcss/postcss#usage)

and set this plugin in settings.



***3.*** Add the plugin to plugins list:

```diff
module.exports = {

  plugins: [

+   require('postcss-auto-rem'),

    require('autoprefixer')

  ]

}
```



### 3.Angular Frameworks

**Step one:** 

```
npm install smart-rem -S
```



**Step two:**

In file src/main.ts

```
import smartRem from 'smart-rem'
smartRem(Arguments)
```

**Notes**:  Arguments is the width of design draft. If  design draft's width is 750px, the argument of smartRem is 750 without 'px' as follows:

```
smartRem(750)
```



**Step three:**

***1.*** Install plugin: converts pixel units to `rem` without configuration. 



```sh
npm install --save-dev postcss postcss-auto-rem
```



***2.*** Check you project for existed PostCSS config: `postcss.config.js`

in the project root, `"postcss"` section in `package.json`

or `postcss` in bundle config.



If you do not use PostCSS, add it according to [official docs](https://github.com/postcss/postcss#usage)

and set this plugin in settings.



***3.*** Add the plugin to plugins list:

```diff
module.exports = {

  plugins: [

+   require('postcss-auto-rem'),

    require('autoprefixer')

  ]

}
```



### 4.Nuxt Frameworks

**Step one:** 

```
npm install smart-rem -S
```



**Step two:**

In file nuxt.config.js, add script to head as follows:

```
head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    // ** Begin Adding
    script: [
      {
        innerHTML: require('smart-rem') + 'smartRem(Arguments)',
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
    // ** End Adding
  },
```

**Notes**:  Arguments is the width of design draft. If  design draft's width is 750px, the argument of smartRem is 750 without 'px' as follows:

```
'smartRem(750)'
```



**Step three:**

***1.*** Install plugin: converts pixel units to `rem` without configuration. 



```sh
npm install --save-dev postcss postcss-auto-rem
```



***2.*** Check you project for existed PostCSS config: `postcss.config.js`

in the project root, `"postcss"` section in `package.json`

or `postcss` in bundle config.



If you do not use PostCSS, add it according to [official docs](https://github.com/postcss/postcss#usage)

and set this plugin in settings.



***3.*** Add the plugin to plugins list:

```diff
module.exports = {

  plugins: [

+   require('postcss-auto-rem'),

    require('autoprefixer')

  ]

}
```



### 5.Next Frameworks

**Step one:** 

```
npm install smart-rem -S
```



**Step two:**

Create a file named `pages/_document.js` and add the following content:

```
// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
          // ** Begin Adding
          <script dangerouslySetInnerHTML={{__html: require('smart-rem') + 'smartRem(Arguments)'}}></script>
          // ** End Adding
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
```

**Notes**:  Arguments is the width of design draft. If  design draft's width is 750px, the argument of smartRem is 750 without 'px' as follows:

```
'smartRem(750)'
```



**Step three:**

***1.*** Install plugin: converts pixel units to `rem` without configuration. 



```sh
npm install --save-dev postcss postcss-auto-rem
```



***2.*** Check you project for existed PostCSS config: `postcss.config.js`

in the project root, `"postcss"` section in `package.json`

or `postcss` in bundle config.



If you do not use PostCSS, add it according to [official docs](https://github.com/postcss/postcss#usage)

and set this plugin in settings.



***3.*** Add the plugin to plugins list:

```diff
module.exports = {

  plugins: [

+   require('postcss-auto-rem'),

    require('autoprefixer')

  ]

}
```



### 5.Node Api

```js
var fs = require('fs');
var postcss = require('postcss');
var postcssAutoRem = require('postcss-auto-rem');
var css = fs.readFileSync('main.css', 'utf8');
var processedCss = postcss(postcssAutoRem()).process(css).css;
 
fs.writeFile('auto-rem.css', processedCss, function (err) {
  if (err) {
    throw err;
  }
  console.log('file written.');
});
```

### 6.gulp

```js
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var postcssAutoRem = require('postcss-auto-rem');
 
gulp.task('css', function () {
 
    var processors = [
        autoprefixer({
            browsers: 'last 1 version'
        }),
        postcssAutoRem()
    ];
 
    return gulp.src(['build/css/**/*.css'])
        .pipe(postcss(processors))
        .pipe(gulp.dest('build/css'));
});
```

