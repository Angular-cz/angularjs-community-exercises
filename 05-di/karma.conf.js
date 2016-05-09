var baseConfig = require('../base-karma.conf.js');
var courseWareConfig = require('../courseware-karma.conf.js');

module.exports = function(config) {
  baseConfig(config);
  courseWareConfig(config);

  config.set({
    basePath: '../'
  });

  config.files.push('05-di/*.js');
};
