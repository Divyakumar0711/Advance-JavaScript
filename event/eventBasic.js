// 1. different types of events
document.getElementById("owl").onclick = function (e) {
  console.log(e);
};

// 2. basic event call
document.getElementById("japan").onclick = function () {
  console.log("japan clicked");
};

// 3. using addEventListener(modern method)
document.getElementById("photoshop").addEventListener("click", function () {
  console.log("photoshop clicked");
});

// 4. event propogration (bubbling) default value is false
// in this scenrio first print river then priner clicked inner (bottom to top)
// document.getElementById("images").addEventListener(
//   "click",
//   function () {
//     console.log("clicked inner");
//   },
//   false
// );
// document.getElementById("river").addEventListener(
//   "click",
//   function () {
//     console.log("river clicked");
//   },
//   false
// );

// 5.4. event propogration (capuring)
// in this scenrio first print river then priner clicked inner (top to bottom)
// document.getElementById("images").addEventListener(
//   "click",
//   function () {
//     console.log("clicked inner");
//   },
//   true
// );
// document.getElementById("prayer").addEventListener(
//   "click",
//   function () {
//     console.log("river clicked");
//   },
//   true
// );

// 6. stop event propogration
// document.getElementById("images").addEventListener(
//   "click",
//   function (e) {
//     console.log("clicked inner");
//   },
//   false
// );
// document.getElementById("river").addEventListener(
//   "click",
//   function (e) {
//     console.log("river clicked");
//     e.stopPropagation();
//   },
//   false
// );

// 7. preventDefault => can't do any action
document.getElementById("google").addEventListener("click", function (e) {
  console.log("google clicked");
  e.preventDefault();
});
