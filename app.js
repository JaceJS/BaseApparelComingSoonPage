const inputWrapper = document.getElementById('input-wrap');
const submitButton = document.getElementById("submit-btn");
const inputBox = document.getElementById("input-box");
const regexPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const errorIcon = document.getElementById("error-icon");
const pNew = document.createElement("p");
const errorMessage = document.createTextNode('Please provide a valid email');
pNew.appendChild(errorMessage);

submitButton.addEventListener("click", (e) => {
  if (inputBox.value.match(regexPattern)) {
    inputBox.classList.remove("error");
    errorIcon.style.display = "none";
    inputWrapper.removeChild(pNew);
  } else {
    inputBox.classList.add("error");   // add border
    errorIcon.style.display = "flex";  // add error icon
    inputWrapper.appendChild(pNew);    // add error email
  }
});
