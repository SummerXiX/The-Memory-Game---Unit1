
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
let win
let countMatch = 0
      
/*-------------- Cached Element References -----------------*/
const restartBtn = document.getElementById('restart')
const lightDarkBtn = document.getElementById('light-dark-button')
const message = document.querySelector('#message')
const cards = document.querySelectorAll('.card')


/*-------------------- Event Listeners -------------*/
  
cards.forEach((card) => {
  card.addEventListener('click', clickToFlip)
})

restartBtn.addEventListener('click', restart)


/*-------------------------------- Functions --------------------------------*/
  //2 Click to flip card: 
  function clickToFlip(){
    if (delay) {
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
        countMatch ++
      
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
  
      function restart() {
        cards.forEach(function(card) {
          let randomNum = Math.floor(Math.random()*20)
          card.style.order=randomNum
        })
        timeLeft = 120
      }



      // timer 
      const totalMinutes = 2
     
      let countdownEl = document.getElementById('countdown')

      let timeLeft = 120

      let timer = setInterval(function(){
        const minutes = Math.floor(timeLeft/60)
        let seconds = timeLeft % 60
        
        seconds = seconds < 10 ? '0' + seconds : seconds
        countdownEl.textContent = `0${minutes}:${seconds}`

        timeLeft -=1

        if (timeLeft < 0){
          didYouWin()
          countdownEl.textContent = '00:00'
          clearInterval(countdown)
      }
    }, 1000)

      // win function
    function didYouWin() {
      if (countMatch === 10 && timeLeft > 0) {
      win = true
      message.innerHTML = "Amazing! You win!"
    } else if (countMatch < 10 && timeLeft <= 0){
      message.innerHTML = "Try Again!"
    }
  }

  // Dark mode Light Mode


        
        



     