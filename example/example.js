var vdom = require('virtual-dom');
var h = vdom.h;

// require something
var FileUpload = require('../Form/FileUpload');

var state = FileUpload({});

var loop = require('main-loop')( state(), FileUpload.render, vdom );
state(loop.update);
document.getElementById('content').appendChild(loop.target);
