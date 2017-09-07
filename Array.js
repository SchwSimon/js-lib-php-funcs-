
//const utils = require( "./utils" );

class Array {
	
	static search( needle, haystack, strict = false ) {
		var idx = false;
		for( var i = 0, len = haystack.length; i < len; i++ ) {
			if ( haystack[i] == needle ) {
				if ( strict && haystack[i] !== needle ) {
					break;
				}
				idx = i;
				break;
			}
		}
		return idx;
	}
	
	
	
}

module.exports = Array;