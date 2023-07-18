const showsTable = document.querySelector('.shows__table');

const shows = [
    {   date:'Mon Sept 06 2021', 
        venue:'Ronald Lane', 
        location: 'San Francisco, CA'
    },
    {   date:'Tue Sept 21 2021', 
        venue:'Pier 3 East', 
        location: 'San Francisco, CA'
    },
    {   date:'Fri Oct 15 2021',
        venue:'View Lounge', 
        location: 'San Francisco, CA'
    },
    {   date:'Sat Nov 06 2021',
        venue:'Hyatt Agency', 
        location: 'San Francisco, CA'
    },
    {   date:'Fri Nov 26 2021', 
        venue:'Moscow Center', 
        location: 'San Francisco, CA'
    },
    {   date:'Wed Dec 15 2021',
        venue:'Pres Club', 
        location: 'San Francisco, CA'
    }
];

function createConcertElement(concert) {
    const concertElement = document.createElement("div");
    concertElement.classList.add("shows__concert");

    const dateElement = document.createElement("p");
    dateElement.classList.add("shows__date");
    dateElement.textContent = concert.date;

    const venueElement = document.createElement("p");
    venueElement.classList.add("shows__venue");
    venueElement.textContent = concert.venue;

    const locationElement = document.createElement("p");
    locationElement.classList.add("shows__location");
    locationElement.textContent = concert.location;

    concertElement.appendChild(dateElement);
    concertElement.appendChild(venueElement);
    concertElement.appendChild(locationElement);

    return concertElement;
}

function renderShows() {
    showsTable.innerHTML = '';

    for (const concert of shows) {
        const concertElement = createConcertElement(concert);
        showsTable.appendChild(concertElement);
    }
}

renderShows();