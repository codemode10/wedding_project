document.addEventListener('DOMContentLoaded', function() {
    let carouselImages = document.querySelectorAll('.carousel .landing-image');
    let currentIndex = 0;
    let imageLength = carouselImages.length;

    // Start by hiding all images
    carouselImages.forEach(function(img, idx) {
      img.style.display = 'none';
    });

    // Then show the first one
    carouselImages[0].style.display = 'block';

    setInterval(function() {
      // Hide the current image
      carouselImages[currentIndex].style.display = 'none';

      // Update the current index
      currentIndex = (currentIndex + 1) % imageLength;

      // Show the next image
      carouselImages[currentIndex].style.display = 'block';
    }, 1575);  // The number here represents the time delay between image changes, in milliseconds. Adjust as desired.
  });



  window.addEventListener('DOMContentLoaded', function() {
    const titleElement = document.getElementById('title');
    const titleText = "Chose your language";
    const typingSpeed = 120;  // you can adjust this speed to your liking
    const buttons = document.querySelectorAll('.language-btn');  // Get all the buttons

    let index = 0;
    const typeTextInterval = setInterval(() => {
        titleElement.textContent += titleText[index];
        index++;
        if (index >= titleText.length) {
            clearInterval(typeTextInterval);

        }
    }, typingSpeed);
});
