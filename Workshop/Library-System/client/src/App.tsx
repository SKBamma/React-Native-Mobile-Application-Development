import { useEffect, useState } from "react";

import Addbook from "./component/addbook";
import { GlobalContext } from "./component/context";
import { Book } from "./types/types";
import BookList from "./component/booklist";
import { getBooks } from "./apis/services/book.author.services";


function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    try {
      const res = await getBooks();
      if (res.status === 200) {
        setBooks(res.data);
      }
    } catch (error) {
      console.log("Unbale to fetch books");
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="App">
      <h3>Library Management System</h3>
      <GlobalContext.Provider value={{ books, setBooks }}>
        <Addbook />
        <BookList />
      </GlobalContext.Provider>

    </div>
  );
}

export default App;
