function getBookTemplate(index) {
  return `<section id="book-box" class="book_box">
      <h2>Harry Potter and the Chamber of Secrets</h2>
      <h4 id="price" class="price">19,99 €</h4>
      <div id="image-container" class="image_container">
        <img
          src="./assets/img/Harry-Potter-JK-Rowling.png"
          alt="Harry Potter and the Chamber of Secrets by JK Rowling"
        />
      </div>

      <table id="book-details" class="book_details">
        <tr>
          <th>AUTHOR</th>
          <td>J.K. Rowling</td>
        </tr>

        <tr>
          <th>YEAR</th>
          <td>1998</td>
        </tr>

        <tr>
          <th>GENRE</th>
          <td>Fantasy</td>
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
          <button id="send-comment" class="send_comment">
            <img src="./assets/icon/send2.svg" alt="send-button" />
          </button>
        </div>
      </div>
    </section>
    `;
}
