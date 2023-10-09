let x=true;
    let y=true;
let ball=document.querySelector(".ball");
let board=document.querySelector(".board");
let boardCoordinates=board.getBoundingClientRect();
let boardTop=boardCoordinates.top;
let boardLeft=boardCoordinates.left;    
let boardBottom=boardCoordinates.bottom;
let boardRight=boardCoordinates.right;
let leftPaddle=document.querySelector(".left");
let rightPaddle=document.querySelector(".right");
let leftPlayerLives=3;
let rightPlayerLives=3;

// userinputlisten
document.addEventListener('keydown',function(e){
  
    if(e.key=="w")
    {
      movePaddle(leftPaddle,-window.innerHeight*0.1);
    }
    else if(e.key=="s")
    {
        movePaddle(leftPaddle,+window.innerHeight*0.1)
    }
    else if(e.key=="ArrowUp")
    {
        movePaddle(rightPaddle,-window.innerHeight*0.1);
    }
    else if(e.key=="ArrowDown")
    {
        movePaddle(rightPaddle,+window.innerHeight*0.1);
    }

})
function setColor(idx)
{
    let allicons=document.querySelectorAll(".fas.fa-circle");
    allicons[idx].style.color="black";
}
function movePaddle(cPaddle,change)
{
    let cPaddleBounds=cPaddle.getBoundingClientRect();
    if(cPaddleBounds.top+change>=boardCoordinates.top&&cPaddleBounds.bottom+change<=boardCoordinates.bottom)
    {
    cPaddle.style.top=cPaddleBounds.top+change+"px";
    }
}

// 
function moveBall()
{
    let ballCoordinates=ball.getBoundingClientRect();
    let ballTop=ballCoordinates.top;
    let ballLeft=ballCoordinates.left;
    let ballBottom=ballCoordinates.bottom;
    let ballRight=ballCoordinates.right;
//     // isball in bound
//     // handlevertical
//     // check if collides with any horizontal boundary
    let hasTouchedLeft=ballLeft<boardLeft;
    let hasTouchedRight=ballRight>boardRight;
    if(hasTouchedLeft||hasTouchedRight)
    {
        if(hasTouchedLeft)
        {            
            leftPlayerLives--;
            setColor(leftPlayerLives);
if(leftPlayerLives==0)
{
    alert("Game over Player 🅱 won ☀🌜")
    document.location.reload();
}
        
        else{
            return  resetGame();
        }
    }
    else{
                
            rightPlayerLives--;
            setColor(3+rightPlayerLives);

if(rightPlayerLives==0)
{
    alert("Game over Player 🅰 won ☀🌜")
    document.location.reload();
}
        
        else{
            return  resetGame();
        }
    }
}
function resetGame()
{
    ball.style.top=window.innerHeight*0.45+"px";
    ball.style.left=window.innerWidth*0.45+"px";
    requestAnimationFrame(moveBall);
}

    if(ballTop<=boardTop||ballBottom>=boardBottom)
    {
        // verticallyoutside
        y=!y;

    }
    // handlehorizontal
    if(ballLeft<=boardLeft||ballRight>=boardRight)
    {
        // horizontallyoutside
        x=!x;
    }
//  lefthitnp
// ***************collision**************
let leftPaddleBounds=leftPaddle.getBoundingClientRect();
let rightPaddleBounds=rightPaddle.getBoundingClientRect();
if(ballLeft<=leftPaddleBounds.right&&ballRight>=leftPaddleBounds.left&&ballTop+30>=leftPaddleBounds.top&&ballBottom-30<=leftPaddleBounds.bottom)
{
    x=!x;
}

// righthitnp
if(ballLeft<=rightPaddleBounds.right&&ballRight>=rightPaddleBounds.left&&ballTop+30>=rightPaddleBounds.top&&ballBottom-30<=rightPaddleBounds.bottom)
{
    x=!x;
}
// *******************collision*********************
// issues
   
    ball.style.top=y==true?ballTop+10+"px":ballTop-10+"px";
    ball.style.left=x==true?ballLeft+10+"px":ballLeft-10+"px";
    requestAnimationFrame(moveBall);

}
requestAnimationFrame(moveBall);


