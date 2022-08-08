const aEvents = data.events
/* const queryString = location.search
const params = new URLSearchParams(queryString)
const id = params.get("id")
const id = parseInt(params.get("id"))
const cardDetails = arrayEvents.find(item => arrayEvents._id) */
let getBigCard = document.getElementById("bigCardContainer")

function detailsPrint(arrayEvents, bigCardContainer){
    arrayEvents.reduce(aEvents => { 
      let bigCard = document.createElement("div")
      bigCard.innerHTML = `<div class="bigcard bg-white mb-3">
          <div class="row g-0">
          <div class="col-lg-5">
              <img src="${aEvents.image}" class="img-fluid rounded-start w-100" alt="...">
          </div>
          <div class="col-lg-6">
              <div class="card-body">
                <h5 class="text-center fs-2 fw-bold pt-3">${aEvents.name}</h5>
                <div class="container text-center">
                  <dl class="row text-end">
                    <dt class="col-4">Date:</dt>
                    <dd class="col-8 text-start">${aEvents.date}</dd>
                    <dt class="col-4">Description:</dt>
                    <dd class="col-8 text-start">${aEvents.description}</dd>
                    <dt class="col-4">Category:</dt>
                    <dd class="col-8 text-start">${aEvents.category}</dd>
                    <dt class="col-4">Place:</dt>
                    <dd class="col-8 text-start">${aEvents.place}</dd>
                    <dt class="col-4">Capacity:</dt>
                    <dd class="col-8 text-start">${aEvents.capacity}</dd>
                    <dt class="col-4">Assistance:</dt>
                    <dd class="col-8 text-start">${aEvents.assistance}</dd>
                    <dt class="col-4">Price:</dt>
                    <dd class="col-8 text-start">$${aEvents.price}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
      </div>`
      bigCardContainer.appendChild(bigCard)
    })
  }
  
detailsPrint(arrayEvents, bigCardContainer)