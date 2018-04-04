module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/main.css': 'scss/main.scss'
                }
            }
        },
       
        postcss: {
            options: {
                map: true, // inline sourcemaps
                processors: [
                    require('autoprefixer')({ browsers: 'last 2 versions' }), // add vendor prefixes
                ]
            },
            dist: {
                src: 'css/*.css'
            }
        },

        watch: {
            scss: {
                files: ['scss/**/*.scss'],
                tasks: ['sass', 'postcss:dist'],
                options: {
                    spawn: false,
                },
            },
        }
        
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Tasks
    grunt.registerTask('default', ['watch']);
};