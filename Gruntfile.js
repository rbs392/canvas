var serveConfig = require('./gruntLib/serve');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    serve : serveConfig
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-serve');

  // Default task(s).
  grunt.registerTask('default', ['serve']);

};