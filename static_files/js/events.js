// EVENTO DE APARICIÓN DEL TELEFONO (WhatsApp)
var linkWs = $('#linkWs');

linkWs.mouseover(function(){
    $("#phone").prop('class', 'phone');
    phone.play()
});

linkWs.mouseout(function(){
    $("#phone").prop('class', 'phone-out');
});

// EVENTO PARA LA APARICION DEL FORMULARIO DE CONTACTO
banderaContact = true;
const waypoints = [
    {
        id: 'contact',
        handler(direction) {
            if(banderaContact){
                inputs.play()
                banderaContact = false
            }
        }
    },
];

waypoints.forEach(({ id, handler }) => (
    new Waypoint({
        element: document.getElementById(id),
        handler,
        offset: 500 // añade un margen superior opcional
    })
));


// EVENTO PARA LA APARICION DINAMICA DEL NOMBRE PRINCIPAL DEL PORTAFOLIO (ING. JAVIER GERARDO)
let developerName = document.getElementById("developerName");
developerName.innerHTML = developerName.innerText.split("").map(function(char){
    if(char == " "){
        char = "&nbsp";
    }
    return "<span>"+char+"</span>";
}).join("");



// TEXTO DE PRESENTACIÓN DINAMICO
var presentationText = function(words){
    var visible = true
    var con = document.getElementById("presentation")
    var letterCount = 1
    var x = 1
    var waiting = false
    var target = document.getElementById('presentationText')

    window.setInterval(function(){
        if(letterCount===0 && waiting===false){
            waiting = true
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function(){
                var userword = words.shift()
                words.push(userword)
                x = 1
                letterCount +=x
                waiting = false
            }, 1000)
        } else if(letterCount === words[0].length +1 && waiting === false){
            waiting = true
            window.setTimeout(function(){
                x = -1
                letterCount +=x
                waiting = false
            }, 1000)
        } else if(waiting===false){
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount +=x
        }
    }, 60)

    window.setInterval(function(){
        if(visible === true){
            con.className = "presentation hidden"
            visible= false
        } else{
            con.className = "presentation"
            visible = true
        }
    }, 400)

    return {
        setWords: function(newWords) {
            words = newWords;
        },
    }
}


var presentationObject = presentationText(textSpanish)