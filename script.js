//function declarations
function getComputerChoice(){
    const random = Math.random();
    
    if(random < .333)
        return 'rock';
    else if(random > .666)
        return 'paper';
    else
        return 'scissors';
}


function play(playerSelection){
    const computerSelection = getComputerChoice();
    
    if(playerSelection == 'rock' && computerSelection == 'paper'){
        roundResult.textContent = 'You lose! Paper beats rock.';
        intLosses++;
        losses.textContent = intLosses;
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissors'){
        roundResult.textContent = 'You lose! Paper beats rock.';
        intWins++;
        wins.textContent = intWins;
    }
    else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        roundResult.textContent = 'You lose! Paper beats rock.';
        intLosses++;
        losses.textContent = intLosses;
    }
    else if(playerSelection == 'paper' && computerSelection == 'rock'){
        roundResult.textContent = 'You lose! Paper beats rock.';
        intWins++;
        wins.textContent = intWins;
    }
    else if(playerSelection == 'scissors' && computerSelection == 'rock'){
        roundResult.textContent = 'You lose! Paper beats rock.';
        intLosses++;
        losses.textContent = intLosses;
    }
    else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        roundResult.textContent = 'You lose! Paper beats rock.';
        intWins++;
        wins.textContent = intWins;
    }
    else{
        roundResult.textContent = 'It\'s a tie';
    }

    if(intWins == 5)
        alert('You Win! ' + intWins + " to " + intLosses )
    else if (intLosses == 5)
        alert('You Lose! ' + intWins + " to " + intLosses )
    }

    function rockBtn(){
        play('rock');
    }

    function paperBtn(){
        play('paper');
    }

    function scissorsBtn(){
        play('scissors');
    }

    
//variable and element declaration/referal

  
    let intLosses = 0
    let intWins = 0;
    
   
    const score = document.querySelector('#score');

    const wins = document.querySelector('#wins');
    
    
    const losses = document.querySelector('#losses');
    

    const body = document.querySelector('body');
    const roundResult = document.createElement('div');
    roundResult.style.display = 'flex';
    roundResult.style.justifyContent = 'center'
    body.appendChild(roundResult);

    const playBtns = document.querySelector('#choices');
    const array = Array.from(playBtns.querySelectorAll('button'));

    array[0].addEventListener('click', rockBtn);
    array[1].addEventListener('click', paperBtn);
    array[2].addEventListener('click', scissorsBtn);