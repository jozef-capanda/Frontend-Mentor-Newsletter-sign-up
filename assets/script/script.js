const form = document.querySelector("form");
const emailInput = document.querySelector("input");
const errorMessage = document.querySelector(".error-message");
const message = document.querySelector(".message");
const container = document.querySelector(".container");
const dismissButton = document.querySelector("#dismiss");
const spanEmail = document.querySelector("#spanEmail");

const validateEmail = (emailInput) => {
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
    return true;
  }
  return false;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const isEmailValid = validateEmail(emailInput);

  if (isEmailValid) {
    spanEmail.innerText = emailInput.value + ".";
    container.style.display = "none";
    message.style.display = "grid";
  } else {
    errorMessage.style.display = "inline-block";
    emailInput.classList.add("error");
    emailInput.focus();
  }
});

dismissButton.addEventListener("click", () => {
  container.style.display = "flex";
  message.style.display = "none";
  errorMessage.style.display = "none";
  if (emailInput.classList.contains("error")) {
    emailInput.classList.remove("error");
  }
  emailInput.value = "";
  emailInput.focus();
});
