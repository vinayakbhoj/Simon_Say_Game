let gameSeq = [];
let userSeq = [];

let btns = ["red", "green", "orange", "yellow"];

let started = false;
let level = 0;
let highestScore = 0;

let h2 = document.querySelector('h2');
document.addEventListener("keypress", function() {
    if (!started){
        // h2.innerText = `Level ${level+1}`;
        started = true;
        console.log(started);     
        levelUp();
    };
});


function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250)
}

function uBtnFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250)
}

function levelUp() {

    userSeq = [];

    level++;
    if(level > highestScore){
        highestScore = level;
        // console.log("New High Score : " + highestScore);
    }
    h2.innerText = `Level ${level}`;

    let ranIdx = Math.floor(Math.random() * 3);
    let ranColor = btns[ranIdx];
    let ranbtn = document.querySelector(`.${ranColor}`)
    // console.log(ranColor);

    gameSeq.push(ranColor);
    console.log(gameSeq);
    
    
    // random buttons choose
    gameFlash(ranbtn);
}

function checkAns(idx) {
    // console.log("current level : " + level);

    // let idx = level-1;

    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp(), 1000) ;
        }
       
    }else {
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Highest Score was <b>${highestScore}</b>
        Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
            
        },150)
        reset();

    }
    
}


function btnPress() {
    let btn = this;
    uBtnFlash(btn)

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
   
    
    checkAns(userSeq.length-1);
    
}

let allBtns = document.querySelectorAll('.btn');

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];

}