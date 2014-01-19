module.exports = function(grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
        build: {
            command: 'wintersmith build'
        }
    },
    wintersmith: {
      build: {},
      preview: {
        options: {
          action: "preview"
        }
      }
    },
    uglify: {
      development: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
          mangle: false,
          beautify: true
        },
        files: {
          'contents/js/index.js': [
            'contents/js/styles.js'
          ]
        }
      },
      production: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
          mangle: true
        },
        files: {
          'contents/js/index.min.js': [
            'contents/js/styles.js'
          ]
        }
      }
    },
    less: {
      development: {
        options: {
        },
        files: {
          'contents/css/index.css': 'contents/css/index.less',
          'contents/css/resume.css': 'contents/css/resume.less',
          'contents/css/blog.css': 'contents/css/blog.less'
        }
      },
      production: {
        options: {
          cleancss: true,
          report: true
        },
        files: {
          'contents/css/index.min.css': 'contents/css/index.less',
          'contents/css/resume.min.css': 'contents/css/resume.less',
          'contents/css/blog.min.css': 'contents/css/blog.less'
        }
      }
    },
    watch: {
      js: {
        files: ['contents/js/styles.js'],
        tasks: ['uglify']
      },
      less: {
        files: ['contents/css/*.less'],
        tasks: ['less']
      },
      hint: {
        files: ['Gruntfile.js', 'contents/js/styles.js'],
        tasks: ['jshint']
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'contents/js/styles.js']
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-wintersmith');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['less', 'uglify', 'wintersmith:build']);

  // Register tasks
  grunt.registerTask('build', ['less', 'uglify', 'wintersmith:build']);

};