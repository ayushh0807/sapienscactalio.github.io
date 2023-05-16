score=0;
cross=true;
audio=new Audio('music.mp3');
audiogo=new Audio('Game Over.mp3');
setTimeout(() => {
    
    audio.play();
}, 1000);
document.onkeydown=function(e){
    console.log("key code is: ",e.keyCode)
    if(e.keyCode==38){
        human=document.querySelector('.human');
        human.classList.add('animatehuman');
        setTimeout(() => {
            human.classList.remove('animatehuman')
        }, 700);
    }
    if(e.keyCode==32){
        human=document.querySelector('.human');
        human.classList.add('animatehuman');
        setTimeout(() => {
            human.classList.remove('animatehuman')
        }, 700);
    }
    if(e.keyCode==39){
        human=document.querySelector('.human');
        humanX=parseInt(window.getComputedStyle(human,null).getPropertyValue('left'));
        human.style.left=humanX+112+"px";
    }
    if(e.keyCode==37){
        human=document.querySelector('.human');
        humanX=parseInt(window.getComputedStyle(human,null).getPropertyValue('left'));
        human.style.left= (humanX-112) +"px";
    }
}

setInterval(() => {
    human=document.querySelector('.human');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');

    hx=parseInt(window.getComputedStyle(human,null).getPropertyValue('left'));
    hy=parseInt(window.getComputedStyle(human,null).getPropertyValue('top'));


    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX=Math.abs(hx-ox);
    offsetY=Math.abs(hy-oy);
    //console.log(offsetX,)
    if(offsetX<73 && offsetY<52){
        gameOver.innerHTML="Game Over-Now Reload"
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 2000 );
    }
    else if(offsetX<145 && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);
        setTimeout(() => {
            aniDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur=aniDur-1.2;
            obstacle.style.animationduration=newDur+'s';
            console.log('New animation duration: ',newDur)
        }, 500);
        
    }


}, 10);

function updateScore(score){
    scoreCount.innerHTML="Your Score: "+ score;
}