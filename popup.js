const urlForm = document.querySelector('form.url-form');
const urlInput = document.querySelector('input.short-url');

let value = "";

urlForm.addEventListener('submit', e => {
    e.preventDefault();
    value = urlInput.value;
    chrome.runtime.sendMessage({ data: "expand", value });
});

chrome.runtime.onMessage.addListener(message => {
    if (message.data == "open") {
        window.open(message.value);
    }
});