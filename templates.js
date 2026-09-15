function getBookTemplate(index) {
  return `<section id="book-box" class="book_box">
      <h2>${books[index].name}</h2>
      <h4 id="price" class="price">${books[index].price.toFixed(2)} €</h4>
      <div id="image-container" class="image_container">
        <img
          src="./assets/img/${books[index].isbn}.png"
          alt="Buchcover von ${books[index].name}"
        />
      </div>

      <table id="book-details" class="book_details">
        <tr>
          <th>AUTHOR</th>
          <td>${books[index].author}</td>
        </tr>

        <tr>
          <th>YEAR</th>
          <td>${books[index].publishedYear}</td>
        </tr>

        <tr>
          <th>GENRE</th>
          <td>${books[index].genre}</td>
        </tr>
      </table>

      <div class="comment-section">
        <h3>Comments</h3>

        <div class="comment_scroll">
          <table id="comment-table" class="comment_table">
            <tr>
              <th>Leser123</th>
              <td>pls don't spoiler</td>
            </tr>

            <tr>
              <th>Leser123</th>
              <td>my fav book cover x3</td>
            </tr>
            <tr>
              <th>Leser123</th>
              <td>pls don't spoiler</td>
            </tr>

            <tr>
              <th>Leser123</th>
              <td>my fav book cover x3</td>
            </tr>
            <tr>
              <th>Leser123</th>
              <td>pls don't spoiler</td>
            </tr>

            <tr>
              <th>Leser123</th>
              <td>my fav book cover x3</td>
            </tr>
            <tr>
              <th>Leser123</th>
              <td>pls don't spoiler</td>
            </tr>

            <tr>
              <th>Leser123</th>
              <td>my fav book cover x3</td>
            </tr>
            <tr>
              <th>Leser123</th>
              <td>pls don't spoiler</td>
            </tr>

            <tr>
              <th>Leser123</th>
              <td>my fav book cover x3</td>
            </tr>
          </table>
        </div>
        <div class="comment_wrapper">
          <input
            type="text"
            placeholder="write a comment"
            name="CommentInput"
            id="comment-input"
            class="comment_input"
          />
        <button id="send-comment" class="send_comment" onclick="sendComment()">
          <img src="./assets/icon/send2.svg" alt="send-button" />
        </button>
        </div>
      </div>
    </section>
    `;
}
