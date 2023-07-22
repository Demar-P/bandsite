const showsTable = document.querySelector('.shows__table');

let shows = [];

function createConcertElement(concert) {
    const concertElement = document.createElement("div");
    concertElement.classList.add("shows__concert");

    const dateElement = document.createElement("p");
    dateElement.classList.add("shows__date");
    dateElement.textContent = concert.date;
    

    const concertDate = new Date(concert.date);
    const daysWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const formattedDate = `${daysWeek[concertDate.getDay()]} ${monthsOfYear[concertDate.getMonth()] } ${concertDate.getFullYear()}`;
    
    
    
    dateElement.textContent = formattedDate;

    

    const venueElement = document.createElement("p");
    venueElement.classList.add("shows__venue");
    venueElement.textContent = concert.place;

    const locationElement = document.createElement("p");
    locationElement.classList.add("shows__location");
    locationElement.textContent = concert.location;

    const button = document.createElement("button");
    button.innerText = "BUY TICKETS";
    button.classList.add("button");



    concertElement.appendChild(dateElement);
    concertElement.appendChild(venueElement);
    concertElement.appendChild(locationElement);
    concertElement.appendChild(button);

    return concertElement;
}

function renderShows() {
    showsTable.innerHTML = '';

    for (const concert of shows) {
        const concertElement = createConcertElement(concert);
        showsTable.appendChild(concertElement);
    }
}


axios.get('https://project-1-api.herokuapp.com/showdates?api_key=e5c0f0c1-2a94-4c3f-8166-06280b36bfb6')
    .then(results => {
    shows = results.data
    renderShows() 
})

renderShows();