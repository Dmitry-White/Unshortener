const API_URL = "http://expandurl.com/api/v1/?url=";
const SHORT_URL_PROVIDERS = [
    "*://*.bit.ly/*",
    "*://*.goo.gl/*",
    "*://*.tiny.cc/*",
    "*://*.tinyurl.com/*"
]

chrome.runtime.onMessage.addListener(message => {
    if (message.data == "EXPAND URL") {
        fetchAsync(message.value)
            .then(value => chrome.runtime.sendMessage({ data: "OPEN", value }));
    };
});

async function fetchAsync(url) {
    const request = new Request(API_URL + url);
    const response = await fetch(request);
    const data = await response.text();
    return data;
}

chrome.webRequest.onBeforeRequest.addListener(
    details => {
        const shortUrl = new URL(details.url);
        if (details.tabId) chrome.tabs.remove(details.tabId);
        fetchAsync(shortUrl)
            .then(url => window.open(url));
        return { cancel: true }
    },
    { urls: SHORT_URL_PROVIDERS },
    ["blocking"]
);

