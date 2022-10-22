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

function myFunction() {
  var element = document.getElementById("homepage");
  console.log(element, "hello");
  // element.classList.remove("sticky");
}
function isVisible(domElement) {
  return new Promise((resolve) => {
    const o = new IntersectionObserver(([entry]) => {
      resolve(entry.intersectionRatio === 1);
      o.disconnect();
    });
    o.observe(domElement);
  });
}

myFunction();
const asyncFunction = async () => {
  const visible = await isVisible(document.querySelector("#testani"));
  console.log(visible, "knkdsjncsdlncldsncdlsn");
};

$(window).scroll(function () {
  if ($("#testani").visible()) {
    console.log("visible");
    $("homepage").removeClass("sticky");
  } else {
    $("#elementId").addClass("hp_buttons");
  }
});
