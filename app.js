// function - dahij ashiglah bolomjtoi bagts too 
function hello(ner,age){
    console.log("hello"+ner)
}
hello (" temuulen1");
hello (" temuulen2");
hello (" temuulen3");
function test(){
    alert("button clicked");
}
function sum(a,b){
    console.log(a+b)  
}
sum(50,88)
sum(880,6658);
function color(){
    document.getElementsByTagName('body')[0].style.backgroundColor="red";
}
var computer = document.querySelector('.computer')
var player = document.querySelector('.player')
var winner = document.querySelector('.winner')
function play(playerChoice){
  random = Math.floor(Math.random()*3);
  var computerChoice;
  if(random==0){
computerChoice="paper"
computer.innerText="computer choice paper";
  }else if(random==1){
    computerChoice="scissor";
    computer.innerText="computer choice scissor";
}else if(random==2){
    computerChoice="rock"; 
    computer.innerText="computer choice rock";
}
player.innerText = "player choice : "+ playerChoice;
if(playerChoice==computerChoice){
    winner.innerText=aa('tie');
}else if(
    (playerChoice=="paper"&&computerChoice=="rock")||
    (playerChoice=="rock"&&computerChoice=="scissor")||
    (playerChoice=="scissor"&&computerChoice=="paper")
){
    winner.innerText="you: win";
}else{
    winner.innerText="computer: win";
}
}