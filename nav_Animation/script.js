let t1 = gsap.timeline()
let menu = document.querySelector("#nav i")
let cross = document.querySelector("#full i")
let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")

t1.to("#full" , {
    right:0,
    duration:0.35
})

t1.from("#full h4" , {
    x:150,
    duration:.35,
    stagger:0.2,
    opacity:0
})

t1.from("#full i" , {
    opacity:0
})

t1.pause()

menu.addEventListener("click", function(){
    t1.play()
})

cross.addEventListener("click" , function(){
    t1.reverse()
})


main.addEventListener("mousemove" , function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:.5
    })
})




