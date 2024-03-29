# chop-grunt-erb-builder

> Grunt Plugin for Chop Builder

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install chop-grunt-erb-builder --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('chop-grunt-rb-builder');
```

## The "erb_builder" task

### Overview
In your project's Gruntfile, add a section named `erb_builder` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  chop_grunt_rb_builder: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.directory
Type: `String`

A string value that specifies the directory to build

#### options.output
Type: `String`
Default value: `'build'`

A string value that specifies the output directory

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  erb_builder: {
    options: {
		directory
		'output': "output_folder"
	}

  },
})
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

