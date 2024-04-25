if ("loading" in HTMLImageElement.prototype) {
  addSrcAttrToLazeImage();
} else {
  addLazySizesScript();
}

const lazyImages = document.querySelectorAll("img[data-src]");

lazyImages.forEach((image) => {
  image.addEventListener("load", onImageLoaded, { once: true });
});

function onImageLoaded(e) {
  e.target.classList.add("appear");
}

function addSrcAttrToLazeImage() {
  const lazyImages = document.querySelectorAll('img[loading = "lazy"]');
  lazyImages.forEach((img) => {
    img.src = img.dataset.src;
  });
}

function addLazySizesScript() {
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js";
  script.intergrity =
    "sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==";
  script.crossOrigin = "anonymous";
  document.body.appendChild(script);
}
