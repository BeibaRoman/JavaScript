const magicBtn = document.querySelector(".js-magic-btn");

magicBtn.addEventListener("click", () => {
  const navEl = document.querySelector(".site-nav");
  console.log("🚀 ~ magicBtn.addEventListener ~ navEl:", navEl);
  const navLinkEl = document.querySelector(".site-nav__link");
  console.log("🚀 ~ magicBtn.addEventListener ~ navLinkEl:", navLinkEl);
});
