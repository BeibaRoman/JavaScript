const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  const email = e.currentTarget.email.value;
  const password = e.currentTarget.password.value;

  if (!(email === "" || password === "")) {
    const date = {
      email,
      password,
    };
    console.log(date);
    e.target.reset();
    return;
  }
  alert("Please fill in all the fields!");
}
