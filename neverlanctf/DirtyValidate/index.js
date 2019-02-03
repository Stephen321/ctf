      /*
$.ajax('webhooks/get_username.php',{})
		.done(function(userData)
		{ 
			usernames = JSON.parse(userData).usernames;
            for (var name of [])
            $.ajax('webhooks/get_password.php?user='+encodeURIComponent(name),{})
                .done(function(data)
                { 
                    data = data.replace(/(\r\n|\n|\r)/gm,"");
                    data = atob(data);
                });
        );
*/

// lets use fetch instead:
fetch('webhooks/get_username.php')
    .then(res => res.json())
    .then(userData => {
        var passPromises = [];
        for (var name of userData.usernames) {
            var prom = fetch('webhooks/get_password.php?user='+encodeURIComponent(name))
                        .then(passRes => passRes.text())
                        .then(pass => {
                            pass = pass.replace(/(\r\n|\n|\r)/gm,"");
                            return atob(pass);
                        });
            passPromises.push(prom);
        }
        Promise.all(passPromises).then(console.log);
    });
    
// prints out decoded passwords assoicated with each user:
// ["Try a different user", "not this one either...↵", "flag{D0n't_7rus7_JS}", "Wrong user"]