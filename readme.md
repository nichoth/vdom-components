# vdom components

Collection of generic UI components bound to `virtual-dom` as a rendering engine.


## install

    $ npm install vdom-components


## example

```js
var vdom = require('virtual-dom');

// require everything
var ui = require('vdom-components');

// require one thing
var FileUpload = require('vdom-components/FileUpload');

var state = FileUpload({});

var loop = require('main-loop')( state(), FileUpload.render, vdom );
state(loop.update);
document.getElementById('content').appendChild(loop.target);
```
