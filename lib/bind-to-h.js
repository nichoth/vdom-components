var curry = require('./curry-component.js');
var h = require('virtual-dom/h');

module.exports = function(component) {
  var c = curry(component);
  c.render = c.render.bind(null, h);
  return c;
};
