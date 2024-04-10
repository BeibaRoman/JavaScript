const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const magicBtn = document.querySelector(".magic-btn");
const colorPeckerOptionRef = document.querySelector(".js-color-picker");

const makeColorPickerOption = (options) => {
  return options.map((option) => {
    const buttonRef = document.createElement("button");
    buttonRef.type = "button";
    buttonRef.classList.add("color-picker__option");
    buttonRef.textContent = option.label;
    buttonRef.style.backgroundColor = option.color;
    return buttonRef;
  });
};

const elements = makeColorPickerOption(colorPickerOptions);

magicBtn.addEventListener("click", () => {
  colorPeckerOptionRef.append(...elements);
});
