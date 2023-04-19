function typeWriter(text, i, targetElement) {
    if (i < text.length) {
      targetElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(function() {
        typeWriter(text, i, targetElement)
      }, 100);
    }
  }

  var text = "Hello, World!";
var i = 0;
var targetElement = document.getElementById("typewriter-text");
typeWriter(text, i, targetElement);
