$("#lang_english").click(function(e){
  lang = "en"
  var loadLang = function(lang){
    var processLang = function(data){
      var arr = data.split('\n');
      for(var i in arr){
        if( lineValid(arr[i]) ){
          var obj = arr[i].split('=>');
          assignText(obj[0], obj[1]);
        }
      }
    };
    var assignText = function(key, value){
      $('[data-lang="'+key+'"]').each(function(){
        var attr = $(this).attr('data-destine');
        if(typeof attr !== 'undefined'){
          $(this).attr(attr, value);
        }else{
          $(this).html(value);
        }
      });
    };
    var lineValid = function(line){
      return (line.trim().length > 0);
    };
    // $('.loading-lang').addClass('show');
    $.ajax({
      url: 'translate/'+lang+'.txt',
      error:function(){
        alert('No se cargó traducción');
      },
      success: function(data){
        // $('.loading-lang').removeClass('show');
        processLang(data);
      }
    });
  };  
})