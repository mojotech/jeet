module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),

      // Configure Sass for development and production
      sass: {
        development: {
          options: {
            style: 'expanded',
            trace: true
          },
          files: {
            './css/main.css': ['./jeet/index.scss']
          }
        },
        production: {
          options: {
            // cssmin will minify later
            style: 'expanded'
          },
          files: {
            './dist/css/main.css': ['./jeet/index.scss']
          }
        }
      },

      // Configure cssmin
      cssmin: {
        minify: {
          files: {
            './dist/css/main.css': ['./jeet/index.scss']
          }
        }
      },

      // Configure watch
      watch: {
        sass: {
          files: ['./jeet/*.scss'],
          tasks: ['sass:development']
        }
      }

    });

  // Load Grunt tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register tasks
  grunt.registerTask('build', ['sass:development']);
  grunt.registerTask('dist', ['sass:production', 'cssmin']);
  grunt.registerTask('dev', ['build', 'watch']);
  grunt.registerTask('default', ['dev']);
}
