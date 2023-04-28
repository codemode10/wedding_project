window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const typeText = (elementId, text, speed, callback) => {
  let i = 0;
  const typingEffect = () => {
    if (i < text.length) {
      document.getElementById(elementId).innerHTML += text.charAt(i);
      i++;
      setTimeout(typingEffect, speed);
    } else if (callback) {
      callback();
    }
  };
  typingEffect();
};

document.addEventListener('DOMContentLoaded', () => {
  typeText('typing-h1', 'Bienvenue au mariage de Lloyd et Mathilde', 100, () => {
    typeText('typing-h2', 'Saint-Cannat, Provence, France', 100);
  });
});

