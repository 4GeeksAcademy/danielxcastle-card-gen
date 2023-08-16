/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const suits = ["♦", "♥", "♠", "♣"];
  const numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let button = document.querySelector("#button");
  button.addEventListener("click", () => {
    const chosenSuit = Math.floor(Math.random() * suits.length);
    const chosenNumber = Math.floor(Math.random() * numbers.length);

    let topSuit = document.querySelector("#suit-top");
    let bottomSuit = document.querySelector("#suit-bottom");

    topSuit.textContent = suits[chosenSuit];
    bottomSuit.textContent = suits[chosenSuit];

    let cardNumber = document.querySelector("#number");
    cardNumber.textContent = numbers[chosenNumber];

    topSuit.style.color =
      topSuit.textContent === "♥" || topSuit.textContent === "♦"
        ? "red"
        : "black";

    bottomSuit.style.color =
      bottomSuit.textContent === "♥" || bottomSuit.textContent === "♦"
        ? "red"
        : "black";
  });
};
