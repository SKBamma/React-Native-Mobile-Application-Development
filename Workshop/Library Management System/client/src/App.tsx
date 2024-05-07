import { useEffect, useState } from "react";
import axios from "axios";

import { IAuthor, IBook } from "./types/types";
import { GlobalContext } from "./contex/context";
import { routers } from '../src/routes/routes';
import { RouterProvider } from "react-router-dom";

export function Library() {
  const [books, setBooks] = useState<IBook[]>([]);
  const [authors, setAuthors] = useState<IAuthor[]>([]);

  const fetchBooks = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/books`);
      if (res.status === 200) {
        setBooks(res.data);
      }
    } catch (error) {
      alert("Unable to fetch booklist");
    }
  };

  const fetchAuthors = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/authors`);
      if (res.status === 200) {
        setAuthors(res.data);
      }
    } catch (error) {
      console.log("Unable to fetch authorlist");
    }
  };

  useEffect(() => {
    fetchBooks();
    fetchAuthors();
  }, []);


  return (

    <GlobalContext.Provider value={{ books, setBooks, authors, setAuthors }}>

      <RouterProvider router={routers} />

    </GlobalContext.Provider>

  );
}


