function getBookTemplate(bookindex) {
  return `<section class="book_box">
      <h2>${books[bookindex].name}</h2> 
          
      <h4 class="price">${books[bookindex].price.toFixed(2)} €</h4>
      <div class="image_container">
        <button
          class="like-button"
          onclick="activateLike(${bookindex})">
            <img
              id="like-heart-${bookindex}"
              src="./assets/icon/heart1.svg"
              alt="Like Button inactive"/>
        </button>
        <p id="like-count-${bookindex}" class="like-count">${books[bookindex].likes}</p>
        <img
          src="./assets/img/${books[bookindex].isbn}.png"
          alt="Buchcover von ${books[bookindex].name}"
        />
      </div>

      <table class="book_details">
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

        <div class="comment_scroll" tabindex="0" aria-label="Comments on the book ${books[bookindex].name}">
          <table id="comment-table-${bookindex}" class="comment_table">
          </table>
        </div>
        <div class="comment_wrapper">
          <input
            type="text"
            placeholder="write a comment"
            aria-label="Write a comment on ${books[bookindex].name}"
            name="CommentInput"
            id="comment-input-${bookindex}"
            class="comment_input"
          />
        <button id="send-comment-${bookindex}" class="send_comment" onclick="sendComment(${bookindex})">
          <img src="./assets/icon/send2.svg" alt="send comment" />
        </button>
        </div>
      </div>
    </section>
    `;
}
