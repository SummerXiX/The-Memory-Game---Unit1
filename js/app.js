
/*
/*----------- Constants --------------*/




// const colorScheme = {
//   dark: "",
//   ...Clipboard.apply.
// }

/*--------------- Variables (state) -------------------*/

let firstCard, secondCard
let hasFlipped = false
let delay = false
      
/*-------------- Cached Element References -----------------*/
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
    if (delay) {
      return
    }

    if (this === firstCard) {
      return
    }
    
    this.classList.add('flip')
    // if the card has flipped, it means it's the player's first click => firstCard = this
    if (!hasFlipped){
      hasFlipped = true
      firstCard = this
      return
    // if the card doesnt flip, it means the player is clicking on the first cardit's the second card
    } else {
      secondCard = this
    }

      // Do two cards match
      // console.log(firstCard.dataset.image)
      // console.log(secondCard.dataset.image)
      // if the two cards are the same, remove the click event listener
      // if the two cards are not the same, flip the card to the original state/ back face
      if (firstCard.dataset.image === secondCard.dataset.image){
    
      firstCard.removeEventListener('click', clickToFlip)
      secondCard.removeEventListener('click', clickToFlip)

      reset()

      } else {
        delay = true

        setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        reset()
      }, 1500)
      }

      function reset() {
        [hasFlipped, delay] = [false, false]
        [firstCard, secondCard] = [null, null]
      }
      }
    
      (function shuffle() {
        cards.forEach(function(card) {
          let randomNum = Math.floor(Math.random()*20)
          card.style.order=randomNum
        })
      })()