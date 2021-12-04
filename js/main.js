const review = document.querySelectorAll(
  ".reviews-stats .stat-rating .progress span"
);

const ourReviews = document.querySelector(".reviews");

window.onscroll = () => {
  console.log(this.scrollY);
  console.log(ourReviews.offsetTop);
  if (this.scrollY >= ourReviews.offsetTop - 150) {
    review.forEach((e) => {
      e.style.width = e.dataset.rating;
    });
  }
};
