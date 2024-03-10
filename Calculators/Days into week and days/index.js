let day = document.getElementById("day");
let week = document.getElementById("week");
let formula = document.getElementById("for");

day.addEventListener("input", function () {
  let d = day.value;
  let e = Math.floor(d / 7);
  let f = d % 7;
  week.value = `${e}`;
  console.log(f);
  formula.innerHTML = `${week.value} = ${day.value} / 7`;
});
week.addEventListener("input", function () {
  let w = week.value;
  let g = w * 7;
  day.value = g;
  formula.innerHTML = `${week.value} = ${day.value} / 7 `;
});
console.log(formula);
