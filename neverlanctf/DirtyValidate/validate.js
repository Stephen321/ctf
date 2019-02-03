

	  // reference here
	  // https://api.jquery.com/jQuery.ajax/
      // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob

      // For element with id='name', when a key is pressed run this function
      $('#name').on('keypress',function(){
        // get the value that is in element with id='name'
        var that = $('#name');
		// make an ajax request to get the expected username
        $.ajax('webhooks/get_username.php',{})
		.done(function(data)
		{ // once the request has been completed, run this function
			data = JSON.parse(data);
            if( data.usernames.indexOf(that.val()) != -1 ){ // see if the username is in the list
 
              that.css('border', '1px solid green'); // if it matches turn the border green
              $('#output').html('Username is correct'); // state that the user was correct

            }else{ // if the user typed in something incorrect

              that.css('border', ''); // set input box border to default color
              $('#output').html('Username is incorrect'); // say the user was incorrect

            }

          }
        );
      });

      // For the password input now
	  // This is a BAD idea, never validate sensitive data in javascript
      $('#pass').on('keypress', function(){
		// get value for element with id='pass'
        var that = $('#pass');
		// make an ajax request to get the expected password for the given username
        $.ajax('webhooks/get_password.php?user='+encodeURIComponent($('#name').val()),{})
		.done(function(data)
		{// once the request has completed, run this function
			// remove whitespace from data
            data = data.replace(/(\r\n|\n|\r)/gm,"");
			// check if the data matches the given value
            if(window.atob(data) == that.val()){

			  // if value is correct, show a green border
			  that.css('border', '1px solid green');
			  $('#output').html(window.atob(data));

            }else{

			  // if value is false, remove border
              that.css('border', '');
              $('#output').html('Password is incorrect');

			}

          }
        );
      });
    