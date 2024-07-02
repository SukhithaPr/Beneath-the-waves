document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const toggleBtn = document.querySelector(".toggle");
  const dropdown = document.querySelector(".dropdown");

  // Toggle the dropdown menu when the toggle button is clicked
  toggleBtn.addEventListener("click", () => {
    dropdown.classList.toggle("open");
    const isOpen = dropdown.classList.contains("open");

    // Change the toggle button icon based on dropdown state
    toggleBtn.innerHTML = isOpen
      ? '<ion-icon name="close-outline"></ion-icon>'
      : '<ion-icon name="menu-outline"></ion-icon>';
  })
});
