$("#formContact").submit(function(e) {
    e.preventDefault();
    let preloader = $('#preloader');
    let submit = $('#submit');
    submit.css('display', 'none');
    preloader.css('display', 'inline-block');
    
    $.ajax({
        type: "POST",
        url: "/welcome/contact/",
        data: $(this).serialize(),
        success: function (data) {
            M.toast({html: 'Mensaje enviado correctamente', classes: 'rounded green'});
            submit.css('display', 'inline');
            preloader.css('display', 'none');
            document.getElementById("formContact").reset()
        },
        error: function (data) {
            M.toast({html: data.responseText, classes: 'rounded red'});
            submit.css('display', 'inline');
            preloader.css('display', 'none');
        }
    });
});