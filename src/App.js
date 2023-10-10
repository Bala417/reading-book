import { useState } from "react";
import AddBook from "./Component/AddBook";
import BookList from "./Component/BookList";

function App() {
  const [readingBook, setReadingBook] = useState([]);

  return (
    <div className="App">
      <div className="addBook">
        <AddBook readingBook={readingBook} setReadingBook={setReadingBook} />
      </div>

      <div>
        <BookList readingBook={readingBook} setReadingBook={setReadingBook} />
      </div>
    </div>
  );
}

export default App;
