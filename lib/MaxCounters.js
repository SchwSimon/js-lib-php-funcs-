
'use strict';

const createCounters = (n) => {
	let counter = [];
	for(let i = 0; i < n; i++) {
		counter[i] = 0;
	}
	return counter;
}

const MaxCounters = (N, A) => {
	let C = createCounters(N);
	let CINDEX;
	let MAX = 0;
	let K = 0;
	for(let i = 0, len = A.length; i < len; i++) {
		CINDEX = A[i] - 1;
		if (A[i] >= 1 && A[i] <= N) {
			C[CINDEX] = Math.max(K, C[CINDEX]) + 1;
			MAX = Math.max(MAX, C[CINDEX]);
		} else if (A[i] == N + 1) {
			K = MAX;
		}
	}
	C = C.map(n => Math.max(n, K));
	return C;
}

module.exports = MaxCounters;
module.exports.createCounters = createCounters;
