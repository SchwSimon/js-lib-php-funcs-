
'use strict';

class PermMissingElem {

	/**
	 * O(n*Log(n))
	 */
	static missingA(arr) {
		arr.sort();
		let len = arr.length;
		for(let i = 0; i < len; i++) {
			if (arr[i] !== i+1)
				return i+1;
		}
		return len+1;
	}

	/**
	 * O(n)
	 */
	static missingB(arr) {
		let len = arr.length + 1;
		let total = len * ((len + 1) / 2);
		arr.forEach(n => total -= n);
		return total;
	}
}

module.exports = PermMissingElem;
