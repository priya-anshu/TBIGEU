document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");

        
        if (!name || !email) {
            alert("Please fill in all fields");
            return;
        }

        alert(`Thank you, ${name}! Your message has been sent to ${email}.`);
        form.reset();
    });
});
