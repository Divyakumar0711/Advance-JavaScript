// remove image when clicked

document.querySelector("#images").addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentNode.remove();
  }
});
