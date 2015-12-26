module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

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

    compass: {
      options: {
        importPath:['bower_components/foundation-sites/scss'],
        sassDir: ['styles/scss'],
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

    clean: {
      build: ['dist']
    },
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 8080
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('build', ['clean','compass:dev', 'concat']);
  grunt.registerTask('default', ['connect:server','watch']);
}
