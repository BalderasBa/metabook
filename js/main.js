const review = document.querySelectorAll(
  ".reviews-stats .stat-rating .progress span"
);

const ourReviews = document.querySelector(".reviews");

window.onscroll = () => {
  if (this.scrollY >= ourReviews.offsetTop) {
    review.forEach((e) => {
      e.style.width = e.dataset.rating;
    });
  }
};
