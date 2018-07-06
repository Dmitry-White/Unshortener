const apiURL = "http://expandurl.com/api/v1/?url=";

chrome.runtime.onMessage.addListener(message => {
    if (message.data == "EXPAND URL") {
        fetchAsync(message.value)
            .then(value => chrome.runtime.sendMessage({ data: "OPEN", value }));
    };
});

async function fetchAsync(url) {
    const request = new Request(apiURL + url);
    let response = await fetch(request);
    let data = await response.text();
    return data;
}

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
      // Ensuring that we check host names with and without WWW
      var currentHost = new URL(details.url).hostname;
      var withWWW;
      var withoutWWW;
      if (currentHost.indexOf('www.') == -1) {
        withoutWWW = currentHost;
        withWWW = 'www.' + currentHost;
      }
      else {
        withWWW = currentHost;
        withoutWWW = currentHost.substring(4);
      }
  
      console.log(currentHost, withWWW, withoutWWW);
      setTimeout(function(){},1000);
    },
    { urls: ["*://*.bit.ly/*"] },
    ["blocking"]
);

