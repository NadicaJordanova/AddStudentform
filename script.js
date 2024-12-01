const nameInput = document.getElementById("nameInput");
const nameInputError = document.getElementById("nameInputError");
const lastnameInput = document.getElementById("lastnameInput");
const emailInput = document.getElementById("emailInput");
const studentTable = document.getElementById("studentTable");
const addBtn = document.getElementById("addBtn");
const passInput = document.getElementById("passInput");
const passInputError = document.getElementById("passInputError");
const emailInputError = document.getElementById("emailInputerror");

function validateForm() {
  if (nameInput.value.length < 6) {
    nameInputError.innerText = "Name must be longer than 6 letters";
    return false;
  } else if (passInput.value.length < 8) {
    passInputError.innerText =
      "Password must be longer than 8 charachters! Try again!";
    return false;
  } else {
    passInputError.innerText = "";
    nameInputError.innerText = "";
    return true;
  }
}
// const emailInputValue = emailInput.value;
const re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// function validateEmail(emailInputValue) {
//     const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
//     return re.test(emailInputValue);
//      ;
// }

function validEmail() {
  if (re.test(emailInput.value)) {
    emailInputError.innerHTML = `
    <span class="green">Valid Email</span>
    `;
    console.log("da");
    return true;
  } else {
    emailInputError.innerText = "Invalid email addresss";
    console.log("ne");
    return false;
  }
}

function addStudent() {
  if (validateForm() && validEmail()) {
    const row = studentTable.insertRow();
    const nameCell = row.insertCell();
    const lastnameCell = row.insertCell();
    const emailCell = row.insertCell();
    const actionsCell = row.insertCell();

    nameCell.innerText = nameInput.value;
    lastnameCell.innerText = lastnameInput.value;
    emailCell.innerText = emailInput.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", () => {
      row.remove();
    });
    actionsCell.appendChild(deleteBtn);
  }
}
