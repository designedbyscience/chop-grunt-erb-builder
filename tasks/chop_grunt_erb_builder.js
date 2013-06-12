/*
 * chop-grunt-erb-builder
 * https://github.com/designedbyscience/chop-grunt-erb-builder
 *
 * Copyright (c) 2013 Eric Haseltine
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  function compile(args, cb) {
    var child = grunt.util.spawn({
      cmd: args.shift(),
      args: args
    }, function (err, result, code) {
      var success = code === 0;

      if (code === 127) {
        return grunt.warn(
          'You need to have Ruby and Chop RB Builder installed ' +
          'and in your system PATH for this task to work. '          
        );
      }

      // `compass compile` exits with 1 and outputs "Nothing to compile"
      // on stderr when it has nothing to compile.
      // https://github.com/chriseppstein/compass/issues/993
      // Don't fail the task in this situation.
      if (code === 1 && /Nothing to compile/g.test(result.stderr)) {
        success = true;
      }

      cb(success);
    });
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
  }



  grunt.registerMultiTask('erb_builder', 'Build files with Chop ERB Builder.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options();
    var cb = this.async();

    // get the array of arguments for the compass command
    var args = ["builder", options.directory, "--output", options.output];
	

	compile(args, cb);
    
  });

};
