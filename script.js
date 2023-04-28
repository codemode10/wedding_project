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

  async function uploadImage() {
    const input = document.getElementById('file-input');
    const files = input.files;
  
    if (!files || files.length === 0) {
      alert('Please select at least one image file to upload');
      return;
    }
  
    const formData = new FormData();
  
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
    }
  
    formData.append('upload_preset','z3hrqghk'); // Replace 'YOUR_UPLOAD_PRESET' with your actual upload preset
  
    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudinaryInstance.config().cloud_name}/image/upload`, {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Image uploaded successfully:', data);
        alert('Images uploaded successfully!');
        // Use 'data.url' to display the uploaded image or store it in your database
      } else {
        throw new Error('Failed to upload image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading images');
    }
  }
  
  


