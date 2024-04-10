let viewBtn = Array.from(document.querySelectorAll("#myBtn"));
let myModal = Array.from(document.querySelectorAll("#myModal"));
let closeBtn = document.querySelectorAll("#close");

viewBtn.forEach((element, i) => {
  element.addEventListener("click", (e) => {
    myModal[i].style.display = "block";
    closeBtn[i].addEventListener("click", () => {
      myModal[i].style.display = "none";
    });
    //////////////////for displayImage////////////
    console.log(element);
    let displayImage = myModal[i].querySelector("#display-image");
    let smallImg = Array.from(myModal[i].getElementsByTagName("img"));
    console.log(displayImage);
    console.log(smallImg);
    smallImg.forEach((item) => {
      item.addEventListener("click", () => {
        displayImage.src = item.src;
      });
    });
  });
});
