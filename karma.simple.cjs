// Karma configuration - Versión Simplificada para Debugging
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    
    files: [
      'tests/basic.spec.js'
    ],
    
    exclude: [],
    
    preprocessors: {},
    
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity,
    
    client: {
      jasmine: {
        random: false
      }
    }
  })
}
