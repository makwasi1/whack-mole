document.addEventListener('DOMContentLoaded', () =>{

//card option
const cardArray =[
   
 {
    name: 'edu',
    img: 'edu.png'

},
 {
    name: 'edu',
    img: 'edu.png'

},
 {
    name: 'download',
    img: 'download.png'

},
 {
    name: 'download',
    img: 'download.png'

},
 {
    name: 'image 6',
    img: 'image(6).jpeg'

},
 {
    name: 'image 6',
    img: 'image(6).jpeg'

},
 {
    name: 'image 12',
    img: 'image(12).jpeg'

},
 {
    name: 'images 12',
    img: 'images(12).jpeg'

},
 {
    name: 'book1',
    img: 'book1.jpg'

},
 {
    name: 'book1',
    img: 'book1.jpg'

},
 {
    name: 'book2',
    img: 'book2.jpg'

},
 {
    name: 'book2',
    img: 'book2.jpg'

},
 {
    name: 'image 3',
    img: 'image 3.png'

},
 {
    name: 'image 2',
    img: 'image 3.png'

},
]


const grid = document.querySelector('.grid')
var cardsChosen = []
var cardsChosenId = []
//create your board

function createBoard(){
    for (let i= 0; i < cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'images/edu.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}
// check for match
function checkForMatch(){
    
}


//flip card
function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }

}

createBoard();

})
