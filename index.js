const postcss = require('postcss');
module.exports = postcss.plugin('postcss-auto-rem', (opts) => {
  let size, errMsg;
  if (!opts) {
    size = 100;
  } else if (!opts.size) {
    size = 100;
  } else if(typeof opts.size === 'string') {
    if (opts.size.includes('px')) {
      size = +opts.size.slice(0, -2);
    } else {
      size = +opts.size;
    }
    if (isNaN(size)) {
      errMsg = true;
    }
  } else if (typeof opts.size === 'number') {
    size = opts.size;
  } else {
    errMsg = true;
  }
  if (errMsg) {
    throw new Error('The parameter size of plug-in postcss-auto-rem should be a number!');
  }
  return function(styles) {
    styles.walkDecls((decl) => {
      if (decl.type === 'decl' && RegExp('\\d+px', '').test(decl.value)) {
        decl.value = decl.value.replace(/(\d+)(px)/g, function($1, $2) {
          const num = $2 / size;
          return num + 'rem';
        });
      }
    });
  };
});
