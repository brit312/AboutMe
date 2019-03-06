let slideImg = document.querySelectorAll(".slide"),
left = document.querySelector("#arrowL"),
right = document.querySelector("#arrowR"),
current = 0;

// This functon is to clear the images.
function reset() {
for (let i = 0; i < slideImg.length; i++) {
  slideImg[i].style.display = "none";
}
}

// This function will start the slide show.
function startSlide() {
reset();
slideImg[0].style.display = "block";
}

// This function will provide the previous slide.
function prevSlide() {
reset();
slideImg[current - 1].style.display = "block";
current--;
}

// This function will provide the next slide.
function nextSlide() {
reset();
slideImg[current + 1].style.display = "block";
current++;
}

// This function will control the left arrow.
left.addEventListener("click", function() {
if (current === 0) {
  current = slideImg.length;
}
prevSlide();
});

// This function will control the right arrow.
right.addEventListener("click", function() {
if (current === slideImg.length - 1) {
  current = -1;
}
nextSlide();
});

startSlide();