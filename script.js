let comments = [];

function init() {
  initComments();
  getFromLocalStorage();
  renderBooks();
  renderAllComments();
}

function initComments() {
  for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
    comments[bookIndex] = [];
  }
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
  let randomNumber = Math.floor(Math.random() * 1000);
  comments[bookindex].unshift({
    name: "Reader" + randomNumber,
    text: inputRef.value,
  });
  inputRef.value = "";
  saveToLocalStorage();
  renderComments(bookindex);
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
        <th>${comments[bookindex][commentindex].name}</th>
        <td>${comments[bookindex][commentindex].text}</td>
      </tr>`;
  }
}

function saveToLocalStorage() {
  localStorage.setItem("comments", JSON.stringify(comments));
}

function getFromLocalStorage() {
  let allComments = JSON.parse(localStorage.getItem("comments"));
  if (!allComments) return;
  for (let bookindex = 0; bookindex < books.length; bookindex++) {
    comments[bookindex] = allComments[bookindex] || [];
  }
}

function renderAllComments() {
  for (let bookindex = 0; bookindex < books.length; bookindex++) {
    renderComments(bookindex);
  }
}

let liked = false;

function activateLike(bookindex) {
  let heart = document.getElementById(`like-heart-${bookindex}`);
  let count = document.getElementById(`like-count-${bookindex}`);

  if (books[bookindex].liked == false) {
    heart.src = "./assets/icon/heart2.svg";
    books[bookindex].liked = true;
    books[bookindex].likes++;
  } else {
    heart.src = "./assets/icon/heart1.svg";
    books[bookindex].liked = false;
    books[bookindex].likes--;
  }

  count.innerHTML = books[bookindex].likes;
}
