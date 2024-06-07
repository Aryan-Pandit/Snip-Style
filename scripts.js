document.addEventListener('DOMContentLoaded', function () {
    var collapseElements = document.querySelectorAll('.collapse');

    collapseElements.forEach(function (collapse) {
        collapse.addEventListener('show.bs.collapse', function () {
            var button = document.querySelector('[data-bs-target="#' + collapse.id + '"]');
            if (button) {
                button.textContent = '-';
            }
        });

        collapse.addEventListener('hide.bs.collapse', function () {
            var button = document.querySelector('[data-bs-target="#' + collapse.id + '"]');
            if (button) {
                button.textContent = '+';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("booking-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const bookingConfirmationModal = new bootstrap.Modal(document.getElementById("bookingConfirmationModal"));
        bookingConfirmationModal.show();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    function updateWaitingTime() {
        // Simulate fetching data from an API
        const waitingTime = Math.floor(Math.random() * 60) + 2; // Random waiting time between 2 and 61 minutes
        document.getElementById("waiting-time").innerText = `${waitingTime} minutes`;
    }

    // Update waiting time every 30 seconds
    updateWaitingTime();
    setInterval(updateWaitingTime, 30000);
});
