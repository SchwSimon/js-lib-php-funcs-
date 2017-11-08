
const test = require('unit.js');

const PermMissingElem = require('../lib/PermMissingElem.js');

describe('PermMissingElem', () => {
	describe('must return the missing elemeng of the int array', () => {
		const missing = [2,3,1,5];
		const complete = [2,3,1,4];
		const empty = [];

		describe('function missingA()', () => {
			const missingA = PermMissingElem.missingA;

			it('return the missing element', () => {
				test.value(missingA(missing)).is(4)
			});

			it('return length + 1 if none missing', () => {
				test.value(missingA(complete)).is(5)
			});

			it('return 1 one empty array', () => {
				test.value(missingA(empty)).is(1)
			});
		});

		describe('function missingB()', () => {
			const missingB = PermMissingElem.missingB;

			it('return the missing element', () => {
				test.value(missingB(missing)).is(4)
			});

			it('return length + 1 if none missing', () => {
				test.value(missingB(complete)).is(5)
			});

			it('return 1 one empty array', () => {
				test.value(missingB(empty)).is(1)
			});
		});
	});
});
