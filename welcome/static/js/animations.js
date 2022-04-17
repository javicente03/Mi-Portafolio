// ANIMACIÓN DE LA IMAGEN DE PERFIL
let profileMin = anime.timeline({loop: false})
.add({
  targets: '.profile-max',  
  translateX: 20
})
.add({
  targets: '.profile-min',
  translateY: 1
});

// ANIMACIÓN DEL TELEFONO/WHATSAPP
let phone = anime({
  targets: '#phone',
  translateX:-20,
  opacity: [0,1]
});

// ANIMACIÓN DE LOS SERVICIOS
let services = anime({
  targets: '.services',
  opacity: [.2, .4, .6, .8, 1],
  translateY:10,
  delay: anime.stagger(300),
  autoplay: false
});

// ANIMACIÓN DE LA FUNCTION
let functionAdvance = anime.timeline({
  loop:false,
  autoplay:false,
});

functionAdvance.add({
  targets: '.var-const',
  duration: 1000,
  translateX: 25,
  opacity: 1,
  delay: anime.stagger(500),
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