$("#lang_english").click(function(e){
    $('.loading-lang').addClass('show');
    $.ajax({
      url: '/static/languages/en.txt',
      error:function(){
        alert('No se cargó traducción');
      },
      success: function(data){
        // $('.loading-lang').removeClass('show');
        processLang(data);
      }
    });
    console.log("KKK")
});


function processLang(data){
  var arr = data.split('\n');
  for(var i in arr){
    if( lineValid(arr[i]) ){
      var obj = arr[i].split('=>');
      assignText(obj[0], obj[1]);
      // console.log("II")
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