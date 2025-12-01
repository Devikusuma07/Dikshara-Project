document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm-password").value;

  if (password !== confirm) {
    alert("Passwords do not match! Please try again.");
  } else {
    alert("Organization account created successfully!");
    // Here you could redirect or save data if you have a backend
  }
});
