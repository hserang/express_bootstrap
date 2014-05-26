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
          baseUrl: 'app/assets',
          include: ['libs/requirejs/require', 'scripts/main'],
          mainConfigFile: 'app/assets/scripts/main.js',
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
        src: ['tests/client/testrunner.html'],
        options: {
          run: true
        }
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['tests/server/**/*.js']
      }
    },
    watch: {
      scripts: {
        files: ['app/assets/scripts/**/*.js', 'Gruntfile.js', 'tests/**/*.js'],
        tasks: ['requirejs', 'mocha', 'mochaTest'],
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
  //grunt.registerTask('test', ['mocha:client', 'mocha:server']);
  grunt.registerTask('test', ['mochaTest', 'mocha']);

  //not working yet
  grunt.registerTask('jshint', ['jshint']);
};
