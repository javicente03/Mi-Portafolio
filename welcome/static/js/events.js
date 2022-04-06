var linkWs = $('#linkWs');

linkWs.mouseover(function(){
    $("#phone").prop('class', 'phone');
    setInterval(function(){
        $("#phone").style.transform = 'rotate(360deg)';
    }, 1000);
});

linkWs.mouseout(function(){
    $("#phone").prop('class', 'phone-out');
});