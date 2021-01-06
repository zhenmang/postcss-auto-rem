**smart-rem and postcss-auto-rem can set rem automatically, it's suitable for Vue Frameworks, React Frameworks, Angular Frameworks, Nuxt Frameworks, Next Frameworks**

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

***\*1:\**** Install plugin: converts pixel units to `rem` without configuration. 



\```sh

npm install --save-dev postcss postcss-auto-rem

\```



***\*2:\**** Check you project for existed PostCSS config: `postcss.config.js`

in the project root, `"postcss"` section in `package.json`

or `postcss` in bundle config.



If you do not use PostCSS, add it according to [official docs]

and set this plugin in settings.



***\*3:\**** Add the plugin to plugins list:



\```diff

module.exports = {

  plugins: [

\+   require('postcss-auto-rem')

  ]

}

\```

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

***\*1:\**** Install plugin: converts pixel units to `rem` without configuration. 



\```sh

npm install --save-dev postcss postcss-auto-rem

\```



***\*2:\**** Check you project for existed PostCSS config: `postcss.config.js`

in the project root, `"postcss"` section in `package.json`

or `postcss` in bundle config.



If you do not use PostCSS, add it according to [official docs]

and set this plugin in settings.



***\*3:\**** Add the plugin to plugins list:



\```diff

module.exports = {

  plugins: [

\+   require('postcss-auto-rem')

  ]

}

\```

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

***\*1:\**** Install plugin: converts pixel units to `rem` without configuration. 



\```sh

npm install --save-dev postcss postcss-auto-rem

\```



***\*2:\**** Check you project for existed PostCSS config: `postcss.config.js`

in the project root, `"postcss"` section in `package.json`

or `postcss` in bundle config.



If you do not use PostCSS, add it according to [official docs]

and set this plugin in settings.



***\*3:\**** Add the plugin to plugins list:



\```diff

module.exports = {

  plugins: [

\+   require('postcss-auto-rem')

  ]

}

\```

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

***\*1:\**** Install plugin: converts pixel units to `rem` without configuration. 



\```sh

npm install --save-dev postcss postcss-auto-rem

\```



***\*2:\**** Check you project for existed PostCSS config: `postcss.config.js`

in the project root, `"postcss"` section in `package.json`

or `postcss` in bundle config.



If you do not use PostCSS, add it according to [official docs]

and set this plugin in settings.



***\*3:\**** Add the plugin to plugins list:



\```diff

module.exports = {

  plugins: [

\+   require('postcss-auto-rem')

  ]

}

\```**Step three:**

***\*1:\**** Install plugin: converts pixel units to `rem` without configuration. 



\```sh

npm install --save-dev postcss postcss-auto-rem

\```



***\*2:\**** Check you project for existed PostCSS config: `postcss.config.js`

in the project root, `"postcss"` section in `package.json`

or `postcss` in bundle config.



If you do not use PostCSS, add it according to [official docs]

and set this plugin in settings.



***\*3:\**** Add the plugin to plugins list:



\```diff

module.exports = {

  plugins: [

\+   require('postcss-auto-rem')

  ]

}

\```

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

***\*1:\**** Install plugin: converts pixel units to `rem` without configuration. 



\```sh

npm install --save-dev postcss postcss-auto-rem

\```



***\*2:\**** Check you project for existed PostCSS config: `postcss.config.js`

in the project root, `"postcss"` section in `package.json`

or `postcss` in bundle config.



If you do not use PostCSS, add it according to [official docs]

and set this plugin in settings.



***\*3:\**** Add the plugin to plugins list:



\```diff

module.exports = {

  plugins: [

\+   require('postcss-auto-rem')

  ]

}

```