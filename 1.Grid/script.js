"use strict";

////////////////////////////////////////////////////////////////////////////

////_____Building a slider Component____()_____/////

const slidesA = document.querySelectorAll(".slide--A");
const btnLeftA = document.querySelector(".left--a");
const btnRightA = document.querySelector(".right--a");
let curSlideA = 0;
const maxSlideA = slidesA.length;

const dotContainerA = document.querySelector(".dots-1");
console.log("siva");

//__Creating Function__//
const goToSlideA = function (slide) {
  slidesA.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

const nextSlideA = function () {
  if (curSlideA === maxSlideA - 1) {
    curSlideA = 0;
  } else {
    curSlideA++;
  }
  goToSlideA(curSlideA); //currenSlide=1 : (-100%,0%,100%,200%)
  activateDotA(curSlideA);
};

const prevSlideA = function () {
  if (curSlideA === 0) {
    curSlideA = maxSlideA - 1;
  } else {
    curSlideA--;
  }

  goToSlideA(curSlideA);
  activateDotA(curSlideA);
};
//Create Dots
const createDotsA = function () {
  slidesA.forEach(function (s, i) {
    dotContainerA.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot " data-slide="${i}"></button> `
    );
  });
};

const activateDotA = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

const initA = function () {
  //Dots
  createDotsA();
  //ActivateDots
  activateDotA(0);
  //beginning
  goToSlideA(0); //(0%,100%,200%,300%)
};

//__Initiate__//
initA();

//__Event Handler__//
//Next Slide
btnRightA.addEventListener("click", nextSlideA);
//Previous Slide
btnLeftA.addEventListener("click", prevSlideA);

//Implimenting Event for Key Button
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlideA();
  e.key === "ArrowRight" && nextSlideA();
});

//(Using Event Delegation)Implimenting Dots Slide

dotContainerA.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot"));
  const { slide } = e.target.dataset; // Here We are destructuring ( we are reading from the object so we use{})

  goToSlideA(slide);
  activateDotA(slide);
});
