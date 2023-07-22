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
    console.log('this should be the day' ,concertDate.getDay());
    const formattedDate = `${daysWeek[concertDate.getDay()]}/${concertDate.getMonth() + 1}/${concertDate.getFullYear()}`;
    console.log('This should be the date' ,formattedDate);
    console.log('this should be the day' ,concertDate.getDay());
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
    console.log ("this is the data from axios" ,results.data);
    shows = results.data
    console.log('api is getting show info', shows)
    
    // console.log("this is comments after the request",comments)
    renderShows() 

})

renderShows();