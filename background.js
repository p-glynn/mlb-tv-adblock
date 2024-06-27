chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((info) => {
  let message;
  if (info.rule.ruleId === 1) {
    message = "commercial";
  } else if (info.rule.ruleId === 2) {
    message = "live";
  }

  if (message) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: (msg) => {
            console.log(msg);
          },
          args: [message]
        });
      }
    });
  }
});
