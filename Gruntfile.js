module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    connect : {
      test : {
        port : 8000
      }
    },
    jasmine : {
      test : {
        src : 'app/scripts/src/**/*.js',
        options : {
          host : 'http://127.0.0.1:<%= connect.port %>/',
          specs : 'app/scripts/tests/specs/**/*.js',
          template: require('grunt-template-jasmine-requirejs'),
          helpers : 'app/scripts/tests/helpers/**/*.js',
          templateOptions: {
            requireConfigFile: 'app/scripts/tests/requirejsconfig.js'
          } 
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('test', ['connect', 'jasmine']);
  // grunt.registerTask('default', ['test']);
};