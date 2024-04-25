const coordsOutPutRef = document.querySelector(".js-coords");

window.addEventListener("mousemove", _.throttle(onMouseMove, 300));
// window.addEventListener("mousemove", _.debounce(onMouseMove, 300));

let counterMouseMoveEvent = 1;

function onMouseMove(e) {
  coordsOutPutRef.textContent = `Кількість викликів onInputChange: ${counterMouseMoveEvent}
  X: ${e.clientX}
  Y: ${e.clientY}
  `;
  counterMouseMoveEvent += 1;
}

const inputEl = document.querySelector(".js-input");
const outputEl = document.querySelector(".js-output");
let counterInputEnterEvent = 1;

// inputEl.addEventListener("input", _.throttle(onInputEnter, 500));

inputEl.addEventListener("input", _.debounce(onInputEnter, 300));

function onInputEnter(e) {
  console.log(e.target.value);

  outputEl.textContent = `Кількість викликів onInputChange: ${counterInputEnterEvent},
  Значення: ${e.target.value}`;
  counterInputEnterEvent += 1;
}
