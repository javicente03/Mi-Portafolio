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
text1 = "Ingeniero de sistemas, con un año de experiencia en el desarrollo web, \
        tengo conocimientos de las tecnologías Python, \
        Php, Java, JavaScript, HTML, CSS, MySQL y PostgreSQL, especializado en el \
        desarrollo y consumo de APIs Rest y Web Scraping."

text2 = "Si deseas un software \
        a medida puedes contactarme."

text3 = "Estoy en constante aprendizaje \
        y crecimiento profesional y personal."

presentationText([text1, text2, text3])
function presentationText(words, id){
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
}



// EVENTO PARA EL CAMBIO DE IDIOMA
// $("#lang_english").click(function(e){
//     $("#lang_spanish").prop("class", '')
//     $(this).prop("class", 'lang-active')
//     $("#spanish").css("display","none")
//     $("#english").css("display","initial")
//     // ALTERO EL MENU
//     document.querySelector("#lang_spanish span").innerHTML = "Spanish"
//     document.querySelector("#lang_english span").innerHTML = "English"
//     document.querySelector("#about-button").innerHTML = "About"
//     document.querySelector("#technologies-button").innerHTML = "Technologies"
//     document.querySelector("#works-button").innerHTML = "Works"
//     document.querySelector("#education-button").innerHTML = "Education"
//     document.querySelector("#contact-button").innerHTML = "Contact"
// })

// $("#lang_spanish").click(function(e){
//     $("#lang_english").prop("class", '')
//     $(this).prop("class", 'lang-active')
//     $("#english").css("display","none")
//     $("#spanish").css("display","initial")
//     // ALTERO EL MENU
//     document.querySelector("#lang_spanish span").innerHTML = "Español"
//     document.querySelector("#lang_english span").innerHTML = "Inglés"
//     document.querySelector("#about-button").innerHTML = "Sobre mí"
//     document.querySelector("#technologies-button").innerHTML = "Tecnologías"
//     document.querySelector("#works-button").innerHTML = "Trabajos"
//     document.querySelector("#education-button").innerHTML = "Educación"
//     document.querySelector("#contact-button").innerHTML = "Contáctame"
// })