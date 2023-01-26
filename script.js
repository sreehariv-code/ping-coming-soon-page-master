let form = document.getElementById("form");
let email = document.getElementById("email");
let alertSign = document.getElementsByClassName("alert");
// console.log(alertSign);

form.onsubmit = (e) => {
  e.preventDefault();
  if (!validateEmail(email.value)) {
    alertSign[0].classList.add("error");
  } else {
    alertSign[0].classList.remove("error");
  }
};

function validateEmail(input) {
  // console.log(input);
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.match(validRegex)) {
    // alert("Valid mail id");
    // if (errorSign.classList.co) email.focus();
    return true;
  } else {
    // alert("invalid email");
    email.focus();
    return false;
  }
}
