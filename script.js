var timer = 60;
var score = 0;
var hitrn = 0;
// event bubble = jispe click karoge uss element pe event raise hoga, aur event listener naa milne par event element ke parent par listener dhundega, waha bhi naa milne par event parent ke parent ke parent par listener dhundega

// Here we will add listener event to parent of bubble because there are a huge no. of bubbles but when it checks each bubble for it's event listener, it won't find any listener. So it will move to it's parent listener and it ha only one parent listener so it will be an easy way.

function makebubble(){
    var clutter = "";

for(var i=1; i<=161; i++){
    var rn = Math.floor(Math.random()*10);
    clutter +=` <div class="bubble">${rn}</div> `;
    // in `...` dynamic values are added ${}
}

// Apply DOM

document.querySelector("#pbot").innerHTML = clutter;
}

function runTimer(){
     var timerint = setInterval(function(){
        if(timer>0){
         timer--;
         document.querySelector("#timerVal").textContent = timer;
        }
        else{
            clearInterval(timerint);
        }
      },1000)
}

function getNewHit(){
   hitrn = Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent = hitrn;
}

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbot")
.addEventListener("click",function(details){
    var clickedNum = console.log(Number(details.target.textContent));
    // target used for getting the details of the element clicked, when it gives details it gives details about <div> part also. So textContent is used and it gives only the content written within it.
    // But it gives the content as a string. To convert it into a number we use "Number()".
    if(clickedNum == hitrun){
        increaseScore();
    }
});

makebubble();
runTimer();
getNewHit();
