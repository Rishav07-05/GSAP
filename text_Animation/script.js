function breakTheText(){
    var h1 = document.querySelector("h1"); 
    var h1Text = h1.textContent; 

    let spiltedText = h1Text.split("");

    let halfValue = Math.floor(spiltedText.length/2)

    
    let clutter = "";

    spiltedText.forEach(function(dets , idx){
        if(idx < halfValue){
            clutter+= `<span class="start">${dets}</span>`
        }
        else{
            clutter+= `<span class="end">${dets}</span>`
        }
    });

    h1.innerHTML = clutter; 
}

breakTheText();


gsap.from(".start" , {
    y:70,
    opacity:0,
    duration:.5,
    delay:.5,
    stagger: -0.14
})

gsap.from(".end" , {
    y:70,
    opacity:0,
    duration:.5,
    delay:.5,
    stagger: 0.14
})