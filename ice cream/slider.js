let menuBtn = document.querySelector(".hide");
let menu = document.getElementById("menu");

menuBtn.addEventListener("click", (event) => {
  event.stopPropagation();

  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

window.addEventListener("click", () => {
  menu.style.display = "none";
});

let slider = Array.from(document.getElementsByClassName("slider"));
let btn = Array.from(document.getElementsByClassName("btn"));
let slideNo = 0; // Initialize slideNo
let num = 0;

let sliderShow = (num) => {
  if (num === slider.length) {
    num = 0;
    slideNo = 0;
  }
  if (num < 0) {
    num = slider.length - 1;
    slideNo = slider.length - 1;
  }
  for (const y of slider) {
    y.style.display = "none";
  }
  for (const y of btn) {
    y.style.backgroundColor = "";
  }
  slider[num].style.display = "block";
  btn[num].style.backgroundColor = "white";

  num = slideNo;
};
sliderShow(slideNo);
let pre = document.querySelector(".pre");
let next = document.querySelector(".next");

pre.addEventListener("click", () => {
  slideNo -= 1;
  sliderShow(slideNo);
  console.log("pre");
});
next.addEventListener("click", () => {
  slideNo += 1;
  sliderShow(slideNo);
  console.log("next");
});
//T click on button to show slider
btn.forEach((element, i) => {
  element.addEventListener("click", (e) => {
    for (const y of btn) {
      y.style.backgroundColor = "";
    }
    e.target.style.backgroundColor = "salmon";
    for (const y of slider) {
      y.style.display = "none";
    }
    slider[i].style.display = "block";
    console.log(i);
    console.log(slider[i]);
  });
});
///For automatically images
window.onload = function () {
  function foo() {
    slideNo++;
    sliderShow(slideNo);
  }
  setInterval(foo, 3000);
};
