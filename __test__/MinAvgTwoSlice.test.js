
const test = require('unit.js');

const { sliceAvg } = require('../lib/MinAvgTwoSlice.js');
const MinAvgTwoSlice = require('../lib/MinAvgTwoSlice.js');


describe('function sliceAvg()', () => {
	describe('must return the average of the sum of all elements from the given array slice', () => {
		it('return the right average', () => {
			test.value(sliceAvg([1,1,1,1,1,1], 1, 2)).is(1);
			test.value(sliceAvg([2,2], 0, 1)).is(2);
			test.value(sliceAvg([1,9,1,9], 1, 3)).isApprox(6.33, 0.01);
		});
	});
});

describe('function MinAvgTwoSlice', () => {
	describe('must return the starting position of a slice whose average is the smallest', () => {
		it('return the right starting position', () => {
			test.value(MinAvgTwoSlice([4,2,2,5,1,5,8])).is(1);
			test.value(MinAvgTwoSlice([99,99,1,99,99,99,1,99,1])).is(6);
		});
	});
});
