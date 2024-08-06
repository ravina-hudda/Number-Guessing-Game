let randomNumber=Math.floor((Math.random()*100)+1);

let usserInput= document.querySelector('.guessField');
let Submit=document.querySelector('#subt');
let previousGuesse=document.querySelector('.guesses');
let remainingGuesses=document.querySelector('.lastResult');
let startOver = document.querySelector('.resultParas');
let lowOrHi=document.querySelector('.lowOrHi');

const p = document.createElement('p');
let playGame=true;

if(playGame){
    Submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(usserInput.value);
        usserInput.value='';
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)||guess>100|| guess<1){
        alert('Invalid Input')
    }
    else {
        checkGuess(guess);
    }
}
function checkGuess(guess){
    if(guess=== randomNumber){
        lowOrHi.innerHTML=`you guess it right, Number is ${guess}`
        endGame();
    }
    else{
        
        if(remainingGuesses.innerHTML-1<0){
            lowOrHi.innerHTML=`Better Luck next time, Number was ${randomNumber}`
            endGame();
        }
        else if(remainingGuesses.innerHTML-1==0){
            previousGuesse.innerHTML+=`${guess}, `;
            remainingGuesses.innerHTML-=1;
            endGame();
        }
        else {
            previousGuesse.innerHTML+=`${guess}, `;
            remainingGuesses.innerHTML-=1;
            lowOrHi.innerHTML="No, try again"
        }
        
    }
}

function endGame(){
  
  usserInput.value='';
  usserInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
    
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    remainingGuesses.innerHTML=10;
  previousGuesse.innerHTML='';
  usserInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;

})
}
