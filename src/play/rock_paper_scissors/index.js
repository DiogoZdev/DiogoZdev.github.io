import "./styles/style.css";
import "./styles/basic.css";
import "./images/circuit.webp";
import "./images/rock.png";
import "./images/paper.png";
import "./images/scissors.png";

const qs = (arg) => document.querySelector(arg)
const qsa = (arg) => document.querySelectorAll(arg)

const computerImage = qs('#computerImage');
const playerImage = qs('#playerImage');
const playerBanner = qs('#playerBanner');
const computerBanner = qs('#computerBanner');

const playerScore = qs('#playerScore');
const playerChoice = qs('#playerChoice');
const computerScore = qs('#computerScore');
const computerChoice = qs('#computerChoice');
const buttons = qsa('.btn_game');
const rounds = qs('#rounds');
const result = qs('#result');

let loading = false

qs("#rock").onclick = () => playRound("rock");
qs("#paper").onclick = () => playRound("paper");
qs("#scissors").onclick = () => playRound("scissors");

const choices = ['rock', 'paper', 'scissors'];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function playRound(playerOption) {
    if (loading) return

    loading = true

    const computerRandom = Math.floor(Math.random() * 3)
    const computerOption = choices[computerRandom]

    await sleep(300)
    playerChoice.textContent = playerOption
    const pSRC = `./images/${playerOption}.png`
    console.log(pSRC)
    playerImage.setAttribute('src', pSRC)
    playerBanner.classList.remove("hidden")

    computerChoice.textContent = computerOption
    computerImage.setAttribute('src', `./images/${computerOption}.png`)
    computerBanner.classList.remove("hidden")

    await sleep(2500)
    if (playerOption === computerOption) {
        result.textContent = "It's a tie!"
        return endRound("")
    }

    if (
        (playerOption === "rock" && computerOption === "scissors") ||
        (playerOption === "paper" && computerOption === "rock") ||
        (playerOption === "scissors" && computerOption === "paper")
    ) {
        result.textContent = "You win!"
        playerScore.textContent = parseInt(playerScore.textContent) + 1
        return endRound("win")
    }

    result.textContent = "You lose!"
    computerScore.textContent = parseInt(computerScore.textContent) + 1
    return endRound("lose")
}

function endRound(resultCode) {
    rounds.textContent = parseInt(rounds.textContent) + 1;

    if (resultCode === "win") {
        buttons.forEach((button) => {
            button.classList.add("win")
        })
    }

    if (resultCode === "lose") {
        buttons.forEach((button) => {
            button.classList.add("lose")
        })
    }

    playerBanner.classList.add("hidden")
    computerBanner.classList.add("hidden")

    setTimeout(() => {
        buttons.forEach((button) => {
            button.classList.remove("win", "lose")
        })

        result.textContent = ""

        loading = false
    }, 2000)
}
