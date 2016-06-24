module.exports = function (grunt) {

    grunt.initConfig({
        less: {
            dev: {
                files: {
                    "wwwroot/css/site.css": ["less/site.less"]
                },
                options: {
                    sourceMap: true
                }
            },
            prod: {
                files: {
                    "wwwroot/css/site.css": ["less/site.less"]
                },
                options: {
                    cleancss: true
                }
            }
        },
        watch: {
            less: {
                files: ["less/*.less"],
                tasks: ["less:dev"]
            }
        }
    });

    grunt.registerTask("devel", ["less:dev"]);
    grunt.registerTask("production", ["less:prod"]);

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
};