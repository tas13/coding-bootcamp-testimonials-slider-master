document.getElementById("next1").addEventListener("click", nextSlide);
document.getElementById("prev1").addEventListener("click", prevSlide);

document.getElementById("next2").addEventListener("click", nextSlide);
document.getElementById("prev2").addEventListener("click", prevSlide);

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if(e.keyCode == "39"){
        nextSlide();
    }
    if(e.keyCode == "37"){
        prevSlide();
    }
}

function nextSlide() {
    document.getElementById("slide2").style.display = "inline-block";
    document.getElementById("slide1").style.opacity = '0';
    setTimeout(function(){document.getElementById("slide2").style.opacity = '1';},1000)
}

function prevSlide() {
    document.getElementById("slide1").style.display = "inline-block";
    document.getElementById("slide2").style.opacity = '0';
    setTimeout(function(){document.getElementById("slide1").style.opacity = '1';},1000)
}