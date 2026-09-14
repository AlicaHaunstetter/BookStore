function init() {
  renderBooks();
}

function renderBooks() {
  let content = document.getElementById("main");
  content.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    content.innerHTML += getBookTemplate(i);
  }
}
