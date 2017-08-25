# jquery_ajax_wrapper
Ajax wrapper for JQuery. This javascript have as finallity code reuse and make it simpler.

Usage
-------
```javascript
	var data = {
		token : 'abcdefghijlmnopqrstuvwxyz1234567890',
		other_thing : 'Hakuna Matata'
	}
	var url = 'test/test.php';
	
	//Compare this
	wrapper_ajax(url, data, callback_on_success);
	
	function callback_on_success(data, status, jqXHR){
		// Your code
	}

	//To this
	$.ajax({
		method		: 'POST',
		dataType	: 'json',
		url		: url,
		data		: data,
		success		: function(data, status, jqXHR){
			// Your code
		},
		error		: function(jqXHR, status, error){
			// Your code
		}
	});
```

