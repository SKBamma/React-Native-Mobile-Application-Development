import { createContext } from "react";
import { Author, Book } from "../types/types";
type GContext = {
    books: Book[],
    setBooks: (updateBook: Book[]) => void;
    authors: Author[],
    setAuthors: (updatedAuthor: Author[]) => void;
};

export const GlobalContext = createContext<GContext>(
    {
        books: [],
        setBooks: () => { },
        authors: [],
        setAuthors: () => { }
    }
);