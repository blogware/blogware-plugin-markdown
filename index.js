var type = 'markup converter';
var extnames = ['.md'];
var compile = require('./lib/compile');
var route = require('./lib/route');
var render = require('./lib/render');

exports.type = type;
exports.extnames = extnames;
exports.compile = compile;
exports.route = route;
exports.render = render;
