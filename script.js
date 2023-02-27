let random = (Math.trunc(Math.random()*20) +1);
let gameContainer = document.getElementById('gameContainer');
let startGuess = document.getElementById('startGuess');
let questionMark =document.getElementById('questionMark');
let questionMarkDiv = document.getElementById('questionMarkDiv');
let score = 20;
let highscore = 0;
let getVal=document.querySelector('#guessinp');
function startCheck(){
    const getInputVal =Number(getVal.value);
    if(getInputVal < 1 || getInputVal>20){
        startGuess.innerHTML = "Invalid Number"
    }
    else if(getInputVal == random){
        gameContainer.style.backgroundColor = '#0cc30c';
        getVal.style.backgroundColor ='#0cc30c';
        questionMark.innerHTML = getInputVal;
        questionMarkDiv.style.width= "11rem";
        startGuess.innerHTML="&#127881; Correct Answer";
        if(highscore < score){
            document.querySelector('#highScore').textContent = score;
            highscore = score;
            getVal.disabled = true;
        }
        else{
            return
        }
    }
    else if (getInputVal > random){
        score--;
        document.querySelector('#score').textContent = score;
        if(score > 1){
            startGuess.innerHTML = '&#128200; Too High'
        }
        else if(score == 0) {
            startGuess.innerHTML = "Game Over"
            score = 1;
          getVal.disabled = true;   
        }
    }
    else if (getInputVal < random){
        score--;
        document.querySelector('#score').textContent = score;
        if(score > 1){
            startGuess.innerHTML = '&#128201; Too Low';
        }
        else if(score == 0) {
            startGuess.innerHTML = "Game Over"
            score = 1;
            getVal.disabled =true;
        }
    }
}
function reset(){
    getVal.value = '';
    getVal.style.backgroundColor = "#222";
    gameContainer.style.backgroundColor="#222";
    questionMark.innerHTML = "?";
    questionMarkDiv.style.width = "7rem";
    document.querySelector('#score').textContent = 20;
    score=20;
    startGuess.innerHTML ='Start Guessing...'
    random = (Math.trunc(Math.random()*20) +1);
    getVal.disabled =false;
}
