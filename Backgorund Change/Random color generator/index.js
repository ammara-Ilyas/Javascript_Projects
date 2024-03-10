function getcolor() {
  var randomColor = Math.floor(Math.random() * 16777215);
  var randomCode = "#" + randomColor.toString(16);
  var code = document.getElementsByClassName("code")[0];
  let box = document.querySelector(".box");
  code.innerHTML = randomCode;
  code.style.color = randomCode;
  box.style.backgroundColor = randomCode;
  document.body.style.backgroundColor = randomCode;
  console.log(randomColor, randomCode);
}

document
  .getElementsByClassName("button")[0]
  .addEventListener("click", getcolor);
getcolor();
