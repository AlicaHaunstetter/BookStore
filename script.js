let comments = [];

function init() {
  for (let bookindex = 0; bookindex < books.length; bookindex++) {
    comments[bookindex] = [];
  }
  renderBooks();
}

function renderBooks() {
  let content = document.getElementById("main");
  content.innerHTML = "";
  for (let bookindex = 0; bookindex < books.length; bookindex++) {
    content.innerHTML += getBookTemplate(bookindex);
  }
}

function sendComment(bookindex) {
  let inputRef = document.getElementById(`comment-input-${bookindex}`);
  if (inputRef.value != "") {
    comments[bookindex].push(inputRef.value);
    inputRef.value = "";
    renderComments(bookindex);
  }
}

function renderComments(bookindex) {
  let content = document.getElementById(`comment-table-${bookindex}`);
  content.innerHTML = "";
  for (
    let commentindex = 0;
    commentindex < comments[bookindex].length;
    commentindex++
  ) {
    content.innerHTML += `
           <tr>
              <th>Leser123</th>
              <td>${comments[bookindex][commentindex]}</td>
            </tr>`;
  }
}
