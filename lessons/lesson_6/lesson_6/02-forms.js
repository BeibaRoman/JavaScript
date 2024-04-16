const form = document.querySelector(".js-register-form");

form.addEventListener("submit", onFormSunmit);

function onFormSunmit(event) {
  event.preventDefault();

  const formDate = new FormData(event.currentTarget);
  console.log(formDate);

  formDate.forEach((value, name) => {
    console.log("🚀 name:", name);
    console.log("🚀 value:", value);
  });
}
