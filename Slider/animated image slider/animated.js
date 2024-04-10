let audioElement = new Audio(
  "Audio/WhatsApp Audio 2024-01-17 at 11.38.09 PM.mpeg"
);
let body = document.getElementsByClassName("con");
console.log(body);
body[0].addEventListener("click", () => {
  audioElement.play();
});
let btn = document.getElementsByClassName("stop");
console.log(btn);
btn[0].addEventListener("click", () => {
  audioElement.pause();
});
