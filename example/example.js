var vdom = require('virtual-dom');
var h = vdom.h;

// require everything
var ui = require('../');

// require one thing
var FileUpload = require('../FileUpload');

var state = FileUpload({});

var loop = require('main-loop')( state(), FileUpload.render, vdom );
state(loop.update);
document.getElementById('content').appendChild(loop.target);
