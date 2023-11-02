const testimonials = document.querySelectorAll(".testimonial");
console.log(testimonials);
document.addEventListener("DOMContentLoaded", () => {
  isElementInViewport;

  callbackFunc;

  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
});

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function callbackFunc() {
  for (let i = 0; i < testimonials.length; i++) {
    if (isElementInViewport(testimonials[i])) {
      testimonials[i].classList.add("in-view");
    } else {
      testimonials[i].classList.remove("in-view");
    }
  }
}
