/**Coding Steps:
**The completed project should, when executed, do the following:
1. Deal 26 Cards to each Player from a Deck of 52 cards.
2. Iterate through the turns where each Player plays a Card.
3. The Player who played the higher card is awarded a point.
   -Ties result in zero points for both Players.
4. After all cards have been played, display the score and declare the winner.
 */
// what to we nedd for this War Game step by step:::::
/* Deck

 * 52 cards (should each card be its on class? should it be an object withh 3 values?)
 * Rank ("name value")
 * suits (heart , spade , club , diamond )
 * Values
 * a way to shuffle
 * a way to pass the cards to the players(should be this in my deck or my gmae logic?)
 * 
 * Player( do I need a player class? //or can I just put in my gmae logic?)
 * Name 
 * Score 
 * Hand
 * 
 * Logic to Actually play the Game.....we can use a deck in my card Game.
 *  but we are playing a specific one.
 *  ways to compare the cards....number values one each card
 *  
 */
////Deck class 
/**should have :
 * An Array to store the cards
 * An Array to store all the cards ranks
 * An Array to store all the cards suits
 * 
 */

class Deck{
    constructor(){
       this.deck= [];
       this.ranks=[
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
        this.Suits = ["Hearts ❤️", "Diamonds 💎", "Spades 🗡️", "Clubs 🍀"];

   }
    
//Method to create a Deck ......iterate over our suits and ranks.
// puah a new card ... as an object  into our constructors this.deck 
       
createDeck(){
    for (let i = 0;  i < this.Suits.length; i++){
    for (let j = 0; j < this.ranks.length; j++){
let card ={
    name:`${this.ranks[j]} of ${this.Suits[i]}`,
   value: j+1
}
this.deck.push(card)
    
}
    }
}


    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
          
        }
    }
    
}


//* class for a Game (specifically for a War Game*/
// Needs:
//...A deck instantiate a new deck insdie of our game class
//... Create the deck ,,,Shuffle the deck ,,,, and pass the deck...
// Logic to play the game
// Turn based .. how many turns?
// Do our players have a hand yet?
// Contorl flow statement logic to decide to wins?

///// 2 players
/////Hand
//// Score 
///// Name

class Game{
    constructor(){
        this.player1 = {
        name : `player 1`,
        score :0 ,
        hand : []

        }
        this.player2 = {
            name : `player 2`,
            score :0 ,
            hand : []
   
    }
}
/** Method to play the Game*/
/** pass out cards to our  the players 
 * Take a amount of turns...
 * as long as players have cards(or the number of cards they have )
 * Award points based on card .value
 * log the winner
 */

playGame(){
    /// instantiate the new deck ,create a deck , shuffle the deck

    const deck = new Deck();
    deck.createDeck();
    deck.shuffleDeck(); 
    
while(deck.deck.length !==0){  ///deck is a class and deck.deck is an Array 52 shuffles card and the  length is 52...
    this.player1.hand.push(deck.deck.shift())
    this.player2.hand.push(deck.deck.shift())
}
console.log(this.player1.hand)
console.log(this.player2.hand)

/** Now playing the game ... how many turns do i need ? */   
for (let i = 0; i < this.player1.hand.length; i++ ){

    // Conditional logic to award points based on comparing the card values 
if (this.player1.hand[i].value > this.player2.hand[i].value){
    ///// If Player 1's card has a higher value than Player 2's card:

    this.player1.score ++ ///// Increment Player 1's score by 1.
   //// Log the outcome of this round, showing each player's card and the updated score.
    console.log(`
      p1 Card: ${this.player1.hand[i].name}
      p2 Crad: ${this.player2.hand[i].name}
      player 1 wins a point 
      current score: p1: ${this.player1.score}, p2: ${this.player2.score}
      
      `)

    } else if (this.player2.hand[i].value > this.player1.hand[i].value){
        //// If Player 2's card has a higher value than Player 1's card:
        this.player2.score ++   ///// Increment Player 2's score by 1.
       // Log the outcome of this round, showing each player's card and the updated score.
        console.log(`
          p1 Card: ${this.player1.hand[i].name}
          p2 Crad: ${this.player2.hand[i].name}
          player 2 wins a point 
          current score: p1: ${this.player1.score}, p2: ${this.player2.score}
      `)    
        } else {
            // If both cards have the same value, it's a tie and no points are awarded.
            console.log(`
             p1 Card: ${this.player1.hand[i].name}
             p2 Crad: ${this.player2.hand[i].name}
             Tie: No points Awarded 
            current score: p1: ${this.player1.score}, p2: ${this.player2.score} 
                `)

        }
    
}
// After all rounds have been played, determine the overall winner based on scores.
if (this.player1.score > this.player2.score){
// If Player 1 has a higher score than Player 2 after all rounds:
    console.log(`Player 1 wins`)
     
    } else if (this.player2.score > this.player1.score){
   // If Player 2 has a higher score than Player 1 after all rounds:
        console.log('Player 2 wins')

     } else {
        // If both players have the same score after all rounds, it's a tie.
        console.log('Tie')
     }

    }
}
// Instantiate the Game class and start the game by calling playGame.
const game = new Game
game.playGame()



/////Assignment complete





