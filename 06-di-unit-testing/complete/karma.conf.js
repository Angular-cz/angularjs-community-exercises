var baseConfig = require('../../base-karma.conf.js');

module.exports = function(config) {
  baseConfig(config);

  config.set({
    basePath: '../../'
  });

  config.files.push('06-di-unit-testing/complete/*.js');
};
