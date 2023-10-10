import React from "react";
import BookItem from "./BookItem";
function BookList({ readingBook, setReadingBook }) {
  return (
    <div className="booklist">
      {readingBook.map((item) => {
        return (
          <div key={item.id}>
            <BookItem
              id={item.id}
              book={item.book}
              readingBook={readingBook}
              setReadingBook={setReadingBook}
            />
          </div>
        );
      })}
    </div>
  );
}

export default BookList;
