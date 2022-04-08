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
            if (data.code == 200) {
                alert("Mensaje enviado correctamente");
            } else {
                alert("Datos inválidos, por favor revísalos");
            }
            console.log(data.status)
            submit.css('display', 'inline');
            preloader.css('display', 'none');
        },
        error: function (data) {
            alert("Error al enviar la información");
            submit.css('display', 'inline');
            preloader.css('display', 'none');
        }
    });
});