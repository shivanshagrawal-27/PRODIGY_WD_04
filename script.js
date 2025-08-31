// Smooth scroll highlight (optional)
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector("nav ul").classList.remove("active");
  });
});

// Contact Form Validation
const form = document.getElementById("contact-form");
const statusMsg = document.getElementById("form-status");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    statusMsg.style.color = "red";
    statusMsg.textContent = "Please fill all fields.";
    return;
  }
  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    statusMsg.style.color = "red";
    statusMsg.textContent = "Please enter a valid email.";
    return;
  }

  statusMsg.style.color = "green";
  statusMsg.textContent = "Message sent successfully! (Demo)";
  form.reset();
});
