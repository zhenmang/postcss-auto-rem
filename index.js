module.exports = () => {
  return {
    postcssPlugin: 'postcss-auto-rem',

    Declaration (decl) {
      if (decl.type === 'decl' && RegExp('\\d+px', '').test(decl.value)) {
        decl.value = decl.value.replace(/(\d+)(px)/g, function($1, $2) {
          const num = ($2 / 100);
          return num + 'rem';
        });
      }
   }
  }
}
module.exports.postcss = true
