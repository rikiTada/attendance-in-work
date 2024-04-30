const createdURL = "https://attendance.moneyforward.com/my_page#auto";

const onClickedStamp = () => {
  if (window.location.href.includes("#auto")) {
    document.querySelector("button.time-stamp-button").click();
  }
};

chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: createdURL });
});

chrome.webNavigation.onDOMContentLoaded.addListener(async ({ tabId, url }) => {
  if (url !== createdURL) return;
  chrome.scripting.executeScript({
    target: { tabId },
    func: onClickedStamp,
  });
});
