var typed = new Typed(".text" , {
    strings:[" Frontend Developer" , "Youtuber" , "Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

// Initialize EmailJS
emailjs.init("bflr4q-k-J8V69vl5");
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm(
        "service_x35qb6f",
        "template_d768ihs",
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