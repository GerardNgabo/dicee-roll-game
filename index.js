function rollDicee() {
  let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

document
  .querySelector(".playerOne")
  .setAttribute("src", `./images/dice${randomNumber1}.png`);

document
  .querySelector(".playerTwo")
  .setAttribute("src", `./images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "🚩Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "Player 2 Wins 🚩";
} else {
  document.querySelector("h1").innerText = "🚩 It's a Draw 🚩";
}

}