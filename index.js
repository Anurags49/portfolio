document.getElementById("contactForm").addEventListener("submit", function () {
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  const timestamp = new Date().toLocaleString();

  // Store in localStorage
  const submission = { name, email, message, timestamp };
  const existing = JSON.parse(localStorage.getItem("contactSubmissions")) || [];
  existing.push(submission);
  localStorage.setItem("contactSubmissions", JSON.stringify(existing));

  // Just show confirmation message briefly (optional)
  // NOTE: You will still be redirected after form submit
  setTimeout(() => {
    document.getElementById("confirmation-message").style.display = "block";
    setTimeout(() => {
      document.getElementById("confirmation-message").style.display = "none";
    }, 3000);
  }, 100);

  // ✅ Don't block form submission
  // ✅ Let it submit to FormSubmit normally
});
// Dark Mode Toggle
const toggle = document.getElementById("darkModeToggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("dark");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});
