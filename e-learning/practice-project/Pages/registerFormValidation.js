const formRegister = document.querySelector("#register");

const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPass = document.querySelector("#password");
const inputConfirmPass = document.querySelector("#confirmPassword");

function handelSubmit(e) {
  e.preventDefault();
  checkRegister();
}

function checkRegister() {
  const alert = document.createElement("div");
  if (
    inputEmail.value === "" ||
    inputPass.value === "" ||
    inputConfirmPass.value === "" ||
    inputName.value === ""
  ) {
    alert.classList.add("alert", "alert-danger");
    alert.innerHTML = `
      <div class="alert-close">
        <span> Please complete all fields </span>
        <button class="btn btn-close">&times;</button>
      </div>
`;
  } else {
    alert.classList.add("alert", "alert-success");
    alert.innerHTML = `
    <div class="alert-close">
      <span> Welcome ${inputName.value} </span>
      <button class="btn btn-close">&times;</button>
    </div>`;
    setTimeout(() => {
      formRegister.submit();
    }, 1500);
  }

  // Reset input
  inputName.value = "";
  inputEmail.value = "";
  inputPass.value = "";
  inputConfirmPass.value = "";

  // Add alert before the formRegister element

  formRegister.before(alert);

  closeAlert();

  // Remove alert
  setTimeout(() => {
    alert.classList.add("fadeAlert");
    setTimeout(() => {
      alert.remove();
    }, 500);
  }, 3000);
}

document.querySelector("button[type=submit]").onclick = (e) => {
  handelSubmit(e);
};

// Add event listener to the close button
function closeAlert() {
  const alertCloseBtn_s = document.querySelectorAll(".alert .btn-close");
  alertCloseBtn_s.forEach(
    (alertCloseBtn) =>
      (alertCloseBtn.onclick = (e) => {
        e.target.parentElement.parentElement.classList.add("fadeAlert");
        setTimeout(() => {
          e.target.parentElement.parentElement.remove();
        }, 500);
      })
  );
}

closeAlert();
