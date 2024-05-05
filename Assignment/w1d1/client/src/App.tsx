import { useEffect, useState } from "react";
import axios from "axios";

import { useRoutes } from "react-router-dom";
import { IBOOK } from "./types/types";
import { GlobalContex } from "./components/contex/contex";
import routes from '../src/routes/routes';


export function BookSystem() {
  const [books, setBooks] = useState<IBOOK[]>([]);
  const element = useRoutes(routes);

  const fetchBooks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/books');

      if (res.status === 200) {
        setBooks(res.data);
      }
    } catch (error) {
      console.log("unable to fetch books!");
    }
  };


  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div >

      <GlobalContex.Provider value={{ books, setBooks }}>
        {element}

      </GlobalContex.Provider>

    </div>
  );
}


