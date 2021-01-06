# PostCSS Auto Rem

[PostCSS] postcss-auto-rem and smart-rem can set rem automatically.

[PostCSS]: https://github.com/postcss/postcss

# Your css code
```css
.foo {
    /* Input example */
    margin: 100px;
    padding: 100px;
    width: 50px;
    font-size: 50px;
}
```

# What it looks like in the browser
```css
.foo {
    /* Output example */
    margin: 1rem;
    padding: 1rem;
    width: 0.5rem;
    font-size: 0.5rem;
}
```

## Usage

**Step 1:** Install plugin: converts pixel units to `rem` without configuration. 

```sh
npm install --save-dev postcss postcss-auto-rem
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-auto-rem'),
    require('autoprefixer')
  ]
}
```

[official docs]: https://github.com/postcss/postcss#usage

**Step 4:** Install smart-rem: Set the value of the HTML root element property fontsize. 

```sh
npm install --save-dev smart-rem
```

**Step 5:** In the JS entry file, use smart-rem.

```js
import smartRem from 'smart-rem'
smartRem(Arguments)
```
Notes: Arguments is the width of design draft. If design draft's width is 750px, the argument of smartRem is 750 without 'px' as follows:

```js
smartRem(750)
```
[smart-rem Usage](https://www.npmjs.com/package/smart-rem)
