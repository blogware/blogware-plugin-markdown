var marked = require('marked');
var hljs = require('highlight.js');

marked.setOptions({
  gfm: true,
  highlight: highlight
});

function compile(file, cb) {
  var html;

  var contents = file.contents.toString('utf8');

  try {
    html = marked(contents);
  } catch(err) {
    return cb(err);
  }

  file.meta('html', html);

  cb(null, file);
}

function highlight(code, lang) {
  return hljs.highlightAuto(code, [lang]).value;
}

module.exports = compile;
