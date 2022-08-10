const arrayEvents = data.events

/*--------------------------------Search------------------------------*/
let enterInput = document.getElementById("searchInput")
let clickButton = document.getElementById("searchButton")

enterInput.addEventListener("change", () => {
  masterFilter()
})

function filterText(enterInput, arrayEvents) {
  let filteredCategories = arrayEvents.filter(oneEvent => oneEvent.name.toLowerCase().includes(enterInput.toLowerCase()))
  return filteredCategories
}

/*--------------------------------Checkboxes------------------------------*/
let arrayCategories = arrayEvents.map(eventsCat => eventsCat.category) // String[]

const noRepeatCheckbox = new Set(arrayCategories)
noRepeatCheckbox.forEach(categoryCheck => {
    let checkbox = document.createElement("div")
    checkbox.className = "btn-group"
    checkbox.innerHTML = `<input class="btn-check" type="checkbox" name="Categories" id="${categoryCheck}" value="${categoryCheck}">
    <label class="btn btn-outline-secondary" for="${categoryCheck}">${categoryCheck}</label>`
   categoryContainer.appendChild(checkbox)
})

//---Filter
categoryContainer.addEventListener('change', () => {
  masterFilter()
})

function filteredCategory(eventCheck) {
  let getCheckboxes = document.getElementById("categoryContainer").querySelectorAll("input[type='checkbox']")
  let arrayChecks = Array.from(getCheckboxes)
  let checkSelected = arrayChecks.filter(selected => selected.checked)
  let filteredEventsCat = checkSelected.map(checkSelected => checkSelected.value)
  let arrayFilter
  if (filteredEventsCat.length !== 0) {
    arrayFilter = eventCheck.filter(eventsCat => filteredEventsCat.includes(eventsCat.category))
  } else {
    arrayFilter = eventCheck
  }
  return arrayFilter
}

function masterFilter() {
  let filteredEvents = filteredCategory(arrayEvents);
  filteredEvents = filterText(enterInput.value, filteredEvents);
  cardPrint(filteredEvents)
}

/*--------------------------------Cards------------------------------*/
function cardPrint(eventCard){
  let cardContainer = document.getElementById("cardContainer")
  cardContainer.innerHTML = ``
  eventCard.forEach(events => {
    let card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `<img src="${events.image}" class="card-img-top" alt="${events.name}">
    <div class="card-body">
    <h5 class="card-title text-center">${events.name}</h5>
    <p class="card-text text-center">${events.description}</p>
    </div>
    <div class="card-footer"><span>Price: $${events.price}</span>
    <a href="./details.html?id=${events._id}" class="btn btn-outline-secondary float-end">Details</a>
    </div>`
    if(events.date >= data.currentDate){cardContainer.appendChild(card)}
  })
}
cardPrint(arrayEvents)