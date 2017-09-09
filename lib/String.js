
exports.chunk_split = chunk_split;
exports.reverse = reverse;
exports.substr = substr;
exports.replace = replace;
exports.strpos = strpos;
exports.count_chars = count_chars;
exports.ltrim = ltrim;
exports.rtrim = rtrim;
exports.trim = trim;
exports.explode = explode;
exports.pad = pad;
	const PAD_RIGHT = 0;
	const PAD_LEFT = 1;
	const PAD_BOTH = 2;
	exports.PAD_RIGHT	= PAD_RIGHT;
	exports.PAD_LEFT	= PAD_LEFT;
	exports.PAD_BOTH	= PAD_BOTH;


function chunk_split( str, chunklen = 76, end = "\r\n" ) {
	if ( str.length <= chunklen ) {
		return str;
	}
	var rStr = "";
	for( var i = 0, len = str.length / chunklen; i < len; i++ ) {
		rStr += substr( str, i*chunklen, chunklen ) + end;
	}
	return rStr;
}

function reverse( str ) {
	var rStr = "";
	for( var i = 0, len = str.length; i < len; i++ ) {
		rStr += str[len-1-i];
	}
	return rStr;
}

function substr( str, start, len = null ) {
	if ( start < 0 ) {
		start = require( "./Math" ).abs( start );
		len = ( len === null ) ? start : len;
		str = reverse( substr( reverse( str ), 0, start ) );
		start = 0;
	} else if ( len === null ) {
		len = str.length-start;
	}
	if ( len > str.length-start ) {
		len = str.length-start;
	}
	var rStr = "";
	for( var i = 0; i < len; i++ ) {
		rStr += str[start+i];
	}
	return rStr;
}

function replace( search, replace, subject, count = null ) {
	var pos = strpos( subject, search );
	var searchLen = search.length;
	while( pos !== false ) {
		subject = substr( subject, 0, pos ) + replace + substr( subject, pos+searchLen );
		if ( count !== null ) {
			count--;
			if ( !count ) return subject;
		}
		pos = strpos( subject, search, pos+searchLen );
	}
	return subject;
}

function strpos( haystack, needle, i = 0 ) {
	i = ( i < 0 ) ? 0 : i;
	var nLen = needle.length;
	for( var len = haystack.length; i < len; i++ ) {
		if ( substr( haystack, i, nLen ) == needle ) {
			return i;
		}
	}
	return false;
}

function count_chars( str, mode = 0 ) {
	var chars = [];
	for( var i = 0, len = str.length; i < len; i++ ) {
		if ( !chars[ str[i] ] ) {
			chars[ str[i] ] = 1;
		} else {
			chars[ str[i] ]++;
		}
	}
	switch( mode ) {
		case 0: return chars;
		case 1: {
			var rChars = [];
			var i = 0;
			for( var char in chars ) {
				rChars[i++] = {	char: char,
										count: chars[char]	};
			}
		} break;
		case 2: {
			var rChars = "";
			for( var char in chars ) {
				rChars += char;
			}
		} break;
		case 3: {
			var rChars = "abcdefghijklmnopqrstuvwxyz";
			for( var char in chars ) {
				if ( strpos( rChars, char ) !== false ) {
					rChars = replace( char, "", rChars, 1 );
				}
			}
		} break;
	}
	return rChars;
}

function ltrim( str, character_mask = null ) {
	if ( character_mask === null ) {
		str = ltrim( str, " " );
		str = ltrim( str, "\t" );
		str = ltrim( str, "\n" );
		str = ltrim( str, "\r" );
		str = ltrim( str, "\0" );
		str = ltrim( str, "\x0B" );
	} else {
		var maskLen = character_mask.length;
		while( substr( str, 0, maskLen ) == character_mask ) {
			str = replace( character_mask, "", str, 1 );
		}
	}
	return str;
}

function rtrim( str, character_mask = null ) {
	return reverse( ltrim( reverse( str ), character_mask ) );
}

function trim( str, character_mask = null ) {
	return rtrim( ltrim( str, character_mask ), character_mask );
}

function explode( delimiter, str, limit = Number.MAX_SAFE_INTEGER ) {
	limit = ( limit < 0 ) ? Number.MAX_SAFE_INTEGER : limit;
	var pos = strpos( str, delimiter );
	if ( pos === false || limit === 1 ) {
		return [str];
	}
	str = ltrim( str, delimiter );
	var array = [];
	var delLen = delimiter.length;
	while( pos !== false ) {
		array.push( substr( str, 0, pos ) );
		limit--;
		str = substr( str, pos+delLen );
		if ( limit === 1 ) {
			array.push( str );
			return array;
		}
		pos = strpos( str, delimiter );
	}
	if ( str !== "" ) {
		array.push( str );
	}
	return array;
}

function pad( input, pad_length, pad_string = " ", pad_type = PAD_RIGHT ) {
	pad_length = pad_length - input.length;
	if ( pad_length <= 0 ) return input;
	if ( pad_type == PAD_BOTH ) {
		for( var i = 0; i < pad_length; i++ ) {
			input = ( i % 2 ) ? pad_string + input : input + pad_string;
		}
		return input;
	} else {
		for( var i = 0, pad = ""; i < pad_length; i++ ) {
			pad += pad_string;
		}
		return ( pad_type == PAD_LEFT ) ? pad + input : input + pad;
	}
}


