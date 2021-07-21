const cover = document.querySelector(".cover");
const coverBtn = document.querySelector(".cover-btn");
const col1 = document.querySelector(".col-1");
const col2 = document.querySelector(".col-2");

function coverMove() {
  if (coverBtn.textContent == "Sign Up") {
    cover.style.transform = "translateX(-50%)";
    coverBtn.textContent = "Login";
    col1.style.opacity = "0";
    col2.style.opacity = "1";
  } else {
    cover.style.transform = "translateX(50%)";
    coverBtn.textContent = "Sign Up";
    col1.style.opacity = "1";
    col2.style.opacity = "0";
  }
}
