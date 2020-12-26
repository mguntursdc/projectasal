let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () =>{
    return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (num1, num2) =>{
    return Math.abs(num1 - num2);

}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    if(humanGuess > 9 || humanGuess < 0){
        return alert('Please input 0-10'); 
    }else{
        let deltaHuman = getAbsoluteDistance(targetGuess, humanGuess);
        let deltaComputer = getAbsoluteDistance(targetGuess, computerGuess);

        if(deltaHuman <= deltaComputer){
            return true;
        }else{
            return false;
        }
    }
}

//console.log(compareGuesses(11,2,3));

//ini pake parameter yg sama kaya isinya, conflict ga ya?
const updateScore = (winner) =>{
    switch(winner){
        case 'human':
            humanScore ++;
            break;

        case 'computer':
            computerScore ++;
            break;     
    }
}

const advanceRound = () => {
    currentRoundNumber ++;
}