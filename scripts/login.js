const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    if (email === "" || password === "") {
        alert("Please enter your e-mail and password");
        return;
    }

    if (email === "user@example.com" && password === "test@123") {
        window.location.href = "b2b.html";
      }
    else {
        alert("Invalid credentials");
    }
})
