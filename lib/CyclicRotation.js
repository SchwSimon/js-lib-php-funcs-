
'use strict';

class CyclicRotation {
	static rotateRight(arr, r = 1) {
		for(let i = 0; i < r; i++) {
			arr.unshift(arr.pop())
		}
		return arr;
	}

	static rotateLeft(arr, r = 1) {
		for(let i = 0; i < r; i++) {
			arr.push(arr.shift())
		}
		return arr;
	}
}

module.exports = CyclicRotation;
