function saveText() {
  const storedText = document.getElementById("log").value;
  const storedTitle = document.getElementById("title").value;
  window.localStorage.setItem("log", storedText);
  window.localStorage.setItem("title", storedTitle);
}

function restoreForm() {
  document.getElementById("log").value = window.localStorage.getItem("log");
  document.getElementById("title").value = window.localStorage.getItem("title");
}

function clearStorage() {
  window.localStorage.clear();
}
