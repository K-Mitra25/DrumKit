for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var btn=this.innerHTML;
        makeSound(btn);
        buttonAnimation(btn);
        
    });
}
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key){
    key=key.toUpperCase();

    switch (key) {
        case "W":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        case "S":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        case "A":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        case "D":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
        break;
        case "J":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
        break;
        case "K":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
        break;
        case "L":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;

        default:
            break;
    }
}

function buttonAnimation(key)
{

    key=key.toLowerCase();
    var act=document.querySelector("."+key);
    act.classList.add("pressed");
    setTimeout(function(){
        act.classList.remove("pressed");
    }, 100); 
}