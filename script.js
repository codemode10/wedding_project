

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
  typeText('typing-h1', 'Bienvenue au mariage de Mathilde & Lloyd', 60, () => {
    typeText('typing-h2', 'Le 15 septembre 2023', 60)
  });

});



var cloudinaryInstance = cloudinary.Cloudinary.new({ cloud_name: 'degbra6ra' });

function uploadImages(files, onProgress) {
  let uploads = [];

  for (let i = 0; i < files.length; i++) {
    uploads.push(new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const formData = new FormData();

      formData.append('file', files[i]);
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
    }));
  }

  return Promise.all(uploads);
}


function handleFileSelection() {
  const input = document.getElementById('file-input');
  const files = input.files;
  const fileMessage = document.getElementById('file-message');  // Assuming you have an element to display messages

  if (!files || files.length === 0) {
    fileMessage.textContent = 'No images selected';
  } else {
    fileMessage.textContent = `Selected ${files.length} image(s)`;
  }
}

document.getElementById('file-input').addEventListener('change', handleFileSelection);


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
