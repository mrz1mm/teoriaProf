let allTheBooks = []
let cart = []

const getBooks = function () {
  fetch('https://striveschool-api.herokuapp.com/books')
    .then((response) => {
      if (response.ok) {
        return response.json() // .json() ritorna una Promise con dentro l'array dei libri!
      } else {
        throw new Error('Errore generico nella chiamata')
      }
    })
    .then((arrayOfBooks) => {
      console.log('arrayOfBooks', arrayOfBooks)
      // per ogni libro voglio creare una col con dentro una card
      // prendo un riferimento alla riga
      const booksRow = document.getElementById('books-row')
      arrayOfBooks.forEach((book, i) => {
        // assegno arrayOfBooks all'array globale allTheBooks
        allTheBooks = arrayOfBooks
        const newCol = document.createElement('div')
        newCol.classList.add('col') // ora è una col di bootstrap
        newCol.innerHTML = `
        <div class="card h-100">
            <img src="${book.img}" class="card-img-top" alt="book image">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">${book.price}£</a>
                <div>
                    <button class="btn btn-warning" onclick="remove(event)">SCARTA</button>
                    <button class="btn btn-success" onclick="addToCart(${i})">AGGIUNGI</button>
                </div>
            </div>
        </div>
        `
        // appendere questa newCol alla riga
        booksRow.appendChild(newCol)
      })
    })
    .catch((err) => {
      console.log('ERRORE', err)
    })
}

const remove = function (e) {
  console.log(e.target.closest('.col'))
  console.log('RIMUOVO CARD')
  e.target.closest('.col').remove()
}

const createCartList = function () {
  const cartList = document.getElementById('cart')
  cartList.innerHTML = ''
  cart.forEach((book, i) => {
    const newLi = document.createElement('li')
    newLi.classList.add('list-group-item')
    newLi.innerText = book.title + ' - ' + book.price
    const liButton = document.createElement('button')
    liButton.classList.add('btn', 'btn-danger')
    liButton.innerText = 'ELIMINA'
    liButton.addEventListener('click', function () {
      cart.splice(i, 1)
      localStorage.setItem('cart', JSON.stringify(cart))
      createCartList()
    })
    newLi.appendChild(liButton)
    cartList.appendChild(newLi)
  })
}

const addToCart = function (index) {
  console.log(index)
  cart.push(allTheBooks[index])
  console.log('STATO DEL CARRELLO', cart)
  createCartList()
  localStorage.setItem('cart', JSON.stringify(cart))
}

const recreateCartFromLocalStorage = function () {
  if (localStorage.getItem('cart')) {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) // ri-ottengo l'array
    cart = cartFromLocalStorage
    createCartList()
  }
}

getBooks()
recreateCartFromLocalStorage()
