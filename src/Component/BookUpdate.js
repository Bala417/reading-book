import React, { useState } from "react";

function BookUpdate({ book, id, readingBook, setReadingBook, open, setOpen }) {
  const [updatedBook, setUpdatedBook] = useState(book);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateBook = readingBook.map((item) => {
      setOpen(!open);
      if (id === item.id) {
        return { ...item, book: updatedBook };
      } else return item;
    });
    setReadingBook(updateBook);
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          <input
            value={updatedBook}
            onChange={(e) => setUpdatedBook(e.target.value)}
          />
        </label>
        <button type="submit">update</button>
      </form>
    </div>
  );
}

export default BookUpdate;
