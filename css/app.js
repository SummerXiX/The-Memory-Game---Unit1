
/*
/*----------- Constants --------------*/
// 1. Create an array of objects (the images)to represents the images
const cardArray = [
{
  name: 'barite',
  img: 'images/Barite.png'
},
{
  name: 'Citrine',
  img: 'images/Citrine.png'
},
{
  name: 'Clear_Crystals',
  img: 'images/Clear_Crystals.png'
},
{
  name: 'Emerald',
  img: 'images/Emerald.png'
},
{
  name: 'Florite',
  img: 'images/Florite.png'
},
{
  name: 'Grey_Crystals',
  img: 'images/Grey_Crystals.png'
},
{
  name: 'Quartz',
  img: 'images/Quartz.png'
},
{
  name: 'Ruby',
  img: 'images/Ruby.png'
},
{
  name: 'Spinel',
  img: 'images/Spinel.png'
},
{
  name: 'White-Opal',
  img: 'images/White-Opal.png'
}
]

// Create the board constant

const board = document.querySelector(".board")

// Create an array for the grids chosen

const squareSelected = []

const cards = document.querySelectorsAll('.card')


// const colorScheme = {
//   dark: "",
//   ...Clipboard.apply.
// }

/*--------------- Variables (state) -------------------*/
//
// let grid, rid, flip, win
      
/*-------------- Cached Element References -----------------*/
// 1.-3.
const startBtn = document.getElementById('start')
const lightDarkBtn = document.getElementById('light-dark-button')
const squares = document.getElementsByClassName('card')
const message = document.querySelector('#message')

/*-------------------- Event Listeners -------------*/
  
squares.forEach((square) {
  square.addEventListern('click', clickToFlip)

})

startBtn.addEventListener('click', createBoard)


/*-------------------------------- Functions --------------------------------*/
    //1. Create the game board at its initial stage
    createBoard()

  function createBoard() {
    image.Array(image => {
      let grid = document.createElement('img')
      grid.setAttribute('scr', 'Images/Uniform Image.png')
      grid.setAttribute('grid-id', i)
      board.appendChild(grid)
    })
  }
 

  //2 Click to flip card: 
  function flip(){
    this.classList.toggle('flip');
  }

  cards.forEach(card => card.addEventlistener('click', flip) )

// 1. call an initialize function
    
      // 2. render function to...
        // a. loop over all the images (arrays) to 
        //   a.1. access the images with index
        //   a.2. get the image to 1. flips over; 2 if the player gets the pair every two clicks, the suqares augments and disappear; 3. if the players clicks on two different cards, the squares flips back
        // b. render a message reflecting the game state:
             b.1 wins if all cards are matched within the timeframe
             b.2. loses if not all cards are matched within the timeframe

      // handleClick Function to....
        1. obtain the index of the image 

        2. start button

        