var h = require('virtual-dom/h');

module.exports = function (c) {
  var curried = c;
  Object.keys(c).forEach(function(k) {
    curried[k] = c[k];
  });
  curried.render = c.render.bind(null, h);
  return curried;
};
