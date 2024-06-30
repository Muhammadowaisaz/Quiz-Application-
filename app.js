
var formContainer = document.getElementById("formContainer");
var startContainer = document.getElementById("startContainer");
var heading = document.getElementById("heading");

function submitHandler() {
  // console.log("hello")
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var rollno = document.getElementById("rollno");
  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var rollnoError = document.getElementById("rollnoError");

  // console.log( name, email,rollno,nameError,emailError,rollnoError)

  if (!name.value) {
    nameError.className = "show";
    return;
  } else {
    nameError.className = "hide";
  }

  if (!email.value) {
    emailError.className = "show";
    return;
  } else {
    emailError.className = "hide";
  }
  if (!rollno.value) {
    rollnoError.className = "show";
    return;
  } else {
    rollnoError.className = "hide";
  }

  localStorage.setItem("name", name.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("rollno", rollno.value);
  heading.className = "show";
  formContainer.className = "hide";
  startContainer.className = "show";
  // console.log("form submitted!")
}
