const expect = chai.expect;

let newDeck = new Deck();
newDeck.createDeck()
console.log(newDeck)

describe('War Game', function() {
    describe('Deck Class', function() {
        it('Should Create a deck with 52 cards', function() {
            expect(newDeck.deck.length).to.equal(52);
        });
        
    });
///Test 2: Deck Shuffle
    describe("Testing properties of Cards", function(){
        it("Should have a suit", function(){

        })
    })
});
///Test 3: Deck Shuffle
describe('Deck Shuffle Tests', () => {
    it('should shuffle the deck', () => {
        const deck = new Deck();
        deck.createDeck();
        const originalOrder = [...deck.deck];
        deck.shuffleDeck();
        expect(deck.deck).to.not.deep.equal(originalOrder);
    });
});
///test 3: card compare logic
describe('Player Tests', () => {
    it('should deal 26 cards to each player', () => {
       //// Step 1: Create a new game and deck instance 
        const game = new Game();
        const deck = new Deck();
        
       // Step 2: Create and shuffle the deck 
        deck.createDeck();// Populate the deck with 52 cards
        deck.shuffleDeck();// Shuffle the deck

 // Step 3: Distribute cards to both players
        while (deck.deck.length !== 0) {
             // Remove the first card from the deck and assign it to Player 1's hand
            game.player1.hand.push(deck.deck.shift());
            // Remove the next card from the deck and assign it to Player 2's hand
            game.player2.hand.push(deck.deck.shift());
        }

        // Step 4: Assertions to verify each player received exactly 26 cards
        expect(game.player1.hand).to.have.lengthOf(26);// Player 1 should have 26 cards
        expect(game.player2.hand).to.have.lengthOf(26);// Player 2 should have 26 cards
    });

    });