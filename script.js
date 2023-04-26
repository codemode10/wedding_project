document.addEventListener("DOMContentLoaded",function scrollToTargetAdjusted(targetSelector) {
    var element = document.querySelector(targetSelector);
    var headerOffset = 50;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition - headerOffset;
  
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
      duration: 2000 // set the duration to 1000ms (1 second)
    });
  }
  