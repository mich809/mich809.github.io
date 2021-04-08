function saveText() {
  const storedText = document.getElementById("log").value;
  const storedTitle = document.getElementById("title").value;
  localStorage.setItem("log", storedText);
  localStorage.setItem("title", storedTitle);
}

function restoreForm() {
  document.getElementById("log").value = localStorage.getItem("log");
  document.getElementById("title").value = localStorage.getItem("title");
}

function clearStorage() {
  localStorage.clear();
}
