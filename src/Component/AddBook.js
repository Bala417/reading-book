import React from "react";
import { useState } from "react";

function AddBook({ readingBook, setReadingBook }) {
  const [book, setBook] = useState("");

  const randomId = crypto.randomUUID();

  const handleAddBook = (e) => {
    e.preventDefault();
    const updatedBook = [...readingBook, { id: randomId, book }];
    setReadingBook(updatedBook);
    setBook("");
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={(e) => handleAddBook(e)}>
          <h1>Add Book</h1>
          <label htmlFor="addbook">
            <input
              id="addbook"
              value={book}
              onChange={(e) => setBook(e.target.value)}
            />

            <button type="submit">Add</button>
          </label>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
