window.onload = function () {
  addButtons();
};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // listen for messages sent from background.js
  if (request.message === "add-button") {
    addButtons();
  }
});
function addButtons() {
  if (document.getElementById("downloadButton")) {
    return;
  }
  // The body of this function will be executed as a content script inside the
  // current page
  function downloadRepository() {
    console.log(document.location.href);
    window.open(
      " https://prikeshsavla.github.io/DownGit/#/home?url=" +
        document.location.href
    );
  }

  function openRepository() {
    window.open(
      document.location.href.replace(
        "https://github.com",
        "https://github1s.com"
      )
    );
  }
  // Initialize button with user's preferred color
  var downloadButton = document.createElement("button");
  var openButton = document.createElement("button");
  "btn ml-2".split(" ").forEach(function (className) {
    downloadButton.classList.add(className);
  });

  "btn btn-primary ml-2".split(" ").forEach(function (className) {
    openButton.classList.add(className);
  });
  downloadButton.id = "downloadButton";
  downloadButton.innerHTML = "Download";
  openButton.innerHTML = "Github1s";
  openButton.id = "openButton";
  //  https://prikeshsavla.github.io/DownGit/#/home?url=https://github.com/picocss/examples/tree/master/google-amp/

  // When the button is clicked, inject setPageBackgroundColor into current page
  downloadButton.addEventListener("click", downloadRepository);

  openButton.addEventListener("click", openRepository);
  if (document.getElementsByClassName("file-navigation").length) {
    document
      .getElementsByClassName("file-navigation")[0]
      .appendChild(downloadButton);
    document
      .getElementsByClassName("file-navigation")[0]
      .appendChild(openButton);
  }
}
