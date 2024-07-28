let main = document.querySelector('#main')
let cursor = document.querySelector('#cursor')
let image = document.querySelector('#image')


main.addEventListener("mousemove", function(dets){
    gsap.to(cursor , {
        x:dets.x,
        y:dets.y,
        duration:1
    })
})


image.addEventListener("mouseenter" , function (){
    cursor.innerHTML = "View Image"
    gsap.to(cursor,{
        scale:4,
        backgroundColor: "#ddbbbb49",
    })
})

image.addEventListener("mouseleave",function(){
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "lightblue"
    })
})