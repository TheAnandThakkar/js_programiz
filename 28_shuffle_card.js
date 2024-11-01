const suit = ["Spades", "Diamond", "Club", "Heart"];

const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

let deck = [];
let firstFiveCard = [];

function shuffleCard() {
  /// create the deck of the card
  for (var i = 0; i < suit.length; i++) {
    for (var j = 0; j < values.length; j++) {
      deck.push({ Value: `${suit[i]}`, Suit: `${values[j]}` });
    }
  }

  /// shuffle the card
  for (var i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  /// pick first 5 cards
  for (var i = 0; i < 5; i++) {
    firstFiveCard.push(deck[i]);
  }

  console.log(firstFiveCard);
  return firstFiveCard;
}

shuffleCard();
