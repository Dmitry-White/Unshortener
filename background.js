console.log("Whatcha lookin' at huh?");

chrome.runtime.onMessage.addListener(message => {
    if (message.data == "expand") {
        fetchAsync(message.value)
    } else if (message.data == "network") {
        chrome.runtime.sendMessage({ data: "open", value: message.value });
    };
});

async function fetchAsync(url) {
    const apiURL = "http://expandurl.com/api/v1/?url=";
    const request = new Request(apiURL + url, { mode: 'no-cors' });
    let response = await fetch(request);
    let data = await response.text();
    return data;
}


