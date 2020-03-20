alert('Hello, and welcome to Sowa Programming School!');

const bookings = [];

function addBooking() {
    const name = document.querySelector('#bookingName').value;
    const numberOfGuests = document.querySelector('#bookingGuestNumber').value;
    const hour = document.querySelector('#bookingHour').value;
    const minute = document.querySelector('#bookingMinute').value;
    const newBooking = {
        name,
        numberOfGuests,
        time: hour + ':' + minute
    }
    bookings.push(newBooking);
    updateBookingList();
}

function updateBookingList() {
    const bookingList = document.querySelector('#bookingList');
    bookingList.innerHTML = '';
    for (let index = 0; index < bookings.length; index++) {
        const booking = bookings[index];
        const bookingDiv = document.createElement('div');
        bookingDiv.textContent = booking.name + ' - ' + booking.numberOfGuests + ' person(s) at ' + booking.time;
        bookingList.appendChild(bookingDiv);        
    }
}