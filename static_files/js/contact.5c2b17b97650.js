$("#formContact").submit(function(e) {
    e.preventDefault();
    let preloader = $('#preloader');
    let submit = $('#submit');
    submit.css('display', 'none');
    preloader.css('display', 'inline-block');
    
    if($("#message").val().length > 500){
        if(language=="en"){
            M.toast({html: "Error: Your message must not exceed 500 characters", classes: 'rounded red'});
        } else {
            M.toast({html: "Error: Tu mensaje no debe exceder de los 500 caracteres", classes: 'rounded red'});
        }
        submit.css('display', 'inline');
        preloader.css('display', 'none');
    } else {
        $.ajax({
            type: "POST",
            url: "/welcome/contact/",
            data: $(this).serialize(),
            success: function (data) {
                $('#modal1').modal('modal-trigger')
                submit.css('display', 'inline');
                preloader.css('display', 'none');
                document.getElementById("formContact").reset()
            },
            error: function (data) {
                if(language=="en"){
                    if(data.status==0 || data.status==500){
                        M.toast({html: "Error: Sorry, your message could not be sent", classes: 'rounded red'});
                    } else if(data.status==400){
                        M.toast({html: "Error: Please check your data", classes: 'rounded red'});
                    } else if(data.status==409){
                        M.toast({html: "Error: Invalid email", classes: 'rounded red'});
                    }
                } else {
                    if(data.status==0 || data.status==500){
                        M.toast({html: "Error: Lo siento, tu mensaje no ha podido enviarse", classes: 'rounded red'});
                    } else if(data.status==400){
                        M.toast({html: "Error: Por favor revisa tus datos", classes: 'rounded red'});
                    } else if(data.status==409){
                        M.toast({html: "Error: Correo inválido", classes: 'rounded red'});
                    }
                }
                submit.css('display', 'inline');
                preloader.css('display', 'none');
            }
        });
    }
});