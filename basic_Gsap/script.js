

gsap.to("#box1",{
    x:1000,
    duration:2,
    delay:.4,
    rotate:360,
    backgroundColor: "blue",
    borderRadius: "50%",
    repeat:-1,
    yoyo:true
})


gsap.from("#box2", {
    x:1200,
    duration:2,
    delay:.4,
    rotate:360,
    backgroundColor: "green",
    borderRadius: "50%"
})


// animating H1 

// gsap.from("h1" , {
//     opacity:0,
//     duration:1,
//     x:30,
//     y:20,
//     delay:1,
//     stagger: .3,
//     color: "crimson"
// })



// Understanding Timeline 

var t1 = gsap.timeline()

t1.from("h2" , {
    y:-20,
    opacity:0,
    duration:.6,
    delay:.2
})

t1.from("h3" , {
    y:-20,
    opacity:0,
    duration:.4,
    delay:.2,
    stagger:.2
})

t1.from("h1" , {
    y:20,
    opacity:0,
    duration:.5,
    scale:.2
})