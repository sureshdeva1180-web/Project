// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  if (name && email && message) {
    status.style.color = "green";
    status.textContent = "Thank you " + name + "! Your message has been sent.";
    this.reset();
  } else {
    status.style.color = "red";
    status.textContent = "⚠️ Please fill in all fields.";
  }
});