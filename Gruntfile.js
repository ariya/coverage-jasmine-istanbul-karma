'use strict';

module.exports = function(grunt) {
  
  grunt.initConfig({

    karma: {
      test: {
        configFile: 'my.conf.js'
      }
    },
  });

  grunt.loadNpmTasks('grunt-karma');
};
