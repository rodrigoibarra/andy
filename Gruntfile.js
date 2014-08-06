module.exports = function(grunt) {

  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: ['_development/libs/*.js','_development/js/global.js'],
        dest: 'build/js/global.min.js'
      }
    },
      compass: {                  // Task
        dist: {                   // Target
          options: {              // Target options
            sassDir: '_development/scss/',
            cssDir: 'build/css/',
            environment: 'development'
          }
        }
      },

      shell: {
      jekyllServe: {
        command: "jekyll serve --baseurl="
      },
      jekyllBuild: {
        command: "jekyll build --config _config-dev.yml"
      }
    },

      watch: {
           site: {
            files: ["index.html", "_layouts/*.html", "rants/_posts/*.md", "_projects/*.md", "_includes/*.html"],
            tasks: ["shell:jekyllBuild"]
          },
          css: {
            files: ['**/*.scss', '*.html'],
            tasks: ['compass', "shell:jekyllBuild"],
            options: {
              livereload: true,
            },
          },
      },

      connect: {
        uses_defaults: {}
      }

  });

    require("load-grunt-tasks")(grunt);
  // Default task(s).
    grunt.registerTask("serve", ["shell:jekyllServe"]);
    grunt.registerTask('default', ['uglify', 'compass', "shell:jekyllBuild", "watch"]);

};
