module.exports = function(grunt) {

  // Project configuration.
  
    grunt.initConfig({

      watch: {
        scripts: {
          files : ['css/style.css', 'js/script.js', 'sass/style.scss'],
          tasks : ['sass',  'csslint', 'jshint',],
          // options:  {
          //   spawn : false,
          // },
        },
      },


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



  csslint: {
  strict: {
    options: {
      import: 2
    },
    src: ['css/style.css']
  },
  lax: {
    options: {
      import: false
    },
    src: ['css/style.css']
  }
},

  jshint: {
    all: ['Gruntfile.js', 'js/script.js'],
    options: {
    esversion: 6,
    },
  },


  uglify: {
    my_target: {
      files: {
        'min/script.min.js': ['js/script.js']
      }
    }
  },


  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['watch']);
};