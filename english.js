window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // Check if the viewport width is more than 768px (common breakpoint for desktop screens)
  if (window.matchMedia("(min-width: 1000px)").matches) {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  } else {
    // If it's less (mobile view), keep the button hidden
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Rest of your code...


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
  typeText('typing-h1', 'Welcome to the wedding of Mathilde & Lloyd', 60, () => {
    typeText('typing-h2', '15 September 2023', 60)
  });

});

var cloudinaryInstance = cloudinary.Cloudinary.new({ cloud_name: 'degbra6ra' });

function uploadImages(files, onProgress) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
    }

    formData.append('upload_preset', 'z3hrqghk');

    xhr.open('POST', `https://api.cloudinary.com/v1_1/${cloudinaryInstance.config().cloud_name}/image/upload`, true);

    xhr.upload.onprogress = (event) => {
      if (onProgress) {
        onProgress(event.loaded, event.total);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log('Image uploaded successfully:', data);
        resolve(data);
      } else {
        console.error('Error uploading image:', xhr.statusText);
        reject(new Error('Failed to upload image'));
      }
    };

    xhr.onerror = () => {
      console.error('Error uploading image:', xhr.statusText);
      reject(new Error('Failed to upload image'));
    };

    xhr.send(formData);
  });
}

function uploadImage() {
  const input = document.getElementById('file-input');
  const files = input.files;
  const fileMessage = document.getElementById('file-message');

  if (!files || files.length === 0) {
    alert('Please select at least one image file to upload');
    return;
  }


  fileMessage.textContent = `Uploading ${files.length} image(s)...`;


  uploadImages(files, (loaded, total) => {
    console.log(`Uploaded ${loaded} of ${total} bytes`);
  })
    .then(() => {
      alert('Images uploaded successfully!');

      fileMessage.textContent = '';
    })
    .catch(() => {
      alert('Error uploading images');

      fileMessage.textContent = '';
    });
}

document.addEventListener("DOMContentLoaded", function() {
  var scrollAnimates = document.querySelectorAll('.scroll-animate');

  if ("IntersectionObserver" in window) {
      let observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("animate");
                  observer.unobserve(entry.target);
              }
          });
      }, { threshold: 0.1 });

      scrollAnimates.forEach(image => {
          observer.observe(image);
      });
  } else {
      // Fallback for browsers that don't support IntersectionObserver
      scrollAnimates.forEach(image => {
          image.classList.add('animate');
      });
  }
});
