module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // sass: {
    //   options: {
    //     includePaths: ['bower_components/foundation-sites/scss']
    //   },
    //   dist: {
    //     options: {
    //       outputStyle: 'nested',
    //       sourceMap: true,
    //     },
    //     files: {
    //       'css/app.css': 'scss/app.scss'
    //     }
    //   }
    // },

    concat: {
      options: {
        separator: ';\n',
        banner: '/*! <%= pkg.name %> - <%= pkg.version %> - ' + ' <%= grunt.template.today("yyyy-mm-dd") %> */',
      },
      dev: {
        src:['app/js/**/*.js'],
        dest: 'dist/js/main.js'
      }
    },

    compass: {
      options: {
        importPath:['bower_components/foundation-sites/scss'],
      },
      dev: {
        options: {
          outputStyle: 'nested',
          sassDir: ['styles/scss/'],
          cssDir: ['dist/styles/css'],
          imageDir: ['styles/images'],
          environment: 'development',
          sourcemap: true
        }
      },
      dist: {
        options: {
          sassDir: ['styles/scss'],
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
        files: 'styles/scss/**/*.scss',
        tasks: ['compass:dev']
      },

      concat: {
        files: ['app/js/**/*.js'],
        tasks: ['concat:dev']
      }
    },

    clean: {
      build: [
        'build'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('build', ['compass:dev', 'concat']);
  grunt.registerTask('default', ['watch']);
}
