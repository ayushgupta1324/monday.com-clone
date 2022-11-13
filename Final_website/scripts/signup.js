const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//Show input error messages
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//show success colour
function showSucces(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSucces(input);
    return true;
  } else {
    showError(input, "Email is not invalid");
    return false;
  }
}

//checkRequired fields
// function checkRequired(inputArr) {
//   inputArr.forEach(function (input) {
//     if (input.value.trim() === "") {
//       showError(input, `${getFieldName(input)} is required`);
//     } else {
//       showSucces(input);
//       return true
//     }
//   });
// }

//check input Length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be les than ${max} characters`
    );
  } else {
    showSucces(input);
    return true;
  }
  return false;
}

//get FieldName
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check passwords match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
    return false;
  }
  return true;
}

//Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let arr = JSON.parse(localStorage.getItem("user_details")) || [];

  //   checkRequired([username, email, password, password2]);
  let a = checkLength(username, 3, 25);
  let b = checkLength(password, 6, 25);
  let c = checkEmail(email);
  let d = checkPasswordMatch(password, password2);
  if (a == true && b == true && c == true && d == true) {
    let userName = document.getElementById("username").value;
    let mail = document.getElementById("email").value;
    let password_file = document.getElementById("password").value;
    let obj = { userName, mail, password_file };
    arr.push(obj);

    localStorage.setItem("user_details", JSON.stringify(arr));
    alert("Success!");

    location.assign("login.html");
  }
  return;
});
