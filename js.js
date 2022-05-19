var buttons = document.getElementsByClassName("button");
var p_stosowanie = document.getElementsByClassName("stosowanie");
var i;

console.log(buttons);
console.log(buttons.length);
console.log(document.getElementsByClassName("button")[0]);

function hide_stosowanie() {
    "use strict";
    var array;
    document.getElementsByClassName("stosowanie");
    for (i = 0; i < array.length; i += 1) {
        array[i].hide();
    }
}

function clk() {
    "use strict";
    var thisdiv = this.parentElement;
    if(thisdiv.querySelector("#opis").style.display !== "none") {
        thisdiv.querySelector("#opis").style.display = "none";
        thisdiv.querySelector("#stosowanie").style.display = "block";
    }else{
        thisdiv.querySelector("#opis").style.display = "block";
        thisdiv.querySelector("#stosowanie").style.display = "none";
    }
}

for (i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener("click", clk);
    p_stosowanie[i].style.display = "none";
}
