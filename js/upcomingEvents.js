const arrayEvents = data.events
cardPrint(arrayEvents, cardContainer)


let getCards = document.getElementById("cardContainer")

function cardPrint(eventCard, cardContainer){
  eventCard.forEach(arrayEvents => {
    if(parseInt(arrayEvents.date) >= parseInt(data.currentDate)){
    let card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `<img src="${arrayEvents.image}" class="card-img-top" alt="${arrayEvents.name}">
    <div class="card-body">
    <h5 class="card-title text-center">${arrayEvents.name}</h5>
    <p class="card-text text-center">${arrayEvents.description}</p>
    </div>
    <div class="card-footer"><span>Price: $${arrayEvents.price}</span>
    <a href="./details.html?id=${arrayEvents._id}" class="btn btn-outline-secondary float-end">Details</a>
    </div>`
    cardContainer.appendChild(card)}
  })
}