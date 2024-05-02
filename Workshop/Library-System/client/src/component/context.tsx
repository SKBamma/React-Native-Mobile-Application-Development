import { createContext } from "react";
import { Book } from "../types/types";
type GContext = {
    books: Book[],
    setBooks: (updateBook: Book[]) => void;
};

export const GlobalContext = createContext<GContext>(
    {
        books: [],
        setBooks: () => { }
    }
);