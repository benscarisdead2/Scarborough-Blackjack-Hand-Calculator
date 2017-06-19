/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/

function handValue (hand) {
  var faceCards = ["K", "Q", "J"];
  var numberCards = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
  // declare a total 
  var total = 0;

  // create empty arrays to separate aces from other cards
  var aces = [];
  var otherCards = [];

  // separate Aces from the other cards in the hand
  for (var j = 0; j < hand.length; j++) {
    let thisCard = hand[j];
    if (thisCard == "A") {
      aces.push(thisCard);
    } else {
      otherCards.push(thisCard);
    }
    
  }

  // evaluate the other cards first
  for (var i = 0; i < otherCards.length; i++) {
    let theCurrentCard = otherCards[i];
    if(faceCards.includes(theCurrentCard)) {
      // if it's a JACK, KING, or QUEEN count as 10
      total += 10;
    } else if(numberCards.includes(theCurrentCard)) {
      // if it's a NUMBER 2-10 count as THE NUMBER ITSELF
      total += parseInt(theCurrentCard);
    }
  }

  // evaluate the Aces next
  for (var i = 0; i < aces.length; i++) {
    if( (21 - total) >= 11 ){
      // we have enough space leftover, so count as 11
      total += 11;
    } else {
      // otherwise, count as 1
      total += 1;
    }
    
  }

  return total;
}

console.log(handValue(["2", "3", "Q", "A"]));


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/