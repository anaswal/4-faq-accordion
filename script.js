const acc = document.querySelectorAll(".accordion");

// accordions.forEach((accordion) => {
//   accordion.addEventListener("click", () => {
//     accordion.classList.toggle("active");

//     let panel = accordion.nextElementSibling;
//     console.log(panel);
//     if (panel.style.display === "none") {
//       panel.style.display === "block";
//     } else {
//       panel.style.display === "none";
//     }
//   });
// });

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.childNodes[1].setAttribute("src", "./assets/images/icon-plus.svg");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.childNodes[1].setAttribute("src", "./assets/images/icon-minus.svg");
    }
  });
}
