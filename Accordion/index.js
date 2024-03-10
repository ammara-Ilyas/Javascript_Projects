document.addEventListener("DOMContentLoaded", function () {
  let items = document.querySelectorAll(".itm");
  items.forEach((item) => {
    let title = item.querySelector(".tittle");
    let text = item.querySelector(".text");
    title.addEventListener("click", (e) => {
      for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
          item.classList.toggle("active");
        } else {
          items[i].classList.remove("active");
        }
      }
    });
  });
});
