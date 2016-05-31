#!/usr/bin/env node
'use strict';
var meow = require('meow');
var headIt = require('./');

var cli = meow([
	'Usage',
	'  $ head-it [type]',
	'',
	'Examples',
	'  $ head-it min',
	'<meta charset="utf-8">',
	'<meta http-equiv="x-ua-compatible" content="ie=edge">',
	'<meta name="viewport" content="width=device-width, initial-scale=1">',
	'<title>Page Title</title>'
]);

headIt(cli.input[0]).then(console.log).catch(console.error);
