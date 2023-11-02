const formLogIn = document.querySelector("#logIn"),
  inputEmail = document.querySelector("#email"),
  inputPass = document.querySelector("#password");

function handelSubmit(e) {
  e.preventDefault();
  checkLogIn();
}

function checkLogIn() {
  const alert = document.createElement("div");
  if (inputEmail.value === "" || inputPass.value === "") {
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
      <span> Welcome ${inputEmail.value} </span>
      <button class="btn btn-close">&times;</button>
    </div>`;
    setTimeout(() => {
      formLogIn.submit();
    }, 1500);
  }

  inputEmail.value = "";
  inputPass.value = "";

  // Add alert before the formLogIn element

  formLogIn.before(alert);

  closeAlert();

  // Remove alert
  setTimeout(() => {
    alert.classList.add("fadeAlert");
    setTimeout(() => {
      alert.remove();
    }, 500);
  }, 3000);
}

// Reset input

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
