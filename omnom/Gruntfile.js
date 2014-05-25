module.exports = function(grunt) {

  // port paths to this object when ready to optimize
  var config = {
  };

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    requirejs: {
      compile: {
        options: {
          baseUrl: 'app/',
          include: ['libs/requirejs/require', 'scripts/main'],
          mainConfigFile: 'app/scripts/main.js',
          name: 'scripts/app',
          optimize: 'none',
          out: 'public/javascripts/app.js'
        }
      }
    },
    jshint: {
      all: ['app/scripts/*.js']
    },
    mocha: {
      test: {
        src: ['tests/testrunner.html'],
        options: {
          run: true
        }
      }
    },
    watch: {
      scripts: {
        files: ['app/scripts/**/*.js', 'Gruntfile.js', 'app/**/*.html'],
        tasks: ['requirejs'],
        options: {
          livereload: {
            port: 35729,
          },
          forever: false,
          spawn: false
        }
      }
    }
  });

  grunt.registerTask('default', ['requirejs', 'watch']);
  grunt.registerTask('test', ['mocha']);

  //not working yet
  grunt.registerTask('jshint', ['jshint']);
};
