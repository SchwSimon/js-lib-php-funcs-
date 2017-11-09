
'use strict';

const sliceAvg = (array, begin, end) => array.slice(begin, end+1).reduce((acc, val) => acc += val) / ((end - begin) + 1);

const MinAvgTwoSlice = (A) => {
	let minIdx = 0;
	let minAvg = sliceAvg(A, 0, 1);
	for(let i = 0, len = A.length-2; i < len; i++) {
		let avg = Math.min(sliceAvg(A, i, i+1), sliceAvg(A, i, i+2));
    if (avg < minAvg) {
			minAvg = avg;
			minIdx = i;
		}
	}
	return minIdx;
}

module.exports = MinAvgTwoSlice;
module.exports.sliceAvg = sliceAvg;
