var type = 'markup converter';
var extnames = ['.md'];
var compile = require('./lib/compile');
var rename = require('./lib/rename');
var render = require('./lib/render');

function create(opts) {
  return {
    type:type,
    extnames: extnames,
    compile: compile,
    rename: rename,
    render: render
  };
}

exports.create = create;
