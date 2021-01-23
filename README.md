***<u>Remember that if you have any questions during use, please contact email shuaiqiyupu@163.com. I'd be happy to help you.</u>***  

# What can this package do？

## e.g.

### Your css code

```css
.foo {
    /* Input example */
    margin: 100px;
    padding: 100px;
    width: 50px;
    font-size: 50px;
}
```



### After using postcss-auto-rem，What it looks like in the browser

```css
.foo {
    /* Output example */
    margin: 1rem;
    padding: 1rem;
    width: 0.5rem;
    font-size: 0.5rem;
}
```



### It is more efficient than other plug-ins, as shown in the picture below.



![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7c6f0e9b1bf24aecbad9f6bcc2fa25f1~tplv-k3u1fbpfcp-watermark.image)



![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f8e2a73adf094834879842a1af7d5018~tplv-k3u1fbpfcp-watermark.image)

### In this case, it's twice as fast

# Support all popular frameworks、webpack、 gulp and nodejs api.

# Usage

**Step one:** 

```sh
npm install postcss-auto-rem -D
```



**Step two**:

Add the plugin to plugins list:

```js
module.exports = {

  plugins: [
    
    // The default value of size is 100
+   require('postcss-auto-rem')({size: 100}),

    require('autoprefixer')

  ]

}
```

**Note:**

**If the parameter size  is 100, the conversion result is as follows**

```js
100px => 100 / 100 => 1rem
```

**If the parameter size  is 16, the conversion result is as follows**

```js
100px => 100 / 50 => 2rem
```

Then, you'll see 2rem in your browser.

**The default value of size is 100**



# e.g.



### 1.Vue Framework



```sh
npm install postcss-auto-rem -D
```



In file  **.postcssrc.js** or **postcss.config.js**. If it doesn't exist, create one under the root directory of the project.

```js
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "autoprefixer": {},
+   "postcss-auto-rem": {size: 100},
  }
}

```



### 2.React Framework



```sh
npm install postcss-auto-rem -D
```



In file  **config/webpack.config.js**. If it doesn't exist, create one with `npm run eject`.

```js
{
    loader: require.resolve('css-loader'),
    options: cssOptions,
},
{
    loader: require.resolve('postcss-loader'),
    options: {
        ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
+           require('postcss-auto-rem')({size: 100}),
            require('postcss-preset-env')({
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
            }),
            postcssNormalize(),
          ],
          sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
    },
},
```



### 3.Node Api

```js
var fs = require('fs');
var postcss = require('postcss');
var postcssAutoRem = require('postcss-auto-rem');
var css = fs.readFileSync('main.css', 'utf8');
+ var options = {size: 100};
+ var processedCss = postcss(postcssAutoRem(options)).process(css).css;
 
fs.writeFile('auto-rem.css', processedCss, function (err) {
  if (err) {
    throw err;
  }
  console.log('file written.');
});
```

### 4.gulp

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
+       postcssAutoRem({size: 100})
    ];
 
    return gulp.src(['build/css/**/*.css'])
        .pipe(postcss(processors))
        .pipe(gulp.dest('build/css'));
});
```



### Other instructions:

####  if you don't set the pixel value of the root element, you can choose smart-smart to set it.



```sh
npm install smart-rem -S
```



In the entry file（e.g. src/index.js or src/main.js）

```js
import smartRem from 'smart-rem'
smartRem(Arguments)
```



**Notes**:  Arguments is the width of design draft. If  design draft's width is 750px, the argument of smartRem is 750 without 'px' as follows:

```js
smartRem(750)
```



**smart-rem will set the coefficient of root element to 100. So, parameter size of posts-auto-rem  should be 100.**

