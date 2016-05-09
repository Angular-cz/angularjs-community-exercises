var baseConfig = require('../base-karma.conf.js');

module.exports = function(config) {
  baseConfig(config);

  config.set({
    basePath: '../',
    singleRun: true
  });

  config.files.push('09-directive-scope/*.js');
};
