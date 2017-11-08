
'use strict';

const trimBin = (str, bin = '0') => {
	while(str.substr(0, 1) === bin) {
		str = str.substr(1);
	}
	while(str.slice(-1) === bin) {
		str = str.slice(0, -1);
	}
	return str;
}

const numToBin = (n) => n.toString(2);

const reduceCallbackShort = (acc, val) => acc.length < val.length ? acc : val;
const reduceCallbackLong = (acc, val) => acc.length > val.length ? acc : val;

const binToReduceReady = (bin) => trimBin(trimBin(bin), '1').split('1');

class BinaryGap {
	static getShortest(bin) {
		return binToReduceReady(bin)
			.reduce(reduceCallbackShort)
			.length;
	}

	static getLongest(bin) {
		return binToReduceReady(bin)
			.reduce(reduceCallbackLong)
			.length;
	}
}

module.exports = BinaryGap;
module.exports.trimBin = trimBin;
module.exports.numToBin = numToBin;
module.exports.reduceCallbackShort = reduceCallbackShort;
module.exports.reduceCallbackLong = reduceCallbackLong;
module.exports.binToReduceReady = binToReduceReady;
