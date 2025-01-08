// Add event listeners to sidebar links
document.getElementById('search-flight-link').addEventListener('click', function () {
    window.open('search-flight.html', '_blank');
});

document.getElementById('passenger-details-link').addEventListener('click', function () {
    window.open('passenger-details.html', '_blank');
});

document.getElementById('select-seat-link').addEventListener('click', function () {
    window.open('select-seat.html', '_blank');
});

document.getElementById('boarding-pass-link').addEventListener('click', function () {
    window.open('boarding-pass.html', '_blank');
});

document.getElementById('self-checkin-link').addEventListener('click', function () {
    window.open('self-checkin.html', '_blank');
});

document.getElementById('conclusion-link').addEventListener('click', function () {
    window.open('conclusion.html', '_blank');
});

// Search flight button functionality
document.getElementById('search-btn').addEventListener('click', function () {
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;

    if (departure && destination && date) {
        alert(`Searching flights from ${departure} to ${destination} on ${date}.`);
    } else {
        alert('Please fill in all fields.');
    }
});

function navigateTo(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
    });
  
    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
      selectedPage.classList.add('active');
    }
  
    // Update the active class in the sidebar
    document.querySelectorAll('.sidebar ul li').forEach(li => {
      li.classList.remove('active');
    });
  
    const activeLink = Array.from(document.querySelectorAll('.sidebar ul li')).find(
      li => li.textContent.trim().toLowerCase() === pageId.replace('-', ' ')
    );
    if (activeLink) {
      activeLink.classList.add('active');
    }
}

// Seat selection functionality
document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('.seat');
    const nextButton = document.getElementById('next-btn');
    let selectedSeats = [];

    // Seat selection logic
    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            const seatNumber = seat.getAttribute('data-seat');

            if (selectedSeats.includes(seatNumber)) {
                // Deselect seat
                selectedSeats = selectedSeats.filter(s => s !== seatNumber);
                seat.classList.remove('selected');
            } else if (selectedSeats.length < 2) {
                // Select seat
                selectedSeats.push(seatNumber);
                seat.classList.add('selected');
            }

            // Enable/disable the Next button
            nextButton.disabled = selectedSeats.length < 2;
        });
    });
});
