function getBookTemplate(bookindex) {
  return `<section id="book-box" class="book_box">
      <h2>${books[bookindex].name}</h2>
      <h4 id="price" class="price">${books[bookindex].price.toFixed(2)} €</h4>
      <div id="image-container" class="image_container">
        <img
          src="./assets/img/${books[bookindex].isbn}.png"
          alt="Buchcover von ${books[bookindex].name}"
        />
      </div>

      <table id="book-details" class="book_details">
        <tr>
          <th>AUTHOR</th>
          <td>${books[bookindex].author}</td>
        </tr>

        <tr>
          <th>YEAR</th>
          <td>${books[bookindex].publishedYear}</td>
        </tr>

        <tr>
          <th>GENRE</th>
          <td>${books[bookindex].genre}</td>
        </tr>
      </table>

      <div class="comment-section">
        <h3>Comments</h3>

        <div class="comment_scroll">
          <table id="comment-table-${bookindex}" class="comment_table">
          </table>
        </div>
        <div class="comment_wrapper">
          <input
            type="text"
            placeholder="write a comment"
            name="CommentInput"
            id="comment-input-${bookindex}"
            class="comment_input"
          />
        <button id="send-comment-${bookindex}" class="send_comment" onclick="sendComment(${bookindex})">
          <img src="./assets/icon/send2.svg" alt="send-button" />
        </button>
        </div>
      </div>
    </section>
    `;
}
