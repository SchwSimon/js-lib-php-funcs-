

exports.put_contents = put_contents;
	const FILE_APPEND = "a";
	const LOCK_EX = "x";
	exports.FILE_APPEND = FILE_APPEND;
	exports.LOCK_EX = LOCK_EX;
exports.get_contents = get_contents;
exports.unlink = unlink;
exports.mkdir = mkdir;


const fs = require( "fs" );
const str = require( "./String" );

function put_contents( filename, data, flags, mode, encoding, callback ) {
	var args = [];
	for (var i = 0, len = arguments.length; i < len; i++) {
		args.push( arguments[i] );
	}
	
	filename = args.shift();
	data = args.shift();
	callback = args.pop();
	
	fs.appendFile( filename, data, {
		flag: (args.length > 0) ? args.shift() : 'w',
		mode: (args.length > 0) ? args.shift() : 0666,
		encoding: (args.length > 0) ? args.shift() : 'utf8'
	}, callback );
}

function get_contents( filename, encoding, callback ) {
	var args = [];
	for (var i = 0, len = arguments.length; i < len; i++) {
		args.push( arguments[i] );
	}
	
	filename = args.shift();
	callback = args.pop();
	
	var options = { encoding: (args.length > 0) ? args.shift() : 'utf8'	};
	
	fs.readFile( filename, options, callback );
}

function unlink( filenames, callback ) {
	function doUnlink( filenames, callback, errors ) {
		if ( !filenames.length ) return callback( errors );
		fs.unlink( filenames.shift(), function( err ) {
			if ( err ) {
				errors.push( err );
			}
			doUnlink( filenames, callback, errors );
		});
	}
	doUnlink( ( typeof filenames === "string" ) ? [filenames] : filenames, callback, [] );
}

function mkdir( pathname, mode, recursive, callback ) {
	var args = [];
	for (var i = 0, len = arguments.length; i < len; i++) {
		args.push( arguments[i] );
	}
	pathname = args.shift();
	callback = args.pop();
	mode = ( args.length > 0 ) ? mode : 0777;
	recursive = ( args.length > 0 ) ? recursive : false;
	if ( recursive ) {
		var pathChunks = str.explode( "/", pathname );
		pathChunks[0] = str.ltrim( pathChunks[0], "." );
		var path = "";
		for( var i = 0, len = pathChunks.length; i < len; i++ ) {
			if ( pathChunks[i] ) {
				path += pathChunks[i] + "/";
				mkdir( "./" + path, mode, false, (( i === len-1) ? callback : ()=>{}) );
			}
		}
		return;
	}
	fs.mkdir( pathname, mode, callback );
}