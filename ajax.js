
const DEFAULT_SETTINGS = {
	method	:	'POST',
	dataType:	'json',
	error	:	default_error
}

function wrapper_ajax(url, data, callback, options = {}){
	var settings = $.extend({}, DEFAULT_SETTINGS, options);
	settings.url = url;
	settings.data = data;
	settings.success = callback;
	$.ajax(settings);
}

function default_error(jqXHR, status, error){
	console.error(error +  ' ' +  status);
}
