
//const utils = require( "./utils" );

class String {
	
	static chunk_split( str, chunklen = 76, end = "\r\n" ) {
		if ( str.length <= chunklen ) {
			return str;
		}
		var rStr = "";
		for( var i = 0, len = str.length / chunklen; i < len; i++ ) {
			rStr += String.substr( str, i*chunklen, chunklen ) + end;
		}
		return rStr;
	}
	
	static reverse( str ) {
		var rStr = "";
		for( var i = 0, len = str.length; i < len; i++ ) {
			rStr += str[len-1-i];
		}
		return rStr;
	}
	
	static substr( str, start, len = null ) {
		if ( start < 0 ) {
			start = Math.abs( start );
			len = ( len === null ) ? start : len;
			str = String.reverse( String.substr( String.reverse( str ), 0, start ) );
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
	
	static replace( search, replace, subject, count = null ) {
		var strpos = String.strpos( subject, search );
		var searchLen = search.length;
		while( strpos !== false ) {
			subject = String.substr( subject, 0, strpos ) + replace + String.substr( subject, strpos+searchLen );
			if ( count !== null ) {
				count--;
				if ( !count ) return subject;
			}
			strpos = String.strpos( subject, search, strpos+searchLen );
		}
		return subject;
	}
	
	static strpos( haystack, needle, i = 0 ) {
		i = ( i < 0 ) ? 0 : i;
		var nLen = needle.length;
		for( var len = haystack.length; i < len; i++ ) {
			if ( String.substr( haystack, i, nLen ) == needle ) {
				return i;
			}
		}
		return false;
	}
	
	static count_chars( str, mode = 0 ) {
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
					if ( String.strpos( rChars, char ) !== false ) {
						rChars = String.replace( char, "", rChars, 1 );
					}
				}
			} break;
		}
		return rChars;
	}
	
	static ltrim( str, character_mask = null ) {
		if ( character_mask === null ) {
			str = String.ltrim( str, " " );
			str = String.ltrim( str, "\t" );
			str = String.ltrim( str, "\n" );
			str = String.ltrim( str, "\r" );
			str = String.ltrim( str, "\0" );
			str = String.ltrim( str, "\x0B" );
		} else {
			var maskLen = character_mask.length;
			while( String.substr( str, 0, maskLen ) == character_mask ) {
				str = String.replace( character_mask, "", str, 1 );
			}
		}
		return str;
	}
	
	static rtrim( str, character_mask = null ) {
		return String.reverse( String.ltrim( String.reverse( str ), character_mask ) );
	}
	
	static trim( str, character_mask = null ) {
		return String.rtrim( String.ltrim( str, character_mask ), character_mask );
	}
	
	static explode( delimiter, str, limit = Number.MAX_SAFE_INTEGER ) {
		limit = ( limit < 0 ) ? Number.MAX_SAFE_INTEGER : limit;
		var strpos = String.strpos( str, delimiter );
		if ( strpos === false || limit === 1 ) {
			return [str];
		}
		str = String.ltrim( str, delimiter );
		var array = [];
		var delLen = delimiter.length;
		while( strpos !== false ) {
			array.push( String.substr( str, 0, strpos ) );
			limit--;
			str = String.substr( str, strpos+delLen );
			if ( limit === 1 ) {
				array.push( str );
				return array;
			}
			strpos = String.strpos( str, delimiter );
		}
		if ( str !== "" ) {
			array.push( str );
		}
		return array;
	}
	
	static pad( input, pad_length, pad_string = " ", pad_type = 0 ) {
		pad_length = pad_length - input.length;
		if ( pad_length <= 0 ) return input;
		if ( pad_type == 2 ) {
			for( var i = 0; i < pad_length; i++ ) {
				input = ( i % 2 ) ? pad_string + input : input + pad_string;
			}
			return input;
		} else {
			for( var i = 0, pad = ""; i < pad_length; i++ ) {
				pad += pad_string;
			}
			return ( pad_type == 1 ) ? pad + input : input + pad;
		}
	}
	
}

module.exports = String;