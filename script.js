const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want to research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
  
    newDiv.addEventListener("click", handleCardClick);
    
    // append the div to the element with an id of game
    gameContainer.append(newDiv)

} }

let card1 = null;
let card2 = null; 
let clickCounter = 0;

function handleCardClick(event) {
  if (clickCounter === 2) return; 

//1. user clicks the first time, save the card that was clicked to a variable.
card1 = event.target; //saving the element itself with all its values
//2. user clicks again, save that card to another variable
card2 = event.target;
let color = event.target.classList.value; 
  card1.style.backgroundColor = color;
  card2.style.backgroundColor = color;
//3. keep track of the number of times the user has clicked on any card. 
clickCounter ++;
//4. we want to reset that number of times to 0 after every 2 cards.
if (clickCounter === 2){
  //evaluate cards
if (card1 !== card2 && card1.classList !== card2.classList){
  setTimeout(function(){
     //to reset the colors back to default
     card1.style.backgroundColor = "";
     card2.style.backgroundColor = "";
    clickCounter = 0;
    card1 = null;
    card2 = null;
  }, 1000);
}
} 
}
//if you click on two cards and they have the same class name - they should not reset to null (#4)


// when the DOM loads
createDivsForColors(shuffledColors); 
