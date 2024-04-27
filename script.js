// Ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get elements by their ID
    var envelope = document.getElementById("envelope");
    var btn_open = document.getElementById("open");
    var btn_reset = document.getElementById("reset");

    // Add event listeners for click events
    envelope.addEventListener("click", function() {
        open();
    });

    btn_open.addEventListener("click", function() {
        open();
    });

    btn_reset.addEventListener("click", function() {
        close();
    });

    // Function to open the envelope
    function open() {
        envelope.classList.add("open");
        envelope.classList.remove("close");
    }

    // Function to close the envelope
    function close() {
        envelope.classList.add("close");
        envelope.classList.remove("open");
    }

    console.log("JavaScript file loaded"); // Log to check if the script is loaded
});
