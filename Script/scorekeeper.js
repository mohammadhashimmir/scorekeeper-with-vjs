const btn1=document.querySelector("#p1button");
const btn2=document.querySelector("#p2button");
const spn1=document.querySelector("#p1score");
const spn2=document.querySelector("#p2score");
const resetbtn=document.querySelector("#rst");
const range=document.querySelector("#range");


let p1score=0;
let p2score=0;
let winningScore=3;
let gameOver= false;


btn1.addEventListener("click", function(){
    if(!gameOver){
        p1score+=1;
        if (p1score===winningScore){
            gameOver=true;
            spn1.classList.add('winner');
            spn2.classList.add('loser');
    }
        }
           
        spn1.textContent=p1score;
        
})
btn2.addEventListener("click", function(){
    if(!gameOver){
        p2score+=1;
        if (p2score===winningScore){
            gameOver=true;
            spn2.classList.add('winner');
            spn1.classList.add('loser');
    }
        }
           
        spn2.textContent=p2score;
        
})



resetbtn.addEventListener("click", function(){
    gameOver=false;
    p1score=0;
    p2score=0;
    spn1.innerText=0;
    spn2.innerText=0;
    spn1.classList.remove("winner","loser");
    spn2.classList.remove("winner","loser");

})

range.addEventListener("change", function(){
    winningScore=parseInt (this.value);
   
   
})
