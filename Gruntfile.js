module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bower: {
      install: {
         //just run $ grunt bower:install and you'll see files from your Bower packages in lib directory
        options: {
          layout: 'byType',
        }
      }
    },

    clean: {
      build: ['dist']
    },

    compass: {
      options: {
        importPath:['bower_components/foundation-sites/scss'],
        sassDir: ['styles/scss'],
        raw: 'Encoding.default_external = \'utf-8\'\n',
      },
      dev: {
        options: {
          outputStyle: 'nested',
          cssDir: ['dist/styles/css'],
          imageDir: ['styles/images'],
          environment: 'development',
          sourcemap: true
        }
      },
      dist: {
        options: {
          cssDir: ['dist/styles/css'],
          environment: 'production'
        }
      }
    },

    concat: {
      options: {
        separator: '\n',
        banner: '/*! <%= pkg.name %> - <%= pkg.version %> - ' + ' <%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      dev: {  
        src:['app/js/**/*.js'],
        dest: 'dist/js/main.js',
      }
    },

    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 8080
        }
      }
    },

    watch: {
      options: {
        interrupt: true,
      },
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      compass: {
        files: ['styles/scss/**/*.scss'],
        tasks: ['compass:dev']
      },

      script: {
        files: ['app/js/**/*.js'],
        tasks: ['concat']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.loadNpmTasks('grunt-bower-task');

  grunt.registerTask('deploy', ['clean', 'bower:install'])
  grunt.registerTask('build', ['clean','bower:install','compass:dev', 'concat']);
  grunt.registerTask('default', ['connect','watch']);
}
