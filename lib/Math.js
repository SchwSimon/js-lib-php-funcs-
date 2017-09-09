
exports.abs = abs;
exports.ceil = ceil;
exports.floor = floor;
exports.round = round;
exports.pow = pow;
exports.min = min;
exports.max = max;


const utils = require( './utils' );

function abs( value ) {
	value = value*1;
	return ( value < 0 ) ? -value*1 : value*1;
}

function ceil( value ) {
	value = (value+"").split( "." );
	if ( value.length > 1 && value[1] > 0 ) {
		if ( value[0] < 0 ) return value[0]*1;
		value[0]++;
	}
	return value[0]*1;
}

function floor( value ) {
	value = (value+"").split( "." );
	if ( value.length > 1 && value[0] < 0 && value[1] > 0 ) {
		return --value[0];
	}
	return value[0]*1;
}

function round( value ) {
	value = (value+"").split( "." );
	if ( value.length > 1 ) {
		if ( value[1] < 5 ) return value[0]*1;
		value[0] = (value[0]*1) + (( value[0] < 0 ) ? -1 : 1);
	}
	return value[0]*1;
}

// loop or recursive
function pow( base, exp, value = base ) {
	for( var i = 1; i < exp; i++ ) {
		value *= base;
	}
	return value;
	// value *= base;
	// exp--;
	// return ( exp > 1 ) ? pow( base, exp, value ) : value;
}

function min( value, ...values ) {
	values = ( values.length ) ? utils.mergeArrays( value, values ) : value;
	var min = values[0];
	for( var i = 1, len = values.length; i < len; i++ ) {
		if ( values[i] < min ) {
			min = values[i]*1;
		}
	}
	return min;
}

function max( value, ...values ) {
	values = ( values.length ) ? utils.mergeArrays( value, values ) : value;
	var max = values[0];
	for( var i = 1, len = values.length; i < len; i++ ) {
		if ( values[i] > max ) {
			max = values[i]*1;
		}
	}
	return max;
}


