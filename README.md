# jquery_ajax_wrapper
Ajax wrapper for JQuery. This javascript have as finallity code reuse and make it simpler.

Install
-------

* Open the file ajax.js
* Copy the function wrapper_ajax inside your code and rename it
* Copy the constant DEFAULT_SETTINGS inside your code and edit/add the options to match your preferences
* Copy the function default_error inside your code and edit the code to match your preferences


Comparison
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


Test
-------
* You can download the zip file in the folder test
* It contains a little web server for test purposes
* You need PHP
* Copy it in a web server directory. Example: /var/www/html/test in Apache
* Start the tests
