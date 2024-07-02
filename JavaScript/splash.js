// Redirecting to home page after 4 seconds
setTimeout(function() {window.location.href = "home.html";}, 4000);


document.addEventListener("DOMContentLoaded", function() {
    // Making text appear smoothly
    setTimeout(function() {
        document.querySelector(".title").classList.add("show");
    }, 300); 

    setTimeout(function() {
        document.querySelector(".mission").classList.add("show");
    }, 300);

    setTimeout(function() {
        document.querySelector(".members").classList.add("show");
    }, 300);
});
