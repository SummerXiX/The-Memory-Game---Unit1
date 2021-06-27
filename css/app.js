
/*
/*----------- Constants --------------*/




// const colorScheme = {
//   dark: "",
//   ...Clipboard.apply.
// }

/*--------------- Variables (state) -------------------*/
//
// let grid, rid, flip, win

let firstCard, secondCard
let hasFlipped = false
      
/*-------------- Cached Element References -----------------*/
// 1.-3.
const startBtn = document.getElementById('start')
const lightDarkBtn = document.getElementById('light-dark-button')
const message = document.querySelector('#message')
const cards = document.querySelectorAll('.card')


/*-------------------- Event Listeners -------------*/
  
cards.forEach((card) => {
  card.addEventListener('click', clickToFlip)
})
/*-------------------------------- Functions --------------------------------*/
  //2 Click to flip card: 
  function clickToFlip(){
    this.classList.toggle('flip')
  }


        