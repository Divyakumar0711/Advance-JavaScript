// document.getElementById("orange").onclick = function () {
//   document.getElementById("main").style.backgroundColor = "orange";
// };

// document.getElementById("green").onclick = function () {
//   document.getElementById("main").style.backgroundColor = "green";
// };

function clickHandler(color) {
  //   document.getElementById("main").style.backgroundColor = `${color}`;  this is problem. fuction is execute automatically that's why we need clouser
  return function () {
    //this return function both color value and function execution
    document.getElementById("main").style.backgroundColor = `${color}`;
  };
}
document.getElementById("orange").onclick = clickHandler("orange");
document.getElementById("green").onclick = clickHandler("green");
