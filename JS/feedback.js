document.addEventListener("DOMContentLoaded", function () {
  const feedbackForm = document.getElementById("feedback-form");
  const previewBtn = document.getElementById("preview-btn");
  const previewContainer = document.getElementById("preview");

  previewBtn.addEventListener("click", function () {
    // Get form elements
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const comment = document.getElementById("comment").value;
    const subject = document.getElementById("subject").value;
    const category = document.getElementById("category").value;

    // Generate preview content
    const previewContent = `
      <p><strong>Rating:</strong> ${rating}</p>
      <p><strong>Reasons for rating:</strong> ${comment}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Category:</strong> ${category}</p>
    `;

    // Display preview content
    previewContainer.innerHTML = previewContent;
    previewContainer.style.display = "block";
  });
});
