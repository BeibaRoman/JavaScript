const containerEl = document.querySelector(".js-container");
const addButtonEl = document.querySelector(".js-add-btn");

addButtonEl.addEventListener("click", onCreateButton);

containerEl.addEventListener("click", onCliickDelegation);

function onCliickDelegation(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  console.log(e.target.textContent);
  console.log(e.currentTarget);
}

let conuterButton = 6;
function onCreateButton() {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = `Кнопка ${conuterButton}`;
  containerEl.append(button);
  conuterButton += 1;
}
