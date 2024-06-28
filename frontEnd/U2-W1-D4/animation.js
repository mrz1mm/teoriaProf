// vogliamo applicare o rimuovere la classe "moving" al div con id "moving-box"
// alla pressione del pulsante

// 1) trovare nel DOM il pulsante
const startButton = document.querySelector('#box-container button')

const handleClick = function () {
  // recuperiamo l'elemento moving-box
  const movingBox = document.getElementById('moving-box')
  // recuperiamo il bottone su cui abbiamo cliccato
  if (startButton.innerText === 'START') {
    // assegno la classe CSS "moving"

    movingBox.classList.remove('home')
    movingBox.classList.toggle('moving')
    startButton.innerText = 'STOP'
  } else {
    movingBox.classList.remove('moving')
    movingBox.classList.toggle('home')
    startButton.innerText = 'START'
  }
}

// verifichiamo di averlo trovato! :)
console.log('startButton', startButton)

// 2) colleghiamo una funzione alla pressione del tasto start
// startButton.addEventListener('click', function(){
//     handleClick()
// })
startButton.addEventListener('click', handleClick)
