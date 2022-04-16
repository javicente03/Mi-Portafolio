// EVENTO DE APARICIÓN DEL TELEFONO (WhatsApp)
var linkWs = $('#linkWs');

linkWs.mouseover(function(){
    $("#phone").prop('class', 'phone');
    phone.play()
});

linkWs.mouseout(function(){
    $("#phone").prop('class', 'phone-out');
});


// EVENTO PARA LA APARICION DE LOS SERVICIOS OFRECIDOS
banderaServices = true;
const waypointsServices = [
    {
        id: 'services',
        handler(direction) {
            if(banderaServices){
                services.play()
                banderaServices = false
            }
        }
    },
];

waypointsServices.forEach(({ id, handler }) => (
    new Waypoint({
        element: document.getElementById(id),
        handler,
        offset: 480 // añade un margen superior opcional
    })
));

// EVENTO PARA LA APARICION DEL FORMULARIO DE CONTACTO
banderaFunction = true;
const waypointsFunction = [
    {
        id: 'education',
        handler(direction) {
            if(banderaFunction){
                functionAdvance.play()
                banderaFunction = false
            }
        }
    },
];

waypointsFunction.forEach(({ id, handler }) => (
    new Waypoint({
        element: document.getElementById(id),
        handler,
        offset: 200 // añade un margen superior opcional
    })
));

// EVENTO PARA LA APARICION DEL FORMULARIO DE CONTACTO
banderaContact = true;
const waypointsContact = [
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

waypointsContact.forEach(({ id, handler }) => (
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
setTimeout(function(e){
    developerName.innerHTML = "Ing. Javier Gerardo"
}, 2000)


// QUITAR OPACIDAD A IMAGENES PERFIL
setTimeout(function(e){
    $("#profile-max").css("opacity", 1);
    $("#profile-min").css("opacity", 1);
}, 2000)

// TEXTO DE PRESENTACIÓN DINAMICO
class presentationText{
    // Inicializo los valores, el textStart inicia en español al instanciar la clase
    constructor(textStart){
        this.words = textStart
        this.visible = true
        this.presentationDiv = document.getElementById("presentation")
        this.letterCount = 1
        this.x = 1
        this.waiting = false
        this.target = document.getElementById('presentationText')
    }
    
    // Ejecuta la escritura dinamica
    write(){
        let that =  this
        window.setInterval(function(){
            if(that.letterCount===0 && that.waiting===false){
                that.waiting = true
                that.target.innerHTML = that.words[0].substring(0, that.letterCount)
                window.setTimeout(function(){
                    var userword = that.words.shift()
                    that.words.push(userword)
                    that.x = 1
                    that.letterCount += that.x
                    that.waiting = false
                }, 1000)
            } else if(that.letterCount === that.words[0].length +1 && that.waiting === false){
                that.waiting = true
                window.setTimeout(function(){
                    that.x = -1
                    that.letterCount += that.x
                    that.waiting = false
                }, 1000)
            } else if(that.waiting===false){
                that.target.innerHTML = that.words[0].substring(0, that.letterCount)
                that.letterCount += that.x
            }
        }, 60)

        window.setInterval(function(){
            if(that.visible === true){
                that.presentationDiv.className = "presentation hidden"
                that.visible= false
            } else{
                that.presentationDiv.className = "presentation"
                that.visible = true
            }
        }, 400)
    }

// Cambia el valor de WORDS de ingles/español y viceversa.
    setWords(newWords){
        this.words = newWords
    }
}

const presentationObject = new presentationText(textSpanish)
presentationObject.write()


// DETECTA LA MEDIA QUERY PARA QUITAR EL CONTAINER A MI DIV DE WORKS DEBIDO A QUE EN CELULAR SE VERÍA
// MUY PEQUEÑO
var mediaqueryList = window.matchMedia("(max-width: 600px)");
mediaqueryList.addListener( function(EventoMediaQueryList) {
  if(EventoMediaQueryList.matches) {
    document.querySelector("#works div").className = ""
  } else {
    document.querySelector("#works div").className = "container"
  }
});