

module.exports = {
	
	mergeArrays( ...arrays ) {
		var array = [];
		for( var i = 0, len = arrays.length; i < len; i++ ) {
			if ( typeof arrays[i] === "object" ) {
				array = array.concat( arrays[i] );
			} else {
				array.push( arrays[i] );
			}
		}
		return array;
	}
	
}