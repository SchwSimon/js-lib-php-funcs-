
exports.search = search;
exports.change_key_case = change_key_case;
	
function search(needle, haystack, strict = false) {
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

function change_key_case( array, strCase = 0 ) {
	var caseFunc = ( !strCase ) ? "toLowerCase" : "toUpperCase";
	for( var key in array ) {
		var value = array[key];
		delete array[key];
		array[ key[caseFunc]() ] = value;
	}
	return array;
}


