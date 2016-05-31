import test from 'ava';
import fn from './';

test.cb('must resolve with the data', t => {
	fn('twitter').then(() => {
		t.pass();
		t.end();
	});
});
