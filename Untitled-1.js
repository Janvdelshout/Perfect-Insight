var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentSCrollpos = window.pageYOffset;
var i=0
if (prevScrollpos > currentSCrollpos) {
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("divbody1").style.top="1200px";
} 
else {
    document.getElementById("navbar").style.top = "-200px";
    document.getElementById("divbody1").style.top= "600px";
    i =i + 1;
}
if(i = 1)
    document.getElementById("divbody1").style.top= "600px";
}
prevScrollpos = currentSCrollpos;
}