document.addEventListener('DOMContentLoaded', async function () {

    const accountId = "ACC00002"
    const fetchbookings = await fetch(`https://booking-service-np.apps.hackathon.cnasg.dellcsc.com/api/bookings/${accountId}`, {
        method: 'GET'
    });

    const bookingsJson = await fetchbookings.json();
    const bookings = bookingsJson.bookings;

    if (bookings && bookings.length > 0) {
        for (const booking of bookings) {
            var sessionDate = new Date(booking.SessionDate);
            var options = { year: 'numeric', month: 'long', day: 'numeric' };
            var formattedDate = sessionDate.toLocaleDateString('en-US', options);

            var bookingElement = document.createElement("div");
            bookingElement.className = "booking-card";

            var bookingName = document.createElement("h2");
            bookingName.textContent = `${booking.SessionDescription}`;

            var infoElement = document.createElement("div");
            infoElement.className = "info";

            // Time row
            var timeRow = document.createElement("div");
            timeRow.className = "info-item";
            var timeImg = document.createElement("img");
            timeImg.src = "../images/booking/time.png"; // Add your time icon path here
            var timeLabel = document.createElement("label");
            timeLabel.textContent = `Time: ${booking.SessionTime}`;
            timeRow.appendChild(timeImg);
            timeRow.appendChild(timeLabel);

            // Date row
            var dateRow = document.createElement("div");
            dateRow.className = "info-item";
            var dateImg = document.createElement("img");
            dateImg.src = "../images/booking/date.png"; // Add your date icon path here
            var dateLabel = document.createElement("label");
            dateLabel.textContent = `Date: ${formattedDate}`;
            dateRow.appendChild(dateImg);
            dateRow.appendChild(dateLabel);

            // Location row
            var locationRow = document.createElement("div");
            locationRow.className = "info-item";
            var locationImg = document.createElement("img");
            locationImg.src = "../images/booking/location.png"; // Add your location icon path here
            var locationLabel = document.createElement("label");
            locationLabel.textContent = `Location: ${booking.SessionLocation}`;
            locationRow.appendChild(locationImg);
            locationRow.appendChild(locationLabel);

            // Status row
            var statusRow = document.createElement("div");
            statusRow.className = "info-item";
            var statusLabel = document.createElement("label");
            statusLabel.textContent = "Status: ";
            var statusText = document.createElement("label");
            if (booking.BookingStatus === "Cancelled" || booking.BookingStatus === "Absent") {
                statusText.className = "status-cancelled";
            } else {
                statusText.className = "status-confirmed";
            }
            statusText.textContent = booking.BookingStatus;

            statusLabel.appendChild(statusText);
            statusRow.appendChild(statusLabel);

            infoElement.appendChild(timeRow);
            infoElement.appendChild(dateRow);
            infoElement.appendChild(locationRow);
            infoElement.appendChild(statusRow);

            bookingElement.appendChild(bookingName);
            bookingElement.appendChild(infoElement);

            document.getElementById("bookings-list").appendChild(bookingElement);
        }
    } else {
        var bookingElement = document.createElement("div");
        bookingElement.className = "booking-card";

        var bookingName = document.createElement("h2");
        bookingName.textContent = `You have no bookings`;

        bookingElement.appendChild(bookingName);
        document.getElementById("bookings-list").appendChild(bookingElement);
    }
});
