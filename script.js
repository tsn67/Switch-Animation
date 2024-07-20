var button = document.querySelector(".slider");
var circle = document.querySelector(".circle");
var main = document.querySelector(".main-container");
var isLeft = true;

// button.addEventListener("click",function (){
//     toggleAnimation();
// });

// circle.addEventListener("click",function (){
//     toggleAnimation();
// });

main.addEventListener("click",function (){
    toggleAnimation();
});

var string = document.querySelector("h1");

function toggleAnimation() {
    if(isLeft) {
        circle.classList.add("animate-circle");
        circle.classList.remove("animate-left");
        isLeft = false;
        string.innerHTML = "True";
    } else {
        circle.classList.toggle("animate-left");
        circle.classList.remove("animate-circle");
        isLeft = true;
        string.innerHTML = "False";
    }
}