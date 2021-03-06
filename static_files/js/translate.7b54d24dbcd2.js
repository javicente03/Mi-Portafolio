$("#lang_english").click(function(e){
    // $('.loading-lang').addClass('show');
    $.ajax({
      url: '/static/languages/en.txt',
      error:function(){
        M.toast({html: 'No se pudo cargar la traducción', classes: 'rounded red'});
      },
      success: function(data){
        $("#lang_spanish").removeClass("lang-active");
        $("#lang_english").addClass("lang-active");
        processLang(data);
        $("#name").prop("placeholder", "Tell me your name");
        $("#email").prop("placeholder", "Give me your email");
        $("#message").prop("placeholder", "Please detail your request.");
        presentationObject.setWords(textEnglish);
        language = 'en';
        $("#cv1").prop('href', "/static/files/Curriculum Javier Gerardo Inglés.pdf");
        $("#cv2").prop('href', "/static/files/Curriculum Javier Gerardo Inglés.pdf");
        $('html').attr('lang', "en");
      }
    });
});

$("#lang_spanish").click(function(e){
    // $('.loading-lang').addClass('show');
    $.ajax({
      url: '/static/languages/es.txt',
      error:function(){
        M.toast({html: 'Failed to load translation', classes: 'rounded red'});
      },
      success: function(data){
        $("#lang_english").removeClass("lang-active");
        $("#lang_spanish").addClass("lang-active");
        processLang(data);
        $("#name").prop("placeholder", "Dime tu nombre")
        $("#email").prop("placeholder", "Indícame tu correo electrónico")
        $("#message").prop("placeholder", "Detalla tu solicitud por favor")
        presentationObject.setWords(textSpanish)
        language = 'es';
        $("#cv1").prop('href', "/static/files/Curriculum Javier Gerardo.pdf");
        $("#cv2").prop('href', "/static/files/Curriculum Javier Gerardo.pdf");
        $('html').attr('lang', "es");
      }
    });
});


function processLang(data){
  var arr = data.split('\n');
  for(var i in arr){
    if( lineValid(arr[i]) ){
      var obj = arr[i].split('=>');
      assignText(obj[0], obj[1]);
    }
  }
};


function assignText(key, value){
  $('[data-lang="'+key+'"]').each(function(){
    var attr = $(this).attr('data-destine');
    if(typeof attr !== 'undefined'){
      $(this).attr(attr, value);
    }else{
      $(this).html(value);
    }
  });
};

function lineValid(line){
  return (line.trim().length > 0);
};