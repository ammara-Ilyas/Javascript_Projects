let text = document.getElementById("text");
let charc = document.getElementById("char");
let words = document.getElementById("word");

text.addEventListener("input", function () {
  let inputText = text.value;
  const charCount = inputText.length;
  charc.innerText = charCount;

  inputText = inputText.trim();
  console.log(inputText);
  let word = inputText.split(" ");
  //   console.log("word" + word);
  let wordCounter = word.filter((letter) => {
    return letter != "";
  });
  //   console.log(wordCounter.length);
  words.innerHTML = wordCounter.length;

  //   let len = this.value;
  //   let char = len.length;
  //   console.log("char", char);
  //   charc.innerHTML = char;

  //   len = len.trim();
  //   console.log("len" + len);
  //   let text = len.split(" ");
  //   let cleanList = text.filter(function (word) {
  //     return word != "";
  //   });
  //   console.log(cleanList);
  //   console.log(text);
  //   word.innerHTML = cleanList.length;
});
