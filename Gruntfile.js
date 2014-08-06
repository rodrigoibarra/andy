module.exports = function(grunt) {

  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: ['development/libs/*.js','development/js/global.js'],
        dest: 'build/js/global.min.js'
      }
    },
      compass: {                  // Task
        dist: {                   // Target
          options: {              // Target options
            sassDir: 'development/scss/',
            cssDir: 'build/css/',
            environment: 'development'
          }
        }
      },


      watch: {
          css: {
            files: ['**/*.scss', '*.html'],
            tasks: ['compass'],
          },
           svg: {
              files: ["development/svg/*.svg"],
              tasks: ["svgstore"]
            },
            options: {
              livereload: true,
            }
      },

      svgstore: {
      options: {
        prefix : "shape-",
        cleanup: false,
        svg: {
          style: "display: none;"
        }
      },
      default: {
        files: {
          "build/img/svg-defs.svg": ["development/svg/*.svg"]
        }
      }
    },

      connect: {
        uses_defaults: {}
      }

  });

    require("load-grunt-tasks")(grunt);
  // Default task(s).
    grunt.registerTask('default', ['uglify', 'compass', "watch"]);

};
