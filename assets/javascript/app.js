

// window.onload = function(){

//     var content = document.getElementById("content");
//     var button = document.getElementById("show-more");

//     button.onclick = function(){
//         if (content.className == "open"){
//             //shrink the box
//             content.className = "";
//             button.innerHTML = "show more";
//         }else {
//             //expand the box
//             content.className = "open";
//             button.innerHTML = "show less";
//         }
//     };

// };

//JAVASCRIPT TIMER

// var myMessage = document.getElementById("message");

// function showMessage(){
//     myMessage.className = "show";
// }

// setTimeout(showMessage, 3000);

var colorChanger = document.getElementById("color-changer");
var colours = ["red", "blue", "green", "pink"];
var counter = 0;

function changecolor (){
    if (counter >= colours.length){
        counter = 0;
    }

    colorChanger.style.background = colours[counter];
    counter++;
};

var myTimer = setInterval(changecolor, 3000);

colorChanger.onclick = function(){
    clearInterval(myTimer);
    colorChanger.innerHTML = "timer stopped."
};