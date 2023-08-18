const saveFormData = () => {
  const formData = {
    title: document.getElementById('title').value,
    authur: document.getElementById('authur').value,
  };

  // Save the entire form data as a single object in local storage
  localStorage.setItem('formData', JSON.stringify(formData));
};

// Function to load form data from local storage and pre-fill the form
const loadFormData = () => {
  const formData = JSON.parse(localStorage.getItem('formData'));
  if (formData) {
    document.getElementById('title').value = formData.title || '';
    document.getElementById('authur').value = formData.authur || '';
  }
};
  // Add event listeners to save data on input change and load data on page load
const contactform = document.querySelector('.contact-form');
contactform.addEventListener('input', saveFormData);
window.addEventListener('load', loadFormData);