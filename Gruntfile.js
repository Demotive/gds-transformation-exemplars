module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    globalConfig: {
      scssFile: 'views/assets/scss/application.scss',
      cssFile: 'views/assets/stylesheets/application.css',
      htmlFile: 'views/index.html'
    },

    // CSS
    sass: {
      dev: {
        options: {
          style: 'expanded',
          loadPath: 'node_modules/govuk_frontend_toolkit/govuk_frontend_toolkit/stylesheets'
        },
        files: {
          '<%= globalConfig.cssFile %>': '<%= globalConfig.scssFile %>'
        }
      }
    },

    watch: {
      css: {
        files: ['<%= globalConfig.scssFile %>'],
        tasks: ['sass'],
        options: {
          spawn: false,
        }
      }
    },

    nodemon: {
      dev: {
        script: 'app.js',
        options: {
          ext: 'html, js',
          ignore: ['node_modules/**']
        }
      }
    },

    concurrent: {
      target: {
        tasks: ['watch', 'nodemon'],
        options: {
          logConcurrentOutput: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');


  grunt.registerTask('default', ['concurrent:target']);

};