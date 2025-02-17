document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        // Get input values
        const name = document.querySelector("input[placeholder='Full Name']").value.trim();
        const email = document.querySelector("input[placeholder='Email']").value.trim();
        const phone = document.querySelector("input[placeholder='Phone Number']").value.trim();
        const subject = document.querySelector("input[placeholder='Subject']").value.trim();
        const message = document.querySelector("textarea").value.trim();

        // Validation for empty fields
        if (!name || !email || !phone || !subject || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Email validation
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address.");
            return;
        }

        // International phone number validation
        const phonePattern = /^\+?[0-9\s\-()]{7,15}$/;
        if (!phone.match(phonePattern)) {
            alert("Please enter a valid phone number.");
            return;
        }

        // Display the data in the console (For backend integration later)
        console.log("New Contact Form Submission:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Phone:", phone);
        console.log("Subject:", subject);
        console.log("Message:", message);

        alert("Message sent successfully!");
        form.reset(); // Clear form after submission
    });
});

document.getElementById('back-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
