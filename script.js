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

  // Inform the user about the number of files being uploaded
  fileMessage.textContent = `Uploading ${files.length} image(s)...`;

  // Call the uploadImages function and handle success and error cases
  uploadImages(files, (loaded, total) => {
    console.log(`Uploaded ${loaded} of ${total} bytes`);
  })
    .then(() => {
      alert('Images uploaded successfully!');
      // Clear the message after the upload process is complete
      fileMessage.textContent = '';
    })
    .catch(() => {
      alert('Error uploading images');
      // Clear the message after the upload process is complete
      fileMessage.textContent = '';
    });
}





  
  


