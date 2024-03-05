// Mobile upload image
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('tomato-image-input');
    const preview = document.getElementById('image-preview');
    const button = document.getElementById('upload-button');
    const message = document.getElementById('upload-message');

    button.addEventListener('click', function() {
        const file = input.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function() {
                const img = document.createElement('img');
                img.src = reader.result;
                img.style.maxWidth = '100%';
                img.style.height = 'auto';
                preview.innerHTML = '';
                preview.appendChild(img);
                button.innerText = 'Image Uploaded';
                message.innerText = 'Image uploaded successfully!';
                message.classList.remove('error');
                message.classList.add('success');
            }
            reader.readAsDataURL(file);
        } else {
            message.innerText = 'Please select an image.';
            message.classList.remove('success');
            message.classList.add('error');
        }
    });

    input.addEventListener('click', function() {
        // Reset message
        message.innerText = '';
        message.classList.remove('error', 'success');
    });
});

// Contact form validation
const form = document.querySelector('submissionForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submit = document.getElementById('submitButton');

submit.addEventListener('click', (e) => {
    e.preventDefault();
  
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
  
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
  
    if (name && email && message) {
      alert('Form was submitted!');
      contactformElem.reset();
    }
  });

