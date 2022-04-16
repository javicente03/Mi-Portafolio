$("#form").submit(function(e){
	e.preventDefault();
    $.ajax({
	    type: "POST",
	   	url: "/login/",
		data: $(this).serialize(),
		success: function (data) {
		    if(data=='None'){
		    	location.href = "/panel/list-pending-message/"
		    } else {
		    	location.href = data
		    }
		},
		error: function (data) {
	        M.toast({html: "Error", classes: 'rounded red'});
		}
	})
})