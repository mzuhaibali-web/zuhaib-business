const form = document.querySelector(".contact form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector("textarea").value;

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (email === "") {
        alert("Please enter your email.");  
        return;
    }

    if (message === "") {
        alert("Please enter your message.");
        return;
    }

    alert("Thank you " + name + "! Your message has been received.");

});
function toggleMenu() {

    const links = document.querySelector(".links");

    links.classList.toggle("show");

}
const menuLinks = document.querySelectorAll(".links a");

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document.querySelector(".links").classList.remove("show");

    });

});