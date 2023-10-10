import React, { useState } from "react";
import BookUpdate from "./BookUpdate";

function BookItem({ book, id, readingBook, setReadingBook }) {
  const [open, setOpen] = useState(false);
  const handleDelete = () => {
    const delBook = readingBook.filter((item) => {
      return id !== item.id;
    });
    console.log(delBook);
    setReadingBook(delBook);
  };

  return (
    <div className="item" key={id}>
      <div className="container">
        <img src={`https://picsum.photos/seed/${id}/200/200`} />
        <h1>{book}</h1>

        <button onClick={handleDelete}>delete</button>

        <button onClick={() => setOpen(!open)}>Edit</button>

        {open && (
          <BookUpdate
            id={id}
            book={book}
            readingBook={readingBook}
            setReadingBook={setReadingBook}
            open={open}
            setOpen={setOpen}
          />
        )}
      </div>
    </div>
  );
}

export default BookItem;
