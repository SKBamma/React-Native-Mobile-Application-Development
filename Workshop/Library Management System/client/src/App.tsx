import { useEffect, useState } from "react";
import axios from "axios";

import Addbook from "./components/Book/addbook";
import { IBook } from "./types/types";
import { GlobalContext } from "./contex/context";
import Booklist from "./components/Book/booklist";

import { routers } from '../src/routes/routes';
import { RouterProvider } from "react-router-dom";

export function Library() {
  const [books, setBooks] = useState<IBook[]>([]);

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


  useEffect(() => {
    fetchBooks();
  }, []);


  return (

    <GlobalContext.Provider value={{ books, setBooks }}>

      <RouterProvider router={routers} />

    </GlobalContext.Provider>

  );
}


