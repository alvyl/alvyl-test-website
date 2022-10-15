let scrollAnimation = document.getElementById("scroll-animation");
let scrollBar = document.getElementById("scroll-bar");

let messageAnimation = document.getElementById("message-animation");
let messageText = document.getElementById("message-text");

document.onscroll = function () {
  scrollBar.style.width = getPercentageScrolled(scrollAnimation) + "%";

  messageText.style.opacity = getPercentageScrolled(messageAnimation) / 100;
};

function getPercentageScrolled(element) {
  let distanceScrolled = window.scrollY - element.offsetTop;
  let percentageScrolled = Math.round(
    distanceScrolled / (element.offsetHeight / 100)
  );
  return Math.min(100, Math.max(0, percentageScrolled));
}
