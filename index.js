var type = 'markup converter';
var extnames = ['.md'];
var compile = require('./lib/compile');
var rename = require('./lib/rename');
var render = require('./lib/render');

exports.type = type;
exports.extnames = extnames;
exports.compile = compile;
exports.rename = rename;
exports.render = render;
