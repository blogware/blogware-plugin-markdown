function render(file, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts;
  }

  opts = opts || {};

  var rendered;

  rendered = file.meta('html');

  cb(null, rendered);
}

module.exports = render;
