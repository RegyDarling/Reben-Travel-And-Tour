// Mobile menu
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// Dark/Light mode
function toggleMode() {
  document.body.classList.toggle("dark");
}

// Form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  
  if(name === "" || email === "" || message === "") {
    alert("Please fill in all fields");
    return;
  }
  
  if(!/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email");
    return;
  }
  
  alert("Message sent successfully!");
  this.reset();
});
