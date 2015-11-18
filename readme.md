# vdom components

Collection of UI components bound to `virtual-dom` as a rendering engine.


## install

    $ npm install vdom-components


## example

```js
var vdom = require('virtual-dom');

// require something
var FileUpload = require('vdom-components/Form/FileUpload');

var state = FileUpload({});

var loop = require('main-loop')( state(), FileUpload.render, vdom );
state(loop.update);
document.getElementById('content').appendChild(loop.target);
```
