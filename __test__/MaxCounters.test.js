
const test = require('unit.js');

const { createCounters } = require('../lib/MaxCounters.js');
const MaxCounters = require('../lib/MaxCounters.js');


describe('function createCounters()', () => {
	it('create an array of X elements each with the value 0', () => {
		test.value(createCounters(5)).is([0,0,0,0,0])
	});
});

describe('function MaxCounters', () => {
	it('return an array of integers representing the values of the given counters', () => {
		const array = [3,4,4,6,1,4,4];
		test.value(MaxCounters(5, array)).is([3,2,2,4,2]);
	});
});
