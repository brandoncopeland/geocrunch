module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      lib: ['lib/**/*.js'],
      options: {
        jshintrc: 'lib/.jshintrc'
      }
    },
    jasmine_node: {
      forceExit: true,
      specsFolders: ['spec'],
      verbose: false
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jasmine-node');

  grunt.registerTask('test', ['jshint:lib', 'jasmine_node']);

  grunt.registerTask('default', []);
};