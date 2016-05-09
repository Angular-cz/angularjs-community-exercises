module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js'
    ],

    exclude: [
      'karma.conf.js'
    ],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-story-reporter'
    ],

    reporters: ['story'],

    storyReporter: {
      showSkipped: true,
      showSkippedSummary: true
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });

};
