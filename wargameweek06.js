// Defines a class card with constructor that takes parameters for suit and rank of playing card.
class Card {
    constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
    }
   }
   
// Creates empty array called cards within constructor of Deck class. 
   class Deck {
    constructor() {
    this.cards = [];
    }
   
// Initializes 2 arrays, suits and ranks, used to populate cards
    initialize() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
   
// Generates all possible iternations of suits and ranks, making new card objects to add to array in deck class
    for (const suit of suits) {
    for (const rank of ranks) {
    this.cards.push(new Card(suit, rank));
    }
    }
    }
   
// Performs shuffle operation on cards array to randomize elements 
    shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    }
   
// Deals 2 cards from cards array to 2 players in an alternating pattern into repective player hands. 
    dealCards(player1, player2) {
    for (let i = 0; i < this.cards.length; i++) {
    if (i % 2 === 0) {
    player1.hand.push(this.cards[i]);
    } else {
    player2.hand.push(this.cards[i]);
    }
    }
    }
   }
   
//Creates player class with constructor that uses name parameter to initialize emtpy hand array with score set to 0. 
   class Player {
    constructor(name) {
    this.name = name;
    this.hand = [];
    this.score = 0;
    }
   
// playCard returns and removes 1st card from hand array. updateScore updates player score by adding points. 
    playCard() {
    return this.hand.shift();
    }
   
    updateScore(points) {
    this.score += points;
    }
   }
   
//  Function gives numerical value of ranks of card1 and card2 by calling getRankValue.
   function compareCards(card1, card2) {
    const rank1 = getRankValue(card1.rank);
    const rank2 = getRankValue(card2.rank);
   
// Compares ranks of cards, if card1 is greater than card2, returns 1. If opposite, returns -1. If equal, returns 0. 
    if (rank1 > rank2) {
    return 1;
    } else if (rank1 < rank2) {
    return -1;
    } else {
    return 0;
    }
   }
   
// Function accepts rank as arguement and gives numeric value based on switch statement. 
   function getRankValue(rank) {
    switch (rank) {
    case 'A':
    return 14;
    case 'K':
    return 13;
    case 'Q':
    return 12;
    case 'J':
    return 11;
    default:
    return parseInt(rank);
    }
   }
   
// Initializes 2 players, creates new deck, initializes deck, and deals cards to players. 
   function playWarGame() {
    const player1 = new Player('Player 1');
    const player2 = new Player('Player 2');
    const deck = new Deck();
   
    deck.initialize();
    deck.shuffle();
    deck.dealCards(player1, player2);
   
// Section of code enters loop while players have cards in hand arrays.
    while (player1.hand.length > 0 && player2.hand.length > 0) {
    const card1 = player1.playCard();
    const card2 = player2.playCard();
   
// Compares cards and updates score. 
    const comparison = compareCards(card1, card2);
    if (comparison === 1) {
    player1.updateScore(1);
    } else if (comparison === -1) {
    player2.updateScore(1);
    }
    }
   
// Logs scores of players with console.log, evaluates scores and prints results to console. 
    console.log(`Hobbiton score: ${player1.score}`);
    console.log(`Mordor score: ${player2.score}`);
   
    if (player1.score > player2.score) {
    console.log('Hobbiton wins!');
    } else if (player1.score < player2.score) {
    console.log('Mordor wins!');
    } else {
    console.log('Gollum wins!');
    }
   }
   
// Begins the game. 
   playWarGame();