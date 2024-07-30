const b = document.querySelector('button.btn-no')
b.addEventListener("mouseover",moveHover)
b.addEventListener("click",moveHover)

const go = document.querySelector('button.btn-yes')
go.addEventListener("click",reply)

const orgx = b.style.right;
const orgy = b.style.top;


function moveHover(){
    const i = Math.floor(Math.random()*500)+1;
    const j = Math.floor(Math.random()*500)+1;

    b.style.right = i+"px"
    b.style.top = j+"px"
    b.style.transition = "0.5s";

    
    document.getElementById("reply").innerHTML = "";


}

function reply(){
    b.style.right = orgx;
    b.style.top = orgy;
    b.style.transition ="0s"
    document.getElementById("reply").innerHTML = "I love you too.<br>";
}

function closeWindow()
{
        window.focus();
        window.close();
}

function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }
