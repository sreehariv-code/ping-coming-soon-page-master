let form = document.getElementById("form");
let email = document.getElementById("email");

form.onsubmit = (e) => {
  e.preventDefault();
  console.log(validateEmail(email.value));
  //   console.log(email);
  // console.log()
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
