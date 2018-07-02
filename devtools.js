chrome.devtools.network.onRequestFinished.addListener(request => {
  if (request.response.content.mimeType == "text/html") {
    request.getContent(content => {
      chrome.runtime.sendMessage({ data: "network", value: content });
    })
  };
});
