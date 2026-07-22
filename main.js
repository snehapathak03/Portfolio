var typed = new Typed(".text" , {
    strings:[" Frontend Developer" , "Youtuber" , "Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY");
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        this
    )
    .then(() => {
        alert("Message sent successfully!");
        form.reset();
    })
    .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
    });
});