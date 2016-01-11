var path = require('path');

var map = {
  '.md': '.html'
}

function route(file) {
  var location;

  var relative = file.relative;
  var extname = path.extname(relative);
  var basename = path.basename(relative, extname);
  var dirname = path.dirname(relative);

  extname = map[extname] || extname;

  location = path.join(dirname,  basename + extname);

  return location;
}

module.exports = route;
