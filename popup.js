const urlForm = document.querySelector('form.url-form');
const urlInput = document.querySelector('input.short-url');
const loading = document.querySelector('div.sk-cube-grid');

let value;

urlForm.addEventListener('submit', e => {
    e.preventDefault();
    value = urlInput.value;
    loading.classList.remove("invisible");
    chrome.runtime.sendMessage({ data: "EXPAND URL", value });
});

chrome.runtime.onMessage.addListener(message => {
    if (message.data == "OPEN") {
        loading.classList.add("invisible");
        window.open(message.value);
    }
});