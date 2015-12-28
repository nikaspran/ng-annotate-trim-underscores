function trimUnderscores(str) {
  return str.replace(/^_+|_+$/gm, '');
}

function startsWithUnderscore(str) {
  return str.indexOf('_') === 0 && str.length > 1
}

module.exports = {
  init: function () {
  },
  match: function (node) {
    if (node.params) {
      node.params.forEach(function (param) {
        if (startsWithUnderscore(param.name)) {
          param.name = trimUnderscores(param.name)
        }
      });
    }
  }
};
