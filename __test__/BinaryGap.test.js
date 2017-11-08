
const test = require('unit.js');

const { trimBin, numToBin, reduceCallbackShort, reduceCallbackLong, binToReduceReady } = require('../lib/BinaryGap.js');
const BinaryGap = require('../lib/BinaryGap.js');

describe('function trimBin()', () => {
	describe('must trim "0" by default from left & right', () => {
		it('empty string', () => {
			test.value(trimBin('')).is('');
		});
		it('0001', () => {
			test.value(trimBin('0001')).is('1');
		});
		it('1000', () => {
			test.value(trimBin('1000')).is('1');
		});
		it('00100', () => {
			test.value(trimBin('00100')).is('1');
		});
		it('1', () => {
			test.value(trimBin('1')).is('1');
		});
		it('0', () => {
			test.value(trimBin('0')).is('');
		});
		it('0', () => {
			test.value(trimBin('0')).is('');
		});
		describe('trim "1"', () => {
			it('11011', () => {
				test.value(trimBin('11011', '1')).is('0');
			});
		});
	});
});

describe('function numToBin()', () => {
	describe('must return the right binary representation of the input number', () => {
		it('9', () => {
			test.value(numToBin(9)).is('1001');
		});
		it('529', () => {
			test.value(numToBin(529)).is('1000010001');
		});
		it('20', () => {
			test.value(numToBin(20)).is('10100');
		});
		it('15', () => {
			test.value(numToBin(15)).is('1111');
		});
	});
});

describe('Reducers', () => {
	describe('function reduceCallbackShort()', () => {
		it('return the shortest string', () => {
			test.value(reduceCallbackShort('1', '22')).is('1');
		});
	});

	describe('function reduceCallbackLong()', () => {
		it('return the longest string', () => {
			test.value(reduceCallbackLong('1', '22')).is('22');
		});
	});
});

describe('function binToReduceReady()', () => {
	it('must return an array even on empty string argument', () => {
		test.value(binToReduceReady('')).isArray();
	});

	it('elements must only be "0"s', () => {
		const arr = binToReduceReady('0010101101010100001111100101');
		test.value(arr.indexOf('1')).is(-1);
	});
});

describe('BinaryGap', () => {
	describe('function getLongest()', () => {
		const getLongest = BinaryGap.getLongest;

		describe('must return 0 on no gap', () => {
			it('1111', () => {
				test.value(getLongest('1111')).is(0);
			});
			it('1110', () => {
				test.value(getLongest('1110')).is(0);
			});
			it('0111', () => {
				test.value(getLongest('0111')).is(0);
			});
			it('0110', () => {
				test.value(getLongest('0110')).is(0);
			});
		});

		describe('must return the correct length of the longest binary gap', () => {
			it('1001', () => {
				test.value(getLongest('1001')).is(2);
			});
			it('1000010001', () => {
				test.value(getLongest('1000010001')).is(4);
			});
			it('10100', () => {
				test.value(getLongest('10100')).is(1);
			});
			it('00101', () => {
				test.value(getLongest('00101')).is(1);
			});
		});
	});
})
