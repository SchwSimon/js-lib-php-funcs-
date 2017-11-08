
const test = require('unit.js');

const CyclicRotation = require('../lib/CyclicRotation.js');

describe('CyclicRotation', () => {
	describe('Rotate the input array reference', () => {
		describe('function rotateRight()', () => {
			const rotateRight = CyclicRotation.rotateRight;
			const array = [1,2,3,4,5,6];

			it('rotate the array one to the right', () => {
				rotateRight(array);
				test.value(array).is([6,1,2,3,4,5]);
			});

			it('rotate the array 5 to the right', () => {
				rotateRight(array, 5);
				test.value(array).is([1,2,3,4,5,6]);
			});
		});

		describe('function rotateLeft()', () => {
			const rotateLeft = CyclicRotation.rotateLeft;
			const array = [1,2,3,4,5,6];

			it('rotate the array one to the left', () => {
				rotateLeft(array);
				test.value(array).is([2,3,4,5,6,1]);
			});

			it('rotate the array 5 to the left', () => {
				rotateLeft(array,5);
				test.value(array).is([1,2,3,4,5,6]);
			});
		});
	});
});
