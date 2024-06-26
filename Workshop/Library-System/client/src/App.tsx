import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { GlobalContext } from "./component/context";
import { Author, Book } from "./types/types";
import { getAuthors, getBooks } from "./apis/services/book.author.services";

import routes from '../src/routes/routes';

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);

  const element = useRoutes(routes);

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

  const fetchAuthors = async () => {
    try {
      const res = await getAuthors();
      if (res.status === 200) {
        setAuthors(res.data);
      }
    } catch (error) {
      console.log("Unable to mount authors!!");
    }
  };

  useEffect(() => {
    fetchBooks();
    fetchAuthors();
  }, []);

  return (
    <div className="App">
      <h3>Library Management System</h3>
      <GlobalContext.Provider value={{ books, setBooks, authors, setAuthors }}>
        {/* <Addbook />
        <BookList />
        <AddAuthor />
        <Authorlist /> */}
        {element}
      </GlobalContext.Provider>

    </div>
  );
}

export default App;
