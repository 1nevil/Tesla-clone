const menu = document.querySelector(".Menu");
const cancel = document.querySelector(".menu-cross");
const menubar = document.querySelector(".menubar");
const body = document.querySelector(".body");

// menu.addEventListener("click");
// cancel.addEventListener("click", () => {
//   menubar.style.transform = "translateX(100%)";
// });
menu.addEventListener("click", () => {
  // console.log("hello");
  menubar.classList.toggle("active");
  body.style.backgroundColor = "#cfcfcf";
});
cancel.addEventListener("click", () => {
  // console.log("hello");
  menubar.classList.toggle("active");
  // body.style.backgroundColor = "gray";
  //
});
