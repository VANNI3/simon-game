gameseq=[];
userseq=[];
let btns=["yellow","red","purpel","green"];

let started = false;
let level = 0;
let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){    //starting of game by keyprees
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
       
    }
});

function btnflash(btn){                             // flashing Button
    btn.classList.add("flash");                    // adding class in button element
    setTimeout(function(){
        btn.classList.remove("flash");            // removing class from button element so that the button can flash
    },250);
}

function userflash(btn){                             // flashing Button
    btn.classList.add("userflash");                    // adding class in button element
    setTimeout(function(){
        btn.classList.remove("userflash");            // removing class from button element so that the button can flash
    },250);
}


function levelup(){ 
    userseq=[];                             
    level++;
    h2.innerText=`level ${level}`;
    let randidx=Math.floor(Math.random()*3);              // genrating random index from btns array
    let randcolor=btns[randidx];                         // storing value of genrated randidx in randcolour
    let randbtn=document.querySelector(`.${randcolor}`);  // storing class value of randcolor in randbtn
    // console.log(randidx);
    // console.log(randcolor);
    // console.log(randbtn);
    gameseq.push(randcolor);                             //adding value of randclr in gameseq array
    console.log(gameseq);
    btnflash(randbtn);
    
}

function checkans(idx){
    console.log("curr level: ",level);
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your Score was <b>${level}<b>. press any key to start the game.`;
        reset();
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
    }
}

function btnpress(){
    let btn=this;    // storing the value of which button was pressed
    userflash(btn);
    usercolor= btn.getAttribute("id");
    console.log(`userclr=${usercolor}`);
    userseq.push(usercolor);
    checkans(userseq.length-1);
}



let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}


function reset(){
    highestscores();
    started=false; // reseting all elements 
    gameseq=[];
    userseq=[];
    level=0;
    
}

let highestscore=0;

function highestscores(){
    let h3=document.querySelector("h3"); // displaying highest score 
   
    userscore=level;
    if(userscore>highestscore){
        highestscoree=userscore;
        h3.innerHTML=(`Your Highest Score is= <b>${highestscore}<b>`);
    }
}