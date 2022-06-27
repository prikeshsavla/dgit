chrome.webNavigation.onHistoryStateUpdated.addListener(function ({ tabId }) {
  chrome.tabs.sendMessage(tabId, {
    message: "add-button",
  });
});
