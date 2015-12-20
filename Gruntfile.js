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

    compass:{
      options: {
        importPath:['bower_components/foundation-sites/scss'],
      },
      dev:{
        options: {
          outputStyle: 'nested',
          sassDir: ['styles/scss/'],
          cssDir: ['styles/css'],
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
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      //sass: {
      compass:{
        files: 'styles/scss/**/*.scss',
        tasks: ['compass:dev']
      }
    },

    // clean: {
    //   build: [
    //     'build'
    //   ]
    // }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');

  //grunt.registerTask('build', ['compass']);
  grunt.registerTask('default', ['watch']);
}
