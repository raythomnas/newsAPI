module.exports = function(grunt) {

  // Project configuration.
  
    grunt.initConfig({

  sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
         'css/style.css' : 'sass/style.scss',       // 'destination': 'source'
        // 'widgets.css': 'widgets.scss'
      }
    }
  },

  jshint: {
    all: ['Gruntfile.js', 'lib/**/*.js', 'js/script.js']
  }



  });


  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', [ 'sass', 'jshint']);
};