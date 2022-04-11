let phone = anime({
  targets: '#phone',
  translateX:-20,
  opacity: [0,1]
});

let inputs = anime({
  targets: '.inputs',
  opacity: [.2, .4, .6, .8, 1],
  translateY:5,
  autoplay: false
})


anime.timeline({loop:false})
.add({
    targets: "#developerName span",
    scale: [2, 1],
    opacity: [0,1],
    delay: function(element, i){
        return i*100;
    }
})