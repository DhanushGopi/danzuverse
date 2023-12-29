document.querySelector(".connect-btn").addEventListener("click", showConnect);

function showConnect() {
  document.querySelector(".connect").classList.remove("connect-open");
}

document
  .querySelector(".connect-close-btn")
  .addEventListener("click", closeConnect);

function closeConnect() {
  document.querySelector(".connect").classList.add("connect-open");
}

/*testimonials section*/
import { testimonials } from "./testimony.js";

let i = 0;

let j = testimonials.length;

let testContent = document.getElementById("test-content");

let nextBtn = document.getElementById("test-rbtn");
let prevBtn = document.getElementById("test-lbtn");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTest();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTest();
});

let displayTest = () => {
  testContent.innerHTML = `
  <h3> ${testimonials[i].name}</h3>
  <h6> ${testimonials[i].designation} </h6>
  <p> ${testimonials[i].testimonial} </p>
  `;
};

window.onload = displayTest;

console.log(testimonials[i].testimonial);

document
  .querySelector(".testimony-btn")
  .addEventListener("click", showTestimony);

function showTestimony() {
  document.querySelector(".test-box").classList.remove("test-box-open");
}

document
  .querySelector(".test-clsbtn")
  .addEventListener("click", closeTestimony);

function closeTestimony() {
  document.querySelector(".test-box").classList.add("test-box-open");
}
