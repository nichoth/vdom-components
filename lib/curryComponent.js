var h = require('virtual-dom/h');

module.exports = function (c) {
  var curried = c;
  curried.render = c.render.bind(null, h);
  return curried;
};
