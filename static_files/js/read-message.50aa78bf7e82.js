$("#read").click(function(e){
	var formData = new FormData()
  	formData.append('method', 'post')
	formData.append('csrfmiddlewaretoken', $("input[name='csrfmiddlewaretoken']").val())
	$.ajax({
        type: "POST",
        url: "",
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {
                  M.toast({html: "Leido", classes: 'rounded green'});
        },
        error: function (data) {
                  M.toast({html: "Error", classes: 'rounded red'});
        }
	})
})