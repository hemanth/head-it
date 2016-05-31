# head-it [![Build Status](https://travis-ci.org/hemanth/head-it.svg?branch=master)](https://travis-ci.org/hemanth/head-it)

> Easy interface for [head](https://github.com/joshbuchea/HEAD)


## Install

```
$ npm install --save head-it
```


## Usage

```js
const headIt = require('head-it');

headIt('min').then(console.log).catch(console.error);

/*
Would print something like:
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Page Title</title>
*/
```


## CLI

```
$ npm install --global head-it
```

```
$ head-it --help

  Easy interface for head.

  Usage
    $ head-it [type]

  Examples
    $ head-it min
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Page Title</title>
```

P.S: `type` can be any of: 360, min, elm, meta, link, fav, fbog, fbia, twitter, g+, oembed, ios, safari, android, chrome, ie, uc, qq, applinks.


## GIF FTW!

![](./head-it.gif)

## License

MIT © [Hemanth.HM](https://h3manth.com)
