var path = `M 10 100 Q 500 100 990 100`

var finalPath = `M 10 100 Q 500 100 990 100`


document.querySelector('#string')


string.addEventListener("mouseenter", function(dets){
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`

    gsap.to("svg path" , {
        attr: {d: path},
        duration: 0.7,
        ease: "power3.out"
    })
})

string.addEventListener("mouseleave", function(){
    gsap.to("svg path" , {
        attr: {d: finalPath},
        duration: .7,
        ease: "elastic.out(1,0.2)"
    })
})