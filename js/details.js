const eventsAPI= fetch("https://amazing-events.herokuapp.com/api/events")
  .then(response => response.json())
  .then(data => array(data))
  const array = (data) => {
    let arrayEvents = data.events
    
const queryString = location.search
const params = new URLSearchParams(queryString)
const id = params.get("id")

const events = arrayEvents.find(eventId => eventId._id == id)
const detailsCard = document.getElementById("bigCardContainer")
 detailsCard.innerHTML = `<div class="bigcard bg-white mb-3">
    <div class="row g-0">
    <div class="col-lg-5">
    <img src="${events.image}" class="img-fluid rounded-start w-100" alt="${events.image}">
    </div>
    <div class="col-lg-6">
        <div class="card-body">
          <h5 class="text-center fs-2 fw-bold pt-3">${events.name}</h5>
          <div class="container text-center">
            <dl class="row text-end">
              <dt class="col-4">Date:</dt>
              <dd class="col-8 text-start">${events.date}</dd>
              <dt class="col-4">Description:</dt>
              <dd class="col-8 text-start">${events.description}</dd>
              <dt class="col-4">Category:</dt>
              <dd class="col-8 text-start">${events.category}</dd>
              <dt class="col-4">Place:</dt>
              <dd class="col-8 text-start">${events.place}</dd>
              <dt class="col-4">Capacity:</dt>
              <dd class="col-8 text-start">${events.capacity}</dd>
              <dt class="col-4">${Object.keys(events)[8].charAt(0).toLocaleUpperCase()+Object.keys(events)[8].substring(1)}:</dt>
              <dd class="col-8 text-start">${events.assistance || events.estimate}</dd>
              <dt class="col-4">Price:</dt>
              <dd class="col-8 text-start">$${events.price}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
    </div>`
  }