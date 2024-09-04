chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url === "chrome://newtab/" && changeInfo.status === "complete") {
      console.log("Injecting script");
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ["out/index.html"]

      }, () => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
        } else {
          console.log("Script injected successfully");
        }
      });
    }
  });
  