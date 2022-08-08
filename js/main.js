const arrayEvents = data.events
cardPrint(arrayEvents)

/*--------------------------------Search------------------------------*/
let enterInput = document.getElementById("searchInput")
    // enterInput = ""
let clickButton = document.getElementById("searchButton")


// clickButton.addEventListener("click", () => {
//   masterFilter()
// })
enterInput.addEventListener("change", () => {
  masterFilter()
})

//---Filter
function filterText(enterInput, arrayEvents) {
  let filteredCategories = arrayEvents.filter(oneEvent => oneEvent.name.toLowerCase().includes(enterInput.toLowerCase()))
  return filteredCategories
  /* let arrayFiltered = arrayCategories.filter(filterEvents => filterEvents.toString().toLowerCase().includes(searchInput.toString().toLowerCase().cardPrint(arrayFiltered, cardContainer))) */
}

/*--------------------------------Checkboxes------------------------------*/
let getCategories = document.getElementById("categoryContainer")
let arrayCategories = arrayEvents.map(eventsCat => eventsCat.category) // String[]

const noRepeatCheckbox = new Set(arrayCategories)
noRepeatCheckbox.forEach(categoryCheck => {
    let checkbox = document.createElement("label")
    checkbox.className = "btn-group"
    checkbox.innerHTML = `<input class="btn-check" type="checkbox" name="Categories" id="${categoryCheck}" value="${categoryCheck}">
    <label class="btn btn-outline-secondary" for="${categoryCheck}">${categoryCheck}</label>`
   categoryContainer.appendChild(checkbox)
})

//---Filter
categoryContainer.addEventListener('change', () => {
  masterFilter()
})

function filteredCategory(arrayEvents) {
  let getCheckboxes = document.getElementById("categoryContainer").querySelectorAll("input[type='checkbox']")
  let arrayChecks = Array.from(getCheckboxes)
  let checkSelected = arrayChecks.filter(selected => selected.checked)
  let filteredEventsCat = checkSelected.map(checkSelected => checkSelected.value)

  // let arrayFilter = filteredEventsCat.length ? arrayEvents.filter(eventsCat => filteredEventsCat.includes(eventsCat.category)) : arrayEvents
  let arrayFilter
  if (filteredEventsCat.length !== 0) {
    arrayFilter = arrayEvents.filter(eventsCat => filteredEventsCat.includes(eventsCat.category))
  } else {
    arrayFilter = arrayEvents
  }

  return arrayFilter
}

function masterFilter() {
  let filteredEvents = filteredCategory(arrayEvents);
  filteredEvents = filterText(enterInput.value, filteredEvents);
  cardPrint(filteredEvents)
}

/*--------------------------------Cards------------------------------*/
let getCards = document.getElementById("cardContainer")

function cardPrint(eventCard){
  let cardContainer = document.getElementById("cardContainer")
  cardContainer.innerHTML = ``
  eventCard.forEach(arrayEvents => {
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
    cardContainer.appendChild(card)
  })
}

/*--------------------------------Details------------------------------*/
function getDetails(eventDetails, bigCardContainer) {
  const id = new URLSearchParams(location.search).get("id")
  arrayEvents.find(event => {
    if(event._id == id){
      let getBigCard = document.getElementById("bigCardContainer")
      let bigCard = document.createElement("div")
      bigCard.innerHTML = `<div class="bigcard bg-white mb-3">
          <div class="row g-0">
          <div class="col-lg-5">
              <img src="${event.image}" class="img-fluid rounded-start w-100" alt="${event.image}">
          </div>
          <div class="col-lg-6">
              <div class="card-body">
                <h5 class="text-center fs-2 fw-bold pt-3">${event.name}</h5>
                <div class="container text-center">
                  <dl class="row text-end">
                    <dt class="col-4">Date:</dt>
                    <dd class="col-8 text-start">${event.date}</dd>
                    <dt class="col-4">Description:</dt>
                    <dd class="col-8 text-start">${event.description}</dd>
                    <dt class="col-4">Category:</dt>
                    <dd class="col-8 text-start">${event.category}</dd>
                    <dt class="col-4">Place:</dt>
                    <dd class="col-8 text-start">${event.place}</dd>
                    <dt class="col-4">Capacity:</dt>
                    <dd class="col-8 text-start">${event.capacity}</dd>
                    <dt class="col-4">Assistance:</dt>
                    <dd class="col-8 text-start">${event.assistance}</dd>
                    <dt class="col-4">Price:</dt>
                    <dd class="col-8 text-start">$${event.price}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
      </div>`
      bigCardContainer.appendChild(bigCard)
    }
  })
}




/*Test*/
console.log(arrayCategories)