const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const alexaScore = document.querySelector('#alexa-score')

let humanScoreNumber = 0
let alexaScoreNumber = 0

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playAlexa())
}

const playAlexa = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, alexa) => {

    console.log('Humano: ' + human + ' Máquina: ' + alexa)

    if (human === alexa) {
        result.innerHTML = "Empate!"
    }
    else if (
        (human === GAME_OPTIONS.ROCK && alexa === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.PAPER && alexa === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.SCISSORS && alexa === GAME_OPTIONS.PAPER)
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
    }
    else {
        alexaScoreNumber++
        alexaScore.innerHTML = alexaScoreNumber
        result.innerHTML = "Você perdeu!"
    }

}