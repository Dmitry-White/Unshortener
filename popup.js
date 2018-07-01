const urlForm = document.querySelector('form.url-form');
const urlInput = document.querySelector('input.short-url');

let value = "";

urlForm.addEventListener('submit', e => {
    e.preventDefault();
    value = urlInput.value;
    window.open(value)
});
