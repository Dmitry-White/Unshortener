const apiURL = "http://expandurl.com/api/v1/?url=";

chrome.runtime.onMessage.addListener(message => {
    if (message.data == "expand") {
        fetchAsync(message.value)
            .then(value => chrome.runtime.sendMessage({ data: "open", value }));
    };
});

async function fetchAsync(url) {
    const request = new Request(apiURL + url);
    let response = await fetch(request);
    let data = await response.text();
    return data;
}

