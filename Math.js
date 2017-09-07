
const utils = require( "./utils" );

class Math {
	
	static abs( value ) {
		value = value*1;
		return ( value < 0 ) ? -value*1 : value*1;
	}
	
	static ceil( value ) {
		value = (value+"").split( "." );
		if ( value.length > 1 && value[1] > 0 ) {
			if ( value[0] < 0 ) return value[0]*1;
			value[0]++;
		}
		return value[0]*1;
	}
	
	static floor( value ) {
		value = (value+"").split( "." );
		if ( value.length > 1 && value[0] < 0 && value[1] > 0 ) {
			return --value[0];
		}
		return value[0]*1;
	}
	
	static round( value ) {
		value = (value+"").split( "." );
		if ( value.length > 1 ) {
			if ( value[1] < 5 ) return value[0]*1;
			value[0] = (value[0]*1) + (( value[0] < 0 ) ? -1 : 1);
		}
		return value[0]*1;
	}
	
	// loop or recursive
	static pow( base, exp, value = base ) {
		for( var i = 1; i < exp; i++ ) {
			value *= base;
		}
		return value;
		// value *= base;
		// exp--;
		// return ( exp > 1 ) ? Math.pow( base, exp, value ) : value;
	}
	
	static min( value, ...values ) {
		values = ( values.length ) ? utils.mergeArrays( value, values ) : value;
		var min = values[0];
		for( var i = 1, len = values.length; i < len; i++ ) {
			if ( values[i] < min ) {
				min = values[i]*1;
			}
		}
		return min;
	}
	
	static max( value, ...values ) {
		values = ( values.length ) ? utils.mergeArrays( value, values ) : value;
		var max = values[0];
		for( var i = 1, len = values.length; i < len; i++ ) {
			if ( values[i] > max ) {
				max = values[i]*1;
			}
		}
		return max;
	}
	
}

module.exports = Math;