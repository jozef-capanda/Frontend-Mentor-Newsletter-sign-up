const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".error-message");
const message = document.querySelector(".message");
const container = document.querySelector(".container");
const dismissButton = document.querySelector("#dismiss");
const spanEmail = document.querySelector("#spanEmail");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (validateEmail(email)) {
    hideError();
    showSuccess(email);
  } else {
    showError();
  }
});

dismissButton.addEventListener("click", () => {
  resetForm();
});

const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

const showError = () => {
  errorMessage.hidden = false;
  emailInput.classList.add("error");
  emailInput.setAttribute("aria-invalid", "true");
  emailInput.focus();
};

const hideError = () => {
  errorMessage.hidden = true;
  emailInput.classList.remove("error");
  emailInput.setAttribute("aria-invalid", "false");
};

const showSuccess = (email) => {
  spanEmail.innerText = `${email}.`;
  container.hidden = true;
  message.hidden = false;
};

const resetForm = () => {
  form.reset();
  hideError();
  container.hidden = false;
  message.hidden = true;
  emailInput.focus();
};
