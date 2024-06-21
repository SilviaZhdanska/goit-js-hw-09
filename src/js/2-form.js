const form = document.querySelector('.feedback-form');
const textarea = form.elements.message;
const emailInput = form.elements.email;
const localStorageKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

function saveFormDataToLocalStorage() {
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function loadFormDataFromLocalStorage() {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    textarea.value = formData.message;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadFormDataFromLocalStorage();
});

form.addEventListener('input', evt => {
  const { name, value } = evt.target;
  formData[name] = value.trim();
  saveFormDataToLocalStorage();
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(localStorageKey);
  formData = { email: '', message: '' };
  emailInput.value = '';
  textarea.value = '';
});
