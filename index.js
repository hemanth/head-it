'use strict';

const head = require('./head.js');
const types = Object.keys(head).join(', ');

module.exports = function (type) {
	return new Promise((resolve, reject) => {
		if (typeof type !== 'string') {
			reject(`Expected a string, one of: ${types}`);
		}
		if (head[type]) {
			resolve(head[type]);
		}
		reject(`Try one of ${types}`);
	});
};
