// Simple contact form submit simulation
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const messageEl = document.getElementById("form-message");
    messageEl.style.color = "green";
    messageEl.innerText = Thanks ${name}, your message has been sent!;

    // Clear form
    document.getElementById("contact-form").reset();
});