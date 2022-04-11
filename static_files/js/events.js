var linkWs = $('#linkWs');

linkWs.mouseover(function(){
    $("#phone").prop('class', 'phone');
    phone.play()
});

linkWs.mouseout(function(){
    $("#phone").prop('class', 'phone-out');
});

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

    $( document ).ready(function() {
        $('#modal1').modal('modal-trigger')
    });
}


function kk(){
    alert("ooo")
}