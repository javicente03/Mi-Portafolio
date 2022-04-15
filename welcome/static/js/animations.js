// ANIMACIÓN DEL TELEFONO/WHATSAPP
let phone = anime({
  targets: '#phone',
  translateX:-20,
  opacity: [0,1]
});

// ANIMACIÓN DE LOS SERVICIOS
let services = anime.timeline({
  targets: '.services',
  opacity: [.2, .4, .6, .8, 1],
  translateY:10,
  delay: anime.stagger(250),
  autoplay: false
});

services.add({
  targets: '.services',
  rotate: 45,
  loop:true,
});

// ANIMACIÓN DEL FORMULARIO DE CONTACTO
let inputs = anime({
  targets: '.inputs',
  opacity: [.2, .4, .6, .8, 1],
  translateY:5,
  autoplay: false
});

// ANIMACIÓN DEL NOMBRE PRINCIPAL (DESARROLLADOR)
anime.timeline({loop:false})
.add({
    targets: "#developerName span",
    scale: [2, 1],
    opacity: [0,1],
    delay: function(element, i){
        return i*100;
    }
});